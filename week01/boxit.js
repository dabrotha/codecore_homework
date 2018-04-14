
const args = process.argv.slice(2);
let input = args;

let outputStr = "";




function drawLine (num) {
    let output = '';
  for (let i = 0; i<num; i++)
    {output += "-";}
    return output;
}

console.log(drawLine(input));
