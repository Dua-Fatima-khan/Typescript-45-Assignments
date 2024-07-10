// Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.
// Function to store information about a car in an object
function car_info(manufacturer, model) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    var car = {
        manufacturer: manufacturer,
        model: model
    };
    // Adding optional key-value pairs to the car object
    options.forEach(function (option) {
        var key = Object.keys(option)[0];
        car[key] = option[key];
    });
    return car;
}
// Calling the function with required and optional information
var my_car = car_info("Toyota", "Camry", { color: "Silver" }, { year: 2023 });
// Printing the returned object to verify information
console.log(my_car);
