const { ethers } = require("hardhat")
const { expect, assert } = require("chai")

describe("SimpleStorage", function () {
    let simpleStorageFactory, simpleStorage
    beforeEach(async function () {
        simpleStorageFactory = await ethers.getContractFactory("SimpleStorage")
        simpleStorage = await simpleStorageFactory.deploy()
    })

    it("Should start with a favorite number of 0", async function () {
        const currentValue = await simpleStorage.retrieve()
        const expectedValue = "0"
        assert.equal(currentValue.toString(), expectedValue)
    })
    it("Should update favorite number", async function () {
        const newValue ="5"
        const storeTransaction = await simpleStorage.store(newValue)
        await storeTransaction.wait(1)
        const newCurrentValue = await simpleStorage.retrieve()
        assert.equal(newCurrentValue.toString(), newValue)

    })
    it("Should add person to People struct", async function() {
        const newPerson = "Edson"
        const faveNum = "23"
        const addPersonTx = await simpleStorage.addPerson(newPerson, faveNum)
        await addPersonTx.wait(1)
        // assert.equal(simpleStorage["people"][newPerson].toString(), faveNum)
    })
})