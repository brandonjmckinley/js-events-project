document.addEventListener('DOMContentLoaded', () => {
// keep the line above exactly as it is


/* THIS IS A TEST. DELETE IT AFTER.

let photo = document.querySelector('.photo');

photo.onclick = () => {
  photo.style.display = "none";
}

*/

let coffee = document.querySelector('#coffee_image')
let beans_caption = document.querySelector('#beans_caption')
beans_caption.style.display = 'none';
let coffee_caption = document.querySelector('#coffee_caption')

coffee.onmouseover = () => {
  coffee.setAttribute('src', 'images/coffee_beans.jpg');
  beans_caption.style.display = 'block';
  coffee_caption.style.display = 'none';
}


let lists = document.querySelectorAll('.list')

lists.forEach(function(e) {
  e.addEventListener('click', function(){
    this.style.color = '#999';
    this.style.textDecoration = 'line-through';
  });
});


let fried_recipe = document.querySelector('#fried_recipe')
fried_recipe.style.display = 'none';
let fried_photo = document.querySelector('#fried_photo');

fried_photo.onclick = () => {
  fried_recipe.style.display = 'block';
}


let scrambled_recipe = document.querySelector('#scrambled_recipe')
scrambled_recipe.style.display = 'none';
let scrambled_photo = document.querySelector('#scrambled_photo');

scrambled_photo.onclick = () => {
  scrambled_recipe.style.display = 'block';
}


let poached_recipe = document.querySelector('#poached_recipe')
poached_recipe.style.display = 'none';
let poached_photo = document.querySelector('#poached_photo');

poached_photo.onclick = () => {
  poached_recipe.style.display = 'block';
}

// // keep the line below exactly as it is
});
