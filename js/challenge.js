//---------------------------------timer setup
let count = 0;
let pauseTime = false;
const text_counter = document.querySelector('#counter');

const likeList = document.querySelector('.likes');

//buttons link
const btn_minus = document.querySelector('#minus');
const btn_add = document.querySelector('#plus');
const btn_like = document.querySelector('#heart');
const btn_pasue = document.querySelector('#pause');


//like numbers
let likedNumbers = [];

//---------------------------------Event listeners
//change hange timer/count
btn_minus.addEventListener('click', ()=> text_counter.textContent = --count);
btn_add.addEventListener('click', ()=> text_counter.textContent = ++count);
btn_like.addEventListener('click', ()=>{
    console.log(count + " was liked!");
    postLike();
});

btn_pasue.addEventListener('click', ()=> pauseTimer());

function pauseTimer(){
    pauseTime = !pauseTime
    btn_minus.disabled = pauseTime;
    btn_add.disabled = pauseTime;
    btn_like.disabled = pauseTime;

    if(pauseTime)
        btn_pasue.textContent = 'resume';
    else
        btn_pasue.textContent = 'pause';
}

//--------------------------------------timer function
function timer(){
    if(!pauseTime)
        text_counter.textContent = count +=1;
}

setInterval(timer, 1000);

//function to add list element to likes UL [doesn't work]
function postLike(){
    let timesLiked = 1;
    let newNumKey = 0;

    //ool
    let makeNew = false;


    let newObj = {
        number:     count,
        timesLiked: timesLiked,
    };
    

    if(likedNumbers.length <= 0) {
        newObj.number = count;
        newObj.timesLiked = timesLiked
    } else { //if number doesn't exist in array - add it
        for(let num of likedNumbers){
            if(num.number === count){
                num.timesLiked += 1;
            }else
                makeNew = true;
        }
    }//end else

    if(makeNew){
        newObj.number = count;
        newObj.timesLiked = timesLiked;
    }

    likedNumbers.push(newObj);
    console.log(likedNumbers);

    //create list element
    const li = document.createElement('li');
    li.textContent = `${count} was liked!`;

    likeList.append(li);
}