

class Turtle {
    constructor (x, y) {
        this.x = x;
        this.y = y;
        this.startingX = this.x; //this will become an ending x; we store it because x will be mutated through moveLog
        this.startingY = this.y;
        this.direction = 1;
        this.map = []; // will be recording moves in here map[a][b]: a = y coordinate; b = x
        this.moveLog = [];
        this.finalString= ''; //this is the final output
    }

buildMap(x, y) { //symbol returns a symbol as an empty spot of map
    let output = [];
    for (let i = 0; i<=y; i++) {
        output[i] = [];
        for (let j = 0; j<=x; j++) {
            output[i][j] = "·";
        }
    }
    this.map = output;
    return this;
};

allPoints() { // this method writes trajectory into already created this.map (by buildMap within printMap)
    console.log(this.moveLog);
    const drawStar = () => {return "*" }
        //a a1 goes for x1, x2 displacement . dir for direction

    for (let i = 0; i<this.moveLog.length; i++) {
        if (this.moveLog[i][1] === 2) {

            for (let j=0; j<this.moveLog[i][0]; j++){ // j is number of steps turtle makes
                this.map[this.startingY][this.startingX] = drawStar();
                this.startingY+=1;
            }

        } else if (this.moveLog[i][1] === 4) {

            for (let j=0; j<this.moveLog[i][0]; j++){ // j is number of steps turtle makes
                console.log('j dir4 loop is here')
                this.map[this.startingY][this.startingX] = drawStar();
                this.startingY-=1;
            }
        } else if (this.moveLog[i][1] === 1) {

            for (let j=0; j<this.moveLog[i][0]; j++){ // j is number of steps turtle makes
                this.map[this.startingY][this.startingX] = drawStar();
                this.startingX+=1;
            }
        } else if (this.moveLog[i][1] === 3) {

            for (let j=0; j<this.moveLog[i][0]; j++){ // j is number of steps turtle makes
                this.map[this.startingY][this.startingX] = drawStar();
                this.startingX-=1;
            }
        } else {}

        for (let j=0; j<this.moveLog[i][0]; j++) { //in this.moveLog[i][0] we hold how many steps turtle is making
         
            
            // this.map[this.startingX]=drawStar();
            // this.startingX += 1;
            
            // if (this.startingX<0) {
            //     this.x = 0;
            //     console.log("Ooops. The turtle has bumped into a barrier. X cannot be less than 0. Further movement in this direction was not possible")
            // };
    
            // if (this.startingX<0) {
            //     this.startingX = 0;
            //     console.log("Ooops. The turtle has bumped into a barrier. X cannot be less than 0. Further movement in this direction was not possible")
            // };

        }// end of j loop
    } //end of this.moveLog.length
} 

printMap () {
    let largestX = 0;
    let largestY = 0;
    for (let i=0; i<this.moveLog.length; i++) {
        console.log(i + " i iteration sin printMap")

        if (largestX<this.moveLog[i][2]) { //this loop will give max values to buildMap(x,y) will use max value of x or y that turtle will ever make but in positive direction
            largestX = this.moveLog[i][2];
            console.log(largestX + "largestX in work")
        } else {}
        
        if (largestX<this.startingX) { // with walking in direction 3 we must make sure that largestX will === to largest value. without this conditional we will be losing values
            largestX = this.startingX;
            console.log(largestX + "largestX in work")
        } else {}

        if (this.moveLog[i][3]>largestY) {
            largestY = this.moveLog[i][3];
        }   else {}

        if (largestY<this.startingY) { // with walking in direction 3 we must make sure that largestXY will === to largest value. without this conditional we will be losing values
            largestY = this.startingY;
            console.log(largestX + "largestX in work")
        } else {}
    }
    console.log(largestX + "this is largestX")
    this.buildMap(largestX+2, largestY+2); //we assign value to this.map within .buildMap
    let output = '';
    // here we need to use a method to overwrite empty map spaces with turtle's trajectory
    this.allPoints();

    this.map[this.startingY][this.startingX] = "T"; // this will show our turtle

    for (let i = 0; i<this.map.length; i++) { //creates final string output 
        let toStr = this.map[i].join('');
        output += (toStr + "\n");
        // console.log("output inside loop" + output + "output inside loop") 
    }

    this.finalString=output;
    console.log(this.finalString)
    return this
}

