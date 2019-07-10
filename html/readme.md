## Friend Finder

#overview
For this assignment, the user will take a 10 question quiz to be matched with a friend who scored similarly on the quiz. Since this is all server side, we have no way to store any user data, and all of the test accounts are set up as a stored object in a data.js file. The user data is posted via a POST request, and an ajax query is used to dynamically update the HTML with the matcehed friend. The user data is also added to the fake database object(but will not stay if server shuts down due to no data persistence), so that should another user take the quiz again while the server is still running, they may match with the previous user. A URL is provided so the user can see the entire data file to see what other friends are available to match with.

##dependencies
mysql
body-parser
express

##installation(copy paste)
npm init
npm install mysql body-parser express

##A big thanks to our playtesters
#Matt Verde
#Luke League
#Mark Gillam