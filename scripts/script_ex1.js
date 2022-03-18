const companies = [
    "Arvika Teknik AB",
    "Vattenfall",
    "Vasa Vind AB",
    "Eskilstuna Strängnäs Energi och Miljö AB",
    "Skellefteälvens Vattenlagringsföretag"
];

const display1 = document.getElementById('display1');
const overlay1 = document.getElementById('overlay1');

function nameDisplay1() {
    let index = 0;
    let currentWidth;
    let fullWidth = 900;
    let expand;
    let textWidth;
    let stopWidth;

    cycle();

    function cycle() {
        if (index < companies.length-1) {
            index++;
        } else {
            index = 0;
        }

        display1.textContent = companies[index];
        textWidth = display1.offsetWidth; 
        stopWidth = (fullWidth - textWidth) - 20;
        currentWidth = fullWidth;

        expand = true;
        animation();
    }

    function animation() {
        if (currentWidth > stopWidth && expand === true) {
            overlay1.style.width = currentWidth + 'px';
            currentWidth--;
            setTimeout(animation, 2);
        } else if (currentWidth === stopWidth){
            currentWidth = currentWidth + 1;
            expand = false;
            setTimeout(animation, 2000);
        } else if (currentWidth < fullWidth && expand === false) {
            overlay1.style.width = currentWidth + 'px';
            currentWidth++;
            setTimeout(animation, 2);
        } else {
            cycle();
        }
    }
}

nameDisplay1();