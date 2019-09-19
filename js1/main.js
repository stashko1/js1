console.log('Homework №1');
var myNum = 10;
var myStr = "строка";
var myBool = true;
var myArr = [1,2,3,4,5];
var myObj = {
    first: "First Name",
    last: "Last Name"
};
console.log(myNum);
console.log(myStr);
console.log(myBool);
console.log(myArr);
console.log(myObj);


var decimal2 = myNum.toFixed(2);


var i = 1;
i++;
++i;
i--;
--i;


var myTest = 20;
myTest += myNum;
myTest -= myNum;
myTest *= myNum;
myTest /= myNum;
myTest %= myNum;


var myPi = Math.PI;
var myRound = Math.round(89.279);
var myRandom = Math.random()*10;
var myPow = Math.pow(3,5);

var strObj = {str: 'Мама мыла раму, рама мыла маму'};
strObj.length = strObj.str.length;
console.log('strObj = ', strObj);
var isRamaPos = strObj.str.indexOf("рама");
console.log(isRamaPos);

var strReplace = strObj.str.replace('мыла', 'моет');
strReplace = strReplace.replace('рама', 'Рама');
strReplace = strReplace.replace('мыла', 'держит');
console.log(strReplace);

console.log(strReplace.toUpperCase());
console.log(strReplace.toLowerCase());
