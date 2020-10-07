// import the data from data.js
const tableData = data;

// Reference the HTML table using d3
// With this code: Declare a variable, tbody
// Use d3.select to tell JavaScript to look for the <tbody> tags 
// in the HTML
var tbody = d3.select("tbody");

// function example 
// Takes two numbers and adds them
function addition(a, b) {
    return a + b;
  }
// say you want 4, 5 as values.
// you'd do: console.log(addition(4,5));
// or: addition(4,5); 

// If the code and output in your console is cluttered, type clear() + press Enter 

// arrow functions: =>
// printHello = () => "Hello there!";
// to call: printHello(); 
// will return: "Hello there!"

// convert to an arrow function
addition = (a,b) => a+b;
addition(4,4);
// would return 8.

// Syntax for arrow functions.
// name of function = (parameters) => argument ;


//11.5.1

function buildTable(data)   {
    // First, clear out any existing data
    tbody.html("");
    // Next, loop through each object in the data
    // and append a row and cells for each value in the row
    data.forEach((dataRow) => {
        // Append a row to the table body
        let row = tbody.append("tr");

        // Loop through each field in the dataRow and add
        // each value as a table cell (td)
        Object.values(dataRow).forEach((val) => {
            let cell = row.append("td");
            cell.text(val);
      }
    );
  });
}

// Object.values(dataRow).forEach((val) => {
//     let cell = row.append("td");
//     cell.text(val);
// });
