const { fetchBreedDescription } = require("../breedFetcher");
const { assert } = require("chai");

describe("#fetchBreedDescription", () => {
  it("returns a string description for a valid breed, via callback", (done) => {
    fetchBreedDescription("Siberian", (err, desc) => {
      const expectedDesc =
        "The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors.";

      assert.equal(err, null);
      assert.equal(expectedDesc, desc);
      done();
    });
  });
  it("returns null if an non-existent breed is passed in", (done) => {
    fetchBreedDescription("gun", (err) => {
      assert.equal(err, null);
      done();
    });
  });
  it("returns null if an undefined value is passed in", (done) => {
    fetchBreedDescription(undefined, (err) => {
      assert.equal(err, null);
      done();
    });
  });
});
