// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

interface IBEP20 {
    function transfer(address to, uint256 amount) external returns (bool);
}

contract MZLxICO_V2 {
    IBEP20 public token;
    address public admin;
    uint256 public rate = 1000; // 1 NGN = 1000 MZLx
    
    constructor(address _token) {
        token = IBEP20(_token);
        admin = msg.sender;
    }
    
    function buyWithBNB() external payable {
        uint tokens = msg.value * rate;
        require(token.transfer(msg.sender, tokens), "Transfer failed");
    }
    
    function withdraw() external {
        require(msg.sender == admin);
        payable(admin).transfer(address(this).balance);
    }
}
