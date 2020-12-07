const form = document.querySelector(".js-form"),//querySelector는 원하는 셀렉터를 가져옴. 찾고자 하는 것의 첫번째 것을 가져옴. class, id, tag, css 등.
    input = form.querySelector("input"),
    greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser",
    SHOWING_CN = "showing";

function saveName(text){
    localStorage.setItem(USER_LS,text);
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = input.value;
    paintGreeting(currentValue);
    saveName(currentValue);
}

function askForName(){
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit", handleSubmit)
}

function paintGreeting(text){
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `Hello ${text}`;
}//paintGreeting은 하나의 argument(인자)값을 가짐.

function loadName(){
    const currentUser = localStorage.getItem(USER_LS);
    if (currentUser === null){
        askForName();
    }
    else{
        paintGreeting(currentUser);
    }
}

function init(){
    loadName();
}

init();




//getElementByTagName은 태그로 엘리먼트를 가져옴. input, body, html, div, section 등.