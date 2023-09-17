// Coding Challenge #1
// Data 1
// var mark_mass = 78;
// var mark_height = 1.69;
// var john_mass = 92;
// var john_height = 1.95;

// Data 2
// var mark_mass = 95;
// var mark_height = 1.88;
// var john_mass = 85;
// var john_height = 1.76;

// var calculate = (mass, height) => {
//     return mass / (height * height);
// }

// var markHigherBMI = calculate(mark_mass, mark_height) > calculate(john_mass, john_height);

// console.log(markHigherBMI);

// Coding Challenge #2
// if (markHigherBMI) {
//     console.log(`Mark's BMI (${calculate(mark_mass, mark_height)}) is higher than John's ${calculate(john_mass, john_height)}!`);
// } else {
//     console.log(`John's BMI (${calculate(john_mass, john_height)}) is higher than Mark's ${calculate(mark_mass, mark_height)}!`);
// }

// Coding Challenge #3
// var calculateAverage = (a, b, c) => (a + b + c) / 3;
// Data 1
// var dophinScoreAvg = calculateAverage(96, 108, 89)
// var koalaScoreAvg = calculateAverage(88, 91, 110);

// if (dophinScoreAvg > koalaScoreAvg) {
//     console.log(`Dophins (${dophinScoreAvg}) is higher score than Koala (${koalaScoreAvg})`);
// } else {
//     console.log(`Koala (${dophinScoreAvg}) is higher score than Dophins (${koalaScoreAvg})`);
// }

// Data Bonus 1
// var dophinScoreAvg = calculateAverage(97, 112, 101);
// var koalaScoreAvg = calculateAverage(109, 95, 123);

// Data Bonus 2
// var dophinScoreAvg = calculateAverage(97, 112, 101);
// var koalaScoreAvg = calculateAverage(109, 95, 106);

// if (dophinScoreAvg > koalaScoreAvg && dophinScoreAvg >= 100) {
//     console.log(`Dophins (${dophinScoreAvg}) is winner`);
// } else if (dophinScoreAvg < koalaScoreAvg && koalaScoreAvg >= 100) {
//     console.log(`Koala (${koalaScoreAvg}) is winner`);
// } else if (dophinScoreAvg == koalaScoreAvg && dophinScoreAvg >= 100 && koalaScoreAvg >= 100) {
//     console.log(`No team wins the trophy.`);
// }

// Coding Challenge #4
// Data 1
// var bill = 275;
// var bill = 40;
// var bill = 430;
// var tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill+tip}`);

// Coding Challenge #5
// var calcAverage = (a, b, c) => (a + b + c) / 3;
// Data 1
// var dophin = calcAverage(44, 23, 71);
// var koala = calcAverage(65, 54, 49);

// Data 2
// var dophin = calcAverage(85, 54, 41);
// var koala = calcAverage(23, 34, 27);
// var checkWinner = (avgDolphin, avgKoalas) => avgDolphin > avgKoalas ? console.log(`Dolphin win (${avgDolphin} vs ${avgKoalas})`) : console.log(`Koalas win (${avgKoalas} vs ${avgDolphin})`);
// checkWinner(dophin, koala);

// Coding Challenge #6
// var calcTip = (bill) => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// var bills = [125, 555, 44];
// var tips = bills.map((bill) => calcTip(bill));
// var total = bills.map((bill) => bill + calcTip(bill));
// console.log(`bills: ${bills} --- tips: ${tips} --- total: ${total}`);

// Coding Challenge #7
// var markObj = {
//     fullName: "Mark Miller",
//     mass: "78",
//     height: "1.69",
// }
// var johnObj = {
//     fullName: "John Smith",
//     mass: "92",
//     height: "1.95"
// }
// var calcBMI = (obj) => {
//     return obj.mass / (obj.height * obj.height);
// }
// if(calcBMI(markObj) > calcBMI(johnObj)) {
//     console.log(`${markObj.fullName} BMI (${calcBMI(markObj)}) is higher than ${johnObj.fullName} (${calcBMI(johnObj)})`);
// } else if(calcBMI(markObj) < calcBMI(johnObj)) {
//     console.log(`${johnObj.fullName} BMI (${calcBMI(johnObj)}) is higher than ${markObj.fullName} (${calcBMI(markObj)})`);
// }

// Coding Challenge #8
// var bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// var tips = [];
// var totals = [];

// var calcTip = (bill) => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// // bills.map((bill) => bill + calcTip(bill));
// for(var i=0; i<bills.length-1; i++) {
//     tips.push(calcTip(bills[i]));
//     totals.push(bills[i] + calcTip(bills[i]));
// }
// console.log(`Bills: ${bills} ---- Tips: ${tips} ---- Totals: ${totals}`);
// Bonus
// var calcAverage = (arr) => {
//     var sum = 0;
//     for(var i=0; i<arr.length-1; i++) {
//         sum+=arr[i];
//     }
//     return sum/arr.length;
// }
// console.log("Total Average: ", calcAverage(totals));

// Coding Challenge #9
// var printForecast = (arr) => {
//     for(var i=0; i<arr.length-1; i++) {
//         console.log(`...${arr[i]}oC in ${i+1} days`);
//     }
// }
// var data1 = [17, 21, 23];
// var data2 = [12, 5, -5, 0, 4];
// printForecast(data1);
// printForecast(data2);


// --------- JavaScript in the Browser: DOM and Events -------