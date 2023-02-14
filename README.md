# Voting Platform


https://goerli.etherscan.io/address/0xDFB1bd4120dF6628bd063CB532724a87A9b4471F#code

https://goerli.etherscan.io/address/0x9530E44031Bc09e2dafcc3b88Edd31A556C4398a#code


This is a token voting platform that allows holders of the token to vote and 3 contenders can be voted for


## Reward System
1 person - 3 points
2 person - 2 points
3 person - 1 point

Votes are paid for (with token) and you can't vote more than once

- Disctribute the token and how much
- Registration for contenders 
- Winner is returned after voting
- Return all the total votes
- Return votes for each contenders
- Return winner
- Burn the token total Supply
- Require voteStart and voteEnd

================

- Write the Smart Contract
- Write the Script 
- Deploy and Verify



==> A Token Generation System (PVC)
- When you pay 1 Gwei, it gives 6 Tokens 
- After the voting, the token is burnt


==> A Voting System (Ballot Box)
- Anybody can create a Ballot Box

- The creator should be able to:
-- Register contender (3)
-- A function that returns the ballot winner
-- A function that returns the addresses that voted for each contender
-- voteStart and voteEnd

--- name
--- contenders
--- amountOfTokenPerVote
--- period

ballotBox -> listOfContenders -> countOfEach

{
    name: APC
}

["APC", "PDP", "LP"]

address, name, noOfVotes

keccak256Hash -> {name, noOfVotes}