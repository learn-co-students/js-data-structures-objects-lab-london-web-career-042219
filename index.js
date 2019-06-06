// Write your solution in this file!
const driver = {
    name: "Bob",
};

function updateDriverWithKeyandValue(obj, key, value) {
    const newObj = { ...obj };

    newObj[key] = value;

    return newObj;

  };

  function destructivelyUpdateDriverWithKeyAndValue(obj,key,value) {
    obj[key] = value;
    return obj;
  };

  function destructivelyDeleteFromDriverByKey(obj, key){
    delete obj[key]
    return obj

  };








