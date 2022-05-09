const holes = document.querySelectorAll('.hole');
const moles = document.querySelectorAll('.mole');
const scoreBoard = document.querySelector('.score');
const startBtn = document.querySelector('.btn-start');
const game = document.querySelector('.game');
const levelBoard = document.querySelector('.level');

const endGame = document.createElement('div');
endGame.classList.add('endgame');


const lastHole ='';
let score = 0;
let level = 1;
let showMoleTime = 1000; 
const gameDuration = 15000; 
const moleDelay = 1000;
let inverval;

const randomHole = () => {
    let maxHoles = holes.length;
    let hole = parseInt(Math.random() * (maxHoles - 0) + 0);
    return hole;
}

const showMole = () => {
    let hole = randomHole();
    let actualHole = holes[hole];
    actualHole.classList.add('up');
    setTimeout(() => {
        actualHole.classList.remove('up');
    }, showMoleTime);
          
}

const execShowMole = () => {
    interval = setInterval( () => {
        showMole();
    },moleDelay);
}

// const startGame = () => {

// }

const wack = () => {
    moles.forEach( mole => {
        mole.addEventListener('click', () => {
            score++;
            scoreBoard.textContent = score;
            mole.parentElement.classList.remove('up');
        });  
       
    });
}
wack();

//eventos
startBtn.addEventListener('click', startGame);



