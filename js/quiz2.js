// write jQuery or vanilla javascript to do the following:
//  - loop through the list itmes in the <ol> and change their text and color to be different from what it is now
//  - use js and html to create at least one custom accordion (by yourself, no copy paste)
//  - create a button in the html that, once clicked, will fire off the function described in the next buller point
//  - write a function that will fade out all of the html inside the body tag and replace it with a custom goodbye message when you click the button
//  - finally, write a function that makes you happy :D (as in, have some fun a write something cool, it's up to you!)

// accordion jquery
$(document).ready(function($) {
	$('#acc').find(".title").click(function(){
		$(this).next("div").slideToggle('fast');
		$(".info").not($(this).next("div")).slideUp('fast');
	});
}); 

// goodbye submit button
function submission() {
	document.write("goodbye! it was nice knowing you!");
	return false;
}

// loop through items in ol and change style
var ol = document.getElementById("listo");
var items = ol.getElementsByTagName("li");
for (var x=0; x<items.length; x++) {
	items[x].style.color="green";
	items[x].style.fontStyle="italic";
}

// random function
$("div.bigtitle").mouseover(function(){
	$(this).find("span").text("SCARY");
});

// original code fixed
$(document).ready(function($){
	$('.links li a').click(function() {
		alert('you clicked a link, good for you');
	});
});

console.log("this is a message for you!!!");