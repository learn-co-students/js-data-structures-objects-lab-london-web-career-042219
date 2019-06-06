// Write your solution in this file!

let driver = {}

function updateDriverWithKeyAndValue(obj, key, value) {
    const newDriver = {...obj};

    newDriver[key] = value;

    return newDriver;
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
    driver[key] = value;

    return driver
}

function deleteFromDriverByKey(driver, key) {
    const newDriver = {...driver};

    delete newDriver[key]

    return newDriver;
}

function destructivelyDeleteFromDriverByKey(driver, key) {
    delete driver[key]
    return driver
}

