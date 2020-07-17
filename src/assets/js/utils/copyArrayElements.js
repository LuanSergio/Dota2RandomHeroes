import clearArray from './clearArray'

export default function copyArrayElements(clonedArray, originalArray) {
  clearArray(clonedArray);

  originalArray.forEach(element => {
    clonedArray.push(element);
  });

}
