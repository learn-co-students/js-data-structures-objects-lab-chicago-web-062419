// Write your solution in this file!
const driver = {};

const updateDriverWithKeyAndValue = (driver, key, value) => {
    const newdriver = {...driver};
    newdriver[key] = value;
    return newdriver;
}

const destructivelyUpdateDriverWithKeyAndValue = (driver, key, value) => {
    return Object.assign(driver, {[key]: value});
}

const deleteFromDriverByKey = (driver, key) => {
    const newdriver = Object.assign({}, driver);
    delete newdriver[key];
    return newdriver;
}

const destructivelyDeleteFromDriverByKey = (driver, key) => {
    delete driver[key];
    return driver;
}