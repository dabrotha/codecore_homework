// Moving The Turtle
// Create a forward method that takes a number of steps then updates the Turtle instance with its new position 
//after moving that many steps. Keep track of every movement the turtle makes including the first one.



// const turtle = {
//     name: "Tortoise",
//     xPosition: 0,
//     yPosition: 0,
//     movement: function(n) {

//     }
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

// function buildMap(x, y, symbol) { //symbol returns a symbol as an empty spot of map
//     let output = [];
//     for (let i = 0; i<x; i++) {
//         output[i] = [];
//         for (let j = 0; j<y; j++) {
//             output[i][j] = symbol;
//         }
//     }
//     return output;
// };

// let map = buildMap(5, 5, "·");
// console.log(map);











// Drawing Turtle Graphics Style
// In this homework, you will create a simple drawing program inspired by Turtle Graphics. It will be a much simpler implementation that will only accept right angles (90 degrees).

// Here's an example of what your program should be able to do by the end:

// new Turtle(0, 0)
//   .forward(5)
//   .right()
//   .forward(5)
//   .right()
//   .forward(5)
//   .right()
//   .forward(5)
//   .print()
// The above would log the following to the screen:

// ••••••
// •    •
// •    •
// •    •
// •    •
// ••••••
// The above drew a 5 by 5 square.

// Breaking It Down
// Before beginning, you should read all instructions.

// The Turtle
// To begin drawing, your program needs to know where it should begin. Create a Turtle class whose constructor will take two arguments (in order): x & y coordinates.


// Here are some examples:

// // This turtle begins at position (0, 0) on our fictional 5 by 5 grid.

// new Turtle(0, 0);

// // This is an illustration that is part of the explanation.
// // Your program should not draw it.
// //
// //  0 1 2 3 4
// // 0•─┼─┼─┼─┼
// // 1┼─┼─┼─┼─┼
// // 2┼─┼─┼─┼─┼
// // 3┼─┼─┼─┼─┼
// // 4┼─┼─┼─┼─┼

// // This turtle begins at position (2, 3) on our fictional 5 by 5 grid.

// new Turtle(2, 3);

// //  0 1 2 3 4
// // 0┼─┼─┼─┼─┼
// // 1┼─┼─┼─┼─┼
// // 2┼─┼─┼─┼─┼
// // 3┼─┼─•─┼─┼
// // 4┼─┼─┼─┼─┼

// Moving The Turtle
// Create a forward method that takes a number of steps then updates the Turtle instance with its new position after moving that many steps. Keep track of every movement the turtle makes including the first one.

class Turtle {
    constructor (x, y) {
        this.x = x;
        this.y = y;
        this.direction = 1;
    }

    movement(n) { // the way this method works is it assigns a direction responsive to quadrant:
        //     // 1 is right, 2 is down, 3 is left, 4 is up; if num ever is outside of boundaries it refreshes from opposite side:
        //     // 0 becomes 4 and 5 becomes 1 


        if (n === 1) {
            x += n
        } else if (n===2) {
            y += n;
        } else if (n===3) {
            x -= n
        } else {
            y -= n;
        }
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