window.onload = function(){

  /* Variable Declaration */

  var board = document.getElementById("board");
  var squares = Array.from((board.getElementsByTagName("div")));
  var status = document.getElementById("status");
  var button = document.getElementsByClassName("btn")[0];
  /* Sets up the squares and add's events per click or hover */

  squares.forEach(item =>{
    item.className = "square";

    item.addEventListener("click", event=>{
        if(item.classList.contains("selected")){
          return;
        } else{
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
            item.classList.add("selected");
          }
        }

    })

    item.addEventListener("mouseover", event=>{
      item.style.cursor = "pointer";
      item.classList.add("hover");
    })

    item.addEventListener("mouseout", event=>{
      item.classList.remove("hover");
    })

  })

  /* Reset Game ----- New Game*/

  button.addEventListener("click", event=>{
    status.classList.remove("you-won");
    status.innerHTML = "Move your mouse over a square and click to play an X or an O."
    squares.forEach(item =>{
      item.classList.remove("selected");
      item.innerHTML = "";
    })
  })

  /* Continues to call the parameter(function) for 1000s*/

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
        if((squares[i].innerHTML == "X" && squares[i+1].innerHTML ==
        "X" && squares[i+2].innerHTML == "X")&&(i==0 || i==3 || i==6)){
          status.innerHTML = "Congratulations!XistheWinner!";
          status.classList.add("you-won");
          break;
        } else if((squares[i].innerHTML == "O" && squares[i+1].innerHTML ==
        "O" && squares[i+2].innerHTML == "O") && (i==0 || i==3 || i==6)){
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

    /**/

    // setInterval(function(){
    //     for(var i=0;i<squares.length;i++){
    //       if(sqaures[i].innerHTML == ""){
    //
    //       } else if(squares[i].innerHTML=="X"){
    //
    //       } else if(squares[i].innerHTML=="O"){
    //
    //       }
    //     }
    // }, 1000);

};
