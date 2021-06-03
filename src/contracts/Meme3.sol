pragma solidity 0.5.16;

contract Meme3 {
  string memeHash3;
  string avgRating3;
  uint totalRating3;
  uint sumRating3;

  //write function
  function set(string memory _memeHash3) public {
    memeHash3 = _memeHash3;
  }

  //read function
  function get() public view returns (string memory){
    return memeHash3;
  }

  //write function
  function setAvgRating(string memory _avgRating3) public {
    avgRating3 = _avgRating3;
  }

  //read function
  function getAvgRating() public view returns (string memory){
    return avgRating3;
  }

  //write function
  function setTotalRating(uint _totalRating3) public {
    totalRating3 = _totalRating3;
  }

  //read function
  function getTotalRating() public view returns (uint){
    return totalRating3;
  }

  //write function
  function setSumRating(uint _sumRating3) public {
    sumRating3 = _sumRating3;
  }

  //read function
  function getSumRating() public view returns (uint){
    return sumRating3;
  }
}
