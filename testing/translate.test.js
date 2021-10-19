// if success, eng => morse
describe("tests for english to morse translation", () => {
    it("should translate words", () => {
        expect(input("a").toBe(".-"));
        expect(input("abc").toBe(".- -... -.-."));
        expect(input("hello").toBe(".- -... -.-."));
    });
    it("should translate sentences", () => {
        expect(
            input("hello my name is").toBe(
                ".... . .-.. .-.. --- / -- -.-- / -. .- -- . / .. ..."
            )
        );
    });
    it("should handle spaces sentences with symbols", () => {
        expect(
            input("cheyne murdoch-hall").toBe(
                "-.-. .... . -.-- -. . / -- ..- .-. -.. --- -.-. .... -....- .... .- .-.. .-.."
            )
        );
    });
    // it("should handle valid symbols", () => {
    //     expect(input(""))
    // })
});
//if success, morse => eng
describe("test for morse to eng translation", () => {
    it("should translate to english", () => {
        expect(input(".-").toBe("A"));
        expect(input(".- -... -.-.").toBe("ABC"));
        expect(input(".- -... -.-.").toBe("HELLO"));
    });
    it("should translate sentences", () => {
        expect(
            input(".... . .-.. .-.. --- / -- -.-- / -. .- -- . / .. ...").toBe(
                "HELLO MY NAME IS"
            )
        );
    });
});

// if empty
// describe("test for empty input"),
//     () => {
//         it("should translate no text to input valid text", () => {
//             expect(output).toBe("please enter something to translate.");
//         });
//     };

// if invalid
// describe("test for invalid input", () => {});
