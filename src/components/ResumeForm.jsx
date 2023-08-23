import { useState } from 'react';

function ResumeForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    education: '',
    workExperience: '',
    skills: '',
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <form>
      <label htmlFor="name">Name:</label>
      <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} />

      <label htmlFor="email">Email:</label>
      <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} />

      <label htmlFor="phone">Phone:</label>
      <input type="tel" name="phone" id="phone" value={formData.phone} onChange={handleChange} />

      <label htmlFor="address">Address:</label>
      <input type="text" name="address" id="address" value={formData.address} onChange={handleChange} />

      <label htmlFor="education">Education:</label>
      <textarea name="education" id="education" value={formData.education} onChange={handleChange} />

      <label htmlFor="workExperience">Work Experience:</label>
      <textarea name="workExperience" id="workExperience" value={formData.workExperience} onChange={handleChange} />

      <label htmlFor="skills">Skills:</label>
      <textarea name="skills" id="skills" value={formData.skills} onChange={handleChange} />
    </form>
  );
}

export default ResumeForm;
