window.onload = function(){
  var board = document.getElementById("board");
  var squares = board.childNodes;

  squares.forEach(item =>{
    item.className = "square";
    item.addEventListener("click", event=>{
      if(item.innerHTML =="" || item.innerHTML=="O"){
        item.innerHTML = "X";
        item.classList.remove("square.O");
        item.classList.add("square.X");
      } else if(item.innerHTML == "X"){
        item.innerHTML = "O";
        item.classList.remove("square.X");
        item.classList.add("square.O");
      }
    })
  })
};
