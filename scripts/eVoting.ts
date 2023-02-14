import { ethers } from "hardhat";

const VotingToken = {
    name : "INEC Voting Token",
    symbol : "PVC",
    decimal : 2,
    totalSupply_ : 6_000_000
}

async function main() {
    const [owner, acct1, acct2, acct3] = await ethers.getSigners();

    const PVCToken = await ethers.getContractFactory("PVC");
    const deployedPVCToken = await PVCToken.deploy(
        VotingToken.name, 
        VotingToken.symbol, 
        VotingToken.decimal, 
        VotingToken.totalSupply_
    );
    await deployedPVCToken.deployed;
    console.log(`The PVC Token has been deployed to ${deployedPVCToken.address}`);
    const PVCTokenAddress = deployedPVCToken.address;


    const INEC = await ethers.getContractFactory("INEC");
    const INEC_ = await INEC.deploy();
    await INEC_.deployed();
    console.log(`The INEC Contract has been deployed to ${INEC_.address}`);
    const INECAddress = INEC_.address;

    const INECFactory = await ethers.getContractAt("IINEC",INECAddress);

    // function createBallot(
    //     string memory _name, 
    //     string[] memory _contenders, 
    //     uint256 _period, 
    //     uint8 _tokenPerVote
    //     ) external;

    let createNewBallot = await INECFactory.createBallot(
        "General Election",
        ["APC", "PDP", "LP"],
        86_400,
        6
    )
    console.log(await createNewBallot.wait().then(e => e.events? e.events[0].args? e.events[0].args[0]:null:null));

    const newBallot1Address = await createNewBallot.wait().then(e => e.events? e.events[0].args? e.events[0].args[0]:null:null);

    const BallotBox1 = await ethers.getContractAt("IBallot",newBallot1Address);
    console.log(await BallotBox1.name())
    console.log(await BallotBox1.vote(["APC", "PDP", "LP"]));

}

main().catch((e)=> {
    console.log(e);
    process.exitCode = 1;
})