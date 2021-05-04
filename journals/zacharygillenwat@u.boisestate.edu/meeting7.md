# Meeting 7

Attendance: 100%

This meeting was fairly uneventful in terms of feature work. Between our Tuesday meeting and today, I worked on getting a basic API set up in Go for the backend. I also messed around with an RTMP server implementation, which is a potential avenue for handling our audio streaming. So far I haven't been able to stream anything through this RTMP server, but I'm hopeful that with some tweaking over the weekend I'll be able to get something working. Regardless, I was able to setup a simple REST API running with a few endpoints that don't do anything interesting yet.

During today's meeting I mostly struggled to appease the GitHub Actions build we've setup for the Go portion of the project. It seems that I'm only able to change what makes the build fail, but I can't stop it from failing. It seems to be some issue with Go modules but it's incredibly difficult to find relevant advice by googling the issue, which means maybe I'll have to post an issue somewhere and see if there's any advice.

Since the code runs fine for me, I might not worry too much about it for now. We would definitely benefit from having automated builds in the future though, so it would definitely be better to figure out. Hopefully this weekend I can make some progress either on the build script or on the audio streaming server.
