import { add, makeUser } from "utils/fn";

test("1은 1이야.", () => {
    expect(1).toBe(1);
});

test('2 더하기 3은 5야.', () => {
    expect(add(2, 3)).toBe(5);
});

test('3 더하기 3은 5가 아니야.', () => {
    expect(add(3, 3)).not.toBe(5);
})

// test('이름과 나이를 전달받아 객체 반환해줘', () => {
//     expect(makeUser("Chaemin", 23)).toBe({
//         name: "Chaemin",
//         age: 23,
//     });
// });

// => 객체는 toEuql 사용

test('이름과 나이를 전달받아 객체 반환해줘', () => {
    expect(makeUser("Chaemin", 23)).toEqual({
        name: "Chaemin",
        age: 23,
    });
});

test('이름과 나이를 전달받아 객체 반환해줘', () => {
    expect(makeUser("Chaemin", 23)).toStrictEqual({
        name: "Chaemin",
        age: 23,
    });
});

// toBeNull
// toBeUndefined
// toBeDefined

test('null은 null이다.', () => {
    expect(null).toBeNull();
});

// toBeTruthy
// toBeFalsy

test('0은 false이다.', () => {
    expect(add(1, -1)).toBeFalsy();
});


// 해당 (아래) 코드는 통과하지 못함
// test('0은 false이다.', () => {
//     expect(add('hello', 'world')).toBeFalsy();
// });

test('비어있지 않은 문자열은 true이다.', () => {
    expect(add('hello', 'world')).toBeTruthy();
});