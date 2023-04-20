function capitalize(input){
    const str = String(input)
    const newString = str.substring(0,1).toUpperCase() + str.substring(1)
    return newString
}

module.exports = capitalize

