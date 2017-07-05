/**
 * Created by davidgudeman on 3/5/17.
 * @swagger
 * /invoices/pdf:
 *   post:
 *     description: creates a pdf version of a html document
 *     summary: creates a pdf version of a html document
 *     consumes:
 *       - text/plain
 *     parameters:
 *       - name: body
 *         in: body
 *         required: true
 *         description: invoice html
 *     produces:
 *       - application/json
 *     tags:
 *       - Invoice
 */

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
  console.log(`htmlFileName ${htmlFileName}`);
  console.log(`pdflFileName ${pdfFileName}`);
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
  // console.log(`REQ.BODY ${req.body}`);
  console.log(`__dirname ${__dirname}`);
  const invoiceHTMLFileName = 'invoice.html';
  const outputPDFFileName = 'output.pdf';
  const invoiceHTMLPath = path.join(__dirname, '../../user_invoices', invoiceHTMLFileName);
  const outputPDFPath = path.join(__dirname, '../../user_invoices', outputPDFFileName);

  writeFilePromisified(invoiceHTMLPath, invoiceHTML).then(() => {
    return convertHtmlToPdfPromisified(invoiceHTMLPath, outputPDFPath);
  }).then((output) => {
    console.log(`createInvoicePdf output= ${output}`);
    res.json({
      logging: console.log,
      newPdf: outputPDFFileName,
    });
  }).catch((error) => {
    res.status(400).json({
      error,
    });
  });
};
