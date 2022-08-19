//long_str - the entire long string, number - the approximate number where you want to slice

export function sliceWord(long_str: string, number: number) {
  let space_postion = 1;

  for (let i = number; i--; i < 0) {
    if (long_str[i] === " ") {
      space_postion = i;
      break;
    }
  }
  return long_str.slice(0, space_postion) + "...";
}
