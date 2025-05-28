// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract TruYanWallet {
    // Each user controls their own funds
    mapping(address => uint256) private balances;

    // Users deposit MZLx tokens (admin CANNOT access)
    function deposit(uint256 amount) external {
        require(MZLxToken.transferFrom(msg.sender, address(this), amount), "Transfer failed");
        balances[msg.sender] += amount;
    }

    // Users withdraw THEIR OWN funds only
    function withdraw(uint256 amount) external {
        require(balances[msg.sender] >= amount, "Insufficient balance");
        balances[msg.sender] -= amount;
        require(MZLxToken.transfer(msg.sender, amount), "Transfer failed");
    }

    // Admin CANNOT touch funds (no functions to withdraw others' balances)
}
