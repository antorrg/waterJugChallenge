
const cases = [
]


export default {

    createJugCases : (xCapacity, yCapacity, zAmountWanted) => {
          let  stepsCount = 0;
            let solutionSteps = [];
            let x = 0;
            let y = 0;
        
            while (x !== zAmountWanted && y !== zAmountWanted) {
                stepsCount++;
                if (x === 0) {
                    x = xCapacity;
                    solutionSteps.push({ step: stepsCount, action: "Fill bucket X", bucketX: x, bucketY: y });
                } else if (y === yCapacity) {
                    y = 0;
                    solutionSteps.push({ step: stepsCount, action: "Empty bucket Y", bucketX: x, bucketY: y });
                } else {
                    let transferAmount = Math.min(x, yCapacity - y);
                    x -= transferAmount;
                    y += transferAmount;
                    solutionSteps.push({ step: stepsCount, action: "Transfer from bucket X to Y", bucketX: x, bucketY: y });
                }
        
                if (x === zAmountWanted || y === zAmountWanted) {
                    solutionSteps.push({ status: "Solved" });
                    stepsCount=0;
                    break;
                }
            }
            console.log(stepsCount)
            cases.push(solutionSteps)
            return solutionSteps;
    
    },

    getAllSolutions : async () => {
        return cases; 
    }
}