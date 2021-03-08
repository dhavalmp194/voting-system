//SPDX-License-Identifier: MIT;
pragma solidity ^0.8.0;
pragma experimental ABIEncoderV2;

contract Election {
    
    address owner;
    // Model a Candidate
    struct Candidate {
        uint id;
        string name;
        uint voteCount;
    }    

    struct Voter {
        uint id;
        address voterAddress;
        string name;
        bool approved;
    }
    
    //register voter
    mapping(uint => Voter) public voter;
    mapping(address => bool) public approveVoters;
    
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
    
    constructor() public {
        owner = msg.sender;
        addCandidate("Modi");
        addCandidate("Rahul");
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
    function addCandidate(string memory _name) public onlyOwner{
        //Require Election has not started
        require(setElection == false, "Election is ongoing, You cannot add new Candidate");
        candidatesCount++;
        candidates[candidatesCount] = Candidate(candidatesCount, _name, 0); // instantiate Candidate Object
    }
    
    //get One Candidate
    function getParticularCandidate(uint _id) public view returns(string memory _name, uint _voteCount){
        _name = candidates[_id].name;
        _voteCount = candidates[_id].voteCount;
        return(_name, _voteCount);
    }
    
    //get candidates list
    function getCandidateList() public view returns(string[] memory _name, uint[] memory _voteCount){
        _name = new string[](candidatesCount);
        _voteCount = new uint[](candidatesCount);
        uint i;
        uint j;
        for(i = 1; i <= candidatesCount; i++){
            _name[j] = candidates[i].name;
            _voteCount[j] = candidates[i].voteCount;
            j++;
        }
        return(_name, _voteCount);
    }
    
    //register voter
    function registerVoter(string memory _name) public {
        voterCount++;
        voter[voterCount].id = voterCount;
        voter[voterCount].voterAddress = msg.sender;
        voter[voterCount].name = _name;
        voter[voterCount].approved = false;
        voterAddress.push(msg.sender);
    }
    
    //get all voter list
    function getVoterList() public view returns(uint[] memory _id, string[] memory _name, address[] memory  _voterAddress, bool[] memory _approved) {
        _id = new uint[](voterCount);
        _name = new string[](voterCount);
        _voterAddress = new address[](voterCount);
        _approved = new bool[](voterCount);
        uint i;
        uint j = 0;
        for(i = 1; i <= voterCount; i++){
            _id[j] = voter[i].id;
            _name[j] = voter[i].name;
            _voterAddress[j] = voter[i].voterAddress;
            _approved[j] = voter[i].approved;
            j++;
            
        }
        return (_id, _name, _voterAddress, _approved);
    }
    
    //approver voter to vote
    function approveVoter(uint _id) public{
        voter[_id].approved = true;
        approveVoters[msg.sender] = true;
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

        // trigget voted event
        emit votedEvent(_candidateId);
    }
    
    //start election if true then 
    function setElectionState(bool _setElection) public onlyOwner{
        require(_setElection != setElection, "Election is already in selected state");
        setElection = _setElection;
    }
    
    //calculate total votes for every candidate
    function calculateVote() public view returns(uint[] memory _candidateId, string[] memory _name, uint[] memory _totalVotes){
        //Require Election has to be ended
        require(setElection == false, "Election is not ended yet.");
        
        //Require Owner address
        require(msg.sender == owner, "Ownable: caller is not the owner");
        _candidateId = new uint[](candidatesCount);
        _name = new string[](candidatesCount);
        _totalVotes = new uint[](candidatesCount);
        uint index = 0;
        for(uint i = 1; i <= candidatesCount; i++){
            Candidate storage candidate = candidates[i];
            _candidateId[index] = candidate.id;
            _name[index] = candidate.name;
            _totalVotes[index] = candidate.voteCount;
            index++;
        }
        return(_candidateId, _name, _totalVotes);
    }
}