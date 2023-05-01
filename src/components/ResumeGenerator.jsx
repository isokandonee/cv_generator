
import { useState } from 'react';
import ResumeForm from './ResumeForm';
import ResumePreview from './ResumePreview';
import { saveAs } from 'file-saver';
import { PDFDocument, StandardFonts } from 'pdf-lib';
import { Document, Packer, Paragraph } from 'docx';

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

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    // Generate PDF document
    const pdfDoc = await PDFDocument.create();
    const page = pdfDoc.addPage();
    const helveticaFont = await pdfDoc.embedFont(StandardFonts.Helvetica);
    const { name, email, phone, address, education, workExperience, skills } = formData;
    const lines = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone}`,
      `Address: ${address}`,
      '',
      'Education:',
      education,
      '',
      'Work Experience:',
      workExperience,
      '',
      'Skills:',
      skills,
    ];
    const text = lines.join('\n');
    const textWidth = helveticaFont.widthOfTextAtSize(text, 12);
    const textHeight = helveticaFont.heightAtSize(12);
    page.drawText(text, {
      x: page.getWidth() / 2 - textWidth / 2,
      y: page.getHeight() / 2 - textHeight / 2,
      font: helveticaFont,
      size: 12,
    });
  
    // Save PDF document
    const pdfBytes = await pdfDoc.save();
    const pdfBlob = new Blob([pdfBytes], { type: 'application/pdf' });
    saveAs(pdfBlob, 'resume.pdf');
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
