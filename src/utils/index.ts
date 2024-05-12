export const shuffleArray = (array: any[]) => {
  let len = array.length,
    currentIndex
  for (currentIndex = len - 1; currentIndex > 0; currentIndex--) {
    let randIndex = Math.floor(Math.random() * (currentIndex + 1))
    var temp = array[currentIndex]
    array[currentIndex] = array[randIndex]
    array[randIndex] = temp
  }
  return array;
}
