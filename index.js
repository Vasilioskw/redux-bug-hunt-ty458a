const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>Redux Bank & Trust</h1>
<p>Open the console to get started</p>`;

import { createStore } from 'redux';
import {balance, checkBalances} from './balance';
import {createDeposit, createWithdrawal} from './actions';
import {accounts} from './reducer';

console.log('Welcome to Redux Bank & Trust');

const store = createStore(accounts);

store.subscribe(() => {
  const state = store.getState();
  if (checkBalances(state, balance)) {
    console.log('Accounts Balanced!');
    console.log(state);
  }
})

const transactions = {
  deposits: [
    2000,
    2000
  ],
  withdrawals: [
    100,
    10,
    5.5,
    8,
    62,
    14.5
  ]
}

transactions.deposits.forEach((txn) => {
  let deposit = createDeposit(txn);
  store.dispatch(deposit)
})
transactions.withdrawals.forEach((txn) => {
  let withdrawal = createWithdarwal(txn);
  store.dispatch(withdrawal)
})
