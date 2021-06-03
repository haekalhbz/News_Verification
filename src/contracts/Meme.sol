pragma solidity 0.5.16;

contract Meme {
  string memeHash;
  string avgRating;
  uint totalRating;
  uint sumRating;

  //write function
  function set(string memory _memeHash) public {
    memeHash = _memeHash;
  }

  //read function
  function get() public view returns (string memory){
    return memeHash;
  }

  //write function
  function setAvgRating(string memory _avgRating) public {
    avgRating = _avgRating;
  }

  //read function
  function getAvgRating() public view returns (string memory){
    return avgRating;
  }

  //write function
  function setTotalRating(uint _totalRating) public {
    totalRating = _totalRating;
  }

  //read function
  function getTotalRating() public view returns (uint){
    return totalRating;
  }

  //write function
  function setSumRating(uint _sumRating) public {
    sumRating = _sumRating;
  }

  //read function
  function getSumRating() public view returns (uint){
    return sumRating;
  }

}
