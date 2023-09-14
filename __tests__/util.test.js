import { checkPassword, capitalize } from "../src/util.js";

describe("checkPassword", () => {
  it("Matching", () => {
    expect(checkPassword("Asdf1234!", "Asdf0234!").status).toBeFalsy();
    expect(checkPassword("Asdf1234!", "Asdf1234!").status).toBeTruthy();
  });
  it("Contains special character", () => {
    expect(checkPassword("Asdf12345", "Asdf12345").status).toBeFalsy();
    expect(checkPassword("Asdf1234!", "Asdf1234!").status).toBeTruthy();
  });
  it("Contains upper & lower case", () => {
    expect(checkPassword("asdf1234!", "asdf1234!").status).toBeFalsy();
    expect(checkPassword("ASDF1234!", "ASDF1234!").status).toBeFalsy();
    expect(checkPassword("ASdf1234!", "ASdf1234!").status).toBeTruthy();
  });
  it("No spaces", () => {
    expect(checkPassword("Asdf 12345", "Asdf 12345").status).toBeFalsy();
    expect(checkPassword("Asdf1234!", "Asdf1234!").status).toBeTruthy();
  });
  it("length > 8", () => {
    expect(checkPassword("Asdf34!", "Asdf34!").status).toBeFalsy();
    expect(checkPassword("Asdf1234!", "Asdf1234!").status).toBeTruthy();
  });
});

describe("capitalize", () => {
  it("Returns null if nothing is passed in", () => {
    expect(capitalize("")).toBeNull();
  });
  it("Fist letter of a single word", () => {
    expect(capitalize("word")).toBe("Word");
  });
  it("First letter of mulitple words", () => {
    expect(capitalize("book worm")).toBe("Book Worm");
  });
  it("only first letter of words are capitalized", () => {
    expect(capitalize("boOK wOrM")).toBe("Book Worm");
  });
});