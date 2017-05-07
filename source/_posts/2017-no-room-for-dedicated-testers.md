---
title: No room for dedicated testers
date: 2017-05-07 11:57:47
---
I like writing code, 
but the pressure of future maintenance always weighs on my shoulders. 
If what I write requires manual testing 
I can feel the years of future maintenance 
where someone (possibly myself) breaks the code, 
it gets fixed, 
it gets re-broken, 
and so on *ad infinitum*. 
Yuck.

Automated testing is the only answer to this, 
which is why the classic role of the embedded QA tester 
has evolved in recent years to include automation. 
But there's a deeper problem, 
because tests shouldn't be written by a tester at all.

<!-- more -->

{% pullquote right %}
It's not just that there's no future for the classic manually-testing QA person, 
it's that there's no future for **any** embedded QA person.
{% endpullquote %}

What brought me to these thoughts 
was wanting to change functionality on my website, 
so I went to add a test to cover this new use-case. 
But oh no, 
I depend on a library that manipulates DOM elements over time 
so I end up with a poor test 
that fails if the relevant elements haven't reached their final state yet 
(this example is an end-to-end Selenium test 
but the same principles apply for any level of testing). 
What to do?

It was simple, 
I just changed the library to expose enough information 
for external systems to understand its activities. 
It was a tiny change that allowed the E2E test to wait correctly, 
end of story, everyone's happy.

From this I see the virtuous cycle 
of having developers responsible for the entire life cycle of our output. 
It must be the developer who handles software quality 
because testing doesn't exist in a vacuum 
and sometimes the best approach 
is to increase testability in the production-code itself. 
A QA developer whose job it is to write tests wouldn't change the library, 
that's something the maintainers of the whole system thinks of. 
So it's not just that there's no future for the classic manually-testing QA person, 
it's that there's no future for **any** embedded QA person. 
Period! 
It is only when developers write the logic 
**and** have to maintain it 
that pressure is put in the right spot to produce stable, testable systems.

# But... what about quality??
So we discard the embedded QA role and now quality is assured forever? 
No, we should still be concerned with product-wide quality. 
Developers can't see the bigger picture because we're in the trenches, 
a higher-level coordination is needed to keep quality consistent, 
to normalize testing efforts across teams, 
and to hold developers responsibly to standards if and when we slip into laziness.

To that end I like to re-think QA to mean "Quality Ambassadors”, 
and focus its values not on a position embedded in teams 
but rather as a set of responsibilities 
intrinsically woven into the project management structure. 
Think of QA as a mindset, 
and we're looking for a place to put it 
that sets up the same virtuous pressure as we put on developers 
when they have to maintain the code they write. 
We need someone that cares deeply about quality, 
not just because abstractly we know poor quality is bad for business, 
but because they are **inconvenienced** by the lack of it. 
And it must be someone who has the power to do something about it, 
someone who can affect change once they are fed up with hitting issues. 
It needs to be a role who deeply **uses** the product, 
because who else will find and feel the bugs?

I think I'm describing product owners here, 
and really anyone in the management chain 
that fundamentally relies on the product being in good shape. 
They are where the inconveniencing of poor quality 
meets the power to change the overall product direction and strategy, 
and so they should be the ones to champion quality. 
If I were a non-technical PO I would ask my teams for proof of quality via BDD tests, 
and sit with them when a defect is uncovered 
to understand why we will never have another regression in that area.

# In conclusion
If we think of QA in these terms 
developers are empowered to create and maintain high-quality code 
because they feel the immediate pain of having to maintain poorly tested software. 
And management simultaneously knows about the product's quality 
and can do something about it. Win win, right?

Well, except the dedicated QA testers, where do they go? 
I see two directions: 
Dive deeper into technology and become a developer, 
you're already pre-disposed to care for quality 
so you'll be a boon for any team 
(and there is high demand for QA automation developers 
for creating test-automation services and frameworks). 
Or dive into leadership and take on PO roles and higher, 
I can assure you we desperately need your eye for quality at that level.
