function myFunction()
{

	if (document.getElementById('fname').value == "") {
		alert("Please enter your Name");
		return false;
	}
	if (document.getElementById('Ename').value == "") {
		alert("Please enter your Email");
		return false;
	}
	if (document.getElementById('Cname').value == "") {
		alert("Please enter your Contact Number");
		return false;
	}
	if (document.getElementById('Message').value == "") {
		alert("Please enter your Message");
		return false;
	}
	document.registration.reset();

	var form = new FormData();
	form.append("tomail", "shivangimaheshwari912@gmail.com");
	form.append("subject", "Query From Website");
	form.append("content", "Name : "+document.getElementById('fname').value+"<br>Email :"+document.getElementById('Ename').value+"<br>Contact : "+document.getElementById('Cname').value+"<br>Message : "+document.getElementById('Message').value+"");

	var settings = {
		"url": "http://15.206.194.31/apis/mailjet.php",
		"method": "POST",
		"timeout": 0,
		"processData": false,
		"mimeType": "multipart/form-data",
		"contentType": false,
		"data": form
	};

	$.ajax(settings).done(function (response) {
		console.log(response);
	});
}


