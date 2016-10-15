//Jason Brown 620080066

window.onload = function(){ //load elements when the page/window loads

  //get all boundaries
	var start = document.getElementById("start");
  var end = document.getElementById("end");
	var b1 = document.getElementById("boundary1");
	var b = document.querySelectorAll(".boundary");//array of elements
  var hit = false;

  start.addEventListener("mouseover", beginMaze);//begin when over S

	function mouseOver()
  {
    //handler for mouseOver boundary
    hit = true; //boundary has been touched
		b1.className = "youlose boundary"; //change the classes
		for (var i = 0; i<b.length-1; i++)
    {
			b[i].className = "youlose boundary";
		}
	};

  function beginMaze()
  {
		start.addEventListener("click", restart);
		b1.addEventListener("mouseover", mouseOver);

		for (var j = 0; j < b.length-1; j++){
			b[j].addEventListener("mouseover", mouseOver);
		}
		end.addEventListener("mouseover", endMaze);//end the maze when mouse hits E
	};

  function restart()
  {
    //reloads by clicking s
		location.reload();
	};

	function endMaze()
  {
			if (hit)//hit a wall?
      {
				document.getElementById("status").innerHTML = "You lose!";
			}
      else
      {
				document.getElementById("status").innerHTML = "You win!";
			}
	};

};
