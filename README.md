# LFGHOTip

|Links||
|--|--|
|live website link|https://reliable-figolla-c2b336.netlify.app/|
|0.1 GHO contract|https://sepolia.etherscan.io/address/0x820ce4e674ddc611ee2827f21faa6c9df6bb490b|
|0.5 GHO contract|https://sepolia.etherscan.io/address/0x196f362Ebc50A4e166BD8cBB88De3BE3d1851d76|

## How it's made
GHOTip leverages Zero-Knowledge Proofs (ZKP) for secure and anonymous transactions. It utilizes a smart contract system where users deposit tips in $GHO stablecoin into server's vault contract(GHOTip contract) anonymously. Each deposit generates two key elements: a proof and a nullifier. The proof confirms the tip while maintaining user privacy, and the nullifier prevents the reuse of the same proof, ensuring transaction integrity. Drawing inspiration from Tornado Cash, this approach introduces enhanced anonymity and security. Every vault contract(GHOTip contract) would only accept fixed amount of tips in each deposit, and currently we provide 0.1GHO and 0.5GHO, two kinds contracts. By using fixed tip amounts, GHOTip further safeguards user anonymity, making the tipping process uniform and discreet.

### Techs used and where they're located
*If you want to run it locally, please set the .env file according to the .env.example file under each folders*

### zk (under circuit folder, circom, snarkjs)
They're originally written with **circom** and built with the help of **snarkjs**.
The main circom files are deposit.circom and withdraw.circom 
deposit_js and withdraw_js folders are automatically generated by snarkjs according to deposit.circom and withdraw.circom. All files are used in frontend.
The Verifier.sol is automatically generated by snarkjs and is used as a helper contracts in GHOTip. 

### contracts (under contracts folder)
Managed by hardhat
The main contract is GhoTip.sol under contracts folder, the rest solidity files are helpers/utils. 
deploy.js is under scripts folder to help you deploy the contracts.

### frontend
|||
|--|--|
|framwork|Nextjs|
|zk helper|snarkjs and files mentioned in above **zk**|
|coonecting wallet|ConnectKit|
|interaction with blockchain| wagmi|


