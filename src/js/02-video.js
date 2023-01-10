import Player from '@vimeo/player';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);
const throttle = require('lodash.throttle');


player.on('play', function() {
	console.log('Пуск відео');
});

player.on('timeupdate', throttle(function(data) {
	console.log('Тривалість: '+data.seconds);
	const asd = +data.seconds
	localStorage.setItem("videoplayer-current-time", JSON.stringify(asd));
}, 1000));

const savedSettings = localStorage.getItem("videoplayer-current-time");


if (savedSettings) {
	const parsedSettings = JSON.parse(savedSettings) || "";
	console.log(parsedSettings); 
	player.setCurrentTime(parsedSettings);
}






