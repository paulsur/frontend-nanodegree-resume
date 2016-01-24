
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
    "twitter" : "n.a.",
    "location" : "Calgary"
  },
  "welcomeMessage" : "Welcome to this resume website!",
  "skills" : [ "web development", "Microsoft Excel", "grilling steak"],
  "bioPic" : "https://www.365ninja.com/wp-content/themes/senorclippy/images/ninja-logo.png"
};

var work = {
  "jobs" : [
    {
      "employer" : "Penn West Petroleum",
      "title" : "Senior Corporate Finance Analyst",
      "location" : "Calgary",
      "dates" : "May 2014 - Present",
      "description" : "Planning and capital markets"
    },
    {
      "employer" : "BMO Capital Markets",
      "title" : "Research Associate",
      "location" : "Calgary",
      "dates" : "May 2011 - May 2013",
      "description" : "Covering Canadian high-yield oil and gas companies"
    },
    {
      "employer" : "Capital Power",
      "title" : "Energy Trader",
      "location" : "Calgary",
      "dates" : "June 2006 - May 2011",
      "description" : "Marketing and trading of natural gas and power"
    }
  ]
};

var education = {
  "schools" : [
    {
      "name" : "University of Calgary",
      "city" : "Calgary",
      "degrees" : ["BSc","BComm"],
      "majors" : ["Computer Science","Finance"],
      "dates" : "2000 - 2006"
    }
  ],
  "onlineCourses" : [
    {
      "school" : "Udacity",
      "title" : "Frontend Web Developer Nano Degree",
      "dates" : "2015",
      "url" : "http://udacity.com"
    }
  ]
};

var formattedName = HTMLheaderName.replace("%data%",bio.name);
var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

function displayWork() {
  for (var i in work.jobs) {
    $("#workExperience").append(HTMLworkStart);
    var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[i].employer);
    var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[i].title);
    var formattedDates = HTMLworkDates.replace("%data%",work.jobs[i].dates);
    var formattedLocation = HTMLworkLocation.replace("%data%",work.jobs[i].location);
    var formattedDescription = HTMLworkDescription.replace("%data%",work.jobs[i].description);

    $(".work-entry:last").append(formattedEmployer + formattedTitle);
    $(".work-entry:last").append(formattedDates + formattedLocation);
    $(".work-entry:last").append(formattedDescription);
  }
}
displayWork();
$(document).click(function(loc) {
  var x = loc.pageX;
  var y = loc.pageY;
  logClicks(x,y);
});
function logClicks(x,y) {
  console.log(x + "-" + y);
}



//$("#main").append(work["position"]);
//$("#main").append(education.name);
