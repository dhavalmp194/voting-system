// if (!window.ethereum) {
//     web3 = window.ethereum.enable();
// } 

// web3 = new Web3(new window.ethereum.HttpProvider("https://kovan.infura.io/v3/d3c130d0062b49f78f315220f14db23e"));
web3 = new Web3(ethereum);

var myAccount = [];

const connectMetamask = async () => {
    if (window.ethereum) {
        try {
            myAccount = await ethereum.request({ method: 'eth_requestAccounts' });
            console.log(myAccount);
        } catch (error) {
            console.log(error);
        }
    }
}
connectMetamask();

var myContract = new web3.eth.Contract([
    {
        "inputs": [],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "uint256",
                "name": "_candidateId",
                "type": "uint256"
            }
        ],
        "name": "votedEvent",
        "type": "event"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "name": "approveVoters",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "candidatesCount",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "setElection",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "voter",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "id",
                "type": "uint256"
            },
            {
                "internalType": "address",
                "name": "voterAddress",
                "type": "address"
            },
            {
                "internalType": "string",
                "name": "name",
                "type": "string"
            },
            {
                "internalType": "bool",
                "name": "approved",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "voterAddress",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "voterCount",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "name": "voters",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "string",
                "name": "_name",
                "type": "string"
            }
        ],
        "name": "addCandidate",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_id",
                "type": "uint256"
            }
        ],
        "name": "getParticularCandidate",
        "outputs": [
            {
                "internalType": "string",
                "name": "_name",
                "type": "string"
            },
            {
                "internalType": "uint256",
                "name": "_voteCount",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getCandidateList",
        "outputs": [
            {
                "internalType": "string[]",
                "name": "_name",
                "type": "string[]"
            },
            {
                "internalType": "uint256[]",
                "name": "_voteCount",
                "type": "uint256[]"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "string",
                "name": "_name",
                "type": "string"
            }
        ],
        "name": "registerVoter",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getVoterList",
        "outputs": [
            {
                "internalType": "uint256[]",
                "name": "_id",
                "type": "uint256[]"
            },
            {
                "internalType": "string[]",
                "name": "_name",
                "type": "string[]"
            },
            {
                "internalType": "address[]",
                "name": "_voterAddress",
                "type": "address[]"
            },
            {
                "internalType": "bool[]",
                "name": "_approved",
                "type": "bool[]"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_id",
                "type": "uint256"
            }
        ],
        "name": "approveVoter",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_candidateId",
                "type": "uint256"
            }
        ],
        "name": "vote",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bool",
                "name": "_setElection",
                "type": "bool"
            }
        ],
        "name": "setElectionState",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "calculateVote",
        "outputs": [
            {
                "internalType": "uint256[]",
                "name": "_candidateId",
                "type": "uint256[]"
            },
            {
                "internalType": "string[]",
                "name": "_name",
                "type": "string[]"
            },
            {
                "internalType": "uint256[]",
                "name": "_totalVotes",
                "type": "uint256[]"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    }
], '0x2182e1de0e1665a8bda7788f80910167fa43af16');

console.log(myContract);

const getCandidateList = () => {
    myContract.methods.getCandidateList().call().then(data => {
        let candidateList;
        data[0].forEach((element, index) => {
            candidateList +=`<tr>
                                <td>${data[0][index]}</td>
                                <td>${data[1][index]}</td>
                            </tr>`;
        });
        $("#candidateList").append(candidateList);
    }).catch(e => {
        console.log(e);
    })
}
getCandidateList();


const addCandidate = (name) => {
    console.log(name);
    console.log(myAccount[0]);
    myContract.methods.addCandidate(name).send({from : myAccount[0]})
        .then((data) => {
            console.log(data)
        })
        .catch((e) => {
            console.log(e);
        })
}
$(document).on('submit', '#addCandidate', function(e){
	e.preventDefault();
	var fundName = $("#candidateName").val();
    addCandidate(fundName);
})