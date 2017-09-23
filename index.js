class ImmutableArray {

    constructor(data) {
        this.data = data || []
    }

    push(item) {
    	if (!item) throw new Error("Illegal type passed")
        let newArray = Object.assign([], this.data)
        newArray.push(item)
        return newArray
    }

}


class ImmutableObject {

    constructor(data) {
        this.data = data || {}
    }

    insert(key, value) {
    	if (!key || !value) throw new Error("Illegal type passed")
        let newObject = Object.assign({}, this.data)
        newObject[key] = value
        return newObject
    }

    push(key, value) {
    	if (!key || !value) throw new Error("Illegal type passed")
        let list = Object.assign([], this.data[key])
        let newObject = Object.assign({}, this.data)
        list.push(value)
        newObject[key] = list
        return newObject
    }

    addToObject(key, subkey, value) {
    	if (!key || !value || !!subkey) throw new Error("Illegal type passed")
    	let obj = Object.assign({}, this.data[key])
    	let newObject = Object.assign({}, this.data)
    	obj[subkey] = value
    	newObject[key] = obj
    	return newObject
    }

}

module.exports = {
    ImmutableObject,
    ImmutableArray
}