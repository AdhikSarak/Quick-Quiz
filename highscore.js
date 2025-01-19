const highScorelist = document.getElementById('highScorelist');
const highscored = JSON.parse(localStorage.getItem("highscores")) || [];
console.log(highscored);
console.log(highScorelist);

highScorelist.innerHTML +=
    highscored.map( (score) =>
    {

        return `<tbody>
                    <tr>
                        <td>${score.name}</td>
                        <td>${score.score}</td>
                     </tr>
                 </tbody>`;
    }).join("");