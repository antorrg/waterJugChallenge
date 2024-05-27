const validateJug = require('../src/middlewares/validateJug')


describe('validateJug Middleware', () => {
  let req, res, next;

  beforeEach(() => {
    req = { body: { x_capacity: 3, y_capacity: 5, z_amount_wanted: 4 } };
    res = { status: jest.fn().mockReturnThis(), json: jest.fn() };
    next = jest.fn();
  });

  it('should call next if validation passes', () => {
    validateJug(req, res, next);
    expect(next).toHaveBeenCalled();
  });
  it('should convert to a number and call next if x_capacity were a number string', () => {
    req.body.x_capacity= "3";
    validateJug(req, res, next);
    expect(next).toHaveBeenCalledWith();
  });

  it('should return 400 if x_capacity is missing', () => {
    delete req.body.x_capacity;
    validateJug(req, res, next);
    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({ error: 'Missing parameter' });
  });
  it('should return 400 if x_capacity is not an integer', () => {
    req.body.x_capacity= 3.5;
    validateJug(req, res, next);
    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({ error: 'x_capacity: Invalid parameter' });
  });
  
});
