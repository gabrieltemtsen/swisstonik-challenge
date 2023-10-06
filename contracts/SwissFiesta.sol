// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.19;
//swisstronik X TechFiesta Challenge
contract SwissFiesta {
    //declaring the variable as private
    string private bountyWinner;

    /**
     * @dev Constructor is used to set the initial message for the contract
     * @param _winner: The Discord handle of the winner to be set as thr bountyWinner variable
     */
    constructor(string memory _winner) payable{
        bountyWinner = _winner;
    }

    /**
     * @dev setWInner() updates the stored winner in the contract
     * @param _winner The new winner to replace the existing one
     */
    function setWinner(string memory _winner) public {
        bountyWinner = _winner;
    }

    /**
     * @dev getWinner() retrieves the currently stored winner in the contract
     * @return The winner 
     */
    function getWinner() public view returns(string memory){
        return bountyWinner;
    }
}