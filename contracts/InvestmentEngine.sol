
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/security/ReentrancyGuard.sol";

contract TruYanInvestments is ReentrancyGuard {
    struct Investment {
        uint256 amount;
        uint256 startTime;
        uint256 vestingDays;
        bool claimed;
    }

    mapping(address => Investment[]) public investments;
    uint256 public specialInvestRate = 15; // 15% default

    // Admin-set interest rate for Special Invest
    function setSpecialRate(uint256 newRate) external onlyOwner {
        specialInvestRate = newRate;
    }

    // Regular Invest (30/60/365 days)
    function investRegular(uint256 vestingDays) external payable nonReentrant {
        require(vestingDays == 30 || vestingDays == 60 || vestingDays == 365, "Invalid vesting period");
        investments[msg.sender].push(Investment(msg.value, block.timestamp, vestingDays, false));
    }

    // Claim vested rewards
    function claimRewards(uint256 investId) external nonReentrant {
        Investment storage inv = investments[msg.sender][investId];
        require(!inv.claimed, "Already claimed");
        require(block.timestamp >= inv.startTime + (inv.vestingDays * 1 days), "Vesting not complete");
        
        uint256 reward = inv.amount + (inv.amount * getBonusRate(inv.vestingDays) / 100);
        (bool success, ) = msg.sender.call{value: reward}("");
        require(success, "Transfer failed");
        inv.claimed = true;
    }

    // Get bonus rate based on vesting period
    function getBonusRate(uint256 days) private pure returns (uint256) {
        if (days == 30) return 10;
        if (days == 60) return 25;
        if (days == 365) return 40;
        return 0;
    }
}
