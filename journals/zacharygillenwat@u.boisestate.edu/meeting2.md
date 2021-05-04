# Meeting 2

* 133% Attendance (Shane was there too)

In this meeting we discussed what technologies we'd like to use for our project. We agreed as a team that we would use Angular for the front end, as we all had varying degrees of experience with it. As well, I figured that since the main meat of this project was in the backend and audio streaming components, we shouldn't do anything too difficult for the UI.

The backend was where things got more complicated, as we weren't (and I think still aren't completely) sure what language or framework would be the best. I begrudgingly suggested that Java may be a good option as it's well-used in the distributed computing world for workloads not unlike what we're trying to do. After throwing up in our mouths a little bit, we decided instead that Go might be a better option because it's way more hip and also Rob Pike is a really cool dude. While this was a good start, we were still unsure of our options, so we reached out to Shane and asked if he could impart some of his sage wisdom. Jumping onto a Zoom call, we explained the situation, and he gave some advice. One of his suggestions was Node.JS because it would allow us to share some code between the frontend and the backend, as well as ASP.NET Core using C#. Overall the message was that we should choose what we think is best, or what we think would be the most interesting to learn, since this is a school project and not an industry application.

After being enlightened by the almighty Shane, we discussed the options he laid out and were still somewhat unsure of what to choose. It seems like Go might be the direction we're leaning in because we don't really want to do Node and as I mentioned before, Rob Pike is a cool dude (this wasn't explicitly brought up in the meeting but I believe we were all thinking it). I had also found some Go implementations of WebRTC, which is a framework we were considering using for the audio streaming portion of the project. Having looked into it a little more, I'm not entirely certain that WebRTC is the right choice for this use case, but I will continue researching and discussing with the rest of the team.

Finally, I created a new Angular project for the "Hello World" portion of the Tech Lab and committed it to the repository. We decided to call the front end "Bragi" after the Norse god of music, which seemed close enough to an audio streaming god for our use cases.

My tasks for this week:

* Look more into the language options we discussed
* Research WebRTC to make sure we can use it the way we want to
* Find more cool Norse gods to name things after
