var name = "Roy Goonewardena";
var role = "Sales Engineer";
var conactGeneric = {
	"Address01" : "13 Warren House",
	"Address02" : "Bromley High Stree",
	"City"		: "London",
	"PostCode"	: "E3 3HB", 
	"Country"	: "United Kingdom"
}

var  email = "roigiano@gmail.com";
var  mobile = "07590042261"; 


var skills = [ "Java" , "C#" , ".Net"]; 
var bio  = {
		"name" 		: name,
		"role"  	: role,
		"contact" 	: conactGeneric,
		contactString : function () {
							var contactDetails = this.contact; 
						    var reBuiltString = ""; 
							for (var contactProperty in contactDetails) {
								 reBuiltString  += contactDetails[contactProperty] + ", ";
							     console.log(contactProperty);
							 }
							 console.log(reBuiltString);
							 return (reBuiltString.slice(0, -2));
 						},
		"email"		: email,
		"mobile"	: mobile,
		"skills"  	: skills,
		"image"		: "images/fry.jpg",
		"welcomeMsg": "Welcome to my Bio"
}

var education = {
	"institutions"	: [
	{
			"name" : "University of Liverpool",
			"year" : 2008, 
			"city" : "Liverpool",
			"majors" : ["Software Engeering", "Telecoms"]
	},
	{
			"name" : "National Institute of Business Management",
			"year" : 1992, 
			"majors" : ["Software Systems Design", "Mainframes", "AS/400"],
			"country" : "Sri Lanka"
	}
	]
}

$("#header").prepend(HTMLheaderName.replace("%data%", bio["name"]));
$("#topContacts").before(HTMLheaderRole.replace("%data%", bio.role));
var contactHTML = HTMLcontactGeneric.replace(/%contact%|%data%/gi, 
												function(matched){
												  // console.log(matched)
											  	  if (matched === "%contact%")	
											      		return "Home Address : ";
											      else 
											      	if (matched === "%data%") {
											      		var cString = bio.contactString();
											      		return cString; 
											      	}
												}
											);
console.log(contactHTML);
$("#topContacts").append(contactHTML);
// $("#topContacts").append(HTMLcontactGeneric.replace("%data%", bio["contactString"]))
$("#topContacts").append(HTMLmobile.replace("%data%", bio.mobile));
$("#topContacts").append(HTMLemail.replace("%data%", bio.email));
if (bio["skills"].length > 0 ){
	$("#skillsChart").append(HTMLskillsStart);
	for (var skill in bio["skills"]) { 
		// there are some skills in the object.. append them to the skills 
		 
		var mySkills = HTMLskills.replace("%data%", bio["skills"][skill].toString() );
		$("#skills").append(mySkills);
	}
}

var individualLocation = function(X,Y) {  
							this.pageX  = X;
							this.pageY  = Y;
							this.outLocation = function() {
							 					return this.pageX + ', ' + this.pageY ;
											    }
}

var clickLocations = new Array();

function LogClicks(X,Y) {   
  	var clickedLoc =  new individualLocation(X, Y);
  	clickLocations.push(clickedLoc);
}

$(document).click(function(loc){
	 LogClicks(loc.pageX, loc.pageY);  
	 // console.log(loc.pageX, loc.pageY); 
});

$('#listLocations').click(function() {
    for (var nextLocation in clickLocations) {
    	console.log(clickLocations[nextLocation].outLocation());
    }
});

/* var audacity = "audacity";
var udacity = audacity.slice(1);
var udacity = udacity.charAt(0).toUpperCase() + udacity.slice(1);

console.log(udacity); 

var newArray = [];
var myArray = [0,0,7];

newArray = myArray;
var indx = newArray.length;
console.log(indx);
if (indx > 0) {
	newArray[(indx - 1)] += 1;
}

console.log	(newArray);

var royJumbled = "rOy mArCELino GooNEEwarDena  ";
var nameArrary = royJumbled.split(" ");

for (var i = 0; i < nameArrary.length; i++) {
	console.log (nameArrary[i]);
	var splitName = nameArrary[i];
	var newName = "";
	for (var y = 0; y< splitName.length; y++){
		 
		 if (y == 0)
		 	newName = splitName.charAt(y).toUpperCase();
		 else
		 	newName += splitName.charAt(y).toLowerCase();

	}
	nameArrary[i] = newName;
 }

console.log(nameArrary.join(" "));
*/



