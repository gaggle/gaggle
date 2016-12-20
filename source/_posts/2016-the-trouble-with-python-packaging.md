---
title: The Trouble with Python Packaging
date: 2016-12-19 00:47:09
---
I’ve long wished Python allowed easier handling of multiple projects and their dependencies.
You know how you create a folder, fill it with code, and want to share it with others?
Or maybe it's a library to pull into your application as a dependency,
instead of making one huge monolithic product?
Python has `virtualenv` and `pip` for this,
`virtualenv` for creating isolated environments
and `pip` for downloading and managing dependencies.
But they are not easy to learn, nor easy to use daily,
and I dream of a better alternative.

<!-- more -->

Before I go on though,
I want to state how grateful I am that `virtualenv` and `pip` exists at all.
They represent countless hours of development
and are good pragmatic solutions written by people much, much smarter than me.

During the writing of this blog its dawned on me that I'm probably missing some insights
that explain why our tools work the way they do.
If you can help fill in these blanks I’m all ears.

# The problem
So what is it I’m complaining about?
There are 3 distinctly troubled areas to go through:

## virtual*wha*??
{% pullquote right %}
What if I just don't use them?
{% endpullquote %}

To start a Python project today you must first create a new `virtualenv`, but what is that?
After reading about it we learn it's a way to isolate my Python environment,
but what does *that* mean?

At first glance a `virtualenv` is this thing that puts my terminal in a different state,
and if I don't activate it nothing works.
And I have to keep activating it everytime I open a terminal?

{% asset_img venv-activate.gif %}

What if I just don't use them?
Then all my dependencies go to my system's Python folder
and cause a mess for other projects I work on...
But hang on, what if I **forget** to activate it then? How do I even clean up the resulting mess?

`virtualenv` is a brittle platform to learn from
because any missteps send me tumbling down rabbit holes of googling for solutions,
and even after having learnt it it's an annoying ceremony of activating/deactivating them each time I swap projects.

## pip?
That's one part of the problem, but specifying dependencies is a whole thing too.
`pip` is how we install dependencies
and specify which libraries we rely on so that others can use **our** code.
And it's almost good, but manages to snatch defeat from the jaws of victory.

All it takes to install a dependency is `pip install [name]` which is just perfect.
But then I go store the list of dependencies with `pip freeze`
and hang on why am I seeing transient dependencies??

E.g. let's say I want to use the `twisted` library:
```
(venv) python-virtualenv-experiment $ pip install twisted
(venv) python-virtualenv-experiment $ pip freeze > requirements.txt
(venv) python-virtualenv-experiment $ cat requirements.txt
constantly==15.1.0
incremental==16.10.1
Twisted==16.6.0
zope.interface==4.3.3
```
Why am I now responsible for `constantly`, `incremental`, and `zope`??
What do I do now? Delete those entries from the file?
Sure, but next time I add a dependency and re-freeze they'll be back. Gah!

## Configuration
{% pullquote right %}
Python provides no solution for managing the configuration and use of a project.
{% endpullquote %}
After all that's said and done
we want to make it easy for others to use our project,
i.e. they should download our code and easily get up and running.

To ease the process of installing dependencies,
running tests,
and starting the application we use... nothing.
There's no built-in solution for this.
Python, for all its "batteries included” experience,
provides no solution for managing the configuration and use of a project.

Let's say you've pulled a repository to help fix an issue,
what do you do then? Where do you start? How do you run its tests?
Maybe there's a makefile, or .bat file, or who knows!?,
it's going to be different for every project so you better read up on their documentation.
And hopefully the developers made their process compatible with your OS...

# A new approach
These annoyances add up to make it much more difficult than necessary
to get started with and continue to use Python.
It's a constant drain on productivity to continuously require activations of environments,
managing dependencies,
and remembering how individual projects are configured.

What if instead we had a tool that's easy to learn,
that simplifies the management and installation of dependencies,
and allows everyone to get started immediately?

