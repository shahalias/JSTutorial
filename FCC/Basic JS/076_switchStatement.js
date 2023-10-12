// Selecting from Many Options with Switch Statements

// If you need to match one value against many options, you can use a switch statement. A switch statement compares the value to the case statements which define various possible values. Any valid JavaScript statements can be executed inside a case block and will run from the first matched case value until a break is encountered.

function caseInSwitch(val) {
    let answer = "";
    // Only change code below this line
    switch (val) {
        case 1:
            answer = 'alpha';
            break;
        case 2:
            answer = 'beta';
            break;    
        case 3:
            answer = 'gamma';
            break;
        default:
            answer = 'delta';
            break;
    }
  
  
    // Only change code above this line
    return answer;
  }
  
  caseInSwitch(1);