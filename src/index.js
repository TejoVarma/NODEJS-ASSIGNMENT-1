const fs = require('fs/promises')

const myFileWriter = async (fileName, fileContent) => {
	// write code here
	// dont chnage function name
	fs.writeFile(fileName,fileContent)
	console.log("file created");
}

const myFileReader = async (fileName) => {
	// write code here
	// dont chnage function name
	let text = fs.readFile(fileName,'utf8');
	text.then(data=>console.log(data));
}


const myFileUpdater = async (fileName, fileContent) => {
	// write code here
	// dont chnage function name
	fs.appendFile(fileName,fileContent)
	console.log("file has updated")
}

const myFileDeleter = async (fileName) => {
	// write code here
	// dont chnage function name
	fs.unlink(fileName);
	console.log("file deleted");
}

myFileWriter("file.txt","Hello");
myFileReader("file.txt")
myFileUpdater("file.txt"," World");
myFileDeleter("file.txt");
module.exports = { myFileWriter, myFileUpdater, myFileReader, myFileDeleter }