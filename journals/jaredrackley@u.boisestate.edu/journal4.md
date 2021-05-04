# Meeting 4

- Attendance: All present

This week, we went over our build system. We talked firstly about our backend language. I brought up with the group what I had asked Shane about using microservices, and that he suggested we implement it in one language before implementing it in another. We still have not chose a final backend language, but we have our options set out. We also decided that since there are many variables to our system, it would be best to make a dockerfile so that we can control them. We decided that we are going to use a node lts base image for our docker container so that we wont have any troubles with the "bleeding edge" versions.

We looked up an article on making a dockerfile with an angular project, and followed along to make the dockerfile with some of our own changes. We then put the build cmd in build.sh. After discussing, we chose not to do anything right now for clean.sh, because we dont have any intermediate files right now. That may change in the future depending on what we pick for our backend.

I am a little skeptical about some of the stuff that ended up in our dockerfile, so i may take a look over the weekend to see how "hacky" it is, and if anything needs to change. Of course, I also want to make sure that i am not leaving anything out, but it seemed like when we were making it, there was some stuff that didnt seem right, and I want to make sure that we dont have strange bugs because we didnt check the system.

My task for this week:

- Check into backend languages more and see if I can reach a decision on my preference.
- look at the dockerfile and check if there are any changes that need to be made.