This tool already exists,
I came across it in the JavaScript community where it's used to great success.
This whole article really boils down a simple dream: I want `pip` to be like JavaScript's `npm`.

## npm
{% pullquote right %}
Let me say that again, **no dependencies are installed to any global folder by default**.
{% endpullquote %}

If you're unfamiliar with `npm` it's the JavaScript package manager,
a command line interface tool to download JavaScript modules.
It exactly mirrors the role of our `pip`,
but crucially provides a well-rounded set of functionality
that dramatically lowers friction of dependency- and project-management compared to Python.

`npm` forms the backbone of the JavaScript ecosystem by making it easy to start new projects,
jump in and improve existing projects,
specify and maintain dependencies, and allowing the running of tests and other related scripts.

It also does a lot more that's unrelated to this article,
but despite having a broad set of functionality it manages to be very easy to learn.
I think because of these three reasons:

* Dependencies are always installed with a simple `npm install` command,
  which makes it trivial to get started.
  That's the **only** command a new user has to learn to jump into JavaScript code.

* Dependencies and all other configuration data is always stored in a `package.json` data file,
  every JS developer quickly learns to read this file
  and it specifies with simple clarity exactly which commands are available to run
  and which direct dependencies the project has:
  ```
  js-experiment $ cat package.json
  {
    ...
    "scripts": {
      "test": "karma start"
    },
    "dependencies": {
      "express": "^4.14.0"
    }
  }
  ```
* And perhaps most importantly,
  dependencies are stored in folder next to the `package.json` file.
  Let me say that again, **no dependencies are installed to any global folder by default**!

Together the result is an easy-to-learn system
because the only command to learn initially is `npm install`.
With that you can install dependencies and explore existing libraries,
and because it always installs to a local folder
there's never a sense of “*Oh crap where did all my dependencies just go? What mess did I just create?*”.
Just delete the folder and start over.

{% pullquote right %}
It's actually *difficult* to do the wrong thing with this tool!
{% endpullquote %}

Is it heretical to suggest changing where Python stores modules?
It's this change that makes `virtualenv` superfluous,
because now any folder with a `package.json` file is inherently isolated.
And the massive benefit is how safe it becomes to experiment and learn,
because cause and effects are clear
and a reset is only a deleted folder away.

And BTW, when adding new dependencies (i.e. `npm install express`)
the command can **automatically** update the .json file.
It's actually *difficult* to do the wrong thing with this tool!
This feeling of safety makes it fun to learn.

And finally `npm` exposes a way to run custom scripts,
with two named hooks explicitly exposed at the top-level: `npm test` and `npm start`.
Everyone configures those scripts to respectively run tests and start the package's code,
and it's the final piece that allows for this ecosystem to be easy to learn.
It means there are just two commands to be able to jump right into most JavaScript projects:

```
$ npm install
$ npm test
```

So simple.

`npm` also supports running arbitrary scripts ala `npm run [name]`,
so it provides this great integrated solution for easily running all manner of scripts
like deploying, generating documentation, or anything at all really.

# In conclusion
There's more to `npm` than described here
(just one example is an incredibly nice `npm init` flow that scaffolds a new `package.json` by asking the user a short set of questions),
but today is just to focus on the core elements that makes Python's project management a burden when JavaScript is easy.

In all the above examples I wish `pip` worked just like `npm`,
I wish I could `pip install selenium` and see it appear as a dependency in `package.json`,
I wish I could rely on the conventions of `pip install; pip test` to get started on other people's code,
and I wish I could configure my own module's `package.json` to make it easy for others to join in.

I dream that these changes are less drastic than they sound,
but the truth is I lack the insight to understand the ramifications of what I'm suggesting.
If you have arguments for supporting or rejecting these thoughts I'd love to hear them!,
I'm always striving to get closer to Python enlightenment and all feedback furthers that journey.
