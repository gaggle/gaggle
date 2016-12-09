---
title: End-to-end Testing with WebdriverIO + Sauce Labs
date: 2016-12-08 23:17:21
---
After writing an article on [Selenium testing with Ruby, JS, and Python][ui-article] I needed to make it available somewhere,
and decided to host it from my own site.
But that meant adding new functionality,
and surely I’d want to test that functionality
given the topic I’m writing about!

However my site's backend is JavaScript
and I wasn't so fond of the JS framework for testing, so what to do?

<!-- more -->

Well,
with great timing [Kevin Lamping][klamping] happened to tweet about how nice [WebdriverIO][webdriverio] is,
so I went to give it a try since I had passed it over in my previous article.

<blockquote class="twitter-tweet" data-conversation="none" data-lang="en"><p lang="en" dir="ltr"><a href="https://twitter.com/jonlauridsen">@jonlauridsen</a> you&#39;ve got to check <a href="https://twitter.com/webdriverio">@webdriverio</a> out. simplifies so many things</p>&mdash; Kevin Lamping (@klamping) <a href="https://twitter.com/klamping/status/800756403057082368">November 21, 2016</a></blockquote> <script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

I ended up using WebdriverIO as part of my fully automated deployment process,
by combining the continuous integration service [Travis][travis]
and multi-browser testing service [Sauce Labs][saucelabs].
With this article we'll go through the details of setting it all up.

# Not so fast
I did actually try WebdriverIO for my previous article,
but it threw errors during `npm install`
which left a bad taste so I gave it a pass.
That was a shame though,
because it turns out WebdriverIO is a great framework.

What actually went wrong is that a dependency of `webdriverio` needs to be compiled if you’re on Node 7,
and **it** can’t be compiled with Python 3 which happens to be my system default.
In hindsight it's a simple fix (activate Python 2.7 for this project's folder via [`pyenv`][pyenv]),
but it took a bit of work to figure out that this was the issue.

Travis fails to install the library for the same reason,
and configuring Travis to build the library proved difficult.
I actually gave up on this part and instead specified Node 6 for Travis' configuration...
I'm unlikely to hit critical version differences
and hopefully no-one gets hurt from this subpar solution :)

# WebdriverIO
Thankfully once it's installed it works great.
WebdriverIO has a nice predictable DSL that results in simple and very readable page objects and tests:

{% gist gaggle/01d9b9f6f71a31789d03a5f8a656481d %}
{% gist gaggle/a4a822ec5bea81a992157f77c9d628d6 %}

That's all it took to get going with local <abbr title="End-to-end">E2E</abbr> tests,
really quite painless.

So, that's the hard part done, right?

Not quite.

# Travis & Sauce Labs
UI tests need to run across multiple real browsers,
because only by running on browsers really used by customers can we know that things **actually** work.
But I don't want to install and maintain a mess of browsers myself,
so we turn to services like [Sauce Labs][saucelabs].

It took me a whole day getting all this working
but hopefully this article will get you going quickly.
There are basically three critical pieces of configuration to be aware of for success:

* **Correctly specify which browsers Sauce Labs should run**
* **Ensure Sauce Labs browsers can see your site**
* **Configure WebdriverIO to use Sauce Labs**

