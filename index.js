// Write your solution in this file!
let driver = {}
function updateDriverWithKeyAndValue(driver, key, value) {
//The function should not mutate the driver parameter and should return a new driver that has an updated value for the key passed in.
//update the value for the key passed in
return Object.assign({}, driver, {[key]: value} );
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  //same as above
  //but should mutate the driver parameter passed in
  driver[key] = value
  return driver
}

function deleteFromDriverByKey(driver, key, value){
  //should delete the key/value pair for the key that was passed in from the driver Object
  //This should not actually mutate the driver passed in.
  //const newObj = Object.assign({}, obj); --> can have it's contents deleted without affecting obj
  const newObj = Object.assign({}, driver);

  delete newObj[key]
  return newObj
}

function destructivelyDeleteFromDriverByKey(driver, key) {
  // should mutate the driver passed in
  // consider whether dot-notation or bracket-notation might affect your solution.
  delete driver[key]
  return driver
}

// function destructivelyUpdateObject (obj, key, value) {
//   obj[key] = value;
 
//   return obj;
// }
