const companies = [
    "Arvika Teknik AB",
    "Vattenfall",
    "Vasa Vind AB",
    "Eskilstuna Strängnäs Energi och Miljö AB",
    "Skellefteälvens Vattenlagringsföretag"
];

const display = document.getElementById('display');
const display2 = document.getElementById('display2');
const display3 = document.getElementById('display3');

function nameDisplay() {
    let index = 0;
    let currentWidth;
    let fullWidth = 700;
    let expand;

    cycle();

    setInterval(animation, 10);

    function cycle() {
        if (index < companies.length-1) {
            index++;
        } else {
            index = 0;
        }

        display.textContent = companies[index];
        
        currentWidth = 0;

        expand = true;
    }

    function animation() {
        if (currentWidth < fullWidth && currentWidth >= 0) {
            display.style.width = currentWidth + 'px';
            expand ? currentWidth = currentWidth + 6 : currentWidth = currentWidth - 2;
        } else if (currentWidth >= fullWidth && expand === true){
            currentWidth = currentWidth - 6;
            expand = false;
        } else if (expand === false && currentWidth <= 0) {
            cycle();
        }
    }
}

function nameDisplay2() {
    let index = 0;
    let counter = 0;
    let cursorCounter = 0;
    let currentWord;
    let cursorVisibility = [
        "none",
        "block"
    ];
    let cursorIndex = 0;
    const verticalLine = document.getElementById('vertical-line');

    function cycle() {
        if (index < companies.length-1){
            index++;
        } else {
            index = 0;
        }

        counter = 0;
        cursorCounter = 0;
        currentWord = companies[index];
        display2.innerHTML = "";
        cursor();
    }

    function cursor() {
        if (cursorCounter < 4) {
            verticalLine.style.display = cursorVisibility[cursorIndex];
            cursorCounter++;
            cursorIndex = 1 - cursorIndex;
            setTimeout(cursor, 500);
        } else if (counter === 0) {
            typewriter();
        } else {
            cycle();
        }
    }

    function typewriter() {
        if (counter < currentWord.length) {
            display2.innerHTML += currentWord.charAt(counter);
            counter++;
            setTimeout(typewriter, 50);
        } else {
            cursorCounter = -4;
            cursor();
        }
    }

    cycle();
}

function nameDisplay3() {
    let index = 0;
    let position;

    function cycle() {
        if (index < companies.length-1){
            index++;
        } else {
            index = 0;
        }

        position = 250;
        display3.textContent = companies[index];
        animation();
    }

    function animation() {
        if (position > 0) {
            display3.style.marginTop = position + "px";
            position = position - 10;
            setTimeout(animation, 10);
        } else if (position === 0) {
            position--;
            setTimeout(animation, 2000);
        } else if (position < 0 && position > -250) {
            display3.style.marginTop = position + "px";
            position = position - 2;
            setTimeout(animation, 10);
        } else {
            cycle();
        }
    }

    cycle();
}

nameDisplay();
nameDisplay2();
nameDisplay3();