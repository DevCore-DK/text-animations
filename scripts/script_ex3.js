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
    let position;
    let opacity;

    function cycle() {
        if (index < companies.length-1){
            index++;
        } else {
            index = 0;
        }

        position = 40;
        opacity = 0;
        display1.textContent = companies[index];
        animation();
    }

    function animation() {
        if (position > 0) {
            display1.style.marginTop = position + "%";
            display1.style.opacity = opacity + "%";
            position = position - 1;
            opacity = opacity + 2;
            setTimeout(animation, 5);
        } else if (position === 0) {
            display1.style.opacity = "100%";
            position--;
            setTimeout(animation, 2000);
        } else if (position < 0 && position > -40) {
            display1.style.marginTop = position + "%";
            display1.style.opacity = opacity + "%";
            position = position - 0.5;
            opacity = opacity - 2;
            setTimeout(animation, 5);
        } else {
            cycle();
        }
    }

    cycle();
}

nameDisplay1();