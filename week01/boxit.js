
const args = process.argv.slice(2);
let input = args;
console.log(input);
let outputStr = ""; // might not need this one

function drawLine (num) {
    let output = '';
  for (let i = 0; i<num; i++)
    {output += "━"};
    return output;
}

function drawTopBorder (num) {
let output="┏";
for (let i=1; i<(num+1); i++) {
    output+="━";
}
output += "┓";
return output;
};


function drawMiddleBorder(num){
    let output="┣";
      if (typeof(num)==="number"){
          for (let i=0; i<num; i++) {
        output+="━";}// end of loop

      } else {
      for (let i=1; i<(num.length+1); i++) {
        output+="━";} // end of loop
      }
    output += "┫";
    return output;
};

function drawBottomBorder (num) {
    let output="┗";
    for (let i=1; i<(num+1); i++) {
        output+="━";
    }
    output += "┛";
    return output;
    };

function drawBarsAround (str) {
    let output="┃";
    output+=str;
    output += "┃";
    return output;
    };    
    
function longestValLength (arr) { //will return .length of the longest value in array
    let retVal = 0;
  for (i=0; i<arr.length; i++) {
      if (retVal < arr[i].length) {
          console.log(arr[i].length);
          retVal = arr[i].length;
      } else {

      }
    return retVal;
  }
}

function boxIt(str) {
    let output = "";
    let longestKey = longestValLength(str); //this variable whil be used for border lengths
    if (str.length === 1) { // case if there is only one value in array
        output += (drawTopBorder(longestKey) + "\n" + drawBarsAround(str)) + "\n" + drawBottomBorder(str[0].length);

    } else if (str.length === 0) { // case if there is no input
        output += ('┏┓\n┗┛');

    } else if (str.length > 1) { // case when there is more than one value in array
        output += (drawTopBorder(longestKey) + "\n");
        for (i=0; i<str.length; i++) {

            output += (drawBarsAround(str[i]) + "\n"); 
            
            if (i<(str.length-1)) {
                output += (drawMiddleBorder(longestKey) + "\n");
            } else {}
        
        }
        output += (drawBottomBorder(longestKey));

    } else {
        console.log("There is an error")}; // this means that input.length < 0 and shouldn't ever happen

    output += "\n";
    return output;
};

console.log(boxIt(input));




// console.log("sdfwf", "\n", 'wef')

//console.log(boxIt(input));



// boxIt Function
// Write a boxIt function that takes an array of strings and returns a string where each is in a single column table. To add "new lines" to a string, use the \n special character. In a string, \n characters will display as new lines when logged with console.log(...).

// Try using the functions you've built previously (e.g. drawBottomBorder, drawBottomBorder, etc) to help you implement this function.

// Example usage:

// boxIt(['Jon Snow', 'Cersei Lannister'])
// // returns...
// // '┏━━━━━━━━━━━━━━━━┓\n┃Jon Snow        ┃\n┣━━━━━━━━━━━━━━━━┫\n┃Cersei Lannister┃\n┗━━━━━━━━━━━━━━━━┛'

// // When logged, the '\n' appear as new lines...
// console.log(boxIt(['Jon Snow', 'Cersei Lannister']))

// ┏━━━━━━━━━━━━━━━━┓
// ┃Jon Snow        ┃
// ┣━━━━━━━━━━━━━━━━┫
// ┃Cersei Lannister┃
// ┗━━━━━━━━━━━━━━━━┛

// boxIt(['Jon Snow']) // returns '┏━━━━━━━━┓\n┃Jon Snow┃\n┗━━━━━━━━┛'




