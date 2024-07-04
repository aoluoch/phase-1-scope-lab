// Write your solution in this file!
var customerName = 'bob';

// Function to uppercase the global customerName variable
function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

// Function to declare a global variable bestCustomer and assign it 'not bob'
function setBestCustomer() {
  window.bestCustomer = 'not bob';
}


function overwriteBestCustomer() {
  bestCustomer = 'maybe bob';
}

// Declare a constant in global scope and assign it an initial value
const leastFavoriteCustomer = 'alice';


