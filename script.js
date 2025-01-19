const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const select1 = document.querySelector('#select1');
const select2 = document.querySelector('#select2');
const select3 = document.querySelector('#select3');
const select4 = document.querySelector('#select4');
const submitans = document.querySelector('#submit');
let questionCount = 1;
let score = 0;
const answers = document.querySelectorAll('.answer');
const scoreArea = document.querySelector('.scoreArea');
// const dropcategory = document.querySelector('.dropcategory');
// const droplevel = document.querySelector('.droplevel');
// const dropcatgcontent = document.querySelector('.dropcatg-content');
// const droplvlcontent = document.querySelector('.droplvl-content');
const checkallBtn = document.querySelector('.buttons');
const select = Array.from(document.querySelectorAll('.select'));
console.log(select);

// window.onload = () =>
// {
//     loadQuestion();
// }


// const visiblecat = () =>
// {
//     dropcatgcontent.classList.toggle('visible');
// }

// window.onclick = function(event)
// {
//     if(!event.target.matches('.dropcategory, .dropcatg-content'))
//     {
//         if(dropcatgcontent.classList.contains('visible'))
//         {
//             dropcatgcontent.classList.remove('visible');
//         }
//     }
// }
//  const visiblelev = () =>
//  {
//      droplvlcontent.classList.toggle('visible');
//  }
// // window.onclick = function(e)
// // {
// //     if(!e.target.matches('.droplevel') && !e.target.matches('.droplvl-content'))
// //     {
// //         if(droplvlcontent.classList.contains('visible'))
// //         {
// //             droplvlcontent.classList.remove('visible');
// //         }
// //     }
// // }
//  window.addEventListener('click', (event) =>
//  {
//      if(!event.target.matches('.droplevel'))
//      {
//          if(droplvlcontent.classList.contains('visible'))
//          {
//              droplvlcontent.classList.remove('visible');
//          }
//      }
//  })
 
//  let flag = 1;
//  const checkAll = () =>
//  {
//     var checkallbtn = document.querySelectorAll('.category');
//     if(flag == 1)
//     {
//         for( let i = 0; i < checkallbtn.length; i++)
//         {
//             checkallbtn[i].checked = true;
//         }
//         flag = 0;
//     }
//     else
//     {
//         for( let i = checkallbtn.length - 1; i >= 0; i--)
//         {
//             checkallbtn[i].checked = false;
//         }
//         flag = 1;
//     }
//  }
//  let pc1 = "", pc2 = "", pc3 = "", pc4 = "", pc5 = "", pc6 = "", pc7 = "", pc8 = "", pc9 = "", pc10 = "";
//  var precat = "";
//  var c1 = document.getElementById('cat1');

//  const getCheckboxData = () =>
//  {
//     var c1 = document.querySelector('#cat1');
//     var c2 = document.getElementById('cat2');
//     var c3 = document.getElementById('cat3');
//     var c4 = document.getElementById('cat4');
//     var c5 = document.getElementById('cat5');
//     var c6 = document.getElementById('cat6');
//     var c7 = document.getElementById('cat7');
//     var c8 = document.getElementById('cat8');
//     var c9 = document.getElementById('cat9');
//     var c10 = document.getElementById('cat10');


//     if(c1.checked == true)
//     {
//         pc1 = c1.value + ",";
//     }
//     if(c2.checked == true)
//     {
//         pc2 = c2.value + ",";
//     }
//     if(c3.checked == true)
//     {
//         pc3 = c3.value + ",";
//     }
//     if(c4.checked == true)
//     {
//         pc4 = c4.value + ",";
//     }
//     if(c5.checked == true)
//     {
//         pc5 = c5.value + ",";
//     }
//     if(c6.checked == true)
//     {
//         pc6 = c6.value + ",";
//     }
//     if(c7.checked == true)
//     {
//         pc7 = c7.value + ",";
//     }
//     if(c8.checked == true)
//     {
//         pc8 = c8.value + ",";
//     }
//     if(c9.checked == true)
//     {
//         pc9 = c9.value + ",";
//     }
//     if(c10.checked == true)
//     {
//         pc10 = c10.value;
//     }
// }
// getCheckboxData();
// precat = pc1 + pc2 + pc3 + pc4 + pc5 + pc6 + pc7 + pc8 + pc9 + pc10;


// const levelradio = document.querySelectorAll('input[name="level"]');
// // console.log(levelradio);
// let selectedLevel;
// const getlevelData = () =>
// {

