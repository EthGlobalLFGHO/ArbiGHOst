# ArbiGHOst

Allow anytone to arbitrage with GHO 

## How it works

On Aave, 1 GHO will always be worth 1USD.  On other exchanges, it is up to users to make sure the price is 1USD.
If it is too high on a DEX, a user can get GHO for 1USD from Aave and sell it for more on the DEX. 
If it is too low on a DEx, a user can buy it there and less it for more on Aave.

- use ETH as to mint GHO at 1USD
- flashMint GHO

You can mint GHO for 1USD worth of ETH.

You can flashMint GHO and return with fee, in the same transaction. No capital required. 
- this only works when the amount is high enough to change the price within the same transaction

## GHO above peg

This is the straight forward case. 

### With flashMint
- flashMint GHO 
- sell for over 1USD on DEX
- price on DEX should lower
- buy on DEX for closer to 1USD
- return loan + fee
- keep the difference


### With Eth
- use ETH to mint GHO at 1USD
- sell GHO on DEX for more than 1USD, get more ETH back than spent to mint GHO 

## GHO below peg

### With flashMint
- flashLoan ETH
- flashMint GHO
- use loaned ETH to buy GHO for less than 1USD
- GHO price on DEX should rise 
- Use flashMinted GHO to buy ETH 
- repay flashLoan + fee
- repay flashMint + fee

This has a lot going on and is likely to fail.

### With Eth
- use ETH to buy GHO on DEX for less than 1USD 
- flashMint GHO at 1USD
- use GHO from DEX to return flashMint + fee
- keep flashMint GHO

### With Eth Example
- use 1000 USDC to buy 1020 GHO on DEX at 0.98 USDC/GHO

or

- use ETH to mint GHO at 1USD when near peg
- wait until GHO below peg on a DEX
- use more ETH to buy GHO below 1USD (get more GHO)
- repay GHO mint, get ETH back, keep raimining GHO
