canvas=document.getElementById("mycanvas");
ctx=canvas.getContext("2d");
color="blue";
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=3;
ctx.arc(200,200,50,0,2*Math.PI);
ctx.stroke();
canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e){
    mouse_x=e.clientX-canvas.offsetLeft;
    mouse_y=e.clientY-canvas.offsetTop;
    circle(mouse_x,mouse_y);
}
function circle(mouse_x,mouse_y){
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=3;
    ctx.arc(mouse_x,mouse_y,50,0,2*Math.PI);
    ctx.stroke(); 
}