// Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.

// Function to store information about a car in an object
function car_info(manufacturer: string, model: string, ...options: { [key: string]: any }[]): { manufacturer: string, model: string, [key: string]: any } {
    let car = {
      manufacturer: manufacturer,
      model: model
    };
  
    // Adding optional key-value pairs to the car object
    options.forEach(option => {
      let key = Object.keys(option)[0];
      car[key] = option[key];
    });
  
    return car;
  }
  
  // Calling the function with required and optional information
  const my_car = car_info("Toyota", "Camry", { color: "Silver" }, { year: 2023 });
  
  // Printing the returned object to verify information
  console.log(my_car);
  