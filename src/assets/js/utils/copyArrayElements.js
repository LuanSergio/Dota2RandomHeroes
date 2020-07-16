import clearArray from './clearArray'

export default function copyArrayElements(clonedArray, originalArray) {
  clearArray(clonedArray);

  originalArray.forEach(element => {
    console.log('elemento', element);
    clonedArray.push(element);
  });

}
