const driver = {}

// The function should not mutate the driver parameter and should return a new driver that has an updated value for the key passed in.
function updateDriverWithKeyAndValue(object, key, value) {
  const newObj = { ...object};
  newObj[key] = value;
  return newObj;
}

// it should mutate the driver parameter passed in.
function destructivelyUpdateDriverWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object;
}

// It should delete the key/value pair for the key that was passed in from the driver Object. This should all not actually mutate the driver passed in.
function deleteFromDriverByKey(object, key) {
  const newObj = Object.assign({}, object);
  delete newObj[key];
  return newObj
}


// should mutate the driver passed in. Be sure and consider whether dot-notation or bracket-notation might affect your solution.
function destructivelyDeleteFromDriverByKey(object, key) {
  delete object[key];
  return object
}
