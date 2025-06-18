const fs = require("fs");

const textin = fs.readFileSync("./txt/input.txt", "utf-8");
const textout = `this what we know about avacado: ${textin}\n created at ${Date.now()}`;
fs.writeFileSync("./txt/output.txt", textout);