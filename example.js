const ImmutableObject = require('./index').ImmutableObject
let a = new ImmutableObject({a : [1, 2, 3, 4]})
let newObject = a.push( 'a', 5)


console.log(newObject)
/* You get a new copy of the object and you can do normal operations 
   with it
 */

console.log(a.data)
