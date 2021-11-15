// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2

test('isPhoneNumber1', () => {
    expect(functions.isPhoneNumber("abcvd")).toBe(false);
});

test('isPhoneNumber2', () => {
    expect(functions.isPhoneNumber("gdfgdfgd")).toBe(false);
});

test('isPhoneNumber3', () => {
    expect(functions.isPhoneNumber("123-456-7890")).toBe(true);
});

test('isPhoneNumber4', () => {
    expect(functions.isPhoneNumber("875-673-1860")).toBe(true);
});

test('isStrongPassword1', () => {
    expect(functions.isStrongPassword("aaaWWDFg")).toBe(true);
});

test('isStrongPassword2', () => {
    expect(functions.isStrongPassword("tutfHFDGF23")).toBe(true);
});

test('isStrongPassword3', () => {
    expect(functions.isStrongPassword("av")).toBe(false);
});

test('isStrongPassword4', () => {
    expect(functions.isStrongPassword("123")).toBe(false);
});

test('isDate1', () => {
    expect(functions.isDate("09/04/2034")).toBe(true);
});

test('isDate2', () => {
    expect(functions.isDate("10/08/2022")).toBe(true);
});

test('isDate3', () => {
    expect(functions.isDate("123-456-7890")).toBe(false);
});

test('isDate4', () => {
    expect(functions.isDate("aaaWWDFg")).toBe(false);
});


test('isHexColor1', () => {
    expect(functions.isHexColor("#ABC")).toBe(true);
});

test('isHexColor2', () => {
    expect(functions.isHexColor("#9B7")).toBe(true);
});

test('isHexColor3', () => {
    expect(functions.isHexColor("aaaWWDFg")).toBe(false);
});

test('isHexColor4', () => {
    expect(functions.isHexColor("10/08/2022")).toBe(false);
});