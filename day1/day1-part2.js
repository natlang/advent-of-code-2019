const fs = require("fs");

const input = process.argv.slice(2)[0];

const calcFuel = filename =>
  fs.readFile(filename, (err, data) => {
    if (err) console.error(err);

    const inputArr = data.toString().split("\n");
    const moduleArr = [];

    // Calculate fuel for each module
    for (const mod of inputArr) {
      var fuelReq = parseInt(mod),
        totalFuelReq = 0;

      while (fuelReq > 0) {
        fuelReq = Math.floor(fuelReq / 3) - 2;
        if (fuelReq > 0) totalFuelReq += fuelReq;
      }

      moduleArr.push(totalFuelReq);
    }

    // Sum up fuel for all modules
    const result = moduleArr.reduce((sum, fuel) => sum + fuel, 0);

    console.log(`Total fuel requirement: ${result}`);
  });

calcFuel(input);
