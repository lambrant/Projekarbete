$(document).ready(function() {
    
    //---------------------Zip validation function------------------------------------
    
    var zipTest = function(zip) {
        if (zip.match("^(0|[1-9][0-9]*)$")) {
            return zip;
        }
        else {
            return false;
        }
    };
    
    //---------------------End Zip validation function------------------------------------
    
    //---------------------Focus out function------------------------------------
    
    var FocusOut = function(input) {
        switch(input){
            case "firstName":
                $("input#firstName").blur(function () {
                    console.log("hey");
	                $(this).after("<span class='blur'> blur() triggered! </span>");
	                $("span").filter('.blur').fadeOut(4000);
	  
                });
                break;
            case "lastName":
                $("input#lastName").blur(function () {
                    console.log("hey");
	                $(this).after("<span class='blur'> blur() triggered! </span>");
	                $("span").filter('.blur').fadeOut(4000);
	  
                });
                break;
            case "email":
                $("input#mail").blur(function () {
                    console.log("hey");
	                $(this).after("<span class='blur'> blur() triggered! </span>");
	                $("span").filter('.blur').fadeOut(4000);
	  
                });
                break;
            case "zip":
                break;
        }
    };
    
    //---------------------End Focus out function------------------------------------
    
    //---------------------Validation function------------------------------------
    
    var Validator = function() {
        var firstName = $("#first").val();
        var lastName = $("#last").val();
        var email = $("#mail").val();
        var zip = $("#zip").val();
        var price = $("#price").val();
        var inputVal = [firstName, lastName, email, zip, price];
        var message = ["first name", "last name", "e-mail", "zip-code", "price model"];
        var counter = 0;
        
        var mailReg = new RegExp(/^[+a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i);
        
       if (FocusOut("firstName")) {
            console.log("focusOut");
            $("#firstNameError").detach();
            $("input#first").after("<span id='firstNameError'> Please type in your " + message[0] + "." + "</span>");
        }
        
        if (inputVal[0] === "") {
            counter += 1;
            $("#firstNameError").detach();
            $("input#first").before("<span id='firstNameError'> Please type in your " + message[0] + "." + "</span>");
        }
        else {
            $("#firstNameError").detach();
            counter -= 1;
        }
        
        if (inputVal[1] === "") {
            counter += 1;
            $("#lastNameError").detach();
            $("input#last").after("<span id='lastNameError'> Please type in your " + message[1] + "." + "</span>");
        }
        else {
            $("#lastNameError").detach();
            counter -= 1;
        }
        
        if (inputVal[2] === "") {
            counter += 1;
            $("#mailError").detach();
            $("input#mail").after("<span id='mailError'> Please type in your " + message[2] + "." + "</span>");
        }
        else if (!mailReg.test(email)) {
            counter += 1;
            $("#mailError").detach();
            $("input#mail").after("<span id='mailError'> Please type in a valid " + message[2] + "." + "</span>");
        }
        else {
            $("#mailError").detach();
            counter -= 1;
        }
        
        if (inputVal[3] === "") {
            counter += 1;
            $("#zipError").detach();
            $("input#zip").after("<span id='zipError'> Please type in your " + message[3] + "." + "</span>");
        }
        else if (inputVal[4]) {
            if (zipTest(zip) === false) {
                counter += 1;
                $("#zipError").detach();
                $("input#zip").after("<span id='zipError'> Please type a valid " + message[3] + "." + "</span>");
            }
            else {
                $("#zipError").detach();
                counter -= 1;
            }
        }
        else {
            $("#zipError").detach();
            counter -= 1;
        }
        
        if (counter < -2) {
            console.log(counter);
            return true;
        }
        else {
            console.log(counter);
            return false;
        }
    };
    
    //---------------------End Validation function------------------------------------
    
    //---------------------Modal pop up window------------------------------------
    
    function displayOverlay() {
        $("<div id='overlay'></div>").css({
            "position": "fixed",
            "top": "0px",
            "left": "0px",
            "width": "100%",
            "height": "100%",
            "background-color": "rgba(0,0,0,0.1)",
            "z-index": "0",
        }).appendTo("body");
    }
    
    function removeOverlay() {
        $("#overlay").remove();
    }
    
    function Modal() {
        
        displayOverlay();
        
        $("#modalTxt").text("First name: " + $("#first").val() + 
                                "Last name: " + $("#last").val() + 
                                "E-mail: " + $("#mail").val() + 
                                "Zip-code: " + $("#zip").val() + 
                                "Price model: " + $("#price").val());
        
        $("#modal").dialog({
            
            resizable: false,
            modal: true,
            buttons: {
                "Accept": function() {
                    removeOverlay();
                    $( this ).dialog( "close" );
                    $("#validForm").submit();
                },
                Cancel: function() {
                    removeOverlay();
                    $( this ).dialog( "close" );
                    return;
                }
            }
        });
    }
    
    //---------------------End modal pop up window------------------------------------
    
    //---------------------Button on click event------------------------------------
    
    $("#sendButton").click(function(event) {
        
        if (Validator() === false) {
            console.log("not valid");
            event.preventDefault();
        }
        else {
            Modal();
        }
    });
    
    //---------------------End Button on click event------------------------------------
});
