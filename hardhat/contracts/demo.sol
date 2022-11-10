// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;



contract Demo {
    string public message;
    constructor(string memory initialMessage){
        message = initialMessage;
    }
    function addMessage(string memory updatedMessage)public{
        message = updatedMessage;
    }

    
}
