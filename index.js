// Define a driver variable and assign it to an Object
const driver = {}

// Does not mutate the driver and should return a new driver that has an updated value for the key passed in
function updateDriverWithKeyAndValue(driver, key, value) {
  return Object.assign({}, driver, {[key]: value})
}

// Same as the previous function, but mutates the driver
function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  driver[key] = value
  return driver;
}

// Deletes 'key' from a clone of driver and returns the new driver (non-destructive)
function deleteFromDriverByKey(driver, key, value){
  let newDriver = {}
  newDriver = Object.assign({}, driver, {[key]: value})
  newDriver[key] = value
  return newDriver;
}


// Mutates the original driver and returns it without the key/value pair
function destructivelyDeleteFromDriverByKey(driver, key, value) {
  delete driver[key]
  return driver
}

