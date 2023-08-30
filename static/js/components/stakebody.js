import '../styles/App.css';
import '../styles/stakebody.css';
import React, {
    useState
} from "react";

const StakeBody = params => {
    const [filter, setFilter] = useState("All")

    return ( <
        div className = "stakebody" >
        <
        div className = 'stakebody__mainBox' >
        <
        div className = 'stakebody__buttonBar' >
        <
        div className = 'stakebody__sorting' >
        <
        div className = 'stakebody__sortBox' >
        <
        p > Filter By < /p> <
        select onChange = {
            e => {
                setFilter(e.target.value)
            }
        }
        name = "Collection" >
        <
        option value = "All" > All < /option> <
        option value = "Staked" > Staked < /option> <
        option value = "Unstaked" > Unstaked < /option> <
        /select> <
        /div> <
        /div> <
        div className = 'stakebody__batchStake' >
        <
        button title = "Batch stake max of 25 selected NFTs"
        disabled = {
            params.disabled
        }
        onClick = {
            () => {
                if (params.batchStakeObjects.length > 1) {
                    console.log("Batch staking select")
                    console.log(params.batchStakeObjects)
                    params.selectedBatchStake(params.batchStakeObjects)
                } else {
                    params.stakeAll(params.NFTObjects)
                }
            }
        }
        className = 'stakebody__batchStakeButton' > Batch Stake < br / > < span className = 'stakebody__buttonDesc' > (Max 25) < /span></button >
        <
        button onClick = {
            () => {
                params.batchWithdraw()
            }
        }
        className = 'stakebody__batchStakeButtonCounter' > Unstake All < /button> <
        /div> <
        /div> <
        div className = 'stakebody__boxes' > {
            filter !== "Unstaked" && params.stakedNFTs.map((nft, index) => {
                return < >
                    <
                    div className = 'stakebody__box' > {
                        nft.tokenAddress === "0x51112Bf32B9a1C64716DF2e6b82e63a04Bd384Fd" &&
                        <
                        img className = "stakebody__boxImg"
                        src = {
                            `https://ik-proxy.b-cdn.net/proxy/https://metadata.trooprz.army/series-2/${nft.tokenId}.png`
                        }
                        alt = "" > < /img>
                    } {
                        nft.tokenAddress !== "0x51112Bf32B9a1C64716DF2e6b82e63a04Bd384Fd" &&
                            <
                            img className = "stakebody__boxImg"
                        src = {
                            `${nft.tokenImage}`
                        }
                        alt = "" > < /img>
                    } <
                    div className = 'stakebody__boxText' >
                    <
                    p className = 'stakebody__boxRank' > {
                        nft.name
                    } < /p> <
                    p className = 'stakebody__boxTitle' > ID: {
                        nft.tokenId
                    } < /p> <
                    p className = 'stakebody__boxReward' > Daily Yield: {
                        nft.dailyReward
                    }
                TRPZ < /p> <
                    div className = 'stakebody__boxButtons' >
                    <
                    button className = 'stakebody__boxButtonSingleCounter'
                onClick = {
                        () => {
                            params.withdrawToken(nft.stakingId)
                        }
                    } >
                    Unstake < /button> <
                    /div> <
                    /div> <
                    /div> <
                    />
            })
        } {
            filter !== "Staked" && params.NFTObjects.map((heldNFT, index) => {
                return < >
                    <
                    div className = 'stakebody__box' > {
                        heldNFT.tokenAddress === "0x51112Bf32B9a1C64716DF2e6b82e63a04Bd384Fd" &&
                        <
                        img className = "stakebody__boxImg"
                        src = {
                            `https://ik-proxy.b-cdn.net/proxy/https://metadata.trooprz.army/series-2/${heldNFT.tokenId}.png`
                        }
                        alt = "" > < /img>
                    } {
                        heldNFT.tokenAddress !== "0x51112Bf32B9a1C64716DF2e6b82e63a04Bd384Fd" &&
                            <
                            img className = "stakebody__boxImg"
                        src = {
                            `${heldNFT.tokenImage}`
                        }
                        alt = "" > < /img>
                    } <
                    div className = 'stakebody__boxText' >
                    <
                    p className = 'stakebody__boxRank' > {
                        heldNFT.name
                    } < /p> <
                    p className = 'stakebody__boxTitle' > ID: {
                        heldNFT.tokenId
                    } < /p> <
                    p className = 'stakebody__boxReward' > Daily Yield: {
                        heldNFT.dailyReward
                    }
                TRPZ < /p> <
                    div className = 'stakebody__boxButtons' >
                    <
                    button className = 'stakebody__boxButtonSingle'
                onClick = {
                        () => {
                            params.stakeNFT(heldNFT.tokenAddress.toLowerCase(), heldNFT.tokenId)
                        }
                    } >
                    Stake < /button> <
                    /div> <
                    div className = 'stakebody__boxCheck' >
                    <
                    input className = 'stakebody__checkBox'
                onClick = {
                    () => {
                        params.addStakeInfo(index, heldNFT.tokenAddress.toLowerCase(), heldNFT.tokenId)
                    }
                }
                type = "checkbox" > < /input> <
                    /div> <
                    /div> <
                    /div> <
                    />
            })
        } <
        /div> <
        /div> <
        /div>
    )
}

export default StakeBody;