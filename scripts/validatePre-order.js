$(document).ready(function() {
    
    //---------------------Focus out function------------------------------------
    
    $(".inputInfo").blur(function() {
        
        if(!$.trim(this.value).length) {
            $(this).css("background-color", "red");
            $(this).attr("placeholder", "Required to fill out");
        }
        else {
            $(this).css("background-color", "white");
        }
    });
    
    $("select").blur(function() {
       console.log($(this).val());
       
       if ($(this).val() === null) {
           console.log("empty select");
           $("select option:first").text("Must choose one..");
           $(this).css("background-color", "red");
       }
       else {
           $(this).css("background-color", "white");
       }
    });
    
    //---------------------End Focus out function------------------------------------
    
    //---------------------Length of input------------------------------------
    
    $("#first").attr("maxlength", "30");
    $("#last").attr("maxlength", "30");
    $("#mail").attr("maxlength", "50");
    
    //---------------------End Length of input------------------------------------
    
    //---------------------Validation function------------------------------------
    
    var Validator = function() {
        var firstName = $("#first").val();
        var lastName = $("#last").val();
        var email = $("#mail").val();
        var edition = $("#edition").val();
        var inputVal = [firstName, lastName, email, edition];
        var message = ["first name", "last name", "e-mail", "edition"];
        var counter = 0;
        
        var mailReg = new RegExp(/^[+a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i);
        
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
            $("input#last").before("<span id='lastNameError'> Please type in your " + message[1] + "." + "</span>");
        }
        else {
            $("#lastNameError").detach();
            counter -= 1;
        }
        
        if (inputVal[2] === "") {
            counter += 1;
            $("#mailError").detach();
            $("input#mail").before("<span id='mailError'> Please type in your " + message[2] + "." + "</span>");
        }
        else if (!mailReg.test(email)) {
            counter += 1;
            $("#mailError").detach();
            $("input#mail").before("<span id='mailError'> Please type in a valid " + message[2] + "." + "</span>");
        }
        else {
            $("#mailError").detach();
            counter -= 1;
        }
        
        if ($("select").val() === null) {
            counter += 1;
            $("#selectError").detach();
            $("#edition").before("<span id='selectError'> Please choose an " + message[3] + "." + "</span>");
        }
        else {
            counter -= 1;
            $("#selectError").detach();
        }
        
        if (counter === -4) {
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
            "background-color": "rgba(0,0,0,0.8)",
            "z-index": "0",
        }).appendTo("body");
    }
    
    function removeOverlay() {
        $("#overlay").remove();
    }
    
    function Modal() {
        
        displayOverlay();
        
        $("#modalTxt").html("First name: " + $("#first").val() + "<br />" +
                                "Last name: " + $("#last").val() + "<br />" +
                                "E-mail: " + $("#mail").val() + "<br />" +
                                "Edition: " + $("#edition").val());
        
        $("#modal").dialog({
            
            resizable: false,
            modal: true,
            buttons: {
                "Accept": function() {
                    removeOverlay();
                    $( this ).dialog( "close" );
                    console.log("submit");
                    $("#pre-orderForm").submit();
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
