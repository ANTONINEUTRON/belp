import axios from "axios";
import Project, { SearchResult } from "./project_model";

interface getProductsProps{
    name:string;
    id:string;
}

const BASE_URL = "https://cors-anywhere.herokuapp.com/https://fetch.thegrid.id";

const getProjectsFromApi = async(projectIDS: String[] = [], startIndex: number = 1,): Promise<Project[]> => {
    if(projectIDS.length === 0){
        let idsToFetch = generateIdList(startIndex); //"ID-01,ID-02,ID-03,ID-04,ID-05,ID-06,ID-07,ID-08,ID-09,ID-10";
        
        const url = BASE_URL+"/?ids="+idsToFetch;//"https://fetch.thegrid.id/?ids=" + idsToFetch;
        // // console.log(url);
        
        let res = await axios.get(url);

        console.log(res.data.body);
        // let res = await 
        return res.data.body;//getAllProjs();//res.data.body; 
    }

    return getAllProjs().filter((value, index, array)=>{
        console.log(projectIDS[index] == value.id);
        
        return value.id == projectIDS[index];
    });
}

export const getAProject = async(projectId: String) : Promise<Project>=>{
    // const url = BASE_URL+"/?ids="+projectId;
    // let res = await axios.get(url);

    // return res.data.body;

    return getAllProjs()[2];
}

export const searchForProject = async (query: string): Promise<SearchResult>=>{
    //
    //
    const url = BASE_URL+"/?q="+query;

    let res = await axios.get(url);
    return res.data.body.search_result;
}

function generateIdList(startIndex: number): string {
    // Initialize an empty array to store IDs
    const idList: string[] = [];
  
    // Loop 10 times to generate 10 IDs
    for (let i = 0; i < 25; i++) {
      // Create the ID string with padding for single-digit numbers
      const id = `ID-${startIndex + i}`;
      // Add the ID to the list
      idList.push(id);
    }
  
    // Join the IDs in the list with commas and return the final string
    return idList.join(',');
  }

