# ArbiGHOst

Allow anytone to arbitrage with GHO 

## How it works

On Aave, 1 GHO will always be worth 1USD.  On other exchanges, it is up to users to make sure the price is 1USD.
If it is too high on a DEX, a user can get GHO for 1USD from Aave and sell it for more on the DEX. 
If it is too low on a DEX, a user can take out a temporary loan of GHO, make a profit by liquiading other users, and buying GHO on a DEX to repay the temporary loan.

### FlashMint

You can mint GHO for 1USD worth of ETH.
You can flashMint GHO and return with fee, in the same transaction. No capital required. 

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

- flashMint GHO
- liqidate other borrowers
- buy GHO on DEX at a discount using some of the funds from liquidating
- repay flashMint + fee
- keep the remaining funds from liquidating


