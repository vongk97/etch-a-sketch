const container=document.querySelector('#container'); // reference the div with container id
const gridBtn = document.getElementById('gridBtn');

function makeGrid() {
  var x = prompt("Choose a size n (max 64) for an n x n matrix:");
  while (x>64) x = prompt ("Invalid! Try again. Choose a size n (max 64) for an n x n matrix:");
  clearGrid();
  var s = (100 / x);
  for (var i=0; i < (x*x); i++){
    const box=document.createElement('div');
    box.className="square";
    box.style.width= s + "%";
    box.style.height= s + "%";
    box.addEventListener("mouseover", function(){
      box.style.backgroundColor= "#" + Math.floor(Math.random()*16777215).toString(16);
    });
    container.appendChild(box);
  }
}

function clearGrid() { //delete all grid contents
  container.innerHTML="";
}



/*
const sketchbox=document.querySelector('#sketchbox');
const row =document.createElement('div');
row.className="row";
makeGrid(5);

function makeGrid(number) {
   sketchbox.style.gridTemplateColumns = `repeat(${number}, 1fr)`;
  for (var i=0; i<5; i++) {
    const box=document.createElement('div');
    box.className="box";
    row.appendChild(box);
  }
  sketchbox.appendChild(row);
  document.getElementsByClassName('box').style.width = "200px";

}
*/

/*
X make fixed space size
  make a function that:

    makes multiple boxes
    divides the space into relative even boxes
    the size of each box is 100 / size
    ex. 100 / 5 = 20% of the container for each box
    ex. 100 / 10 = 10% of the container
*/

/*
reference:
http://jsfiddle.net/97knzxwL/
*/
