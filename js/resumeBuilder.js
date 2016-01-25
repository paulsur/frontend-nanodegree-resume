
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
  },
  "welcomeMessage" : "Welcome to this resume website!",
  "skills" : [ "web development", "Microsoft Excel", "grilling steak"],
  "bioPic" : "https://www.365ninja.com/wp-content/themes/senorclippy/images/ninja-logo.png",
  "display" : function() {
    var formattedName = HTMLheaderName.replace("%data%",bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);

    $("#header").append(HTMLcontactGeneric);
    for (var i in bio.contacts) {
      varFormattedmobile = HTMLmobile.replace("%data%",bio.contacts[i].mobile);
      varFormattedEmail = HTMLemail.replace("%data%",bio.contacts[i].email);
      varFormattedEmail = HTMLtwitter.replace("%data%",bio.contacts[i].twitter);
      varFormattedEmail = HTMLgithub.replace("%data%",bio.contacts[i].github);
      varFormattedEmail = HTMLlocation.replace("%data%",bio.contacts[i].location);

      $(".project-entry:last").append(formattedTitle);
    }
    var formattedImage = HTMLprojectImage.replace("%data%",project.projects[i].image);


  }
};

var project = {
  "projects" : [
    {
      "title" : "Project 1",
      "date" : "Recent Date",
      "description" : "A most recent project I worked on",
      "image" : "http://sharepointmaven.com/wp-content/uploads/2015/11/project-management.png"
    },
    {
      "title" : "Project 2",
      "date" : "Also Recent Date",
      "description" : "A second most recent project I worked on",
      "image" : "https://thewaterproject.org/images/default_profile_pic.gif"
    }
  ],
  "display" : function() {
    for (var i in project.projects) {
      $("#projects").append(HTMLprojectStart);
      var formattedTitle = HTMLprojectTitle.replace("%data%",project.projects[i].title);
      var formattedDates = HTMLprojectDates.replace("%data%",project.projects[i].date);
      var formattedDescr = HTMLprojectDescription.replace("%data%",project.projects[i].description);
      var formattedImage = HTMLprojectImage.replace("%data%",project.projects[i].image);

      $(".project-entry:last").append(formattedTitle);
      $(".project-entry:last").append(formattedDates);
      $(".project-entry:last").append(formattedDescr);
      $(".project-entry:last").append(formattedImage);
    }
  }
};

var work = {
  "jobs" : [
    {
      "employer" : "Penn West Petroleum",
      "title" : "Senior Corporate Finance Analyst",
      "location" : "Calgary, AB",
      "dates" : "May 2014 - Present",
      "description" : "Planning and capital markets"
    },
    {
      "employer" : "BMO Capital Markets",
      "title" : "Research Associate",
      "location" : "Toronto, ON",
      "dates" : "May 2011 - May 2013",
      "description" : "Covering Canadian high-yield oil and gas companies"
    },
    {
      "employer" : "Capital Power",
      "title" : "Energy Trader",
      "location" : "Edmonton, AB",
      "dates" : "June 2006 - May 2011",
      "description" : "Marketing and trading of natural gas and power"
    }
  ],
  "display" : function() {
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
};

var education = {
  "schools" : [
    {
      "name" : "University of Calgary",
      "location" : "Calgary",
      "degree" : "Bsc",
      "major" : "Computer Science",
      "dates" : "2000 - 2006"
    },
    {
      "name" : "University of Calgary",
      "location" : "Calgary",
      "degree" : "BComm",
      "major" : "Finance",
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
  ],
  "display" : function() {
    $("#education").append(HTMLschoolStart);
    for (var i in education.schools) {
      var schoolObj = education.schools[i];
      var formattedName = HTMLschoolName.replace("%data%",schoolObj.name);
      var formattedDegree = HTMLschoolDegree.replace("%data%",schoolObj.degree);
      var formattedDates = HTMLschoolDates.replace("%data%",schoolObj.dates);
      var formattedLocation = HTMLschoolLocation.replace("%data%",schoolObj.location);
      var formattedMajor = HTMLschoolMajor.replace("%data%",schoolObj.major);

      $(".education-entry:last").append(formattedName);
      $(".education-entry:last").append(formattedDegree);
      $(".education-entry:last").append(formattedDates);
      $(".education-entry:last").append(formattedLocation);
      $(".education-entry:last").append(formattedMajor);
    }

    $("#education").append(HTMLonlineClasses);
    for (i in education.onlineCourses) {
      var courseObj = education.onlineCourses[i];
      var formattedTitle = HTMLonlineTitle.replace("%data%",courseObj.title);
      var formattedSchool = HTMLonlineSchool.replace("%data%",courseObj.school);
      var formattedDates2 = HTMLonlineDates.replace("%data%",courseObj.dates);
      var formattedURL = HTMLonlineURL.replace("%data%",courseObj.url);

      $(".online-entry:last").append(formattedSchool);
      $(".online-entry:last").append(formattedTitle);
      $(".online-entry:last").append(formattedDates2);
      $(".online-entry:last").append(formattedURL);
    }

  }
};




project.display();
work.display();
education.display();
$("#main").append(googleMap);
