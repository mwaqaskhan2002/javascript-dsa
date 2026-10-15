/*
02  Balanced Brackets
Concept: Stack
Problem Statement
Determine whether a string containing only (), {}, and [] is properly balanced.

Input
"{[()]}"

Expected Output
true
*/



function isValid(s) {
    const stack = [];
    
    for (let i = 0; i < s.length; i++) {
        const element = s[i];

        // 1. Opening bracket dekha -> Stack (box) mein push kar do
        if (element === "(" || element === "{" || element === "[") {
            stack.push(element);
        } 
        
        // 2. Closing bracket dekha -> Check karo aur match karo
        else if (element === ")" || element === "}" || element === "]") {
            // Check A: Kya box pehle se khali hai? (Agar haan, toh invalid hai)
            if (stack.length === 0) {
                return false;
            }

            // Check B: Box ke top wale element ko nikal kar save karo
            const top = stack.pop();

            // Check C: Kya pair theek nahi baithta?
            if (element === ")" && top !== "(") return false;
            if (element === "}" && top !== "{") return false;
            if (element === "]" && top !== "[") return false;
        }
    }

    // 3. Final Check: Loop ke baad kya box bilkul khali hai?
    if (stack.length === 0) {
        return true;
    } else {
        return false;
    }
}

// --- Test Cases ---
console.log(isValid("{[()]}")); // Output: true  (Fully balanced)
console.log(isValid("([)]"));   // Output: false (Cross-matched / invalid order)
console.log(isValid("(){}["));  // Output: false (Unclosed bracket left in stack)



/*
1. Opening Bracket ((, {, [):

    Fooran stack mein push(element) kar do.

2. Closing Bracket (), }, ]):

    Check 1: Kya stack khali hai (stack.length === 0)? Agar haan $\rightarrow$ false.

    Check 2: Stack se bahar nikalo (const top = stack.pop()).

    Check 3: Kya pair match nahi karta? (Jaise ) ke sath ( nahi hai). Agar mismatch hai $\rightarrow$ false.

2. Loop Khatam Hone Ke Baad (Final Check):

    Kya stack bilkul khali hai (stack.length === 0)?

    Agar haan $\rightarrow$ true
    Agar andar kuch bacha hai $\rightarrow$ false
*/ 