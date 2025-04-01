// 함수

// 함수의 기본형
function m1(){
    console.log("m1 호출됨");
}

// let을 적는 의미가 없음 (모든 타입이니까)
function m2(n1, n2){
    console.log(`${n1}, ${n2}`);
}

// 클래스 밖에 있고 상태를 변경시키는 메서드가 아닌 함수라고 한다.
function m3(){
    return 10;
}

m1();
m2(1,2);
let r = m3();
console.log("r", r);