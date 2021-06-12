const defaultState = {
  checking: {
    balance: 0
  },
  savings: {
    balance: 0
  },
  emergency: {
    balance: 0
  },
  retirement: {
    balance: 0
  }
}
// All Deposits must be split according to the following rules
// Checking - 60%
// Savings - 22%
// Emergency - 10%
// Retirement - 8%
function accounts(state = defaultState, action) {
  switch (action.type) {
    
  }

  return state;
}

export { accounts };
