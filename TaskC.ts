// 100 Days Of Coding Challenge!

/**Question 12:
Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them.
The text of each message should be the same, but each message should be personalized with the person’s name. */

//---------------------------------------------------------------------------------------------------------------------------------

// Names of friends in an array
const friendsName: string[] = ["Salman", "Taha", "Mustafa", "Noman"];

// Print a greeting message for each name
for (let name of friendsName) {
  console.log(`Hello ${name}, would you like to learn some TypeScript today?`);
}
