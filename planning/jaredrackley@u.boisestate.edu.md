# Jared Rackley

## User Story

As a user I need to be able to register and login so that I can access audio streams.

## Tasks

1. User is able to register with an email and password. User is also able to set a profile picture. Passwords have minimum requirements and are hashed to provide security.
2. User is able to login if registered with their credentials.
3. If user cannot login, there is a forgot password button that lets them reset their password.
4. User needs to be redirected when logged in.
5. Pages that require authentication are hidden when user is not logged in.

### Time estimation method

We decided that the time estimation would not help us complete the user story, and 
that as long as we complete the user story in a reasonable amount of time for the size,
that would be fine.

## Definition of Done

- Task 1: User is able to be registered with an email and password. Email and password is put into db. User is successfully able to add a profile picture. Picture is minimized then stored. Password is not accepted unless minimum requirements are met. 
- Task 2: User is authenticated if login is successful.
- Task 3: A forgot password button lets the user reset their password via email or some other type of instructions.
- Task 4: When user clicks login, if it fails they get redirected back to the login page. The form repopulates error data in the login page. If it succeeds, user gets redirected to home page.
- Task 5: route guards or some other authentication check to prevent users from going on pages that require authentication are in place. 


## User Story

As a user, I need to be able to see information about the stream so that I know which stream I want to click on.

## Tasks

1. Make it so that each stream that is shown has a category, title and thumbnail. Stream preview layout should be consistent.
2. Once Stream data is entered initially, it is stored in a database.
3. Whenever browse page is hit, stream data is loaded into the browse page.

### Time estimation method

We decided that the time estimation would not help us complete the user story, and 
that as long as we complete the user story in a reasonable amount of time for the size,
that would be fine.

## Definition of Done

- Task 1: Layout among all stream previews needs to be consistent, and page is responsive. Stream Data is consistent among all streams. If stream does not have data, default data is provided.
- Task 2: Stream data is stored in the database when its entered.
- Task 3: Stream data is loaded into the Browse page when user clicks on it, so that the user can see which streams are available.


## User Story

As a user, i want to be able to filter by category or by subscriptions so that I can find the content I want to view more easily.

## Tasks

1. Display Filter button to User, which lets user filter by category or subscription
2. When filter is chosen, db is queried for data matching the filter chosen
3. Results of query are displayed to user

### Time estimation method

We decided that the time estimation would not help us complete the user story, and 
that as long as we complete the user story in a reasonable amount of time for the size,
that would be fine.

## Definition of Done

- Task 1, 2, 3: When user clicks on filter, and chooses a filter, only information matching the filter is selected and is then shown to the user in a consistent layout.
