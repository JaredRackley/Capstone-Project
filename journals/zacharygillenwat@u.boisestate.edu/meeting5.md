# Meeting 5

Attendance: 100%

In this meeting, we set up some GitHub Actions workflows for our project. For the golang backend, this was an easy process, we only had to slightly modify the Go workflow template provided by GitHub. Though the backend doesn't really do anything right now, it is currently passing its build and a badge is in the readme for said build status. Those two steps, not bad at all.

However, setting up a workflow to build and publish the Docker image for our front-end component was not so easy. We consulted GitHub's docs, but found that some of it was outdated. We turned to the repo for the specific GitHub Actions component we were using, but that documentation was also somewhat confusing. Using a hodge-podge of different sources I slowly built up the yml file until things stopped breaking. We had to move the Dockerfile out of src/bragi/ and into the root of the repository, and fix some COPY commands' paths in the process, but eventually (after 8 tries) it did build successfully. There was another problem though, the credentials we gave to the GitHub Container Registry did not work. As it turns out, GHCR requires Personal Access Tokens for authentication, whereas the old GitHub Packages could use a token provided by the repo. The workflow we had was taking the username of the person who cut the release (which triggered the workflow to build and publish) and the repo's token and providing that as login credentials to GHCR. This would have worked on the old system, but isn't possible now. As near as I can tell, we will have to have *one* access token that the project uses to authenticate with the registry, which also means only one user will be attached to the published packages. This is obviously undesirable compared to the user who cut the tag being the one who pubished the image, but it seems that's the only way.

In summary, it seems right now that we will need to tie the published images to a single user. I don't particularly like that so I'll be looking for alternatives.

We also reached out to Shane about getting credits for AWS, as we'd like to use their Elastic Kubernetes Service (EKS) to deploy our application. I found out yesterday that EKS does not have a free tier which means we'll need to pay for it even just for testing. Shane told us though that we should get AWS credit if we make accounts with our Boise State emails, so hopefully we won't have to worry.

My tasks for this week:
* Look into making some kind of application account for publishing Docker images (it's possible that we could do something like this if we use Docker Hub)
* Possibly make another workflow just for testing the Angular app
* Make an AWS account with my BSU email and see if I have any credits (then maybe set up an org for the team)
