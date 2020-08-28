const rankTest = require('ava');
const {voyageRisk} = require("../src/rank");
const {voyageProfitFactor} = require("../src/rank");

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

rankTest('given voyage with china and history length over 18 when voyageProfitFactor return 7', t => {
  const voyage = {
    zone: 'china',
    length: 10,
  };
  for(let i = 0; i < 20; i++){
    history.push({});
  }
  let result = voyageProfitFactor(voyage, history);
  t.is(result,7);
})

rankTest('given voyage with east-indies and history length over 14 when voyageProfitFactor return 4', t => {
  const voyage = {
    zone: 'east-indies',
    length: 10,
  };
  for(let i = 0; i < 14; i++){
    history.push({});
  }
  let result = voyageProfitFactor(voyage, history);
  t.is(result,4);
})

rankTest('given voyage with east-indies and length 10 when voyageRisk return 9', t => {
  const voyage = {
    zone: 'east-indies',
    length: 10,
  };

  let result = voyageRisk(voyage);
  t.is(result,9);
})