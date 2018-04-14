
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

function drawBottomBorder (num) {
    let output="┗";
    for (let i=1; i<(num-1); i++) {
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


console.log(drawBarsAround(input));






