# Project Instructions

The Project is only Backend with Express

## REST API

1. Mongo DB Database Connected
2. dotenv file , Controller , Models and Routes folder have been generated
3. User Model ,Auth Route for Login and Register and Auth Controller for Login and Register have been created.
4. Thunder Client (Extension in VSCode) was used to validate requests and retrieve data.
5. User Route and User Controller.
   5.1. Get User,Update User and Delete User !
   5.2. Follower and Following
6. Post Model , Post Route and Post Controller.
   6.1. Get Post,Update Post and Delete Post !

## MongoDB Database connection issue due to Encoding

The following characters must be converted using percent encoding if included in a username or password:

`: / ? # [ ] @`

For example, if your password in plain-text is :

`p@ssw0rd'9'!`

Then you need to encode your password as below:

`p%40ssw0rd%279%27%21`
