let mouseEvent = "empty";

let color = "#f12711";
let width_of_circle = 3;
let radius = 40;
let  radiusPlace = document.getElementById("radii")
c = document.getElementById("myCanvas");
ctx = c.getContext("2d");

ctx.beginPath();
ctx.lineWidth = 2;
ctx.strokeStyle = color;


ctx.stroke();

c.addEventListener("mousedown", function (e) {
    color = document.getElementById("color_text").value;
    radius = document.getElementById("radii").value;
    mouseEvent = "mouseDown";
})

c.addEventListener("mouseup", function (e) {
    mouseEvent = "mouseUp";
})

c.addEventListener("mouseleave", function (e) {
    mouseEvent = "mouseleave";
})

c.addEventListener("mousemove", function (e) {
    let mouse_position_currentX = e.clientX - c.offsetLeft;
    let mouse_position_currentY = e.clientY - c.offsetTop;

    if (mouseEvent == "mouseDown") {
        if(radii = null){
            radiusPlace.placeholder = 50;
        }
        else{
            ctx.beginPath();
            ctx.strokeStyle = color;
            ctx.lineWidth = width_of_circle;
    
            ctx.moveTo(last_position_of_x, last_position_of_y);
    
    
            ctx.arc(last_position_of_x,last_position_of_y,radius,0,2*Math.PI);
    
            ctx.stroke();
    
            //nothing
        }

    }
    last_position_of_x = mouse_position_currentX
    last_position_of_y = mouse_position_currentY;
});

function clearArea(){
    ctx.clearRect(0,0,c.width,c.height);
}