const Device = "Device picked";
const paragraph = document.getElementById("paragraph-help");
const helpSection = document.getElementById("help-section");
const text = "You have found a device!  There is also a note indicating that it would be better not to kick the machine...";
const textEmergency = "Enter a 5 digit code to teleport spaceship to a secure location.";
const comm = "Hi, I am here to help! You will need to remember this number - 59020, also, don't fall into the black hole.";
const input = document.createElement("INPUT");
const acceptCode = document.createElement("BUTTON");
const errorCode = document.createElement("P");
const doorNote = "The door is locked but you find a note: 'You need a 5 digit code and you have the last 2 in this room'";
const Path = "You have been here already!";
const comb = "Enter the correct combination of numbers for these colours, Purple, Blue and Yellow, using the following format 1,2,3";
const Walking = "Walk path available";
const  mirrorItem = "You have a mirror";
const  weapon = "You have a weapon";
const music = "You have an instrument";
const creatureInteract = "The creature recognises the instrument and eases its attitude with you.";
const weaponCreature = "The creature startles when it sees the weapon and attacks you.";
const mirrorCreature = "The creature seems interested about the mirror and eases its attitude.";
const deadCreature = "You managed a successful shot. The creature leaves a portal in its location after vanishing.";
const deviceAdvicePortal = "Device beeping! - You should definitely take the left portal to avoid a certain death.";
const finalAdvice = "Device beeping! - You have reached the final room!";

function changeBackground() {
    document.getElementById("main").style.backgroundColor= "#FFFFFFB3";
}

function changeBackgroundCity() {
    document.getElementById("main").style.backgroundColor = "#ACC8E580";
}

function CreatureAdjust() {
    document.getElementById("article-main").style.marginTop = "0";
    document.getElementById("article-main").style.marginBottom = "0";

    if ("weapon" in localStorage) {
        document.getElementById("western-hidden-weapon").style.display = "block";
    } else if ("music" in localStorage) {
        document.getElementById("western-hidden-music").style.display = "block";
    } else if ("mirrorItem" in localStorage) {
        document.getElementById("western-hidden-mirror").style.display = "block";
    }
}

function itemCheck() {
    if ("weapon" in localStorage) {
        document.getElementById("western-hidden-weapon").style.display = "block";
    } else if ("music" in localStorage) {
        document.getElementById("western-hidden-music").style.display = "block";
    } else if ("mirrorItem" in localStorage) {
        document.getElementById("western-hidden-mirror").style.display = "block";
    }
}

function creatureInteractAdjust() {
    document.getElementById("article-main").style.marginTop = "0";
    document.getElementById("article-main").style.marginBottom = "0";
}

function doorsMain() {
    document.getElementById("article-main").style.margin = "0";
    document.getElementById("main").style.maxHeight = "1000px";
    document.getElementById("grid-space").style.marginBottom = "15px";
}

//console.log(helpSection.style.display)
function store_device() {
        helpSection.style.display = "block";
        document.getElementById("main").style.marginRight = "0";
        if (document.getElementById("paragraph-help").innerHTML.indexOf(text)  < 1){
                paragraph.textContent += text;
                localStorage.setItem("Device", Device);
        } else {
            helpSection.style.display = "block";
        }
}

function close_hint() {
    if (helpSection.style.display === "block") {
        helpSection.style.display = "none";
        document.getElementById("main").style.marginRight = "auto";
    }
}

function incomingComm() {
    helpSection.style.display = "block";
    document.getElementById("main").style.marginRight = "0";
    document.getElementById("help-section").style.backgroundColor = "#FFFFFFB3";
    //https://kilianvalkhof.com/2016/css-html/css-hexadecimal-colors-with-transparency-a-conversion-tool/
    if (document.getElementById("paragraph-help").innerHTML.indexOf(comm)  < 1){
        paragraph.textContent += comm;
    } else {
        helpSection.style.display = "block";
    }
}

function emergencyCode(){
    helpSection.style.display = "block";
    document.getElementById("help-section").style.backgroundColor = "#FFFFFFB3";
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

        document.getElementById("enterCode").onclick = function() {enteringCode()};

    } else {
        helpSection.style.display = "block";
    }
}

function enteringCode() {
    const userCode = document.getElementById("inputEmergency").value;
    if (userCode === "59020"){
        window.location.href = "../city/city.html"
    } else if (userCode === "") {
        return false;
    } else {
        window.location.href = "../western/western-noise.html"
    }
}

function openDoor() {
    helpSection.style.display = "block";
    document.getElementById("main").style.marginRight = "0";
    document.getElementById("help-section").style.backgroundColor = "#ACC8E580";
    if (document.getElementById("paragraph-help").innerHTML.indexOf(doorNote) < 1) {
        paragraph.textContent += doorNote;
    } else {
        helpSection.style.display = "block"
    }
}

