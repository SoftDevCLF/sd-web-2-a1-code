"use strict";

// sample data - expanded Star Wars characters with varied ages
const users = [
  { id: 1, name: "Luke Skywalker", age: 23 },
  { id: 2, name: "Darth Vader", age: 45 },
  { id: 3, name: "Princess Leia", age: 23 },
  { id: 4, name: "Obi-Wan Kenobi", age: 57 },
  { id: 5, name: "Yoda", age: 900 },
  { id: 6, name: "Han Solo", age: 32 },
  { id: 7, name: "Chewbacca", age: 234 },
  { id: 8, name: "R2-D2", age: 33 },
  { id: 9, name: "C-3PO", age: 112 },
  { id: 10, name: "Padmé Amidala", age: 27 },
];

const characters = [
  { id: 1, name: "Frodo Baggins", age: 50 },
  { id: 2, age: 38 },
  { id: 3, name: "Gandalf", age: 2019 },
  { id: 4, name: "Aragorn", age: 87 },
  { id: 5, age: 2931 },
  { id: 6, name: "Gimli", age: 139 },
  { id: 7, name: "Boromir", age: 41 },
];

// broken test data for exercise 6

// 1. Print out the names of each character in the console, then render them in the HTML list with id "names-list"
const namesList = document.getElementById("names-list")
//callbackFn
const createUserName = (user) => {
  console.log(user.name);
  return `<li>${user.name}</li>`;
};

//Render in HTML
namesList.innerHTML = users.map(createUserName).join("");

/*
*References: 
*https://github.com/ashx3s/js-refresh-b
*https://www.geeksforgeeks.org/javascript/how-to-creating-html-list-from-javascript-array
*https://www.w3schools.com/js/js_array_iteration.asp#mark_map
*https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
*/


// 2. Print out the names of characters whose age is less than 40 in the console, then render them in the HTML list with id "young-characters-list"

// Store a reference to the list in a variable
let youngCharactersList = document.getElementById("young-characters-list");

console.log("Names of characters whose age is less than 40:");

//Callback Function for filter
const checkAge = user => user.age < 40;

//Filter list and then mapping user =>
const lessThanFortyNames= users.filter(checkAge).map(createUserName).join("");

youngCharactersList.innerHTML = lessThanFortyNames;

/*
*References:
*https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
*https://www.w3schools.com/jsref/jsref_filter.asp
*/

// 3. Create a reusable function that takes any array and uses logic to render a list of character names in the HTML. Use this function to populate the list with id "function-list"

/**
 * Function that takes any array and uses logic to render a list of character names in the HTML
 * @param {*} array 
 * @returns  list of names
 */
function renderNamesList(array){
  const itemWithNoNameList = array.filter(user => !user.name);
  const itemWithNameList = array.filter(user => user.name);

  if (itemWithNoNameList.length > 0){
    itemWithNoNameList.map((user)=> {
      const renderError = document.getElementById("broken-array-errors");
      let message = ` <p>Error: The object with id ${user.id} is missing the name property. </p>`;
      renderError.innerHTML += message;
    });
  }

  const userName = user => `<li>${user.name}</li>`;
  return itemWithNameList.map(userName).join(""); 
  
};
  

//Render in HTML
const characterNamesList = document.getElementById("function-list");

characterNamesList.innerHTML = renderNamesList(users);

characterNamesList.innerHTML += renderNamesList(characters);

/*
*References:
*https://www.geeksforgeeks.org/javascript/how-to-add-html-elements-dynamically-using-javascript/#approach-1-using-innerhtml
*/

// 4. Create a function that takes an array and an age threshold parameter. The function should only display characters whose age is below the given number. Render results in the list with id "age-filter-list"


/**
 * Function that display characters whose age is below the given number
 * @param {*} array 
 * @param {*} age 
 * @returns  list of filtered names
 */

function ageFilter(array, age){
  const itemWithNoName = array.filter(user => !user.name);
  if (itemWithNoName.length > 0){
    itemWithNoName.map((user)=> {
      const renderError = document.getElementById("broken-array-errors");
      let message = ` <p>Error: The object with id ${user.id} with age ${user.age} is missing the name property. </p>`;
      renderError.innerHTML += message;
    });
  }
  const filterAgeAndNameValidation = array.filter(user => age > user.age && user.name);
  if (filterAgeAndNameValidation.length === 0){
    return "<li>No characters found below the specified age.</li>";
  }
  return filterAgeAndNameValidation.map(user => `<li>${user.name}</li>`).join("");
  
};

//Render in html

const renderAgeFilteredList = document.getElementById("age-filter-list");

renderAgeFilteredList.innerHTML = ageFilter(users,25);
renderAgeFilteredList.innerHTML = ageFilter(characters,25);

/*
*References:
*https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else
*https://www.w3schools.com/js/js_if_else.asp
*/


// 5. Add error handling to your functions that will log an error message using console.error() if any object doesn't have a "name" property. Display any error messages in the div with id "error-messages"

// 6. Test your error handling by creating a second array that's intentionally broken (missing name properties) and passing it to your functions. Verify that your error handling works correctly and displays errors in the div with id "broken-array-errors"


