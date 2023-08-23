const Resume = require("../model/Resume");
const { NotFoundError } = require("../errors/indexError");
const crypto = require("crypto");
const uuid = require("uuid");
const { StatusCodes } = require("http-status-codes");
const checkPermisions=require("../JWT/checkPermision");
const checkPermissions = require("../JWT/checkPermision");

//console.log(uuid.v1())
//creating resume
const createResume = async (req, res) => {
  template=req.query.template
  console.log(req.user)
  req.body.createdBy = req.user.userId;
  req.body.template=template
  const resume = await Resume.create(req.body);
  res.status(StatusCodes.OK).json({ resume });
};
//getting all resume(only admin route to get all resume)
const getAllResume = async (req, res) => {
  const resumes = await Resume.find({});
  res.status(StatusCodes.OK).json({ resumes });
};
//getting all resume created by the request user
const getAllResumeByUser = async (req, res) => {
  const userId = req.user.userId;
  const resumes = await Resume.find({ createdBy: userId });
  //checkPermisions(req.user,resume.createdBy)
  resumes.forEach((resume)=>{
    checkPermisions(req.user,resume.createdBy)
  })
 // console.log(resumes)
  res.status(StatusCodes.OK).json({ resumes });
};

const updateResume = async (req, res) => {
  const resumeId = req.params.id;
  const {
    contact,
    profSummary,
    skill,
    experience,
    education,
    award,
    certification,
    template,
    extraActivity,
    language,
    hobby,
  } = req.body;
  const resume = await Resume.findOne({ _id: resumeId });
  if (!resume) {
    throw new NotFoundError(`resume not found with id ${resumeId} `);
  }
   checkPermissions(req.user, resume.createdBy);
//const{firstname,othername,surname,phone,email,address}=contact
resume.contact=contact
resume.profSummary=profSummary
resume.skill=skill
resume.experience=experience
resume.education=education
resume.award=award
resume.certification=certification
resume.template=template
resume.extraActivity=extraActivity
resume.language=language
resume.hobby=hobby

await resume.save()

res.status(StatusCodes.OK).json({resume})

};

const getSingleResume = async (req, res) => {
  const resumeId = req.params.id;
  const resume = await Resume.findOne({ _id: resumeId });
  if (!resume) {
    throw new NotFoundError(`resume not found with id  ${resumeId} `);
  }
  checkPermissions(req.user,resume.createdBy)
  res.status(StatusCodes.OK).json({ resume });
};
const deleteResume = async (req, res) => {
  const resumeId = req.params.id;
  const resume = await Resume.findOneAndDelete({ _id: resumeId });
  if (!resume) {
    throw new NotFoundError(`resume not found with id ${resumeId} `);
  }
   checkPermissions(req.user, resume.createdBy);
  res.status(StatusCodes.OK).json("resume deleted successfully");
};

 module.exports = {
  createResume,
  getAllResume,
  getSingleResume,
  updateResume,
  deleteResume,
  getAllResumeByUser,
};
