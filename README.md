# CS481 - Senior Design Project

[![Oshun Build](https://github.com/shanep-capstone/cs481-s21-team_4/actions/workflows/oshun.yml/badge.svg)](https://github.com/shanep-capstone/cs481-s21-team_4/actions/workflows/oshun.yml)
[![Publish Bragi Docker](https://github.com/shanep-capstone/cs481-s21-team_4/actions/workflows/bragi-docker.yml/badge.svg)](https://github.com/shanep-capstone/cs481-s21-team_4/actions/workflows/bragi-docker.yml)

## Project Epic

TL;NGR - Too Long; Not Gonna Read:

- Audio Streams
  - Users listen in the browser
  - Creators stream from the browser and/or a desktop app (OBS Studio, etc.)
- Clean UI
  - Login page -- Revolutionary new feature
  - Streams have categories, titles, and thumbnails
  - Users can filter by category and view subscriptions
- Social Features
  - Users can subscribe to their favorite streamers
  - Live chat in-stream (stretch goal)
- Admin Features
  - Administrator panel for banning users that disagree with your anime theories
  - Report button for users to alert admins to 🚨NOT🚨SAFE🚨FOR🚨WORK🚨 content
- Database 
  - Firebase

Our project will be a website similar to [Twitch](https://www.twitch.tv), but that only streams audio instead of video. This will be a platform for things like live podcasts, and offers a different experience from existing technologies like internet radio.

The most important aspect of the project will be the ability for users to tune in to audio streams through the UI on the website, and for streamers to be able to record and transmit audio to their streams. Recording may be done either through a separate page in the browser, or through pre-existing software such as OBS Studio. For the user interface, we want a clean and simple look, that is easy to navigate and understand.

Through this UI, streamers and listeners should be able to log in to their accounts. For streamers, this will act as some kind of authentication that will allow them to begin an audio stream. The application will also have some social features, such as a subscription system that will allow users to subscribe to their favorite streams. As a stretch goal, we would also like to implement a live chat system. If live chat were implemented, it would allow users to send messages to everyone currently watching the stream as well as the streamer themself. The interface will allow users to find current livestreams, manage their subscriptions, and see which of their subscribed streamers are currently live.

Each stream will have an associated topic (Music, Podcast, Screaming, etc.). Users can filter on stream category to find the specific kinds of content they are looking for. Streams also have a title, such as "I'm literally just screaming right now :( | Depression". As well, streamers can upload a thumbnail to set their stream apart from others or preview the type of content they are streaming. Streams are thusly displayed with their title, their category, the username of the streamer, and the thumbnail image they have uploaded (otherwise, a default is used).

Administrators are a special class of user with an admin panel of some kind and the ability to ban users (temporarily or permanently). Streams will have a "report" button that allows users to notify the admin team that a stream contains inappropriate content (such as an NSFW stream thumbnail or streaming just heavy breathing and literally nothing else). The admin panel will contain a queue of user reports (preferably showing reports for the same content as one item to avoid clutter), usage statistics, a literal ban hammer, and other information relevant to administration. A user that is banned may simply have their account deleted, or in more serious cases they may face an IP ban.

Users will have unique usernames that they can use to log in to the service. The login page will have options for registration and "forgot my password". Registration requires an email which must be the unique identifier for a user - usernames can be changed as long as they stay unique. Users will also have profile pictures, descriptions, the main category they stream, and (optionally) a real name.

### Feedback from Shane

This is a great project. Sorry for not getting this feedback to you sooner :) So just as we discussed today in our zoom meeting, I would personally use Javascript (or typescript) for this project as it will allow maximum code sharing! However, the final call is up to you. 


I am excited to see the finished project! 


### Tech lab

TL;NGR - Too Long; Not Gonna Read:

- WebRTC - streaming audio content
- IRC Library or Other Technologies utilizing web sockets - live chat
- Backend Language:
  - Go
  - NodeJS
  - C# (ASP.NET Core)
- Database:
  - Firebase

We have agreed that we are going to be using Angular for our front-end framwork. We all have some experience in this framework, so it seems like a good choice. Angular has a lower learning-curve, taking a more traditional approach to web programming because it uses the HTML,CSS,JS type approach. Other frameworks like React have a steeper learning curve that could inhibit our ability to make a high quality project in the amount of time we have.

Shane came to our meeting, and discussed our project ideas with us. He recommended we use 100% JavaScript. He thought it would be best to use JavaScript for the front end and NodeJS for the backend. He said that this would be beneficial because we would not have to duplicate code from the front end to the backend. He also said that if we were really opposed to JavaScript, that we could use ASP.NET Core for features like the live chat. We could also see if ASP.NET has a feature for audio streaming, and if it does, we could use the it for both. Shane also told us that Go might not be the best option for streaming in terms of performance. He said that if you have 13000 threads, since Go handles threads in the user space, there will be too many context switches in the kernel, and since we do not plan to write our custom kernel for this implementation, it might not be the most performant to use Go. However, he told us that at the end of the day, we should choose something that we want to learn more about and would gain the most knowledge from.

After speaking with Shane, our team discussed possible back-end languages. We think that we would like to try out many different languages for the backend, and that maybe the best way to do this would be to use some sort of microservices setup, with each individual part being written in the backend language of our choice. The most popular backend languages that we have picked to accomplish this are Go, NodeJS and C#. This idea is not fully fleshed out, but we would like to gain experience in all of these and think it would be a good idea to implement parts in each. We also think it may help to transpile the JavaScript to C# for the ASP.NET part.

Our team also talked about the Databases we are going to use. We think it may be helpful for hosting if we utilize AWS. We think that DynamoDB or Aurora might be helpful as our database. We also discussed using PostGres or whether to use a standard database at all. We could also use a web service like Firebase to hold our data. For this project, we only plan on storing very minimal things like user authentication so we do not need much storage (as we would if we were storing the audio clips as well).

## Planning Lab

- [Zach's Plan](planning/zacharygillenwat@u.boisestate.edu.md)
- [Cayson's Plan](planning/caysonwilkins@u.boisestate.edu.md)
- [Jared's Plan](planning/jaredrackley@u.boisestate.edu.md)
