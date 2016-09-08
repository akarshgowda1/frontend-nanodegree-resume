/*
This is empty on purpose! Your code to build the resume will go here.
 */
 
 var bio = {
	 "name":"Akarsh MS",
	 "role":"Front End Developer",
	 "contactinfo":{
		 "mobile":"+918197000791",
		 "email":"www.akarshgowda@gmail.com",
		 "github":"https://github.com/akarshgowda",
		 "location":"Mysore"
	 },
	 "imageurl":"images/fry.jpg",
	 "welcomemessage":"Hello Have a Nice Day",
	 "skills":["coding","webdesigning","teaching"]
 };
 
	bio.display = function(){
	 var formattedname=HTMLheaderName.replace("%data%",bio.name);
	 var formattedrole=HTMLheaderRole.replace("%data%",bio.role);
	 var formattedmobile=HTMLmobile.replace("%data%",bio.contactinfo.mobile);
	 var formattedemail=HTMLemail.replace("%data%",bio.contactinfo.email);
	 var formattedgithub=HTMLgithub.replace("%data%",bio.contactinfo.github);
	 var formattedlocation=HTMLlocation.replace("%data%",bio.contactinfo.location);
	 var formattedimage=HTMLbioPic.replace("%data%",bio.imageurl);
	 var formattedmessage=HTMLwelcomeMsg.replace("%data%",bio.welcomemessage);
	 
	 $("#header").prepend(formattedrole);
	 $("#header").prepend(formattedname);
	 $("#header").prepend(formattedimage);
	 $("#topContacts").append(formattedmobile);
	 $("#topContacts").append(formattedemail);
	 $("#topContacts").append(formattedgithub);
	 $("#topContacts").append(formattedlocation);
	 	 if (bio.skills.length>0)
	 {
		 $("#header").append(HTMLskillsStart);
		 for(i in bio.skills)
		 {
		 var formattedskills=HTMLskills.replace("%data%",bio.skills[i]);
		 $("#skills").append(formattedskills);
		 }
	 }
	 $("#header").append(formattedmessage);
	 

 }
 
 bio.display();
 
 
 var works ={
	 "job":[{
		 "workEmployer":"infosys",
		 "workTitle":"system engineer",
		 "workDates":"2017-2019",
		 "workLocation":"Mysore",
		 "workDescription":"Front end developer as well as a system administrator , had experience with python ,html,css,javascript"
	 }]
 }
 
 works.display = function(){
	 $("#workExperience").append(HTMLworkStart);
	 for(jobs in works.job)
	 {
	 var formattedemployer=HTMLworkEmployer.replace("%data%",works.job[jobs].workEmployer);
	 var formattedworkTitle=HTMLworkTitle.replace("%data%",works.job[jobs].workTitle);
	 var formattedworkDates=HTMLworkDates.replace("%data%",works.job[jobs].workDates);
	 var formattedworkLocation=HTMLworkLocation.replace("%data%",works.job[jobs].workLocation);
	 var formattedworkDescription=HTMLworkDescription.replace("%data%",works.job[jobs].workDescription);
	 $("#workExperience").append(formattedemployer);
	 $("#workExperience").append(formattedworkTitle);
	 $("#workExperience").append(formattedworkDates);
	 $("#workExperience").append(formattedworkLocation);
	  $("#workExperience").append(formattedworkDescription);
	 
	 }
 }
 
 works.display();
 
 var projects={
	 "project":[{
		 "projectTitle":"Gesture based interactive System",
		 "projectDates":"2015-2016",
		 "projectDescription":"Sensors were used to map gestures into computer actions",
		 "projectImage":["images/hanoi.jpg"]
	 },
	 {
		 "projectTitle":"Tower Of Hanoi",
		 "projectDates":"2014-2015",
		 "projectDescription":"Computer graphics Project to simulate tower of hanoi problem",
		 "projectImage":["images/hanoi.jpg","images/hanoi1.jpg"]
	 },
	 {
		 "projectTitle":"VTU resultz",
		 "projectDates":"2012-2015",
		 "projectDescription":"website to display university results first website to search results by name",
		 "projectImage":["images/hanoi.jpg"]
	 }
	 ]
 }
 
 projects.display=function() {
	  $("#projects").append(HTMLprojectStart);
	 for(project1 in projects.project)
	 {
	 var formattedprojectTitle=HTMLprojectTitle.replace("%data%",projects.project[project1].projectTitle);
	 var formattedprojectDates=HTMLprojectDates.replace("%data%",projects.project[project1].projectDates);
	 var formattedprojectDescription=HTMLprojectTitle.replace("%data%",projects.project[project1].projectDescription);
	 $("#projects").append(formattedprojectTitle);
	 $("#projects").append(formattedprojectDates);
	 $("#projects").append(formattedprojectDescription);
	 if(projects.project[project1].projectImage.length > 0)
	 for(image in projects.project[project1].projectImage)
	 {
	var formattedprojectImage=HTMLprojectImage.replace("%data%",projects.project[project1].projectImage[image]);
	 $("#projects").append(formattedprojectImage);
	 }
	}
 }
 
 projects.display();
 
 var education = {
"schools":[{"name":"SVEI",
"major":"science",
"graduationyear":"2008-2010",
"location":"Mysore"
				},
	{"name":"SCPUC",
	"location":"Mysore",
	"major":"science",
	"graduationyear":"2010-2012"
				},
				{
	"name":"VVCE",
	"location":"Delhi",
	"major":"Computer science",
	"graduationyear":"2012-2016"
				}],
	"onlinecourses":[{
		"title":"front end developer",
		"school":"udacity",
		"date":"2016",
		"url":"https://www.udacity.com"
	}]
};

education.display=function()
{	$("#education").append(HTMLschoolStart)
	for(school in education.schools)
	{
		formattedname=HTMLschoolName.replace("%data%",education.schools[school].name);
		formattedlocation=HTMLschoolLocation.replace("%data%",education.schools[school].location);
		formattedmajor=HTMLschoolMajor.replace("%data%",education.schools[school].major);
		formatteddate=HTMLschoolDates.replace("%data%",education.schools[school].graduationyear);
		$("#education").append(formattedname);
		$("#education").append(formatteddate);
		$("#education").append(formattedmajor);
		$("#education").append(formattedlocation);
		
		
		
	}
}

education.display();

function inName(name)
{	
name=name.trim().split(" ");
console.log(name);
name[1]=name[1].toUpperCase();
name[0]= name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
console.log(name[0]);
name= name[0]+" "+name[1];
return name;
}
$("#main").append(internationalizeButton);

$("#mapDiv").append(googleMap);