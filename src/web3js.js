// if (!window.ethereum) {
//     web3 = window.ethereum.enable();
// } 

// web3 = new Web3(new window.ethereum.HttpProvider("https://kovan.infura.io/v3/d3c130d0062b49f78f315220f14db23e"));
web3 = new Web3(ethereum);

var myAccountAddress;

var myAccount = [];
var adminAddress = "0xa10434ab27543636ac39558da7e87300b08034b5";

var myContract = new web3.eth.Contract([
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "beneficiary",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenAmount",
				"type": "uint256"
			}
		],
		"name": "_sendTokens",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_partyName",
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
		"name": "approveVoter",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_firstname",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_lastname",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_email",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_mobile",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_resAddress",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_birthDate",
				"type": "string"
			}
		],
		"name": "registerVoter",
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
		"inputs": [
			{
				"internalType": "contract IERC20",
				"name": "_token",
				"type": "address"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
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
		"name": "calculateVote",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "_candidateId",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "_name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_partyName",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "_totalVotes",
				"type": "uint256"
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
		"name": "getCandidateList",
		"outputs": [
			{
				"internalType": "string[]",
				"name": "_name",
				"type": "string[]"
			},
			{
				"internalType": "string[]",
				"name": "_partyName",
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
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_id",
				"type": "uint256"
			}
		],
		"name": "getVoterAddress",
		"outputs": [
			{
				"internalType": "address",
				"name": "_voterAddress",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getVoterDetails",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "_id",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "_firstname",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_lastname",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_email",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_mobile",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_birthDate",
				"type": "string"
			},
			{
				"internalType": "address",
				"name": "_voterAddress",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "_resAdderess",
				"type": "string"
			},
			{
				"internalType": "bool",
				"name": "_approved",
				"type": "bool"
			}
		],
		"stateMutability": "view",
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
				"name": "_firstname",
				"type": "string[]"
			},
			{
				"internalType": "string[]",
				"name": "_lastname",
				"type": "string[]"
			},
			{
				"internalType": "string[]",
				"name": "_email",
				"type": "string[]"
			},
			{
				"internalType": "string[]",
				"name": "_mobile",
				"type": "string[]"
			},
			{
				"internalType": "string[]",
				"name": "_birthDate",
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
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "registeredVoter",
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
		"inputs": [],
		"name": "token",
		"outputs": [
			{
				"internalType": "contract IERC20",
				"name": "",
				"type": "address"
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
				"name": "firstname",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "lastname",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "email",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "mobile",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "resAddress",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "birthDate",
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
	}
], '0x3DA4C102033d49Ff837455e607a2999f67F26167');

var tokenContract = new web3.eth.Contract([
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
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "Approval",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "Transfer",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			}
		],
		"name": "allowance",
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
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "approve",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "balanceOf",
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
		"name": "decimals",
		"outputs": [
			{
				"internalType": "uint8",
				"name": "",
				"type": "uint8"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "subtractedValue",
				"type": "uint256"
			}
		],
		"name": "decreaseAllowance",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "addedValue",
				"type": "uint256"
			}
		],
		"name": "increaseAllowance",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "name",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "symbol",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalSupply",
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
				"name": "recipient",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "transfer",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "sender",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "recipient",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "transferFrom",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	}
], '0xed7E3e02f07c187f4abdfD457F4Cce2c6931C2Ec');

console.log(myContract);

const getCandidateList = () => {
    myContract.methods.getCandidateList().call().then(data => {
        let candidateList;
        let totalCandidates = `<div class="statistic__item item--green">
                                <h2 class="counter-value">${data[0].length}</h2>
                                <span class="desc">Total Candidates</span>
                                <div class="icon">
                                    <img src="images/dashboard/map-of-roads.png" alt="...">
                                </div>
                            </div>`;
        data[0].forEach((element, index) => {
            candidateList +=`<div class="db-booking-item">
                            <div class="booking-img">
                                <img src="images/clients/reviewer-1.png" style="padding: 5px;" alt="...">
                            </div>
                            <h4>${data[0][index]}<span class="book-pending">${data[1][index]}</span></h4>
                            <ul class="buttons" id="vote" data-id= ${index+1}>
                                <li><a href="#0" class="btn v5"><i class="ion-ios-checkmark" style="color: white;"></i> Vote</a></li>
                            </ul>
                            </div>`;
        });
        $("#totalCandidates").append(totalCandidates);
        $("#candidateListNew").append(candidateList);
    }).catch(e => {
        console.log(e);
    })
}