    movement(n) { // the way this method works is it assigns a direction responsive to quadrant:
        //     // 1 is right, 2 is down, 3 is left, 4 is up; if num ever is outside of boundaries it refreshes from opposite side:
        //     // 0 becomes 4 and 5 becomes 1 
        
        if (this.direction === 1) {

            this.x += n;
        } else if (this.direction===2) {

            this.y += n;
        } else if (this.direction===3){

            this.x -= n;
        } else if (this.direction===4) {

            this.y -= n;
        } else {console.log("movement function doesnt work. x =" + this.x + " y =" + this.y + " n = " + n)}

        if (this.x<0) {
            this.x = 0;
            console.log("Ooops. The turtle has bumped into a barrier. X cannot be less than 0. Please turn the turtle and move in a different direction")
        };

        if (this.y<0) {
            this.y = 0;
            console.log("Ooops. The turtle has bumped into a barrier. Y cannot be less than 0. Please turn the turtle and move in a different direction")
        }
        this.moveLog.push([n, this.direction, this.x, this.y]) //this line pushes the movement log as a new instance into array moveLog

        return this;
    }
    right(){
        this.direction += 1;
        if (this.direction === 0) {
            this.direction = 4
        } else if (this.direction === 5) {
            this.direction = 1
        } else {}
        return this
    }
    left(){
        this.direction -= 1;
        if (this.direction === 0) {
            this.direction = 4
        } else if (this.direction === 5) {
            this.direction = 1
        } else {}
        return this
    }
}

let tortoise = new Turtle(12, 7);
// tortoise.right().movement(8).printMap(); //- check direction 2
// tortoise.right().movement(3).right().movement(2).right().movement(6).right().movement(6).left().movement(3).left().movement(5).left().movement(2).left().movement(6).printMap(); //- check direction 4

// console.log(tortoise.movement(9));

// let direction = 1;
// function changeVector(num) { // the way this function works is it assigns a direction responsive to quadrant:
//     // 1 is right, 2 is up, 3 is left, 4 is down; if num ever is outside of boundaries it refreshes from opposite side:
//     // 0 becomes 4 and 5 becomes 1 
//     if (num === 1) { // 1 is turn left
//         vector ++;
//     } else { // 0 is turn right
//         vector--;
//     }
//     if (direction === 5) {
//         direction = 1;
//     } else if (direction === 0) {
//         direction = 4;
//     } else {}
// }

// For example:

// // This turtle begins at position (0, 0) on our fictional 5 by 5 grid, then
// // moves forward 3 steps positioning itself at (3, 0) indicated by the `*`
// // on the grid. You should record these 2 positions.

// new Turtle(0, 0).forward(3);

// // Figure of turtle's movement on a grid.
// // LEGEND
// // • – Starting Location
// // * – End Location
// // 
// //  0 1 2 3 4
// // 0•-----*─┼
// // 1┼─┼─┼─┼─┼
// // 2┼─┼─┼─┼─┼
// // 3┼─┼─┼─┼─┼
// // 4┼─┼─┼─┼─┼
// Turning The Turtle
// Create a right method that takes zero arguments. When right is called, update the Turtle instance to rotate its facing to the right. A turtle should begin facing east.



// For example:

// // This turtle begins at position (0, 0), then moves forward 3 steps to (3, 0), 
// // then turns right (facing south), then moves 2 steps to (3, 2).

// new Turtle(0, 0).forward(3).right().forward(2);

// // Figure of turtle's movement on a grid.
// // LEGEND
// // • – Starting or in-between locations
// // * – End locations
// // 
// //  0 1 2 3 4
// // 0•-----•─┼
// // 1┼─┼─┼─|─┼
// // 2┼─┼─┼─*─┼
// // 3┼─┼─┼─┼─┼
// // 4┼─┼─┼─┼─┼
// Create a left method like right but turns the turtle's facing to the left.

// For example:

