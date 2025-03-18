// Import the function sum from the app.js file
const { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound} = require('./app.js');

// Start your first test
test('adds 14 + 9 to equal 23', () => {
    // Inside the test we call our sum function with 2 numbers
    let total = sum(14, 9);

    // We expect the sum of those 2 numbers to be 23
    expect(total).toBe(23);
});

test("1 euro should be 1.2 dollars", ()=>{
    expect(fromEuroToDollar(1)).toBe(1.2);
});
test("1 dollar should be 110 yen", ()=>{
    expect(fromDollarToYen(1)).toBe(110);
});
test("1000 yens should be 6.9 pounds", ()=>{
    expect(fromYenToPound(1000)).toBe(6.8999999999999995);
});