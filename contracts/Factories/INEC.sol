
// SPDX-License-Identifier: UNLICENSED

pragma solidity 0.8.17;

import { Ballot } from "../Ballot.sol";
import { IINEC } from "../Interfaces/IINEC.sol";
contract INEC is IINEC {
    Ballot[] private ballotFactory;

    function createBallot(
        string memory _name,
        string[] memory _contenders,
        uint256 _period,
        uint8 _tokenPerVote
    ) external {
        Ballot newBallotBox = new Ballot(
            _name,
            _contenders,
            _period,
            _tokenPerVote,
            0xDFB1bd4120dF6628bd063CB532724a87A9b4471F
        );
        emit child(newBallotBox);
        ballotFactory.push(newBallotBox);
    }
}