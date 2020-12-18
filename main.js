var content = [
	licence = {
		MIT: false,
		github: false,
		other:false
	},
	game_tag = {
		og_tag: 'GaMe'
	},
	newGameInfo = {
		one: 'favicon',
		two: 'title'
	}
];
let newgame;
function Newgame(favi, title) {
	this.favi = favi;
	this.title = title;
	var Game = document.getElementById('Game');
};
function setup() {
	document.body.innerHTML = `
		<title>${newgame.title}</title>
		<link rel="icon" type="icon" href=${newgame.favi}png">
	`;
}
function Version() {
    console.log("___________________________");
    console.log("|000000  0000     00000   |");
    console.log("|0       0   00   0       |");
    console.log("|000     0000     00000   |");
    console.log("|0       0            0   |");
    console.log("|0       0        00000   |");
    console.log("|_       _        _____   |");
    console.log("|__________1.0.1__________|");
}
window.addEventListener('load', Version);
console.log(content);