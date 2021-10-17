const fs = require("fs");
const path = require("path");
const conv = require("../");

const original = fs.readFileSync(path.join(__dirname, "./index.input.css"), {encoding:"utf-8"});
const expected = fs.readFileSync(path.join(__dirname, "./index.expect.css"), {encoding:"utf-8"});

test("conv", ()=>{
  expect(conv(original)).toBe(expected);
});