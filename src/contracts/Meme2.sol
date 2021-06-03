pragma solidity 0.5.16;

contract Meme2 {
  string memeHash2;
  string avgRating2;
  uint totalRating2;
  uint sumRating2;

  //write function
  function set(string memory _memeHash2) public {
    memeHash2 = _memeHash2;
  }

  //read function
  function get() public view returns (string memory){
    return memeHash2;
  }

  //write function
  function setAvgRating(string memory _avgRating2) public {
    avgRating2 = _avgRating2;
  }

  //read function
  function getAvgRating() public view returns (string memory){
    return avgRating2;
  }

  function setTotalRating(uint _totalRating2) public {
    totalRating2 = _totalRating2;
  }

  //read function
  function getTotalRating() public view returns (uint){
    return totalRating2;
  }

  //write function
  function setSumRating(uint _sumRating2) public {
    sumRating2 = _sumRating2;
  }

  //read function
  function getSumRating() public view returns (uint){
    return sumRating2;
  }
}
