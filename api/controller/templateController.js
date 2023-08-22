const Template = require("../model/Template");

const {
  BadRequestError,
  NotFoundError,
  UnauthenticatedError,
  UnauthorizedError,
} = require("../errors/indexError");
const { StatusCodes } = require("http-status-codes");

const createTempelate = async (req, res) => {
  const { name } = req.body;
  const template = await Template.create({ name: name });
  res.status(StatusCodes.OK).json({template});
};

const getAllTemplate = async (req, res) => {
  const templates = await Template.find({});
  res.status(StatusCodes.OK).json({templates});
};

const updateTemplate = async (req, res) => {
    const {name}=req.body
    const templateId=req.params.id
    const template=await Template.findOne({_id:templateId})
    if(!template){throw new NotFoundError("Template not form")}
    template.name=name
    await template.save()
    res.status(StatusCodes.OK).json({template})
};

const getSingleTemplate = async (req, res) => {
      const templateId = req.params.id;
      const template = await Template.findOne({ _id: templateId });
      if (!template) {
        throw new NotFoundError("Template not form");
      }
      res.status(StatusCodes.OK).json({ template });

  res.status(StatusCodes.OK).json("getting Single all Template");
};

const deleteTemplate = async (req, res) => {
   const templateId = req.params.id;
   const template = await Template.findOneAndRemove({ _id: templateId });
   if (!template) {
     throw new NotFoundError("Template not form");
   }
   res.status(StatusCodes.OK).json("template delete successfully");
};

module.exports = {
  createTempelate,
  getAllTemplate,
  getSingleTemplate,
  deleteTemplate,
  updateTemplate,
};
