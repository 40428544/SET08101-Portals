const Device = "Device picked";
const paragraph = document.getElementById("paragraph-help");
const helpSection = document.getElementById("help-section");
const text = "You have found a device!  There is also a note indicating that it would be better not to kick the machine...";
const textEmergency = "Enter a 5 digit code to teleport spaceship to a secure location.";
const comm = "Hi, I am here to help! You will need to remember this number - 59020, also, don't fall into the black hole.";
const input = document.createElement("INPUT");
const acceptCode = document.createElement("BUTTON");
const errorCode = document.createElement("P");
const doorNote = "The door is locked but when you look closer you see another sign explaining that you need a 3 numbers for three colours.";
const Path = "You have been here already!";
const comb = "Enter the correct combination of numbers for these colours, Purple, Blue and Yellow, using the following format 1,2,3";
const Walking = "Walk path available";
const mirrorItem = "You have a mirror";
const weapon = "You have a weapon";
const music = "You have an instrument";
const creatureInteract = "The creature recognises the instrument and eases its attitude with you.";
const weaponCreature = "The creature startles when it sees the weapon and attacks you.";
const mirrorCreature = "The creature seems interested about the mirror and eases its attitude.";
const deadCreature = "You managed a successful shot. The creature leaves a portal in its location after vanishing.";
const deviceAdvicePortal = "Device beeping! - You should definitely take the left portal to avoid a certain death.";
const finalAdvice = "Device beeping! - You have reached the final room! Close dialogue to continue.";
const memoryQuestion = "How many pages have you gone through during the game? Refreshing counts."
const knowledgeQuestion = "How many different themes does the game have?"
const timeQuestion = "What is the capital of Bulgaria? You have 10 seconds to answer."
const bossWeapon = "The villain is startled, you have one chance to hit him. You can still choose other questions."

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

/**
 *  Help with repetitive functions
 */
function setInput() {

    paragraph.parentNode.insertBefore(input, paragraph.nextSibling); //adds the node after -- spacing.appendChild(acceptCode);
    input.setAttribute("id", "inputEmergency");

    input.parentNode.insertBefore(acceptCode, input.nextSibling); //adding the button
    acceptCode.setAttribute("id", "enterCode");
    acceptCode.style.height = "20px";
    acceptCode.style.width = "70px";
}

/**
 *  Display code
 */
function emergencyCode(){
    helpSection.style.display = "block";
    document.getElementById("help-section").style.backgroundColor = "#FFFFFFB3";
    document.getElementById("main").style.marginRight = "0";

    input.setAttribute("type", "text");

    if (document.getElementById("paragraph-help").innerHTML.indexOf(textEmergency)  < 1){
        paragraph.textContent += textEmergency;

        setInput();
        acceptCode.innerHTML ="Enter!";

        document.getElementById("enterCode").onclick = function() {enteringCode()};

    } else {
        helpSection.style.display = "block";
    }
}

/**
 *  Teleport code
 */
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

/**
 *  Door note
 */
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

/**
 *  Show knew path
 */
function checkingPath() {
    if ("Walking" in localStorage) {
        document.getElementById("hidingItem").style.visibility = "visible";
    }
}

/**
 *  Show two additional paths
 */
function runOrPath(){
    if("Walking" in localStorage){
        document.getElementById("trace-back").style.display = "block"
    }else {
        document.getElementById("hide-run").style.display = "block"
    }
}

/**
 *  Hint
 */
function  alreadyHere() {
    if ("Path" in localStorage) {
        helpSection.style.display = "block";
        document.getElementById("help-section").style.backgroundColor = "#ACC8E580";
        document.getElementById("main").style.marginRight = "0";
        document.getElementById("help-section").style.maxHeight = "80px";
        if (document.getElementById("paragraph-help").innerHTML.indexOf(Path) < 1) {
            paragraph.textContent += Path;
        } else {
            helpSection.style.display = "block"
        }
    }
}

/**
 *  Output keyboard menu
 */
function keyboard() {
    helpSection.style.display = "block";
    document.getElementById("main").style.marginRight = "0";
    document.getElementById("help-section").style.backgroundColor = "#ACC8E580";
    if (document.getElementById("paragraph-help").innerHTML.indexOf(comb)  < 1){
        paragraph.textContent += comb;
        document.getElementById("help-section").style.maxHeight = "300px";
        setInput()
        acceptCode.innerHTML ="Confirm";

        document.getElementById("enterCode").onclick = function() {colorComb()};

    } else {
        helpSection.style.display = "block";
    }
}

/**
 *  Colours puzzle solution
 */
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

/**
 *  Retrieves musical mirror
 */
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

/**
 *  Retrieves musical instrument
 */
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

/**
 *  Retrieves fire weapon
 */
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

/**
 *  Repetitive function
 */
function addingText(outPutText){
    document.getElementsByClassName("button-hint-close")
    paragraph.textContent += outPutText ;
    paragraph .parentNode.insertBefore(acceptCode, paragraph .nextSibling); //adding the button
    acceptCode.setAttribute("id", "enterCode");
    acceptCode.style.height = "20px";
    acceptCode.style.width = "70px";
}

