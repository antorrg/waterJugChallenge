const jugService = require('../src/services/jugService');

describe('jugService', () => {
  it('should return the correct solution steps', () => {
    const result = jugService.createJugCases(2, 10, 4);
    expect(result).toEqual({"solution": [
      { step: 1, action: "Fill bucket X", bucketX: 2, bucketY: 0 },
      { step: 2, action: "Transfer from bucket X to Y", bucketX: 0, bucketY: 2 },
      { step: 3, action: "Fill bucket X", bucketX: 2, bucketY: 2 },
      { step: 4, action: "Transfer from bucket X to Y", bucketX: 0, bucketY: 4, status: "Solved" },
    ]});
  });
});
