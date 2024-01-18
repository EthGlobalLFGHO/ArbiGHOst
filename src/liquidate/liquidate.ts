require('dotenv').config();
const { ethers } = require('ethers');
const { Pool, InterestRate } = require('@aave/contract-helpers');

// Configuration from .env file
const provider = new ethers.providers.JsonRpcProvider(process.env.RPC_ENDPOINT);
const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider);
const pool = new Pool(provider, {
  POOL: process.env.AAVE_POOL_ADDRESS,
  WETH_GATEWAY: process.env.WETH_GATEWAY_ADDRESS,
});

async function borrowGHO(amount, interestRateMode, onBehalfOf) {
  const txs = await pool.borrow({
    user: wallet.address,
    reserve: process.env.GHO_RESERVE_ADDRESS,
    amount,
    interestRateMode,
    onBehalfOf,
  });
  const txResponse = await wallet.sendTransaction(borrowTx);
  await txResponse.wait();
  console.log('Borrow transaction completed:', txResponse.hash);
}

async function repayGHO(amount, interestRateMode, onBehalfOf) {
  const txs = await pool.repay({
    user: wallet.address,
    reserve: process.env.GHO_RESERVE_ADDRESS,
    amount,
    interestRateMode,
    onBehalfOf,
  });
  const txResponse = await wallet.sendTransaction(repayTx);
  await txResponse.wait();
  console.log('Repay transaction completed:', txResponse.hash);
}

async function main() {
  await borrowGHO('100', InterestRate.Variable, wallet.address);
  await repayGHO('100', InterestRate.Variable, wallet.address);
}

main().then(() => console.log('Borrow and Repay process completed.'));
