const RandomColor = function(){
    let hex = "0123456789ABCDEF";
    let color =  "#";
    for(i=0;i<6;i++){
     color += hex[Math.floor(Math.random()*16)]
    }
    return color;
};

document.querySelector('#start')
.addEventListener('click',function(){
function change(){
    document.body.style.backgroundColor = RandomColor();
}
{interval = setInterval(change, 500)}globalThis
})
document.querySelector('#stop')
.addEventListener('click',function(){
    clearInterval(interval)
})