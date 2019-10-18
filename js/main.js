var disabilities = [
    'Protanopia',
    'Protanomaly',
    'Deuteranopia',
    'Deuteranomaly',
    'Tritanopia',
    'Rod monochromacy',
    'Achromacy',
    'Color-blindness',
    'Blindness',
    'Macular degeneration',
    'Glaucoma',
    'Diabetic retinopathy',
    'Cataract',
    'Hearing Loss',
    'Deuteranomaly',
    'Deuteranomaly',
];

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

// function h1Loop() {           //  create a loop function
//     setInterval(function () {    //  call a 3s setTimeout when the loop is called
//         document.getElementsByTagName('h1')[0].innerText = disabilities[getRandomInt(15)];                      //  ..  setTimeout()
//     }, 3000)
// }
// h1Loop();

document.getElementsByTagName('h1')[0].innerText = disabilities[getRandomInt(15)];