const getCandidateListAdmin = () => {
    myContract.methods.getCandidateList().call().then(data => {
        console.log('data: ', data);
        let candidateList;
        let totalCandidates = `<div class="statistic__item item--green">
                                <h2 class="counter-value">${data[0].length}</h2>
                                <span class="desc">Total Candidates</span>
                                <div class="icon">
                                    <img src="images/dashboard/map-of-roads.png" alt="...">
                                </div>
                            </div>`;
        data[0].forEach((element, index) => {
            candidateList +=`<div class="db-booking-item">
                            <div class="booking-img">
                                <img src="images/clients/reviewer-1.png" style="padding: 5px;" alt="...">
                            </div>
                            <h4>${data[0][index]}<span class="book-pending">${data[1][index]}</span></h4>

                            </div>`;
        });
        $("#totalCandidates").append(totalCandidates);
        $("#candidateListNew").append(candidateList);
    }).catch(e => {
        console.log(e);
    })
}

const getUser = () => {
    myContract.methods.getVoterList().call()
    .then(data => {
        data[0].forEach((element, index) => {
            myContract.methods.voterAddress(element - 1).call()
            .then(address => {
                const status = data[7][index]; 
                const name = data[1][index];
                if(myAccount[0] == address.toLowerCase()){
                    let data;
                    const strName = `Hello ${name}!`;
                    $("#name").append(strName);
                    if(status){
                        data = `<i class="ion-ios-checkmark" style="color: green;"></i> Approved`;
                        $("#approved").append(data);
                    }else{
                        data = `<i class="ion-ios-close" style="color: red;"></i> Not Approved`;
                        $("#approved").append(data);
                    }
                }
            })
        })
    })
}

const getVoterListAdmin = () => {
    myContract.methods.getVoterList().call().then(data => {
        console.log('data: ', data);
        let voterList;
        data[0].forEach((element, index) => {
            if(data[7][index] ==  true){
                voterList +=`<div class="db-booking-item">
                                <div class="booking-img">
                                    <img src="images/clients/reviewer-1.png" style="padding: 5px;" alt="...">
                                </div>
                                <h4>${data[1][index]} ${data[2][index]}</h4>
                                <p>Email : ${data[3][index]}</p>
                                <p>Mobile : ${data[4][index]}</p>
                                <p>BirthDate : ${data[5][index]}</p>
                                <p>Ethereum Address : ${data[6][index]}</p>
                                <ul class="buttons">
                                    <li><a href="#0" class="btn v5"><i class="ion-ios-checkmark" style="color: white;"></i> Approved</a></li>
                                </ul>
                                </div>`;
            }else{
                voterList +=`<div class="db-booking-item">
                                <div class="booking-img">
                                    <img src="images/clients/reviewer-1.png" style="padding: 5px;" alt="...">
                                </div>
                                <h4>${data[1][index]} ${data[2][index]}</h4>
                                <p>Email : ${data[3][index]}</p>
                                <p>Mobile : ${data[4][index]}</p>
                                <p>BirthDate : ${data[5][index]}</p>
                                <p>Ethereum Address : ${data[6][index]}</p>
                                <ul class="buttons" id="approve" data-id=${data[0][index]}>
                                    <li><a href="#0" class="btn v5">Approve</a></li>
                                </ul>
                                </div>`;
            }
        });
        $("#voterListNew").append(voterList);
    }).catch(e => {
        console.log(e);
    })
}

const getVoterCount = () => {
    myContract.methods.getVoterList().call().then(data => {
        console.log('data: ', data[0].length);
        
        let totalVoters = `<div class="statistic__item item--orange">
                                <h2 class="counter-value">${data[0].length}</h2>
                                <span class="desc">Total Voters</span>
                                <div class="icon">
                                    <img src="images/dashboard/review.png" alt="...">
                                </div>
                            </div>`;
        $("#totalVoters").append(totalVoters);
    }).catch(e => {
        console.log(e);
    })
}

const checkVotingIsStart = () => {
	return new Promise((resolve, reject) => {

		myContract.methods.setElection().call().then(data => {
			resolve(data);
		}).catch(e => {
			console.log(e);
			reject(e);
		})
	})
}

