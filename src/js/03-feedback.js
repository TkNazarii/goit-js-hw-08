refs = {
input: document.querySelector(".feedback-form input"),
form: document.querySelector(".feedback-form"),
textarea: document.querySelector(".feedback-form textarea"),
};

const STORAGE_KEY = "feedback-form-state";
const throttle = require('lodash.throttle');

const formData = {};

refs.form.addEventListener("submit", onFormSubmit);
refs.textarea.addEventListener("input", throttle(onTextareaInput, 500));
refs.form.addEventListener("input", saveValue)
populateTextarea()


function onFormSubmit(event) {
	event.preventDefault();
	// console.log("Відправляю форму");
	
	event.currentTarget.reset();
	localStorage.removeItem(STORAGE_KEY);
};

function onTextareaInput(event) {
	// const message = event.target.value;
	const message = JSON.stringify(formData);

	localStorage.setItem(STORAGE_KEY, message)
};

function populateTextarea() {
	const saveMessage = localStorage.getItem(STORAGE_KEY);
	const saveMessageParse = JSON.parse(saveMessage);
	console.log(saveMessageParse); //обєкт
	
	if (saveMessageParse) {
		refs.input.value = saveMessageParse.email || "";
		console.log(refs.input.value);
		refs.textarea.value = saveMessageParse.message || "";
	};
};

function saveValue(event) {
	// console.log(event.target.name);
	// console.log(event.target.value);
	formData[event.target.name] = event.target.value;
	console.log(formData);
}



