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

// toBeGreaterThan 크다
// toBeGreaterThanOrEqual 크거나 같다
// toBeLessThan 작다
// toBeLessThanOrEqual 작거나 같다

test('id는 10자 이하여야 한다.', () => {
    const id = 'THE_BLACK';
    expect(id.length).toBeLessThanOrEqual(10);
});

test('비밀번호는 정확히 4자리여야 한다.', () => {
    const pw = '1234';
    expect(pw.length).toBe(4);
});

test('비밀번호는 정확히 4자리여야 한다.', () => {
    const pw = '1234';
    expect(pw.length).toEqual(4);
});

// 주의
test('0.1 더하기 0.2는 0.3이다.', () => {
    // expect(add(0.1, 0.2)).toBe(0.3);
    // 위처럼 사용하면, js에선 소수를 이진법으로 바꾸었기 때문에 조금씩 달라지는 문제점 발생
    expect(add(0.1, 0.2)).toBeCloseTo(0.3);
    // 위처럼 toBeCloseTo 사용
});

// test('Hello World에 a라는 글자가 있나?', () => {
//     expect('Hello World').toMatch(/a/); // 정규표현식
// });

test('Hello World에 a라는 글자가 있나?', () => {
    expect('Hello World').toMatch(/H/); // 정규표현식
});

test('Hello World에 a라는 글자가 있나?', () => {
    expect('Hello World').toMatch(/H/i); // 정규표현식
    // 대소문자 구분 없애려면 뒤에 i를 붙여주면 된다.
});