const electionStatus = () => {
    
    checkVotingIsStart()
	.then(data=> {

		console.log('Election data: ', data);
	
		let electionInfo;
		if(data == true){
			electionInfo = `<p class="name"><i class="ion-ios-checkmark" style="margin-right: 15px; color: green;"></i>
			Voting is started you can vote your candidate from candidate list.</p>`;
		}else{
			electionInfo = `<p class="name"><i class="ion-ios-close" style="margin-right: 15px; color: red;"></i>
			No elections scheduled today.</p>`;
		}
		$("#electionState").append(electionInfo);
	})
}

const changeElectionStateButton = () => {
    checkVotingIsStart()
	.then(data => {
		let button;
		if(data == true){
			button = `<a class="btn v3" id="elecButtonTrue">End Election</a>`;
			$("#setElectionButton").append(button);
		}else{
			button = `<a class="btn v3" id="elecButtonFalse">Start Election</a>`;
			$("#setElectionButton").append(button);
		}
	})
}

const changeElectionState = (value) =>{
    myContract.methods.setElectionState(value).send({from : myAccount[0]})
        .then((data) => {
            console.log(data)
        })
        .catch((e) => {
            console.log(e);
        })
}

$(document).on('click', '#elecButtonFalse', function(e){
    e.preventDefault();
	console.log("In");
    changeElectionState(true);
})

$(document).on('click', '#elecButtonTrue', function(e){
    e.preventDefault();
console.log("In");
    changeElectionState(false);
})

const addCandidate = (name, party) => {
    console.log(name);
    console.log(myAccount[0]);
    myContract.methods.addCandidate(name, party).send({from : myAccount[0]})
        .then((data) => {
            console.log(data)
        })
        .catch((e) => {
            console.log("err : ", e);
        })
}

$(document).on('submit', '#addCandidate', function(e){
    e.preventDefault();
    var fundName = $("#candidateName").val();
    var partyName = $("#partyName").val();
    addCandidate(fundName, partyName);
})

const registerUser = (fname, lname, email, mobile, resAddress, birthDate) => {
    myContract.methods.registerVoter(fname, lname, email, mobile, resAddress, birthDate).send({from : myAccount[0]},
        function(data, error){
            console.log('error: ', error);
            console.log('data: ', data);
        })
}

$(document).on('submit', '#login-form', function(e){
    e.preventDefault();
    var fName = $("#fname").val();
    var lName = $("#lname").val();
    var email = $("#email").val();
    var mobile = $("#mobile").val();
    var address = $("#address").val();
    var birthDate = $("#birthdate").val();
    registerUser(fName, lName, email, mobile, address, birthDate);
})

const approveVoter = (id) => {
    myContract.methods.approveVoter(id).send({from : myAccount[0]})
    .then((data) => {
        console.log(data);
    })
    .catch((e) => {
        console.log(e);
    })
}

$(document).on('click', '#approve', function(e){
    e.preventDefault();
    const dataId = $("#approve").data("id");
    approveVoter(dataId);
})

const voteCandidate = (id) => {
    myContract.methods.vote(id).send({from : myAccount[0]}, (data, error) =>{
        console.log("hash: ", data);
        console.log(error)
    })
}

$(document).on('click', '#vote', function(e){
    e.preventDefault();
    const dataId = $("#vote").data("id");
    voteCandidate(dataId);
})

const adminNavigation = () => {
        const nav =  `<li>
        <a href="index.html">
            <i class="ion-ios-gear-outline"></i>Dashboard
        </a>
        </li>
        <li>
            <a href="db-bookings.html">
                <i class="ion-ios-copy-outline"></i>Candidate List</a>
        </li>
        <li>
            <a href="voter-list.html">
                <i class="ion-ios-copy-outline"></i>Voter List</a>
        </li>
       `
        $("#navigationBar").append(nav);
		$("#name").append("Hello Admin!")
}

const userNavigation = () => {
    const nav =  `<li>
    <a href="index.html">
        <i class="ion-ios-gear-outline"></i>Dashboard
    </a>
    </li>
    <li>
        <a href="db-bookings.html">
            <i class="ion-ios-copy-outline"></i>Candidate List</a>
    </li>
    <li>
        <a href="db-my-profile.html">
            <i class="ion-ios-person-outline"></i>Profile</a>
    </li>`
    $("#navigationBar").append(nav);
}

const checkRegisteredUser = (address) => {
    myContract.methods.registeredVoter(address).call()
    .then(data => {
		console.log('data: ', data);
        if(data == false){
            window.location.href = "login.html";
        }
    })
    .catch(err => {
        console.log(err);
    })
}

