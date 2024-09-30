let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let turnO = true; // player's turn
// let a=Array.from(boxes);
// win patterns of the game
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
const resetGame=()=>{
    turnO=true;
    Enableboxes();
    msgContainer.classList.add("hide");

};
boxes.forEach(box => {
    box.addEventListener("click", () => {
        console.log("box was clicked");
        //true=O 
        //False=X
        if (turnO) {
            box.innerText="O";
            turnO=false;
        }
        else{
            box.innerText="X"
            turnO=true;
        }
        box.disabled=true;
        checkwinner();
    });
});
const disableboxes=()=>{
    for (const box of boxes) {
        box.disabled=true;
        
    }
}
const Enableboxes=()=>{
    for (const box of boxes) {
        box.disabled=false;
        box.innerText="";
        
    }
}
//show winner
const showwinner=(winner)=>{
    msg.innerText=`Congragulation, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableboxes();

};
//check the winner of game
const checkwinner=()=>{
    for (let pattern of winPatterns) {
        console.log(pattern[0],pattern[1],pattern[2])
        console.log(boxes[pattern[0]].innerText,boxes[pattern[1]].innerText,boxes[pattern[2]].innerText);
      
        let pos1val1=boxes[pattern[0]].innerText;
        let pos1val2=boxes[pattern[1]].innerText;
        let pos1val3=boxes[pattern[2]].innerText;

        if (pos1val1!="" && pos1val2!="" && pos1val3!="") {
            if (pos1val1===pos1val2 && pos1val2 === pos1val3) {
                console.log(`${pos1val1} winner`);

                showwinner(pos1val1);
            }          
        }     
    }
};
newGameBtn.addEventListener("click", resetGame);//new game
resetBtn.addEventListener("click", resetGame);//reset game
