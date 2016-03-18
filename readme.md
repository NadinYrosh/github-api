#Github API
Github API is a site that allows the user to enter the name of a Github user, and see information about their profile.

###Instructions

If you want to access the project folder, type "git clone https://github.com/NewellMatt/github-api.git" into a terminal running Git Bash, then in the folder run "npm install" & "bower install" to automatically install all the dependencies this site uses.

To properly utilize this site you will need to use a github API key, and create a file called ".env" in the top level of the directory, with this:

exports.apiKey = "API-KEY-GOES-HERE";

Know this is for security.

You can get a github API key from the "Settings" page of your account, and click "Personal access tokens". With access to a key, you can run this site by typing "gulp serve" at the top of the directory in bash.

Languages Used

*HTML
*Javascript
*Node Package Manager
*Bower
*Gulp
(c) Matthew Newell 2016
