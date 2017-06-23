

'use strict';

const exec = require('child_process').exec;
const fs = require('fs');
const path = require('path');

function writeFilePromisified(name, text) {
  return new Promise((resolve, reject) => {
    fs.writeFile(name, text, (err) => {
      if (err) {
        reject(err);
        return;
      }
      resolve();
    });
  });
}

function convertHtmlToPdfPromisified(htmlFileName, pdfFileName) {
  return new Promise((resolve, reject) => {
    exec(`wkhtmltopdf ${htmlFileName} ${pdfFileName}`, (error, stdout, stderr) => {
      if (error) {
        console.error(`exec error: ${error}`);
        reject(error);
        return;
      }
      console.log(`stderr: ${stderr}`);
      console.log(`stdout: ${stdout}`);
      resolve({
        stdout,
        stderr,
      });
    });
  });
}

module.exports = (req, res) => {
  const invoiceHTML = req.body;
  const invoiceHTMLFileName = 'invoice.html';
  const outputPDFFileName = 'output.pdf';
  const invoiceHTMLPath = path.join(__dirname, '../../user_invoices', invoiceHTMLFileName);
  const outputPDFPath = path.join(__dirname, '../../user_invoices', outputPDFFileName);

  writeFilePromisified(invoiceHTMLPath, invoiceHTML).then(() => {
    return convertHtmlToPdfPromisified(invoiceHTMLPath, outputPDFPath);
  }).then((output) => {
    res.json({
      newPdf: outputPDFFileName,
    });
  }).catch((error) => {
    res.status(400).json({
      error,
    });
  });
};
