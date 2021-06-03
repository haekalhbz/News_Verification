import React, { Component } from 'react';
import Web3 from 'web3';
import './App.css';
import Meme from '../abis/Meme.json';
import Meme2 from '../abis/Meme2.json';
import Meme3 from '../abis/Meme3.json';


const ipfsClient = require('ipfs-http-client')
const ipfs = ipfsClient({ host: 'ipfs.infura.io', port: 5001, protocol: 'https' })

class App extends Component {

async componentWillMount() {
  await this.loadWeb3()
  await this.loadBlockchainData()

}

async loadBlockchainData() {
  const web3 = window.web3
  const accounts = await web3.eth.getAccounts()
  this.setState({ account: accounts[0] })
  const networkId = await web3.eth.net.getId()

  const networkData = Meme.networks[networkId]
  if(networkData) {
    const abi = Meme.abi
    const address = networkData.address
    const contract = web3.eth.Contract(abi, address)
    this.setState({ contract })
    const memeHash = await contract.methods.get().call()
    this.setState({ memeHash })
    const avgRating = await contract.methods.getAvgRating().call()
    this.setState({ avgRating })
    const totalRating = await contract.methods.getTotalRating().call()
    this.setState({ totalRating })
    const sumRating = await contract.methods.getSumRating().call()
    this.setState({ sumRating })
  } else {
    window.alert('Smart contract not deployed to detected network!')
  }

  const networkData2 = Meme2.networks[networkId]
  if(networkData2) {
    const abi2 = Meme2.abi
    const address2 = networkData2.address
    const contract2 = web3.eth.Contract(abi2, address2)
    this.setState({ contract2 })
    const memeHash2 = await contract2.methods.get().call()
    this.setState({ memeHash2 })
    const avgRating2 = await contract2.methods.getAvgRating().call()
    this.setState({ avgRating2 })
    const totalRating2 = await contract2.methods.getTotalRating().call()
    this.setState({ totalRating2 })
    const sumRating2 = await contract2.methods.getSumRating().call()
    this.setState({ sumRating2 })
  } else {
    window.alert('Smart contract not deployed to detected network!')
  }

  const networkData3 = Meme3.networks[networkId]
  if(networkData3) {
    const abi3 = Meme3.abi
    const address3 = networkData3.address
    const contract3 = web3.eth.Contract(abi3, address3)
    this.setState({ contract3 })
    const memeHash3 = await contract3.methods.get().call()
    this.setState({ memeHash3 })
    const avgRating3 = await contract3.methods.getAvgRating().call()
    this.setState({ avgRating3 })
    const totalRating3 = await contract3.methods.getTotalRating().call()
    this.setState({ totalRating3 })
    const sumRating3 = await contract3.methods.getSumRating().call()
    this.setState({ sumRating3 })
  } else {
    window.alert('Smart contract not deployed to detected network!')
  }
}

constructor(props) {
  super(props);
  this.state = {
    account: '',
    buffer: null,
    contract: null,
    memeHash: '',
    rating:'',
    totalRating: 0,
    sumRating: 0,
    avgRating: 0,

    buffer2: null,
    contract2: null,
    memeHash2: '',
    rating2:'',
    totalRating2: 0,
    sumRating2: 0,
    avgRating2: 0,

    buffer3: null,
    contract3: null,
    memeHash3: '',
    rating3:'',
    totalRating3: 0,
    sumRating3: 0,
    avgRating3: 0
  };
}

