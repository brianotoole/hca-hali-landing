/*!
 * Send form to Slack #channel *
*/

var payload = {
	"text": "New Form Submission via VolusiaTaxReform.com",
	"token": "xoxp-3598109530-3750486977-12183423939-49e4786b2e",
	"attachments": [
	
		{
			"pretext": "Sent by: VolusiaTaxReform.com",
			"fallback": "via <http://VolusiaTaxReform.com/>",
			"color": "#DA1F26",
			"mrkdwn_in": ["pretext"],
	
			"fields": []
		}
		
	]
};

function setFormData() {
    payload.attachments[0].pretext = "First Name: " + document.querySelector('input#first_name').value + "\n" + "Last Name: " + document.querySelector('input#last_name').value + "\n" + "City: " + document.querySelector('input#city').value + "\n" + "Email: " + document.querySelector('input#email').value;
	
	}

function sendPayloadToSlack() {
	var URL = 'https://hooks.slack.com/services/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';
	var data = JSON.stringify(payload);
	
	var xhr = new XMLHttpRequest();
	
	if (!xhr) {
		alert('Error. Cannot create an XMLHTTP instance.');
		return false;
	}
	
	function xhrSuccess() {
		console.log(xhr.responseText);
	}
	
	function xhrError() {
		console.log(xhr.responseText);
	}

	xhr.addEventListener('load', xhrSuccess);
	xhr.addEventListener('error', xhrError);
	//xhr.addEventListener('abort', function(){alert("aborted");});
	
	xhr.open('POST', URL);
	xhr.send(data);
}
function collectAndSend() {	
		setFormData();
		sendPayloadToSlack();
	}
	
//recreate wpc7 on.submit.ok create the click function manually...
$('button[type="submit"').click(function() { 
  if (document.getElementById("email").value.length == 0) {
	document.getElementById("validation").innerHTML=("<p class=\"error\">Please fill out all fields above.</p>");
	return false;
  } else {
  	collectAndSend(); // send to Slack
  	//document.getElementById("validation").innerHTML=("<p class=\"success\">Thank you for your submission. Your submission has been sent successfully.</p>");
  	window.location = 'http://volusiataxreform.com/thank-you.html';
  	return false;
  }
	
});