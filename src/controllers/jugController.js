import srv from '../services/jugService.js'

export default {

    createController : async(req, res)=>{
        const {x_capacity, y_capacity, z_amount_wanted}= req.body;
        try {
            const response = await srv.createJugCases(x_capacity, y_capacity, z_amount_wanted)
            res.status(201).json(response);
        } catch (error) {
            res.status(error.status).json({error: error.message})
        }
    },

    getSolutionController : async(req, res)=>{
        try {
            const response = await srv.getAllSolutions()
            res.status(200).json(response);
        } catch (error) {
            res.status(error.status).json({error: error.message})
        }
    },
};