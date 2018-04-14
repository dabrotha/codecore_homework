
const args = process.argv.slice(2);
let input = args;

let outputStr = "";




function drawLine (num) {
    let output = '';
  for (let i = 0; i<num; i++)
    {output += "━"};
    return output;
}



function drawTopBorder (num) {
let output="┏";
for (let i=1; i<(num-1); i++) {
    output+="━";
}
output += "┓";
return output;
};


function drawMiddleBorder(num){
    let output="┣";
      for (let i=1; i<(num-1); i++) {
        output+="━";
      }
    output += "┫";
    return output;
};

console.log(drawMiddleBorder(input));






// drawTopBorder, drawMiddleBorder and drawBottomBorder Functions
// Write three functions: drawTopBorder, drawMiddleBorder and drawBottomBorder. Each function should take a number, return a line of length including corner pieces. You can make use of drawLine to implement these functions.

// Example usage:

// drawTopBorder(4) // returns '┏━━━━┓'
// drawTopBorder(0) // returns '┏┓'

// drawMiddleBorder(8) // returns '┣━━━━━━━━━┫'
// drawMiddleBorder(0) // returns '┣┫'

// drawBottomBorder(2) // returns '┗━━┛'
// You will need special characters to "draw" the box. You can find them listed in this Wikipedia article. To use them, you can copy & paste them where needed.