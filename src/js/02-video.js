import Player from '@vimeo/player';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);


player.on('play', function() {
	console.log('Пуск відео');
});

player.on('timeupdate', function(data) {
	console.log('Тривалість: '+data.seconds);
	const asd = +data.seconds
	localStorage.setItem("videoplayer-current-time", JSON.stringify(asd));
});

const savedSettings = localStorage.getItem("videoplayer-current-time");
const parsedSettings = JSON.parse(savedSettings);
console.log(parsedSettings); 

player.setCurrentTime(parsedSettings);




// (function(){
// 	try{
// 		const finishTime = localStorage.getItem(KEY_TIME);
// 	}catch (e) {
// 		console.log("empty")
// 	}
// })();

