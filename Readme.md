# Immutable javascript


## Example usage

```js
	const ImmutableObject = require('./index').ImmutableObject
	let a = new ImmutableObject({a : 1})
	let newObject = a.insert( 'b', '2')

	console.log(newObject)
	/* 	You get a new copy of the object and you can do normal operations 
   		with it
 	*/

	console.log(a.data)

```

## License 

MIT