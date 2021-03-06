function screenVoyageZone(voyage) {
  return [
    'china',
    'east-indies',
  ].includes(voyage.zone);
}

function calculateRiskByVoyageLength(voyage) {
  let result = 0;
  if (voyage.length > 4) {
    result += 2;
  }
  if (voyage.length > 8) {
    result += voyage.length - 8;
  }
  return result;
}

function voyageRisk (voyage) {
  let result = 1;
  result += calculateRiskByVoyageLength(voyage);
  if (screenVoyageZone(voyage)) {
    result += 4;
  }
  return Math.max(result, 0);
}

function hasChina (history) {
  return history.some(v => 'china' === v.zone);
}

function captainHistoryRisk (voyage, history) {
  let result = 1;
  if (history.length < 5) {
    result += 4;
  }
  result += history.filter(v => v.profit < 0).length;
  if (isChinaAndHasChina(voyage, history)) {
    result -= 2;
  }
  return Math.max(result, 0);
}

function isChinaAndHasChina(voyage, history) {
  return voyage.zone === 'china' && hasChina(history);
}

function calculateChinaProfitFactor(history, voyage) {
  let result = 3;
  if (history.length > 10) {
    result += 1;
  }
  if (voyage.length > 12) {
    result += 1;
  }
  if (voyage.length > 18) {
    result -= 1;
  }
  return result;
}

function calculateNotChinaProfitFactor(history, voyage) {
  let result = 0;
  if (history.length > 8) {
    result += 1;
  }
  if (voyage.length > 14) {
    result -= 1;
  }
  return result;
}

function voyageProfitFactor (voyage, history) {
  let result = 2;
  if (voyage.zone === 'china') {
    result += 1;
  }
  if (voyage.zone === 'east-indies') {
    result += 1;
  }
  if (isChinaAndHasChina(voyage, history)) {
    result += calculateChinaProfitFactor(history, voyage);
  }
  else {
    result += calculateNotChinaProfitFactor(history, voyage);
  }
  return result;
}

function generateData(voyage, history) {
  const vpf = voyageProfitFactor(voyage, history);
  const vr = voyageRisk(voyage);
  const chr = captainHistoryRisk(voyage, history);
  return {vpf, vr, chr};
}

function generateRatingResult(voyage, history) {
  const {vpf, vr, chr} = generateData(voyage, history);
  return (vpf * 3 > (vr + chr * 2)) ? 'A':'B';
}

function rating (voyage, history) {
  return generateRatingResult(voyage, history);
}

module.exports = {
  voyageProfitFactor,
  voyageRisk,
  captainHistoryRisk,
  rating,
};

const voyage = {
  zone: 'west-indies',
  length: 10,
};
const history = [
  {
    zone: 'east-indies',
    profit: 5,
  },{
    zone: 'west-indies',
    profit: 15,
  },{
    zone: 'china',
    profit: -2,
  },
  {
    zone: 'west-africa',
    profit: 7,
  },
];
const myRating = rating(voyage, history);
console.log(`myRating: ${myRating}`);
