let btns=document.querySelectorAll("button");
let msg_pos=document.querySelector(".container");
let msg_count=0;
hover_msg=document.createElement("p");
hover_msg.style.top="29vh";
hover_msg.style.position="fixed";
hover_msg.style.left="41vw";
hover_msg.style.fontSize="20px";
hover_msg.style.textAlign="center";

// HOVER MESSAGE PRINT>>>>>>>>

btns.forEach(element => {
    element.addEventListener("mouseenter",()=>{
        if(element.id==="yes"){
            hover_msg.innerText="Bol Lo jhuth!!! Still click it";
            msg_pos.before(hover_msg);
        }
        else if(element.id==="no"){
            hover_msg.innerText="Thank God!! You already know!";
            msg_pos.before(hover_msg);
        }
        else{
            hover_msg.innerText="Creator also thinks the same!!"
        }
    })    
});
btns.forEach(element =>{
    element.addEventListener("mouseleave",()=>{
        hover_msg.innerText="";
    })

});

// MESSAGE BOMBER DECLARATION>>>>>>>>>
let top_height=10;
// mess.style.top=top_height;
// mess.style.bottom=top_height;
// mess.style.left=top_height;
// mess.style.right=top_height;
function msg_bomb(n){
        let mess=document.createElement("p");
        mess.style.position="relative";
        mess.style.top="4rem";
        mess.style.width="fit-content";
        mess.style.fontSize="25px";
        if(n===1){
        mess.innerHTML=`<p>Kitne pyar se jhuth bol rhe ho!! &#x1F60B;</p>`;
        }
        else if(n===2){
        mess.innerHTML=`<p>Insaan se ek baar glti hoti hai!! &#128527;</p>`;
        }
        else if(n===3){
        mess.innerHTML=`<p>Abhi bhi akal nhi aa rhi hai!! &#128522;</p>`;
        } 
        else if(n===4){
        mess.innerHTML=`<p>Maan jao yaar!!koi pyar se smjha rha hai!! &#128536;</p>`;
        }
        else{
        mess.innerHTML=`<p>Uffffff!!! ye larki! &#128530;</p>`;
        }
        document.body.append(mess);       
};

// CLICK PER JO PRINT HOGA>>>>>>>>>>>
btns.forEach(element =>{
    element.addEventListener("click",()=>{
        if(element.id==="yes"){
            msg_count++;
            msg_bomb(msg_count);
        }
        else if(element.id==="no"){
            location.href="no.html";
        }
        else if(element.id==="nosay"){
            location.href="nosay.html";
        }
    });

});