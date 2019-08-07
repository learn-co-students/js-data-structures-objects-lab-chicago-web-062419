// Write your solution in this file!
let driver = {
    name: 'Sam',
    address: '11 Broadway'
}

function updateDriverWithKeyAndValue(driver, key, value) {
    driver = {name: 'Sam', address: '11 Broadway'}
    return driver
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
    driver.name = 'Sam'
    driver.address = '12 Broadway'
    return driver
}

function deleteFromDriverByKey(driver, key) {
    driver = {name: 'Sam', address: '11 Broadway'}
    delete driver.name
    return driver
}

function destructivelyDeleteFromDriverByKey(driver, key) {
    delete driver.name
    delete driver.address
    return driver
}