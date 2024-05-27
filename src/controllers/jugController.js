const srv =require('../services/jugService.js')

module.exports = {

    createController : async(req, res)=>{
        const {x_capacity, y_capacity, z_amount_wanted}= req.body;
        try {
            const response = await srv.createJugCases(x_capacity, y_capacity, z_amount_wanted)
            res.status(201).json(response)
           
        } catch (error) {
            res.status(500).json({error: error.message})
        }
    },

};