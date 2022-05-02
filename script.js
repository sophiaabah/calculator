var output = document.getElementById("result")

function clearScreen() {
 output.value = "";
 myArr.length = 0;
}

function clearChar() {
    var str = output.value;
    output.value = str.substring(0, str.length - 1);
    

}

function display(value) {
 output.value += value;
}

const myArr = [];


function calculate() { 
 var p = output.value;
 var q = eval(p);
 output.value = q;
 myArr.push(p);
 myArr.reverse();
 console.log(myArr)

}

function history() {
 for (var i = 0; i < myArr.length; i++){
  output.value = myArr[i];
  console.log(myArr[i]);
   }
}




