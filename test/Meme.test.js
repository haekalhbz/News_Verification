const Meme = artifacts.require("Meme");
const Meme2 = artifacts.require("Meme2");
const Meme3 = artifacts.require("Meme3");

require('chai')
  .use(require('chai-as-promised'))
  .should()

contract('Meme', (accounts) => {
  let meme

  before(async () => {
    meme = await Meme.deployed()
  })

  describe('deployment', async () => {
    it('deploys successfully', async () => {
      meme = await Meme.deployed()
      const address = meme.address
      assert.notEqual(address, '')
      assert.notEqual(address, null)
      assert.notEqual(address, undefined)
      assert.notEqual(address, 0x0)
      console.log(address)
    })
  })

  describe('storage', async () => {
    it('updates the memeHash, avgRating, totalRating, and sumRating', async () => {
      let memeHash
      memeHash = 'abc123'
      await meme.set(memeHash)
      const result = await meme.get()
      assert.equal(result, memeHash)

      let avgRating = 0
      await meme.setAvgRating(avgRating)
      const resulta = await meme.getAvgRating()
      assert.equal(resulta, avgRating)

      let totalRating = 0
      await meme.setTotalRating(totalRating)
      const resultb = await meme.getTotalRating()
      assert.equal(resultb, totalRating)

      let sumRating = 0
      await meme.setSumRating(sumRating)
      const resultc = await meme.getSumRating()
      assert.equal(resultc, sumRating)
    })
  })
})

contract('Meme2', (accounts) => {
  let meme2

  before(async () => {
    meme2 = await Meme2.deployed()
  })

  describe('deployment', async () => {
    it('deploys successfully', async () => {
      meme2 = await Meme2.deployed()
      const address2 = meme2.address
      assert.notEqual(address2, '')
      assert.notEqual(address2, null)
      assert.notEqual(address2, undefined)
      assert.notEqual(address2, 0x0)
      console.log(address2)
    })
  })

  describe('storage', async () => {
    it('updates the memeHash, avgRating, totalRating, and sumRating', async () => {
      let memeHash2
      memeHash2 = 'abc123'
      await meme2.set(memeHash2)
      const result2 = await meme2.get()
      assert.equal(result2, memeHash2)

      let avgRating2 = 0
      await meme2.setAvgRating(avgRating2)
      const resulta2 = await meme2.getAvgRating()
      assert.equal(resulta2, avgRating2)

      let totalRating2 = 0
      await meme2.setTotalRating(totalRating2)
      const resultb2 = await meme2.getTotalRating()
      assert.equal(resultb2, totalRating2)

      let sumRating2 = 0
      await meme2.setSumRating(sumRating2)
      const resultc2 = await meme2.getSumRating()
      assert.equal(resultc2, sumRating2)
    })
  })
})

contract('Meme3', (accounts) => {
  let meme3

  before(async () => {
    meme3 = await Meme3.deployed()
  })

  describe('deployment', async () => {
    it('deploys successfully', async () => {
      meme3 = await Meme3.deployed()
      const address3 = meme3.address
      assert.notEqual(address3, '')
      assert.notEqual(address3, null)
      assert.notEqual(address3, undefined)
      assert.notEqual(address3, 0x0)
      console.log(address3)
    })
  })

  describe('storage', async () => {
    it('updates the memeHash, avgRating, totalRating, and sumRating', async () => {
      let memeHash3
      memeHash3 = 'abc123'
      await meme3.set(memeHash3)
      const result3 = await meme3.get()
      assert.equal(result3, memeHash3)

      let avgRating3 = 0
      await meme3.setAvgRating(avgRating3)
      const resulta3 = await meme3.getAvgRating()
      assert.equal(resulta3, avgRating3)

      let totalRating3 = 0
      await meme3.setTotalRating(totalRating3)
      const resultb3 = await meme3.getTotalRating()
      assert.equal(resultb3, totalRating3)

      let sumRating3 = 0
      await meme3.setSumRating(sumRating3)
      const resultc3 = await meme3.getSumRating()
      assert.equal(resultc3, sumRating3)
    })
  })
})
