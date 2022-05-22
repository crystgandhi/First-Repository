array = ['E1', 'E55555555', 'E22', 'E3222', 'E444444']
	l = array.length
elength = []
for (i = 0; i < l; i++) {
	elength[i] = array[i].length
	  if (elength[i+1] > elength[i]) {
		elength[i] = elength[i+1]
	   }console.log(elength[i])
	} 



