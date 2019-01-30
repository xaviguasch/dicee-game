console.log('its conected!');

const randomNumber1 = Math.floor(Math.random() * 6) + 1
const randomNumber2 = Math.floor(Math.random() * 6) + 1


document.querySelector('.img1').setAttribute("src", `images/dice${randomNumber1}.png`)

document.querySelector('.img2').setAttribute("src", `images/dice${randomNumber2}.png`)

if (randomNumber1 > randomNumber2) {
    console.log('player 1 wins');
    document.querySelector('h1').innerHTML = 'Player 1 Wins!'
} else if (randomNumber1 === randomNumber2) {
    document.querySelector('h1').innerHTML = 'DRAW!!!'

    console.log('draw!!!!');
} else {
    console.log('player 2 wins');
    document.querySelector('h1').innerHTML = 'Player 2 Wins!'

}