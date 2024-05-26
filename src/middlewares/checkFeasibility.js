import help from './helpersMidd.js'

const checkFeasibility = (req, res, next) => {
    const { x_capacity, y_capacity, z_amount_wanted } = req.body;

    const x = x_capacity;
    const y = y_capacity;
    const z = z_amount_wanted;

    // Calcular el MCD de X e Y
    const mcd = help.gcd(x, y);

    // Verificar si Z es múltiplo del MCD y si Z es menor o igual a la capacidad máxima de las jarras
    if (z % mcd !== 0 || z > Math.max(x, y)) {
        return res.status(400).json({ error: 'No solutions' });
    }

    // Si es factible, continuar al siguiente middleware o controlador
    next();
};

export default checkFeasibility;
