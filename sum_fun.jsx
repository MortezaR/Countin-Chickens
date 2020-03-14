const Game = require('./components/game')

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
    runGame();
})

function runGame(){
    const game_canvas = document.getElementById('game-canvas');
    const context = game_canvas.getContext('2d');
    game_canvas.height = window.innerHeight;
    game_canvas.width = window.innerWidth;

    const game = new Game();
    game.draw(game_canvas);
    let score = document.createElement('div');
    score.innerHTML = 'Score: ' + game.score;
    score.id = 'score';
    root.appendChild(score);

    let time = 100;
    let timer = document.createElement('div');
    timer.innerHTML = ' Time: ' + time;
    timer.id = 'timer';
    root.appendChild(timer);
    const runTime = () => {
        time -= 1;
        timer.innerHTML = ' Time: ' + time;
    }
    setInterval(runTime, 1000);


    
    let inputField = document.createElement("INPUT");
    inputField.setAttribute("type", "text");
    root.appendChild(inputField);
    let sumbitButton = document.createElement("BUTTON");
    const handleSubmit = () => {

        game.guess(inputField.value);

        context.clearRect(0, 0, game_canvas.width, game_canvas.height);
        game.draw(game_canvas);
        score.innerHTML = 'Score: ' + game.score;
        inputField.value = '';
    }
    sumbitButton.addEventListener('click', handleSubmit);
    root.appendChild(sumbitButton);
}

