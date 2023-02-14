// SPDX-License-Identifier: UNLICENSED

pragma solidity 0.8.17;

/// @title Ballot Box
/// @author Musa AbdulKareem (@WiseMrMusa)
/// @notice This creates a Ballot Box for users to vote for their preffered candidate 
interface IBallot {
    struct ConterderData {
        string name;
        uint8 voteWeight;
    }
    function vote(string[] calldata _voteRank) external;
    function winner() external view;
    function votersAddress() external view returns (address[] memory);
    function name() external view returns (string memory);
}