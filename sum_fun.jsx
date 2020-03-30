const Game = require('./components/game')
let start_menu_buttons;
document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
    const high_scores_list = document.getElementById('high_scores_list');
    start_menu_buttons = document.createElement('div');
    const start_button = document.createElement('BUTTON');
    const easy_button = document.createElement('BUTTON');
    const medium_button = document.createElement('BUTTON');
    const hard_button = document.createElement('BUTTON');
    let difficulty = 1;


    let high_scores = JSON.parse(localStorage.getItem('high_scores')) || [];
    let high_scores_text = "<ul> ";
    for(let i =0; i < high_scores.length; i++){

        high_scores_text += '<li> <span class="span1">' + (i + 1) + ':' +
        '</span> <span class="span2">' + high_scores[i] + '</span></li>';

    }
    high_scores_text += '</ul>';
    high_scores_list.innerHTML = high_scores_text;

    start_menu_buttons.id = 'start_menu_buttons';

    start_button.innerHTML = "Play Game"
    start_button.id = 'start_button';
    start_button.className += 'menu_button';
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
    const inGameMenu = document.createElement('div');
    inGameMenu.id = 'inGameMenu';
    const context = game_canvas.getContext('2d');
    game_canvas.height = 675;
    game_canvas.width = 1100;
    const game = new Game(difficulty);
    game.draw(game_canvas);
    let score = document.createElement('div');
    score.innerHTML = 'Score: ' + game.score;
    score.id = 'score';
    score.className = "menu_text"
    inGameMenu.appendChild(score);

    let time = 100;
    let timer = document.createElement('div');
    timer.innerHTML = ' Time: ' + time;
    timer.id = 'timer';
    timer.className = "menu_text"
    inGameMenu.appendChild(timer);
    const runTime = () => {
        time -= 1;
        timer.innerHTML = ' Time: ' + time;
        if(time < 1){
            clearInterval(timeInterval);
            gameOver(game.score * game.difficulty);
        }
    }
    let timeInterval = setInterval(runTime, 1000);


    
    let inputField = document.createElement("div");
    inputField.id = 'inputField';
    // inputField.setAttribute("type", "text");
    root.appendChild(inGameMenu);
    inGameMenu.appendChild(inputField);
    // inputField.focus();
    let sumbitButton = document.createElement("BUTTON");
    sumbitButton.innerHTML = 'Submit';
    const handleSubmit = () => {
        if (inputField.innerHTML ==='') return false;

        game.guess(inputField.innerHTML);

        context.clearRect(0, 0, game_canvas.width, game_canvas.height);
        game.draw(game_canvas);
        score.innerHTML = 'Score: ' + game.score;
        inputField.innerHTML = '';
    }
    window.addEventListener('keydown', e=> {
        if(e.keyCode === 13){
            handleSubmit();
        }
        if (e.keyCode < 48 || e.keyCode > 57) {
            if(e.keyCode === 189){
                if(inputField.innerHTML[0] === '-'){
                    inputField.innerHTML = inputField.innerHTML
                    .slice(1,inputField.innerHTML.length);
                }else{
                    inputField.innerHTML = '-' + inputField.innerHTML;
                }
            }
            if (e.keyCode === 8 && inputField.innerHTML.length > 0){
                inputField.innerHTML = inputField.innerHTML
                    .slice(0, inputField.innerHTML.length -1);
            }
            return false;
        }else{
            inputField.innerHTML += e.key;
        }
    })
    sumbitButton.addEventListener('click', handleSubmit);
    inGameMenu.appendChild(sumbitButton);
}

const gameOver = (score) =>{
    root.innerHTML = '<div class="menu_text" id="game_over">GAME OVER</div>'
    const canvas = document.getElementById('game-canvas');
    const high_scores_list = document.getElementById('high_scores_list');
    let high_scores = JSON.parse(localStorage.getItem('high_scores')) || [];
    high_scores.push(score);
    high_scores.sort((a, b) => a - b);
    high_scores.reverse();
    high_scores = high_scores.slice(0, 10);
    localStorage.setItem('high_scores', JSON.stringify(high_scores));
    let high_scores_text = "<ul> ";
    for (let i = 0; i < high_scores.length; i++) {

        high_scores_text += '<li> <span class="span1">' + (i + 1) + ':' +
            '</span> <span class="span2">' + high_scores[i] + '</span></li>';
    }
    high_scores_text += '</ul>';
    high_scores_list.innerHTML = high_scores_text;

    const restart_button = document.createElement('BUTTON');
    restart_button.id = 'restart_button';
    restart_button.innerHTML = 'Play Again'

    restart_button.addEventListener('click', () =>{
        root.innerHTML = '';
        root.appendChild(start_menu_buttons);
        const ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    })
    root.appendChild(restart_button);
}