function storePath() {
    localStorage.setItem("Path", Path);
}

function addLocation() {
    localStorage.setItem("Walking", Walking);
}

function checkingPath() {
    if ("Walking" in localStorage) {
        document.getElementById("hidingItem").style.visibility = "visible";
    }
}

function runOrPath(){
    if("Walking" in localStorage){
        document.getElementById("trace-back").style.display = "block"
    }else {
        document.getElementById("hide-run").style.display = "block"
    }
}

function  alreadyHere() {
    if ("Path" in localStorage) {
        helpSection.style.display = "block";
        document.getElementById("help-section").style.backgroundColor = "#ACC8E580";
        document.getElementById("main").style.marginRight = "0";
        if (document.getElementById("paragraph-help").innerHTML.indexOf(Path) < 1) {
            paragraph.textContent += Path;
        } else {
            helpSection.style.display = "block"
        }
    }
}

function keyboard() {
    helpSection.style.display = "block";
    document.getElementById("main").style.marginRight = "0";
    document.getElementById("help-section").style.backgroundColor = "#ACC8E580";
    if (document.getElementById("paragraph-help").innerHTML.indexOf(comb)  < 1){
        paragraph.textContent += comb;
        document.getElementById("help-section").style.maxHeight = "300px";

        paragraph.parentNode.insertBefore(input, paragraph.nextSibling); //adds the node after -- spacing.appendChild(acceptCode);
        input.setAttribute("id", "inputEmergency");

        input.parentNode.insertBefore(acceptCode, input.nextSibling); //adding the button
        acceptCode.setAttribute("id", "enterCode");
        acceptCode.style.height = "20px";
        acceptCode.style.width = "70px";
        acceptCode.innerHTML ="Confirm";

        document.getElementById("enterCode").onclick = function() {colorComb()};

    } else {
        helpSection.style.display = "block";
    }
}

function colorComb() {
    const userComb = document.getElementById("inputEmergency").value;
    if (userComb === "2,10,5"){
        window.location.href = "../mixed-rooms/final-boss.html"
    } else if (userComb === "") {
        return false;
    } else {
        document.getElementById("help-section").style.maxHeight = "375px";
        acceptCode.parentNode.insertBefore(errorCode, acceptCode.nextSibling);
        errorCode.setAttribute("id", "error-code");
        errorCode.textContent = "Wrong combination, try again."
    }
}

function mirror() {
    localStorage.setItem("mirrorItem", mirrorItem);
    document.getElementById("itemMirror").style.pointerEvents = "none";
    document.getElementById("itemInst").style.pointerEvents = "none";
    document.getElementById("itemWeap").style.pointerEvents = "none";
    if ("weapon" in localStorage) {
        localStorage.removeItem('weapon');
    }
    if ("music" in localStorage) {
        localStorage.removeItem('music');
    }
}

function musicInstr() {
    localStorage.setItem("music", music);
    document.getElementById("itemMirror").style.pointerEvents = "none";
    document.getElementById("itemInst").style.pointerEvents = "none";
    document.getElementById("itemWeap").style.pointerEvents = "none";

    if ("weapon" in localStorage) {
        localStorage.removeItem('weapon');
    }
    if ("mirrorItem" in localStorage) {
        localStorage.removeItem('mirrorItem');
    }
}

function fireWeap() {
    localStorage.setItem("weapon", weapon);
    document.getElementById("itemMirror").style.pointerEvents = "none";
    document.getElementById("itemInst").style.pointerEvents = "none";
    document.getElementById("itemWeap").style.pointerEvents = "none";

    if ("music" in localStorage) {
        localStorage.removeItem('music');
    }
    if ("mirrorItem" in localStorage) {
        localStorage.removeItem('mirrorItem');
    }
}

function helpCreature() {
    document.getElementById("help-section").style.display = "block";
    document.getElementById("main").style.marginRight = "0";
    if (document.getElementById("paragraph-help").innerHTML.indexOf(creatureInteract )  < 1){
        document.getElementsByClassName("button-hint-close")
        paragraph.textContent += creatureInteract ;
        paragraph .parentNode.insertBefore(acceptCode, paragraph .nextSibling); //adding the button
        acceptCode.setAttribute("id", "enterCode");
        acceptCode.style.height = "20px";
        acceptCode.style.width = "70px";
        acceptCode.innerHTML ="Play";
        acceptCode.addEventListener("click", nextPhase);

    } else {
        helpSection.style.display = "block";
    }
}

