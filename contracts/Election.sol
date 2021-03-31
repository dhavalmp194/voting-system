//SPDX-License-Identifier: MIT;
pragma solidity ^0.8.0;
pragma experimental ABIEncoderV2;

import 'https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC20/IERC20.sol';

contract Election {
    
    IERC20 public token;
    
    address owner;
    
    struct Candidate {
        uint id;
        string name;
        string partyName;
        uint voteCount;
    }    

    struct Voter {
        uint id;
        address voterAddress;
        string firstname;
        string lastname;
        string email;
        string mobile;
        string resAddress;
        string birthDate;
        bool approved;
        uint256 otp;
        bool verify;
    }
    
    //register voter
    mapping(uint => Voter) public voter;
    mapping(address => bool) public approveVoters;
    mapping(address => bool) public registeredVoter;
    
    // Store accounts that have voted
    mapping(address => bool) public voters;
    
    mapping(uint => Candidate) private candidates; 
    uint public candidatesCount;
    uint public voterCount;
    bool public setElection;
    address[] public voterAddress;
    
    event votedEvent (
        uint indexed _candidateId
    );
    
    constructor(IERC20 _token) public {
        owner = msg.sender;
        addCandidate("Modi", "BJP");
        addCandidate("Rahul", "Congress");
        token = _token;
    }
    
    modifier onlyOwner(){
        require(msg.sender == owner, "Ownable: caller is not the owner");
        _;
    }
    
    modifier onlyRegisteredVoter(){
        bool _condition = false;
        for(uint i = 0; i < voterAddress.length; i++){
            if(msg.sender == voterAddress[i]){
                _condition = true;
            }
        }
        require(_condition, "Only Registered voter can vote");
        _;
    }
    
    //add Candidate
    function addCandidate(string memory _name, string memory _partyName) public onlyOwner{
        //Require Election has not started
        require(setElection == false, "Election is ongoing, You cannot add new Candidate");
        candidatesCount++;
        candidates[candidatesCount] = Candidate(candidatesCount, _name, _partyName, 0); // instantiate Candidate Object
    }
    
    //get One Candidate
    function getParticularCandidate(uint _id) public view returns(string memory _name, uint _voteCount){
        _name = candidates[_id].name;
        _voteCount = candidates[_id].voteCount;
        return(_name, _voteCount);
    }
    
    //get candidates list
    function getCandidateList() public view returns(string[] memory _name, string[] memory _partyName, uint[] memory _voteCount){
        _name = new string[](candidatesCount);
        _partyName = new string[](candidatesCount);
        _voteCount = new uint[](candidatesCount);
        uint i;
        uint j;
        for(i = 1; i <= candidatesCount; i++){
            _name[j] = candidates[i].name;
            _voteCount[j] = candidates[i].voteCount;
            _partyName[j] = candidates[i].partyName;
            j++;
        }
        return(_name, _partyName, _voteCount);
    }
    
    //register voter
    function registerVoter(string memory _firstname, string memory _lastname, string memory _email, string memory _mobile, string memory _resAddress, string memory _birthDate, uint _otp) public {
        require(!registeredVoter[msg.sender], "Already registered");
        voterCount++;
        voter[voterCount].id = voterCount;
        voter[voterCount].voterAddress = msg.sender;
        voter[voterCount].firstname = _firstname;
        voter[voterCount].lastname = _lastname;
        voter[voterCount].email = _email;
        voter[voterCount].mobile = _mobile;
        voter[voterCount].resAddress = _resAddress;
        voter[voterCount].birthDate = _birthDate;
        voter[voterCount].approved = false;
        voter[voterCount].otp = _otp;
        voter[voterCount].verify = false;
        voterAddress.push(msg.sender);
        registeredVoter[msg.sender] = true;
    }

    // submit OTP
    function submitOTP(uint _otp) public {
        uint i;
        uint j = 0;
        for(i = 1; i <= voterCount; i++){
            if(voter[i].voterAddress == msg.sender){
                if(voter[i].otp == _otp){
                    voter[i].verify = true;
                }
            break;
            }
            j++;
            
        }
    }

    
    //get all voter list
    function getVoterList() public view returns(uint[] memory _id, string[] memory _firstname, string[] memory _lastname, string[] memory _email, string[] memory _mobile, string[] memory _birthDate, address[] memory  _voterAddress, bool[] memory _approved) {
        _id = new uint[](voterCount);
        _firstname = new string[](voterCount);
        _lastname = new string[](voterCount);
        _email = new string[](voterCount);
        _mobile = new string[](voterCount);
        _birthDate = new string[](voterCount);
        _voterAddress = new address[](voterCount);
        _approved = new bool[](voterCount);
        uint i;
        uint j = 0;
        for(i = 1; i <= voterCount; i++){
            _id[j] = voter[i].id;
            _firstname[j] = voter[i].firstname;
            _lastname[j] = voter[i].lastname;
            _email[j] = voter[i].email;
            _mobile[j] =  voter[i].mobile;
            _birthDate[j] =  voter[i].birthDate;
            _voterAddress[j] = voter[i].voterAddress;
            _approved[j] = voter[i].approved;
            j++;
            
        }
        return (_id, _firstname, _lastname, _email, _mobile, _birthDate, _voterAddress, _approved);
    }
    
     function getVoterDetails() public view returns(uint _id, string memory _firstname, string memory _lastname, string memory _email, string memory _mobile, string memory _birthDate, address _voterAddress, string memory _resAdderess, bool _approved) {
        uint i;
        uint j = 0;
        for(i = 1; i <= voterCount; i++){
            if(voter[i].voterAddress == msg.sender){
            _id = voter[i].id;
            _firstname = voter[i].firstname;
            _lastname = voter[i].lastname;
            _email = voter[i].email;
            _mobile =  voter[i].mobile;
            _birthDate =  voter[i].birthDate;
            _voterAddress = voter[i].voterAddress;
            _approved = voter[i].approved;
            _resAdderess = voter[i].resAddress;
            
            break;
            }
            j++;
            
        }
        return (_id, _firstname, _lastname, _email, _mobile, _birthDate, _voterAddress, _resAdderess, _approved);
    }
    

    function getVoterAddress(uint _id) public view returns(address _voterAddress){
        _voterAddress = voter[_id].voterAddress;
        return _voterAddress;
    }
    
    //approver voter to vote
    function approveVoter(uint _id) public onlyOwner{
        voter[_id].approved = true;
        address _voterAddress = getVoterAddress(_id);
        approveVoters[_voterAddress] = true;
    }
    
    //user can vote
    function vote(uint _candidateId) public onlyRegisteredVoter{ 
        //Require Election is started
        require(setElection == true, "Election is not started yet");
        
        //Require the voter should approved
        require(approveVoters[msg.sender], "This voter is not approved yet");
        
        // Require the voter has not voted before
        require(!voters[msg.sender], "This address have voted");

        // require a valid candidate
        require(_candidateId > 0 && _candidateId <= candidatesCount, "Candidate is not valid");

        // record that voter has voted.
        // rule: keeping track an account has voted (only once)
        voters[msg.sender] = true; 

        // Update candidate vote count
        candidates[_candidateId].voteCount++;
        
        uint amount = random();
        _sendTokens(msg.sender, amount * 1000000000000000000);

        // trigget voted event
        emit votedEvent(_candidateId);
    }
    
    //start election if true then 
    function setElectionState(bool _setElection) public onlyOwner{
        require(_setElection != setElection, "Election is already in selected state");
        setElection = _setElection;
    }
    
    //calculate total votes for every candidate
    function calculateVote() public view returns(uint _candidateId, string memory _name, string memory _partyName, uint _totalVotes){
        //Require Election has to be ended
        require(setElection == false, "Election is not ended yet.");
        
        //Require Owner address
        // require(msg.sender == owner, "Ownable: caller is not the owner");
        uint MaxVote = 0;
        for(uint i = 1; i <= candidatesCount; i++){
            if(MaxVote <= candidates[i -1].voteCount){
                _candidateId = candidates[i -1].id;
                _name = candidates[i -1].name;
                _partyName = candidates[i -1].partyName;
                _totalVotes = candidates[i -1].voteCount;
                MaxVote = candidates[i -1].voteCount;
            }
        }
        return(_candidateId, _name, _partyName, _totalVotes);
    }
    
    function random() private view returns (uint) {
        uint randomHash = uint(keccak256(abi.encodePacked(block.difficulty, block.timestamp)));
        return randomHash % 100;
    }
    
    function _sendTokens(address beneficiary, uint256 tokenAmount) public {
        token.transfer(beneficiary, tokenAmount);
    }
}