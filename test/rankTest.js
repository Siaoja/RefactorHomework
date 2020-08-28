const rankTest = require('ava');
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

rankTest('given voyage with china and history length over 18', t => {
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
