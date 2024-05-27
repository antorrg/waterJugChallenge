const checkFeasibility = require('../src/middlewares/checkFeasibility')


describe('checkFeasibility Middleware', () => {
  let req, res, next;

  beforeEach(() => {
    req = { body: { x_capacity: 3, y_capacity: 5, z_amount_wanted: 4 } };
    res = { status: jest.fn().mockReturnThis(), json: jest.fn() };
    next = jest.fn();
  });

  it('should call next if z_amount_wanted is feasible', () => {
    checkFeasibility(req, res, next);
    expect(next).toHaveBeenCalled();
  });

  it('should return 400 if z_amount_wanted is not feasible', () => {
    req.body.z_amount_wanted = 11; 
    checkFeasibility(req, res, next);
    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({ error: 'No solution' });
  });

});
