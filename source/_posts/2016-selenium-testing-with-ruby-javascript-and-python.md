---
title: Selenium Testing with Ruby, JS, and Python
date: 2016-10-27 00:15:51
---
UI tests, E2E tests, acceptance tests,
I don't care what we call them
but today we're going to take a practical look at writing tests
that uses a real browser to find & click on elements.

<!-- more -->

# Introduction
We'll cover the basics of getting started with UI testing,
and then write a test that really interacts with a web page.
I want to do this in Ruby, JavaScript, and Python,
to compare and contrast the differences of each language
and get a better understanding of the Selenium landscape.
My choices will invariably fall short for some,
but if you feel I missed something important let me know.

[Selenium][selenium] is the *de facto* browser automation solution,
but it isn't always easy to work with.
What we need is a representative automation challenge
that exercises areas of Selenium that can be tricky to work with,
but without being so complex that this blog needs to be a book.
Here is the automation challenge I've come up with:

* Open a Chrome browser in Incognito mode.
* Go to [https://the-internet.herokuapp.com/dynamic_loading/2][the-internet].
* Click the `start` button.
* Assert that the `Hello World` element is present.
* And do this using the [Page Object][page-object] pattern,
because testing always requires a great deal of complexity management.

By requiring Chrome in Incognito mode we must configure the webdriver to pass proper arguments,
a small but classic hurdle to overcome.
And the “dynamic loading” example on `the-internet` deals with having to wait for an element,
which can be a tricky scenario.
And using Page Objects forces us to deal with abstractions,
even if they're overkill for this specific challenge.

# Basics
First lets solve the basics, can we open a webpage at all?
Roughly speaking we need to configure a test runner,
a test framework,
and a Selenium-backed framework for each of our projects,
and have a single command to execute tests.

### Ruby / WebDriver
As always Ruby is easy to work with, these are the steps to get started:

* Install [`capybara`][capybara] (test framework),
[`rspec`][rspec] (test runner)
and [`selenium-webdriver`][ruby-selenium-webdriver] dependencies.
* Copy-paste test example.
* Run `rspec spec` command.

And that's it, hard to see how it can be done simpler.

Here's a simple test that just opens Google:

{% gistit gaggle selenium-testing-across-languages blob/master/ruby-capybara/spec/simple_spec.rb %}

All in all pretty straightforward!

## JavaScript / WD
JavaScript is growing and there is much beauty in its vibrant community.
But that also means growing pains,
manifesting as multiple viable choices and version incompatibilities.
I settled on [`wd`][wd] since that worked out of the box,
but still struggled to put together a solution that just worked.
Where Ruby took minutes, this ended up taking more than an hour to complete the full exercise.

* Specify [`chai`][chai] + [`chai-as-promised`][chai-as-promised]
(assertion libraries),
[`mocha`][mocha] (test runner),
[`wd`][wd] (webdriver)
and [`selenium-standalone`][selenium-standalone] as dependencies.
* Hm, website doesn't have a simple example to copy,
but a lengthy file in their repo can be pruned down with a bit of effort.
* Hm, the Selenium standalone server must be started in one terminal window
and the tests in another...
* Add [`gulp`][gulp] (build tool) as dependency,
and have it run the server and tests simultaneously
so we don't have to juggle multiple terminal windows.
* Run `npm test`

It's not so bad once everything works,
but it sure took longer to get here than I'd like.
This is the simple test:

{% gistit gaggle selenium-testing-across-languages blob/master/js-wd/test/simple-specs.js %}

## Python / Selenium-py
As usual Python comes batteries included,
the only dependency is the Selenium framework itself.
Very nice!
Unfortunately we do have to deal with Python's cumbersome dependency system,
but that's an annoyance for another article.
Here are the steps:

* Create and activate a "virtualenv"
(a concept of isolating from your global Python installation
so your dependencies are confined to the project's directory.
It's a boring technicality).
* Install [`selenium-py`][selenium-py] as a dependency
(and remember to manually pipe that dependency into a `requirements.txt` file, ZZzzz).
* Pretty much copy-paste example from website.
* Run `python -m unittest discover test`.
Jeez that's a mouthful, and it only works if the virtualenv is active...
* Create a `runtests.sh` script to automate those steps.
Too bad that won't work on Windows.

Well, that wasn't **too** terrible, and the test sure looks elegant:

{% gistit gaggle selenium-testing-across-languages blob/master/py-selenium/test/test_simple.py %}

# The Real Challenge
Now to turn the simple test into one that solves our challenge.

## Ruby / WebDriver
First lets extract configuration data to a separate file:
{% gistit gaggle selenium-testing-across-languages blob/master/ruby-capybara/spec/spec_helper.rb %}

And create a very simple page object,
thanks to Capybara's powerful DSL:
{% gistit gaggle selenium-testing-across-languages blob/master/ruby-capybara/spec/pages.rb %}

That leaves our challenge test, which is very minimal:
{% gistit gaggle selenium-testing-across-languages blob/master/ruby-capybara/spec/challenge_spec.rb %}

### JavaScript / WD
A nice side-effect of extracting configuration
is that we can also scoop out all that top-heavy module importing/glueing
that clutters the test:
{% gistit gaggle selenium-testing-across-languages blob/master/js-wd/test/conf.js %}

And all the selectors and other page-specific complexities go into the page object file:
{% gistit gaggle selenium-testing-across-languages blob/master/js-wd/test/pages.js %}

Which just leaves the test,
and despite the presence of some boilerplate the test itself is very minimal:
{% gistit gaggle selenium-testing-across-languages blob/master/js-wd/test/challenge-specs.js %}

### Python / Selenium-py
Once again we extract configuration and page object:
{% gistit gaggle selenium-testing-across-languages blob/master/py-selenium/test/conf.py %}
{% gistit gaggle selenium-testing-across-languages blob/master/py-selenium/test/pages.py %}

Resulting in a very clean test file:
{% gistit gaggle selenium-testing-across-languages blob/master/py-selenium/test/test_challenge.py %}

## In conclusion
So that's three different takes on UI tests.
If you have any comments or questions [I'd love to hear them][twitter],
and [all the code is available][repo] if you'd like to test these things out yourself.

The results of this fits my preconceived stereotypes of each language:
**Ruby** is easy to get started with and easy to use,
generally my first implementation would just work.
**Javascript** is a smorgasbord of choice and everything is amazingly decoupled,
but you have to glue it all together
and the result is more verbose than what I consider ideal.
And **Python** is actually very clean and easy to use,
but with a slight detracting complexity in configuring its environment
and I broke Windows compatibility.

For future reference here are my system versions:
```
$ ruby -v
ruby 2.3.0p0 (2015-12-25 revision 53290) [x86_64-darwin15]

$ npm version
{ npm: '4.0.1',
ares: '1.10.1-DEV',
http_parser: '2.7.0',
icu: '57.1',
modules: '51',
node: '7.0.0',
openssl: '1.0.2j',
uv: '1.9.1',
v8: '5.4.500.36',
zlib: '1.2.8' }

$ python --version
Python 3.5.2
```

[the-internet]: https://the-internet.herokuapp.com/dynamic_loading/2 "The Internet"
[page-object]: http://martinfowler.com/bliki/PageObject.html "PageObject"
[selenium]: http://docs.seleniumhq.org "Selenium - Web Browser Automation"
[repo]: https://github.com/gaggle/selenium-testing-across-languages "Selenium testing across languages"

[capybara]: http://teamcapybara.github.io/capybara/ "Capybara - Acceptance test framework for web applications"
[capybara-example]: https://github.com/teamcapybara/capybara#using-capybara-with-rspec "Capybara spec example"
[ruby-selenium-webdriver]: https://rubygems.org/gems/selenium-webdriver "WebDriver is a tool for writing automated tests of websites"
[rspec]: http://rspec.info "RSpec - Behaviour Driven Development for Ruby"

[chai]: http://chaijs.com "Chai Assertion Library"
[chai-as-promised]: https://github.com/domenic/chai-as-promised "Chai-as-promised - Extends Chai with assertions about promises"
[mocha]: https://mochajs.org "Mocha - the fun, simple, flexible JavaScript test framework"
[selenium-standalone]: https://www.npmjs.com/package/selenium-standalone "Selenium Standalone Server"
[wd]: http://admc.io/wd "WD - A node.js client for webdriver/selenium 2"
[wd-example]: https://github.com/admc/wd/blob/master/examples/promise/mocha-specs.js "WD spec example"
[gulp]: http://gulpjs.com "gulp.js - the streaming build system"

[selenium-py]: https://seleniumhq.github.io/selenium/docs/api/py/index.html "Selenium Client Driver"

[twitter]: https://twitter.com/jonlauridsen
