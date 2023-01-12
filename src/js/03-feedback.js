// обєкт ссилок
const refs = {
input: document.querySelector(".feedback-form input"),
form: document.querySelector(".feedback-form"),
textarea: document.querySelector(".feedback-form textarea"),
};

const STORAGE_KEY = "feedback-form-state";
const throttle = require('lodash.throttle');

// обєкт даних які заисуєм в локал
let formData = {};

// слухачі події
refs.form.addEventListener("submit", onFormSubmit);
refs.textarea.addEventListener("input", throttle(onInputValue, 500));
refs.input.addEventListener("input", throttle(onInputValue, 500));
refs.form.addEventListener("input", saveValue)
populateTextarea();

// дії при сабміті
function onFormSubmit(event) {
	event.preventDefault();
	console.log("форма відправлення");
	
	event.currentTarget.reset();
	localStorage.removeItem(STORAGE_KEY);
	formData = {};
};

// записує в локал сторедж значення з інпута
function onInputValue(event) {
	const message = JSON.stringify(formData);

	localStorage.setItem(STORAGE_KEY, message)
};

// повертає збережене значення з локал
function populateTextarea() {
	const saveMessage = localStorage.getItem(STORAGE_KEY);
	const saveMessageParse = JSON.parse(saveMessage);
	// console.log(saveMessageParse); 
	
	if (saveMessageParse) {
		formData = saveMessageParse;
		refs.input.value = saveMessageParse.email || "";
		refs.textarea.value = saveMessageParse.message || "";
	};
};

// у обєкті строрює назви ключів і значень
function saveValue(event) {
	// console.log(event.target.name);
	// console.log(event.target.value);
	formData[event.target.name] = event.target.value;
	console.log(formData);
}



