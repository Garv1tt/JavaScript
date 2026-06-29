const RandomColor = function(){
    let hex = "0123456789ABCDEF";
    let color =  "#";
    for(i=0;i<6;i++){
     color += hex[Math.floor(Math.random()*16)]
    }
    return color;
};
let interval;
document.querySelector('#start')
.addEventListener('click',function(){
function change(){
    document.body.style.backgroundColor = RandomColor();
}
if (!interval) {
    interval = setInterval(change,200)
}
})
document.querySelector('#stop')
.addEventListener('click',function(){
    clearInterval(interval)
    interval = null;
})