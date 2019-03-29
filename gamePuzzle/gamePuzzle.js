
let arrayImages = [
    "funny-cat1_part1x1.jpg",
    "funny-cat1_part2x1.jpg",
    "funny-cat1_part3x1.jpg",
    "funny-cat1_part4x1.jpg",
    "funny-cat1_part5x1.jpg",
    "monkey_part1x1.jpg",
    "monkey_part2x1.jpg",
    "monkey_part3x1.jpg",
    "monkey_part4x1.jpg",
    "monkey_part5x1.jpg",
    "panda_swap_part1x1.jpg",
    "panda_swap_part2x1.jpg",
    "panda_swap_part3x1.jpg",
    "panda_swap_part4x1.jpg",
    "panda_swap_part5x1.jpg"
];

/**Initialize the game with random pics at every location**/
function  init() {

    for(let i = 1; i < 6; i++){
        let num =  Math.floor((Math.random() * 14));
        document.getElementById(i + "").src = "images/" + arrayImages[num];
    }
}

/*Change a pic when it is clicked*/
function displayRandomImages(e){
    let num =  Math.floor((Math.random() * 14));
    document.getElementById(e.id).getElementsByTagName("img").item(0).src = "images/" + arrayImages[num];
}

/*receive the location where an image is stored
* the string received will be manipulated by cutting some last charaters
* */
function getLink()
{
    let array = [];
    for(let i = 0; i < 5; i++){
        let locate = document.getElementById((i+1) + "").src;

        let link = (document.getElementById((i+1) + "").src).slice(0,locate.length-5);
        array[i] = link;
    }
    return array;
}


/*Check the images if they are belong to the same animal*/
function isSameAnimal() {
    let testSameAnimal = true;
    let links = getLink();

    for (let i = 1; i < 5; i++)
    {
        if(links[0].slice(0,links[0].length-2) !== links[i].slice(0,links[i].length-2))
            testSameAnimal = false;
    }

    return testSameAnimal;
}


/*To check if the images are in the right order  */
function isInOrder() {
    let testInOrder =  true;
    let links = getLink();

    for (let i = 0; i < 5; i++){
        if (parseInt( links[i].slice(-2,-1)) !== i+1) testInOrder = false;
    }

    return testInOrder;
}

/*Display the greeting when the puzzles is correctly in the right order*/
function displayMessage(){
    if (isSameAnimal() && isInOrder()) alert("Congratulation: You've done well!");
}

window.onclick = displayMessage;
window.onload = init;


