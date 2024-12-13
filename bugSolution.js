function foo(a, b) {
  if (a === null || b === null || a === undefined || b === undefined) {
    return NaN; //Correct handling of null and undefined values
  }
  return a + b;
}

console.log(foo(1, null)); //Outputs NaN