function trueOrFalse(wasThatTrue){
    if(wasThatTrue){
        return "Yes, that was true.";
    }
    return "No, that was not true.";
}
console.log(trueOrFalse(true));
console.log(trueOrFalse(false));

function checkEqual(val){
    if(val == 10){
        return true;
    }
    return false;
}
console.log(checkEqual(10));
console.log(checkEqual('10')); // returns true due to the type conversion

// 3 == '3' returns true because of the type conversion
// 3 === '3' returns false because it does not do a type conversion
function newCheckEqual(val){
    if(val === 10){
        return true;
    }
    return false;
}
console.log(newCheckEqual(10));
console.log(newCheckEqual('10')); // returns false

// != and !== works just like == and ===

function testSize(val){
    if(val < 5)
        return "tiny";
    else if(val < 10)
        return "small";
    else if(val < 15)
        return "medium";
    else if(val < 20)
        return "large";
    else
        return "huge";
}
console.log(testSize(20));

// golf score function
var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes){
    if(strokes === 1)
        return names[0];
    else if(strokes <= par-2)
        return names[1];
    else if(strokes === par-1)
        return names[2];
    else if(strokes === par)
        return names[3];
    else if(strokes === par+1)
        return names[4];
    else if(strokes === par+2)
        return names[5];
    else
        return names[6];
}
console.log(golfScore(5, 8));

// switch statements
function caseInSwitch(val){
    var answer = "";
    switch(val){
        case 1:
            answer = "alpha";
            break;
        case 2:
            answer = "beta";
            break;
        case 3:
            answer = "gamma";
            break;
        case 4:
            answer = "delta";
            break;
        default:
            answer = "default";
            break;
    }
    return answer;
}
console.log(caseInSwitch(5));

function sequentialCases(val){
    var answer = "";
    switch(val){
        case 1:
        case 2:
        case 3:
            answer = "low";
            break;
        case 4:
        case 5:
        case 6:
            answer = "mid";
            break;
        case 7:
        case 8:
        case 9:
            answer = "high";
            break;
    }
    return answer;
}
console.log(sequentialCases(9));

// counting cards function
var count = 0;

function cc(card){
    switch(card){
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            count++;
            break;
        case 10:
        case "J":
        case "Q":
        case "K":
        case "A":
            count--;
            break;
    }

    var holdbet = "Hold";
    if(count > 0){
        holdbet = "Bet";
    }

    return count + " " + holdbet;
}

cc(2); cc("K"); cc(10); cc("K"); cc("A");
console.log(cc(4));
