// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// When the user clicks on the button, open the modal 
btn.onclick = function() {

	  rs_alertbox("this is my custom alertbox message!"); 
	   
}


function rs_alertbox (msg) {

	// Get the modal
	var modal = document.getElementById('myModal');

	modal.style.display = "block";

	// Get the <span> element that closes the modal
	var span = document.getElementsByClassName("close")[0];
	

	document.getElementById("alert_msg").innerHTML = msg;

	// When the user clicks on <span> (x), close the modal
	span.onclick = function() {
	    modal.style.display = "none";
	}

	// When the user clicks anywhere outside of the modal, close it
	window.onclick = function(event) {
	    if (event.target == modal) {
	        modal.style.display = "none";
	    }
	}
}

