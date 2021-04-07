const { expect } = require("chai");
const formatFullName = require("../formatFullname");

describe("function formatFullName", () => {
  it("should return an error if content arg is not a string", () => {
    expect(formatFullName(undefined)).to.equal("Error");
    expect(formatFullName(1)).to.equal("Error");
    expect(formatFullName({})).to.equal("Error");
    expect(formatFullName([])).to.equal("Error");
    expect(formatFullName(function () {})).to.equal("Error");
  });
  it("should return an error if content arg length is 0", () => {
    expect(formatFullName()).to.equal("Error");
    expect(formatFullName("")).to.equal("Error");
  });
  it("should return an error if arg format is not <name surname>", () => {
    expect(formatFullName("John")).to.equal("Error");
    expect(formatFullName("John Doe Thomas")).to.equal("Error");
  });
  it("should return good fullName if proper args", () => {
    expect(formatFullName("JOHN DOE")).to.equal("John Doe");
    expect(formatFullName("john doe")).to.equal("John Doe");
    expect(formatFullName("jOHN dOE")).to.equal("John Doe");
    expect(formatFullName("John Doe")).to.equal("John Doe");
  });
});
