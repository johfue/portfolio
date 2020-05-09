function ajaxObj(meth, url) {
    var xhr = new XMLHttpRequest();
    xhr.open(meth, url, true);
	xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	return xhr;
}

function ajaxReturn(xhr) {
	if (xhr.readyState == 4 && xhr.status == 200) {
	    return true;
	}
}

function _(x) {
	return document.getElementById(x);
}

function disable(bool) {
    var element = 	_("email").disabled = bool;
                    _("name").disabled = bool;
	                _("message").disabled = bool;
	                _("submit").disabled = bool;
    return element;
}

function feedback(status) {
    var feedbackHandle =
	                    _("submitIcon").setAttribute("src","images/"+status+".svg");
	                    _("submit").setAttribute("value", status);
	                    _("submitText").innerHTML = status.charAt(0).toUpperCase() + status.slice(1);
    return feedbackHandle;
}

function contacting() {
	disable(true);
	_("submitIcon").setAttribute("src","/images/wait.gif");
	_("submit").setAttribute("value","sending");
	_("submitText").innerHTML = "Sending";
	_("error1").setAttribute("src","/images/blank.png");
	_("error2").setAttribute("src","/images/blank.png");
	_("error3").setAttribute("src","/images/blank.png");
	_("errorText1").innerHTML = "";
	_("errorText2").innerHTML = "";
	_("errorText3").innerHTML = "";
	
    var name = _('name').value;
    var email = _('email').value;
    var message = _('message').value;
    var inputArray = [email, name, message];
    var errorArray = ["", "Please enter a valid email address", "Please provide a name", "Please enter a message"];
    if (name === "" || email === "" || message === "") {
        
        for (var i=0; i<3; i++) {
            if (inputArray[i] === "") {
            _("error"+(i+1)).setAttribute("src","/images/exclaOutline.svg");
	        _("errorText"+(i+1)).innerHTML = errorArray[(i+1)];
            }
        }
        
	    feedback("send");
	    _("success").classList.add("failure");
	    _("success").innerHTML = "<img src='images/exclaCircle.svg'> Please fill out all fields";
	    disable(false);
    }

    else {
        var ajax = ajaxObj("POST", "contacter.php");
        ajax.onreadystatechange = function() {
	        if(ajaxReturn(ajax)) {
	            if (ajax.responseText != "Message sent") {
	               	var error = ajax.responseText.split('|');
	                
	                for (var i=0; i<4; i++) {
	                    if (error[i] !== "") {
	                        _("error"+i).setAttribute("src", "/images/exclaOutline.svg");
	                        _("errorText"+i).innerHTML = errorArray[i];
	                    }
	                }
	                
	                feedback("send");
	                _("success").classList.add("failure");
	                _("success").innerHTML = "<img src='images/exclaCircle.svg'>"+"You have a few errors";
	                disable(false);
	            }
	            
	            else {
	                disable(true);
	                _('submitIcon').classList.remove("inactive");
                    feedback("sent");
	                _("success").classList.remove("failure");
	                _("success").innerHTML = ajax.responseText;
	            }
	        }
        };
        ajax.send("name="+name+"&email="+email+"&message="+message);
    }
}
