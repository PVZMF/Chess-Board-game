function allowDrop(ev) {
    ev.preventDefault();
  }
  
  function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
  }
  
  function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
  }


  // class Mohreh {
  //   constructor(color, x, y) {
  //     this._color = color;
  //     this.x = x;
  //     this.y = y;
  //   }
  //   move(x, y) {
  //     this.x = x;
  //     this.y = y;
  //   }
  //   set x(value) {
  //     if (value > "h" || value < "a") {
  //       throw new Error("the value of x is invalid");
  //     }
  //     this._x = value;
  //   }
  //   set y(value) {
  //     if (value > 8 || value < 1) {
  //       throw new Error("the value of y is invalid");
  //     }
  //     this._y = value;
  //   }
  //   get color() {
  //     return this._color;
  //   }
  //   get location() {
  //     return { x: this._x, y: this._y };
  //   }
  // }
  
  // class Soldier extends Mohreh {
  //   constructor(color, x, y) {
  //     super(color, x, y);
  //     this._name = "Soldier";
  //   }
  //   get name() {
  //     return this._name;
  //   }
  //   set name(value) {
  //     throw new Error("you can't change the name");
  //   }
  //   move(x, y) {
  //     if (x !== this._x || y !== this._y + 1) {
  //       throw new Error("you can't move here");
  //     }
  //     super.move(x, y);
  //   }
  // }
  
  