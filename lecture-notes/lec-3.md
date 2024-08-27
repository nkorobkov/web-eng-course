
### Language that is executed during the page load

### Interpretable language with dynamic weak types

#### Variable types: String, Number, Boolean, Decimal, Array, Object

```javascript

// Define as "const" for immutable
// "let" -- mutable

const number = 5;
number = 8 --> exception

let string = "hello" // double or single quotes, / for escape

string = "hi"

const bool = false // logical operations are || && and !

const decimal = 3.1415

const array = [4, "five", 6, 7]

const object = {
	property: "value",
	number_property: 42,
	nested_object: {
		two: 2,
		three: 4
	}
}

object = {} -- exception

object.property = "hello"
object.new_property = "lol"

object.property --> "value"
object.asdf --> undefined

const explicit_nothing = null

const accidental_nothing = undefined
```


### Weak type conversion
```javascript
"five is " + 5 == "five is 5" // --> true

8 + "8" == "88" // --> true

[] == 0 // --> true
```

### Controll flow
```javascript
n = 0

for (let i in [1,2,3,4,5,6,7]) {
	n = n + i^2
}

for (let i = 1; i<8; i = i + 1) { // run this code in block

}

if (n%2 == 0) {
	console.log("sum of squares 1..7 is even")
} else {
	console.log("sum of squares 1..7 is odd")
}
```


### Functions

```javascript
// long form
function compute_sum(a, b) {
	return a+b
}

const a = compute_sum(4,5)

console.log(a)
// --> a

function decorator(other_f) {
	console.log('name')
	other_f()
}

const object = {
	 method: function(a) {
		 console.log(a)
	 }
 }
```


# Interaction with the HTML document

CSS Selectors:
```css
tag

.class

#id
```

```javascript
const myElement = document.querySelector("#myElementId")

const header = document.createElement("h1")

header.innerText = "hello header"

header.classList.add("important")

myElement.addChild(header)

header.addEventListener("click", callbac_function)

function callback_function() {
	console.log("clicked")
}
```


### Offline docs that hopefully work
devdocs.io/offline
https://overapi.com/javascript


![[../assets/js-cheatsheet.pdf]]