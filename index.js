// Write your solution in this file!
let driver = {}

const updateDriverWithKeyAndValue = (driver, key, value) => {
    let newDriver = {...driver}
    newDriver[key] = value

    return newDriver

}

const destructivelyUpdateDriverWithKeyAndValue = (driver, key, value) => {
    driver[key] = value

    return driver
}

const deleteFromDriverByKey = (driver, key) => {
    let newObj = Object.assign({}, driver);
    delete newObj[key];
    return newObj
}

const destructivelyDeleteFromDriverByKey = (driver, key) => {
    delete driver[key];

    return driver
}