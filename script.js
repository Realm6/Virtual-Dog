const speciesSelect = document.querySelector('#species');
const colorInput = document.querySelector('#color');
const accessoriesCheckboxes = document.querySelectorAll('input[name="accessories"]');
const petDisplay = document.querySelector('#pet');
const playButton = document.querySelector('#play');
const feedButton = document.querySelector('#feed');
const cleanButton = document.querySelector('#clean');

let pet = {};

// Event listener for pet creation form submission
document.querySelector('form').addEventListener('submit', function(event) {
event.preventDefault();
pet = {
	species: speciesSelect.value,
	color: colorInput.value,
	accessories: []
};

accessoriesCheckboxes.forEach(function(checkbox) {
	if (checkbox.checked) {
		pet.accessories.push(checkbox.value);
	}
});

displayPet();
});

// Event listeners for pet activity buttons
playButton.addEventListener('click', function() {
petDisplay.innerHTML = '<img src="images/play.png" alt="Playing pet">';
});

feedButton.addEventListener('click', function() {
petDisplay.innerHTML = '<img src="images/food.png" alt="Eating pet">';
});

cleanButton.addEventListener('click', function() {
petDisplay.innerHTML = '<img src="images/bath.png" alt="Clean pet">';
});

function displayPet() {
	let accessoriesHtml = '';

	pet.accessories.forEach(function(accessory) {
		accessoriesHtml += `<img src="images/${accessory}.png" alt="${accessory}" class="accessory">`;
	});

	petDisplay.innerHTML = `
		<img src="images/${pet.species}.png" alt="${pet.species}" style="background-color: ${pet.color};">
		${accessoriesHtml}
	`;
}