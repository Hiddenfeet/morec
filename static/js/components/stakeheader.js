import '../styles/App.css';
import '../styles/stakeheader.css';
import React from "react";



const StakeHeader = params => {
    return ( <
        div className = "stakeheader" >
        <
        div className = 'stakeheader__title' >
        <
        h1 > Staking Dashboard < /h1> <
        h3 > {!params.claimableReward ? 0 : params.claimableReward
        }
        TRPZ $ Claimable < /h3> <
        button onClick = {
            () => {
                params.claimRewards()
            }
        }
        className = 'button' > Claim Now < /button> <
        /div> <
        /div>
    )
}

export default StakeHeader;