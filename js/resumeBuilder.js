
var bio = {
    "name": "Cosmin Leonte",
    "role": "Front-End Web Developer",
    "contacts": {
        "email": "leontecosmin85@yahoo.com",
        "mobile": "0741 204 765",
        "github": "https://github.com/coleonte",
        "location": "Iasi, ROU",
        "facebook": "facebook.com/cosmin.leonte.92"
    },
    "placesLived": [
        "Bucharest, ROU",
        "Barcelona",
        "Andorra la Vella",
        "Toulouse",
        "Bordeaux",
        "Paris",
        "Rennes",
        "Rome",
        "Kiev",
    ],
    "biopic": "images/poza1.jpg",
    "welcomeMessage": " ",
    "skills": [ "HTML", "CSS", "JavaScript", "jQuery","ReactJS", "Node.js","GraphSQL","Bootstrap", "Express.js","WordPress"]
};



bio.display = function() {

    // header info - name, title, image
    $("#header").prepend(HTMLheaderRole.replace("%data%", bio.role));
    $("#header").prepend(HTMLheaderName.replace("%data%", bio.name));
    $("#header").append(HTMLbioPic.replace("%data%", bio.biopic));

    $("#header").append(HTMLskillsStart);
    for (var i = 0; i < bio.skills.length; i++) {
        $("#skills").append(HTMLskills.replace("%data%", bio.skills[i]));

    }

    $("#topContacts, #footerContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
    $("#topContacts, #footerContacts").append(HTMLemail.replace("%data%", bio.contacts.email));
    $("#topContacts, #footerContacts").append(HTMLfacebook.replace("%data%", bio.contacts.facebook));
    $("#topContacts, #footerContacts").append(HTMLgithub.replace("%data%", bio.contacts.github));
    $("#topContacts, #footerContacts").append(HTMLlocation.replace("%data%", bio.contacts.location));

    $("#header").append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage));

    $("#facebookDiv").append(facebookFeed);
};

bio.display();



// work object
var work = {
    "jobs": [{
        "employer": "Flamingo Software SRL",
        "title": "Web Development",
        "location": "Iasi, ROU",
        "dates": "2006",
        "description": "Collaborate with managers and team mates on developing sites based on website design and customize using HTML, " +
            "CSS, JS, and PHP. " + "Perform sites maintenance,optimization and QA testing."
    },
      {
        "employer": "Cizic",
        "title": "Freelancer",
        "location": "Iasi,Suceava,Bucharest, ROU",
        "dates": "2006 - 2016",
        "description": "I have had trade and entertainment activities."
      },

    {
        "employer": "Profi Rom Food",
        "title": "Cashier",
        "location": "Iasi, ROU",
        "dates": "2016",
        "description": "Scanning products purchased by customers, collecting payments from customers ,cash inventory and inventory management"
    },

	{
        "employer": "Delphi Diesel Systems Romania Srl",
        "title": "CNC operator",
        "location": "Iasi, ROU",
        "dates": "2017",
        "description": "Operation of machines / stations with numerical controls from different departments of the factory,ensuring the proper functioning of the machines and implicitly the devices, tools and equipment,observance of working procedures and instructions,writing daily work reports and traceability tracking"
    }

	]
};


work.display = function() {
    for (var i = 0; i < work.jobs.length; i++) {
        // created new div for work experience
        $("workExperience").append(HTMLworkStart);
        //concat employer and title
        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
        $(".work-entry:last").append(formattedEmployer + formattedTitle);

        $(".work-entry:last").append(HTMLworkDates.replace("%data%", work.jobs[i].dates));
        $(".work-entry:last").append(HTMLworkDescription.replace("%data%", work.jobs[i].description));
    }
};

work.display();


// education object
var education = {
    "schools": [{
        "name": "Alexandru Ioan Cuza University",
        "location": "Iasi, Romania",
        "degree": "MS",
        "majors": ["Computer Science"],
        "dates": "2005",
        "url": "http://www.uaic.ro/studii/facultati-2/facultatea-de-informatica/"
    }, {
        "name": "Gheorghe Asachi University",
        "location": "Iasi, ROU",
        "degree": "Certificate",
        "majors": ["Civil Engineering and Building Services"],
        "dates": "2009",
        "url": "https://ci.tuiasi.ro/?lang=en"
    },
	{
        "name": "Ion Ionescu de la Brad University",
        "location": "Iasi, ROU",
        "degree": "Certificate",
        "majors": ["Agriculture"],
        "dates": "2016",
        "url": "http://www.uaiasi.ro/agricultura/"
    }



	],
    "onlineCourses": [{
        "title": "Front-End Web Development",
        "school": "Udacity",
        "url": " ",
        "dates": "2019"
    }, {
        "title": "Full-stack Web Development",
        "school": "Udemy",
        "url": " ",
        "dates": "2019"
    }]
};

education.display = function() {
    for (var i = 0; i < education.schools.length; i++) {
        $("#education").append(HTMLschoolStart);

        var formattedName = HTMLschoolName.replace("%data%", education.schools[i].name);
        var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
        $(".education-entry:last").append(formattedName + formattedDegree);

        $(".education-entry:last").append(HTMLschoolDates.replace("%data%", education.schools[i].dates));
        $(".education-entry:last").append(HTMLschoolLocation.replace("%data%", education.schools[i].location));
        $(".education-entry:last").append(HTMLschoolMajor.replace("%data%", education.schools[i].majors));

    }

    $("#education").append(HTMLonlineClasses);
    for (var k = 0; k < education.onlineCourses.length; k++) {
        $("#education").append(HTMLschoolStart);

        var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[k].title);
        var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[k].school);
        $(".education-entry:last").append(formattedTitle + formattedSchool);

        $(".education-entry:last").append(HTMLonlineDates.replace("%data%", education.onlineCourses[k].dates));
        $(".education-entry:last").append(HTMLonlineURL.replace("%data%", education.onlineCourses[k].url));
    }
};

education.display();





function inName(name) {
    name = name.trim().split(" ");
    console.log(name);
    name[1] = name[1].toUpperCase();
    name[0] = name[0].slice(0, 1).toUpperCase() + name[0].slice(1).toLowerCase();

    return name[0] + " " + name[1];
}

$('#main').append(internationalizeButton);


$("#mapDiv").append(googleMap);
