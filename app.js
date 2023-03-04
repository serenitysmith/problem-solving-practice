function maxNum(array) {
    var num = array[0];
    for (var i = 1; i < array.length; i++) {
        if (array[i] > num) num = array[i];
    }
    return num;
}
// console.log(maxNum([80, 90, 12, 100, 28]));


// function character(array) {
//    const chara = array ["max", "med", "amy", "h", "^heart", "^bitch"];{
//     const splitArray = chara.split("");} {
//         for(i = 0; i < array.length; i++ ){
//             if(array[i] === "^"){
//                array.push("^") 
//                return splitArray;
//             }
//         }
//     }
//   console.log(splitArray)
//    }

// var words = ["dog", "cat", " @mike", " @serenity"]

// var character = words.filter(string => string.words === "@")
// console.log(character)

// var keyWords = [ "dog", "@cat", "@mouse"];
// var sentence = [" its me the dog @cat @mouse"];
// const matched = [];
// for (var index = 0; index < sentence.length; index++){
//     for (var outerIndex = 0; outerIndex < keyWords.length; outerIndex++){
//         if (sentence[index].includes(keyWords[outerIndex])){
//             matched.push(keyWords[outerIndex]);
// }
//     }
// }

// console.log("the matched keywords are==");
// console.log(matched);


function matched(array) {
    const newArray =[]
    for (var i = 0; i < array.length; i++) {
        if (array[i][0] === "@") {
           newArray.push(array [i])
        }
     
    }

return newArray
}


// console.log(matched(["cat", "dog", "parrot", "@serenity", "@mike"]))




function divisable(num1, num2) {
    if ((num1 % num2) === 0) {
        return true;

    } else return false;

};
// console.log(divisable)


// var num = 6
// if(num === "6"){
//     console.log("yay")
// }
// else{
//     console.log("oh no")
// }
function division(num1, num2 ){
    return num1 % num2 === 0;
}
console.log(division(8,2))