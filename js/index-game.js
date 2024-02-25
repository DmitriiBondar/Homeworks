document.getElementById('mainButton').addEventListener("click", button);
function button() {
    let el = document.getElementById('mainButton');
    // el.innerHTML = "Let's go!";
    el.style.background = '#008282';
    el.style.color = 'pink';

    alert('hello world!');
}


let mounthGame = function(el) {
    // el.innerHTML = "Let's go!";
    el.style.background = '#008282';
    el.style.color = 'black';

    let monthNumber = Number(prompt('Введите число месяца'));
    switch (monthNumber) {
        case 12:
        case 1:
        case 2:
            alert('Winter');
            break;
        case 3:
        case 4:
        case 5:
            alert('Spring');
            break;
        case 6:
        case 7:
        case 8:
            alert('Summer');
            break;
        case 9:
        case 10:
        case 11:
            alert('Autumn');
            break;
        default:
            alert('Недопустимое число');
            break;
    }
}

document.getElementById('wordsButton').addEventListener("click", wordButton);
function wordButton() {
    let el = document.getElementById('wordsButton');
    // el.innerHTML = "Let's go!";
    el.style.background = '#008282';
    el.style.color = 'pink';

    alert('hello words!');
}

document.getElementById('riddleButton').addEventListener("click", wordButton);
function wordButton() {
    let el = document.getElementById('riddleButton');
    // el.innerHTML = "Let's go!";
    el.style.background = '#008282';
    el.style.color = 'pink';

    alert('hello riddles!');
}


// ----------------------------------------
    // function buttonFunc() {
    //     alert('hello');
    // }

    // let buttons = document.getElementsByClassName('allWords');

    // for (let i = 0; i < buttons.length; i++) {
    //     buttons[i].addEventListener('click', buttonFunc);
    //     // buttons[i].style.background = '#008282';
    //     // buttons[i].style.color = 'pink';
    // }
// --------------------------------------------



// class ClickCounter  {
//     count = 0;
//     constructor( buttonId ){
//        document.getElementById(buttonId)
//            .addEventListener( "click", this.buttonClicked );
//    }
//     buttonClicked = e => {
//       this.count += 1;
//       console.log(`clicked ${this.count} times`);
//     }
//  }