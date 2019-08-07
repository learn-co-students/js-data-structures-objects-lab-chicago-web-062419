// Write your solution in this file!
const driver = {name: 'Phil'}

const updateDriverWithKeyAndValue = (driver, key, value) => {
    // const newDriver = Object.assign({}, driver)
    const newDriver = {...driver}
    newDriver[key] = value
    return newDriver
}

const destructivelyUpdateDriverWithKeyAndValue = (driver, key, value) => {
    driver[key] = value
    return driver
}
const deleteFromDriverByKey = (driver, key) => {
    // const newDriver = Object.assign({}, driver)
    const newDriver = {...driver}
    delete newDriver[key]
    console.log(newDriver)
    return newDriver
}

const destructivelyDeleteFromDriverByKey = (driver, key) => {
    delete driver[key]
    return driver
}

// destructivelyUpdateDriverWithKeyAndValue(driver, 'name', 'Phil')
// console.log(updateDriverWithKeyAndValue(driver, 'name', 'Phil'))
// console.log(driver)
// deleteFromDriverByKey(driver, 'name')
// destructivelyUpdateDriverWithKeyAndValue(driver, 'name')

// console.log(newDriver)
// console.log(driver)
// updateDriverWithKeyAndValue(driver, 'name', 'Phil')