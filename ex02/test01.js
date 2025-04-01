// 변수
// 가장 최상단에 적을 수 있는 것들을 1급 객체라고 한다. (매개변수 등 단독으로 전달 가능하다(단독주소가 있음) cf. Java에서는 class만 1급 객체)
let n1 = 1; // Number 타입 (값이 들어가면서 Number 타입으로 정해짐 = 타입추론)
let n2 = 10.5;
let s1 = "문자열"; // String 타입
let s2 = '문자열'; // String 타입
let s3 = `문자열 ${n1}`; // String 타입

let b1 = true; // bool 
let u1 = null; // null 타입
let u2; // undefined 타입

console.log(n1);
console.log(n2);
console.log(s1);
console.log(s2);
console.log(s3);

console.log(b1);
console.log(u1);
console.log(u2);

