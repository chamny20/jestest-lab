const fn = {
    add: (num1, num2) => num1 + num2,
    makeUser: (name, age) => ({ name, age }),
    throwErr: () => {
        throw new Error('xx');
    }
};

module.exports = fn;