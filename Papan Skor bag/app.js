const p1Button = document.querySelector('#p1-button');
const p2Button = document.querySelector('#p2-button');
const p1Display = document.querySelector('#p1-display');
const p2Display = document.querySelector('#p2-display');
const Reset = document.querySelector('#reset');
const WinpointOption = document.querySelector('#winpoint');

let p1Score = 0;
let p2Score = 0;
let winpoint = 10;
let isGameover = false;

function reset(){
    isGameover = false;
    p1Score = 0;
    p2Score = 0;
    p1Display.textContent=0;
    p2Display.textContent=0;
}

p1Button.addEventListener('click',function(){

    if(!isGameover){
        p1Score +=1;
        if(p1Score === winpoint){
            isGameover = true;
        }
        p1Display.textContent=p1Score;
    }
});

p2Button.addEventListener('click',function(){
    if(!isGameover){
            p2Score +=1;
            if(p2Score === winpoint){
                isGameover = true;
            }
            p2Display.textContent=p2Score;
        }
});

Reset.addEventListener('click', reset);
WinpointOption.addEventListener('change',function(){
    winpoint = parseInt(this.value)
    reset();
});