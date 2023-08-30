import "./App.css";
import Header from "./components/header";
import StakeBanner from "./components/stakebanner";
import StakeHeader from "./components/stakeheader";
import StakeStats from "./components/stakestats";
import StakeBody from "./components/stakebody";
import Footer from "./components/footer";
import "./styles/App.css";

import { configVars } from "./config/config.ts";
import React, { useEffect, useState } from "react";
import { ethers, providers } from "ethers";
import Web3Modal from "web3modal";
import WalletConnect from "@walletconnect/web3-provider";
import ClipLoader from "react-spinners/ClipLoader";

// Utils for Node

require("dotenv").config({ path: ".env" });

function App() {
  const [loading, setLoading] = useState(false);
  const [availableNFTs, setAvailableNFTs] = useState("");
  const [walletAddress, setAddress] = useState("");
  const [signer, setSigner] = useState("");
  const [claimableReward, setClaimableReward] = useState("");
  const [trpzBalance, setTrpzBalance] = useState("");
  const [library, setLibrary] = useState("");
  const [totalReward, setTotalReward] = useState(0);

  const [stakedNFTList, setStakedNFTList] = useState([]);
  const [stakedNFTCount, setStakedNFTCount] = useState([]);
  const [stakedNFTs, setStakedNFTs] = useState([]);
  const [NFTObjects, setNFTObjects] = useState([]);
  const [batchStakeObjects, setBatchStakeObject] = useState([]);
  const [batchUnstakeObjects, setBatchUnstakeObject] = useState([]);
  const [disabled, setDisabled] = useState(true);

  const rewardArray = {
    "0x75233b3c8b60b7191704c0f6100850dc769bb857": 4,
    "0xf8e63021c3d757b63eb53a9124271251a964d572": 2,
    "0xbd6b9a1a0477d64e99f660b7b7c205f4604e4ff3": 2,
    "0x51112bf32b9a1c64716df2e6b82e63a04bd384fd": 5,
    "0xea4df145322ec9dfce037b062b08083141c6af8f": 5,
    "0x96628048830a499b156abdc04cc169c18c3a17f2": 5,
    "0xeb850b8f7d00b4faf242888bef7efbf229eb1e41": 1,
    "0x45958cb5ede8dc9e1a797c1526d4523db1471f15": 2,
    "0xdccced571dcbc82bbeadf95af20ee4442e21208c": 2,
    "0x30ab0d8c808ec024365d45a105c559bdf06bcb14": 2,
    "0x714f995cc3f551fc6e3f3d4c4955c51bbdc8be6f": 1,
    "0x2fff5fe8a3e13a10509e4297df9d1fdaf1ee7dc4": 5,
    "0xeb54ea91c92ce404ba7ad7b0ef2e36fd75c889a7": 5,
    "0xe13a2bf710c4d1fd3a04a85e14489b4d352ca2f0": 2,
    "0x1fe73d4cc73ea313056e41fe82e58d59d29c6592": 2,
    "0xf39363abc3434c600e731068fb8d25d4d8b2b668": 99,
    "0xb72cddd1113b0906f5b82f507ad90c5cc65b22fb": 2,
    "0x2a1ba5c6474949949e290e9a5e72fe9c631c9ab2": 2,
    "0x3cde8ea53ae063698334ddf7114b7051400be78b": 2,
    "0x3ffcb84507c6d5a2b963d5f367feffa496e964c1": 20,
    "0xa808030692001dd562f437fc676cd63eb232bc2a": 15,
    "0x8721b9ad32d1c7869f19d62ac4b764e3038cc1d2": 10,
    "0x7da8e3acda33ffa01396ff00e2c4b36ad899f8ad": 10,
    "0xf038c0cb2935fb8bf9b6e47bca1df0835f359f92": 2,
    "0xaa6cb884573c97e0b26f771acc0c5c94f6ae8ffd": 2,
    "0x939b90c529f0e3a2c187e1b190ca966a95881fde": 4,
  };

  const providerOptions = {
    walletconnect: {
      package: WalletConnect,
      options: {
        rpc: {
          25: "https://evm.cronos.org/",
        },
        chainId: 25,
        network: "cronos",
        qrcode: true,
      },
    },
  };

  const web3Modal = new Web3Modal({
    network: "cronos",
    providerOptions,
  });

  useEffect(() => {
    async function getBasics() {
      getTrpzBalance();
      await getStakedIds();
    }
    getBasics();
  }, [walletAddress]);

  useEffect(() => {
    async function getAvailable() {
      await getAvailableInfo();
      await getStakedInfo();
      await getClaimableReward();
      setLoading(false);
    }
    getAvailable();
  }, [stakedNFTList]);

  async function connectWallet() {
    try {
      web3Modal.clearCachedProvider();
      const provider = await web3Modal.connect();
      const library = new providers.Web3Provider(provider);
      const { chainId } = await library.getNetwork();
      if (chainId !== 25) {
        alert("Use Cronos network to connect");
      }
      const accounts = await library.listAccounts();
      const signer = library.getSigner();
      setSigner(signer);
      setLibrary(library);
      setAddress(accounts[0]); // TODO: Change back to accounts[0]
    } catch (error) {
      console.log(error);
    }
  }

  async function disconnectWallet() {
    web3Modal.clearCachedProvider();
    setAddress("");
    setTrpzBalance(0);
    setClaimableReward(0);
    setAvailableNFTs(0);
    setTotalReward(0);
    setStakedNFTCount(0);
    window.location.reload();
  }

  async function getTrpzBalance() {
    if (walletAddress === "") return;
    const trpzToken = new ethers.Contract(
      configVars.erc20.trpzToken,
      configVars.abi.trpzToken,
      library
    );
    const balance = await trpzToken.balanceOf(walletAddress);
    setTrpzBalance(balance.toNumber());
  }

  async function getStakedIds() {
    if (walletAddress === "") return;
    const trpzStake = new ethers.Contract(
      configVars.erc20.trpzStake,
      configVars.abi.trpzStake,
      library
    );
    try {
      const response = await trpzStake.getStakedList(walletAddress);
      setStakedNFTList(response);
      setStakedNFTCount(response.length);
      setLoading(true);
    } catch (error) {
      console.log(error);
      setLoading(true);
    }
  }

  async function getStakedInfo() {
    if (walletAddress === "") return;
    const trpzStake = new ethers.Contract(
      configVars.erc20.trpzStake,
      configVars.abi.trpzStake,
      library
    );
    try {
      let stakedObjects = [];
      let rewardSum = 0;
      for (let i = 0; i < stakedNFTList.length; i++) {
        try {
          const [tokenId, contractAddress] = await trpzStake.getStakedNFT(
            stakedNFTList[i]
          );
          const options = {
            method: "GET",
            headers: { accept: "application/json" },
          };
          const response = await fetch(
            `https://api.ebisusbay.com/nft?collection=${contractAddress}&tokenId=${tokenId.toString()}`,
            options
          )
            .then((response) => response.json())
            .then((response) => response.nft)
            .catch((err) => console.error(err));

          let stakedObject = {
            name: response.name,
            tokenId: tokenId.toNumber(),
            tokenAddress: contractAddress,
            tokenImage: response.image,
            dailyReward: rewardArray[contractAddress.toLowerCase()],
            stakingId: await stakedNFTList[i].toNumber(),
          };
          stakedObjects.push(stakedObject);
          rewardSum += await stakedObject.dailyReward;
        } catch (error) {
          console.log(error);
        }
      }
      setStakedNFTs(stakedObjects);
      setTotalReward(rewardSum);
    } catch (error) {
      alert("An error occured, please reload the page");
      console.log(error);
    }
  }

  async function getAvailableInfo() {
    if (walletAddress === "") return;
    const whitelistArray = configVars.whitelist;
    let addressString = "";
    whitelistArray.forEach(async (contractAddress) => {
      addressString = addressString + contractAddress + ",";
    });
    addressString = addressString.slice(0, -1);
    const options = { method: "GET", headers: { accept: "application/json" } };
    let NFTs = await fetch(
      `https://api.ebisusbay.com/wallets?wallet=${walletAddress}&collection=${addressString}&pageSize=500`,
      options
    )
      .then((response) => response.json())
      .then((response) => response.data.erc721)
      .catch((err) => console.error(err));

    let objects = [];
    for (let i = 0; i < NFTs.length; i++) {
      try {
        let nftObject = {
          name: NFTs[i].name,
          tokenId: NFTs[i].nftId,
          tokenAddress: NFTs[i].nftAddress,
          tokenURI: NFTs[i].token_uri,
          tokenImage: NFTs[i].image,
          dailyReward: rewardArray[NFTs[i].nftAddress.toLowerCase()],
        };
        objects.push(nftObject);
      } catch (error) {
        console.log(error);
      }
    }

    // while(NFTs.next) {
    //     NFTs = await NFTs.next()
    //     for (let i = 0; i < NFTs.result.length; i++) {
    //         try {
    //         if (Object.values(whitelistArray).indexOf(NFTs.result[i].token_address.toString()) > -1) {
    //             const dailyReward = await trpzStake.dailyContractRewards(NFTs.result[i].token_address)
    //             let nftImage = ""
    //             try {
    //                 nftImage = await getNFTImage(NFTs.result[i].token_uri)
    //             } catch (error) {
    //                 console.log(error)
    //             }

    //             let nftObject = {
    //                 name: NFTs.result[i].name,
    //                 symbol: NFTs.result[i].symbol,
    //                 tokenId: NFTs.result[i].token_id,
    //                 tokenAddress: NFTs.result[i].token_address,
    //                 tokenURI: NFTs.result[i].token_uri,
    //                 tokenImage: nftImage,
    //                 dailyReward: dailyReward.toNumber(),
    //                 metadata: NFTs.result[i].metadata
    //             }
    //             objects.push(nftObject)
    //         }
    //         } catch (error) {
    //             console.log(error)
    //         }
    //     }
    // }
    setNFTObjects(objects);
    setAvailableNFTs(objects.length);
  }

  async function getClaimableReward() {
    if (walletAddress === "") return;
    try {
      const trpzStake = new ethers.Contract(
        configVars.erc20.trpzStake,
        configVars.abi.trpzStake,
        library
      );
      const claimedRewards = (
        await trpzStake.ownerToRewards(walletAddress)
      ).toNumber();
      const reward = (await trpzStake.getRewards(walletAddress)).toNumber();
      const sumRewards = reward + claimedRewards;
      setClaimableReward(sumRewards);
    } catch (error) {
      console.log(error);
    }
  }

  async function claimRewards() {
    if (walletAddress === "") return;
    const trpzStake = new ethers.Contract(
      configVars.erc20.trpzStake,
      configVars.abi.trpzStake,
      signer
    );
    try {
      let response = await trpzStake.connect(signer).updateRewards();
      alert(
        "Just updating your rewards before you claim them. This will take a moment..."
      );
      await response.wait();
    } catch (error) {
      console.log(error);
    }
    try {
      let secondResponse = await trpzStake.connect(signer).withdrawRewards();
      alert("Reward withdrawal sent! Waiting for the transaction to complete.");
      await secondResponse.wait();
      window.location.reload();
    } catch (error) {
      console.log(error);
      alert(
        "Claim did not work! You may not have exceeded the 24 hour window to claim daily rewards"
      );
    }
  }

  async function fixURL(url) {
    if (url.startsWith("ipfs")) {
      return "https://gateway.moralisipfs.com/ipfs/" + url.split("ipfs://")[1];
    } else {
      return url + "?format=json";
    }
  }

  async function getNFTImage(entryURL) {
    try {
      let url = await fixURL(entryURL);
      let response = await (await fetch(url)).json();
      let imageurl = await fixURL(response.image);
      return imageurl;
    } catch (error) {
      console.log(error);
    }
  }

  async function stakeNFT(abiKey, tokenId) {
    const stakingAddresses = configVars.erc20;
    const abis = configVars.abi;
    let contractName;
    let contractABI;
    for (const [key, value] of Object.entries(stakingAddresses)) {
      if (abiKey === value) {
        contractName = key;
        break;
      }
    }
    for (const [key, value] of Object.entries(abis)) {
      if (key === contractName) {
        contractABI = value;
      }
    }

    try {
      const nftContract = new ethers.Contract(abiKey, contractABI, signer);
      let txResponse = await nftContract
        .connect(signer)
        ["safeTransferFrom(address,address,uint256)"](
          walletAddress,
          configVars.erc20.trpzStake,
          tokenId
        );
      alert(
        "Staking transaction sent! This will take a few moments to complete."
      );
      await txResponse.wait();
      alert(
        "Successfully staked! Your page will be reloaded to reflect the changes"
      );
      window.location.reload();
    } catch (error) {
      alert(
        "Error: Staking attempt did not work. This may be because you haven't staked 1 OG Troopr to unlock whitelist staking or it may be a connection error."
      );
    }
  }

  async function stakeAll() {
    if (stakedNFTList.length === 0) {
      alert("Please stake one OG Trooper before batch staking");
      return;
    }
    alert(
      "Maximum of 25 NFTs will be sent to staking per transaction to ensure success. Multiple contract confirmations may be required before final transaction is sent."
    );
    let tokenIds = [];
    let contractAddresses = [];
    let nftTotal = 0;
    if (NFTObjects.length > 25) {
      nftTotal = 25;
    } else {
      nftTotal = NFTObjects.length;
    }
    for (let i = 0; i < nftTotal; i++) {
      contractAddresses.push(NFTObjects[i].tokenAddress);
      tokenIds.push(NFTObjects[i].tokenId);
    }

    let approvedAddresses = [];
    for (let i = 0; i < nftTotal; i++) {
      if (approvedAddresses.includes(NFTObjects[i].tokenAddress)) {
        continue;
      }
      approvedAddresses.push(NFTObjects[i].tokenAddress);
      const stakingAddresses = configVars.erc20;
      const abis = configVars.abi;
      let contractName;
      let contractABI;

      for (const [key, value] of Object.entries(stakingAddresses)) {
        if (NFTObjects[i].tokenAddress === value) {
          contractName = key;
          break;
        }
      }

      for (const [key, value] of Object.entries(abis)) {
        if (key === contractName) {
          contractABI = value;
        }
      }

      try {
        let readContract = new ethers.Contract(
          NFTObjects[i].tokenAddress,
          contractABI,
          library
        );
        if (
          await readContract.isApprovedForAll(
            walletAddress,
            configVars.erc20.trpzStake
          )
        ) {
          continue;
        } else {
          let writeContract = new ethers.Contract(
            NFTObjects[i].tokenAddress,
            contractABI,
            signer
          );
          let response = await writeContract.setApprovalForAll(
            configVars.erc20.trpzStake,
            true
          );
          alert(
            "Waiting for approval to confirm before next confirmation. Please do not refresh the page..."
          );
          await response.wait();
          console.log(
            await readContract.isApprovedForAll(
              walletAddress,
              configVars.erc20.trpzStake
            )
          );
        }
      } catch (error) {
        alert(
          "Approval transaction did not work! This will mean an NFT collection may not be batch staked. Please continue then review what did not send."
        );
        console.log(error);
      }
    }

    try {
      const trpzStake = new ethers.Contract(
        configVars.erc20.trpzStake,
        configVars.abi.trpzStake,
        signer
      );
      let txResponse = await trpzStake
        .connect(signer)
        .batchDeposit(contractAddresses, tokenIds);
      alert(
        "Batch stake transaction sent! This will take a few moments to complete. DO NOT REFRESH"
      );
      await txResponse.wait();
      alert(
        "Batch stake successful! Your page will be refreshed and you may need to reconnect your wallet"
      );
      window.location.reload();
    } catch (error) {
      alert(
        "The batch send transaction did not work! Please try to do the transaction again."
      );
      console.log(error);
    }
  }

  async function withdrawToken(stakingId) {
    try {
      const trpzStake = new ethers.Contract(
        configVars.erc20.trpzStake,
        configVars.abi.trpzStake,
        signer
      );
      let txResponse = await trpzStake.connect(signer).withdrawToken(stakingId);
      alert(
        "Unstake transaction sent! This will take a few moments to complete."
      );
      await txResponse.wait();
      alert(
        "Successfully unstaked! Your page will be reloaded to reflect the changes."
      );
      window.location.reload();
    } catch (error) {
      alert("Withdraw token transaction did not work! Please try again.");
      console.log(error);
    }
  }

  async function batchWithdraw() {
    try {
      const trpzStake = new ethers.Contract(
        configVars.erc20.trpzStake,
        configVars.abi.trpzStake,
        signer
      );
      let txResponse = await trpzStake.connect(signer).batchWithdrawTokens();
      alert(
        "Batch unstake transaction sent! This will take a few moments to complete."
      );
      await txResponse.wait();
      alert(
        "Successfully batch unstaked! Your page will be reloaded to reflect the changes"
      );
      window.location.reload();
    } catch (error) {
      alert("Batch withdraw did not work! Please try again");
      console.log(error);
    }
  }

  async function selectedBatchStake(nfts) {
    if (stakedNFTList.length === 0) {
      alert("Please stake one OG Trooper before batch staking");
      return;
    }
    alert(
      "Maximum of 25 NFTs will be sent to staking per transaction to ensure success. Multiple contract confirmations may be required before final transaction is sent."
    );
    let tokenIds = [];
    let contractAddresses = [];
    let nftTotal = 0;

    if (nfts.length > 25) {
      nftTotal = 25;
    } else {
      nftTotal = nfts.length;
    }

    for (let i = 0; i < nftTotal; i++) {
      contractAddresses.push(nfts[i].tokenAddress);
      tokenIds.push(nfts[i].tokenId);
    }

    let approvedAddresses = [];
    for (let i = 0; i < nftTotal; i++) {
      if (approvedAddresses.includes(nfts[i].tokenAddress)) {
        continue;
      }
      approvedAddresses.push(nfts[i].tokenAddress);
      const stakingAddresses = configVars.erc20;
      const abis = configVars.abi;
      let contractName;
      let contractABI;

      for (const [key, value] of Object.entries(stakingAddresses)) {
        if (nfts[i].tokenAddress === value) {
          contractName = key;
          break;
        }
      }

      for (const [key, value] of Object.entries(abis)) {
        if (key === contractName) {
          contractABI = value;
        }
      }

      try {
        let readContract = new ethers.Contract(
          nfts[i].tokenAddress,
          contractABI,
          library
        );
        if (
          await readContract.isApprovedForAll(
            walletAddress,
            configVars.erc20.trpzStake
          )
        ) {
          continue;
        } else {
          let writeContract = new ethers.Contract(
            nfts[i].tokenAddress,
            contractABI,
            signer
          );
          let response = await writeContract.setApprovalForAll(
            configVars.erc20.trpzStake,
            true
          );
          alert(
            "Waiting for approval to confirm before next confirmation. Please do not refresh the page..."
          );
          await response.wait();
          console.log(
            await readContract.isApprovedForAll(
              walletAddress,
              configVars.erc20.trpzStake
            )
          );
        }
      } catch (error) {
        alert(
          "Approval transaction did not work! This will mean an NFT collection may not be batch staked. Please continue then review what did not send."
        );
        console.log(error);
      }
    }
    try {
      const trpzStake = new ethers.Contract(
        configVars.erc20.trpzStake,
        configVars.abi.trpzStake,
        signer
      );
      let txResponse = await trpzStake
        .connect(signer)
        .batchDeposit(contractAddresses, tokenIds);
      alert(
        "Batch stake transaction sent! This will take a few moments to complete. DO NOT REFRESH"
      );
      await txResponse.wait();
      alert(
        "Batch stake successful! Your page will be refreshed and you may need to reconnect your wallet"
      );
      window.location.reload();
    } catch (error) {
      alert(
        "The batch send transaction did not work! Please try to do the transaction again."
      );
      console.log(error);
    }
  }

  async function addStakeInfo(index, contractAddress, tokenId) {
    if (batchStakeObjects.length === 25) {
      alert(
        "You can only stake 25 NFTs at a time. An NFT will be removed from the front of the list."
      );
      batchStakeObjects.shift();
    }
    if (batchStakeObjects.some((e) => e.index === index)) {
      let updatedObjects = batchStakeObjects.filter((e) => e.index !== index);
      setBatchStakeObject(updatedObjects);
    } else {
      let object = {
        index: index,
        tokenAddress: contractAddress,
        tokenId: tokenId,
      };
      setBatchStakeObject((batchStakeObjects) => [
        ...batchStakeObjects,
        object,
      ]);
    }
    if (batchStakeObjects.length >= 0) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }

  async function addUnstakeInfo(index, contractAddress, tokenId) {
    if (batchUnstakeObjects.some((e) => e.index === index)) {
      let updatedObjects = batchUnstakeObjects.filter((e) => e.index !== index);
      setBatchUnstakeObject(updatedObjects);
    } else {
      let object = {
        index: index,
        tokenAddress: contractAddress,
        tokenId: tokenId,
      };
      setBatchUnstakeObject((batchUnstakeObjects) => [
        ...batchUnstakeObjects,
        object,
      ]);
    }
  }

  return (
    <div className="App">
      <Header
        setAddress={setAddress}
        walletAddress={walletAddress}
        availableNFTs={availableNFTs}
        setAvailableNFTs={setAvailableNFTs}
        signer={signer}
        setSigner={setSigner}
        connectWallet={connectWallet}
        disconnectWallet={disconnectWallet}
      />
      <StakeBanner trpzBalance={trpzBalance} />
      <StakeHeader
        claimableReward={claimableReward}
        claimRewards={claimRewards}
      />
      <StakeStats
        availableNFTs={availableNFTs}
        stakedNFTCount={stakedNFTCount}
        totalReward={totalReward}
        claimableReward={claimableReward}
      />
      {loading ? (
        <ClipLoader color={"#D0021B"} loading={loading} size={150} />
      ) : (
        <StakeBody
          stakedNFTs={stakedNFTs}
          NFTObjects={NFTObjects}
          stakeNFT={stakeNFT}
          stakeAll={stakeAll}
          withdrawToken={withdrawToken}
          batchWithdraw={batchWithdraw}
          addStakeInfo={addStakeInfo}
          addUnstakeInfo={addUnstakeInfo}
          selectedBatchStake={selectedBatchStake}
          batchStakeObjects={batchStakeObjects}
          batchUnstakeObjects={batchUnstakeObjects}
          disabled={disabled}
        />
      )}
      <Footer />
    </div>
  );
}

export default App;
