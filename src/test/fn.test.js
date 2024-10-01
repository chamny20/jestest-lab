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