//     for(var i = 0; i < levelradio.length; i++)
//     {
//         if(levelradio[i].checked == false)
//         {
//             selectedLevel = levelradio[i].value;
//         }
//         break;
//     }
// }
// getlevelData();


// console.log(selectedLevel);
    
// cat= "geography";


const loadQuestion = () =>
{    
    fetch(`https://the-trivia-api.com/api/questions?&limit=10&region=IN`)
    .then( (apidata) =>
    {
        console.log(apidata);
        // console.log(apidata.json());
        return apidata.json();
        
    }).then( (actualdata) =>
    {
        mydata = actualdata;
        console.log(actualdata);
        // console.log(actualdata[1].question);
        // console.log(actualdata[1].correctAnswer);
        const questionList = mydata[questionCount];
        question.innerHTML = questionList.question;
        // option1.innerHTML = actualdata[1].correctAnswer;
        // option2.innerHTML = actualdata[1].incorrectAnswers[0];
        // option3.innerHTML = actualdata[1].incorrectAnswers[1];
        // option4.innerHTML = actualdata[1].incorrectAnswers[2];
        opt1 = questionList.correctAnswer;
        opt2 = questionList.incorrectAnswers[0];
        opt3 = questionList.incorrectAnswers[1];
        opt4 = questionList.incorrectAnswers[2];
        
        let arr = [opt1, opt2, opt3, opt4];
        
        console.log(arr);
        console.log(opt1);
        
        function shuffle(array) {
            
            for (var i = 0; i <= 3; i++) {
                
                // Generate random number
                var j = Math.floor(Math.random() * (3));
                
                var temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
            
            return array;
        }
        
        shuffle(arr);
        console.log(arr);
        console.log(opt1);

        
        option1.innerHTML = arr[0];
        option2.innerHTML = arr[1];
        option3.innerHTML = arr[2];
        option4.innerHTML = arr[3];      
        
        // scoreArea.innerHTML = opt1;
        select.forEach( choice =>
            {   
                choice.classList.remove('red');
                choice.classList.remove('green');
                const me = choice.firstElementChild;
                // const my = me.previousSibling;
                console.log(me);
                me.classList.remove('red');
                me.classList.remove('green');
            })
    })
}

loadQuestion();
document.querySelector('.noofques').innerHTML = `${questionCount}/10`;
document.getElementById('myscore').innerHTML = `${score}`;

// if (precat) {
//     loadQuestion();
// }
// else
// {
//     alert("PLease choose your category !!");
// }


// const getCheckAnswer = () =>
// {
//     let answer;

//     answers.forEach((curAnsElem) =>
//     {
//         if(curAnsElem.checked)
//         {
//             answer = curAnsElem.nextElementSibling.innerHTML;
//         }
//     });
//     return answer;
// }

// const deselectAll = () =>
// {
//     answers.forEach( (curAnsElem) =>
//     {
//         curAnsElem.checked = false;
//     })
// }

select.forEach(choice =>
    {

        choice.addEventListener('click', e =>
        {
            // const checkedAnswer = getCheckAnswer();
            const checkedAnswerId = e.target.id;
            const checkedAnswer = document.getElementById(checkedAnswerId).innerHTML;
            console.log(checkedAnswerId);
            console.log(checkedAnswer);
            console.log(mydata);
            const me = document.getElementById(checkedAnswerId).previousElementSibling;
            questionCount++;
            
            console.log(score);
            if(checkedAnswer == opt1)
            {
                score += 10;
               
                console.log("Coorect");
                // scoreArea.innerHTML = `YOur answer is correct`;
                me.classList.add('green');
                console.log(me);
            }
            else
            {
                me.classList.add('red');
            }
           
            document.querySelector('.noofques').innerHTML = `${questionCount}/10`;
document.getElementById('myscore').innerHTML = `<i class="fa-solid fa-trophy"></i>${score}`;
            console.log(questionCount);
            
            // deselectAll();
            
            if(questionCount < mydata.length)
            {
               
                loadQuestion();
                // scoreArea.innerHTML = `<h3>You scored ${score}/${mydata.length}</h3>`
            }
            else
            {
                localStorage.setItem("mostRecentScore", score);
                window.location.href = "end.html";
                // scoreArea.innerHTML = `Game Over!!!!`;
                // scoreArea.innerHTML = `<h3>You scored ${score}/${mydata.length}</h3>
                // <button class="btn" onclick="location.reload()">Play Again</button>`;
                // scoreArea.classList.remove('scoreArea');
            }
        });
    })