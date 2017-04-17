---
title: (Don't) Put it on the backlog
date: 2017-04-06 21:58:02
---
How do you harness ideas for your product?
Whether ideas come from customer feedback
or someone in the office having a light bulb moment
you're probably receiving a stream of feature-suggestions
that are worth considering.
But what to do with them?
There are many good answers to that,
but capturing them as stories in your backlog *isn't* one of them.

<!-- more -->

I've done that myself,
captured every idea as a story.
I diligently wrote down what someone suggested,
thanked them,
and added the new card to the backlog.
Job's done, right?
No,
I now think creating a new story for every idea
is actually an anti-pattern.
Initially it appears great
because it lets stakeholders prioritise a new idea
against the current workload,
and the person with the idea feels listened to
because this work-item has appeared as a result of their input.
But ideation flows much faster than development,
and soon the backlog balloons with all kinds of ideas.

Even then this can *still* look fine,
because tasks are prioritised
so the more frivolous ideas fall the bottom
and we all agree we'll eventually get to those less important ones later, right?
But before long years worth of ill-defined and half-forgotten stories
accrue in the basement of that backlog,
to the point where no-one really has an overview of what exactly is in there,
and honestly you're unlikely to ever get to them.

> At CCP we loved the [MoSCoW][moscow] method,
and the main product had a decade of ideas captured across all possible technologies.
For the backlog I maintained I would received a new idea
and the team would all agree this was a really good one to do,
so we'd put it just below all the absolutely business-critical must stories
that needed finishing first.
We truly wanted to get to do those ideas,
but there was always business-critical must stories that took priority.
The so-called good ideas just sat there.
Forever.
We never did get to them.

The main problem of having a basement full of stories
is the impact they have on your ability to react to changing market forces.
Successful software must continuously maximise customer impact
so it makes sense that new stories appear with little warning.
Thus there is a tipping-point
where new higher-priority stories come in at a faster rate
than the churn through your basement-stories.
At that point those basement-stories just go stale, and they go stale *quick*.
If they're continuously being bumped then what value are they really bringing?

If an idea is truly valuable then of course create a story and get to work,
but when they're repeatedly deferred into an ill-defined future
by dumping them into a deprioritised column
or putting them at such a depth that they'll never realistically be worked on
then they become a liability.
Dragging around all that baggage has cost,
both mentally as various people must get acquainted with all the items,
and operationally as it becomes more difficult to use the software
(searching is slower and results more overwhelming,
and changing a process becomes more daunting because
the dataset is larger, etc.).

The solution is to limit the backlog.
Only write up the stories you're actually going to work on,
and if a story is continuously bumped maybe throw it out?
If it's not the right time for an idea then be honest about it,
and trim that fat out.

I haven't tried this yet,
but I'm personally drawn to the idea of "[WIP-limiting][wiplimit]" the backlog itself.
Given your velocity you can project how long the backlog is,
so put in a reasonable limit.
If stakeholders love a new idea then it has to replace an existing story,
which I think would drive up the value of the backlog
because each item in it really has to justify its existence.

# Idea wall
With that said I do firmly believe in capturing those ideas.
Everyone is a source of ideation,
especially people in your office if you dog-food your own product,
and it'd be negligent to not tap all those brains for improvements.
I personally like blogging as a way to disseminate ideas,
they're a nice informal way to drive discussion
and let others build on an idea or add further thoughts and constraints to consider.
I've also seen this tackled with a big idea-wall,
basically a wall of post-its
highlighting the high-level goals we all want to push towards.

Regardless of how you capture those ideas
the end goal should be to inspire stakeholders
but not have them beholden to the list.
The ideal outcome is a soup of ideas
that continuously combine and interact in unpredictably creative ways,
where the best ideas attracts attention
and are naturally iterated on from many perspectives.
And then only when the time is right are they pulled into the backlog,
where they'll be further refined
and start their ascend towards actually being made real.

[moscow]: https://en.wikipedia.org/wiki/MoSCoW_method
[ccp]: https://www.ccpgames.com/
[wiplimit]: http://searchsoftwarequality.techtarget.com/definition/WIP-limit
