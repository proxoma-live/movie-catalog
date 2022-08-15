export function convertToDollars(number: number | undefined) {
  
  let string = number?.toString();
  let copy = "$ " + string?.replace(/(\d)(?=(\d{3})+$)/g, "$1 ");


  return copy;
}
