import sum from "./sum.js";

describe("test for sum function", () => {
    test("should return 5 for 2 and 3", () => {
        expect(sum(2, 3)).toBe(5);
    });

    test("should return 0 for -2 and 2", () => {    
        expect(sum(-2, 2)).toBe(0);
    });
})