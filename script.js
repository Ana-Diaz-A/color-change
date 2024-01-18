let colors = [ 'red', 'blue', 'green', 'orange', 'purple', 'black', 'yellow'];
let button = document.getElementById('button'); // Change canvas background when button is clicked

// Assign random color to canvas background
button.addEventListener('click', function(){
    let index = parseInt((Math.random()*colors.length)+1);
    let canvas = document.getElementById('canvas');   
    canvas.style.background = `${colors[index]}`  
})