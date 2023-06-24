///////////////////
// Apple Orchard //
///////////////////

/*
    The data below has been collected over the 
    last week at an apple orchard. You will be 
    using your coding skills to gain insights 
    into its daily operations.

    Below are three arrays each containing 7
    numbers. You will use them and the price
    variables to complete the problems in 
    this file.

    The indexes of the arrays correspond with a 
    day of the week. The associated number value 
    represents the number of acres that were picked 
    that day.

    The first array is named fujiAcres. Notice 
    that the first item in this array is 2, 
    meaning that 2 acres of Fuji apples were 
    picked on Monday of this week.

    The prices are per pound and are written
    in cents. 
*/

const fujiAcres = [2, 3, 3, 2, 2, 2, 1]
const galaAcres = [5, 2, 4, 3, 6, 2, 4]
const pinkAcres = [1, 5, 4, 2, 1, 5, 4]

const fujiPrice = .89 
const galaPrice = .64
const pinkPrice = .55



// PROBLEM 1

/*
    Using for loop, calculate the total number
    of acres picked for the entire week.

    Save the number to a variable called 
    `totalAcres`.

    Log `totalAcres` to the console.
*/

// CODE HERE
// Set a variable for total acres equal to zero so I could add each acres picked for each variety each day to a single variable.
// Also created a for loop to iterate through each individual index for each array, so starting at 0 and incrementing by 1 to a max of 6 which is the last day of the week.
let totalAcres = 0
for (let i = 0;i < 7; i++){
    totalAcres += fujiAcres[i]
    totalAcres += galaAcres[i]
    totalAcres += pinkAcres[i]
}
// I logged the total acres picked for the week
console.log(`The total acres picked for the week: ${totalAcres}`)



// PROBLEM 2

/*
    Using `totalAcres`, calculate the average 
    number of acres picked per day. 

    Save the answer to a variable called 
    `averageDailyAcres`. 

    Log `averageDailyAcres` to the console.
*/

// CODE HERE

// I created a variable called average daily acres and took the total acres and divided it by 7 which represents the number of days within a week to get the average acres picked per day and i logged it.
let averageDailyAcres = totalAcres/7
console.log(`The average number of acres picked per day: ${averageDailyAcres}`)




// PROBLEM 3

/*
    We have provided 2 variables below. 
    
    The `acresLeft` variable is the number 
    of acres that still have apples left. 
    
    The `days` variable represents how 
    many more days of work are left. It's 
    initialized at 0 because we're going 
    to be using it as a counter.
    
    Write a while loop that will continue to run
    while `acresLeft` is above 0. 
    
    On each iteration of the loop:
    - add 1 to the `days` variable
    - subtract your daily average from the number of acres left

    Outside the loop, log `days` to the console.

    Note: This is not the most efficient way to
    calculate this number. But! It is a great
    way to get a whole number without using 
    any Math methods. 

*/

let acresLeft = 174 
let days = 0

// CODE HERE


// I created a while loop so we can simulate each day, subtracting the average daily acres from the acres left until it is empty or zero.
// I also incremented the days by utilizing the variable and adding 1.
while(acresLeft > 0){
    acresLeft -= averageDailyAcres
    days += 1
}

// I lastly logged the days, which would represent the number of days it took to deplete the acres left.
console.log(`Total days taken to pick acres left: ${days}`)

// PROBLEM 4

/*
    Your next task is to create 3 arrays
    that list the daily amount of apples 
    picked, in tons, for each variety. 
    
    Each acre yields 6.5 tons of apples.

    Use the variables below to store 
    your new arrays. Make sure that you
    don't modify the original arrays 
    on lines 36 - 38.

    Log each of your arrays to the console.

    Hint: you can use the slice method 
    to make copies of the arrays and 
    then loop the copies. You could also
    make empty arrays, loop the old ones
    and use the push method to add new 
    values to the new arrays.
*/

// CODE HERE
// I created three empty arrays representing each variety's tons picked per day.
let fujiTons = []
let galaTons = []
let pinkTons = []
// I created a for loop to iterate through each array within the variety's acres and multiplying each element by 6.5 to calculate the tons picked each day.
// I then pushed the Tons for the day to the corresponding array that represents the variety.
for (let i = 0; i < 7; i++){
    fujiTons.push(6.5*fujiAcres[i])
    galaTons.push(6.5*galaAcres[i])
    pinkTons.push(6.5*pinkAcres[i])
}
// Lastly I logged each variety's array of Tons picked per day of the week.
console.log(`Fuji Tons: ${fujiTons}`)
console.log(`Gala Tons: ${galaTons}`)
console.log(`Pink Tons: ${pinkTons}`)




// PROBLEM 5

/*
    Next, calculate the total number of 
    pounds picked per variety.

    You'll need to add up the tons per
    each variety and convert the number 
    into pounds -- store that number in
    the variables given below. 

    Log each of the values to the console.

    Hint: there are 2000 pounds in a ton.
*/

// CODE HERE 
// I created variables for each variety that represents the total pounds.
let fujiPounds = 0;
let galaPounds = 0;
let pinkPounds = 0;
// I created variables for each variety representing the total tons picked for the week.
let fujiTotalTons = 0;
let galaTotalTons = 0;
let pinkTotalTons = 0;


// I created a for loop to iterate through each variety's array to get the sum of the tons picked within the week.
for (let i = 0; i < 7; i++){
    fujiTotalTons += fujiTons[i]
    galaTotalTons += galaTons[i]
    pinkTotalTons += pinkTons[i]
}


// I then multiplied the total tons picked for each variety by 2000 to convert tons into pounds
fujiPounds = fujiTotalTons * 2000
galaPounds = galaTotalTons * 2000
pinkPounds = pinkTotalTons * 2000


// I then logged each variety's total pounds picked for the week.
console.log(`Total Fuji Pounds: ${fujiPounds}`)
console.log(`Total Gala Pounds: ${galaPounds}`)
console.log(`Total Pink Pounds: ${pinkPounds}`)




// PROBLEM 6

/*
    Now that you know the total pounds
    per variety, use the prices given 
    at the beginning of this file to 
    figure out how much you'll make 
    from selling each type of apple. 

    The prices are per pound and are 
    written in cents. 

    Log each of the profits to the 
    console. 
*/

// CODE HERE
// I multiplied each variety's total pounds picked for the week by the price per pound to get the total profit for the week.
let fujiProfit = fujiPounds * fujiPrice
let galaProfit = galaPounds * galaPrice
let pinkProfit = pinkPounds * pinkPrice



// I logged the total profit in dollars.
console.log(`Fuji profit this week: $${fujiProfit}`)
console.log(`Gala profit this week: $${galaProfit}`)
console.log(`Pink profit this week: $${pinkProfit}`)





// PROBLEM 7

/*
    Add up all your profits and save 
    the number to a variable called 
    `totalProfit`.

    Log `totalProfit` to the console.
*/

// CODE HERE
// I added each individual variety's total profit to calculate the total profit within the week for all apples picked
let totalProfit = fujiProfit + galaProfit + pinkProfit


// I logged the total profit in dollars.
console.log(`Total profit for all varieties: $${totalProfit}`)