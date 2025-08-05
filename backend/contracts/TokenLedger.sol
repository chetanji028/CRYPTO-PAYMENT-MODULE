// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract TokenLedger {
    mapping(address => uint256) private balances;
    address public owner;

    constructor() {
        owner = msg.sender;
    }

    function mint(address to, uint256 amount) public {
        require(msg.sender == owner, "Only owner can mint");
        balances[to] += amount;
    }

    function transfer(address to, uint256 amount) public {
        require(balances[msg.sender] >= amount, "Insufficient balance");
        balances[msg.sender] -= amount;
        balances[to] += amount;
    }

    function balanceOf(address user) public view returns (uint256) {
        return balances[user];
    }
}
