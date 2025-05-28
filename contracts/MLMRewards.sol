pragma solidity ^0.8.0;

contract TruYanMLM {
    struct Referral {
        address upline;
        uint256 totalEarned;
    }

    mapping(address => Referral) public referrals;
    uint256[] public mlmRates = [500, 400, 300, 200, 100, 50]; // 5% → 0.5% (6 levels)

    // Register paid member (NGN rewards)
    function registerPaidMember(address upline) external payable {
        require(msg.value == 1000 ether, "Membership cost: 1000 NGN");
        referrals[msg.sender] = Referral(upline, 0);
        distributeNGNRewards(upline, msg.value);
    }

    // Distribute NGN rewards up 6 levels
    function distributeNGNRewards(address upline, uint256 amount) private {
        for (uint i = 0; i < 6 && upline != address(0); i++) {
            uint256 reward = (amount * mlmRates[i]) / 10000; // 5% = 500/10000
            payable(upline).transfer(reward);
            referrals[upline].totalEarned += reward;
            upline = referrals[upline].upline;
        }
    }
}
