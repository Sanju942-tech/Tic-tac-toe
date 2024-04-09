let boxes = document.querySelectorAll(".box")
let resetbtn = document.querySelector("#reset-btn");
let newGamebtn=document.querySelector("#new-btn");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg")
let turn0 = true; //playerx playery
let count=0; //to track draw
const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];
const resetGame = ()=>{
    turn0 =true;
    enableBoxes();
    msgContainer.classList.add("hide")
}
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turn0) {
            box.innerText = "o";
            turn0 = false;
        } else {
            box.innerText = "x";
            turn0 = true;
        }
        box.disabled = true;
count++;
        let isWinner= checkwinner();
if(count ===9  && !isWinner){
    gameDraw();
}
    });
});
const gameDraw = () =>{
    msg.innerText=`Game Was Draw`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};
const disableBoxes = () =>{
    for(let box of boxes){
        box.disabled=true;
    }
};
let enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText = "";
    }
};
const showWinner=(winner)=>{
    msg.innerText=`Congratulation! You Win ${winner} `;
    msgContainer.classList.remove('hide');
    disableBoxes();
};
const checkwinner = () => {
    for (let pattern of winPatterns) {
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;
        if (pos1val != "" && pos2val != "" && pos3val != "") {
            if (pos1val == pos2val && pos2val == pos3val) {
                showWinner(pos1val);
                return true;
            }
        }
    }
};
newGamebtn.addEventListener("click", resetGame);
resetbtn.addEventListener("click",resetGame);