First the basics though:
Sauce Labs' credentials must be added to Travis,
this is done via Travis' [encrypted environment variables][travis-encrypt-env] system.
Then we must host the site from Travis' <abbr title="Virtual machine">VM</abbr>
(in my case that means running my site generator's server),
and set Travis to use "Sauce Connect"
(a secure tunnel that lets Sauce Labs visit locally hosted sites).

These are pretty simple steps to set up,
you can see [`travis.yml`][travisyml] for these settings.

## Browsers
Next we need to specify which browsers Sauce Labs should use to run our tests.
WebdriverIO specifies a browser like this:

{% codeblock lang:json %}
{
  "safari-os-x-10.11-latest": {
    "base": "SauceLabs",
    "browserName": "safari",
    "name": "ui-safari-os-x-10.11-latest",
    "platform": "OS X 10.11",
    "version": "latest",
    "tunnel-identifier": [process.env.TRAVIS_JOB_NUMBER],
    "build": [process.env.TRAVIS_BUILD_NUMBER]
  }
}
{% endcodeblock %}

But note how the key and `name` is duplicated and is a concatenation of the other data,
and `base` and some other fields are just static data.
It quickly becomes an inflexible mess to specify multiple browsers like this,
it's more maintainable to <abbr title="Don't repeat yourself">DRY</abbr> it up
by **generating** the data WebdriverIO expects.
It's not so important how that's done
as long as we boil down our browser data to just the relevant bits.
Here's the minimum configuration data I settled on:

{% gistit gaggle gaggle blob/286d6bf4ddd9c1047b4433227acde0bdcff4161a/saucelabs-browsers.js 3:8 %}

(You can [see the full file][saucelabs-browsers.js] for how I generate the entire data structure)

## Enable Sauce Labs
Then WebdriverIO needs to be configured to use Sauce Labs.
This boils down to configuring `wdio.conf.js`,
but doing so without **requiring** Sauce Labs
because then we'd lose the ability to run the tests locally.

It comes down to changing a handful of variables
depending on if Sauce Labs is present or not. Here's how I did it:
{% gistit gaggle gaggle blob/master/wdio.conf.js 1:16 %}

With all that in place Travis now runs the tests per pull-request,
pretty sweet!

{% blockquote GitHub https://github.com/gaggle/gaggle/pull/41 Pull-request 41 with automated tests passing %}
{% asset_img github-pr-checks-passed.png "Pull-request 41 with automated tests passing" %}
{% endblockquote %}

## Stability
At this point I recommend investing some time to be certain the tests are stable.
I made sure to work on a number of small incremental features,
each going into open pull-requests that I updated frequently.
This was to stress-test the UI tests against flakiness,
because having flaky tests is almost worse than no tests at all.

I also purposefully started with completely simple tests,
that way I could stress-test the process itself instead of having to debug the tests.
Thankfully the setup runs very stable, the tests basically always run correctly.

Wait, "*basically*"?

Yeah...

{% blockquote SauceLabs https://saucelabs.com/beta/builds/474a9716d17f46be9a31dd090cda9766 One test failed randomly %}
{% asset_img saucelabs-almost-all-passing.png "One test failed randomly" %}
{% endblockquote %}

That one red entry is where Microsoft Edge failed to start for no apparent reason,
and the only action I took was to manually re-invoke the Travis job.
That made everything pass just fine.
There are unfortunately so many moving parts glued together here
that invariably something fails.
Maybe a setting can be tweaked to help against this,
but for now it happens so rarely it's not a real impediment.

It sure is annoying though!

# In the end
So what’s the point of all this effort?

Well first of all it's just fantastic seeing a pull-request marked green
knowing the site has just been tested on multiple real browsers.
It gives confidence that the code coming in isn't totally ruining the product.

Another huge benefit is that we can visually inspect how the tests ran,
Sauce Labs captures screenshots of all the states
and we can play them back step by step.

{% blockquote Sauce Labs https://saucelabs.com/beta/tests/4cc3effb11aa4cd8b04b4e8cb303ae1c/commands?enabledFilters=hasScreenshot#3 Build 431 ui-safari-os-x-10-11-latest %}
{% asset_img saucelabs-screenshot-431-ui-safari-os-x-10-11-latest.png "Sauce Labs testing a page" %}
{% endblockquote %}

It's very powerful to flip through the various screenshots to quickly do visual inspection.

As a side bonus we also get this nice badge to proudly display:

{% blockquote SauceLabs, Badge of browsers passing our tests %}
{% asset_img saucelabs-badge.svg %}
{% endblockquote %}

# Conclusion
Ultimately WebdriverIO and Sauce Labs are pleasant to work with,
despite taking a whole day to set up.
At least once it all works it works very nicely.

It's a huge joy to have this completely automated continuous integration/deployment process,
and it's already caught a couple dumb mistakes I was about to merge to master.

Special thanks to Travis and Sauce Labs for providing free tiers of their services,
it's frankly unbelievable to have free access to professional-grade CI and cross-platform browser testing.

If you have any comments or questions [I'd love to hear them][twitter],
and [all the code is freely available][gagglerepo] if you'd like to play around yourself.

[klamping]: http://www.kevinlamping.com

[webdriverio]: http://webdriver.io

[saucelabs]: https://saucelabs.com
[sauceconnect]: https://wiki.saucelabs.com/display/DOCS/Sauce+Connect+Proxy
[saucelabs-browsers.js]: https://github.com/gaggle/gaggle/blob/286d6bf4ddd9c1047b4433227acde0bdcff4161a/saucelabs-browsers.js
[saucelabs-run]: https://saucelabs.com/beta/tests/4cc3effb11aa4cd8b04b4e8cb303ae1c/commands?enabledFilters=hasScreenshot#3

[travis]: http://travis-ci.org
[travisyml]: https://github.com/gaggle/gaggle/blob/286d6bf4ddd9c1047b4433227acde0bdcff4161a/.travis.yml
[travis-encrypt-env]: https://docs.travis-ci.com/user/environment-variables/#Defining-encrypted-variables-in-.travis.yml

[pyenv]: https://github.com/yyuu/pyenv

[ui-article]: /blog/2016/selenium-testing-with-ruby-javascript-and-python/
[gagglerepo]: https://github.com/gaggle/gaggle
[twitter]: https://twitter.com/jonlauridsen
