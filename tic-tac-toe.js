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
        item.style.color = "lightBlue";
      } else if(item.innerHTML == "X"){
        item.innerHTML = "O";
        item.classList.remove("square.X");
        item.classList.add("square.O");
        item.style.color = "coral";
      }
    })

    item.addEventListener("mouseover", event=>{
      item.style.cursor = "pointer";
      item.classList.add("hover");
      // if(item.innerHTML == "" || item.innerHTML=="X"){
      //   item.classList.remove("hover.O");
      //   item.classList.add("hover");
      // } else if(item.innerHTML == "O"){
      //   item.classList.remove("hover");
      //   item.classList.add("hover.O");
      // }
    })

    item.addEventListener("mouseout", event=>{
      // item.classList.remove("hover.O");
      item.classList.remove("hover");
    })
  })
};
