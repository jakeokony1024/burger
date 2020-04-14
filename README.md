# Eat Da Burger! 

Welcome to my eat da burger app, an application that allows the user to enter a new burger type, add it to a list of all burgers stored in a database, and also the functionality to delete burgers in the database. 

Once a burger is created, the user can choose to devour the burger with a button click, which moves the burger to the devoured section and changes the status of it in the database from false to true. 

This application makes use of the MVC file structure, seperating out the connections, the orm, the views, the controllers, and making the .handlebars files and CSS files public. 

The tech used to complete this application:
* mysql
* node.js
* express  
* express handlebars. 

### Tech Usage ###
Mysql was the database used to store our burgers data in. 

Express is used to make the requests to and from the database, making use of parseing the data into JSON so it is easily usable. 

Express handlebars is used to dynamically render the html to the view. 

Node.js is used to run the CLI as well as console logs all errors and any data pulled from the database. 

