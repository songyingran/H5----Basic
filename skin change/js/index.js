window.onload = function(){
	var img = document.getElementsByTagName("img");
	var div = document.getElementById("content");
	img[0].onclick = function(){
		console.log("0");
		div.style.backgroundColor = "#CDCDCD";
		window.localStorage.setItem('divBackColor','#CDCDCD');
	}
	img[1].onclick = function(){
		console.log("1");
		div.style.backgroundColor = "#800080";
		window.localStorage.setItem('divBackColor','#800080');
	}
	img[2].onclick = function(){
		console.log("2");
		div.style.backgroundColor = "red";
		window.localStorage.setItem('divBackColor','red');
	}
	img[3].onclick = function(){
		console.log("3");
		div.style.backgroundColor = "#00FFFF";
		window.localStorage.setItem('divBackColor','#00FFFF');
	}
	img[4].onclick = function(){
		console.log("4");
		div.style.backgroundColor = "#FF6600";
		window.localStorage.setItem('divBackColor','#FF6600');
	}
	img[5].onclick = function(){
		console.log("5");
		div.style.backgroundColor = "#00FF00";
		window.localStorage.setItem('divBackColor','#00FF00');
	}
	div.style.backgroundColor = window.localStorage.getItem('divBackColor');
	
};
