/* Do not modify this code */

const balance = {
  checking: {
    balance: 2200,

  },
  savings: {
    balance: 880,

  },
  emergency: {
    balance: 400,

  },
  retirement: {
    balance: 320,

  }
};

const checkBalances = (current, balance) => {
  return current.checking.balance === balance.checking.balance &&
    current.savings.balance === balance.savings.balance &&
    current.emergency.balance === balance.emergency.balance &&
    current.retirement.balance === balance.retirement.balance
}

export {
  balance, 
  checkBalances
};