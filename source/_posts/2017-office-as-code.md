---
title: Office as Code
status: alpha
date: 2017-03-19 13:02:43
---
Once upon a time developers would finish code
and just chuck it over the wall to operations,
relying on them to deploy and maintain the system.
Then as *#devops* and *infrastructure-as-code* became popular
developers got to iterate on,
and take responsibility for,
all those important downstream concerns
that affect customers.

What about *upstream* concerns though?
Think of all the office-processes that shape the environment we work in,
they drive how efficient and happy we are in our daily work
but I've often found them difficult to change.
What would it look like if we applied some of the same thoughts to those factors?

<!-- more -->

# The problem
I've suggested changes to offices I've worked in,
but my efforts have regularly failed
because the office-processes weren't set up to accept changes.

For example:

* *What software comes pre-installed on new machines?*
Old or missing applications
are annoying to deal with again and again,
but to change the list
I would have had to persuade someone from IT
to go through a bothersome process
of updating an old image they restore from.
* *Which sodas are stocked in the fridge?*
I've had trouble just finding the person responsible,
and then they weren't open for suggestions
because they felt the current solution was good enough.
* *What should a new hire do to get started as quickly as possible?*
This is often a list somewhere,
but rarely is it up-to-date or even easy to follow.
I found most regulars had not read it since they started themselves.
* *What's the coding style?*
This too is often written down,
but how can I provide my feedback to promote best-practices?
I want to make a change-proposal that should be discussed
before forcing it on everyone.

I think the fundamental problem I encountered
is that many office-processes are rigid,
instead of being set up for iterative improvements.
A process that supports iterative improvements
should have a change-management structure that welcomes small, well-defined incremental steps,
where each successful step becomes the baseline that everyone adopts.
In contrast a process becomes rigid
when it's controlled by whoever happens to be doing it
and there is no system for improvement.

In those situations
it doesn't matter if you talk to the person directly,
email them,
or have a fancy ticketing system,
it all comes down to the same problem:
If they feel the current system works well enough
then your unsolicited suggestion is not worth implementing.
Their workflow may even be archaic and ineffective
so your "simple" suggestion could be complicated to implement.
And to play devil's advocate,
why *should* your suggestion be listened to?
How can you prove you speak for everyone your suggestion affects?

Rigid processes easily end up amplifying dysfunctions,
doing nothing to avoid those pitfalls.

## The Wiki
We need a quick detour into wikis before proceeding.
If a process is described in a wiki then that's good right?
I don't think so,
wikis really aren't fit for describing processes at all:

First,
it's rare a wiki page is the *source* of information,
most pages are the *output* of a decision
and whoever performs the task doesn't actually look at that page anymore
(and many pages thus grow totally inaccurate over time).
Editing a page like that will have little effect,
if no-one actually reads it why bother updating it?

And secondly
wiki edits go live immediately,
but that cuts out the critical discussion step.
Without discussion
changes will go in that some people are unaware of
or disagree with,
and so the change is not effective.

Thirdly,
it can be intimidating to alter someone's text
(especially as a new hire)
which further limits which suggestions you get.
A new hire is unlikely to suggest a radically different approach to a process,
even if they have a great idea to suggest.

# The solution
I'm looking for a way to solve for the following challenges:

* How do you *know* how well your current process works?
There should be room for discussion,
a platform with low barriers of entry that invites suggestions.
* How can you tell which are popular suggestions?
There should be an easy way for others to passively show support,
like a voting-system.
* How is the process optimized over time?
If a process can be done by anyone,
by following a series of steps,
then it will benefit from many more eyes on the process,
and the steps can be optimized over time.

That... actually sounds a lot like a *pull-request*,
doesn't it?
A pull-request is a safe space for changes of any size to be discussed
and broad consensus reached
*before* merging it in.
That means every interested party is kept up-to-date and in agreement,
and it vastly lowers the barrier of entry for suggesting changes
because a pull-request is just a request,
it's safe to suggest big changes
or come up with a rough outline
and hash out the details in public.
Pull-requests also invite remixing
when other people branch off your change to inject their suggestions.
And of course repositories exists within an ecosystem of tools and libraries
that facilitate powerful automation.

## Everything's a repository
So let's try an experiment,
can we take our examples from before
and somehow turn them into "office-code"?

The most critical change is a cultural one:
We must be able to capture a process
such that the captured information is the **source** of information,
because no amount of tooling can reach what only exists in the heads of a few individuals.
Changing culture can be hard,
but it all starts with changing what people *do*.
I think if we use a tool that's designed for being the source of information,
i.e., repositories,
then it makes it easier for everyone to grok this idea.

I propose we don't need to capture computer-executable code though,
that'd be taking the repository-thinking too literally.
To start with it'll be enough to capture these details as "human-executable" instructions,
and focus on a culture of open discussions,
iterative improvement,
and broaden the set of people who performs the task.

---

So, how do we deal with pre-installed software?
To cover the basics we can provide a link to the OS image
and a description of how to format and reset machines.
At least this way anyone can reset machines without having to contact IT.

To better use the power of repositories we can add some automation.
What if applications were specified as installation-scripts
(e.g. [Chef][chef])?
And we re-generate the disk image whenever `master` is updated.
That would make it simple for anyone to add or update preinstalled applications,
and it's the kind of automation that's straightforward to do in a repository.

---

Same approach for the office fridge.
Forget about someone keeping an arbitrary list on their desk,
now we have a `fridge-stocking.git` repo
containing the necessary steps to make and change orders.
If we specify the actual sodas to order in a separate file
it'll be easy to propose stocking a specific drink
by just creating a pull-request.

For expense reasons maybe the power to purchase is limited to one person,
but they can look at the rich feedback in a pull-request,
like its comments and how many thumbs-up it has,
to decide which requests to merge in and which to deny.

---

Capturing new-hire checklists
and the coding-style
into repositories
means we can use those pull-requests for suggesting changes.
Each change can be thoroughly discussed,
so when it's merged in
everyone is onboard with it.

With such an inviting change-management approach
perhaps we can even consider a new rule:
What if every new hire is asked to make pull-requests
for every topic they feel a previous company did better?
So as a new hire your first task would be
to go through all the office-as-code repositories
and submit pull-requests describing your best experiences from past companies.
Then we all discuss those changes
and we merge in the ideas we love.

Wouldn't that be a pretty elegant way
of ensuring continuous improvements of the office?

# In conclusion
Why bother with any of this though?
Is it really that important?
Doesn't your office works just fine the way it is?
Well... I don't know, does it?
Seriously I'd love to hear your experiences,
please leave a comment
so I can expand my horizons.

But I've felt most office-processes have been beyond my control,
and when they operate less than ideally
it's a small but persistent annoyance to be unable to change it.
I've tried reaching out with suggestions
but usually get ignored or declined because of course everyone's busy.
It takes a lot of effort to persuade a person
to change the way they've done something for years,
and without a platform for discussion
it's not even really possible to show how broadly supported a suggestion is.

Wikis may appear to be a solution
but they actually fail to capture processes
because of their limited change-model.

Of course not everything can or should be solved by tools,
but when there's an opportunity to simplify how we work
*and* better align processes to evolve iteratively
why not give it a try?

[ansible]: https://www.ansible.com
[brew]: https://brew.sh
[chef]: https://www.chef.io/chef/
[choco]: https://chocolatey.org
