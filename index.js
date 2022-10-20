const fs  = require('fs');

//create a new folder
fs.mkdirSync("folder1");

//create a new file in it.
fs.writeFileSync("folder1/file1.txt", "Hello this is file-1.");

//append some content on the exisiting data in this newly created file.
fs.appendFileSync("folder1/file1.txt", "this is appended content.");

//reding data of a file
const data = fs.readFileSync("folder1/file1.txt"); //insted of printing actual data of file it will actually return a buffer. 
console.log(data);

//to avoid buffer data and getting actual data we have to specify encoding.
const data = fs.readFileSync("folder1/file1.txt", "utf8"); //this will give actual data
console.log(data);

//rename the file
fs.renameSync("folder1/file1.txt", "folder1/renamedfile1.txt");

//delete the file
fs.unlinkSync("folder1/renamedfile1.txt");

//delete the folder
fs.rmdirSync("folder1");
