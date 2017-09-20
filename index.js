class ImmutableArray {

    constructor(data) {
        this.data = data || []
    }

    push(item) {
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
    	let newObject = Object.assign({}, this.data)
    	newObject[key] = value
    	return newObject
    }
}

module.exports = {
	ImmutableObject,
	ImmutableArray
}