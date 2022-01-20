function findRightBracket1(brackts) {
  const stack = [];

  for (const bracket of brackts) {
    if (bracket === "(") {
      stack.push(bracket);
    } else {
      if (stack.length === 0) return false;
      stack.pop();
    }
  }
  return stack.length === 0;
}

function findRightBracket2(brackts) {
  let count = 0;

  for (const bracket of brackts) {
    if (bracket === "(") {
      count += 1;
    } else {
      if (count === 0) return false;
      count -= 1;
    }
  }
  return count === 0;
}

findRightBracket1("()()");
findRightBracket2("())(");