function attackCreature() {
    document.getElementById("help-section").style.display = "block";
    document.getElementById("main").style.marginRight = "0";
    document.getElementById("disabling").style.pointerEvents = "none";
    if (document.getElementById("paragraph-help").innerHTML.indexOf(weaponCreature )  < 1){
        document.getElementsByClassName("button-hint-close")
        paragraph.textContent += weaponCreature ;
        paragraph .parentNode.insertBefore(acceptCode, paragraph .nextSibling); //adding the button
        acceptCode.setAttribute("id", "enterCode");
        acceptCode.style.height = "20px";
        acceptCode.style.width = "70px";
        acceptCode.innerHTML ="Shoot";
        acceptCode.addEventListener("click", attack);

    } else {
        helpSection.style.display = "block";
    }
}

function showMirror() {
    document.getElementById("help-section").style.display = "block";
    document.getElementById("main").style.marginRight = "0";
    if (document.getElementById("paragraph-help").innerHTML.indexOf(mirrorCreature )  < 1){
        document.getElementsByClassName("button-hint-close")
        paragraph.textContent += mirrorCreature ;
        paragraph .parentNode.insertBefore(acceptCode, paragraph .nextSibling); //adding the button
        acceptCode.setAttribute("id", "enterCode");
        acceptCode.style.height = "20px";
        acceptCode.style.width = "70px";
        acceptCode.innerHTML ="Show it";
        acceptCode.addEventListener("click", nextPhase);

    } else {
        helpSection.style.display = "block";
    }
}

function nextPhase() {
    window.location.href = "western-creature-help.html"
}

function attack() {
    window.location.href = "western-creature-attack.html"
}

function dice() {
    const luck = Math.floor(Math.random() * Math.floor(10));
    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
    if (luck <= 4) {
        document.getElementById("help-section").style.display = "block";
        document.getElementById("main").style.marginRight = "0";
        if (document.getElementById("paragraph-help").innerHTML.indexOf(deadCreature  )  < 1){
            paragraph.textContent += deadCreature ;
            paragraph .parentNode.insertBefore(acceptCode, paragraph .nextSibling); //adding the button
            acceptCode.setAttribute("id", "enterCode");
            acceptCode.style.height = "20px";
            acceptCode.style.width = "70px";
            acceptCode.innerHTML ="Enter";
            acceptCode.addEventListener("click", afterShot);
            }
   } else {
       window.location.href = "../mixed-rooms/gameover.html";
    }
}

function afterShot() {
    window.location.href = "../mixed-rooms/final-boss.html";
}

function deviceBeep() {
    document.getElementById("article-main").style.marginBottom = "85px";
    if ("Device" in localStorage){
        helpSection.style.display = "block";
        document.getElementById("main").style.marginRight = "0";
        if (document.getElementById("paragraph-help").innerHTML.indexOf(deviceAdvicePortal)  < 1){
            paragraph.textContent += deviceAdvicePortal;
        } else {
            helpSection.style.display = "block";
        }
    }
}

function deviceBeepFinal() {
    if ("Device" in localStorage){
        helpSection.style.display = "block";
        document.getElementById("main").style.marginRight = "0";
        if (document.getElementById("paragraph-help").innerHTML.indexOf(finalAdvice)  < 1){
            paragraph.textContent += finalAdvice;
        } else {
            helpSection.style.display = "block";
        }
    }
}

function changeItems() {
    if ("music" in localStorage) {
        localStorage.removeItem('music');
    }
    if ("mirrorItem" in localStorage) {
        localStorage.removeItem('mirrorItem');
    }

    window.location.href = "../mixed-rooms/final-boss.html";
}

/**
 *  Final boss memory test.
 */
function memoryTest() {
    helpSection.style.display = "block";
    document.getElementById("main").style.marginRight = "0";
    document.getElementsByClassName("button-hint-close")
    paragraph.textContent += weaponCreature ;

    paragraph.parentNode.insertBefore(input, paragraph.nextSibling); //adds the node after -- spacing.appendChild(acceptCode);
    input.setAttribute("id", "inputEmergency");

    input.parentNode.insertBefore(acceptCode, input.nextSibling); //adding the button
    acceptCode.setAttribute("id", "enterCode");
    acceptCode.style.height = "20px";
    acceptCode.style.width = "70px";
    acceptCode.innerHTML ="Confirm";
    acceptCode.style.b

    document.getElementById("enterCode").onclick = function() {colorComb()};
    if(count() < userCount){

    }
}

/**
 *  Counting pages.
 */
function count() {
    const status = sessionStorage.getItem("Refresh");
    if (!status){
        sessionStorage.setItem("Refresh", "1");
    }else {
        sessionStorage.setItem("Refresh", `${parseInt(status) + 1}`);  //String using parseInt inside.
    }
    console.log(status);
    return status;
}

function resetCount() {
    sessionStorage.clear();
    localStorage.clear();
}
