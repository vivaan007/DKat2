const fetch = require("node-fetch");

const compareTool = async () => {
  var fs = require("fs");
  var text1 = fs.readFileSync("./file1.txt");
  var textByLine1 = text1.toString().split("\n")
  var text2 = fs.readFileSync("./file2.txt");
  var textByLine2 = text2.toString().split("\n")

  for (var i = 0; i < textByLine1.length; ++i) {
    var response1 = await fetch(textByLine1[i]);
    var myJson1 = await response1.json();
    var response2 = await fetch(textByLine2[i]);
    var myJson2 = await response2.json();
    if (JSON.stringify(myJson1) == JSON.stringify(myJson2)) {
      console.log(` ${textByLine1[i]} is equal to ${textByLine2[i]}`)
    } else {
      console.log(` ${textByLine1[i]} is not equal to ${textByLine2[i]}`)
    }
  }
}

compareTool()