// // This turtle begins at position (0, 4), then moves forward 3 steps to (3, 4), 
// // then turns right (facing north), then moves 3 steps to (3, 1).

// new Turtle(0, 4).forward(3).left().forward(3);

// // Figure of turtle's movement on a grid.
// // LEGEND
// // • – Starting or in-between locations
// // * – End locations
// // 
// //  0 1 2 3 4
// // 0┼─┼─┼─┼─┼
// // 1┼─┼─┼─*─┼
// // 2┼─┼─┼─|─┼
// // 3┼─┼─┼─|─┼
// // 4•-----•─┼
// All Points
// Create an allPoints method which returns an array containing all coordinates the turtle has walked over.

// For example:

// const flash = new Turtle(0, 0).forward(3).left().forward(3);

// // Figure of turtle's movement on a grid.
// // LEGEND
// // • – Starting or in-between locations
// // * – End locations
// //
// //  0 1 2 3 4
// // 0┼─┼─┼─┼─┼
// // 1┼─┼─┼─*─┼
// // 2┼─┼─┼─|─┼
// // 3┼─┼─┼─|─┼
// // 4•-----•─┼
// //
// // Flash, the turtle, has walked around the grid quite bit. She's touched at 
// // least 7 coordinates.
// //
// // Looking at the grid above, she walked over (0, 4), (1, 4), (2, 4) and (3, 4).
// // After turning left, she walked over (3, 3), (3, 2) and (3, 1). That's 7 
// // coordinates. Using the method allPoints on flash should return all these
// // coordinates in an array in the order she walked over them.

// flash.allPoints()

// // returns [ [0, 4], [1, 4], [2, 4], [3, 4], [3, 3], [3, 2], [3, 1] ]
// Print
// Create a print method that draws the path that the turtle walked over as a string and logs it to the console. You should use the array of coordinates returned by .allPoints() as your starting point.

// Example usage:

// const flash = new Turtle(0, 0).forward(3).left().forward(3);
// flash.print();

// // -- BEGIN LOG
// //    •
// //    •
// // ••••
// // -- END LOG
// When implementing print, feel free to choose any character you prefer to represent the turtles path instead of # and feel free to choose another one for the background instead of _.

// Here is another example with alternate characters:

// new Turtle(0, 4)
//   .forward(3)
//   .left()
//   .forward(3)
//   .right()
//   .forward(5)
//   .right()
//   .forward(8)
//   .right()
//   .forward(5)
//   .right()
//   .forward(3)
//   .left()
//   .forward(4)
//   .print();

// // -- BEGIN LOG
// // □□□□□□□□□□
// // □□□■■■■■■□
// // □□□■□□□□■□
// // □□□■□□□□■□
// // ■■■■□□□□■□
// // □□□□□□□□■□
// // ■■■■□□□□■□
// // □□□■□□□□■□
// // □□□■□□□□■□
// // □□□■■■■■■□
// // -- END LOG
// */
// Stretch
// As A Script
// Make the turtle graphics program usable as a script. It should take a string as a an argument that is seperated by dashes (i.e. -). This string will contain all turtle commands in abbreviated form:

// tX,Y for new Turtle where X & Y are numbers representing the starting x & y coordinates. If this command is not given, begin the turtle at (0, 0).
// fN for forward where N is a number representing how many units the turtle moves forward.
// r for right
// l for left
// Example usage:

// $ node turtle.js t5,5-f10-r-f5-r-f10-r-f5-r-f2-r-f5-l-f2-l-f5





//      •••••••••••
//      • • •     •
//      • • •     •
//      • • •     •
//      • • •     •
//      •••••••••••
// $ node turtle.js f10-r-r-f10-l-f5-l-f10-r-f5-r-f11
// •••••••••••
// •
// •
// •
// •
// •••••••••••
//           •
//           •
//           •
//           •
// •••••••••••
// Save To a File
// Have your script accept an option --output=<filename> where <filename> corresponds to the name of a file. If the option is used, write the turtle drawing to the file using fs.writeFile. Notify the user of that the write was completed.

// Example usage:

// $ node --output=drawing.txt f10-r-f10-r-f10-r-f10
// 🐢 Drawing written to drawing.txt

