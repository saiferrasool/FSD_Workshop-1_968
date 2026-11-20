
// SYNCHRONOUS PROGRAMMING
console.log("Synchronous Start");

console.log("Task 1");

console.log("Task 2");

console.log("Synchronous End");


// ASYNCHRONOUS PROGRAMMING
console.log("Asynchronous Start");

setTimeout(() => {
    console.log("Task 1 after 2 seconds");
}, 2000);

console.log("Task 2");

console.log("Asynchronous End");
