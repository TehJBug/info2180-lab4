window.onload = function(){ //load elements when the page/window loads

	var start = document.getElementById("start");

  var hit = false;

	function mouseOver(){ //handler for mouseOver boundary
		boundary1.className = "boundary youlose"; //change the classes
		for (var i = 0; i<boundary.length-1; i++)
    {
			boundary[i].className = "boundary youlose"; //attach this class name to the current class name
		}

	};

};
