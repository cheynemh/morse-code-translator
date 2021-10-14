import { translateToMorse } from "./scripts/translateToMorse";

// if success
describe("tests for accurate translation", () => {
    it("should translate single words", () => {
        expect(input("a").toBe(".-"));
        expect(input("abc").toBe(".- -... -.-."));
        expect(input("hello").toBe(".- -... -.-."));
    });
    it("should translate multiple words", () => {
        expect(input("hello my name is").toBe(""));
    });
});

// if empty
describe("test for empty input"),
    () => {
        it("should translate no text to input valid text", () => {
            const output = translateToMorse("");
            expect(output).toBe("please enter something to translate.");
        });
    };

// if invalid
