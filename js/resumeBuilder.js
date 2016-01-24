
/*
This is empty on purpose! Your code to build the resume will go here.
 */

var bio = {
  "name" : "Paul S",
  "role" : "Novice Web Developer",
  "contacts" : {
    "mobile" : "403-555-5555",
    "email" : "paulsur at gmail.com",
    "github" : "paulsur",
    "location" : "Calgary"
  }
  "welcomeMessage" : "Welcome to this resume website!",
  "skills" : [ "web development", "Microsoft Excel", "grilling steak"],
  "bioPic" : "https://www.365ninja.com/wp-content/themes/senorclippy/images/ninja-logo.png"
}

var formattedName = HTMLheaderName.replace("%data%",bio.name);
var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
