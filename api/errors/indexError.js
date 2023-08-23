const CustomAPIError = require("./customAPIError");
const UnauthenticatedError = require("../errors/unauthenticatedError");
const NotFoundError = require("../errors/not-foundError");
const BadRequestError = require("../errors/bad-request-error");
const UnauthorizedError = require("../errors/unathourizedError");
module.exports = {
  CustomAPIError,
  UnauthenticatedError,
  NotFoundError,
  BadRequestError,
  UnauthorizedError,
};
