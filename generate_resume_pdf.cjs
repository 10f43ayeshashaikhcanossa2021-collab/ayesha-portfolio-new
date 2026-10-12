const fs = require('fs');
const { PDFDocument, StandardFonts, rgb } = require('pdf-lib');

async function createResume() {
  const pdfDoc = await PDFDocument.create();
  
  // Standard Letter page: 612 x 792 pt
  const page = pdfDoc.addPage([612, 792]);
  const { width, height } = page.getSize();

  const fontRegular = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const fontBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
  const fontItalic = await pdfDoc.embedFont(StandardFonts.HelveticaOblique);

  const margin = 40;
  let y = height - 42;

  // Colors
  const colorPrimary = rgb(0.12, 0.08, 0.22); // Deep plum/charcoal
  const colorAccent = rgb(0.38, 0.24, 0.85);  // Violet accent
  const colorSecondary = rgb(0.28, 0.28, 0.32);
  const colorMuted = rgb(0.45, 0.45, 0.5);
  const colorLine = rgb(0.82, 0.78, 0.92);

  function drawText(text, x, curY, font, size, color) {
    page.drawText(text, { x, y: curY, font, size, color });
  }

  function drawSectionHeader(title) {
    y -= 12;
    page.drawText(title, {
      x: margin,
      y,
      font: fontBold,
      size: 10.5,
      color: colorAccent,
    });
    y -= 4;
    page.drawLine({
      start: { x: margin, y },
      end: { x: width - margin, y },
      thickness: 1,
      color: colorLine,
    });
    y -= 10;
  }

  // --- Header ---
  const nameText = 'SHAIKH AYESHA LUKMAN';
  const nameWidth = fontBold.widthOfTextAtSize(nameText, 19);
  drawText(nameText, (width - nameWidth) / 2, y, fontBold, 19, colorPrimary);
  y -= 15;

  const tagline = 'AI & ML Student  |  Full Stack Developer  |  Python Developer';
  const taglineWidth = fontBold.widthOfTextAtSize(tagline, 9.5);
  drawText(tagline, (width - taglineWidth) / 2, y, fontBold, 9.5, colorAccent);
  y -= 14;

  const contact1 = 'Mumbai, Maharashtra  •  ayeshalk2025@gmail.com';
  const contact1Width = fontRegular.widthOfTextAtSize(contact1, 8.5);
  drawText(contact1, (width - contact1Width) / 2, y, fontRegular, 8.5, colorSecondary);
  y -= 12;

  const contact2 = 'LinkedIn: linkedin.com/in/ayesha-lukman-972987375  •  GitHub: github.com/10f43ayeshashaikhcanossa2021-collab';
  const contact2Width = fontRegular.widthOfTextAtSize(contact2, 8);
  drawText(contact2, (width - contact2Width) / 2, y, fontRegular, 8, colorSecondary);
  y -= 8;

  // --- Professional Summary ---
  drawSectionHeader('PROFESSIONAL SUMMARY');
  const summaryLines = [
    'Motivated Computer Science (AI & ML) student at M.H. Saboo Siddik College of Engineering with hands-on',
    'experience in Full Stack Development, Python programming, AI-powered projects, and web application development.',
    'Passionate about Machine Learning, Software Engineering, and building real-world solutions.'
  ];
  for (const line of summaryLines) {
    drawText(line, margin, y, fontRegular, 8.5, colorSecondary);
    y -= 11.5;
  }

  // --- Education ---
  drawSectionHeader('EDUCATION');
  drawText('B.E. Computer Science (AI & ML) – M.H. Saboo Siddik College of Engineering, Mumbai', margin, y, fontBold, 9, colorPrimary);
  drawText('(2024–2028)', width - margin - 50, y, fontRegular, 8.5, colorMuted);
  y -= 12;
  drawText('CGPA: 8.82   |   Expected Graduation: 2028', margin, y, fontRegular, 8.5, colorSecondary);
  y -= 4;

  // --- Professional Experience ---
  drawSectionHeader('PROFESSIONAL EXPERIENCE');
  
  // ABWcurious
  drawText('Full Stack Development Intern – ABWcurious', margin, y, fontBold, 9, colorPrimary);
  y -= 11;
  const abwBullets = [
    'Developed responsive web applications using React, Next.js, and backend APIs.',
    'Worked on authentication, database integration, and Git/GitHub workflows.'
  ];
  for (const b of abwBullets) {
    drawText('•', margin + 4, y, fontRegular, 8.5, colorAccent);
    drawText(b, margin + 14, y, fontRegular, 8.5, colorSecondary);
    y -= 11;
  }
  y -= 2;

  // Yrnovatech
  drawText('Python Intern – Yrnovatech', margin, y, fontBold, 9, colorPrimary);
  y -= 11;
  const yrnoBullets = [
    'Developed Python programs for automation and problem-solving.',
    'Worked on scripting, debugging, and practical coding assignments.'
  ];
  for (const b of yrnoBullets) {
    drawText('•', margin + 4, y, fontRegular, 8.5, colorAccent);
    drawText(b, margin + 14, y, fontRegular, 8.5, colorSecondary);
    y -= 11;
  }
  y -= 2;

  // --- Projects ---
  drawSectionHeader('PROJECTS');

  // Project 1
  drawText('Restaurant360 ERP', margin, y, fontBold, 8.8, colorPrimary);
  drawText('— Restaurant management system with billing, inventory, table management, and analytics.', margin + 92, y, fontRegular, 8.2, colorSecondary);
  y -= 11.5;

  // Project 2
  drawText('BuildWise', margin, y, fontBold, 8.8, colorPrimary);
  drawText('— Construction management system with Firebase authentication and project tracking.', margin + 50, y, fontRegular, 8.2, colorSecondary);
  y -= 11.5;

  // Project 3
  drawText('Smart Study Planner AI', margin, y, fontBold, 8.8, colorPrimary);
  drawText('— AI-powered planner that generates personalized study schedules based on workload.', margin + 115, y, fontRegular, 8.2, colorSecondary);
  y -= 11.5;

  // Project 4
  drawText('Data Processing Pipeline', margin, y, fontBold, 8.8, colorPrimary);
  drawText('— Python pipeline ingesting CSV, JSON & APIs with validation, cleaning, and quality reporting.', margin + 120, y, fontRegular, 8.2, colorSecondary);
  y -= 4;

  // --- Technical Skills ---
  drawSectionHeader('TECHNICAL SKILLS');
  const skills = [
    { label: 'Programming:', val: 'Python, C, JavaScript' },
    { label: 'Frontend:', val: 'HTML5, CSS3, React, Next.js, Vite' },
    { label: 'Backend:', val: 'Node.js, Spring Boot, REST APIs' },
    { label: 'Databases:', val: 'MySQL, MongoDB, PostgreSQL, Firebase' },
    { label: 'Machine Learning:', val: 'Linear Regression, Logistic Regression, KNN, Decision Trees, Random Forest' },
    { label: 'Tools:', val: 'Git, GitHub, VS Code' },
  ];
  for (const s of skills) {
    drawText(s.label, margin, y, fontBold, 8.2, colorPrimary);
    const labelW = fontBold.widthOfTextAtSize(s.label, 8.2);
    drawText(s.val, margin + labelW + 6, y, fontRegular, 8.2, colorSecondary);
    y -= 11;
  }
  y -= 2;

  // --- Relevant Coursework ---
  drawSectionHeader('RELEVANT COURSEWORK');
  drawText('Web Technologies, Database Management Systems, Software Engineering, Artificial Intelligence & Machine Learning', margin, y, fontRegular, 8.5, colorSecondary);
  y -= 4;

  // --- Achievements ---
  drawSectionHeader('ACHIEVEMENTS');
  const achs = [
    'Top 15 Performer – Frontend Battle (IIT Bhubaneswar)',
    'Top 40 Finalist – KLEOS 4.0 National Hackathon',
    'Top 20 Finalist – Pragati 2.0 Build-it-On Hackathon',
    'Certificate of Excellence – DevQuest Frontend Challenge',
    'Google PromptWars Participant'
  ];
  for (const a of achs) {
    drawText('•', margin + 4, y, fontRegular, 8.5, colorAccent);
    drawText(a, margin + 14, y, fontRegular, 8.5, colorSecondary);
    y -= 11;
  }
  y -= 2;

  // --- Personal Details & Languages ---
  drawSectionHeader('PERSONAL DETAILS & LANGUAGES');
  drawText('Languages: English, Hindi   |   Location: Mahim, Mumbai   |   Nationality: Indian', margin, y, fontRegular, 8.5, colorSecondary);

  const pdfBytes = await pdfDoc.save();
  
  if (!fs.existsSync('public')) {
    fs.mkdirSync('public', { recursive: true });
  }

  const pdfPath = 'public/Shaikh_Ayesha_Lukman_Resume.pdf';
  fs.writeFileSync(pdfPath, pdfBytes);
  console.log(`Saved PDF to ${pdfPath} (${pdfBytes.length} bytes)`);

  // Also write base64 URI for zero-network standalone fallback
  const base64Uri = 'data:application/pdf;base64,' + Buffer.from(pdfBytes).toString('base64');
  fs.writeFileSync('resume_base64.txt', base64Uri);
  console.log(`Saved resume base64 URI to resume_base64.txt (${base64Uri.length} chars)`);
}

createResume().catch(err => {
  console.error(err);
  process.exit(1);
});
