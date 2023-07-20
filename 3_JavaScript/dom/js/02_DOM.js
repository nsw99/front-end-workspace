function btn1(){
     console.log(document);
     console.log(document.head);
     console.log(document.title);
     console.log(document.body);
}

function btn2(){
    const div = document.getElementById("testId");
    console.log(div);
}

function btn3(){
    const div = document.getElementsByClassName("testClass");
    console.log(div);
    console.log(div[1]);
}
function btn4(){
    const div = document.getElementsByName("testName");
    // console.log(div);
    console.log(div[1]);
}
function btn5(){
    const div = document.getElementsByTagName("div");
    console.log(div[0]);
}
function btn6(){
    let div = document.querySelector("#testId");
    div = document.querySelector(".testClass");
    div = document.querySelectorAll(".testClass");
    for(let i=0; i<div.length; i++){
        console.log(div[i]);
    }
    for(const index in div){
        console.log(div[index]);
    }

    let divList = document.querySelectorAll("div");
    console.log(divList);
}

function btn7(){
    // div 2개 가지고 오세요~ divList : 변수명
    const divList = document.querySelectorAll(".testClass");
    divList[0].textContent = '<span>안녕하세요~ 루닛입니다!</span>';
    divList[1].innerHTML = '<span>반가워요 딥노이드라고해요~</span>';
}

function btn8(){
    // #testId 인것만
    const div = document.querySelector("#testId");
    div.setAttribute("data-test","테스트");
    console.log(div.getAttribute("data-test"));
    console.log(div.getAttribute("class"));
}

function btn9(){
    const div = document.querySelector("#testId");
    div.style.color = "orange";
    div.style.backgroundColor = "yellow";
}
function btn10(){   
    const div2= document.querySelector("#testId2");
    div2.classList.add("black");
}
function btn11(){
    const div2= document.querySelector("#testId2");
    div2.classList.remove("black");
}
function btn12(){
    const div2 = document.querySelector("#testId2");
    const check = div2.classList.contains("black");
    console.log(check);
    if(check){
        div2.classList.remove("black");
    }else{
        div2.classList.add("black");
    }

}
function btn13(){
   const div2 = document.querySelector("#testId2");
   const check= div2.classList.toggle("black");
   console.log(check);
}

function btn14(){
    const div2 = document.querySelector("#testId2");
    const p = document.createElement("p");
    div2.appendChild(p);
    p.innerHTML="Lorem Ipsum";
    console.log(div2);

    // const input =  document.createElement("input");
    // input.value ="Bye";
    // div2.appendChild(input);
}

function btn15(){
    const div2 = document.querySelector("#testId2");
    const p = document.querySelector("p");
    // div2.removeChild(p);
    p.parentNode.removeChild(p);
    console.log(p);
    
}