const transferToken = (address, amount) => {
    console.log(myAccount[0]);
    let bal = web3.utils.toWei(amount, 'ether');
    tokenContract.methods.transfer(address, bal).send({from : myAccount[0]})
        .then((data) => {
            console.log(data)
        })
        .catch((e) => {
            console.log("err : ", e);
        })
}

$(document).on('submit', '#tokenTransfer', function(e){
    e.preventDefault();
    var address = $("#address").val();
    var amount = $("#amount").val();
    transferToken(address, amount);
})

const userBalance = (address) => {
    tokenContract.methods.balanceOf(address).call()
    .then(data => {
        let bal = data / (10**18);
        var strData = `Balance : ${bal.toFixed(2)}`
        $("#userBalance").append(strData);
    })
}

const electionBalance = () => {
    tokenContract.methods.balanceOf("0xbb149286d54C719B7FC91cd0eDD5E1994b99bfa3").call()
    .then(data => {
        let bal = data / (10**18);
        var strData = `Election Contract Balance : ${bal.toFixed(2)}`
        $("#contractBalance").append(strData);
    })
}

const addCandidateForm = () => {
    let data = `<h2>Add Candidate</h2>
        <form id="addCandidate" method="post">
            <div class="form-group">
                <input type="text" name="user_name" id="candidateName" tabindex="1" class="form-control" placeholder="Candidate Name" value="">
            </div>
            <div class="form-group">
                <input type="text" name="user_name" id="partyName" tabindex="1" class="form-control" placeholder="Party Name" value="">
            </div>
            <div class="res-box text-center mar-top-30">
                <button type="submit" class="btn v3"><i class="ion-android-checkmark-circle"></i>Add Candidate</button>
            </div>
        </form>`;
    $("#addCandidate-form").append(data);
}

const connectMetamask = async () => {
    if (window.ethereum) {
        try {
            myAccount = await ethereum.request({ method: 'eth_requestAccounts' });
            console.log(myAccount[0]);
			myAccountAddress = myAccount[0];
            if(myAccount[0] == adminAddress){
                // checkRegisteredUser(myAccount[0]);
                getUser();
                addCandidateForm();
                electionBalance();
                userBalance(myAccount[0]);
                adminNavigation();
                getCandidateListAdmin();
                getVoterCount();
                getVoterListAdmin();
                checkVotingIsStart();
                changeElectionStateButton();
				getWinnerDetails();
            }else{
				console.log("User");
                checkRegisteredUser(myAccount[0]);
                getUser();
                userBalance(myAccount[0]);
                userNavigation();
                getCandidateList();
                getVoterCount();
                checkVotingIsStart();
                electionStatus();
				getWinnerDetails();
            }
            let firstPart = myAccount[0].slice(0, 7);
            let secondPart = myAccount[0].slice(-4);
            let address = firstPart + "..." + secondPart;
            $("#ethAddress").append(address);

			getMyProfile();
        } catch (error) {
            console.log(error);
        }
    }
}
connectMetamask();

const getMyProfile =  async () => {
	console.log(myAccountAddress);
	await myContract.methods.getVoterDetails().call({from : myAccountAddress})
    .then(data => {
		console.log(data);
		var profileData = `<li>
								<h6>First Name :</h6>
								<span>${data._firstname}</span>
							</li>
							<li>
								<h6>Last Name :</h6>
								<span>${data._lastname}</span>
							</li>
							<li>
								<h6>Eth  Address :</h6>
								<span>${data._voterAddress}</span>
							</li>
							<li>
								<h6>Status :</h6>
								<span>${data._approved}</span>
							</li>
							<li>
								<h6>Email Id :</h6>
								<span>${data._email}</span>
							</li>
							<li>
								<h6>Phone :</h6>
								<span>${data._mobile}</span>
							</li>
							<li>
								<h6>Address :</h6>
								<span>${data._resAdderess}</span>
							</li>`;
		$("#myProfileDivision").html(profileData);
    })
}



const getWinnerDetails =  async () => {
	console.log('myAccountAddress: ', myAccountAddress);
	myContract.methods.calculateVote().call({from : myAccountAddress})
    .then(data => {
		console.log("Winner: ", data);
		$("#winner-list").html(
			`<h2 class="counter-value">${data._totalVotes}</h2>
		<span class="desc">${data._name} FROM ${data._partyName}</span>`
		)
    })
}