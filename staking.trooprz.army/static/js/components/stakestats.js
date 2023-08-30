import '../styles/App.css';
import '../styles/stakestats.css';

const StakeStats = params => {
    return ( <
        div className = "stakestats" >
        <
        div className = 'stakestats__boxes' >
        <
        div className = 'stakestats__box' >
        <
        h2 className = 'stakestats__boxStat' > {!params.availableNFTs ? 0 : params.availableNFTs
        } < /h2> <
        p className = 'stakestats__boxTitle' > Available NFTs < /p> <
        /div> <
        div className = 'stakestats__box' >
        <
        h2 className = 'stakestats__boxStat' > {
            params.stakedNFTCount >= 1 ? params.stakedNFTCount : 0
        } < /h2> <
        p className = 'stakestats__boxTitle' > {
            params.stakedNFTCount === 1 ? "Staked NFT" : "Staked NFTs"
        } < /p> <
        /div> <
        div className = 'stakestats__box' >
        <
        h2 className = 'stakestats__boxStat' > {!params.claimableReward ? 0 : params.claimableReward
        } < /h2> <
        p className = 'stakestats__boxTitle' > Claimable Rewards < /p> <
        /div> <
        div className = 'stakestats__box' >
        <
        h2 className = 'stakestats__boxStat' > {!params.totalReward ? 0 : params.totalReward
        } < /h2> <
        p className = 'stakestats__boxTitle' > Daily Claim < /p> <
        /div> <
        /div> <
        /div>
    )
}

export default StakeStats;