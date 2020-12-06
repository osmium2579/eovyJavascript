const clockContainer = document.querySelector(".js-clock"),
    clockTitle = clockContainer.querySelector("h1");

function getTime(){
    const date = new Date();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();
    clockTitle.innerHTML = `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}:${
        seconds < 10 ? `0${seconds}` : seconds
    }`;//위는 mini if 개념을 적용하여 시,분,초가 59를 넘어 01부터 시작하지 않고 1로 시작할 때 적용할 수 있는 방법
}/* ex) seconds < 10 ? `0${seconds}` : seconds를 순서대로 해석해보면 만약 seconds가 10보다 작다면 0을 붙여서${seconds}리턴,
: seconds -> else false일 경우 seconds를 그대로 리턴 */

function init(){
    getTime();
    setInterval(getTime, 1000);
}

init();