// Copyright 2015-2017 Parity Technologies (UK) Ltd.
// This file is part of Parity.

// Parity is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.

// Parity is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.

// You should have received a copy of the GNU General Public License
// along with Parity.  If not, see <http://www.gnu.org/licenses/>.

export default {
  busy: {
    posted: `你的交易已被公布至网络`, // Your transaction has been posted to the network
    title: `函数执行正在进行中`, // The function execution is in progress
    waitAuth: `正在等待Parity Signer授权` // Waiting for authorization in the Parity Signer
  },
  button: {
    cancel: `取消`, // cancel
    done: `完成`, // done
    next: `下一步`, // next
    post: `公布交易`, // post transaction
    prev: `上一步` // prev
  },
  details: {
    address: {
      hint: `来自账户`, // from account
      label: `将要交易的账户` // the account to transact with
    },
    advancedCheck: {
      label: `高级发送选项` // advanced sending options
    },
    amount: {
      hint: `此交易将会发送的数量`, // the amount to send to with the transaction
      label: `交易价值（ETH）` // transaction value (in ETH)
    },
    function: {
      hint: `此合约将会调用的函数`, // the function to call on the contract
      label: `将执行的函数` // function to execute
    }
  },
  rejected: {
    state: `你可以安全的关闭此视窗，函数将不会被执行。`, // You can safely close this window, the function execution will not occur.
    title: `执行失败` // The execution has been rejected
  },
  steps: {
    advanced: `高级选项`, // advanced options
    complete: `完成`, // complete
    rejected: `失败`, // rejected
    sending: `发送中`, // sending
    transfer: `函数详情` // function details
  }
};
