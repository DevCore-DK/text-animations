const companies = [
    "Arvika Teknik AB",
    "Vattenfall",
    "Vasa Vind AB",
    "Eskilstuna Strängnäs Energi och Miljö AB",
    "Skellefteälvens Vattenlagringsföretag"
];

const display1 = document.getElementById('display1');

function nameDisplay1() {
    let index = 0;
    let counter = 0;
    let cursorCounter = 0;
    let currentWord;
    let cursorOpacity = 0;
    let back;
    const verticalLine1 = document.getElementById('vertical-line1');

    function cycle() {
        if (index < companies.length-1){
            index++;
        } else {
            index = 0;
        }

        counter = 0;
        cursorCounter = 0;
        currentWord = companies[index];
        typewriter();
    }

    function cursor() {
        if (cursorCounter < 4) {
            verticalLine1.style.opacity = cursorOpacity;
            cursorCounter++;
            cursorOpacity = 1 - cursorOpacity;
            setTimeout(cursor, 500);
        } else if (!back) {
            cycle();
        } else {
            typewriterBack();
        }
    }

    function typewriter() {
        if (counter < currentWord.length) {
            display1.innerHTML += currentWord.charAt(counter);
            counter++;
            setTimeout(typewriter, 50);
        } else {
            back = true;
            cursorCounter = 0;
            cursor();
        }
    }

    function typewriterBack() {
        if (counter != 0) {
            counter--;
            display1.textContent = currentWord.substring(0, counter);
            setTimeout(typewriterBack, 25);
        } else {
            back = false;
            cursorCounter = 0;
            cursor();
        }
    }

    cycle();
}

nameDisplay1();