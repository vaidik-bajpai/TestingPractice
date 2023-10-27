function capitalise(str){
    if(typeof str !== "string"){
        return undefined
    }
    if(str.length === 0)
        return ""
    str = str.trim()
    str = str[0].toUpperCase() + str.slice(1, str.length)
    return str
}

module.exports = capitalise