function stringBasics(){
    console.log("My Dream Company is");
}
var hobby1= "Dancing"
var hobby2= "Painting"
var hobby3= "Playing Badminton"
console.log("My Hobbies are", hobby1, hobby2, hobby3);
console.log("Total Number of Chars Available", hobby1.length+hobby2.length+hobby3.length);

console.log("---------------Strings Hands on-----------")

var stringGiven = "   Hey You are doing good, Keep it up   "
function stringHandsOn() {
    
}
console.log(stringGiven);
var lengthOfGivenString= stringGiven.length
console.log("The Length of given String is", lengthOfGivenString);
 var lengthAfterTrim= stringGiven.trim(" ")
 console.log("The length of given string after trimming extra space is", lengthAfterTrim.length);
 console.log("Total number of extra trimmed spaces", lengthOfGivenString-lengthAfterTrim.length );
 var splitWOrds = lengthAfterTrim.split(" ")
 console.log("Total number of words available", splitWOrds);
 var index = stringGiven.indexOf("good")
 console.log("The Index of given word good is", index);
 var subString = stringGiven.slice(22, stringGiven.length)
 console.log("The substring of given string is", subString);