function getAllProjs(): Project[]{
    return [
        {
            "id": "ID-1",
            "profile": {
                "id": "ID-1",
                "name": "Bitcoin",
                "foundingDate": "2008-10-31",
                "logo": "https://img.thegrid.id/upload/7b6704a0d6a78fd6e0ac5df4b19c0466b0b770431a27b601d8328ecd855a2b4b.svg",
                "descriptionShort": "Bitcoin is a decentralized digital currency, without a central bank or single administrator, that can be sent from user to user on the peer-to-peer bitcoin network.",
                "descriptionLong": "Bitcoin offers a way to conduct transactions without reliance on centralized entities. Transactions are verified by network nodes through cryptography and recorded in a public dispersed ledger called a blockchain. Bitcoin was invented in 2008 by an unknown person or group of people using the name Satoshi Nakamoto.",
                "urlMain": "https://bitcoin.org",
                "urlBlog": "https://bitcoin.org/en/blog",
                "urlDocumentation": "https://developer.bitcoin.org",
                "urlWhitepaper": "https://bitcoin.org/bitcoin.pdf",
                "profileType": {
                    "id": "14",
                    "name": "Project",
                    "definition": "This profile is an organization with an undefined objective, purpose or offering. "
                },
                "profileSector": {
                    "id": "1",
                    "name": "Finance",
                    "definition": "Anything to do with trading or exchanging fungible assets such as money or commodities."
                },
                "profileStatus": {
                    "id": "2",
                    "name": "Active",
                    "definition": "A person can successfully have a two-way interaction with the profile’s offering (e.g. use the product or service, build on the blockchain), or the profile has a working product that is being maintained."
                },
                "assets": {
                    "numberOfRecords": 1,
                    "linkToFetch": "https://fetch.thegrid.id/?assetsForProfiles=ID-1"
                },
                "socials": {
                    "numberOfRecords": 0,
                    "linkToFetch": "https://fetch.thegrid.id/?socialsForProfiles=ID-1"
                },
                "entities": {
                    "numberOfRecords": 0,
                    "linkToFetch": "https://fetch.thegrid.id/?entitiesForProfiles=ID-1"
                },
                "products": {
                    "numberOfRecords": 1,
                    "linkToFetch": "https://fetch.thegrid.id/?productsForProfiles=ID-1"
                }
            }
        },
        {
            "id": "ID-2",
            "profile": {
                "id": "ID-2",
                "name": "Ethereum",
                "foundingDate": "",
                "logo": "https://img.thegrid.id/upload/db2c12aba4e96cbb0eeb88523e1a88b21a1df62b1eff189d598b1f62b83e800b.png",
                "descriptionShort": "Ethereum is a decentralized, open-source blockchain platform featuring smart contract functionality.",
                "descriptionLong": "Ethereum is a global, open-source platform for decentralized applications. It enables developers to build and deploy smart contracts: applications that run exactly as programmed without downtime, censorship, fraud or third-party interference. Ethereum has its own cryptocurrency, Ether, which is used to pay for transaction fees and computational services on the network.",
                "urlMain": "https://ethereum.org",
                "urlBlog": "https://blog.ethereum.org",
                "urlDocumentation": "https://ethereum.org/en/developers/docs/",
                "urlWhitepaper": "https://ethereum.org/en/whitepaper/",
                "profileType": {
                    "id": "14",
                    "name": "Project",
                    "definition": "This profile is an organization with an undefined objective, purpose or offering. "
                },
                "profileSector": {
                    "id": "19",
                    "name": "Blockchain Platforms",
                    "definition": "A platform for developers and users to build and interact with a smart contract or infrastructure. Example: Ethereum"
                },
                "profileStatus": {
                    "id": "2",
                    "name": "Active",
                    "definition": "A person can successfully have a two-way interaction with the profile’s offering (e.g. use the product or service, build on the blockchain), or the profile has a working product that is being maintained."
                },
                "assets": {
                    "numberOfRecords": 1,
                    "linkToFetch": "https://fetch.thegrid.id/?assetsForProfiles=ID-2"
                },
                "socials": {
                    "numberOfRecords": 0,
                    "linkToFetch": "https://fetch.thegrid.id/?socialsForProfiles=ID-2"
                },
                "entities": {
                    "numberOfRecords": 1,
                    "linkToFetch": "https://fetch.thegrid.id/?entitiesForProfiles=ID-2"
                },
                "products": {
                    "numberOfRecords": 1,
                    "linkToFetch": "https://fetch.thegrid.id/?productsForProfiles=ID-2"
                }
            }
        },
        {
            "id": "ID-3",
            "profile": {
                "id": "ID-3",
                "name": "Solana",
                "foundingDate": "",
                "logo": "https://img.thegrid.id/upload/05f0ff25b43b09d1493ef4aae706e138258bce93c3a218ce3ca2fed1a7249ced.svg",
                "descriptionShort": "Solana is a blockchain platform for building decentralized applications and marketplaces.",
                "descriptionLong": "Solana is an open-source project implementing a permissionless blockchain. It utilizes a unique combination of Proof-of-History (PoH) and Proof-of-Stake (PoS) consensus mechanisms to enable fast, secure, and scalable decentralized apps and marketplaces. Solana aims to solve the trilemma of achieving scalability, security, and decentralization simultaneously.",
                "urlMain": "https://solana.com",
                "urlBlog": "https://solana.com/news",
                "urlDocumentation": "https://docs.solana.com/",
                "urlWhitepaper": "https://solana.com/solana-whitepaper.pdf",
                "profileType": {
                    "id": "14",
                    "name": "Project",
                    "definition": "This profile is an organization with an undefined objective, purpose or offering. "
                },
                "profileSector": {
                    "id": "19",
                    "name": "Blockchain Platforms",
                    "definition": "A platform for developers and users to build and interact with a smart contract or infrastructure. Example: Ethereum"
                },
                "profileStatus": {
                    "id": "2",
                    "name": "Active",
                    "definition": "A person can successfully have a two-way interaction with the profile’s offering (e.g. use the product or service, build on the blockchain), or the profile has a working product that is being maintained."
                },
                "assets": {
                    "numberOfRecords": 1,
                    "linkToFetch": "https://fetch.thegrid.id/?assetsForProfiles=ID-3"
                },
                "socials": {
                    "numberOfRecords": 0,
                    "linkToFetch": "https://fetch.thegrid.id/?socialsForProfiles=ID-3"
                },
                "entities": {
                    "numberOfRecords": 1,
                    "linkToFetch": "https://fetch.thegrid.id/?entitiesForProfiles=ID-3"
                },
                "products": {
                    "numberOfRecords": 1,
                    "linkToFetch": "https://fetch.thegrid.id/?productsForProfiles=ID-3"
                }
            }
        },
        {
            "id": "ID-4",
            "profile": {
                "id": "ID-4",
                "name": "Jupiter",
                "foundingDate": "2021-11-01",
                "logo": "https://img.thegrid.id/upload/93b2ba6d5d68fdfb658773bceece20fb9e02c951fbe026c56c02d5f927bd8350.svg",
                "descriptionShort": "Jupiter is the protocol that finds the best rates by discovering and optimizing routes for any Solana token swap.",
                "descriptionLong": "Jupiter is a decentralized exchange aggregator on Solana that sources liquidity across various DEXes to provide users with the most optimal token swap rates. It supports swapping of SPL tokens and has integrations with major Solana wallets like Phantom and Solflare.",
                "urlMain": "https://jup.ag",
                "urlBlog": "https://blog.jup.ag",
                "urlDocumentation": "https://station.jup.ag/docs",
                "urlWhitepaper": "https://station.jup.ag/blog/green-paper",
                "profileType": {
                    "id": "14",
                    "name": "Project",
                    "definition": "This profile is an organization with an undefined objective, purpose or offering. "
                },
                "profileSector": {
                    "id": "1",
                    "name": "Finance",
                    "definition": "Anything to do with trading or exchanging fungible assets such as money or commodities."
                },
                "profileStatus": {
                    "id": "2",
                    "name": "Active",
                    "definition": "A person can successfully have a two-way interaction with the profile’s offering (e.g. use the product or service, build on the blockchain), or the profile has a working product that is being maintained."
                },
                "assets": {
                    "numberOfRecords": 1,
                    "linkToFetch": "https://fetch.thegrid.id/?assetsForProfiles=ID-4"
                },
                "socials": {
                    "numberOfRecords": 0,
                    "linkToFetch": "https://fetch.thegrid.id/?socialsForProfiles=ID-4"
                },
                "entities": {
                    "numberOfRecords": 1,
                    "linkToFetch": "https://fetch.thegrid.id/?entitiesForProfiles=ID-4"
                },
                "products": {
                    "numberOfRecords": 3,
                    "linkToFetch": "https://fetch.thegrid.id/?productsForProfiles=ID-4"
                }
            }
        },
        {
            "id": "ID-5",
            "profile": {
                "id": "ID-5",
                "name": "Raydium",
                "foundingDate": "2021-02-01",
                "logo": "https://img.thegrid.id/upload/4e4271bb6dc790592227a520577e2b447fb8f2c669a30004c5963bc44adeacaa.svg",
                "descriptionShort": "Raydium is an automated market maker (AMM) and liquidity provider built on the Solana blockchain.",
                "descriptionLong": "Raydium is an on-chain order book AMM on Solana that enables lightning-fast trades, shared liquidity, and new features for earning yield. It allows users to swap tokens, provide liquidity to pools, farm yield by staking LP tokens, participate in AcceleRaytor token launches, and more.\n\nOther AMM DEXs and DeFi protocols normally only have access to liquidity within their own pools and do not have access to a central order book. \n\nIt provides a central order book for ecosystem-wide liquidity, meaning that Raydium allows access to third-party order flow and liquidity on the order book. ",
                "urlMain": "https://raydium.io",
                "urlBlog": "https://raydium.medium.com",
                "urlDocumentation": "https://docs.raydium.io/raydium/",
                "urlWhitepaper": "https://raydium.io/Raydium-Litepaper.pdf",
                "profileType": {
                    "id": "2",
                    "name": "Company",
                    "definition": "This profile has a for-profit mandate in place, or at least a business plan with the goal of generating revenue."
                },
                "profileSector": {
                    "id": "1",
                    "name": "Finance",
                    "definition": "Anything to do with trading or exchanging fungible assets such as money or commodities."
                },
                "profileStatus": {
                    "id": "2",
                    "name": "Active",
                    "definition": "A person can successfully have a two-way interaction with the profile’s offering (e.g. use the product or service, build on the blockchain), or the profile has a working product that is being maintained."
                },
                "assets": {
                    "numberOfRecords": 1,
                    "linkToFetch": "https://fetch.thegrid.id/?assetsForProfiles=ID-5"
                },
                "socials": {
                    "numberOfRecords": 1,
                    "linkToFetch": "https://fetch.thegrid.id/?socialsForProfiles=ID-5"
                },
                "entities": {
                    "numberOfRecords": 0,
                    "linkToFetch": "https://fetch.thegrid.id/?entitiesForProfiles=ID-5"
                },
                "products": {
                    "numberOfRecords": 1,
                    "linkToFetch": "https://fetch.thegrid.id/?productsForProfiles=ID-5"
                }
            }
        },
        {
            "id": "ID-6",
            "profile": {
                "id": "ID-6",
                "name": "Port Finance",
                "foundingDate": "2021-05-01",
                "logo": "https://img.thegrid.id/harvest/f3aa9a41e4e4f53d4582e045b75d802b4fe07466940fb04c5bd94cc07571d1a0.jpg",
                "descriptionShort": "Port Finance is a Solana-based decentralized money market protocol offering lending products, multi-collateral deposits, and competitive interest rates.",
                "descriptionLong": "Port Finance is a decentralized money market protocol on the Solana blockchain, offering a comprehensive suite of lending products, including variable and fixed-rate lending and interest rate swaps. The platform allows users to deposit multiple collateral types to define their borrowing power. Port Finance offers competitive lending and interest rate derivative products, with interest rates determined by the total borrowed amount and liquidity provided by lenders. The protocol utilizes third-party liquidations to maintain a healthy ecosystem and supports Flash Loan functionality. Port Finance's native token, PORT, enables users to participate in governance and share in protocol fees.",
                "urlMain": "https://port.finance",
                "urlBlog": "https://medium.com/@port-finance",
                "urlDocumentation": "https://docs.port.finance",
                "urlWhitepaper": "",
                "profileType": {
                    "id": "2",
                    "name": "Company",
                    "definition": "This profile has a for-profit mandate in place, or at least a business plan with the goal of generating revenue."
                },
                "profileSector": {
                    "id": "1",
                    "name": "Finance",
                    "definition": "Anything to do with trading or exchanging fungible assets such as money or commodities."
                },
                "profileStatus": {
                    "id": "2",
                    "name": "Active",
                    "definition": "A person can successfully have a two-way interaction with the profile’s offering (e.g. use the product or service, build on the blockchain), or the profile has a working product that is being maintained."
                },
                "assets": {
                    "numberOfRecords": 1,
                    "linkToFetch": "https://fetch.thegrid.id/?assetsForProfiles=ID-6"
                },
                "socials": {
                    "numberOfRecords": 2,
                    "linkToFetch": "https://fetch.thegrid.id/?socialsForProfiles=ID-6"
                },
                "entities": {
                    "numberOfRecords": 0,
                    "linkToFetch": "https://fetch.thegrid.id/?entitiesForProfiles=ID-6"
                },
                "products": {
                    "numberOfRecords": 1,
                    "linkToFetch": "https://fetch.thegrid.id/?productsForProfiles=ID-6"
                }
            }
        },
        {
            "id": "ID-7",
            "profile": {
                "id": "ID-7",
                "name": "Apricot",
                "foundingDate": "2021-04-01",
                "logo": "https://img.thegrid.id/harvest/d6efd3e8d0aa86fec892602cb859c8a506c81e00e08588a7ad07a4db35e65192.png",
                "descriptionShort": "Apricot is a lending protocol that supports leveraged yield farming on Solana. Their mission is to help users maximize yield while protecting their downsides.",
                "descriptionLong": "Apricot Finance is a decentralized lending protocol on the Solana blockchain that offers cross-margin leveraged yield farming, lending, and borrowing services. The platform caters to users seeking to maximize their yields while minimizing risks through its three primary services: Apricot Lend, Apricot X-Farm, and Apricot Assist. Apricot Finance aims to provide a comprehensive suite of tools for users to effectively manage their assets and optimize their returns in the decentralized finance space.",
                "urlMain": "https://apricot.one",
                "urlBlog": "https://apricotfinance.medium.com",
                "urlDocumentation": "https://docs.apricot.one",
                "urlWhitepaper": "",
                "profileType": {
                    "id": "14",
                    "name": "Project",
                    "definition": "This profile is an organization with an undefined objective, purpose or offering. "
                },
                "profileSector": {
                    "id": "1",
                    "name": "Finance",
                    "definition": "Anything to do with trading or exchanging fungible assets such as money or commodities."
                },
                "profileStatus": {
                    "id": "3",
                    "name": "Inactive",
                    "definition": "A person has frequent unsuccessful interactions with the profile’s service or product, or the service or product is no longer being supported / actively worked on."
                },
                "assets": {
                    "numberOfRecords": 0,
                    "linkToFetch": "https://fetch.thegrid.id/?assetsForProfiles=ID-7"
                },
                "socials": {
                    "numberOfRecords": 1,
                    "linkToFetch": "https://fetch.thegrid.id/?socialsForProfiles=ID-7"
                },
                "entities": {
                    "numberOfRecords": 1,
                    "linkToFetch": "https://fetch.thegrid.id/?entitiesForProfiles=ID-7"
                },
                "products": {
                    "numberOfRecords": 1,
                    "linkToFetch": "https://fetch.thegrid.id/?productsForProfiles=ID-7"
                }
            }
        },
        {
            "id": "ID-8",
            "profile": {
                "id": "ID-8",
                "name": "Solflare",
                "foundingDate": "2020-05-01",
                "logo": "https://img.thegrid.id/harvest/b856a0d5f5bf35b026aa26ae328070c45a837fb2d3e9e1fc34526ccc3b51b1bd.png",
                "descriptionShort": "Solflare is a non-custodial crypto wallet for the Solana blockchain.",
                "descriptionLong": "Solflare is a secure, non-custodial wallet for storing and managing digital assets on the Solana blockchain. It offers a user-friendly interface for sending, receiving, and staking SOL and SPL tokens. Solflare also provides access to Solana DApps and supports hardware wallets for enhanced security.",
                "urlMain": "https://solflare.com",
                "urlBlog": "https://academy.solflare.com/",
                "urlDocumentation": "https://docs.solflare.com/",
                "urlWhitepaper": "",
                "profileType": {
                    "id": "2",
                    "name": "Company",
                    "definition": "This profile has a for-profit mandate in place, or at least a business plan with the goal of generating revenue."
                },
                "profileSector": {
                    "id": "9",
                    "name": "Asset Management",
                    "definition": "Includes tools or products that allow customers to manage items of value that exist on a blockchain. Example: wallets"
                },
                "profileStatus": {
                    "id": "2",
                    "name": "Active",
                    "definition": "A person can successfully have a two-way interaction with the profile’s offering (e.g. use the product or service, build on the blockchain), or the profile has a working product that is being maintained."
                },
                "assets": {
                    "numberOfRecords": 0,
                    "linkToFetch": "https://fetch.thegrid.id/?assetsForProfiles=ID-8"
                },
                "socials": {
                    "numberOfRecords": 1,
                    "linkToFetch": "https://fetch.thegrid.id/?socialsForProfiles=ID-8"
                },
                "entities": {
                    "numberOfRecords": 2,
                    "linkToFetch": "https://fetch.thegrid.id/?entitiesForProfiles=ID-8"
                },
                "products": {
                    "numberOfRecords": 1,
                    "linkToFetch": "https://fetch.thegrid.id/?productsForProfiles=ID-8"
                }
            }
        },
        {
            "id": "ID-9",
            "profile": {
                "id": "ID-9",
                "name": "Mad Lads",
                "foundingDate": "2022-09-01",
                "logo": "https://img.thegrid.id/harvest/95b21fd47c5aa92b13ec1c93d0eb2177a34571dd14d46a83ee7ed1ba0f952c89.svg",
                "descriptionShort": "Mad Lads is a Solana-based NFT collection with 1930s gangster-inspired artwork, built on the Backpack wallet and xNFT protocol.",
                "descriptionLong": "Mad Lads is an NFT collection created by the Coral team. It features unique artwork inspired by 1930s British-American gangsters. Built on the Backpack protocol, a wallet and application management platform for the Solana blockchain, Mad Lads NFTs are minted and managed within the Backpack wallet. ",
                "urlMain": "https://madlads.com",
                "urlBlog": "https://news.madlads.com",
                "urlDocumentation": "",
                "urlWhitepaper": "",
                "profileType": {
                    "id": "8",
                    "name": "NFT Collection",
                    "definition": "This profile is a set of unique art items for purchase, typically created by a single creator, though it may also be a theme that includes pieces of work from multiple creators."
                },
                "profileSector": {
                    "id": "25",
                    "name": "NFTs",
                    "definition": "Anything that facilitates activities around unique (often collector) items on chain. Example: marketplaces"
                },
                "profileStatus": {
                    "id": "2",
                    "name": "Active",
                    "definition": "A person can successfully have a two-way interaction with the profile’s offering (e.g. use the product or service, build on the blockchain), or the profile has a working product that is being maintained."
                },
                "assets": {
                    "numberOfRecords": 1,
                    "linkToFetch": "https://fetch.thegrid.id/?assetsForProfiles=ID-9"
                },
                "socials": {
                    "numberOfRecords": 2,
                    "linkToFetch": "https://fetch.thegrid.id/?socialsForProfiles=ID-9"
                },
                "entities": {
                    "numberOfRecords": 1,
                    "linkToFetch": "https://fetch.thegrid.id/?entitiesForProfiles=ID-9"
                },
                "products": {
                    "numberOfRecords": 0,
                    "linkToFetch": "https://fetch.thegrid.id/?productsForProfiles=ID-9"
                }
            }
        },
        {
            "id": "ID-10",
            "profile": {
                "id": "ID-10",
                "name": "Nosana",
                "foundingDate": "2021-06-01",
                "logo": "https://img.thegrid.id/harvest/313b5bbc52f937422601bd1aacefb1bd8c5719d2d7eff460e31b1c5c4ba761ce.svg",
                "descriptionShort": "Nosana is a Solana-based decentralized GPU grid platform that connects GPU owners with AI users, providing cost-effective and sustainable computing resources.",
                "descriptionLong": "Nosana is a decentralized GPU grid platform built on the Solana network. It enables GPU owners to monetize idle hardware by renting it out to AI users for inference workloads. By leveraging globally distributed idle GPUs, Nosana aims to provide cost-effective and efficient access to GPU resources, offering up to 85% lower costs than traditional public clouds. The platform promotes peer-to-peer computational sharing and contributes to a more sustainable computing environment by utilizing spare computing power.",
                "urlMain": "https://nosana.io/",
                "urlBlog": "https://nosana.medium.com",
                "urlDocumentation": "https://docs.nosana.io",
                "urlWhitepaper": "",
                "profileType": {
                    "id": "14",
                    "name": "Project",
                    "definition": "This profile is an organization with an undefined objective, purpose or offering. "
                },
                "profileSector": {
                    "id": "19",
                    "name": "Blockchain Platforms",
                    "definition": "A platform for developers and users to build and interact with a smart contract or infrastructure. Example: Ethereum"
                },
                "profileStatus": {
                    "id": "2",
                    "name": "Active",
                    "definition": "A person can successfully have a two-way interaction with the profile’s offering (e.g. use the product or service, build on the blockchain), or the profile has a working product that is being maintained."
                },
                "assets": {
                    "numberOfRecords": 1,
                    "linkToFetch": "https://fetch.thegrid.id/?assetsForProfiles=ID-10"
                },
                "socials": {
                    "numberOfRecords": 3,
                    "linkToFetch": "https://fetch.thegrid.id/?socialsForProfiles=ID-10"
                },
                "entities": {
                    "numberOfRecords": 1,
                    "linkToFetch": "https://fetch.thegrid.id/?entitiesForProfiles=ID-10"
                },
                "products": {
                    "numberOfRecords": 1,
                    "linkToFetch": "https://fetch.thegrid.id/?productsForProfiles=ID-10"
                }
            }
        }
    ];
}

export default getProjectsFromApi