const counter = document.getElementById("counter");
const dec = document.getElementById("decreaseButton");
const inc = document.getElementById("increaseButton");
const res = document.getElementById("resetButton");
let count = 0;
inc.onclick = function(){
    count ++;
    counter.textContent = count;
}
dec.onclick = function(){
    count --;
    counter.textContent = count;
}
res.onclick = function(){
    count = 0;
    counter.textContent = count;
}