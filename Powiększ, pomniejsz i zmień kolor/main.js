const btnUp = document.querySelector('.sizeUp')
const btnDown = document.querySelector('.sizeDown')
const btnColor = document.querySelector('.color')
const txt = document.querySelector('p')

// const compStyles = window.getComputedStyle(txt);
// const font = compStyles.fontSize;
// console.log(font);

let x = 36;

const up = () => {
    if (x >= 25 && x < 50) {
        x++
        txt.style.fontSize = x + 'px'
    }
}

const down = () => {
    if (x <= 50 && x > 25) {
        x--
        txt.style.fontSize = x + 'px'
    }
}

// console.log(txt.style.fontSize);

btnUp.addEventListener('click', up)
btnDown.addEventListener('click', down)



const clr = () => {
    txt.style.color = "#" + Math.floor((Math.random() * 1000000));
}

btnColor.addEventListener('click', clr)



// console.log(btnUp);
// console.log(btnDown);
// console.log(btnColor);


