# 🚀 Crypto Payment Module

A full-stack dApp that allows minting, transferring, and checking balances of ERC-20 tokens using a React frontend, Node.js backend, and Hardhat smart contract deployment.

---

## 🧾 Features

- Mint tokens to an Ethereum address
- Transfer tokens to another address
- Check token balance of any address
- Local blockchain setup using Hardhat

---

#
---

## ⚙️ Prerequisites

- Node.js ≥ 16.x
- Hardhat
- MetaMask browser extension (for frontend interaction)
- Yarn or npm

---

## 🛠️ Installation

### 1. Clone the Repository

```bash
git clone https://github.com/chetanji028/crypto-payment-module.git
cd crypto-payment-module

2. Install Dependencies

# Root
npm install

# Backend
cd backend && npm install

# Frontend
cd ../frontend && npm install

Running the Project
Step 1: Start Local Hardhat Blockchain
npx hardhat node 

"This will start a local blockchain and print 20 funded accounts."

Step 2: Deploy the Token Smart Contract
In a new terminal, run:

npx hardhat run scripts/deploy.js --network localhost
"Copy the deployed contract address and update it in frontend and backend if required." 

Step 3: Start Backend Server
In a new terminal: 

cd backend
node server.js 

Step 4: Start Frontend React App
In a new terminal: 

cd frontend
npm start 
"The frontend will launch at http://localhost:3000 "

🔁 Testing Steps
Connect MetaMask

Switch to the local Hardhat network http://127.0.0.1:8545.

Import an account from the Hardhat accounts list using its private key.

Mint Tokens

Enter the address and token amount.

Click Mint.

Check Balance

Enter the address and click Check Balance.

Transfer Tokens

Enter recipient address and amount.

Click Transfer.

Check Balances Again

Ensure the transfer has occurred.


Default Test Addresses (from Hardhat)
Sender:
0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266

Receiver:
0x70997970C51812dc3A010C7d01b50e0d17dc79C8

Private Keys:
Can be copied from the terminal when npx hardhat node is run.

Tools Used
Hardhat

React.js

Node.js + Express

Ethers.js

MetaMask 
