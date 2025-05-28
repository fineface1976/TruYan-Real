// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract MZLxToken is ERC20, Ownable {
    uint256 public constant MAX_SUPPLY = 50_000_000 * 10**18; // 50M MZLx
    uint256 public icoPrice = 0.001 ether; // $0.001 initial price

    constructor() ERC20("MAZOL Token", "MZLx") {
        _mint(msg.sender, 10_000_000 * 10**18); // Team/Reserve
    }

    // Admin-only minting (capped at MAX_SUPPLY)
    function mint(address to, uint256 amount) external onlyOwner {
        require(totalSupply() + amount <= MAX_SUPPLY, "Exceeds max supply");
        _mint(to, amount);
    }

    // Update ICO price (oracle-fed in production)
    function setICOPrice(uint256 newPrice) external onlyOwner {
        icoPrice = newPrice;
    }
}
