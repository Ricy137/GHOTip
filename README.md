# GHOTip

**For quick and comprehensive understanding** : please review our project page in [ETHGlobal](https://ethglobal.com/showcase/ghotip-5vix5)

|Links||
|--|--|
|live website link|https://reliable-figolla-c2b336.netlify.app/|
|0.1 GHO contract|https://sepolia.etherscan.io/address/0x820ce4e674ddc611ee2827f21faa6c9df6bb490b|
|0.5 GHO contract|https://sepolia.etherscan.io/address/0x196f362Ebc50A4e166BD8cBB88De3BE3d1851d76|

## How it's made
GHOTip leverages Zero-Knowledge Proofs (ZKP) for secure and anonymous transactions. It utilizes a smart contract system where users deposit tips in $GHO stablecoin into server's vault contract(GhoTip contract) anonymously. Drawing inspiration from Tornado Cash, this approach introduces enhanced anonymity and security. Every vault contract(GHOTip contract) would only accept fixed amount of $GHO in each deposit, and currently we provide 0.1GHO and 0.5GHO, two kinds pool. By using fixed tip amounts, GHOTip further safeguards user anonymity, making the tipping process uniform and discreet. And users can safely verify their payment of Tips with proof, which won't reveal users' identity during depositing. 

### Techs used and where they're located
*Detailed explaining files for local setup is in README.md under each folders*

### zk (under circuit folder; circom, snarkjs)
They're originally written in **circom** and using **snarkjs** for G16 setup.
The main circom files are deposit.circom and withdraw.circom 
deposit_js and withdraw_js folders are automatically generated during the compiling of circom files (deposit.circom and withdraw.circom ). And files under the two folders plus setup_final.zkey file are used in frontend for proof generation.
The Verifier.sol is automatically generated by snarkjs and is used as a helper contract in GHOTip. 

### contracts (under contracts folder)
Managed by hardhat, the main contract is GhoTip.sol, and the rest solidity files are helpers/utils. 
|contract name|description|
|--|--|
|GhoTip.sol| main contract for all interactions|
|MiMSonge.sol| helper contract for hashing|
|ReentrancyGuard.sol| OpenZeppelin contract|
|IGhoToken.sol|GhoToken interface|
|Verifier.sol| helper contract for verification, generated by **snarkjs**|

deploy.js is under scripts folder to help you deploy the contracts.

### frontend
|||
|--|--|
|framwork|Nextjs|
|zk helper|snarkjs and files mentioned in above **zk**|
|coonecting wallet|ConnectKit|
|interaction with blockchain| wagmi|


