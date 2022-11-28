const currencyUnit = {
    "PENNY": 1,
    "NICKEL": 5,
    "DIME": 10,
    "QUARTER": 25,
    "ONE": 100,
    "FIVE": 500,
    "TEN": 1000,
    "TWENTY": 2000,
    "ONE HUNDRED": 10000
}

function checkCashRegister(price, cash, cid) {
    let changeSum = cash * 100 - price * 100;
    let changeSumTotal = changeSum;
    let change = [];
    let status = '';

    let filteredCid = cid.filter(element => element[1] !== 0).reverse();

    let cidSum = 0;
    filteredCid.forEach(element => {
        let currency = element[0];
        let currencySum = element[1] * 100;
        cidSum += currencySum;
        let amount = 0;
        while (changeSum >= currencyUnit[currency] && currencySum > 0) {
            amount += currencyUnit[currency];
            changeSum -= currencyUnit[currency];
            currencySum -= currencyUnit[currency];
        }
        if (amount !== 0) {
            change.push([currency, amount / 100])
        }
    });

    if (changeSum > 0) {
        status = 'INSUFFICIENT_FUNDS';
        change = [];
    } else if (changeSum == 0 && changeSumTotal == cidSum) {
        status = 'CLOSED';
        change = cid;
    } else {
        status = 'OPEN';
    }

    return { 'status': status, 'change': change };
}

checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);