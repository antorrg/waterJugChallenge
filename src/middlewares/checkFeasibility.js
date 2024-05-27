const help = require("./helpersMidds/helpersMidd.js");//gcd function 

const checkFeasibility = (req, res, next) => {
  const { x_capacity, y_capacity, z_amount_wanted } = req.body;

  const x = x_capacity;
  const y = y_capacity;
  const z = z_amount_wanted;

  // Calculate the GCF of X and Y -- Calcular el MCD de X e Y
  const mcd = help.gcd(x, y);
  //Check if Z is a multiple of the MCD and if Z is less than or equal to the maximum capacity of the jars
  // Verificar si Z es múltiplo del MCD y si Z es menor o igual a la capacidad máxima de las jarras
  if (z % mcd !== 0 || z > Math.max(x, y)) {
    return res.status(400).json({ error: "No solution" });
  }

  // If feasible, continue.
  next();
};

module.exports = checkFeasibility;
