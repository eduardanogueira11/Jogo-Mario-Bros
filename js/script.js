const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const audioJump = document.querySelector('.audiojump');    
const gameOver = document.querySelector('.gameover');

const jump = () => {
    mario.classList.add('jump');

    audioJump.currentTime = 0.1;
    audioJump.volume = 0.1;
    audioJump.play();

    setTimeout(() => {
      mario.classList.remove('jump');

    }, 500);
}

const loop = setInterval(() => {

    console.log('loop')

    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px' , '');

    console.log(marioPosition);

    if (pipePosition <=120 && marioPosition > 0 && marioPosition < 90){

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px` ;

        pipe.style.animation = 'none';
        pipe.style.bottom = `${marioPosition}px`;

        mario.src = '../src/images/game-over.png' ;
        mario.style.width = '75px' ;
        mario.style.marginLeft = '50px';

        gameOver.currentTime = 0.1;
        gameOver.volume = 0.2;
        gameOver.play();

        clearInterval(loop);
    }

}, 10);

document.addEventListener('keydown', jump);