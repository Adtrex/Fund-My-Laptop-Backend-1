const response = require("./../utils/response");
const RequestServ = require("./../services/RequestService");

class RequestController {
  async create(req, res) {
    const data = await RequestServ.create(req.body);
    res.status(201).send(("Request created", data));
  }

  async update(req, res) {
    const request = await RequestServ.findById(req.params.requestId);
    if (!request) {
      return res.status(404).send(response("Request not found", request));
    }
    const data = await RequestServ.update(req.body);
    res.status(200).send(response("Request updated successfully", data));
  }

  async findById(req, res) {
    try {
      const request = await RequestServ.findById(req.params.requestId);
      if (!request) {
        return res.status(404).send(response("Request not found", request));
      }
      res.status(200).send(response("Request details", request));
    } catch (error) {
      res.send(response(request));
    }
  }

  async delete(req, res) {
    try {
      const request = await RequestServ.delete(req.params.requestId);
      if (!request) {
        return res
          .status(404)
          .send(
            response(
              `Request not found with Id: ${req.params.requestId}`,
              request
            )
          );
      }
      res.status(200).send(response("Request deleted successfully", request));
    } catch (error) {
      res.send(response(request));
    }
  }

  async getRequests(req, res) {
    // Pull from DB
    
    const data = await RequestServ.get(req.body);
    res.status(200).send(response("Request Gotten Successfully", data));
  }
}

module.exports = new RequestController();
