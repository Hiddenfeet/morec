(this["webpackJsonpmy-project"] = this["webpackJsonpmy-project"] || []).push([
    [0], {
        300: function(e, t, n) {},
        301: function(e, t, n) {},
        302: function(e, t, n) {},
        304: function(e, t, n) {},
        305: function(e, t, n) {},
        306: function(e, t, n) {},
        307: function(e, t, n) {},
        308: function(e, t, n) {},
        309: function(e, t) {},
        349: function(e, t) {},
        351: function(e, t) {},
        374: function(e, t) {},
        376: function(e, t) {},
        388: function(e, t) {},
        389: function(e, t) {},
        410: function(e, t) {},
        414: function(e, t) {},
        418: function(e, t) {},
        420: function(e, t) {},
        433: function(e, t) {},
        435: function(e, t) {},
        516: function(e, t) {},
        532: function(e, t) {},
        548: function(e, t, n) {
            "use strict";
            n.r(t);
            var a = n(12),
                s = n.n(a),
                r = n(272),
                o = n.n(r),
                i = (n(300), n(55)),
                d = n(0),
                p = n(9),
                u = n(26),
                c = (n(301), n(71), n(302), n.p + "static/media/Troopz.8ca639c5.svg"),
                l = n(6),
                y = function(e) {
                    return Object(l.jsxs)("div", {
                        className: "header",
                        children: [Object(l.jsx)("div", {
                            className: "header__left",
                            children: Object(l.jsx)("img", {
                                className: "header__logo",
                                src: c,
                                alt: ""
                            })
                        }), Object(l.jsxs)("div", {
                            className: "header__button",
                            children: [!e.walletAddress && Object(l.jsx)("button", {
                                className: "button",
                                onClick: Object(p.a)(Object(d.a)().mark((function t() {
                                    return Object(d.a)().wrap((function(t) {
                                        for (;;) switch (t.prev = t.next) {
                                            case 0:
                                                e.connectWallet();
                                            case 1:
                                            case "end":
                                                return t.stop()
                                        }
                                    }), t)
                                }))),
                                children: "Connect"
                            }), e.walletAddress && Object(l.jsx)("button", {
                                onClick: Object(p.a)(Object(d.a)().mark((function t() {
                                    return Object(d.a)().wrap((function(t) {
                                        for (;;) switch (t.prev = t.next) {
                                            case 0:
                                                e.disconnectWallet();
                                            case 1:
                                            case "end":
                                                return t.stop()
                                        }
                                    }), t)
                                }))),
                                className: "button",
                                children: "Disconnect"
                            })]
                        })]
                    })
                },
                b = (n(304), function(e) {
                    return Object(l.jsx)("div", {
                        className: "stakebanner",
                        children: Object(l.jsx)("div", {
                            className: "stakebanner__title",
                            children: Object(l.jsxs)("p", {
                                children: ["Wallet Balance: ", e.trpzBalance ? e.trpzBalance : 0, " TRPZ"]
                            })
                        })
                    })
                }),
                f = (n(305), function(e) {
                    return Object(l.jsx)("div", {
                        className: "stakeheader",
                        children: Object(l.jsxs)("div", {
                            className: "stakeheader__title",
                            children: [Object(l.jsx)("h1", {
                                children: "Staking Dashboard"
                            }), Object(l.jsxs)("h3", {
                                children: [e.claimableReward ? e.claimableReward : 0, " TRPZ $ Claimable"]
                            }), Object(l.jsx)("button", {
                                onClick: function() {
                                    e.claimRewards()
                                },
                                className: "button",
                                children: "Claim Now"
                            })]
                        })
                    })
                }),
                m = (n(306), function(e) {
                    return Object(l.jsx)("div", {
                        className: "stakestats",
                        children: Object(l.jsxs)("div", {
                            className: "stakestats__boxes",
                            children: [Object(l.jsxs)("div", {
                                className: "stakestats__box",
                                children: [Object(l.jsx)("h2", {
                                    className: "stakestats__boxStat",
                                    children: e.availableNFTs ? e.availableNFTs : 0
                                }), Object(l.jsx)("p", {
                                    className: "stakestats__boxTitle",
                                    children: "Available NFTs"
                                })]
                            }), Object(l.jsxs)("div", {
                                className: "stakestats__box",
                                children: [Object(l.jsx)("h2", {
                                    className: "stakestats__boxStat",
                                    children: e.stakedNFTCount >= 1 ? e.stakedNFTCount : 0
                                }), Object(l.jsx)("p", {
                                    className: "stakestats__boxTitle",
                                    children: 1 === e.stakedNFTCount ? "Staked NFT" : "Staked NFTs"
                                })]
                            }), Object(l.jsxs)("div", {
                                className: "stakestats__box",
                                children: [Object(l.jsx)("h2", {
                                    className: "stakestats__boxStat",
                                    children: e.claimableReward ? e.claimableReward : 0
                                }), Object(l.jsx)("p", {
                                    className: "stakestats__boxTitle",
                                    children: "Claimable Rewards"
                                })]
                            }), Object(l.jsxs)("div", {
                                className: "stakestats__box",
                                children: [Object(l.jsx)("h2", {
                                    className: "stakestats__boxStat",
                                    children: e.totalReward ? e.totalReward : 0
                                }), Object(l.jsx)("p", {
                                    className: "stakestats__boxTitle",
                                    children: "Daily Claim"
                                })]
                            })]
                        })
                    })
                }),
                T = (n(307), function(e) {
                    var t = Object(a.useState)("All"),
                        n = Object(u.a)(t, 2),
                        s = n[0],
                        r = n[1];
                    return Object(l.jsx)("div", {
                        className: "stakebody",
                        children: Object(l.jsxs)("div", {
                            className: "stakebody__mainBox",
                            children: [Object(l.jsxs)("div", {
                                className: "stakebody__buttonBar",
                                children: [Object(l.jsx)("div", {
                                    className: "stakebody__sorting",
                                    children: Object(l.jsxs)("div", {
                                        className: "stakebody__sortBox",
                                        children: [Object(l.jsx)("p", {
                                            children: "Filter By"
                                        }), Object(l.jsxs)("select", {
                                            onChange: function(e) {
                                                r(e.target.value)
                                            },
                                            name: "Collection",
                                            children: [Object(l.jsx)("option", {
                                                value: "All",
                                                children: "All"
                                            }), Object(l.jsx)("option", {
                                                value: "Staked",
                                                children: "Staked"
                                            }), Object(l.jsx)("option", {
                                                value: "Unstaked",
                                                children: "Unstaked"
                                            })]
                                        })]
                                    })
                                }), Object(l.jsxs)("div", {
                                    className: "stakebody__batchStake",
                                    children: [Object(l.jsxs)("button", {
                                        title: "Batch stake max of 25 selected NFTs",
                                        disabled: e.disabled,
                                        onClick: function() {
                                            e.batchStakeObjects.length > 1 ? (console.log("Batch staking select"), console.log(e.batchStakeObjects), e.selectedBatchStake(e.batchStakeObjects)) : e.stakeAll(e.NFTObjects)
                                        },
                                        className: "stakebody__batchStakeButton",
                                        children: ["Batch Stake ", Object(l.jsx)("br", {}), Object(l.jsx)("span", {
                                            className: "stakebody__buttonDesc",
                                            children: "(Max 25)"
                                        })]
                                    }), Object(l.jsx)("button", {
                                        onClick: function() {
                                            e.batchWithdraw()
                                        },
                                        className: "stakebody__batchStakeButtonCounter",
                                        children: "Unstake All"
                                    })]
                                })]
                            }), Object(l.jsxs)("div", {
                                className: "stakebody__boxes",
                                children: ["Unstaked" !== s && e.stakedNFTs.map((function(t, n) {
                                    return Object(l.jsx)(l.Fragment, {
                                        children: Object(l.jsxs)("div", {
                                            className: "stakebody__box",
                                            children: ["0xf601FfEA6A76E83921750361E613d82286c4Ad9B" === t.tokenAddress && Object(l.jsx)("img", {
                                                className: "stakebody__boxImg",
                                                src: "https://ik-proxy.b-cdn.net/proxy/https://metadata.trooprz.army/series-2/".concat(t.tokenId, ".png"),
                                                alt: ""
                                            }), "0xf601FfEA6A76E83921750361E613d82286c4Ad9B" !== t.tokenAddress && Object(l.jsx)("img", {
                                                className: "stakebody__boxImg",
                                                src: "".concat(t.tokenImage),
                                                alt: ""
                                            }), Object(l.jsxs)("div", {
                                                className: "stakebody__boxText",
                                                children: [Object(l.jsx)("p", {
                                                    className: "stakebody__boxRank",
                                                    children: t.name
                                                }), Object(l.jsxs)("p", {
                                                    className: "stakebody__boxTitle",
                                                    children: ["ID: ", t.tokenId]
                                                }), Object(l.jsxs)("p", {
                                                    className: "stakebody__boxReward",
                                                    children: ["Daily Yield: ", t.dailyReward, " TRPZ"]
                                                }), Object(l.jsx)("div", {
                                                    className: "stakebody__boxButtons",
                                                    children: Object(l.jsx)("button", {
                                                        className: "stakebody__boxButtonSingleCounter",
                                                        onClick: function() {
                                                            e.withdrawToken(t.stakingId)
                                                        },
                                                        children: "Unstake"
                                                    })
                                                })]
                                            })]
                                        })
                                    })
                                })), "Staked" !== s && e.NFTObjects.map((function(t, n) {
                                    return Object(l.jsx)(l.Fragment, {
                                        children: Object(l.jsxs)("div", {
                                            className: "stakebody__box",
                                            children: ["0xf601FfEA6A76E83921750361E613d82286c4Ad9B" === t.tokenAddress && Object(l.jsx)("img", {
                                                className: "stakebody__boxImg",
                                                src: "https://ik-proxy.b-cdn.net/proxy/https://metadata.trooprz.army/series-2/".concat(t.tokenId, ".png"),
                                                alt: ""
                                            }), "0xf601FfEA6A76E83921750361E613d82286c4Ad9B" !== t.tokenAddress && Object(l.jsx)("img", {
                                                className: "stakebody__boxImg",
                                                src: "".concat(t.tokenImage),
                                                alt: ""
                                            }), Object(l.jsxs)("div", {
                                                className: "stakebody__boxText",
                                                children: [Object(l.jsx)("p", {
                                                    className: "stakebody__boxRank",
                                                    children: t.name
                                                }), Object(l.jsxs)("p", {
                                                    className: "stakebody__boxTitle",
                                                    children: ["ID: ", t.tokenId]
                                                }), Object(l.jsxs)("p", {
                                                    className: "stakebody__boxReward",
                                                    children: ["Daily Yield: ", t.dailyReward, " TRPZ"]
                                                }), Object(l.jsx)("div", {
                                                    className: "stakebody__boxButtons",
                                                    children: Object(l.jsx)("button", {
                                                        className: "stakebody__boxButtonSingle",
                                                        onClick: function() {
                                                            e.stakeNFT(t.tokenAddress.toLowerCase(), t.tokenId)
                                                        },
                                                        children: "Stake"
                                                    })
                                                }), Object(l.jsx)("div", {
                                                    className: "stakebody__boxCheck",
                                                    children: Object(l.jsx)("input", {
                                                        className: "stakebody__checkBox",
                                                        onClick: function() {
                                                            e.addStakeInfo(n, t.tokenAddress.toLowerCase(), t.tokenId)
                                                        },
                                                        type: "checkbox"
                                                    })
                                                })]
                                            })]
                                        })
                                    })
                                }))]
                            })]
                        })
                    })
                });
            n(308);
            var v = function() {
                    return Object(l.jsx)("div", {
                        className: "footer",
                        children: Object(l.jsx)("div", {
                            className: "footer__logo",
                            children: Object(l.jsx)("img", {
                                className: "footer__img",
                                src: c,
                                alt: ""
                            })
                        })
                    })
                },
                x = ["0x4c1cea112ff8fe6e9a161e05326cad12ef82fdc9", "0x22552e90d8921eb7e74215cf85a8b1e5f4b20f66", "0x75233b3c8b60b7191704c0f6100850dc769bb857", "0xf8e63021c3d757b63eb53a9124271251a964d572", "0xbd6b9a1a0477d64e99f660b7b7c205f4604e4ff3", "0xf601FfEA6A76E83921750361E613d82286c4Ad9B", "0xea4df145322ec9dfce037b062b08083141c6af8f", "0x96628048830a499b156abdc04cc169c18c3a17f2", "0xeb850b8f7d00b4faf242888bef7efbf229eb1e41", "0x45958cb5ede8dc9e1a797c1526d4523db1471f15", "0xdccced571dcbc82bbeadf95af20ee4442e21208c", "0x30ab0d8c808ec024365d45a105c559bdf06bcb14", "0x714f995cc3f551fc6e3f3d4c4955c51bbdc8be6f", "0x2fff5fe8a3e13a10509e4297df9d1fdaf1ee7dc4", "0xeb54ea91c92ce404ba7ad7b0ef2e36fd75c889a7", "0xe13a2bf710c4d1fd3a04a85e14489b4d352ca2f0", "0x1fe73d4cc73ea313056e41fe82e58d59d29c6592", "0xf39363abc3434c600e731068fb8d25d4d8b2b668", "0xb72cddd1113b0906f5b82f507ad90c5cc65b22fb", "0x2a1ba5c6474949949e290e9a5e72fe9c631c9ab2", "0x3cde8ea53ae063698334ddf7114b7051400be78b", "0x3ffcb84507c6d5a2b963d5f367feffa496e964c1", "0xa808030692001dd562f437fc676cd63eb232bc2a", "0x8721b9ad32d1c7869f19d62ac4b764e3038cc1d2", "0x7da8e3acda33ffa01396ff00e2c4b36ad899f8ad", "0xf038c0cb2935fb8bf9b6e47bca1df0835f359f92", "0xaa6cb884573c97e0b26f771acc0c5c94f6ae8ffd", "0x939b90c529f0e3a2c187e1b190ca966a95881fde"],
                w = {
                    trpzToken: "0x5cB5cbdb7500cf3cd73c9A230f624729Cff217ef",
                    trpzStake: "0xb0562E53770DB291d779dD40C7122665838a36D9",
                    skillzBoost: "",
                    skillz: "",
                    Trooprz: "0xf601FfEA6A76E83921750361E613d82286c4Ad9B",
                    SuperTrooprz: "0xea4df145322ec9dfce037b062b08083141c6af8f",
                    Mutantz: "0x96628048830a499b156abdc04cc169c18c3a17f2",
                    fraternityFoxes: "0x75233b3c8b60b7191704c0f6100850dc769bb857",
                    cronosRocks: "0xf8e63021c3d757b63eb53a9124271251a964d572",
                    cronosFossils: "0xbd6b9a1a0477d64e99f660b7b7c205f4604e4ff3",
                    looneyCorns: "0xeb850b8f7d00b4faf242888bef7efbf229eb1e41",
                    crougarX: "0x45958cb5ede8dc9e1a797c1526d4523db1471f15",
                    genOne: "0xdccced571dcbc82bbeadf95af20ee4442e21208c",
                    firstNFT: "0x4c1cea112ff8fe6e9a161e05326cad12ef82fdc9",
                    secondNFT: "0x22552e90d8921eb7e74215cf85a8b1e5f4b20f66",
                    cronosFossilsGen2: "0x30ab0d8c808ec024365d45a105c559bdf06bcb14",
                    lostToysVIP: "0x714f995cc3f551fc6e3f3d4c4955c51bbdc8be6f",
                    paintedPandaz: "0x2fff5fe8a3e13a10509e4297df9d1fdaf1ee7dc4",
                    bossFrogz: "0xeb54ea91c92ce404ba7ad7b0ef2e36fd75c889a7",
                    noBuddiesOG: "0xe13a2bf710c4d1fd3a04a85e14489b4d352ca2f0",
                    noBuddiesGen2: "0x1fe73d4cc73ea313056e41fe82e58d59d29c6592",
                    noBu: "0xf39363abc3434c600e731068fb8d25d4d8b2b668",
                    noBuddiesGen3D: "0xb72cddd1113b0906f5b82f507ad90c5cc65b22fb",
                    THNDRKatz: "0x2a1ba5c6474949949e290e9a5e72fe9c631c9ab2",
                    cronosFoxesEvo: "0x3cde8ea53ae063698334ddf7114b7051400be78b",
                    loyaltyGoldVips: "0x3ffcb84507c6d5a2b963d5f367feffa496e964c1",
                    empathySilverVips: "0xa808030692001dd562f437fc676cd63eb232bc2a",
                    bronzeBronzeVips: "0x8721b9ad32d1c7869f19d62ac4b764e3038cc1d2",
                    apexNfts: "0x7da8e3acda33ffa01396ff00e2c4b36ad899f8ad",
                    microchipsNfts: "0xf038c0cb2935fb8bf9b6e47bca1df0835f359f92",
                    alphaLions: "0xaa6cb884573c97e0b26f771acc0c5c94f6ae8ffd",
                    cronosMonkeyBusiness: "0x939b90c529f0e3a2c187e1b190ca966a95881fde"
                },
                k = {
                    trpzToken: [{
                        inputs: [{
                            internalType: "uint256",
                            name: "_initialSupply",
                            type: "uint256"
                        }, {
                            internalType: "address",
                            name: "_wallet",
                            type: "address"
                        }],
                        stateMutability: "nonpayable",
                        type: "constructor"
                    }, {
                        anonymous: !1,
                        inputs: [{
                            indexed: !0,
                            internalType: "address",
                            name: "owner",
                            type: "address"
                        }, {
                            indexed: !0,
                            internalType: "address",
                            name: "spender",
                            type: "address"
                        }, {
                            indexed: !1,
                            internalType: "uint256",
                            name: "value",
                            type: "uint256"
                        }],
                        name: "Approval",
                        type: "event"
                    }, {
                        anonymous: !1,
                        inputs: [{
                            indexed: !0,
                            internalType: "bytes32",
                            name: "role",
                            type: "bytes32"
                        }, {
                            indexed: !0,
                            internalType: "bytes32",
                            name: "previousAdminRole",
                            type: "bytes32"
                        }, {
                            indexed: !0,
                            internalType: "bytes32",
                            name: "newAdminRole",
                            type: "bytes32"
                        }],
                        name: "RoleAdminChanged",
                        type: "event"
                    }, {
                        anonymous: !1,
                        inputs: [{
                            indexed: !0,
                            internalType: "bytes32",
                            name: "role",
                            type: "bytes32"
                        }, {
                            indexed: !0,
                            internalType: "address",
                            name: "account",
                            type: "address"
                        }, {
                            indexed: !0,
                            internalType: "address",
                            name: "sender",
                            type: "address"
                        }],
                        name: "RoleGranted",
                        type: "event"
                    }, {
                        anonymous: !1,
                        inputs: [{
                            indexed: !0,
                            internalType: "bytes32",
                            name: "role",
                            type: "bytes32"
                        }, {
                            indexed: !0,
                            internalType: "address",
                            name: "account",
                            type: "address"
                        }, {
                            indexed: !0,
                            internalType: "address",
                            name: "sender",
                            type: "address"
                        }],
                        name: "RoleRevoked",
                        type: "event"
                    }, {
                        anonymous: !1,
                        inputs: [{
                            indexed: !0,
                            internalType: "address",
                            name: "from",
                            type: "address"
                        }, {
                            indexed: !0,
                            internalType: "address",
                            name: "to",
                            type: "address"
                        }, {
                            indexed: !1,
                            internalType: "uint256",
                            name: "value",
                            type: "uint256"
                        }],
                        name: "Transfer",
                        type: "event"
                    }, {
                        inputs: [],
                        name: "ADMIN_ROLE",
                        outputs: [{
                            internalType: "bytes32",
                            name: "",
                            type: "bytes32"
                        }],
                        stateMutability: "view",
                        type: "function"
                    }, {
                        inputs: [],
                        name: "DEFAULT_ADMIN_ROLE",
                        outputs: [{
                            internalType: "bytes32",
                            name: "",
                            type: "bytes32"
                        }],
                        stateMutability: "view",
                        type: "function"
                    }, {
                        inputs: [],
                        name: "MAX_SUPPLY",
                        outputs: [{
                            internalType: "uint256",
                            name: "",
                            type: "uint256"
                        }],
                        stateMutability: "view",
                        type: "function"
                    }, {
                        inputs: [{
                            internalType: "address",
                            name: "owner",
                            type: "address"
                        }, {
                            internalType: "address",
                            name: "spender",
                            type: "address"
                        }],
                        name: "allowance",
                        outputs: [{
                            internalType: "uint256",
                            name: "",
                            type: "uint256"
                        }],
                        stateMutability: "view",
                        type: "function"
                    }, {
                        inputs: [{
                            internalType: "address",
                            name: "spender",
                            type: "address"
                        }, {
                            internalType: "uint256",
                            name: "amount",
                            type: "uint256"
                        }],
                        name: "approve",
                        outputs: [{
                            internalType: "bool",
                            name: "",
                            type: "bool"
                        }],
                        stateMutability: "nonpayable",
                        type: "function"
                    }, {
                        inputs: [{
                            internalType: "address",
                            name: "account",
                            type: "address"
                        }],
                        name: "balanceOf",
                        outputs: [{
                            internalType: "uint256",
                            name: "",
                            type: "uint256"
                        }],
                        stateMutability: "view",
                        type: "function"
                    }, {
                        inputs: [{
                            internalType: "uint256",
                            name: "_amount",
                            type: "uint256"
                        }],
                        name: "burn",
                        outputs: [],
                        stateMutability: "nonpayable",
                        type: "function"
                    }, {
                        inputs: [],
                        name: "decimals",
                        outputs: [{
                            internalType: "uint8",
                            name: "",
                            type: "uint8"
                        }],
                        stateMutability: "view",
                        type: "function"
                    }, {
                        inputs: [{
                            internalType: "address",
                            name: "spender",
                            type: "address"
                        }, {
                            internalType: "uint256",
                            name: "subtractedValue",
                            type: "uint256"
                        }],
                        name: "decreaseAllowance",
                        outputs: [{
                            internalType: "bool",
                            name: "",
                            type: "bool"
                        }],
                        stateMutability: "nonpayable",
                        type: "function"
                    }, {
                        inputs: [{
                            internalType: "bytes32",
                            name: "role",
                            type: "bytes32"
                        }],
                        name: "getRoleAdmin",
                        outputs: [{
                            internalType: "bytes32",
                            name: "",
                            type: "bytes32"
                        }],
                        stateMutability: "view",
                        type: "function"
                    }, {
                        inputs: [{
                            internalType: "bytes32",
                            name: "role",
                            type: "bytes32"
                        }, {
                            internalType: "address",
                            name: "account",
                            type: "address"
                        }],
                        name: "grantRole",
                        outputs: [],
                        stateMutability: "nonpayable",
                        type: "function"
                    }, {
                        inputs: [{
                            internalType: "bytes32",
                            name: "role",
                            type: "bytes32"
                        }, {
                            internalType: "address",
                            name: "account",
                            type: "address"
                        }],
                        name: "hasRole",
                        outputs: [{
                            internalType: "bool",
                            name: "",
                            type: "bool"
                        }],
                        stateMutability: "view",
                        type: "function"
                    }, {
                        inputs: [{
                            internalType: "address",
                            name: "spender",
                            type: "address"
                        }, {
                            internalType: "uint256",
                            name: "addedValue",
                            type: "uint256"
                        }],
                        name: "increaseAllowance",
                        outputs: [{
                            internalType: "bool",
                            name: "",
                            type: "bool"
                        }],
                        stateMutability: "nonpayable",
                        type: "function"
                    }, {
                        inputs: [{
                            internalType: "address",
                            name: "_addr",
                            type: "address"
                        }, {
                            internalType: "uint256",
                            name: "_amount",
                            type: "uint256"
                        }],
                        name: "mint",
                        outputs: [],
                        stateMutability: "nonpayable",
                        type: "function"
                    }, {
                        inputs: [],
                        name: "name",
                        outputs: [{
                            internalType: "string",
                            name: "",
                            type: "string"
                        }],
                        stateMutability: "view",
                        type: "function"
                    }, {
                        inputs: [{
                            internalType: "bytes32",
                            name: "role",
                            type: "bytes32"
                        }, {
                            internalType: "address",
                            name: "account",
                            type: "address"
                        }],
                        name: "renounceRole",
                        outputs: [],
                        stateMutability: "nonpayable",
                        type: "function"
                    }, {
                        inputs: [{
                            internalType: "bytes32",
                            name: "role",
                            type: "bytes32"
                        }, {
                            internalType: "address",
                            name: "account",
                            type: "address"
                        }],
                        name: "revokeRole",
                        outputs: [],
                        stateMutability: "nonpayable",
                        type: "function"
                    }, {
                        inputs: [],
                        name: "selfDestruct",
                        outputs: [],
                        stateMutability: "nonpayable",
                        type: "function"
                    }, {
                        inputs: [{
                            internalType: "bytes4",
                            name: "interfaceId",
                            type: "bytes4"
                        }],
                        name: "supportsInterface",
                        outputs: [{
                            internalType: "bool",
                            name: "",
                            type: "bool"
                        }],
                        stateMutability: "view",
                        type: "function"
                    }, {
                        inputs: [],
                        name: "symbol",
                        outputs: [{
                            internalType: "string",
                            name: "",
                            type: "string"
                        }],
                        stateMutability: "view",
                        type: "function"
                    }, {
                        inputs: [],
                        name: "totalSupply",
                        outputs: [{
                            internalType: "uint256",
                            name: "",
                            type: "uint256"
                        }],
                        stateMutability: "view",
                        type: "function"
                    }, {
                        inputs: [{
                            internalType: "address",
                            name: "to",
                            type: "address"
                        }, {
                            internalType: "uint256",
                            name: "amount",
                            type: "uint256"
                        }],
                        name: "transfer",
                        outputs: [{
                            internalType: "bool",
                            name: "",
                            type: "bool"
                        }],
                        stateMutability: "nonpayable",
                        type: "function"
                    }, {
                        inputs: [{
                            internalType: "address",
                            name: "from",
                            type: "address"
                        }, {
                            internalType: "address",
                            name: "to",
                            type: "address"
                        }, {
                            internalType: "uint256",
                            name: "amount",
                            type: "uint256"
                        }],
                        name: "transferFrom",
                        outputs: [{
                            internalType: "bool",
                            name: "",
                            type: "bool"
                        }],
                        stateMutability: "nonpayable",
                        type: "function"
                    }],
                    trpzStake: [{
                        inputs: [{
                            internalType: "address",
                            name: "_trpzToken",
                            type: "address"
                        }],
                        stateMutability: "nonpayable",
                        type: "constructor"
                    }, {
                        anonymous: !1,
                        inputs: [{
                            indexed: !0,
                            internalType: "bytes32",
                            name: "role",
                            type: "bytes32"
                        }, {
                            indexed: !0,
                            internalType: "bytes32",
                            name: "previousAdminRole",
                            type: "bytes32"
                        }, {
                            indexed: !0,
                            internalType: "bytes32",
                            name: "newAdminRole",
                            type: "bytes32"
                        }],
                        name: "RoleAdminChanged",
                        type: "event"
                    }, {
                        anonymous: !1,
                        inputs: [{
                            indexed: !0,
                            internalType: "bytes32",
                            name: "role",
                            type: "bytes32"
                        }, {
                            indexed: !0,
                            internalType: "address",
                            name: "account",
                            type: "address"
                        }, {
                            indexed: !0,
                            internalType: "address",
                            name: "sender",
                            type: "address"
                        }],
                        name: "RoleGranted",
                        type: "event"
                    }, {
                        anonymous: !1,
                        inputs: [{
                            indexed: !0,
                            internalType: "bytes32",
                            name: "role",
                            type: "bytes32"
                        }, {
                            indexed: !0,
                            internalType: "address",
                            name: "account",
                            type: "address"
                        }, {
                            indexed: !0,
                            internalType: "address",
                            name: "sender",
                            type: "address"
                        }],
                        name: "RoleRevoked",
                        type: "event"
                    }, {
                        inputs: [],
                        name: "ADMIN_ROLE",
                        outputs: [{
                            internalType: "bytes32",
                            name: "",
                            type: "bytes32"
                        }],
                        stateMutability: "view",
                        type: "function"
                    }, {
                        inputs: [],
                        name: "DEFAULT_ADMIN_ROLE",
                        outputs: [{
                            internalType: "bytes32",
                            name: "",
                            type: "bytes32"
                        }],
                        stateMutability: "view",
                        type: "function"
                    }, {
                        inputs: [],
                        name: "OGAddress",
                        outputs: [{
                            internalType: "address",
                            name: "",
                            type: "address"
                        }],
                        stateMutability: "view",
                        type: "function"
                    }, {
                        inputs: [{
                            internalType: "address",
                            name: "",
                            type: "address"
                        }],
                        name: "OGBalance",
                        outputs: [{
                            internalType: "uint64",
                            name: "",
                            type: "uint64"
                        }],
                        stateMutability: "view",
                        type: "function"
                    }, {
                        inputs: [{
                            internalType: "address[]",
                            name: "_contractAddress",
                            type: "address[]"
                        }, {
                            internalType: "uint256[]",
                            name: "_tokenId",
                            type: "uint256[]"
                        }],
                        name: "batchDeposit",
                        outputs: [],
                        stateMutability: "nonpayable",
                        type: "function"
                    }, {
                        inputs: [],
                        name: "batchWithdrawTokens",
                        outputs: [],
                        stateMutability: "nonpayable",
                        type: "function"
                    }, {
                        inputs: [{
                            internalType: "address",
                            name: "",
                            type: "address"
                        }],
                        name: "dailyContractRewards",
                        outputs: [{
                            internalType: "uint64",
                            name: "",
                            type: "uint64"
                        }],
                        stateMutability: "view",
                        type: "function"
                    }, {
                        inputs: [{
                            internalType: "uint256",
                            name: "_stakingId",
                            type: "uint256"
                        }],
                        name: "emergencyWithdrawal",
                        outputs: [],
                        stateMutability: "nonpayable",
                        type: "function"
                    }, {
                        inputs: [{
                            internalType: "address",
                            name: "_address",
                            type: "address"
                        }],
                        name: "getRewards",
                        outputs: [{
                            internalType: "uint256",
                            name: "",
                            type: "uint256"
                        }],
                        stateMutability: "view",
                        type: "function"
                    }, {
                        inputs: [{
                            internalType: "bytes32",
                            name: "role",
                            type: "bytes32"
                        }],
                        name: "getRoleAdmin",
                        outputs: [{
                            internalType: "bytes32",
                            name: "",
                            type: "bytes32"
                        }],
                        stateMutability: "view",
                        type: "function"
                    }, {
                        inputs: [{
                            internalType: "address",
                            name: "_address",
                            type: "address"
                        }],
                        name: "getStakedList",
                        outputs: [{
                            internalType: "uint256[]",
                            name: "",
                            type: "uint256[]"
                        }],
                        stateMutability: "view",
                        type: "function"
                    }, {
                        inputs: [{
                            internalType: "uint256",
                            name: "_stakingId",
                            type: "uint256"
                        }],
                        name: "getStakedNFT",
                        outputs: [{
                            internalType: "uint256",
                            name: "tokenId",
                            type: "uint256"
                        }, {
                            internalType: "address",
                            name: "contractAddr",
                            type: "address"
                        }, {
                            internalType: "address",
                            name: "owner",
                            type: "address"
                        }],
                        stateMutability: "view",
                        type: "function"
                    }, {
                        inputs: [{
                            internalType: "bytes32",
                            name: "role",
                            type: "bytes32"
                        }, {
                            internalType: "address",
                            name: "account",
                            type: "address"
                        }],
                        name: "grantRole",
                        outputs: [],
                        stateMutability: "nonpayable",
                        type: "function"
                    }, {
                        inputs: [{
                            internalType: "bytes32",
                            name: "role",
                            type: "bytes32"
                        }, {
                            internalType: "address",
                            name: "account",
                            type: "address"
                        }],
                        name: "hasRole",
                        outputs: [{
                            internalType: "bool",
                            name: "",
                            type: "bool"
                        }],
                        stateMutability: "view",
                        type: "function"
                    }, {
                        inputs: [],
                        name: "historicId",
                        outputs: [{
                            internalType: "uint64",
                            name: "",
                            type: "uint64"
                        }],
                        stateMutability: "view",
                        type: "function"
                    }, {
                        inputs: [{
                            internalType: "address",
                            name: "",
                            type: "address"
                        }],
                        name: "historicRewardHead",
                        outputs: [{
                            internalType: "uint256",
                            name: "timestamp",
                            type: "uint256"
                        }, {
                            internalType: "uint64",
                            name: "rewardId",
                            type: "uint64"
                        }, {
                            internalType: "uint64",
                            name: "reward",
                            type: "uint64"
                        }, {
                            internalType: "uint64",
                            name: "next",
                            type: "uint64"
                        }],
                        stateMutability: "view",
                        type: "function"
                    }, {
                        inputs: [{
                            internalType: "uint64",
                            name: "",
                            type: "uint64"
                        }],
                        name: "historicRewardToId",
                        outputs: [{
                            internalType: "uint256",
                            name: "timestamp",
                            type: "uint256"
                        }, {
                            internalType: "uint64",
                            name: "rewardId",
                            type: "uint64"
                        }, {
                            internalType: "uint64",
                            name: "reward",
                            type: "uint64"
                        }, {
                            internalType: "uint64",
                            name: "next",
                            type: "uint64"
                        }],
                        stateMutability: "view",
                        type: "function"
                    }, {
                        inputs: [{
                            internalType: "address",
                            name: "_operator",
                            type: "address"
                        }, {
                            internalType: "address",
                            name: "_from",
                            type: "address"
                        }, {
                            internalType: "uint256",
                            name: "_tokenId",
                            type: "uint256"
                        }, {
                            internalType: "bytes",
                            name: "",
                            type: "bytes"
                        }],
                        name: "onERC721Received",
                        outputs: [{
                            internalType: "bytes4",
                            name: "",
                            type: "bytes4"
                        }],
                        stateMutability: "nonpayable",
                        type: "function"
                    }, {
                        inputs: [{
                            internalType: "address",
                            name: "",
                            type: "address"
                        }, {
                            internalType: "uint256",
                            name: "",
                            type: "uint256"
                        }],
                        name: "ownerToIds",
                        outputs: [{
                            internalType: "uint256",
                            name: "",
                            type: "uint256"
                        }],
                        stateMutability: "view",
                        type: "function"
                    }, {
                        inputs: [{
                            internalType: "address",
                            name: "",
                            type: "address"
                        }],
                        name: "ownerToLastUpdate",
                        outputs: [{
                            internalType: "uint256",
                            name: "",
                            type: "uint256"
                        }],
                        stateMutability: "view",
                        type: "function"
                    }, {
                        inputs: [{
                            internalType: "address",
                            name: "",
                            type: "address"
                        }],
                        name: "ownerToRewards",
                        outputs: [{
                            internalType: "uint256",
                            name: "",
                            type: "uint256"
                        }],
                        stateMutability: "view",
                        type: "function"
                    }, {
                        inputs: [],
                        name: "pauseContract",
                        outputs: [],
                        stateMutability: "nonpayable",
                        type: "function"
                    }, {
                        inputs: [],
                        name: "paused",
                        outputs: [{
                            internalType: "bool",
                            name: "",
                            type: "bool"
                        }],
                        stateMutability: "view",
                        type: "function"
                    }, {
                        inputs: [{
                            internalType: "bytes32",
                            name: "role",
                            type: "bytes32"
                        }, {
                            internalType: "address",
                            name: "account",
                            type: "address"
                        }],
                        name: "renounceRole",
                        outputs: [],
                        stateMutability: "nonpayable",
                        type: "function"
                    }, {
                        inputs: [{
                            internalType: "bytes32",
                            name: "role",
                            type: "bytes32"
                        }, {
                            internalType: "address",
                            name: "account",
                            type: "address"
                        }],
                        name: "revokeRole",
                        outputs: [],
                        stateMutability: "nonpayable",
                        type: "function"
                    }, {
                        inputs: [{
                            internalType: "uint256",
                            name: "",
                            type: "uint256"
                        }],
                        name: "stakedNFTIds",
                        outputs: [{
                            internalType: "uint256",
                            name: "tokenId",
                            type: "uint256"
                        }, {
                            internalType: "address",
                            name: "nftContract",
                            type: "address"
                        }, {
                            internalType: "address",
                            name: "owner",
                            type: "address"
                        }],
                        stateMutability: "view",
                        type: "function"
                    }, {
                        inputs: [],
                        name: "stakingId",
                        outputs: [{
                            internalType: "uint256",
                            name: "_value",
                            type: "uint256"
                        }],
                        stateMutability: "view",
                        type: "function"
                    }, {
                        inputs: [{
                            internalType: "bytes4",
                            name: "interfaceId",
                            type: "bytes4"
                        }],
                        name: "supportsInterface",
                        outputs: [{
                            internalType: "bool",
                            name: "",
                            type: "bool"
                        }],
                        stateMutability: "view",
                        type: "function"
                    }, {
                        inputs: [],
                        name: "trpzToken",
                        outputs: [{
                            internalType: "address",
                            name: "",
                            type: "address"
                        }],
                        stateMutability: "view",
                        type: "function"
                    }, {
                        inputs: [],
                        name: "updateRewards",
                        outputs: [],
                        stateMutability: "nonpayable",
                        type: "function"
                    }, {
                        inputs: [{
                            internalType: "address",
                            name: "_addr",
                            type: "address"
                        }],
                        name: "whitelistContract",
                        outputs: [],
                        stateMutability: "nonpayable",
                        type: "function"
                    }, {
                        inputs: [{
                            internalType: "address",
                            name: "",
                            type: "address"
                        }],
                        name: "whitelistedContracts",
                        outputs: [{
                            internalType: "bool",
                            name: "",
                            type: "bool"
                        }],
                        stateMutability: "view",
                        type: "function"
                    }, {
                        inputs: [],
                        name: "withdrawRewards",
                        outputs: [],
                        stateMutability: "nonpayable",
                        type: "function"
                    }, {
                        inputs: [{
                            internalType: "uint256",
                            name: "_stakingId",
                            type: "uint256"
                        }],
                        name: "withdrawToken",
                        outputs: [],
                        stateMutability: "nonpayable",
                        type: "function"
                    }, {
                        inputs: [{
                            internalType: "address",
                            name: "_addr",
                            type: "address"
                        }, {
                            internalType: "uint64",
                            name: "_dailyReward",
                            type: "uint64"
                        }],
                        name: "yieldSetter",
                        outputs: [],
                        stateMutability: "nonpayable",
                        type: "function"
                    }],
                    firstNFT: [{
                        inputs: [],
                        stateMutability: "nonpayable",
                        type: "constructor"
                    }, {
                        anonymous: !1,
                        inputs: [{
                            indexed: !0,
                            internalType: "address",
                            name: "owner",
                            type: "address"
                        }, {
                            indexed: !0,
                            internalType: "address",
                            name: "approved",
                            type: "address"
                        }, {
                            indexed: !0,
                            internalType: "uint256",
                            name: "tokenId",
                            type: "uint256"
                        }],
                        name: "Approval",
                        type: "event"
                    }, {
                        anonymous: !1,
                        inputs: [{
                            indexed: !0,
                            internalType: "address",
                            name: "owner",
                            type: "address"
                        }, {
                            indexed: !0,
                            internalType: "address",
                            name: "operator",
                            type: "address"
                        }, {
                            indexed: !1,
                            internalType: "bool",
                            name: "approved",
                            type: "bool"
                        }],
                        name: "ApprovalForAll",
                        type: "event"
                    }, {
                        anonymous: !1,
                        inputs: [{
                            indexed: !0,
                            internalType: "address",
                            name: "from",
                            type: "address"
                        }, {
                            indexed: !0,
                            internalType: "address",
                            name: "to",
                            type: "address"
                        }, {
                            indexed: !0,
                            internalType: "uint256",
                            name: "tokenId",
                            type: "uint256"
                        }],
                        name: "Transfer",
                        type: "event"
                    }, {
                        inputs: [{
                            internalType: "address",
                            name: "to",
                            type: "address"
                        }, {
                            internalType: "uint256",
                            name: "tokenId",
                            type: "uint256"
                        }],
                        name: "approve",
                        outputs: [],
                        stateMutability: "nonpayable",
                        type: "function"
                    }, {
                        inputs: [{
                            internalType: "address",
                            name: "owner",
                            type: "address"
                        }],
                        name: "balanceOf",
                        outputs: [{
                            internalType: "uint256",
                            name: "",
                            type: "uint256"
                        }],
                        stateMutability: "view",
                        type: "function"
                    }, {
                        inputs: [{
                            internalType: "uint256",
                            name: "tokenId",
                            type: "uint256"
                        }],
                        name: "getApproved",
                        outputs: [{
                            internalType: "address",
                            name: "",
                            type: "address"
                        }],
                        stateMutability: "view",
                        type: "function"
                    }, {
                        inputs: [{
                            internalType: "address",
                            name: "owner",
                            type: "address"
                        }, {
                            internalType: "address",
                            name: "operator",
                            type: "address"
                        }],
                        name: "isApprovedForAll",
                        outputs: [{
                            internalType: "bool",
                            name: "",
                            type: "bool"
                        }],
                        stateMutability: "view",
                        type: "function"
                    }, {
                        inputs: [],
                        name: "mint",
                        outputs: [],
                        stateMutability: "nonpayable",
                        type: "function"
                    }, {
                        inputs: [],
                        name: "name",
                        outputs: [{
                            internalType: "string",
                            name: "",
                            type: "string"
                        }],
                        stateMutability: "view",
                        type: "function"
                    }, {
                        inputs: [],
                        name: "owner",
                        outputs: [{
                            internalType: "address",
                            name: "",
                            type: "address"
                        }],
                        stateMutability: "view",
                        type: "function"
                    }, {
                        inputs: [{
                            internalType: "uint256",
                            name: "tokenId",
                            type: "uint256"
                        }],
                        name: "ownerOf",
                        outputs: [{
                            internalType: "address",
                            name: "",
                            type: "address"
                        }],
                        stateMutability: "view",
                        type: "function"
                    }, {
                        inputs: [{
                            internalType: "address",
                            name: "from",
                            type: "address"
                        }, {
                            internalType: "address",
                            name: "to",
                            type: "address"
                        }, {
                            internalType: "uint256",
                            name: "tokenId",
                            type: "uint256"
                        }],
                        name: "safeTransferFrom",
                        outputs: [],
                        stateMutability: "nonpayable",
                        type: "function"
                    }, {
                        inputs: [{
                            internalType: "address",
                            name: "from",
                            type: "address"
                        }, {
                            internalType: "address",
                            name: "to",
                            type: "address"
                        }, {
                            internalType: "uint256",
                            name: "tokenId",
                            type: "uint256"
                        }, {
                            internalType: "bytes",
                            name: "_data",
                            type: "bytes"
                        }],
                        name: "safeTransferFrom",
                        outputs: [],
                        stateMutability: "nonpayable",
                        type: "function"
                    }, {
                        inputs: [],
                        name: "selfDestruct",
                        outputs: [],
                        stateMutability: "nonpayable",
                        type: "function"
                    }, {
                        inputs: [{
                            internalType: "address",
                            name: "operator",
                            type: "address"
                        }, {
                            internalType: "bool",
                            name: "approved",
                            type: "bool"
                        }],
                        name: "setApprovalForAll",
                        outputs: [],
                        stateMutability: "nonpayable",
                        type: "function"
                    }, {
                        inputs: [{
                            internalType: "bytes4",
                            name: "interfaceId",
                            type: "bytes4"
                        }],
                        name: "supportsInterface",
                        outputs: [{
                            internalType: "bool",
                            name: "",
                            type: "bool"
                        }],
                        stateMutability: "view",
                        type: "function"
                    }, {
                        inputs: [],
                        name: "symbol",
                        outputs: [{
                            internalType: "string",
                            name: "",
                            type: "string"
                        }],
                        stateMutability: "view",
                        type: "function"
                    }, {
                        inputs: [],
                        name: "tokenId",
                        outputs: [{
                            internalType: "uint256",
                            name: "_value",
                            type: "uint256"
                        }],
                        stateMutability: "view",
                        type: "function"
                    }, {
                        inputs: [{
                            internalType: "uint256",
                            name: "tokenId",
                            type: "uint256"
                        }],
                        name: "tokenURI",
                        outputs: [{
                            internalType: "string",
                            name: "",
                            type: "string"
                        }],
                        stateMutability: "view",
                        type: "function"
                    }, {
                        inputs: [{
                            internalType: "address",
                            name: "from",
                            type: "address"
                        }, {
                            internalType: "address",
                            name: "to",
                            type: "address"
                        }, {
                            internalType: "uint256",
                            name: "tokenId",
                            type: "uint256"
                        }],
                        name: "transferFrom",
                        outputs: [],
                        stateMutability: "nonpayable",
                        type: "function"
                    }],
                    secondNFT: [{
                        inputs: [],
                        stateMutability: "nonpayable",
                        type: "constructor"
                    }, {
                        anonymous: !1,
                        inputs: [{
                            indexed: !0,
                            internalType: "address",
                            name: "owner",
                            type: "address"
                        }, {
                            indexed: !0,
                            internalType: "address",
                            name: "approved",
                            type: "address"
                        }, {
                            indexed: !0,
                            internalType: "uint256",
                            name: "tokenId",
                            type: "uint256"
                        }],
                        name: "Approval",
                        type: "event"
                    }, {
                        anonymous: !1,
                        inputs: [{
                            indexed: !0,
                            internalType: "address",
                            name: "owner",
                            type: "address"
                        }, {
                            indexed: !0,
                            internalType: "address",
                            name: "operator",
                            type: "address"
                        }, {
                            indexed: !1,
                            internalType: "bool",
                            name: "approved",
                            type: "bool"
                        }],
                        name: "ApprovalForAll",
                        type: "event"
                    }, {
                        anonymous: !1,
                        inputs: [{
                            indexed: !0,
                            internalType: "address",
                            name: "from",
                            type: "address"
                        }, {
                            indexed: !0,
                            internalType: "address",
                            name: "to",
                            type: "address"
                        }, {
                            indexed: !0,
                            internalType: "uint256",
                            name: "tokenId",
                            type: "uint256"
                        }],
                        name: "Transfer",
                        type: "event"
                    }, {
                        inputs: [{
                            internalType: "address",
                            name: "to",
                            type: "address"
                        }, {
                            internalType: "uint256",
                            name: "tokenId",
                            type: "uint256"
                        }],
                        name: "approve",
                        outputs: [],
                        stateMutability: "nonpayable",
                        type: "function"
                    }, {
                        inputs: [{
                            internalType: "address",
                            name: "owner",
                            type: "address"
                        }],
                        name: "balanceOf",
                        outputs: [{
                            internalType: "uint256",
                            name: "",
                            type: "uint256"
                        }],
                        stateMutability: "view",
                        type: "function"
                    }, {
                        inputs: [{
                            internalType: "uint256",
                            name: "tokenId",
                            type: "uint256"
                        }],
                        name: "getApproved",
                        outputs: [{
                            internalType: "address",
                            name: "",
                            type: "address"
                        }],
                        stateMutability: "view",
                        type: "function"
                    }, {
                        inputs: [{
                            internalType: "address",
                            name: "owner",
                            type: "address"
                        }, {
                            internalType: "address",
                            name: "operator",
                            type: "address"
                        }],
                        name: "isApprovedForAll",
                        outputs: [{
                            internalType: "bool",
                            name: "",
                            type: "bool"
                        }],
                        stateMutability: "view",
                        type: "function"
                    }, {
                        inputs: [],
                        name: "mint",
                        outputs: [],
                        stateMutability: "nonpayable",
                        type: "function"
                    }, {
                        inputs: [],
                        name: "name",
                        outputs: [{
                            internalType: "string",
                            name: "",
                            type: "string"
                        }],
                        stateMutability: "view",
                        type: "function"
                    }, {
                        inputs: [],
                        name: "owner",
                        outputs: [{
                            internalType: "address",
                            name: "",
                            type: "address"
                        }],
                        stateMutability: "view",
                        type: "function"
                    }, {
                        inputs: [{
                            internalType: "uint256",
                            name: "tokenId",
                            type: "uint256"
                        }],
                        name: "ownerOf",
                        outputs: [{
                            internalType: "address",
                            name: "",
                            type: "address"
                        }],
                        stateMutability: "view",
                        type: "function"
                    }, {
                        inputs: [{
                            internalType: "address",
                            name: "from",
                            type: "address"
                        }, {
                            internalType: "address",
                            name: "to",
                            type: "address"
                        }, {
                            internalType: "uint256",
                            name: "tokenId",
                            type: "uint256"
                        }],
                        name: "safeTransferFrom",
                        outputs: [],
                        stateMutability: "nonpayable",
                        type: "function"
                    }, {
                        inputs: [{
                            internalType: "address",
                            name: "from",
                            type: "address"
                        }, {
                            internalType: "address",
                            name: "to",
                            type: "address"
                        }, {
                            internalType: "uint256",
                            name: "tokenId",
                            type: "uint256"
                        }, {
                            internalType: "bytes",
                            name: "_data",
                            type: "bytes"
                        }],
                        name: "safeTransferFrom",
                        outputs: [],
                        stateMutability: "nonpayable",
                        type: "function"
                    }, {
                        inputs: [],
                        name: "selfDestruct",
                        outputs: [],
                        stateMutability: "nonpayable",
                        type: "function"
                    }, {
                        inputs: [{
                            internalType: "address",
                            name: "operator",
                            type: "address"
                        }, {
                            internalType: "bool",
                            name: "approved",
                            type: "bool"
                        }],
                        name: "setApprovalForAll",
                        outputs: [],
                        stateMutability: "nonpayable",
                        type: "function"
                    }, {
                        inputs: [{
                            internalType: "bytes4",
                            name: "interfaceId",
                            type: "bytes4"
                        }],
                        name: "supportsInterface",
                        outputs: [{
                            internalType: "bool",
                            name: "",
                            type: "bool"
                        }],
                        stateMutability: "view",
                        type: "function"
                    }, {
                        inputs: [],
                        name: "symbol",
                        outputs: [{
                            internalType: "string",
                            name: "",
                            type: "string"
                        }],
                        stateMutability: "view",
                        type: "function"
                    }, {
                        inputs: [],
                        name: "tokenId",
                        outputs: [{
                            internalType: "uint256",
                            name: "_value",
                            type: "uint256"
                        }],
                        stateMutability: "view",
                        type: "function"
                    }, {
                        inputs: [{
                            internalType: "uint256",
                            name: "tokenId",
                            type: "uint256"
                        }],
                        name: "tokenURI",
                        outputs: [{
                            internalType: "string",
                            name: "",
                            type: "string"
                        }],
                        stateMutability: "view",
                        type: "function"
                    }, {
                        inputs: [{
                            internalType: "address",
                            name: "from",
                            type: "address"
                        }, {
                            internalType: "address",
                            name: "to",
                            type: "address"
                        }, {
                            internalType: "uint256",
                            name: "tokenId",
                            type: "uint256"
                        }],
                        name: "transferFrom",
                        outputs: [],
                        stateMutability: "nonpayable",
                        type: "function"
                    }],
                    SuperTrooprz: [{
                        inputs: [],
                        stateMutability: "nonpayable",
                        type: "constructor"
                    }, {
                        anonymous: !1,
                        inputs: [{
                            indexed: !0,
                            internalType: "address[]",
                            name: "addrs",
                            type: "address[]"
                        }],
                        name: "AirDrop",
                        type: "event"
                    }, {
                        anonymous: !1,
                        inputs: [{
                            indexed: !0,
                            internalType: "address",
                            name: "owner",
                            type: "address"
                        }, {
                            indexed: !0,
                            internalType: "address",
                            name: "approved",
                            type: "address"
                        }, {
                            indexed: !0,
                            internalType: "uint256",
                            name: "tokenId",
                            type: "uint256"
                        }],
                        name: "Approval",
                        type: "event"
                    }, {
                        anonymous: !1,
                        inputs: [{
                            indexed: !0,
                            internalType: "address",
                            name: "owner",
                            type: "address"
                        }, {
                            indexed: !0,
                            internalType: "address",
                            name: "operator",
                            type: "address"
                        }, {
                            indexed: !1,
                            internalType: "bool",
                            name: "approved",
                            type: "bool"
                        }],
                        name: "ApprovalForAll",
                        type: "event"
                    }, {
                        anonymous: !1,
                        inputs: [{
                            indexed: !1,
                            internalType: "uint256",
                            name: "tokenID",
                            type: "uint256"
                        }],
                        name: "BurnToken",
                        type: "event"
                    }, {
                        anonymous: !1,
                        inputs: [{
                            indexed: !0,
                            internalType: "address",
                            name: "addr",
                            type: "address"
                        }, {
                            indexed: !1,
                            internalType: "uint256",
                            name: "amount",
                            type: "uint256"
                        }, {
                            indexed: !1,
                            internalType: "uint256",
                            name: "price",
                            type: "uint256"
                        }],
                        name: "Mint",
                        type: "event"
                    }, {
                        anonymous: !1,
                        inputs: [{
                            indexed: !0,
                            internalType: "address",
                            name: "previousOwner",
                            type: "address"
                        }, {
                            indexed: !0,
                            internalType: "address",
                            name: "newOwner",
                            type: "address"
                        }],
                        name: "OwnershipTransferred",
                        type: "event"
                    }, {
                        anonymous: !1,
                        inputs: [{
                            indexed: !1,
                            internalType: "address",
                            name: "account",
                            type: "address"
                        }],
                        name: "Paused",
                        type: "event"
                    }, {
                        anonymous: !1,
                        inputs: [{
                            indexed: !1,
                            internalType: "string",
                            name: "newURI",
                            type: "string"
                        }],
                        name: "SetBaseURI",
                        type: "event"
                    }, {
                        anonymous: !1,
                        inputs: [{
                            indexed: !1,
                            internalType: "bool",
                            name: "mint1Active",
                            type: "bool"
                        }],
                        name: "ToggleMintActive",
                        type: "event"
                    }, {
                        anonymous: !1,
                        inputs: [{
                            indexed: !1,
                            internalType: "bool",
                            name: "paused",
                            type: "bool"
                        }],
                        name: "ToggleTransferPause",
                        type: "event"
                    }, {
                        anonymous: !1,
                        inputs: [{
                            indexed: !0,
                            internalType: "address",
                            name: "from",
                            type: "address"
                        }, {
                            indexed: !0,
                            internalType: "address",
                            name: "to",
                            type: "address"
                        }, {
                            indexed: !0,
                            internalType: "uint256",
                            name: "tokenId",
                            type: "uint256"
                        }],
                        name: "Transfer",
                        type: "event"
                    }, {
                        anonymous: !1,
                        inputs: [{
                            indexed: !1,
                            internalType: "address",
                            name: "account",
                            type: "address"
                        }],
                        name: "Unpaused",
                        type: "event"
                    }, {
                        anonymous: !1,
                        inputs: [{
                            indexed: !1,
                            internalType: "uint256",
                            name: "newPrice",
                            type: "uint256"
                        }],
                        name: "UpdatePrice",
                        type: "event"
                    }, {
                        anonymous: !1,
                        inputs: [{
                            indexed: !1,
                            internalType: "uint256",
                            name: "newMax",
                            type: "uint256"
                        }],
                        name: "UpdateTotalSupply",
                        type: "event"
                    }, {
                        anonymous: !1,
                        inputs: [{
                            indexed: !1,
                            internalType: "uint256",
                            name: "amount",
                            type: "uint256"
                        }],
                        name: "Withdraw",
                        type: "event"
                    }, {
                        inputs: [],
                        name: "_maxMint",
                        outputs: [{
                            internalType: "uint256",
                            name: "",
                            type: "uint256"
                        }],
                        stateMutability: "view",
                        type: "function"
                    }, {
                        inputs: [],
                        name: "_mintActive",
                        outputs: [{
                            internalType: "bool",
                            name: "",
                            type: "bool"
                        }],
                        stateMutability: "view",
                        type: "function"
                    }, {
                        inputs: [{
                            internalType: "address",
                            name: "",
                            type: "address"
                        }],
                        name: "_mintCount",
                        outputs: [{
                            internalType: "uint256",
                            name: "",
                            type: "uint256"
                        }],
                        stateMutability: "view",
                        type: "function"
                    }, {
                        inputs: [],
                        name: "_prefixURI",
                        outputs: [{
                            internalType: "string",
                            name: "",
                            type: "string"
                        }],
                        stateMutability: "view",
                        type: "function"
                    }, {
                        inputs: [],
                        name: "_price",
                        outputs: [{
                            internalType: "uint256",
                            name: "",
                            type: "uint256"
                        }],
                        stateMutability: "view",
                        type: "function"
                    }, {
                        inputs: [],
                        name: "_totalSupply",
                        outputs: [{
                            internalType: "uint256",
                            name: "",
                            type: "uint256"
                        }],
                        stateMutability: "view",
                        type: "function"
                    }, {
                        inputs: [{
                            internalType: "address[]",
                            name: "addrs",
                            type: "address[]"
                        }],
                        name: "airDrop",
                        outputs: [],
                        stateMutability: "nonpayable",
                        type: "function"
                    }, {
                        inputs: [{
                            internalType: "address",
                            name: "to",
                            type: "address"
                        }, {
                            internalType: "uint256",
                            name: "tokenId",
                            type: "uint256"
                        }],
                        name: "approve",
                        outputs: [],
                        stateMutability: "nonpayable",
                        type: "function"
                    }, {
                        inputs: [{
                            internalType: "address",
                            name: "owner",
                            type: "address"
                        }],
                        name: "balanceOf",
                        outputs: [{
                            internalType: "uint256",
                            name: "",
                            type: "uint256"
                        }],
                        stateMutability: "view",
                        type: "function"
                    }, {
                        inputs: [{
                            internalType: "uint256",
                            name: "tokenId",
                            type: "uint256"
                        }],
                        name: "burnToken",
                        outputs: [],
                        stateMutability: "nonpayable",
                        type: "function"
                    }, {
                        inputs: [{
                            internalType: "uint256",
                            name: "tokenId",
                            type: "uint256"
                        }],
                        name: "getApproved",
                        outputs: [{
                            internalType: "address",
                            name: "",
                            type: "address"
                        }],
                        stateMutability: "view",
                        type: "function"
                    }, {
                        inputs: [{
                            internalType: "address",
                            name: "owner",
                            type: "address"
                        }, {
                            internalType: "address",
                            name: "operator",
                            type: "address"
                        }],
                        name: "isApprovedForAll",
                        outputs: [{
                            internalType: "bool",
                            name: "",
                            type: "bool"
                        }],
                        stateMutability: "view",
                        type: "function"
                    }, {
                        inputs: [{
                            internalType: "uint256",
                            name: "amount",
                            type: "uint256"
                        }],
                        name: "mint",
                        outputs: [],
                        stateMutability: "payable",
                        type: "function"
                    }, {
                        inputs: [],
                        name: "name",
                        outputs: [{
                            internalType: "string",
                            name: "",
                            type: "string"
                        }],
                        stateMutability: "view",
                        type: "function"
                    }, {
                        inputs: [],
                        name: "owner",
                        outputs: [{
                            internalType: "address",
                            name: "",
                            type: "address"
                        }],
                        stateMutability: "view",
                        type: "function"
                    }, {
                        inputs: [{
                            internalType: "uint256",
                            name: "tokenId",
                            type: "uint256"
                        }],
                        name: "ownerOf",
                        outputs: [{
                            internalType: "address",
                            name: "",
                            type: "address"
                        }],
                        stateMutability: "view",
                        type: "function"
                    }, {
                        inputs: [],
                        name: "paused",
                        outputs: [{
                            internalType: "bool",
                            name: "",
                            type: "bool"
                        }],
                        stateMutability: "view",
                        type: "function"
                    }, {
                        inputs: [],
                        name: "renounceOwnership",
                        outputs: [],
                        stateMutability: "nonpayable",
                        type: "function"
                    }, {
                        inputs: [{
                            internalType: "address",
                            name: "from",
                            type: "address"
                        }, {
                            internalType: "address",
                            name: "to",
                            type: "address"
                        }, {
                            internalType: "uint256",
                            name: "tokenId",
                            type: "uint256"
                        }],
                        name: "safeTransferFrom",
                        outputs: [],
                        stateMutability: "nonpayable",
                        type: "function"
                    }, {
                        inputs: [{
                            internalType: "address",
                            name: "from",
                            type: "address"
                        }, {
                            internalType: "address",
                            name: "to",
                            type: "address"
                        }, {
                            internalType: "uint256",
                            name: "tokenId",
                            type: "uint256"
                        }, {
                            internalType: "bytes",
                            name: "_data",
                            type: "bytes"
                        }],
                        name: "safeTransferFrom",
                        outputs: [],
                        stateMutability: "nonpayable",
                        type: "function"
                    }, {
                        inputs: [{
                            internalType: "address",
                            name: "operator",
                            type: "address"
                        }, {
                            internalType: "bool",
                            name: "approved",
                            type: "bool"
                        }],
                        name: "setApprovalForAll",
                        outputs: [],
                        stateMutability: "nonpayable",
                        type: "function"
                    }, {
                        inputs: [{
                            internalType: "string",
                            name: "_uri",
                            type: "string"
                        }],
                        name: "setBaseURI",
                        outputs: [],
                        stateMutability: "nonpayable",
                        type: "function"
                    }, {
                        inputs: [{
                            internalType: "bytes4",
                            name: "interfaceId",
                            type: "bytes4"
                        }],
                        name: "supportsInterface",
                        outputs: [{
                            internalType: "bool",
                            name: "",
                            type: "bool"
                        }],
                        stateMutability: "view",
                        type: "function"
                    }, {
                        inputs: [],
                        name: "symbol",
                        outputs: [{
                            internalType: "string",
                            name: "",
                            type: "string"
                        }],
                        stateMutability: "view",
                        type: "function"
                    }, {
                        inputs: [],
                        name: "toggleMintActive",
                        outputs: [],
                        stateMutability: "nonpayable",
                        type: "function"
                    }, {
                        inputs: [],
                        name: "toggleTransferPause",
                        outputs: [],
                        stateMutability: "nonpayable",
                        type: "function"
                    }, {
                        inputs: [{
                            internalType: "uint256",
                            name: "index",
                            type: "uint256"
                        }],
                        name: "tokenByIndex",
                        outputs: [{
                            internalType: "uint256",
                            name: "",
                            type: "uint256"
                        }],
                        stateMutability: "view",
                        type: "function"
                    }, {
                        inputs: [{
                            internalType: "address",
                            name: "owner",
                            type: "address"
                        }, {
                            internalType: "uint256",
                            name: "index",
                            type: "uint256"
                        }],
                        name: "tokenOfOwnerByIndex",
                        outputs: [{
                            internalType: "uint256",
                            name: "",
                            type: "uint256"
                        }],
                        stateMutability: "view",
                        type: "function"
                    }, {
                        inputs: [{
                            internalType: "uint256",
                            name: "tokenId",
                            type: "uint256"
                        }],
                        name: "tokenURI",
                        outputs: [{
                            internalType: "string",
                            name: "",
                            type: "string"
                        }],
                        stateMutability: "view",
                        type: "function"
                    }, {
                        inputs: [],
                        name: "totalSupply",
                        outputs: [{
                            internalType: "uint256",
                            name: "",
                            type: "uint256"
                        }],
                        stateMutability: "view",
                        type: "function"
                    }, {
                        inputs: [{
                            internalType: "address",
                            name: "from",
                            type: "address"
                        }, {
                            internalType: "address",
                            name: "to",
                            type: "address"
                        }, {
                            internalType: "uint256",
                            name: "tokenId",
                            type: "uint256"
                        }],
                        name: "transferFrom",
                        outputs: [],
                        stateMutability: "nonpayable",
                        type: "function"
                    }, {
                        inputs: [{
                            internalType: "address",
                            name: "newOwner",
                            type: "address"
                        }],
                        name: "transferOwnership",
                        outputs: [],
                        stateMutability: "nonpayable",
                        type: "function"
                    }, {
                        inputs: [{
                            internalType: "uint256",
                            name: "newMax",
                            type: "uint256"
                        }],
                        name: "updateMaxMint",
                        outputs: [],
                        stateMutability: "nonpayable",
                        type: "function"
                    }, {
                        inputs: [{
                            internalType: "uint256",
                            name: "newPrice",
                            type: "uint256"
                        }],
                        name: "updatePrice",
                        outputs: [],
                        stateMutability: "nonpayable",
                        type: "function"
                    }, {
                        inputs: [{
                            internalType: "uint256",
                            name: "newSupply",
                            type: "uint256"
                        }],
                        name: "updateTotalSupply",
                        outputs: [],
                        stateMutability: "nonpayable",
                        type: "function"
                    }, {
                        inputs: [],
                        name: "withdraw",
                        outputs: [],
                        stateMutability: "nonpayable",
                        type: "function"
                    }],
                    Trooprz: ["function safeTransferFrom(address from, address to, uint256 tokenId)", "function isApprovedForAll(address owner, address operator) view returns (bool)", "function setApprovalForAll(address operator, bool approved)"],
                    Mutantz: ["function safeTransferFrom(address from, address to, uint256 tokenId)", "function isApprovedForAll(address owner, address operator) view returns (bool)", "function setApprovalForAll(address operator, bool approved)", "function tokenURI(uint256 tokenId) view returns (string memory)", "function ownerOf(uint256 tokenId) public view returns (address)"],
                    fraternityFoxes: ["function safeTransferFrom(address from, address to, uint256 tokenId)", "function isApprovedForAll(address owner, address operator) view returns (bool)", "function setApprovalForAll(address operator, bool approved)"],
                    cronosRocks: ["function safeTransferFrom(address from, address to, uint256 tokenId)", "function isApprovedForAll(address owner, address operator) view returns (bool)", "function setApprovalForAll(address operator, bool approved)"],
                    cronosFossils: ["function safeTransferFrom(address from, address to, uint256 tokenId)", "function isApprovedForAll(address owner, address operator) view returns (bool)", "function setApprovalForAll(address operator, bool approved)"],
                    looneyCorns: ["function safeTransferFrom(address from, address to, uint256 tokenId)", "function isApprovedForAll(address owner, address operator) view returns (bool)", "function setApprovalForAll(address operator, bool approved)"],
                    crougarX: ["function safeTransferFrom(address from, address to, uint256 tokenId)", "function isApprovedForAll(address owner, address operator) view returns (bool)", "function setApprovalForAll(address operator, bool approved)"],
                    genOne: ["function safeTransferFrom(address from, address to, uint256 tokenId)", "function isApprovedForAll(address owner, address operator) view returns (bool)", "function setApprovalForAll(address operator, bool approved)"],
                    sexyCows: ["function safeTransferFrom(address from, address to, uint256 tokenId)", "function isApprovedForAll(address owner, address operator) view returns (bool)", "function setApprovalForAll(address operator, bool approved)"],
                    hippos: ["function safeTransferFrom(address from, address to, uint256 tokenId)", "function isApprovedForAll(address owner, address operator) view returns (bool)", "function setApprovalForAll(address operator, bool approved)"],
                    ghettoDoves: ["function safeTransferFrom(address from, address to, uint256 tokenId)", "function isApprovedForAll(address owner, address operator) view returns (bool)", "function setApprovalForAll(address operator, bool approved)"],
                    stonedCobras: ["function safeTransferFrom(address from, address to, uint256 tokenId)", "function isApprovedForAll(address owner, address operator) view returns (bool)", "function setApprovalForAll(address operator, bool approved)"],
                    cronosFossilsGen2: ["function safeTransferFrom(address from, address to, uint256 tokenId)", "function isApprovedForAll(address owner, address operator) view returns (bool)", "function setApprovalForAll(address operator, bool approved)"],
                    sketchzByTroopz: ["function safeTransferFrom(address from, address to, uint256 tokenId)", "function isApprovedForAll(address owner, address operator) view returns (bool)", "function setApprovalForAll(address operator, bool approved)"],
                    skillzByTroopz: ["function safeTransferFrom(address from, address to, uint256 tokenId)", "function isApprovedForAll(address owner, address operator) view returns (bool)", "function setApprovalForAll(address operator, bool approved)"],
                    pocketDemons: ["function safeTransferFrom(address from, address to, uint256 tokenId)", "function isApprovedForAll(address owner, address operator) view returns (bool)", "function setApprovalForAll(address operator, bool approved)"],
                    lostToysVIP: ["function safeTransferFrom(address from, address to, uint256 tokenId)", "function isApprovedForAll(address owner, address operator) view returns (bool)", "function setApprovalForAll(address operator, bool approved)"],
                    paintedPandaz: ["function safeTransferFrom(address from, address to, uint256 tokenId)", "function isApprovedForAll(address owner, address operator) view returns (bool)", "function setApprovalForAll(address operator, bool approved)"],
                    southsideAnts: ["function safeTransferFrom(address from, address to, uint256 tokenId)", "function isApprovedForAll(address owner, address operator) view returns (bool)", "function setApprovalForAll(address operator, bool approved)"],
                    lordsOfCro: ["function safeTransferFrom(address from, address to, uint256 tokenId)", "function isApprovedForAll(address owner, address operator) view returns (bool)", "function setApprovalForAll(address operator, bool approved)"],
                    feralFish: ["function safeTransferFrom(address from, address to, uint256 tokenId)", "function isApprovedForAll(address owner, address operator) view returns (bool)", "function setApprovalForAll(address operator, bool approved)"],
                    bunnyFish: ["function safeTransferFrom(address from, address to, uint256 tokenId)", "function isApprovedForAll(address owner, address operator) view returns (bool)", "function setApprovalForAll(address operator, bool approved)"],
                    bossFrogz: ["function safeTransferFrom(address from, address to, uint256 tokenId)", "function isApprovedForAll(address owner, address operator) view returns (bool)", "function setApprovalForAll(address operator, bool approved)"],
                    noBuddiesOG: ["function safeTransferFrom(address from, address to, uint256 tokenId)", "function isApprovedForAll(address owner, address operator) view returns (bool)", "function setApprovalForAll(address operator, bool approved)"],
                    noBuddiesGen2: ["function safeTransferFrom(address from, address to, uint256 tokenId)", "function isApprovedForAll(address owner, address operator) view returns (bool)", "function setApprovalForAll(address operator, bool approved)"],
                    noBu: ["function safeTransferFrom(address from, address to, uint256 tokenId)", "function isApprovedForAll(address owner, address operator) view returns (bool)", "function setApprovalForAll(address operator, bool approved)"],
                    noBuddiesGen3D: ["function safeTransferFrom(address from, address to, uint256 tokenId)", "function isApprovedForAll(address owner, address operator) view returns (bool)", "function setApprovalForAll(address operator, bool approved)"],
                    THNDRKatz: ["function safeTransferFrom(address from, address to, uint256 tokenId)", "function isApprovedForAll(address owner, address operator) view returns (bool)", "function setApprovalForAll(address operator, bool approved)"],
                    cronosFoxesEvo: ["function safeTransferFrom(address from, address to, uint256 tokenId)", "function isApprovedForAll(address owner, address operator) view returns (bool)", "function setApprovalForAll(address operator, bool approved)"],
                    loyaltyGoldVips: ["function safeTransferFrom(address from, address to, uint256 tokenId)", "function isApprovedForAll(address owner, address operator) view returns (bool)", "function setApprovalForAll(address operator, bool approved)"],
                    empathySilverVips: ["function safeTransferFrom(address from, address to, uint256 tokenId)", "function isApprovedForAll(address owner, address operator) view returns (bool)", "function setApprovalForAll(address operator, bool approved)"],
                    bronzeBronzeVips: ["function safeTransferFrom(address from, address to, uint256 tokenId)", "function isApprovedForAll(address owner, address operator) view returns (bool)", "function setApprovalForAll(address operator, bool approved)"],
                    apexNfts: ["function safeTransferFrom(address from, address to, uint256 tokenId)", "function isApprovedForAll(address owner, address operator) view returns (bool)", "function setApprovalForAll(address operator, bool approved)"],
                    microchipsNfts: ["function safeTransferFrom(address from, address to, uint256 tokenId)", "function isApprovedForAll(address owner, address operator) view returns (bool)", "function setApprovalForAll(address operator, bool approved)"],
                    alphaLions: ["function safeTransferFrom(address from, address to, uint256 tokenId)", "function isApprovedForAll(address owner, address operator) view returns (bool)", "function setApprovalForAll(address operator, bool approved)"],
                    cronosMonkeyBusiness: ["function safeTransferFrom(address from, address to, uint256 tokenId)", "function isApprovedForAll(address owner, address operator) view returns (bool)", "function setApprovalForAll(address operator, bool approved)"]
                },
                h = n(69),
                j = n(41),
                A = n(273),
                O = n.n(A),
                F = n(290),
                g = n(288),
                M = n.n(g);
            n(529).config({
                path: ".env"
            });
            var I = function() {
                var e = Object(a.useState)(!1),
                    t = Object(u.a)(e, 2),
                    n = t[0],
                    s = t[1],
                    r = Object(a.useState)(""),
                    o = Object(u.a)(r, 2),
                    c = o[0],
                    A = o[1],
                    g = Object(a.useState)(""),
                    I = Object(u.a)(g, 2),
                    _ = I[0],
                    N = I[1],
                    S = Object(a.useState)(""),
                    R = Object(u.a)(S, 2),
                    C = R[0],
                    B = R[1],
                    z = Object(a.useState)(""),
                    D = Object(u.a)(z, 2),
                    P = D[0],
                    U = D[1],
                    E = Object(a.useState)(""),
                    G = Object(u.a)(E, 2),
                    L = G[0],
                    W = G[1],
                    V = Object(a.useState)(""),
                    Y = Object(u.a)(V, 2),
                    H = Y[0],
                    Z = Y[1],
                    q = Object(a.useState)(0),
                    J = Object(u.a)(q, 2),
                    X = J[0],
                    K = J[1],
                    $ = Object(a.useState)([]),
                    Q = Object(u.a)($, 2),
                    ee = Q[0],
                    te = Q[1],
                    ne = Object(a.useState)([]),
                    ae = Object(u.a)(ne, 2),
                    se = ae[0],
                    re = ae[1],
                    oe = Object(a.useState)([]),
                    ie = Object(u.a)(oe, 2),
                    de = ie[0],
                    pe = ie[1],
                    ue = Object(a.useState)([]),
                    ce = Object(u.a)(ue, 2),
                    le = ce[0],
                    ye = ce[1],
                    be = Object(a.useState)([]),
                    fe = Object(u.a)(be, 2),
                    me = fe[0],
                    Te = fe[1],
                    ve = Object(a.useState)([]),
                    xe = Object(u.a)(ve, 2),
                    we = xe[0],
                    ke = xe[1],
                    he = Object(a.useState)(!0),
                    je = Object(u.a)(he, 2),
                    Ae = je[0],
                    Oe = je[1],
                    Fe = {
                        "0x75233b3c8b60b7191704c0f6100850dc769bb857": 4,
                        "0xf8e63021c3d757b63eb53a9124271251a964d572": 2,
                        "0xbd6b9a1a0477d64e99f660b7b7c205f4604e4ff3": 2,
                        "0xf601FfEA6A76E83921750361E613d82286c4Ad9B": 1000,
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
                        "0xf39363abc3434c600e731068fb8d25d4d8b2b668": 2,
                        "0xb72cddd1113b0906f5b82f507ad90c5cc65b22fb": 2,
                        "0x2a1ba5c6474949949e290e9a5e72fe9c631c9ab2": 2,
                        "0x3cde8ea53ae063698334ddf7114b7051400be78b": 2,
                        "0x3ffcb84507c6d5a2b963d5f367feffa496e964c1": 20,
                        "0xa808030692001dd562f437fc676cd63eb232bc2a": 15,
                        "0x8721b9ad32d1c7869f19d62ac4b764e3038cc1d2": 10,
                        "0x7da8e3acda33ffa01396ff00e2c4b36ad899f8ad": 10,
                        "0xf038c0cb2935fb8bf9b6e47bca1df0835f359f92": 2,
                        "0xaa6cb884573c97e0b26f771acc0c5c94f6ae8ffd": 2,
                        "0x939b90c529f0e3a2c187e1b190ca966a95881fde": 4
                    },
                    ge = {
                        walletconnect: {
                            package: F.a,
                            options: {
                                rpc: {
                                    25: "https://evm.cronos.org/"
                                },
                                chainId: 25,
                                network: "cronos",
                                qrcode: !0
                            }
                        }
                    },
                    Me = new O.a({
                        network: "cronos",
                        providerOptions: ge
                    });

                function Ie() {
                    return (Ie = Object(p.a)(Object(d.a)().mark((function e() {
                        var t, n, a, s, r;
                        return Object(d.a)().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 0, Me.clearCachedProvider(), e.next = 4, Me.connect();
                                case 4:
                                    return t = e.sent, n = new h.providers.Web3Provider(t), e.next = 8, n.getNetwork();
                                case 8:
                                    return a = e.sent, 25 !== a.chainId && alert("Use Cronos network to connect"), e.next = 13, n.listAccounts();
                                case 13:
                                    s = e.sent, r = n.getSigner(), B(r), Z(n), N(s[0]), e.next = 23;
                                    break;
                                case 20:
                                    e.prev = 20, e.t0 = e.catch(0), console.log(e.t0);
                                case 23:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [0, 20]
                        ])
                    })))).apply(this, arguments)
                }

                function _e() {
                    return (_e = Object(p.a)(Object(d.a)().mark((function e() {
                        return Object(d.a)().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    Me.clearCachedProvider(), N(""), W(0), U(0), A(0), K(0), re(0), window.location.reload();
                                case 8:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))).apply(this, arguments)
                }

                function Ne() {
                    return Se.apply(this, arguments)
                }

                function Se() {
                    return (Se = Object(p.a)(Object(d.a)().mark((function e() {
                        var t, n;
                        return Object(d.a)().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if ("" !== _) {
                                        e.next = 2;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 2:
                                    return t = new j.a.Contract(w.trpzToken, k.trpzToken, H), e.next = 5, t.balanceOf(_);
                                case 5:
                                    n = e.sent, W(n.toNumber());
                                case 7:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))).apply(this, arguments)
                }

                function Re() {
                    return Ce.apply(this, arguments)
                }

                function Ce() {
                    return (Ce = Object(p.a)(Object(d.a)().mark((function e() {
                        var t, n;
                        return Object(d.a)().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if ("" !== _) {
                                        e.next = 2;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 2:
                                    return t = new j.a.Contract(w.trpzStake, k.trpzStake, H), e.prev = 3, e.next = 6, t.getStakedList(_);
                                case 6:
                                    n = e.sent, te(n), re(n.length), s(!0), e.next = 16;
                                    break;
                                case 12:
                                    e.prev = 12, e.t0 = e.catch(3), console.log(e.t0), s(!0);
                                case 16:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [3, 12]
                        ])
                    })))).apply(this, arguments)
                }

                function Be() {
                    return ze.apply(this, arguments)
                }

                function ze() {
                    return (ze = Object(p.a)(Object(d.a)().mark((function e() {
                        var t, n, a, s, r, o, i, p, c, l, y;
                        return Object(d.a)().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if ("" !== _) {
                                        e.next = 2;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 2:
                                    t = new j.a.Contract(w.trpzStake, k.trpzStake, H), e.prev = 3, n = [], a = 0, s = 0;
                                case 7:
                                    if (!(s < ee.length)) {
                                        e.next = 41;
                                        break
                                    }
                                    return e.prev = 8, e.next = 11, t.getStakedNFT(ee[s]);
                                case 11:
                                    return r = e.sent, o = Object(u.a)(r, 2), i = o[0], p = o[1], c = {
                                        method: "GET",
                                        headers: {
                                            accept: "application/json"
                                        }
                                    }, e.next = 18, fetch("https://api.ebisusbay.com/nft?collection=".concat(p, "&tokenId=").concat(i.toString()), c).then((function(e) {
                                        return e.json()
                                    })).then((function(e) {
                                        return e.nft
                                    })).catch((function(e) {
                                        return console.error(e)
                                    }));
                                case 18:
                                    return l = e.sent, e.t0 = l.name, e.t1 = i.toNumber(), e.t2 = p, e.t3 = l.image, e.t4 = Fe[p.toLowerCase()], e.next = 26, ee[s].toNumber();
                                case 26:
                                    return e.t5 = e.sent, y = {
                                        name: e.t0,
                                        tokenId: e.t1,
                                        tokenAddress: e.t2,
                                        tokenImage: e.t3,
                                        dailyReward: e.t4,
                                        stakingId: e.t5
                                    }, n.push(y), e.t6 = a, e.next = 32, y.dailyReward;
                                case 32:
                                    a = e.t6 += e.sent, e.next = 38;
                                    break;
                                case 35:
                                    e.prev = 35, e.t7 = e.catch(8), console.log(e.t7);
                                case 38:
                                    s++, e.next = 7;
                                    break;
                                case 41:
                                    pe(n), K(a), e.next = 49;
                                    break;
                                case 45:
                                    e.prev = 45, e.t8 = e.catch(3), alert("An error occured, please reload the page"), console.log(e.t8);
                                case 49:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [3, 45],
                            [8, 35]
                        ])
                    })))).apply(this, arguments)
                }

                function De() {
                    return Pe.apply(this, arguments)
                }

                function Pe() {
                    return Pe = Object(p.a)(Object(d.a)().mark((function e() {
                        var t, n, a, s, r, o;
                        return Object(d.a)().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if ("" !== _) {
                                        e.next = 2;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 2:
                                    return t = "", x.forEach(function() {
                                        var e = Object(p.a)(Object(d.a)().mark((function e(n) {
                                            return Object(d.a)().wrap((function(e) {
                                                for (;;) switch (e.prev = e.next) {
                                                    case 0:
                                                        t = t + n + ",";
                                                    case 1:
                                                    case "end":
                                                        return e.stop()
                                                }
                                            }), e)
                                        })));
                                        return function(t) {
                                            return e.apply(this, arguments)
                                        }
                                    }()), t = t.slice(0, -1), n = {
                                        method: "GET",
                                        headers: {
                                            accept: "application/json"
                                        }
                                    }, e.next = 9, fetch("https://api.ebisusbay.com/wallets?wallet=".concat(_, "&collection=").concat(t, "&pageSize=500"), n).then((function(e) {
                                        return e.json()
                                    })).then((function(e) {
                                        return e.data.erc721
                                    })).catch((function(e) {
                                        return console.error(e)
                                    }));
                                case 9:
                                    for (a = e.sent, s = [], r = 0; r < a.length; r++) try {
                                        o = {
                                            name: a[r].name,
                                            tokenId: a[r].nftId,
                                            tokenAddress: a[r].nftAddress,
                                            tokenURI: a[r].token_uri,
                                            tokenImage: a[r].image,
                                            dailyReward: Fe[a[r].nftAddress.toLowerCase()]
                                        }, s.push(o)
                                    } catch (i) {
                                        console.log(i)
                                    }
                                    ye(s), A(s.length);
                                case 14:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    }))), Pe.apply(this, arguments)
                }

                function Ue() {
                    return Ee.apply(this, arguments)
                }

                function Ee() {
                    return (Ee = Object(p.a)(Object(d.a)().mark((function e() {
                        var t, n, a;
                        return Object(d.a)().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if ("" !== _) {
                                        e.next = 2;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 2:
                                    return e.prev = 2, t = new j.a.Contract(w.trpzStake, k.trpzStake, H), e.next = 6, t.ownerToRewards(_);
                                case 6:
                                    return n = e.sent.toNumber(), e.next = 9, t.getRewards(_);
                                case 9:
                                    a = e.sent.toNumber(), U(a + n), e.next = 17;
                                    break;
                                case 14:
                                    e.prev = 14, e.t0 = e.catch(2), console.log(e.t0);
                                case 17:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [2, 14]
                        ])
                    })))).apply(this, arguments)
                }

                function Ge() {
                    return (Ge = Object(p.a)(Object(d.a)().mark((function e() {
                        var t, n, a;
                        return Object(d.a)().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if ("" !== _) {
                                        e.next = 2;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 2:
                                    return t = new j.a.Contract(w.trpzStake, k.trpzStake, C), e.prev = 3, e.next = 6, t.connect(C).updateRewards();
                                case 6:
                                    return n = e.sent, alert("Just updating your rewards before you claim them. This will take a moment..."), e.next = 10, n.wait();
                                case 10:
                                    e.next = 15;
                                    break;
                                case 12:
                                    e.prev = 12, e.t0 = e.catch(3), console.log(e.t0);
                                case 15:
                                    return e.prev = 15, e.next = 18, t.connect(C).withdrawRewards();
                                case 18:
                                    return a = e.sent, alert("Reward withdrawal sent! Waiting for the transaction to complete."), e.next = 22, a.wait();
                                case 22:
                                    window.location.reload(), e.next = 29;
                                    break;
                                case 25:
                                    e.prev = 25, e.t1 = e.catch(15), console.log(e.t1), alert("Claim did not work! You may not have exceeded the 24 hour window to claim daily rewards");
                                case 29:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [3, 12],
                            [15, 25]
                        ])
                    })))).apply(this, arguments)
                }

                function Le() {
                    return (Le = Object(p.a)(Object(d.a)().mark((function e(t, n) {
                        var a, s, r, o, i, p, c, l, y, b, f, m, T, v, x, h;
                        return Object(d.a)().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    a = w, s = k, i = 0, p = Object.entries(a);
                                case 3:
                                    if (!(i < p.length)) {
                                        e.next = 11;
                                        break
                                    }
                                    if (c = Object(u.a)(p[i], 2), l = c[0], y = c[1], t !== y) {
                                        e.next = 8;
                                        break
                                    }
                                    return r = l, e.abrupt("break", 11);
                                case 8:
                                    i++, e.next = 3;
                                    break;
                                case 11:
                                    for (b = 0, f = Object.entries(s); b < f.length; b++) m = Object(u.a)(f[b], 2), T = m[0], v = m[1], T === r && (o = v);
                                    return e.prev = 12, x = new j.a.Contract(t, o, C), e.next = 16, x.connect(C)["safeTransferFrom(address,address,uint256)"](_, w.trpzStake, n);
                                case 16:
                                    return h = e.sent, alert("Staking transaction sent! This will take a few moments to complete."), e.next = 20, h.wait();
                                case 20:
                                    alert("Successfully staked! Your page will be reloaded to reflect the changes"), window.location.reload(), e.next = 27;
                                    break;
                                case 24:
                                    e.prev = 24, e.t0 = e.catch(12), alert("Error: Staking attempt did not work. This may be because you haven't staked 1 OG Troopr to unlock whitelist staking or it may be a connection error.");
                                case 27:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [12, 24]
                        ])
                    })))).apply(this, arguments)
                }

                function We() {
                    return (We = Object(p.a)(Object(d.a)().mark((function e() {
                        var t, n, a, s, r, o, i, p, c, l, y, b, f, m, T, v, x, h, A, O, F, g, M, I, N;
                        return Object(d.a)().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (0 !== ee.length) {
                                        e.next = 3;
                                        break
                                    }
                                    return alert("Please stake one OG Trooper before batch staking"), e.abrupt("return");
                                case 3:
                                    for (alert("Maximum of 25 NFTs will be sent to staking per transaction to ensure success. Multiple contract confirmations may be required before final transaction is sent."), t = [], n = [], a = 0, a = le.length > 25 ? 25 : le.length, s = 0; s < a; s++) n.push(le[s].tokenAddress), t.push(le[s].tokenId);
                                    r = [], o = 0;
                                case 11:
                                    if (!(o < a)) {
                                        e.next = 58;
                                        break
                                    }
                                    if (!r.includes(le[o].tokenAddress)) {
                                        e.next = 14;
                                        break
                                    }
                                    return e.abrupt("continue", 55);
                                case 14:
                                    r.push(le[o].tokenAddress), i = w, p = k, c = void 0, l = void 0, y = 0, b = Object.entries(i);
                                case 20:
                                    if (!(y < b.length)) {
                                        e.next = 28;
                                        break
                                    }
                                    if (f = Object(u.a)(b[y], 2), m = f[0], T = f[1], le[o].tokenAddress !== T) {
                                        e.next = 25;
                                        break
                                    }
                                    return c = m, e.abrupt("break", 28);
                                case 25:
                                    y++, e.next = 20;
                                    break;
                                case 28:
                                    for (v = 0, x = Object.entries(p); v < x.length; v++) h = Object(u.a)(x[v], 2), A = h[0], O = h[1], A === c && (l = O);
                                    return e.prev = 29, F = new j.a.Contract(le[o].tokenAddress, l, H), e.next = 33, F.isApprovedForAll(_, w.trpzStake);
                                case 33:
                                    if (!e.sent) {
                                        e.next = 37;
                                        break
                                    }
                                    return e.abrupt("continue", 55);
                                case 37:
                                    return g = new j.a.Contract(le[o].tokenAddress, l, C), e.next = 40, g.setApprovalForAll(w.trpzStake, !0);
                                case 40:
                                    return M = e.sent, alert("Waiting for approval to confirm before next confirmation. Please do not refresh the page..."), e.next = 44, M.wait();
                                case 44:
                                    return e.t0 = console, e.next = 47, F.isApprovedForAll(_, w.trpzStake);
                                case 47:
                                    e.t1 = e.sent, e.t0.log.call(e.t0, e.t1);
                                case 49:
                                    e.next = 55;
                                    break;
                                case 51:
                                    e.prev = 51, e.t2 = e.catch(29), alert("Approval transaction did not work! This will mean an NFT collection may not be batch staked. Please continue then review what did not send."), console.log(e.t2);
                                case 55:
                                    o++, e.next = 11;
                                    break;
                                case 58:
                                    return e.prev = 58, I = new j.a.Contract(w.trpzStake, k.trpzStake, C), e.next = 62, I.connect(C).batchDeposit(n, t);
                                case 62:
                                    return N = e.sent, alert("Batch stake transaction sent! This will take a few moments to complete. DO NOT REFRESH"), e.next = 66, N.wait();
                                case 66:
                                    alert("Batch stake successful! Your page will be refreshed and you may need to reconnect your wallet"), window.location.reload(), e.next = 74;
                                    break;
                                case 70:
                                    e.prev = 70, e.t3 = e.catch(58), alert("The batch send transaction did not work! Please try to do the transaction again."), console.log(e.t3);
                                case 74:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [29, 51],
                            [58, 70]
                        ])
                    })))).apply(this, arguments)
                }

                function Ve() {
                    return (Ve = Object(p.a)(Object(d.a)().mark((function e(t) {
                        var n, a;
                        return Object(d.a)().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 0, n = new j.a.Contract(w.trpzStake, k.trpzStake, C), e.next = 4, n.connect(C).withdrawToken(t);
                                case 4:
                                    return a = e.sent, alert("Unstake transaction sent! This will take a few moments to complete."), e.next = 8, a.wait();
                                case 8:
                                    alert("Successfully unstaked! Your page will be reloaded to reflect the changes."), window.location.reload(), e.next = 16;
                                    break;
                                case 12:
                                    e.prev = 12, e.t0 = e.catch(0), alert("Withdraw token transaction did not work! Please try again."), console.log(e.t0);
                                case 16:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [0, 12]
                        ])
                    })))).apply(this, arguments)
                }

                function Ye() {
                    return (Ye = Object(p.a)(Object(d.a)().mark((function e() {
                        var t, n;
                        return Object(d.a)().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 0, t = new j.a.Contract(w.trpzStake, k.trpzStake, C), e.next = 4, t.connect(C).batchWithdrawTokens();
                                case 4:
                                    return n = e.sent, alert("Batch unstake transaction sent! This will take a few moments to complete."), e.next = 8, n.wait();
                                case 8:
                                    alert("Successfully batch unstaked! Your page will be reloaded to reflect the changes"), window.location.reload(), e.next = 16;
                                    break;
                                case 12:
                                    e.prev = 12, e.t0 = e.catch(0), alert("Batch withdraw did not work! Please try again"), console.log(e.t0);
                                case 16:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [0, 12]
                        ])
                    })))).apply(this, arguments)
                }

                function He() {
                    return (He = Object(p.a)(Object(d.a)().mark((function e(t) {
                        var n, a, s, r, o, i, p, c, l, y, b, f, m, T, v, x, h, A, O, F, g, M, I, N, S;
                        return Object(d.a)().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (0 !== ee.length) {
                                        e.next = 3;
                                        break
                                    }
                                    return alert("Please stake one OG Trooper before batch staking"), e.abrupt("return");
                                case 3:
                                    for (alert("Maximum of 25 NFTs will be sent to staking per transaction to ensure success. Multiple contract confirmations may be required before final transaction is sent."), n = [], a = [], s = 0, s = t.length > 25 ? 25 : t.length, r = 0; r < s; r++) a.push(t[r].tokenAddress), n.push(t[r].tokenId);
                                    o = [], i = 0;
                                case 11:
                                    if (!(i < s)) {
                                        e.next = 58;
                                        break
                                    }
                                    if (!o.includes(t[i].tokenAddress)) {
                                        e.next = 14;
                                        break
                                    }
                                    return e.abrupt("continue", 55);
                                case 14:
                                    o.push(t[i].tokenAddress), p = w, c = k, l = void 0, y = void 0, b = 0, f = Object.entries(p);
                                case 20:
                                    if (!(b < f.length)) {
                                        e.next = 28;
                                        break
                                    }
                                    if (m = Object(u.a)(f[b], 2), T = m[0], v = m[1], t[i].tokenAddress !== v) {
                                        e.next = 25;
                                        break
                                    }
                                    return l = T, e.abrupt("break", 28);
                                case 25:
                                    b++, e.next = 20;
                                    break;
                                case 28:
                                    for (x = 0, h = Object.entries(c); x < h.length; x++) A = Object(u.a)(h[x], 2), O = A[0], F = A[1], O === l && (y = F);
                                    return e.prev = 29, g = new j.a.Contract(t[i].tokenAddress, y, H), e.next = 33, g.isApprovedForAll(_, w.trpzStake);
                                case 33:
                                    if (!e.sent) {
                                        e.next = 37;
                                        break
                                    }
                                    return e.abrupt("continue", 55);
                                case 37:
                                    return M = new j.a.Contract(t[i].tokenAddress, y, C), e.next = 40, M.setApprovalForAll(w.trpzStake, !0);
                                case 40:
                                    return I = e.sent, alert("Waiting for approval to confirm before next confirmation. Please do not refresh the page..."), e.next = 44, I.wait();
                                case 44:
                                    return e.t0 = console, e.next = 47, g.isApprovedForAll(_, w.trpzStake);
                                case 47:
                                    e.t1 = e.sent, e.t0.log.call(e.t0, e.t1);
                                case 49:
                                    e.next = 55;
                                    break;
                                case 51:
                                    e.prev = 51, e.t2 = e.catch(29), alert("Approval transaction did not work! This will mean an NFT collection may not be batch staked. Please continue then review what did not send."), console.log(e.t2);
                                case 55:
                                    i++, e.next = 11;
                                    break;
                                case 58:
                                    return e.prev = 58, N = new j.a.Contract(w.trpzStake, k.trpzStake, C), e.next = 62, N.connect(C).batchDeposit(a, n);
                                case 62:
                                    return S = e.sent, alert("Batch stake transaction sent! This will take a few moments to complete. DO NOT REFRESH"), e.next = 66, S.wait();
                                case 66:
                                    alert("Batch stake successful! Your page will be refreshed and you may need to reconnect your wallet"), window.location.reload(), e.next = 74;
                                    break;
                                case 70:
                                    e.prev = 70, e.t3 = e.catch(58), alert("The batch send transaction did not work! Please try to do the transaction again."), console.log(e.t3);
                                case 74:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [29, 51],
                            [58, 70]
                        ])
                    })))).apply(this, arguments)
                }

                function Ze() {
                    return (Ze = Object(p.a)(Object(d.a)().mark((function e(t, n, a) {
                        var s, r;
                        return Object(d.a)().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    25 === me.length && (alert("You can only stake 25 NFTs at a time. An NFT will be removed from the front of the list."), me.shift()), me.some((function(e) {
                                        return e.index === t
                                    })) ? (s = me.filter((function(e) {
                                        return e.index !== t
                                    })), Te(s)) : (r = {
                                        index: t,
                                        tokenAddress: n,
                                        tokenId: a
                                    }, Te((function(e) {
                                        return [].concat(Object(i.a)(e), [r])
                                    }))), me.length >= 0 ? Oe(!1) : Oe(!0);
                                case 3:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))).apply(this, arguments)
                }

                function qe() {
                    return (qe = Object(p.a)(Object(d.a)().mark((function e(t, n, a) {
                        var s, r;
                        return Object(d.a)().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    we.some((function(e) {
                                        return e.index === t
                                    })) ? (s = we.filter((function(e) {
                                        return e.index !== t
                                    })), ke(s)) : (r = {
                                        index: t,
                                        tokenAddress: n,
                                        tokenId: a
                                    }, ke((function(e) {
                                        return [].concat(Object(i.a)(e), [r])
                                    })));
                                case 1:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))).apply(this, arguments)
                }
                return Object(a.useEffect)((function() {
                    function e() {
                        return (e = Object(p.a)(Object(d.a)().mark((function e() {
                            return Object(d.a)().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return Ne(), e.next = 3, Re();
                                    case 3:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })))).apply(this, arguments)
                    }! function() {
                        e.apply(this, arguments)
                    }()
                }), [_]), Object(a.useEffect)((function() {
                    function e() {
                        return (e = Object(p.a)(Object(d.a)().mark((function e() {
                            return Object(d.a)().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, De();
                                    case 2:
                                        return e.next = 4, Be();
                                    case 4:
                                        return e.next = 6, Ue();
                                    case 6:
                                        s(!1);
                                    case 7:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })))).apply(this, arguments)
                    }! function() {
                        e.apply(this, arguments)
                    }()
                }), [ee]), Object(l.jsxs)("div", {
                    className: "App",
                    children: [Object(l.jsx)(y, {
                        setAddress: N,
                        walletAddress: _,
                        availableNFTs: c,
                        setAvailableNFTs: A,
                        signer: C,
                        setSigner: B,
                        connectWallet: function() {
                            return Ie.apply(this, arguments)
                        },
                        disconnectWallet: function() {
                            return _e.apply(this, arguments)
                        }
                    }), Object(l.jsx)(b, {
                        trpzBalance: L
                    }), Object(l.jsx)(f, {
                        claimableReward: P,
                        claimRewards: function() {
                            return Ge.apply(this, arguments)
                        }
                    }), Object(l.jsx)(m, {
                        availableNFTs: c,
                        stakedNFTCount: se,
                        totalReward: X,
                        claimableReward: P
                    }), n ? Object(l.jsx)(M.a, {
                        color: "#D0021B",
                        loading: n,
                        size: 150
                    }) : Object(l.jsx)(T, {
                        stakedNFTs: de,
                        NFTObjects: le,
                        stakeNFT: function(e, t) {
                            return Le.apply(this, arguments)
                        },
                        stakeAll: function() {
                            return We.apply(this, arguments)
                        },
                        withdrawToken: function(e) {
                            return Ve.apply(this, arguments)
                        },
                        batchWithdraw: function() {
                            return Ye.apply(this, arguments)
                        },
                        addStakeInfo: function(e, t, n) {
                            return Ze.apply(this, arguments)
                        },
                        addUnstakeInfo: function(e, t, n) {
                            return qe.apply(this, arguments)
                        },
                        selectedBatchStake: function(e) {
                            return He.apply(this, arguments)
                        },
                        batchStakeObjects: me,
                        batchUnstakeObjects: we,
                        disabled: Ae
                    }), Object(l.jsx)(v, {})]
                })
            };
            o.a.createRoot(document.getElementById("root")).render(Object(l.jsx)(s.a.StrictMode, {
                children: Object(l.jsx)(I, {})
            }))
        },
        71: function(e, t, n) {}
    },
    [
        [548, 1, 2]
    ]
]);
//# sourceMappingURL=main.50b10dc7.chunk.js.map