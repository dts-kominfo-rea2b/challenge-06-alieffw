// TODO: import module bila dibutuhkan di sini
const fileStream = require('fs');

// ! JANGAN DIMODIFIKASI
let file1 = "./data1.json";
let file2 = "./data2.json";
let file3 = "./data3.json";

// ! JANGAN DIMODIFIKASI
let modifyFile1 = (val) => {
  file1 = val;
};
let modifyFile2 = (val) => {
  file2 = val;
};
let modifyFile3 = (val) => {
  file3 = val;
};

// TODO: Kerjakan bacaData
// gunakan variabel file1, file2, dan file3
let file = [file1, file2, file3];

const bacaData = (fnCallBack) => {
  let save = [];
  let kata = null;
  fileStream.readFile(file1, {encoding:'utf-8'}, (err, data)=> {
    if(err) return err;
    kata = newWord(data);
    save.push(kata);
    fileStream.readFile(file2,{encoding: 'utf-8'},(err, data) => {
      if(err) return err;                              
      kata = newWord(data);
      save.push(kata);
      fileStream.readFile(file3,{encoding: 'utf-8'},(err, data) => {
                      if (err) return err;             
                      kata = newWord(data);
                      save.push(kata);                          
                      //console.log(save +"\n");
                      fnCallBack(null, save);
  })
})
})
}

const newWord = (data) =>{
  const arrayObject = JSON.parse(data);
  let splitData = null;
  if(arrayObject.message !== undefined){
    splitData = arrayObject.message.split(" ");
    return splitData[1];
   //return index;
  }else  if(arrayObject[0].message !== undefined){
    splitData = arrayObject[0].message.split(" ");
    return splitData[1];
   //return index;
  }else{
    splitData = arrayObject[0].data.message.split(" ");
    return splitData[1];
    //return index;
  }
}

// ! JANGAN DIMODIFIKASI
module.exports = {
  modifyFile1,
  modifyFile2,
  modifyFile3,
  bacaData,
};
