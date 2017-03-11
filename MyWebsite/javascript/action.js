// action.js
// Alex Golub

// Get date and time
var d = new Date();
document.getElementById("date").innerHTML = d;


function validateForm() 
{
	// Check the name
    var x = document.myForm.name.value;
    console.log(x);
    if (x === null || x === "") 
    {
        alert("Name must be filled out");
        return false;
    }
    console.log(x.length);
    if (x.length > 20) 
    {
        alert("Name must be less than 20 characters");
        return false;
    }
    if (!isNaN(x)) 
    {
        alert("Name cannot be a number");
        return false;
    }
	var letters = /^[a-zA-Z\s]+$/; 
	if(document.myForm.name.value.match(letters)) 
	{  
		return true; 
	} 
	else 
	{ 
		alert('Only alphabet characters and spaces are accepted'); 
		return false; 
	} 
    
    // Check email
    var e = document.myForm.email.value;
    var atpos = e.indexOf("@");
	var dotpos = e.lastIndexOf(".");
	if (e === null || e === "") 
    {
        alert("Email must be filled out");
        return false;
    }
	if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= e.length) 
	{
		alert("Not a valid e-mail address");
		return false;
	}

}
