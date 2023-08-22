/**

const { StatusCodes } = require("http-status-codes");
const errorHandler = (err, req, res, next) => {
  console.log(err);
  let customError = {
    // set default
    statusCode: err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
    msg: err.message || "Something went wrong try again later",
  };

  // if (err instanceof CustomAPIError) {
  //   return res.status(err.statusCode).json({ msg: err.message })
  // }

  if (err.name === "ValidationError") {
    customError.msg = Object.values(err.errors)
      .map((item) => item.message)
      .join(",");
    customError.statusCode = 400;
  }
  if (err.code && err.code === 11000) {
    customError.msg = `Duplicate value entered for ${Object.keys(
      err.keyValue
    )} field, please choose another value`;
    customError.statusCode = 400;
  }
  if (err.name === "CastError") {
    customError.msg = `No item found with id : ${err.value}`;
    customError.statusCode = 404;
  }

  return res.status(customError.statusCode).json({ msg: customError.msg });
};

module.exports = errorHandler;
 */

const CustomAPIError = require("../errors/customAPIError");
const { StatusCodes } = require("http-status-codes");

const errorHandler = (err, req, res, next) => {
  const statusCode = err.statusCodes || StatusCodes.INTERNAL_SERVER_ERROR;
  console.log(err);

 if (err instanceof CustomAPIError) {
    
    return res.status(statusCode).json({ msg: err.message });
  }
 return res
    .status(StatusCodes.INTERNAL_SERVER_ERROR)
    .json({ msg: "something went wrong....Try again later" });
};

module.exports = errorHandler;
