const rankTest = require('ava');
const {rating} = require("../src/rank");
const {captainHistoryRisk} = require("../src/rank");
const {voyageRisk} = require("../src/rank");
const {voyageProfitFactor} = require("../src/rank");
const voyage = {
    zone: 'china',
    length: 20,
};
const history = [
    {
        zone: 'china',
        profit: -2,
    },
    {
        zone: 'east-indies',
        profit: -2,
    },
    {
        zone: 'east-indies',
        profit: 2,
    },
    {
        zone: 'east-indies',
        profit: 2,
    },
    {
        zone: 'east-indies',
        profit: 2,
    },
    {
        zone: 'east-indies',
        profit: 2,
    },
    {
        zone: 'east-indies',
        profit: 2,
    },
    {
        zone: 'east-indies',
        profit: 2,
    },
    {
        zone: 'east-indies',
        profit: 2,
    },
    {
        zone: 'east-indies',
        profit: 2,
    },
    {
        zone: 'east-indies',
        profit: 2,
    }
];


rankTest('given voyage with china and history length over 18 when voyageProfitFactor return 7', t => {
    const voyage = {
        zone: 'china',
        length: 10,
    };

    let result = voyageProfitFactor(voyage, history);
    t.is(result, 7);
})

rankTest('given voyage with east-indies and history length over 14 when voyageProfitFactor return 4', t => {
    const voyage = {
        zone: 'east-indies',
        length: 10,
    };
    let result = voyageProfitFactor(voyage, history);
    t.is(result, 4);
})

rankTest('given voyage with east-indies and length 10 when voyageRisk return 9', t => {
    const voyage = {
        zone: 'east-indies',
        length: 10,
    };

    let result = voyageRisk(voyage);
    t.is(result, 9);
})

rankTest('given voyage with china and history length 4 when captainHistoryRisk return 4', t => {
    const voyage = {
        zone: 'china',
        length: 10,
    };
    let history = [
        {
            zone: 'east-indies',
            profit: 5,
        }, {
            zone: 'west-indies',
            profit: 15,
        }, {
            zone: 'china',
            profit: -2,
        },
        {
            zone: 'west-africa',
            profit: 7,
        },
    ];

    let result = captainHistoryRisk(voyage, history);
    t.is(result, 4);
})
rankTest('given voyage with china and history length 5 when captainHistoryRisk return -1', t => {
    const voyage = {
        zone: 'china',
        length: 10,
    };
    let history = [
        {
            zone: 'east-indies',
            profit: 5,
        }, {
            zone: 'west-indies',
            profit: 15,
        }, {
            zone: 'china',
            profit: 2,
        },
        {
            zone: 'west-africa',
            profit: 7,
        },
        {
            zone: 'west-africa',
            profit: 7,
        },
    ];

    let result = captainHistoryRisk(voyage, history);
    t.is(result, 0);
})

rankTest('given voyage with china and history when rating return B', t => {

    const result = rating(voyage, history);
    const expect = 'B';
    t.is(result, expect);
});



rankTest('given voyage with east-indies and history when rating return A', t => {
    const voyage = {
        zone: 'east-indies',
        length: 1,
    };
    const result = rating(voyage, history);
    const expect = 'A';
    t.is(result, expect);
});