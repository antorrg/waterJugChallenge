import help from "./helpersMidd.js";


const validateJug = (req, res, next) => {
    let{x_capacity, y_capacity, z_amount_wanted} = req.body;

    if(!x_capacity){return res.status(400).json({ error: 'Missing parameter' });}

    const xCapacity = help.parsedInfo(x_capacity)
    if(!xCapacity){return res.status(400).json({error: 'x_capacity: Invalid parameter'})}

    if(!y_capacity){return res.status(400).json({ error: 'Missing parameter' });}

    const yCapacity = help.parsedInfo(y_capacity)
    if(!yCapacity){return res.status(400).json({error:  'y_capacity: Invalid parameter'})}

    if(!z_amount_wanted){return res.status(400).json({ error: 'Missing parameter' });}

    const zamount = help.parsedInfo(z_amount_wanted)
    if(!zamount){return res.status(400).json({error:  'z_amount_wanted: Invalid parameter'})}

// Update req.body with the validated values

    req.body.x_capacity = xCapacity;
    req.body.y_capacity = yCapacity;
    req.body.z_amount_wanted = zamount;

   next()
};

export default validateJug;

