function ValidEmail(email: string) {
  // 이메일 형식 검증 로직
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return emailPattern.test(email);
}

module.exports = ValidEmail;
