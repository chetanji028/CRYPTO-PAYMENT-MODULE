import React, { useState } from 'react';
import { mintTokens, transferTokens, getBalance } from '../services/ledgerService';

const PaymentPage = () => {
  const [address, setAddress] = useState('');
  const [amount, setAmount] = useState('');
  const [balance, setBalance] = useState(null);
  const [message, setMessage] = useState('');

  const handleMint = async () => {
    setMessage('');
    try {
      const res = await mintTokens(address.trim(), amount.trim());
      setMessage(`Minted successfully: ${res.data.txHash}`);
    } catch (err) {
      console.error("Mint Error:", err.response?.data || err.message);
      setMessage('Error minting tokens: ' + (err.response?.data?.reason || 'Unknown'));
    }
  };

  const handleTransfer = async () => {
    setMessage('');
    try {
      const res = await transferTokens(address.trim(), amount.trim());
      setMessage(`Transferred successfully: ${res.data.txHash}`);
    } catch (err) {
      console.error("Transfer Error:", err.response?.data || err.message);
      setMessage('Error transferring tokens: ' + (err.response?.data?.reason || 'Unknown'));
    }
  };

  const handleCheckBalance = async () => {
    try {
      const res = await getBalance(address.trim());
      setBalance(res.data.balance);
      setMessage('');
    } catch (err) {
      console.error("Balance Error:", err.response?.data || err.message);
      setMessage('Error fetching balance: ' + (err.response?.data?.reason || 'Unknown'));
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Crypto Payment Module</h2>
      <input placeholder="Address" value={address} onChange={(e) => setAddress(e.target.value)} />
      <input placeholder="Amount" type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
      <div style={{ marginTop: "10px" }}>
        <button onClick={handleMint}>Mint</button>
        <button onClick={handleTransfer}>Transfer</button>
        <button onClick={handleCheckBalance}>Check Balance</button>
      </div>
      {balance !== null && <p>Balance: {balance} tokens</p>}
      <p style={{ color: message.startsWith('Error') ? 'red' : 'green' }}>{message}</p>
    </div>
  );
};

export default PaymentPage;
