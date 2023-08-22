
function ResumePreview({ formData }) {
  const { name, email, phone, address, education, workExperience, skills } = formData;

  return (
    <div>
      <h2>{name}</h2>
      <p>{email}</p>
      <p>{phone}</p>
      <p>{address}</p>

      <h3>Education</h3>
      <p>{education}</p>

      <h3>Work Experience</h3>
      <p>{workExperience}</p>

      <h3>Skills</h3>
      <p>{skills}</p>
    </div>
  );
}

export default ResumePreview;
