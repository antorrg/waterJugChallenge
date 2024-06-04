# waterJugChallenge
Rest API design for a technical challenge

[You can also read this document in Spanish](./data/spanish.md)

This API solves the problem of measuring exactly Z gallons using two jugs of X and Y gallons. The API is built with Express.js and uses the following libraries: helmet, morgan, cors, node-cache, nodemon for development, and for testing jest and supertest.

## Endpoints

### 1. Create a solution
- **Endpoint:**: `/api/jugs/create`
- **Method:**: `POST`
- **Description:**: Creates a solution to measure exactly Z gallons with jugs of X and Y gallons.
- **Request (json):**:
  ```json
  {
    "x_capacity": 2,
    "y_capacity": 10,
    "z_amount_wanted": 4
  }
  ```
- **Response (json):**
```json
{
  "solution": [
    {
      "step": 1,
      "action": "Fill bucket X",
      "bucketX": 2,
      "bucketY": 0
    },
    {
      "step": 2,
      "action": "Transfer from bucket X to Y",
      "bucketX": 0,
      "bucketY": 2
    },
    {
      "step": 3,
      "action": "Fill bucket X",
      "bucketX": 2,
      "bucketY": 2
    },
    {
      "step": 4,
      "action": "Transfer from bucket X to Y",
      "bucketX": 0,
      "bucketY": 4,
      "status": "Solved"
    }
  ]
}
```

## Configuration and Execution:
### Requirements:
- Node.js version 18 or higher
### Initializing the application:
- Clone the repository to a folder on your computer.
- In the bash or powershell terminal, navigate to the root directory (where the `package.json` file is located): 
```bash
> cd waterJugChallenge
```
- Install dependencies
```bash
> npm install
```
You can choose between declaring an environment variable or initializing the server directly, by default it will start on port 3001.
- Start the server:
```bash
> npm start
```
- To run the tests the command is: 
```bash
> npm test
```
### You can run unit tests or an integration test

#### Unit tests:
There are three unit tests:

- 01 : validateJug
- 02 : checkFeasibility
- 03 : jugService

To run the unit tests the command is `npm test-xx`. For example: for test No. 1:
```bash
> npm test 01
```

The integration test (04) can be executed individually:

```bash
> npm test 04
```
All tests can be run simply with the command `npm test`

## Explanation of the Algorithm
The algorithm to solve the water jug problem is based on the following steps:

Calculate the GCD (Greatest Common Divisor) of X and Y:
The GCD of two numbers is the largest number that can divide both without leaving a remainder.

Check that Z is a multiple of the GCD of X and Y:
If Z is not a multiple of the GCD, it is impossible to measure Z gallons with the jugs.

Ensure that Z is less than or equal to the maximum capacity of the jugs:
If Z is greater than the capacity of both jugs, it is impossible to measure Z gallons.

Simulation of the process:
Fill and empty the jugs in a sequence of steps until one of the jugs contains exactly Z gallons.

The algorithm uses an iterative approach to fill and transfer water between the jugs, recording each step until the desired amount is reached or determining that it is not possible.

### Implemented in the application:

Validation through middlewares:
Validations are handled by two middlewares with their respective helper functions.
- 1: Function `validateJug`:
This function verifies that the inputs `x_capacity, y_capacity` and `z_amount_wanted` are present in the request body, it also validates that it is an integer and if an integer arrives as a string by mistake, it converts it for use.

- 2: Function `checkFeasibility`:
This function verifies that the operation can be carried out, the idea of ​​this implementation is that errors do not reach the controller, so if the operation is performed, it has the highest chance of success.

Node-cache was also implemented for very common responses, it is configured to be kept for 10 minutes.
Note: If the response is `status 201` it means a new solution created, for the same post request within ten minutes of the first the response will be `status 200`, which means it is cached.