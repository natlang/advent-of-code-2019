const fs = require("fs");

const input = process.argv.slice(2)[0];

const calcFuel = filename =>
  fs.readFile(filename, (err, data) => {
    if (err) console.error(err);

    const inputArr = data.toString().split("\n");
    const result = inputArr.reduce(
      (sum, mass) => sum + Math.floor(mass / 3) - 2,
      0
    );

    console.log(`Total fuel requirement: ${result}`);
  });

calcFuel(input);
