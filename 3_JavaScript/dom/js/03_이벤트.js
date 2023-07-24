// window.addEventListener('DOMContentLoaded',function(){
// const h1 = document.querySelector('h1');
// console.log(h1);
// });

const h1 = document.querySelector('h1');

// const img1 = document.querySelector('.container img:nth-child(1)');
// const img2 = document.querySelector('.container img:nth-child(2)');
// const img3 = document.querySelector('.container img:nth-child(3)');
// const img4 = document.querySelector('.container img:nth-child(4)');
// const img5 = document.querySelector('.container img:nth-child(5)');




const imgList = document.querySelectorAll('.container img');
const container = document.querySelector('.container');




function removeHandler(event) { //이벤트 객체가 숨겨져있음
    console.log(event.currentTarget);
    if(event.target!==container){
        event.target.style.display = 'none';
    }
}


container.addEventListener('click',removeHandler);
// for (const index in imgList){
//     imgList[index].addEventListener('click',function(){
//     imgList[index].style.display='none';
// })
// }




// imgList[0].addEventListener('click',function(){
//     imgList[0].style.display='none';
// })

// imgList[1].addEventListener('click',function(){
//     imgList[1].style.display='none';
// })

// imgList[2].addEventListener('click',function(){
//     imgList[2].style.display='none';
// })

// imgList[3].addEventListener('click',function(){
//     imgList[3].style.display='none';
// })

// imgList[4].addEventListener('click',function(){
//     imgList[4].style.display='none';
// })








img1.addEventListener('click',function(){
    // img1.style.visibility = 'hidden';
    // img1.style.display = 'none';
    img1.removeEventListener('click');
});

img2.addEventListener('click',function(){
    img1.style.visibility = 'hidden';
    img1.removeEventListener();
});

img3.addEventListener('click',function(){
    img1.style.visibility = 'hidden';
    img1.removeEventListener();
});

img4.addEventListener('click',function(){
    img1.style.visibility = 'hidden';
    img1.removeEventListener();
});

img5.addEventListener('click',function(){
    img1.style.visibility = 'hidden';
    img1.removeEventListener();
});

h1.addEventListener('mouseenter',function(){
    h1.style.backgroundColor = "skyblue";
});






