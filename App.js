let par = document.getElementById("par");
let row = ["a","b","c","d","e","f","g","h"];
function allowDrop(ev) {
    ev.preventDefault();
  }
  

  function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
  }
  

  function drop(ev) {

    ev.preventDefault();
    let oldid = ev.dataTransfer.getData("text");
    let newid = ev.target.id;
    let oldelement = document.getElementById(oldid);
    let newelement = document.getElementById(newid);
    let mohreh = oldelement.innerHTML;
    let posold = oldid.split("");
    let posnew = newid.split("");
    let check = true;
    let xold = row.indexOf(posold[0]);
    let xnew = row.indexOf(posnew[0]);

    // checked exist pieces and have moving
    if(oldid !== newid && mohreh !==""){

      // Recognize pieces

      //Dark pieces
      switch(mohreh){
        //rook
        case "♜":
          par.innerHTML = "Rook";
          // checked move rook
          if (posold[0] == posnew[0] || posold[1] == posnew[1]){
            check = true;
          }else
          {
            check = false;
          }
          break;
          //Knight
        case ("♞"):
          par.innerHTML = "Knight";
          if ( (Math.abs(xnew-xold) ==1 && Math.abs(posold[1]-posnew[1]) ==2) || (Math.abs(xnew-xold) ==2 && Math.abs(posold[1]-posnew[1]) ==1)){
            check = true;
          }else
          {
            check = false;
          }
          break;

          //bishop
        case ("♝"):
          par.innerHTML = "Bishop";
          if (Math.abs(xnew-xold) !== Math.abs(posold[1]-posnew[1])){
            check = false;
          }else{
            check = true;
          }
          break;

          //queen
        case ("♛"):
          par.innerHTML = "Queen";
          if ((Math.abs(xnew-xold) == Math.abs(posold[1]-posnew[1])) || (posold[0] == posnew[0] || posold[1] == posnew[1])){
            check = true;
          }else{
            check = false;
          }
          break;

          //king
        case ("♚"):
          par.innerHTML = "King";
          if (Math.abs(xnew-xold) <2 && Math.abs(posold[1]-posnew[1])<2){
            check = true;
          }else{
            check = false;
          }
          break;

          //solider
        case "♟":
          par.innerHTML = "Solider";
          console.log(posold);
          if (+posold[1] === 7){
            if (xold === xnew && Math.abs(posold[1]-posnew[1])<3){
              check = true;
            }else{
              check = false;
            }
          }else if(xold == xnew && Math.abs(posold[1]-posnew[1])<2){
            check = true;

          }else{
            check = false;
          }
          break;
      }
      
      //white pieces
      switch(mohreh){
        //rook
        case "♖":
          par.innerHTML = "Rook";
          if (posold[0] == posnew[0] || posold[1] == posnew[1]){
            check = true;
          }else
          {
            check = false;
          }
          break;

          //Knight
        case ("♘"):
          par.innerHTML = "Knight";
          if ( (Math.abs(xnew-xold) ==1 && Math.abs(posold[1]-posnew[1]) ==2) || (Math.abs(xnew-xold) ==2 && Math.abs(posold[1]-posnew[1]) ==1)){
            check = true;
          }else
          {
            check = false;
          }
          break;

          //bishop
        case ("♗"):
          par.innerHTML = "Bishop";
          if (Math.abs(xnew-xold) !== Math.abs(posold[1]-posnew[1])){
            check = false;
          }else{
            check = true;
          }
          break;

          //Queen
        case ("♕"):
          par.innerHTML = "Queen";
          if ((Math.abs(xnew-xold) == Math.abs(posold[1]-posnew[1])) || (posold[0] == posnew[0] || posold[1] == posnew[1])){
            check = true;
          }else{
            check = false;
          }
          break;

          //King
        case ("♔"):
          par.innerHTML = "King";
          if (Math.abs(xnew-xold) <2 && Math.abs(posold[1]-posnew[1])<2){
            check = true;
          }else{
            check = false;
          }
          break;

          //Solider
        case "♟":
          par.innerHTML = "Solider";
          if (+posold[1] === 7){
            if (xold === xnew && Math.abs(posold[1]-posnew[1])<3){
              check = true;
            }else{
              check = false;
            }
          }else if(xold == xnew && Math.abs(posold[1]-posnew[1])<2){
            check = true;

          }else{
            check = false;
          }
          break;
      }


      if (check){
      newelement.innerHTML = oldelement.innerHTML;
      oldelement.innerHTML = ""; 
      }
    }

  }
