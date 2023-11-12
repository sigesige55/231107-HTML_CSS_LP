setInterval(interruptMission, 1000);

function updateImage() {

    const imgEle = document.getElementById("card01");

    imgEle.src = "/img/works.jpg" + "?" + Date.now();
}