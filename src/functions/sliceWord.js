export function sliceWord(string, number) {
  for (i = number; i--; i < 0) {
    if (string[i] === " ") {
      return string[i];
    }
  }
}
