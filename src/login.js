web3 = new Web3(ethereum);

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
				"name": "_voterId",
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
			},
			{
				"internalType": "uint256",
				"name": "_otp",
				"type": "uint256"
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
				"internalType": "uint256",
				"name": "_otp",
				"type": "uint256"
			}
		],
		"name": "submitOTP",
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
		"name": "declareWinner",
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
				"name": "_voterId",
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
				"name": "_voterId",
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
				"name": "voterId",
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
			},
			{
				"internalType": "uint256",
				"name": "otp",
				"type": "uint256"
			},
			{
				"internalType": "bool",
				"name": "verify",
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
], '0x53436A698A865894b67E26Ea898ACcd8dEB1eBF7');

var myAccount = [];
var adminAddress = "0xa10434ab27543636ac39558da7e87300b08034b5";

const registerUser = async (fname, email, mobile, voterid, resAddress, birthDate) => {
	console.log('resAddress: ', resAddress);
	console.log('fname: ', fname);
	
    myAccount = await ethereum.request({ method: 'eth_requestAccounts' });
	var otp = Math.floor((Math.random() * 1000) + 1000);
	console.log(email);
	


    console.log(myAccount[0]);
    await myContract.methods.registerVoter(fname, email, mobile, voterid, resAddress, birthDate, otp).send({from : myAccount[0]})
    .then(data => {
		console.log("OTP: ", otp);
		Email.send({
			Host : "smtp.elasticemail.com",
			Username : "angularproject.it@gmail.com",
			Password : "86A4FF5725748EF930FA88EB3DD7CF442316",
			To : email,
			From : "angularproject.it@gmail.com",
			Subject : "OTP for voting System",
			Body : `OTP : ${otp}`
		}).then((data) => {
			console.log(data);
			alert('Mail sent')
		}
		).catch( (e) => {
			console.log(e);	
		});

		$("#loginForm").hide();
		$("#OTPForm").show();
        // window.location.href = "index.html";
    })
    .catch(err => {
        console.log(err);
    })
}

const submitOTP = async (OTP) => {
    await myContract.methods.submitOTP(OTP).send({from : myAccount[0]})
    .then(data => {
        window.location.href = "index.html";
    })
    .catch(err => {
        console.log(err);
    })
}

$(document).on('submit', '#login-form', async function(e){
    e.preventDefault();
    var fName = $("#fname").val();
    var lName = $("#lname").val();
	var mName = $("#mname").val();
    var email = $("#email").val();
    var mobile = $("#mobile").val();
    var address1 = $("#address1").val();
	var address2 = $("#address2").val();
	var voterId = $("#voterId").val();
    var birthDate = $("#birthdate").val();
	var address = address1 + ", " + address2;
	var name = fName + " " + mName + " " + lName;
	console.log('name: ', name);
	
    await registerUser(name, email, mobile, voterId, address, birthDate);

	
})

$(document).on('submit', '#submit-otp-form', async function(e){
    e.preventDefault();
    var OTP = $("#OTP").val();
    await submitOTP(OTP);
})