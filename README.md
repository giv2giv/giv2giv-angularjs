
Angularjs coding for logging into giv2giv.

I used the standard generator to create a file structure for this project: yo angular

My goal was to create a "page" or route for the login. I was thinking a homepage like http://next.com where you click to login and it takes you to another page. If you are already logged in, it takes you to your 'profile' or personal home page.

So I modified the main.html page to put a link to "/#/login". Then I create a route to login in app.js with a control of "LoginCtrl" and templateUrl of "views/login.html". Some tutorials show including the controller in the <form> on login.html. But that is not needed because it is in the route in this case.

Of course the next step is to create the "login.html" file. There are a few pieces to do the validation that requires both email and password. The submit button is disabled until valid. When valid, click on the submit button calls a method of the "LoginCtrl" called "submitLogin". 

Then I setup the "LoginCtrl" in the main.js file. Eventually it will be in its own file. The "submitLogin" method is just a placeholder for now. This is where the the "create_session" api will be called. Success or failure will produce different messages.

Besides building out the submit, also need to build tests.

Built submit code, but had CORS issue:
XMLHttpRequest cannot load http://www.giv2giv.org/api/sessions/create.json. Request header field Content-Type is not allowed by Access-Control-Allow-Headers.