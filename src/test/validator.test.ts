const isValidEmail = require("../utils/validator");

describe("이메일 검증", () => {
  test("유효한 이메일일 때 true를 반환해야 한다", () => {
    const validEmails = [
      "user@example.com",
      "another.user@example.co.uk",
      "user123@gmail.com",
    ];

    validEmails.forEach((email) => {
      expect(isValidEmail(email)).toBe(true);
    });
  });

  test("유효하지 않은 이메일일 때 false를 반환해야 한다", () => {
    const invalidEmails = [
      "invalid-email",
      "user@",
      "@example.com",
      "user@example",
      "user@.com",
    ];

    invalidEmails.forEach((email) => {
      expect(isValidEmail(email)).toBe(false);
    });
  });
});
