
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
    "location" : "Calgary, AB"
  },
  "welcomeMessage" : "Welcome to my web developer resume website!",
  "skills" : [ "HTML", "CSS", "JavaScript", "Excel", "PowerPoint"],
  "bioPic" : "images/ninja-logo.png",
  "display" : function() {
    var i = 0;
    $("#header").prepend(HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage));
    $("#header").prepend(HTMLbioPic.replace("%data%",bio.bioPic));
    $("#header").prepend(HTMLheaderRole.replace("%data%",bio.role));
    $("#header").prepend(HTMLheaderName.replace("%data%",bio.name));

    var formattedContactInfo = [];
    formattedContactInfo.push(HTMLemail.replace("%data%", bio.contacts.mobile));
    formattedContactInfo.push(HTMLemail.replace("%data%", bio.contacts.email));
    formattedContactInfo.push(HTMLgithub.replace("%data%", bio.contacts.github));
    formattedContactInfo.push(HTMLlocation.replace("%data%", bio.contacts.location));

    $("#header").append(HTMLskillsStart);
    for(i in bio.skills) {
  		$("#skills").append(HTMLskills.replace("%data%", bio.skills[i]));
      console.log(bio.skills[i]);
  	}

    for(i in formattedContactInfo) {
    	$("#topContacts").append(formattedContactInfo[i]);
    	$("#footerContacts").append(formattedContactInfo[i]);
    }
  }
};

var project = {
  "projects" : [
    {
      "title" : "Project 1",
      "date" : "Recent Date",
      "description" : "A most recent project I worked on",
      "image" : "images/project1.png"
    },
    {
      "title" : "Project 2",
      "date" : "Also Recent Date",
      "description" : "A second most recent project I worked on",
      "image" : "images/project2.gif"
    }
  ],
  "display" : function() {
    for (var i in project.projects) {
      $("#projects").append(HTMLprojectStart);
      $(".project-entry:last").append(HTMLprojectTitle.replace("%data%",project.projects[i].title));
      $(".project-entry:last").append(HTMLprojectDates.replace("%data%",project.projects[i].date));
      $(".project-entry:last").append(HTMLprojectDescription.replace("%data%",project.projects[i].description));
      $(".project-entry:last").append(HTMLprojectImage.replace("%data%",project.projects[i].image));
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
      $(".work-entry:last").append(HTMLworkEmployer.replace("%data%",work.jobs[i].employer));
      $(".work-entry:last").append(HTMLworkTitle.replace("%data%",work.jobs[i].title));
      $(".work-entry:last").append(HTMLworkDates.replace("%data%",work.jobs[i].dates));
      $(".work-entry:last").append(HTMLworkLocation.replace("%data%",work.jobs[i].location));
      $(".work-entry:last").append(HTMLworkDescription.replace("%data%",work.jobs[i].description));
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
      $(".education-entry:last").append(HTMLschoolName.replace("%data%",schoolObj.name));
      $(".education-entry:last").append(HTMLschoolDegree.replace("%data%",schoolObj.degree));
      $(".education-entry:last").append(HTMLschoolDates.replace("%data%",schoolObj.dates));
      $(".education-entry:last").append(HTMLschoolLocation.replace("%data%",schoolObj.location));
      $(".education-entry:last").append(HTMLschoolMajor.replace("%data%",schoolObj.major));
    }

    $("#education").append(HTMLonlineClasses);
    for (i in education.onlineCourses) {
      var courseObj = education.onlineCourses[i];
      $(".online-entry:last").append(HTMLonlineTitle.replace("%data%",courseObj.title));
      $(".online-entry:last").append(HTMLonlineSchool.replace("%data%",courseObj.school));
      $(".online-entry:last").append(HTMLonlineDates.replace("%data%",courseObj.dates));
      $(".online-entry:last").append(HTMLonlineURL.replace("%data%",courseObj.url));
    }
  }
};

bio.display();
project.display();
work.display();
education.display();
$("#main").append(googleMap);
