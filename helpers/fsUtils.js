const fs = require("fs");
const util = require("util");
const { response } = require("../routes");
const res = require("express/lib/response");

class fsUtils {
  // Make into a promise so that you can do .thens
  readFromFile = util.promisify(fs.readFile);

  writeToFile(content, fileLocation) {
    const data = [];
    this.readFromFile(fileLocation).then((response) => {
      data.push(JSON.parse(response));
      data.push(content);
      this.#writeDatatoFile(data, fileLocation);
    });
  }

  deleteDataFromFile(id, fileLocation) {
    const data = [];
    this.readFromFile(fileLocation).then((response) => {
      data.push(JSON.parse(response));
      
      const returnData = data.map(note =>{
        if(note.id === id){
          return note;
        }
        else{
          
        };
      });
    });
  }

  #writeDatatoFile(data, fileLocation) {
    fs.writeFile(fileLocation, JSON.stringify(data, null, 4), (err) => {
      return err
        ? console.error(err)
        : console.log("Successfully added data", data);
    });
  }
}

module.exports = { fsUtils };
