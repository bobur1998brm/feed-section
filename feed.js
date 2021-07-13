

const messageMenu = document.querySelectorAll('.message__menu'),
    messageHideScreen = document.querySelectorAll('.message__hideScreen');

console.log(messageMenu);

for(let i = 0; i < messageMenu.length; i++){
messageMenu[i].addEventListener('click', ()=>{
    if(messageHideScreen[i].classList.contains('menu__hide')){
        messageHideScreen[i].classList.remove('menu__hide');
        messageHideScreen[i].classList.add('menu__show');
    }
    else if(messageHideScreen[i].classList.contains('menu__show')){
        messageHideScreen[i].classList.remove('menu__show');
        messageHideScreen[i].classList.add('menu__hide');
    }
})
}

const followedForm = document.getElementById('followed__form'),
    followedInput = document.querySelector('#followed__text')
    followedArea = document.querySelector('.feed__followed__area'),
    clear = document.querySelector('#clear');

followedForm.addEventListener('submit', addTask);

function addTask(event){
    let followedInputValue = followedInput.value;
    let p = document.createElement('p');
    let div = document.createElement('div');
    

    p.innerHTML = followedInputValue;
    div.appendChild(p);
    div.className = ('feed__followed__area__item');
    followedArea.appendChild(div);
    followedInput.value = '';

    event.preventDefault();
}

clear.addEventListener('click', ()=>{
    while(followedArea.firstChild){
        followedArea.removeChild(followedArea.firstChild);
    }
})


const shareScreen = document.querySelector('.share__screen'),
    shareScreenContent = document.querySelector('.share__screen__content'),
    shareBtn = document.querySelectorAll('.message__share'),
    cancelBtn = document.querySelector('.fa-times');
  
for(let i = 0; i < shareBtn.length; i++){
    shareBtn[i].addEventListener('click', () =>{
        shareScreen.style.transform = 'scaley(1)';
        shareScreenContent.style.transform = 'scaley(1)';
    })
}

cancelBtn.addEventListener('click', () =>{
    shareScreen.style.transform = 'scaley(0)';
})


const messageLikeBtn = document.querySelectorAll('.message__like1'),
    messageLike = document.querySelectorAll('.thumbs-up-fill'),
    messageDislike = document.querySelectorAll('.thumbs-up'),
    // messageCount = document.querySelector('#count');
    messageCount = document.querySelectorAll('.message__count');

for(let i = 0; i < messageLikeBtn.length; i++){
messageLikeBtn[i].addEventListener('click', ()=>{
    let messageCountValue = Number(messageCount[i].innerHTML) + 1;
        messageCount[i].style.color = '#0275B1';
        messageDislike[i].style.display = 'none';
        messageLike[i].style.display = 'block';
        messageCount[i].innerHTML = messageCountValue;
    
})
}