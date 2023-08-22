const mongoose = require("mongoose");
const validator = require("validator");
const ResumeSchema = new mongoose.Schema(
  {
    contact: new mongoose.Schema({
      firstname: { type: String },
      othername: { type: String },
      surname: { type: String },
      address: { type: String },
      email: {
        type: String,
        validate: {
          validator: validator.isEmail,
          message: "Please provide valid email",
        },
      },
      phoneNo: { type: Number },
    }),
    profSummary: { type: String },
    skill: { type: [String] },
    experience: [
      new mongoose.Schema({
        jobTitle: { type: String },
        employer: { type: String },
        city: { type: String },
        state: { type: String },
        startDate: { type: Date },
        endDate: { type: Date },
      }),
    ],
    education: [
      new mongoose.Schema({
        schoolName: { type: String },
        city: { type: String },
        state: { type: String },
        degree: { type: String },
        fieldOfStudy: { type: String },
        graduationDate: { type: Date },
      }),
    ],
    award: { type: [String] },
    certification: { type: [String] },
    createdBy: { type: mongoose.Schema.ObjectId, ref: "User" },
    template: {
      type: String,
      enum: {
        values: ["simple", "creative", "professional", "custom", "modern"],
        message: "{VALUE} is not supported",
      },
      default:"simple"
    },
    extraActivity:{type:[String]},
    language:{type:[String]},
    hobby:{type:[String]}
  },

  { timestamps: true }
);

module.exports = mongoose.model("Resume", ResumeSchema);
