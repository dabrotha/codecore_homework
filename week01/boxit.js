
const args = process.argv.slice(2);
let input = args;
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
      for (let i=1; i<(num+1); i++) {
        output+="━";
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

function maxLength (arr) { //finding a string with max length in array
    output = 0;
    for (i=0; i<arr.length; i++){
        if (arr[i].length>output) {
            output = arr[i].length;
        } else {}
    }
    return output;
}

const space = " ";

function howManyLetters (str) { //this function will calculate amount of spaces needed to add to a string.
    //added for simplicity
    return str.length;
}

function pushSpaces (num) { //will create spaces to push
    output='';
    output+=" ".repeat(num);
    return output;
 }

function boxIt(str) {
    let output = "";
    let maxKeyLength = maxLength(str);
    if (str.length === 1) { // case if there is only one value in array
        output += (drawTopBorder(str[0].length) + "\n" + drawBarsAround(str)) + "\n" + drawBottomBorder(str[0].length);

    } else if (str.length === 0) { // case if there is no input
        output += ('┏┓\n┗┛');

    } else if (str.length > 1) {

        output += (drawTopBorder(maxKeyLength) + "\n");
        let spaces = "" ; //this variable stores spaces to add
        for (i=0; i<str.length; i++) {
            let diff = (maxKeyLength-str[i].length);// this line will identify how many spaces to add to string

            
            if (diff > 0) {
                spaces = ' '.repeat(diff);
            } else {spaces=""}; //empty
            output += (drawBarsAround(str[i] + spaces) + ("\n"));
            if (i<(str.length-1)) {
              output +=  (drawMiddleBorder(maxKeyLength) + "\n");
            } else {};


        
        }
        output += (drawBottomBorder(maxKeyLength));

    } else {
        console.log("There is an error")}; // this shouldn't ever happen

    // output += "\n";
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




