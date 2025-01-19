const score = document.querySelector('.score');
const username = document.querySelector('.username');
const save = document.querySelector('.save');
const mostRecentScore = localStorage.getItem("mostRecentScore");

score.innerHTML = `<i class="fa-solid fa-trophy"></i>${localStorage.getItem("mostRecentScore")}`;

// localStorage.setItem("highscores", null);
const highscores = JSON.parse(localStorage.getItem("highscores")) || [];
console.log(highscores);


username.addEventListener( 'keyup', () =>
{
    save.disabled = !username.value;
})

save.addEventListener( 'click', (event) =>
{
    const myUsername = username.value;
    console.log(myUsername);
    event.preventDefault();

    const score = 
    {
        score : mostRecentScore,
        name : myUsername
    }
    console.log(score);
    // localStorage.setItem("mostRecentUser", myUsername);

    highscores.push(score);
    highscores.sort( (a, b) => b.score - a.score);
    highscores.splice(5);
    localStorage.setItem("highscores", JSON.stringify(highscores));
    window.location.href = "highscore.html";
})


