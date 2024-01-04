let boxes= document.querySelectorAll(".btn");
let newgame=document.querySelector("#ng");
let msgcontainer=document.querySelector(".msg-container");
let msg=document.querySelector("#message");
let rbtn=document.querySelector("#reset");
let turnx=true;
let winner=[[0,1,2],[3,4,5],
[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
const resetbtn=()=>{
    turnx=true;
    enablebtns();
    msgcontainer.classList.add("hide");
}
const enablebtns=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}
const disablebtns=()=>{
    for(let box of boxes){
        box.disabled=true;
        
    }
}
boxes.forEach((btn)=>{
    btn.addEventListener("click",()=>{
        console.log("button was clicked");
        if(turnx){
            btn.innerText="O";
            turnx=false;
            
        } else{btn.innerText="X";
        turnx=true;}
        btn.disabled=true;
        checkWinner();
       
    })
});
 

const showWinner=(win)=>{
msg.innerText=`The winner is ${win}`;
msgcontainer.classList.remove("hide");
disablebtns();
}
const checkWinner=()=>{
    for(b of winner){
        let pos1val=boxes[b[0]].innerText;
        let pos2val=boxes[b[1]].innerText;
        let pos3val=boxes[b[2]].innerText;

        if(pos1val !="" && pos2val !="" && pos3val !=""){
            if(pos1val===pos2val && pos2val===pos3val)
            {console.log("winner",pos1val);
            showWinner(pos1val);
            disablebtns();
        }
           
            
        }
    }
    
}
newgame.addEventListener("click",resetbtn);
rbtn.addEventListener("click",resetbtn);