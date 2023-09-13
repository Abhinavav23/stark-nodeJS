const {
  mkdir,
  mkdirSync,
  rm,
  readdir,
  writeFile,
  appendFile,
  readFile,
} = require("fs");

console.log("start");
/*
// sync way of creating
// mkdirSync('./New');
try{
    console.log('starting');
    mkdirSync('./New');
    console.log('created successfully');
} catch(err){
    console.log(err.message);
}

// async way
mkdir('./New_Async/user', (err) => {
    console.log('starting');
    console.log(err);
    console.log('done');
})

// error first callback
readdir("./New_Async", (err, dirs) => {
  if (err) {
    console.log(err);
  } else {
    console.log(dirs);
  }
});


// file creation
// if file not there --> will create a file and then write
// if file is there --> use the file to write in it
// it will always update the file with current content
writeFile("./New/basic.txt", "Hi, this is Stark File line 2", (err) => {
  if (err) {
    console.log(err.message);
  } else {
    console.log("writing successful");
  }
});


// if file not there --> will create a file and then write
// if file is there --> use the file to write in it
// it will extend the content
appendFile("./New/studentList.txt", "\nAswath", (err) => {
  if (err) {
    console.log(err.message);
  } else {
    console.log("writing successful");
  }
});
*/

// readFile
readFile('./New/studentList.txt', 'utf-8', (err, content) => {
    if(err){
        console.log(err.message);
    }else{
        console.log('content', content);
    }
});

console.log("end");
