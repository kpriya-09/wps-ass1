let day = new Date();
let today = day.getDay();
let hour = day.getHours();
let imgSelect = document.getElementById("img-above");
let textSelect = document.getElementById("text-below");

console.log(day,today,hour);
const quotes=[
	"Life is a mountain. Your goal is to find your path, not to reach the top.",
	"Life is from the inside out. When you shift on the inside, life shifts on the outside.",
	"Keep your eyes on the stars and your feet on the ground.",
	"It’s better to be a lion for a day than a sheep all your life. ",
	"Life is a question and how we live it is our answer.",
	"Difficult and meaningful will always bring more satisfaction than easy and meaningless.",
	"The only way out is through.",
	"It always seems impossible until it’s done."
];
const bgColors=[
	"363062","511845","202040","222831"
]
const colors=[
	"D8B9C3","FF5733","FFBD69","EEEEEE"
]

setInterval(function(){
	if(today >=0 && today<=6){
		const rand = Math.floor(Math.random()*6 + 1);
		imgSelect.src = "./images/img-" + rand + ".jpg";	
	}
},86400000);//24x60x60x60x1000
setInterval(function(){
	if(hour >=0 && hour <=23){
			const randText = Math.floor(Math.random()*quotes.length);
			const randColor = Math.floor(Math.random()*colors.length);
			textSelect.innerText=quotes[randText];
			textSelect.style.color = "#"+colors[randColor]; 
			document.body.style.backgroundColor = "#"+bgColors[randColor];
	}
},21600000);//6x60x60x60x1000

