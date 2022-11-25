// Add your code here

let globalStyle = document.createElement("style");
globalStyle.innerHTML = " \
    .user-input{\
        float: right;\
        width: 240px;\
        text-align: left;\
        padding-left: 5px;\
        align-items: normal;\
        margin-top: 27px;\
        margin-right: 10px;\
    }\
    .label-bold{\
        font-weight: bold;\
        display: inline-flex;\
        font-size:medium;\
    }\
}";

document.head.appendChild(globalStyle);

// creating a form container to contain all elements
let formSelect = document.querySelector("form");
formSelect.style.border = "2px solid";
formSelect.style.borderRadius = "10px";
formSelect.style.margin = "auto";

// USERNAME START
//username label
let userNameSet = document.createElement("div");
let userNameLabel = document.createElement("label");
userNameLabel.setAttribute("for", "username");
userNameLabel.className = "label-bold";
userNameLabel.innerHTML = "NAME: ";

let userNameInput = document.createElement("input");
userNameInput.className = "user-input";
userNameInput.setAttribute("type", "text");
userNameInput.setAttribute("id", "username");
userNameInput.size = "25";
userNameInput.maxLength = "30";

userNameSet.appendChild(userNameLabel);
userNameSet.appendChild(userNameInput);
// appending to form
formSelect.appendChild(userNameSet);

// USERNAME END

// EMAIL START
// email label
let emailSet = document.createElement("div");
let emailLabel = document.createElement("label");
emailLabel.setAttribute("for", "email");
emailLabel.className = "label-bold";
emailLabel.innerText = "EMAIL: ";

// email input
let emailInput = document.createElement("input");
emailInput.className = "user-input";
emailInput.setAttribute("type", "text");
emailInput.setAttribute("id", "email");
emailInput.size = "25";
emailInput.maxLength = "30";

// appending label and input to the email container
emailSet.appendChild(emailLabel);
emailSet.appendChild(emailInput);
// appending to form
formSelect.appendChild(emailSet);

// EMAIL END

// COMMENT BOX START
// comment label
let commentSet = document.createElement("div");
let commentLabel = document.createElement("label");
commentLabel.setAttribute("for", "comment-area");
commentLabel.className = "label-bold";
commentLabel.innerText = "COMMENTS: ";

// comment input
let commentInput = document.createElement("textarea");
commentInput.className = "user-input";
commentInput.setAttribute("type", "textarea");
commentInput.setAttribute("id", "comment-area");
commentInput.cols = "25";
commentInput.rows = "5";

// appending label and input to the comment container
commentSet.appendChild(commentLabel);
commentSet.appendChild(commentInput);
// append to form
formSelect.appendChild(commentSet);

// COMMENT BOX END

// SUBMIT BUTTON START
// submit button label
let submitSet = document.createElement("div");
submitSet.style.display = "inline-flex";

// submit button input
let submitInput = document.createElement("button");
submitInput.type = "submit";
submitInput.name = "submit";
submitInput.value = "Submit";
submitInput.innerText = "Submit";
submitInput.style.border = "2px solid";
submitInput.style.borderColor = "green";
submitInput.style.backgroundColor = "green";
submitInput.style.color = "white";
submitInput.style.width = "50%";
submitInput.style.padding = "10px";
submitInput.style.borderRadius = "5px";
submitInput.style.margin = "3px";

// on hovering over button, change appearance
submitInput.onmouseover = function(){
    submitInput.style.borderColor = "black";
    submitInput.style.backgroundColor = "orange";
    submitInput.style.color = "black";
}

// on mouse not hovering over button, reset to default values
submitInput.onmouseout = function(){
    submitInput.style.borderColor = "green";
    submitInput.style.backgroundColor = "green";
    submitInput.style.color = "white";
}

// gathering form information and output to console on submit click
// submitInput.onclick = function (){
let formCheck = document.getElementById("flexForm").onsubmit = function(){
    // var creation for use        
    let usernameInputValue = document.getElementById("username").value;
    let emailInputValue = document.getElementById("email").value;
    let commentInputValue = document.getElementById("comment-area").value;
    
    let answers = document.getElementsByName("answer");
    let selectedAnswer;

    // check if any necessary details were provided in the form at time of "Submit" click
    // if "username" and "email" has not been provided, console outputs error message
    if(usernameInputValue === "" || emailInputValue === ""){
        console.warn("You must enter some data to submit this form");
    }
    // else, "username" and "email" has been provided, proceed with console output
    else{
        console.log(String("========= Form Submission ========="));
        console.log(String("Username: " + usernameInputValue));
        console.log(String("Email: " + emailInputValue));
        console.log(String("Comments: " + commentInputValue));
    
        // loop through each radio option to determine which value was selected (or if there was a selection)
        for (var i = 0; i < answers.length; i++){
            if(answers[i].checked){
                selectedAnswer = answers[i].value;
            }
        }
        alert("Your comments have been submitted");
    }
    // returning false here prevents the page from refreshing and allows 
    // the console to be viewed with provided information

    return false;
}

// appending input to submit container
submitSet.appendChild(submitInput);
// SUBMIT BUTTON END

// RESET BUTTON START

// reset button input
let resetInput = document.createElement("button");
resetInput.type = "reset";
resetInput.name = "reset";
resetInput.value = "Reset";
resetInput.innerText = "Reset";
resetInput.style.border = "2px solid";
resetInput.style.borderColor = "green";
resetInput.style.backgroundColor = "white";
resetInput.style.color = "green";
resetInput.style.width = "50%";
resetInput.style.padding = "10px";
resetInput.style.borderRadius = "5px";
resetInput.style.margin = "3px";

// on hovering over button, change appearance
resetInput.onmouseover = function(){
    resetInput.style.borderColor = "black";
    resetInput.style.backgroundColor = "black";
    resetInput.style.color = "white";
}

// on mouse not hovering over button, reset to default values
resetInput.onmouseout = function(){
    resetInput.style.borderColor = "green";
    resetInput.style.backgroundColor = "white";
    resetInput.style.color = "green";
}

// appending input to reset container
submitSet.appendChild(resetInput);
//appending to form
formSelect.appendChild(submitSet);
// RESET BUTTON END

// accordion button
let buttonAccordion = document.getElementsByClassName("accordion");

for (let i = 0; i < buttonAccordion.length; i++) {
  buttonAccordion[i].addEventListener("click", function() {
    this.classList.toggle("active");
    let panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}