                    // (1) reversed Number
                    
                    
// function reverseNum (num){
//  var num;
//  var num1 =  String(num).split("").reverse().join("");
//  console.log(num1); 
// }
// reverseNum(123);


//                    (2) palindrome function


// function palindrome(word){
//     var word1 = word;
//     var word2 = word.split("").reverse().join("")
//     if (word === word2){
//         console.log("your word  "+ word + "   is plindrome word");
//     }else{
//         console.log("your word  "+ word + "   is not plindrome word");
//     }
    
//  }
// palindrome("salman");


//                     (3) gnerates combinations of srting



// function combinationString(word){
//     var word1 = word;
//     var word2 = word1
//     for(i = 0; i < word2.length; i++){
//         for(j = i; j < word2.length + 1; j++){
//             console.log(word2.slice(i,j));
//         }
//     }
// }
// combinationString("salman")
 
//                    (4) return string in alphabetical order


// function sortStr(words){
//     var word1 = words;
//     var words2 = words.split("");
//     var words3 = words2.sort();
//     var word4 = words3.join("");
//     console.log(word4);
// }
// sortStr("salman");


//                    (5) capital first character


// function capChar(sentence){
//     var sentence1 = sentence.split(" ")
//     for (i=0; i < sentence1.length; i++) {
//         var a = sentence1[i];
//         var firstChar = a.slice(0, 1);
//         var otherChars = a.slice(1);
//         firstChar = firstChar.toUpperCase();
//         otherChars = otherChars.toLowerCase();
//         var cappedChar = firstChar + otherChars;
//         console.log(cappedChar)
//     }
// }
// capChar("salman shamsi is a good boy")



//                   (6) find the longest word

// function findLongest(word){
//    var checkWord = word;
//    checkWord = checkWord.split(" ");
//    var longestWord = checkWord[0];
//    for(var i = 0; i < checkWord.legth; i++){
//     if(checkWord[i].length > longestWord.length){
//         longestWord = checkWord[i]
//     }
//    }
//    console.log(longestWord)
// }
// findLongest("im a good boy in my  town");

                            // (7) vowel checker

// function vowelChecker(para){
//     var check = para;
//     check = check.toLowerCase()
//     var vowelCount = 0;
//     for(var i = 0; i < check.length; i++){
//         if(check[i] === "a" || check[i] === "e" || check[i] === "i" || check[i] === "o" || check[i] === "u"){
//             vowelCount++
//         }
//     }

//     console.log("you have " + vowelCount + " vowels in your code")
// }
// vowelChecker("I am a good");


//                       (9) return type of data

// function dataType(data){

//    var data = typeof(data);
//    var data1 = console.log(data);
//    return data1;
// }
// dataType(222);


//                       (10)find 2nd lowest and highest number


// function findSecondHLNumber(num){

//     var num = num.split(",").map(Number);
//     var num2 = num.sort();
//     console.log(num2[num.length -2]);
//     console.log(num2[2]);
// }

// findSecondHLNumber("21,22,12,123,")