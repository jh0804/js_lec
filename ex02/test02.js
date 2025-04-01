// 컬렉션, 오브젝트

// 컬렉션 (같은 타입이 연속되는 경우)
let list = [1, 2, 3, 4];
let hobby = ["축구", "농구"]; 

// 오브젝트 ({key:value}) (다른 타입이 여러개)
let user = {
    id:1,
    username:"ssar",
    hobby:hobby // 컬렉션이 들어감
};

user.username="cos";
hobby[0] = "탁구";

console.log(list);
console.log(hobby);

console.log(user.id);
console.log(user.username);
console.log(user.hobby);
console.log(user.hobby[0]);
