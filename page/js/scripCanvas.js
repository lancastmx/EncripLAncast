
var canvas = document.getElementById('pizarra');
var pincel = canvas.getContext('2d');
	
	pincel.fillStyle = "lightgrey";   //propiedad
	pincel.fillRect(0,0,600,400); //función
	
	pincel.fillStyle = "green";   //propiedad
	pincel.fillRect(0,0,200,400); //función

	pincel.fillStyle = "red";   //propiedad
	pincel.fillRect(400,0,200,400); //función

	pincel.fillStyle = "yellow";   //propiedad
	pincel.beginPath();
	pincel.moveTo(300,200);
	pincel.lineTo(200,400);
	pincel.lineTo(400,400);
	pincel.fill();

	pincel.fillStyle = "blue";   //propiedad
	pincel.beginPath();
	pincel.arc(300,200,50,0,2*3.14);
	pincel.fill();
