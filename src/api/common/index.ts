
const response = async (req, res, next) => {
    res.status(200).send(res.body);
  };
  
const badRequest = async (req, res, errors) => {
    const message = errors ? { message: errors } : { message: res.message };
    res.status(400);
    res.json(message);
  }
  
const created = async (req, res, errors) => {
      res.status(201);
      res.json(res.body);
    }

export {
  response,
  badRequest,
  created
}