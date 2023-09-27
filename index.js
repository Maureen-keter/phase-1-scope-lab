// Write your solution in this file!
var customerName="bob";

// Define a function to set and uppercase customerName
function upperCaseCustomerName() {
  // Access the global customerName variable and uppercase it
  if (customerName) {
    customerName = customerName.toUpperCase();
  }
}
function setBestCustomer(){
    bestCustomer="not bob";
}
function overwriteBestCustomer(){
    bestCustomer="maybe bob"
}
const leastFavoriteCustomer="bob";
function changeLeastFavoriteCustomer(){
    leastFavoriteCustomer="neal"
}
console.log(changeLeastFavoriteCustomer);