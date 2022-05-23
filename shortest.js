// Write a function that returns the string of shortest length if an array is passed a parameter


array = ['john', 'Joseph', 'Smith', 'Katy Perry', 'Robert Bob']
l = array.length
elength = []
function elementLength() {
	for (i = 0; i < l; i++) {
		elength[i] = array[i].length
		
	} return elength
}
function elementPosition() {
	Min = Math.min(...elength)
	position=elength.indexOf(Min)
	return position
}

function elementName() {
	name = array[position]
	return name

}
elementLength()
elementPosition()
console.log(elementName())




