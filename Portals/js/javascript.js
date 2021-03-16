const Device = "Device picked"
const paragraph = document.getElementById("paragraph-help");
const helpSection = document.getElementById("help-section");
const text = "You have found a device!  There is also a note indicating that it would be better not to kick the machine...";
const textEmergency = "Enter code to teleport spaceship to a secure location.";
const comm = "Hi, I am here to help! You will need to remember this number - 59020, also, don't fall into the black hole."
const input = document.createElement("INPUT")
const acceptCode = document.createElement("BUTTON")

//console.log(helpSection.style.display)
function store_device() {
    if (!helpSection.style.display || helpSection.style.display === "none") { // if it's false then...
        helpSection.style.display = "block";
        document.getElementById("main").style.marginRight = "0";
        if (document.getElementById("paragraph-help").innerHTML.indexOf(text)  < 1){
                paragraph.textContent += text;
                localStorage.setItem("Device", Device);
        } else {
            helpSection.style.display = "block";
        }
    }
}

function close_hint() {

    if (helpSection.style.display === "block") {
        helpSection.style.display = "none";
        document.getElementById("main").style.marginRight = "auto";
    }
}

function changeBackground() {
    document.getElementById("main").style.backgroundColor= "#ffffff";
    document.getElementById("main").style.opacity= "0.7";
}

function incomingComm() {
    if (!helpSection.style.display || helpSection.style.display === "none") {
        helpSection.style.display = "block";
        document.getElementById("main").style.marginRight = "0";
        if (document.getElementById("paragraph-help").innerHTML.indexOf(comm)  < 1){
            paragraph.textContent += comm;
    } } else {
        helpSection.style.display = "block";
    }
}

function emergencyCode(){
    if (!helpSection.style.display || helpSection.style.display === "none") {
        helpSection.style.display = "block";
        document.getElementById("main").style.marginRight = "0";

        input.setAttribute("type", "text");

        if (document.getElementById("paragraph-help").innerHTML.indexOf(textEmergency)  < 1){
            paragraph.textContent += textEmergency;

            paragraph.parentNode.insertBefore(input, paragraph.nextSibling); //adds the node after -- spacing.appendChild(acceptCode);
            input.setAttribute("id", "inputEmergency");

            input.parentNode.insertBefore(acceptCode, input.nextSibling); //adding the button
            acceptCode.setAttribute("id", "enterCode");
            acceptCode.style.height = "20px";
            acceptCode.style.width = "70px";
            acceptCode.innerHTML ="Enter!";

        } else {
            helpSection.style.display = "block";
        }
    }

}