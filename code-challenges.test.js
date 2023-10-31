// ASSESSMENT 3: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Prompt: Create a function that takes in a number (greater than 2) and returns an array containing the Fibonacci sequence. The length of the array is determined by the argument of the function.

// a) Create a test with expect statements for each of the variables provided.

describe("fibonacciSeq", () => {
  it("takes in a number (greater than 2) and returns an array containing the Fibonacci sequence", () => {
    const fibonacciLength1 = 6
    // Expected output: [1, 1, 2, 3, 5, 8]
    const fibonacciLength2 = 10
    // Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
    expect(fibonacciSeq(fibonacciLength1)).toEqual([1, 1, 2, 3, 5, 8])
    expect(fibonacciSeq(fibonacciLength2)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55])
  })
})

// Output: ReferenceError: fibonacciSeq is not defined

// b) Create the function that makes the test pass.

// Pseudo code:
const fibonacciSeq = (number) => {
  // Initialize the first two Fibonacci numbers
  FibPair = [1, 1]  
  const FibPair = [1,1]
  // Start from the third number (index 2)
  for (let i = 2; i < number ; i++){
    // Calculate the next Fibonacci number
    FibPair[i] = FibPair[i - 1] + FibPair[i - 2]
  } // Return the array of Fibonacci numbers
    return FibPair
  }
console.log(fibonacciSeq)


// --------------------2) For the following prompt, use ChatGPT or an equivalent AI tool to help you solve the problem. The prompt will require the use of a JavaScript method called Object.values()
// Prompt: Create a function that takes in an object and returns an array of the object's values sorted from least to greatest.

// a) Create a test with expect statements for each of the variables provided.

describe("sortObjectValues", () => {
  it("takes in an object and returns an array of the object's values sorted from least to greatest.", () => {
    const studyMinutesWeek1 = {
      sunday: 90,
      monday: 30,
      tuesday: 20,
      wednesday: 15,
      thursday: 30,
      friday: 15,
      saturday: 60
    }
    // Expected output: [15, 15, 20, 30, 30, 60, 90]
    const studyMinutesWeek2 = {
      sunday: 100,
      monday: 10,
      tuesday: 45,
      wednesday: 60,
      thursday: 20,
      friday: 15,
      saturday: 65
    }
    // Expected output: [10, 15, 20, 45, 60, 65, 100]
  expect(sortObjectValues(studyMinutesWeek1)).toEqual([15, 15, 20, 30, 30, 60, 90])
  expect(sortObjectValues(studyMinutesWeek2)).toEqual([10, 15, 20, 45, 60, 65, 100])
})
})
// output:   ReferenceError: values is not defined

// Pseudo code:
// b) Create the function that makes the test pass.
const sortObjectValues = (obj) => {
  // values = GET values from obj
  const values = Object.values(obj)
  // SORT values IN ASCENDING ORDER
  values.sort((a, b) => a - b)
  // RETURN values
  return values
} 


