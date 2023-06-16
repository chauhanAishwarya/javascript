 var greet = "Good Morning"
 var greetLength = greet.length
 console.log("Total no. of characters in given string is" ,greetLength);

 var replace = greet.replace("Morning" , "Afternoon")
 console.log("After replace", replace);

 var find = greet.indexOf("o")
 console.log("Give the index of o :-", find);//incase of multiple position of same char it will always return first char index
   // to find last index of "o" write greet.lastIndexOf(o)


var charAtZeroIndex= greet.charAt(greet.length-1)// We can perform multiple operations over here
console.log(charAtZeroIndex);

 var realN = "  Gajanan  "
 var realN2 = realN.length
 console.log("Total no. of characters in given string is", realN2); 
 var trimFirstName = realN.trim()
 var totalTrimmedSpace = trimFirstName.length
 console.log("Total no. of trimmed spaces are", trimFirstName-totalTrimmedSpace);

 //console.log("The Total no. of trimmed spcaes are", realN2-TrimFirstName );
 console.log("The result after trim is", trimFirstName);

 var firstName = "Aishwarya"
 var lastName = " Pardeshi"
 var conString = firstName.concat(lastName)
 console.log(conString);// iska result = AishwaryaPardeshi hai agar dono k beech space chaheye toh Surname me space daal as shown
   

var empty = greet.charAt(100)
console.log("The total no. of char are",  empty);