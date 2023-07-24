// console.log(Math.floor(Math.random()*3)+1);
// 1~3 랜덤 숫자


const bt = document.querySelector('.click');
const bt2 = document.querySelector('.restart');
const imgs = document.querySelectorAll('.main-image img');
const result = document.querySelector('.main-result');
const span = document.querySelector('.click span');
let a = 1;

function randomHandler(event){
    console.log(event.currentTarget);
    // const r = Math.floor(Math.random()*3)+1;
    // const r2 = Math.floor(Math.random()*3)+1;
    // const r3 = Math.floor(Math.random()*3)+1;

    const random = [Math.floor(Math.random()*3)+1,
                    Math.floor(Math.random()*3)+1,
                    Math.floor(Math.random()*3)+1];
                    
    for(let i=0;i<imgs.length; i++){
    imgs[i].setAttribute("src",`../../resources/spy${random[i]}.jpg`); 
     }  
     span.innerHTML=a++;
    
     if(random[0]===random[1] && random[1]===random[2]){
        
        result.innerHTML = "축하요 재시작 버튼 누르세요";        
        bt.setAttribute("disabled","disabled");
        
     }
     
     
    // const img = document.querySelector('.main-image img:nth-child(1)').setAttribute('src',`../../resources/spy${r}.jpg`);
    // const img2= document.querySelector('.main-image img:nth-child(2)').setAttribute('src',`../../resources/spy${r2}.jpg`);
    // const img3 = document.querySelector('.main-image img:nth-child(3)').setAttribute('src',`../../resources/spy${r3}.jpg`);
    

    // if(r==r2&&r2==r3){
    //     event.target.style.display='none';
    //     alert('그림이 모두 같습니다. 다시 하시려면 Restart를 눌러주세요');
    // }
}
bt.addEventListener('click',randomHandler);

function restartHandler(event){
    const random = [Math.floor(Math.random()*3)+1,
        Math.floor(Math.random()*3)+1,
        Math.floor(Math.random()*3)+1];
        for(let i=0 ;i<imgs.length; i++){
           imgs[i].setAttribute("src",`../../resources/spy${random[i]}.jpg`); 
         }  
        result.innerHTML="재시작합니다.";
       
        bt.removeAttribute("disabled");
        a=1;
        span.innerHTML=0;
    }
bt2.addEventListener('click',restartHandler);