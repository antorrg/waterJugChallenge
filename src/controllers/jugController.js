const srv =require('../services/jugService.js')

module.exports = {

    createController : async(req, res)=>{
        const {x_capacity, y_capacity, z_amount_wanted}= req.body;
        try {
            const response = await srv.createJugCases(x_capacity, y_capacity, z_amount_wanted)
            if(response.cache === true){
                res.status(200).json(response.solution)
            }else{
                res.status(201).json(response.solution)
            }
        } catch (error) {
            res.status(500).json({error: error.message})
        }
    },

};