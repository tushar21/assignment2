const flatten = (nested) => {
  const flat = [];
  const handleFlat = (array) => {
    let counter = 0
    while (counter < array.length) {
      const val = array[counter];
      if (Array.isArray(val)) {
        handleFlat(val);
      } else {
        flat.push(val)
      }
      counter++;
    }
  }
  handleFlat(nested);
  return flat;
}


const input = [4,[[5],[6,[7],8],9,10]] ;
console.log(flatten(input)); 
