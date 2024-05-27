const NodeCache =require('node-cache');
const formatSolution =require('./helpers/jugServHelper.js');

const myCache = new NodeCache({ stdTTL: 600 }); // TTL of 10 minutes



module.exports = {

    createJugCases : (xCapacity, yCapacity, zAmountWanted) => {
        try{
        const cacheKey= `${xCapacity}-${yCapacity}-${zAmountWanted}`
        const cachedSolutions = myCache.get(cacheKey)
        if(cachedSolutions){
            //console.log('Using the cache')
            return cachedSolutions;
        }

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
                    //console.log('Using the function, steps: ',stepsCount)
                    stepsCount=0;
                    break;
                }
            }
            if(!solutionSteps || solutionSteps.length === 0){const error = new Error('Unexpected error'); error.status = 500; throw error}
            const solution = formatSolution(solutionSteps)
            myCache.set(cacheKey, solution)
            return solution;
        }catch(error){
            throw error;
        }
    
    },

}