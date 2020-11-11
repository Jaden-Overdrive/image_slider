//Making the variables
var arr = ["snow_mountain.jpg","beach.jpg","field.jpg","lake.jpg","sea.jpg"];
var img = document.getElementById("photo");
var sep = document.getElementById("sepia");
var gs =  document.getElementById("gs");
var hue = document.getElementById("hue");
var inv = document.getElementById("inv");
var opac = document.getElementById("opac");
var bright = document.getElementById("bright");
var cont = document.getElementById("cont");
var blu = document.getElementById("blu");
var i = 0;

//Setting the default picture
img.src = arr[0];

//Setting the default value;
sep.value = 0;
gs.value = 0;
sat.value = 100;
hue.value = 0;
inv.value = 0;
opac.value = 100;
cont.value = 100;
blu.value = 0;
bright.value = 100;

//functions for the sliding
function right() {
	if(i >= arr.length - 1) {
		i = 0;
		img.src = arr[i];
	} else {
		i++;
		img.src = arr[i];
	}
}

function left() {
	if(i <= 0) {
		i = arr.length - 1;
		img.src = arr[i];
	} else {
		i--;
		img.src = arr[i];
	}
}

function setFilter() {
	let x = gs.value;
	let y = sep.value;
	let z = sat.value;
	let a = hue.value;
	let b = inv.value;
	let c = opac.value;
	let d = bright.value;
	let e = cont.value;
	let f = blu.value;
	
	let string = "grayscale(" + x + "%) sepia(" + y + "%) saturate(" + z + "%) hue-rotate(" + a + "deg) invert(" + b + "%) opacity(" + c + "%) brightness(" + d + "%) contrast(" + e + "%) blur(" + f + "px)";
	img.style.filter = string;
}

sep.addEventListener('input',setFilter);
gs.addEventListener('input',setFilter);
sat.addEventListener('input',setFilter);
hue.addEventListener('input',setFilter);
inv.addEventListener('input',setFilter);
opac.addEventListener('input',setFilter);
bright.addEventListener('input',setFilter);
cont.addEventListener('input',setFilter);
blu.addEventListener('input',setFilter);

function restart() {
	sep.value = 0;
	gs.value = 0;
	sat.value = 100;
	hue.value = 0;
	inv.value = 0;
	opac.value = 100;
	cont.value = 100;
	blu.value = 0;
	bright.value = 100;
	
	let x = gs.value;
	let y = sep.value;
	let z = sat.value;
	let a = hue.value;
	let b = inv.value;
	let c = opac.value;
	let d = bright.value;
	let e = cont.value;
	let f = blu.value;
	
	let string = "grayscale(" + x + "%) sepia(" + y + "%) saturate(" + z + "%) hue-rotate(" + a + "deg) invert(" + b + "%) opacity(" + c + "%) brightness(" + d + "%) contrast(" + e + "%) blur(" + f + "px)";
	img.style.filter = string;
}