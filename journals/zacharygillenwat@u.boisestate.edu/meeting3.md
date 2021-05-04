# Meeting 3

* Attendance: 100%

In this meeting we figured out how we were going to build our project. We also revisited the choices we have for a backend language, and whether or not we wanted to use microservices or implement backend functionalities in multiple languages. Jared mentioned having talked to Shane about a microservices architecture, and that Shane said it might add unnecessary overhead or challenge. My suggestion was that we might be able to separate a monolithic application into microservices easily as long as we design it with that in mind. Hopefully if we keep different portions of the backend separated, we can extract them into their own individual services later if we still want to do that, and at that point we can attempt rewriting them in another language.

As for build systems, we were mostly concerned (for the purposes of this lab) with building the Angular front-end application. We agreed to use Yarn for dependancy management instead of npm, which brought up questions about whether we should check if Yarn is installed in the build script before installing dependencies. In an act of true over-abstractification, we came to the conclusion that Docker was an easy solution to the issue - you don't have to worry about Yarn being installed if the Docker image already has it! In a general sense this should hopefully simplify our build process down the line when we add more languages that need their own tools to build. Instead of needing to install Go, Python, Node, etc., you just need Docker. Is it as simple? Not really, no. But it's superficially easier!

Having decided this, we got to work writing a Dockerfile that could build our Angular app and serve it up in a way that we could access it from the host machine. We found a popular article describing this process but it was a bit outdated, which in part meant that we had to figure out what Node version we needed to use (the one in the article is about 2 major releases behind). The Node Docker container has many different tagged versions with varying properties, usually relating to the size of the image or the underlying Linux distro. The main question we had was whether to use the normal full-fat Node image or the "slim" version. Because the normal image was the one they suggested using in most cases, I argued that it was what we should start off using, and if it ended up taking up too much space we could switch to the slim and see if anything breaks.

After some fiddling, we managed to get the container working and the web page was loading properly. The only issue, as I later found, was that this simple setup resulted in a Docker image in excess of 1.8 gigabytes, which was far too much.

My tasks for this week:
* Determine if the "slim" Node image results in a smaller built Docker image for our hello world app
* Continue pondering our options for backend languages. I'm still leaning towards Go but I'm willing to consider alternatives.
* Maybe read up more on WebRTC
