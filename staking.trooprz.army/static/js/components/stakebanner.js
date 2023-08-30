import '../styles/App.css';
import '../styles/stakebanner.css';
import React from "react";



const StakeBanner = params => {
    return (
        <div className="stakebanner">
            <div className='stakebanner__title'>
                <p>Wallet Balance: {!params.trpzBalance ? 0 : params.trpzBalance} TRPZ</p>
            </div>
		</div>
    )
}

export default StakeBanner;