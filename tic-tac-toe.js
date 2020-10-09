window.onload = function(){
  var board = document.getElementById("board");
  var squares = Array.from((board.getElementsByTagName("div")));
  var status = document.getElementById("status");

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
    })

    item.addEventListener("mouseout", event=>{
      // item.classList.remove("hover.O");
      item.classList.remove("hover");
    })
  })


  setInterval(function(){
    if(squares[2].innerHTML == "X" && squares[4].innerHTML ==
    "X" && squares[6].innerHTML == "X"){
      status.innerHTML = "Congratulations!XistheWinner!";
      status.classList.add("you-won");
      window.set
    } else if(squares[2].innerHTML == "O" && squares[4].innerHTML ==
    "O" && squares[6].innerHTML == "O"){
      status.innerHTML = "Congratulations!OistheWinner!";
      status.classList.add("you-won");
    } else if(squares[0].innerHTML == "X" && squares[4].innerHTML ==
    "X" && squares[8].innerHTML == "X"){
      status.innerHTML = "Congratulations!XistheWinner!";
      status.classList.add("you-won");
    } else if(squares[0].innerHTML == "O" && squares[4].innerHTML ==
    "O" && squares[8].innerHTML == "O"){
      status.innerHTML = "Congratulations!OistheWinner!";
      status.classList.add("you-won");
    }

    for(var i=0;i<squares.length;i++){
      try{
        if(squares[i].innerHTML == "X" && squares[i+1].innerHTML ==
        "X" && squares[i+2].innerHTML == "X"){
          status.innerHTML = "Congratulations!XistheWinner!";
          status.classList.add("you-won");
          break;
        } else if(squares[i].innerHTML == "O" && squares[i+1].innerHTML ==
        "O" && squares[i+2].innerHTML == "O"){
          status.innerHTML = "Congratulations!OistheWinner!";
          status.classList.add("you-won");
          break;
        } else if(squares[i].innerHTML == "X" && squares[i+3].innerHTML ==
        "X" && squares[i+6].innerHTML == "X"){
          status.innerHTML = "Congratulations!XistheWinner!";
          status.classList.add("you-won");
          break;
        } else if(squares[i].innerHTML == "O" && squares[i+3].innerHTML ==
        "O" && squares[i+6].innerHTML == "O"){
          status.innerHTML = "Congratulations!OistheWinner!";
          status.classList.add("you-won");
          break;
        }
      }
      catch(err){
        console.log("Out of range");
      }
    }
  }, 1000);


};
