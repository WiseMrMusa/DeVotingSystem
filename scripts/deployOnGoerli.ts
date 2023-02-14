import { ethers } from "hardhat";
import { anyValue } from '@nomicfoundation/hardhat-chai-matchers/withArgs';

const VotingToken = {
    name : "INEC Voting Token",
    symbol : "PVC",
    decimal : 2,
    totalSupply_ : 6_000_000
}

async function main() {

    // Get Accounts 
    const [owner, acct1, acct2, acct3] = await ethers.getSigners();

    // // Deploy the PVC Token Contract
    // const PVCToken = await ethers.getContractFactory("PVC");
    // const deployedPVCToken = await PVCToken.deploy(
    //     VotingToken.name, 
    //     VotingToken.symbol, 
    //     VotingToken.decimal, 
    //     VotingToken.totalSupply_
    // );
    // await deployedPVCToken.deployed;
    // console.log(`The PVC Token has been deployed to ${deployedPVCToken.address}`);
    // const PVCTokenAddress = deployedPVCToken.address;

    // Deploy the INEC Contract
    const INEC = await ethers.getContractFactory("INEC");
    const INEC_ = await INEC.deploy();
    await INEC_.deployed();
    console.log(`The INEC Contract has been deployed to ${INEC_.address}`);
    // const INECAddress = INEC_.address;

    // const INECFactory = await ethers.getContractAt("IINEC",INECAddress);


    // // Create a Ballot Box
    // let createNewBallot = await INECFactory.createBallot(
    //     "General Election",
    //     ["APC", "PDP", "LP"],
    //     86_400,
    //     8,
    //     PVCTokenAddress
    // )
    // console.log(await createNewBallot.wait().then(e => e.events? e.events[0].args? e.events[0].args[0]:null:null));

    // const newBallot1Address = await createNewBallot.wait().then(e => e.events? e.events[0].args? e.events[0].args[0]:null:null);

    // const BallotBox1 = await ethers.getContractAt("IBallot",newBallot1Address);
    // console.log(await BallotBox1.name());
    // console.log(await deployedPVCToken.balanceOf(owner.address));
    // console.log(await deployedPVCToken.buyToken({value: 1000}));
    // console.log(await deployedPVCToken.approve(BallotBox1.address,100));
    // console.log(await deployedPVCToken.balanceOf(owner.address));
    // console.log(await BallotBox1.vote(["APC", "PDP", "LP"]));
    // // console.log(await BallotBox1.vote(["APC", "PDP", "LP"]));
    // // console.log(await BallotBox1.vote(["APC", "PDP", "LP"]));
    // console.log(await deployedPVCToken.balanceOf(owner.address));
    // console.log(await BallotBox1.winner());

}

main().catch((e)=> {
    console.log(e);
    process.exitCode = 1;
})