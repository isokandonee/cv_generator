import { useState } from 'react';
import ResumeForm from './ResumeForm';
import ResumePreview from './ResumePreview';
import { saveAs } from 'file-saver';
import { PDFDocument, StandardFonts } from 'pdf-lib';

function ResumeGenerator() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    education: '',
    workExperience: '',
    skills: '',
  });

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    // add code here to generate pdf or word document
  };

  const handleFormReset = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      address: '',
      education: '',
      workExperience: '',
      skills: '',
    });
  };

  return (
    <div>
      <h1>Resume Generator</h1>
      <div style={{ display: 'flex' }}>
        <div style={{ flex: 1 }}>
          <ResumeForm formData={formData} setFormData={setFormData} />
          <button type="submit" onClick={handleFormSubmit}>Generate</button>
          <button type="reset" onClick={handleFormReset}>Reset</button>
        </div>
        <div style={{ flex: 1 }}>
          <ResumePreview formData={formData} />
        </div>
      </div>
    </div>
  );
}

export default ResumeGenerator;
