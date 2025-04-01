// 람다식
// function m1() {
//     console.log("m1 호출됨");
//   }
  
//   function m2(n1, n2) {
//     console.log(`${n1}, ${n2}`);
//   }
  
//   function m3(n1, n2) {
//     return n1 + n2;
//   }

// 함수가 1급 객체라서 주소가 있기 때문에 변수에 담을 수 있다.
let m1 = function() { // 익명함수 - 어차피 m1 안에 담겨있으니까 함수명 중요X -> 생략 
    console.log("m1 호출됨");
  };

m1();

// Lamda식 : 이름이 없는 익명함수
let m11 = () => { // 어차피 익명함수일거면 "function"도 생략하자 -> 람다식
    console.log("m11 호출됨");
  };

m11();

// Lamda Statement (return X)
let m2 = (n1, n2) => {
    console.log(`${n1}, ${n2}`);
  };

m2(1,2);

// Lamda Expression (return O -> 변수로 받을 수 있다.)
let m3 = (n1, n2) => {
    return n1 + n2;
  };

let r1 = m3(5,6);
console.log(r1);

// Lamda Expression 중괄호 내부 코드가 한 줄일 경우. {return n1 + n2;}와 동일하다
let m33 = (n1, n2) => n1 + n2;
let r2 = m33(1,5);
console.log(r2);

// Lamda Statement (return이 안되니까) - 지원되는 방식이지만 사용X(개념이 헷갈린다)
let m333 = (n1, n2) => console.log(n1+n2);
m333(10,50);

// Lamda Expression(표현식) (1줄, 2줄 이상)
let k1 = () => 5;
let k2 = () => {
    return 5;
};

// Lamda Statement(문장) (중괄호 생략X (지원되는 방식이지만 아직은 사용X 개념 완벽히 이해되면 써도 됨))
let k3 = () => {
    console.log(5);
};