/**
 *  Display message and send next room
 */
function helpCreature() {
    document.getElementById("help-section").style.display = "block";
    document.getElementById("main").style.marginRight = "0";
    if (document.getElementById("paragraph-help").innerHTML.indexOf(creatureInteract )  < 1){
        addingText(creatureInteract);
        acceptCode.innerHTML ="Play";
        acceptCode.addEventListener("click", nextPhase);

    } else {
        helpSection.style.display = "block";
    }
}

/**
 *  Use weapon
 */
function attackCreature() {
    document.getElementById("help-section").style.display = "block";
    document.getElementById("main").style.marginRight = "0";
    document.getElementById("disabling").style.pointerEvents = "none";
    if (document.getElementById("paragraph-help").innerHTML.indexOf(weaponCreature )  < 1){
        addingText(weaponCreature);
        acceptCode.innerHTML ="Shoot";
        acceptCode.addEventListener("click", attack);

    } else {
        helpSection.style.display = "block";
    }
}

/**
 *  Message mirror
 */
function showMirror() {
    document.getElementById("help-section").style.display = "block";
    document.getElementById("main").style.marginRight = "0";
    if (document.getElementById("paragraph-help").innerHTML.indexOf(mirrorCreature )  < 1){
        addingText(mirrorCreature);
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

/**
 *  Checks random number equal or lower than 4
 */
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

/**
 *  Device throws advise
 */
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

/**
 *  Device blocking buttons
 */
function deviceBeepFinal() {
    if ("Device" in localStorage){
        helpSection.style.display = "block";
        document.getElementById("main").style.marginRight = "0";
        if (document.getElementById("paragraph-help").innerHTML.indexOf(finalAdvice)  < 1){
            paragraph.textContent += finalAdvice;
            document.getElementById("block-1").style.pointerEvents = "none";
            document.getElementById("block-2").style.pointerEvents = "none";
            document.getElementById("block-3").style.pointerEvents = "none";
            document.getElementById("block-4").style.pointerEvents= "none";
            document.getElementById("restoring").style.marginTop = "10px";
            document.getElementById("help-section").style.maxHeight = "170px";
        } else {
            helpSection.style.display = "block";
        }
    }
}

/**
 *  Remove item from storage
 */
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
 *  Repetitive code in boss
 */
function memoryTestHelper(displayText) {
    paragraph.textContent += displayText;

    paragraph.parentNode.insertBefore(input, paragraph.nextSibling); //adds the node after -- spacing.appendChild(acceptCode);
    input.setAttribute("id", "inputEmergency");
    if (document.getElementById("inputEmergency").style.display === "none"){
        document.getElementById("inputEmergency").style.display = "block";
        document.getElementById("inputEmergency").style.marginLeft = "25px";
}}

/**
 * Final boss memory test
 */
function memoryTest() {
    helpSection.style.display = "block";
    document.getElementById("main").style.marginRight = "0";

    if (document.getElementById("paragraph-help").innerHTML.indexOf(memoryQuestion) < 1
        && document.getElementById("paragraph-help").innerHTML.indexOf(knowledgeQuestion) < 1
        && document.getElementById("paragraph-help").innerHTML.indexOf(timeQuestion) < 1
        && document.getElementById("paragraph-help").innerHTML.indexOf(bossWeapon) < 1){
        memoryTestHelper(memoryQuestion);
        document.getElementById("help-section").style.maxHeight = "260px";
        input.parentNode.insertBefore(acceptCode, input.nextSibling); //adding the button
        acceptCode.setAttribute("id", "enterCode");
        acceptCode.style.height = "20px";
        acceptCode.style.width = "70px";
        acceptCode.innerHTML ="Confirm";
        document.getElementById("enterCode").onclick = function() {answerMemoryTest()};
    }else {
        helpSection.style.display = "block";
    }
}

/**
 * Provides two different exits
 */
function answerMemoryTest() {
    const userCount = parseInt(document.getElementById("inputEmergency").value) + 1; //Adding one to user input so it matches page count
    const userString = userCount.toString();
    if(count() === userString){
        window.location.href = "../mixed-rooms/game-won.html"
    }
    else{
        window.location.href = "../space/space.html"
    }
}

/**
 *  Question about themes.
 */
function themes(){
    helpSection.style.display = "block";
    document.getElementById("main").style.marginRight = "0";

    if (document.getElementById("paragraph-help").innerHTML.indexOf(knowledgeQuestion) < 1
        && document.getElementById("paragraph-help").innerHTML.indexOf(memoryQuestion) < 1
        && document.getElementById("paragraph-help").innerHTML.indexOf(timeQuestion) < 1
        && document.getElementById("paragraph-help").innerHTML.indexOf(bossWeapon) < 1) {

        memoryTestHelper(knowledgeQuestion);
        document.getElementById("help-section").style.maxHeight = "200px";
        input.parentNode.insertBefore(acceptCode, input.nextSibling); //adding the button
        acceptCode.setAttribute("id", "enterCode");
        acceptCode.style.height = "20px";
        acceptCode.style.width = "70px";
        acceptCode.innerHTML = "Confirm";
        document.getElementById("enterCode").onclick = function() {answerThemes()}
    } else {
        helpSection.style.display = "block";
    }
}

/**
 *  Answering theme question.
 */
function answerThemes() {
    const userInput= parseInt(document.getElementById("inputEmergency").value);
    if(userInput === 4){
        window.location.href = "../mixed-rooms/game-won.html"
    }
    else{
        window.location.href = "../mixed-rooms/gameover.html"
    }
}

/**
 *  Time question.
 */
function timedQuestion() {
    helpSection.style.display = "block";
    document.getElementById("progressBar").style.margin = "auto";
    document.getElementById("main").style.marginRight = "0";

    if (document.getElementById("paragraph-help").innerHTML.indexOf(knowledgeQuestion) < 1
        && document.getElementById("paragraph-help").innerHTML.indexOf(memoryQuestion) < 1
        && document.getElementById("paragraph-help").innerHTML.indexOf(timeQuestion) < 1
        && document.getElementById("paragraph-help").innerHTML.indexOf(bossWeapon) < 1) {
        countDown()
        document.getElementById("restoring").style.display = "none";
        document.getElementById("progressBar").style.display = "block";
        memoryTestHelper(timeQuestion);

        document.getElementById("help-section").style.maxHeight = "220px";

        input.parentNode.insertBefore(acceptCode, input.nextSibling); //adding the button
        acceptCode.setAttribute("id", "enterCode");
        acceptCode.style.height = "20px";
        acceptCode.style.width = "70px";
        acceptCode.innerHTML = "Confirm";
        document.getElementById("enterCode").onclick = function() {answerTime()}
    } else {
        helpSection.style.display = "block";
    }
}

/**
 *  Answering time question.
 */
function answerTime() {
    const userInput = document.getElementById("inputEmergency").value;
    const parsed = userInput.toLowerCase();
    if(parsed === "sofia"){
        window.location.href = "../mixed-rooms/game-won.html"
    }
    else{
        window.location.href = "../mixed-rooms/two-doors.html"
    }
}

/**
 *  Timer.
 */
function countDown() {
    let timeLeft = 10;
    let timer = setInterval(function () { //https://stackoverflow.com/questions/31106189/create-a-simple-10-second-countdown
        if (timeLeft <= 0) {
            clearInterval(timer);
        }
        document.getElementById("progressBar").value = 10 - timeLeft;
        timeLeft -= 1;
    }, 1000);
    setTimeout(function(){window.location.href = "../mixed-rooms/gameover.html"}, 12000);
}

/**
 *  Fire weapon to boss.
 */
function attackBoss() {
    document.getElementById("help-section").style.display = "block";
    document.getElementById("main").style.marginRight = "0";

    if (document.getElementById("paragraph-help").innerHTML.indexOf(knowledgeQuestion) < 1
        && document.getElementById("paragraph-help").innerHTML.indexOf(memoryQuestion) < 1
        && document.getElementById("paragraph-help").innerHTML.indexOf(timeQuestion) < 1
        && document.getElementById("paragraph-help").innerHTML.indexOf(bossWeapon) < 1){
        document.getElementsByClassName("button-hint-close")
        paragraph.textContent += bossWeapon;
        document.getElementById("help-section").style.maxHeight = "225px";

        paragraph .parentNode.insertBefore(acceptCode, paragraph .nextSibling); //adding the button
        acceptCode.setAttribute("id", "enterCode");
        acceptCode.style.height = "20px";
        acceptCode.style.width = "70px";
        acceptCode.innerHTML ="Shoot";
        acceptCode.addEventListener("click", attackWithDice);

    } else {
        helpSection.style.display = "block";
    }
}

/**
 *  Resolve attack to boss with weapon
 */
function attackWithDice() {
    const luck = Math.floor(Math.random() * Math.floor(10));
    if (luck <= 2){
        window.location.href = "../mixed-rooms/game-won.html"
    }else {
        window.location.href = "../mixed-rooms/do-nothing.html"
    }
}

/**
 *  Closes dialogue in boss
 */
function closeHintRestore() {
    if (helpSection.style.display === "block") {
        document.getElementById(paragraph.textContent = " ");
        helpSection.style.display = "none";
        document.getElementById("main").style.marginRight = "auto";
        document.getElementById("progressBar").style.display = "none";
        if(document.getElementById("inputEmergency")) {
            document.getElementById("inputEmergency").style.display = "none";
        }
        if(document.getElementById("block-1")){
            document.getElementById("block-1").style.pointerEvents = "auto";
            document.getElementById("block-2").style.pointerEvents = "auto";
            document.getElementById("block-3").style.pointerEvents = "auto";
            document.getElementById("block-4").style.pointerEvents= "auto";
        }
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
    return status;
}

/**
 *  Resets storage when game reloaded
 */
function resetCount() {
    sessionStorage.clear();
    localStorage.clear();
}