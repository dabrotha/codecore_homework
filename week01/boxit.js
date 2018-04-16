
const args = process.argv.slice(2);
let input = args;

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

function addSpacesToOutput (num, str) { //this function is meant to add spaces to output of boxIt in case value is less than longestValLength. It has to be implemented to drawBarsAround
    let output = "";
    let difference = (num-str.length);
    for (i = 0; i<difference; i++) {
        output += " ";
    }
    return output;
}

function drawBarsAround (num, str) {
    let output="┃";
    output+=str;
    if (str.length<num) {
        output+=addSpacesToOutput(num, str);
    } else {

    };
    output += "┃";
    return output;
    };    
    
function longestValLength (arr) { //will return .length of the longest value in array
    let retVal = 0;
  for (i=0; i<arr.length; i++) {
      if (retVal < arr[i].length) {
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
        output += (drawTopBorder(longestKey) + "\n" + drawBarsAround(str.length, str)) + "\n" + drawBottomBorder(str[0].length);

    } else if (str.length === 0) { // case if there is no input
        output += ('┏┓\n┗┛');

    } else if (str.length > 1) { // case when there is more than one value in array
        output += (drawTopBorder(longestKey) + "\n");
        for (i=0; i<str.length+1; i++) { // I had to use str.length+1 because >=str.length returned a value that is undefined

            output += (drawBarsAround(longestKey, str[i]) + "\n"); 
            
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





