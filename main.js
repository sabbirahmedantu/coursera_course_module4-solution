
const names = ["Yaakov", "John", "paul", "Harry", "Laura", "Frank", "Paula", "Jeson", "Jen", "Jim"];

// Loop through the array
for (let i = 0; i < names.length; i++) {
    // Get the current name
    const name = names[i];

    // Check if the name starts with 'j' or 'J'
    if (name.charAt(0).toLowerCase() === 'j') {
        // Print "Goodbye" for names starting with 'j' or 'J'
        console.log(`Goodbye, ${name}`);
    } else {
        // Print "Hello" for names starting with any other letter
        console.log(`Hello, ${name}`);
    }
}
