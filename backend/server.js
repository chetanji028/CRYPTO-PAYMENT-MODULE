const express = require("express");
const cors = require("cors");
const { ethers } = require("ethers");

const app = express();
app.use(cors());
app.use(express.json());

// Hardhat local provider
const provider = new ethers.providers.JsonRpcProvider("http://127.0.0.1:8545");
const privateKey = "0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80"; // Hardhat account
const wallet = new ethers.Wallet(privateKey, provider);

const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3"; // Replace with your deployed contract address

const abi = [
  "function mint(address to, uint256 amount) public",
  "function transfer(address to, uint256 amount) public",
  "function balanceOf(address user) public view returns (uint256)"
];

const ledger = new ethers.Contract(contractAddress, abi, wallet);

// Routes
app.post('/mint', async (req, res) => {
  try {
    const { to, amount } = req.body;
    if (!ethers.utils.isAddress(to)) {
      return res.status(400).send({ error: "Invalid address" });
    }
    const tx = await ledger.mint(to, ethers.utils.parseUnits(amount.toString(), 18));
    await tx.wait();
    res.send({ status: 'minted', txHash: tx.hash });
  } catch (err) {
    console.error("Mint Error:", err);
    res.status(500).send({ error: "Minting failed", reason: err.message });
  }
});

app.post('/transfer', async (req, res) => {
  try {
    const { to, amount } = req.body;
    if (!ethers.utils.isAddress(to)) {
      return res.status(400).send({ error: "Invalid address" });
    }
    const tx = await ledger.transfer(to, ethers.utils.parseUnits(amount.toString(), 18));
    await tx.wait();
    res.send({ status: 'transferred', txHash: tx.hash });
  } catch (err) {
    console.error("Transfer Error:", err);
    res.status(500).send({ error: "Transfer failed", reason: err.message });
  }
});

app.get('/balance/:address', async (req, res) => {
  try {
    const address = req.params.address;
    if (!ethers.utils.isAddress(address)) {
      return res.status(400).send({ error: "Invalid address" });
    }
    const balance = await ledger.balanceOf(address);
    res.send({ balance: ethers.utils.formatUnits(balance, 18) });
  } catch (err) {
    console.error("Balance Error:", err);
    res.status(500).send({ error: "Balance fetch failed", reason: err.message });
  }
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
