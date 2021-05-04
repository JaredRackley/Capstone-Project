# Meeting 5

- Attendance: All present

This week, we discussed our Build System in more depth and also talked about testing.

We spent a lot of time this week talking again about docker. For the first thirty minutes, the rest of the team helped me with my issues with Docker. We decided that Docker should be used only for production, to help standardize the final product, and that it would be fine to do development without Docker.

Our main reason for using Docker is to make sure that the final project runs on every system. We also added a DockerIgnore file that cut down the build size from about 500 mb to kb.

After discussing this, we switched over to the topic of testing. We decided that we would use the built in testing for angular, which can be run using `yarn test`.

We will also be using a testing framework for Go, which pretty much simplifies the process and allows for asserts and such in Go.

My task for this week:

- Add a couple of example tests for Go
- Look at how to use angular testing
