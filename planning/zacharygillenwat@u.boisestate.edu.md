# Zachary Gillenwater

## User Story
As a user of this website, I should be able to record live audio from my computer and have it broadcast to multiple listeners. Likewise I should be able to listen to other users' broadcasts through the website.

## Tasks

1. I will research audio streaming technologies to determine which one is best for our application
2. I will implement basic audio broadcasting from the backend to send audio streams to clients
3. I will add functionality to the frontend to receive audio streams and play them back
4. I will create an audio player in the frontend that has basic controls and info for audio streams
5. I will implement audio capture in the frontend for users to be able to record and broadcast live audio
6. I will add functionality to the backend to allow it to receive audio data from external applications (like the frontend) and broadcast it to multiple users

### Time estimation method

We determined that time estimation would likely not be reliable enough to be useful at this stage. However, each task was created with the intention that they should take roughly 8 hours of work to complete (barring #1, which is just a research task I've tacked on)

## Definition of Done

* Task 1 DoD: This task will be complete when a fitting standard has been found and selected by the team
* Task 2 DoD: This task will be complete when audio data can be transmitted by the backend (even if the audio is just coming from a file). A pre-written client using the same standard we've chosen should be used to test this functionality and confirm it is working correctly and reliably.
* Task 3 DoD: This task will be done when the frontend can reliably receive audio streams from the backend and play them back properly, in real time (using a default HTML audio player or something similar)
* Task 4 DoD: This task will be done when a custom audio player has been created that displays properly at multiple screen resolutions, plays live audio correctly, and has the proper information and controls displayed
* Task 5 DoD: This task will be done when the frontend can record audio from a user's microphone and transmit that audio correctly to the backend.
* Task 6 DoD: This task will be done when the backend can receive audio data from external sources and relay that audio out to multiple clients
