/*
Node JS can be used as a web server.  SINGLE THREADED
We can use JS on the server side of web development.
*/

// Requiring Node Core Modules 'fs', 'http', 'url' 
const fs = require('fs');


const welcome = 'Welcome Helloword! Creating Node code inside JS file and run the file';
console.log(welcome);
console.log('**********************************************')



/* SYNCHRONOUS (Blocking Code): Each line of code waits for the resulet of previous line, 
  PROBLEM: Each line blocks the execution of the rest of the code. So a certain operation can only be 
  done after the one before has finished.  - SLOW OPERATION
  https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Introducing
*/
/*
 file_data1 = fs.readFileSync(`./txt/start.txt`, 'utf-8')
file_data2 = fs.readFileSync(`./txt/${file_data1}.txt`, 'utf-8')
console.log(file_data2)
console.log('Reading the file name from the file "start.txt"...')
 console.log('Data is read from the file "read-this.txt"....')
 console.log('File reading is over.')
 console.log('**********************************************')
*/



// Non-blocking, asynchronous way
// Reading Files Asynchronously

const data1 = fs.readFile(`./txt/start.txt`, 'utf-8', (err, data1) => {
    console.log(err)
    fs.readFile(`./txt/${data1}.txt`, 'utf-8', (err, data2) => {
        console.log(data2);
    });

    console.log(`Reading the file name from the file "start.txt"...`)
    console.log(`Data is read from the file "${data1}"....`)
    console.log('File reading is over.')


    data3 = fs.readFile('./txt/append.txt', 'utf-8', (err, data3) => {
        console.log('-----------------------------------')
        console.log('Reading from the file "apend.txt"...')
        console.log(data3);
    })

});