  async loadWeb3() {
    if (window.ethereum){
      window.web3 = new Web3(window.ethereum)
      await window.ethereum.enable()
    } if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider)
    } else {
      window.alert('Please use metamask!')
    }
  }

  captureFile = (event) => {
    event.preventDefault()
    const file = event.target.files[0]
    const reader = new window.FileReader()
    reader.readAsArrayBuffer(file)
    reader.onloadend = () => {
      this.setState({buffer: Buffer(reader.result) })
    }
  }

  onSubmit = async (event) => {
    event.preventDefault()
    console.log("Submitting the form...")
    await ipfs.add(this.state.buffer, (error, result) => {
      console.log('IPFS result', result)
      const memeHash = result[0].hash
      this.setState({ memeHash: memeHash})
      if(error) {
        console.error(error)
        return
      }
      this.state.contract.methods.set(memeHash).send({ from: this.state.account }).then((r) => {
        this.setState({ memeHash })
      })
    })
  }

  onSubmitRating = (event) => {
    event.preventDefault()
    let rating = parseInt(this.state.rating)
    let totalRating = parseInt(this.state.totalRating) + rating
    let sumRating = parseInt(this.state.sumRating) + 1

    console.log(rating)
    console.log(totalRating)
    console.log(sumRating)

    let avgRating = parseInt(totalRating) / parseInt(sumRating)
    this.setState({totalRating: totalRating})
    this.setState({sumRating: sumRating})
    this.setState({avgRating: avgRating})

    console.log(avgRating)
    console.log(this.state.avgRating)

    this.state.contract.methods.setAvgRating(avgRating.toString()).send({ from: this.state.account }).then((r) => {
      this.setState({ avgRating })
    })
    this.state.contract.methods.setTotalRating(totalRating).send({ from: this.state.account }).then((r) => {
      this.setState({ totalRating })
    })
    this.state.contract.methods.setSumRating(sumRating).send({ from: this.state.account }).then((r) => {
      this.setState({ sumRating })
    })
  }

  handle = (event) => {
    this.setState({rating: event.target.value})
  }

  captureFile2 = (event) => {
    event.preventDefault()
    const file2 = event.target.files[0]
    const reader2 = new window.FileReader()
    reader2.readAsArrayBuffer(file2)
    reader2.onloadend = () => {
      this.setState({buffer2: Buffer(reader2.result) })
    }
  }

  onSubmit2 = async (event) => {
    event.preventDefault()
    console.log("Submitting the form...")
    await ipfs.add(this.state.buffer2, (error, result) => {
      console.log('IPFS result', result)
      const memeHash2 = result[0].hash
      this.setState({ memeHash2: memeHash2})
      if(error) {
        console.error(error)
        return
      }
      this.state.contract2.methods.set(memeHash2).send({ from: this.state.account }).then((r) => {
        this.setState({ memeHash2 })
      })
    })
  }

  onSubmitRating2 = (event) => {
    event.preventDefault()
    let rating2 = parseInt(this.state.rating2)
    let totalRating2 = parseInt(this.state.totalRating2) + rating2
    let sumRating2 = parseInt(this.state.sumRating2) + 1

    console.log(rating2)
    console.log(totalRating2)
    console.log(sumRating2)

    let avgRating2 = parseInt(totalRating2) / parseInt(sumRating2)
    this.setState({totalRating2: totalRating2})
    this.setState({sumRating2: sumRating2})
    this.setState({avgRating2: avgRating2})

    console.log(avgRating2)
    console.log(this.state.avgRating2)

    this.state.contract2.methods.setAvgRating(avgRating2.toString()).send({ from: this.state.account }).then((r) => {
      this.setState({ avgRating2 })
    })
    this.state.contract2.methods.setTotalRating(totalRating2).send({ from: this.state.account }).then((r) => {
      this.setState({ totalRating2 })
    })
    this.state.contract2.methods.setSumRating(sumRating2).send({ from: this.state.account }).then((r) => {
      this.setState({ sumRating2 })
    })
  }

  handle2 = (event) => {
    this.setState({rating2: event.target.value})
  }

  captureFile3 = (event) => {
    event.preventDefault()
    const file3 = event.target.files[0]
    const reader3 = new window.FileReader()
    reader3.readAsArrayBuffer(file3)
    reader3.onloadend = () => {
      this.setState({buffer3: Buffer(reader3.result) })
    }
  }

  onSubmit3 = async (event) => {
    event.preventDefault()
    console.log("Submitting the form...")
    await ipfs.add(this.state.buffer3, (error, result) => {
      console.log('IPFS result', result)
      const memeHash3 = result[0].hash
      this.setState({ memeHash3: memeHash3})
      if(error) {
        console.error(error)
        return
      }
      this.state.contract3.methods.set(memeHash3).send({ from: this.state.account }).then((r) => {
        this.setState({ memeHash3 })
      })
    })
  }

  onSubmitRating3 = (event) => {
    event.preventDefault()
    let rating3 = parseInt(this.state.rating3)
    let totalRating3 = parseInt(this.state.totalRating3) + rating3
    let sumRating3 = parseInt(this.state.sumRating3) + 1

    console.log(rating3)
    console.log(totalRating3)
    console.log(sumRating3)

    let avgRating3 = parseInt(totalRating3) / parseInt(sumRating3)
    this.setState({totalRating3: totalRating3})
    this.setState({sumRating3: sumRating3})
    this.setState({avgRating3: avgRating3})

    console.log(avgRating3)
    console.log(this.state.avgRating3)

    this.state.contract3.methods.setAvgRating(avgRating3.toString()).send({ from: this.state.account }).then((r) => {
      this.setState({ avgRating3 })
    })
    this.state.contract3.methods.setTotalRating(totalRating3).send({ from: this.state.account }).then((r) => {
      this.setState({ totalRating3 })
    })
    this.state.contract3.methods.setSumRating(sumRating3).send({ from: this.state.account }).then((r) => {
      this.setState({ sumRating3 })
    })
  }

  handle3 = (event) => {
    this.setState({rating3: event.target.value})
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
          <a
            className="navbar-brand col-sm-3 col-md-2 mr-0"
            href="http://www.dappuniversity.com/bootcamp"
            target="_blank"
            rel="noopener noreferrer"
          >
            News of the Day
          </a>
          <ul className="navbar-nav px-3">
            <li className="nav-item text-nowrap d-none d-sm-none d-sm-block">
              <small className="text-white">{this.state.account}</small>
              </li>
              </ul>
        </nav>

        <div className="container-fluid mt-5">
          <div className="row">
            <main role="main" className="col-lg-12 d-flex text-center">
              <div className="content mr-auto ml-auto">
                <a
                  href="http://www.dappuniversity.com/bootcamp"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={`https://ipfs.infura.io/ipfs/${this.state.memeHash}`} alt="News" />
                </a>
                <p>&nbsp;</p>
                <h2>Change News 1</h2>
                <form onSubmit={this.onSubmit} >
                <input type= 'file' onChange={this.captureFile} />
                <input type= 'submit' />
                <p>&nbsp;</p>
                </form >
                <form onSubmit = {this.onSubmitRating}>
                <input type= 'text' value= {this.state.rating} onChange={this.handle} />
                <button type= 'submit'> Submit Rating </button>
                <p> The rating is {this.state.avgRating.toString()}.</p>
                </form>
              </div>
            </main>
          </div>
        </div>

        <div className="container-fluid mt-5">
          <div className="row">
            <main role="main" className="col-lg-12 d-flex text-center">
              <div className="content mr-auto ml-auto">
                <a
                  href="http://www.dappuniversity.com/bootcamp"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={`https://ipfs.infura.io/ipfs/${this.state.memeHash2}`} alt="News" />
                </a>
                <p>&nbsp;</p>
                <h2>Change News 2</h2>
                <form onSubmit={this.onSubmit2} >
                <input type= 'file' onChange={this.captureFile2} />
                <input type= 'submit' />
                <p>&nbsp;</p>
                </form >
                <form onSubmit = {this.onSubmitRating2}>
                <input type= 'text' value= {this.state.rating2} onChange={this.handle2} />
                <button type= 'submit'> Submit Rating </button>
                <p> The rating is {this.state.avgRating2.toString()}.</p>
                </form>
              </div>
            </main>
          </div>
        </div>

        <div className="container-fluid mt-5">
          <div className="row">
            <main role="main" className="col-lg-12 d-flex text-center">
              <div className="content mr-auto ml-auto">
                <a
                  href="http://www.dappuniversity.com/bootcamp"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={`https://ipfs.infura.io/ipfs/${this.state.memeHash3}`} alt="News" />
                </a>
                <p>&nbsp;</p>
                <h2>Change News 3</h2>
                <form onSubmit={this.onSubmit3} >
                <input type= 'file' onChange={this.captureFile3} />
                <input type= 'submit' />
                <p>&nbsp;</p>
                </form >
                <form onSubmit = {this.onSubmitRating3}>
                <input type= 'text' value= {this.state.rating3} onChange={this.handle3} />
                <button type= 'submit'> Submit Rating </button>
                <p> The rating is {this.state.avgRating3.toString()}.</p>
                </form>
              </div>
            </main>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
