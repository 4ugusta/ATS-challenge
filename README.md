ATS Challenge - CV Editor Application
=======================================

Overview:
---------
This project is a CV Editor and Formatter application built with Next.js and React.
It features:
  • A file upload to parse CVs.
  • An anonymization function to remove sensitive data (emails, phone numbers, etc.).
  • AI-powered CV reformatting via the OpenAI API.
  • A Rich Text Editor (using TipTap with custom extensions) that preserves inline styles.
  • An agent-based suggestion system to further refine the CV.
  • A PDF download option (using server-side Puppeteer for robust multi-page PDF generation).
  • Unit tests (using Jest) for utility functions.

Installation:
-------------
1. Clone the repository:
     git clone <repository_url>
     cd ats-challenge

2. Install dependencies:
     npm install

3. Set up environment variables:
   Create a file named .env.local in the project root with your environment configuration, for example:
     OPENAI_API_KEY=your_openai_api_key_here

Running the Application:
-------------------------
To run the development server:
     npm run dev
Then open your browser at:
     http://localhost:3000

Running Tests:
--------------
This project uses Jest (with ts-jest) for testing.
To run all tests, use:
     npm test

To run a specific test file (e.g., tests/anonymizeCV.test.ts), use:
     npx jest tests/anonymizeCV.test.ts

Project Structure:
------------------
  /app           - Next.js pages (including the Editor page).
  /components    - React components (RichTextEditor, CVDiffViewer, and custom TipTap extensions).
  /utils         - Utility functions (anonymizeCV.ts, reformatCV.ts).
  /tests         - Jest test files.

Dependencies:
-------------
  - Next.js
  - React
  - TipTap & ProseMirror (with custom extensions)
  - OpenAI API
  - Puppeteer (or html2pdf.js alternative for PDF generation)
  - Jest, ts-jest (for testing)

PDF Generation:
---------------
This project uses a server-side approach with Puppeteer to generate PDFs.
The API route at /api/generate-pdf accepts HTML content and returns a multi-page PDF.
Please note that if you deploy to environments like Vercel, additional configuration (such as using chrome-aws-lambda)
may be necessary.

For more detailed documentation and customization options, please refer to the project documentation.

Happy Coding!
