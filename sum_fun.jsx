const Game = require('./components/game')
let start_menu_buttons;
document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
    const high_scores_list = document.getElementById('root');
    start_menu_buttons = document.createElement('div');
    const start_button = document.createElement('BUTTON');
    const easy_button = document.createElement('BUTTON');
    const medium_button = document.createElement('BUTTON');
    const hard_button = document.createElement('BUTTON');
    let difficulty = 1;


    let high_scores = JSON.parse(localStorage.getItem('high_scores')) || [];
    let high_scores_text = "<ul> High Scores <br />";
    for(let i =0; i < high_scores.length; i++){

        high_scores_text += '<li>' + (i+1) + ': ' + high_scores[i] + '<li />';

    }
    high_scores_text += '<ul />';
    high_scores_list.innerHTML = high_scores_text;

    start_menu_buttons.id = 'start_menu_buttons';

    start_button.innerHTML = "Play Game"
    start_button.id = 'start_button';
    root.appendChild(start_menu_buttons);
    start_menu_buttons.appendChild(start_button);

    easy_button.innerHTML = "Easy"
    easy_button.id = 'easy_button';
    start_menu_buttons.appendChild(easy_button);
    easy_button.addEventListener('click', () => { 
        difficulty = 1;
        easy_button.className = 'selected';
        medium_button.className = 'unselected';
        hard_button.className = 'unselected';
     })
    medium_button.innerHTML = "Hard"
    medium_button.id = 'medium_button';
    start_menu_buttons.appendChild(medium_button);
    medium_button.addEventListener('click', () => { 
        difficulty = 2;
        easy_button.className = 'unselected';
        medium_button.className = 'selected';
        hard_button.className = 'unselected';
    })
    hard_button.innerHTML = "Very Hard"
    hard_button.id = 'hard_button';
    start_menu_buttons.appendChild(hard_button);
    hard_button.addEventListener('click', () => { 
        difficulty = 3;
        easy_button.className = 'unselected';
        medium_button.className = 'unselected';
        hard_button.className = 'selected';
     })


    start_button.addEventListener('click', ()=>{
        // console.log(difficulty, '<- difficulty')
        easy_button.className = 'unselected';
        medium_button.className = 'unselected';
        hard_button.className = 'unselected';
        runGame(difficulty);
    });
})
const runGame = (difficulty) => {
    start_menu_buttons.outerHTML = '';
    const game_canvas = document.getElementById('game-canvas');
    const context = game_canvas.getContext('2d');
    game_canvas.height = window.innerHeight;
    game_canvas.width = window.innerWidth;

    const game = new Game(difficulty);
    game.draw(game_canvas);
    let score = document.createElement('div');
    score.innerHTML = 'Score: ' + game.score;
    score.id = 'score';
    root.appendChild(score);

    let time = 5;
    let timer = document.createElement('div');
    timer.innerHTML = ' Time: ' + time;
    timer.id = 'timer';
    root.appendChild(timer);
    const runTime = () => {
        time -= 1;
        timer.innerHTML = ' Time: ' + time;
        if(time < 1){
            clearInterval(timeInterval);
            gameOver(game.score * game.difficulty);
        }
    }
    let timeInterval = setInterval(runTime, 1000);


    
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

const gameOver = (score) =>{
    root.innerHTML = 'GAME OVER'
    const canvas = document.getElementById('game-canvas');
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    let high_scores = JSON.parse(localStorage.getItem('high_scores')) || [];
    // if(high_scores === null) high_scores = [];
    // debugger;
    high_scores.push(score);
    high_scores.sort();
    high_scores.reverse();
    // high_scores.splice(0, 9);
    localStorage.setItem('high_scores', JSON.stringify(high_scores));
    let high_scores_text = "<ul> High Scores <br />";
    for (let i = 0; i < high_scores.length; i++) {
        high_scores_text += '<li>' + (i+1) + ': ' + high_scores[i] + '<li />';
    }
    high_scores_text += '<ul />';
    high_scores_list.innerHTML = high_scores_text;

    const restart_button = document.createElement('BUTTON');

    restart_button.addEventListener('click', () =>{
        root.innerHTML = '';
        root.appendChild(start_menu_buttons);
    })
    root.appendChild(restart_button);
}

