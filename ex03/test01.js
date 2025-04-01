// 불변

let list = [1, 2, 3];

// c.f. 얕은 복사
let data = list;

// 1. 깊은 복사
let deepCopy = [...list]; // ... (전개 연산자) -> type으로 감싸줘야 된다.
deepCopy.push(4); // 비교 확인을 위해서 잠깐 사용한 것. push 쓰지X

console.log("list", list);
console.log("deepCopy", deepCopy);

// 2. 추가
// 기존 list를 건들지 않았기 때문에 사용 가능하다!
let appendList = [...list, 4];
let prependList = [0, ...list];

console.log("appendList", appendList);
console.log("prependList", prependList);

// 3. 찾기
// filter는 내부에 람다식을 predicate(true or false only)로 받는다
// filter 이외의 문법을 사용하면 기존의 list를 건들게 되므로 사용x
// filter로 일치하는 값만 수집 (찾기)
// filter로 일치하지 않는 값만 수집 (삭제)
let searchList = list.filter((n) => n==2);
console.log("searchList",searchList);

// 4. 삭제
// filter로 일치하지 않는 값만 수집 (삭제)
let deleteList = list.filter((n) => n!=2);
console.log("deleteList",deleteList);

// 5. 수정 n == 2이면 n * 10
// 수정은 function이다. 인수도 받아야되고 return도 해야됨
// 전개 후 처음부터 끝까지 순회 (= iterator)
// statement도 필요함? / return이지만 한줄이 아님 -> 중괄호 사용 
let updateList = list.map((n) => {
    if(n==2){
        return n*10;
    }else{
        return n;
    }
});

// 삼항 연산자 사용하는 방식
// let updateList = list.map((n) => n==2? n*10 : n);
console.log("updateList", updateList);