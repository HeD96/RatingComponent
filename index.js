var button = document.getElementById('submit_button');
var imgButton = document.getElementById('thank_img');

button.addEventListener('click', function() {
    document.querySelector('.rating_component').classList.add('hidden');
    document.querySelector('.thank_u').classList.remove('hidden');
});

imgButton.addEventListener('click', function() {
    document.querySelector('.rating_component').classList.remove('hidden');
    document.querySelector('.thank_u').classList.add('hidden');
})






