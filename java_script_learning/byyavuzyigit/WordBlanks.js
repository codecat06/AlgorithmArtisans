function wordBlanks(noun, adjective, verb, adverb){
    var result = "";
    result += "The " + adjective + " " + noun + " " + verb + " to the store " + adverb + ".";
    return result;
}
var str = wordBlanks("dog", "big", "ran", "quickly");
console.log(str);
console.log(wordBlanks("bike", "slow", "flew", "slowly"));
