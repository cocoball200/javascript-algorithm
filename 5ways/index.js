//# 구조 분해 할당을 이용한 변수 swap
let a = 5;
let b = 10;

[a, b] = [b, a];
console.log(a, b);

//# 배열 생성으로 루프 제거하기

//이전
let sum = 0;
for (let i = 5; i < 10; i += 1) {
  sum += i;
}

//이후
const sum = Array.from(new Array(5), (_, k) => k + 5).reduce(
  (acc, cur) => acc + cur
);
