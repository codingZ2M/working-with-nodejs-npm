// API - Service, from which you can request some data.
// Sending an API to client
const  fs = require('fs');
const http = require('http') // import 'http' module for networking capabilities

// The following method will be exeuted only once and not whenever the server gets the request.
 // __dirname, represents the location where the current file is located.
const data = fs.readFileSync(`${__dirname}/product_data/product.json`, 'utf-8')
    const dataObject = JSON.parse(data)


// Creating & Starting the Server
// The call back will be fired off each time a new request hits our server.
const server = http.createServer( (request, response) => {

   const url = new URL(request.url, "http://localhost:5000/");
   const pathname = url.pathname;

    if(pathname === '/' || pathname === '/overview') {
        response.end('This is the overview page!') // Sending JSON (API) to Client
        }
    else if (pathname === '/product') {
        response.end('This is the product page!')
    }

    else if (pathname === '/api') {    
              response.writeHead(200, {     // sending headers (piece of info of response)
                      'Conteny_type': 'application/json'
              });     
         response.end(data) // Sending JSON (API) to Client
      }
    
     else {
         response.writeHead(404, {     // sending headers (piece of info of response)
            'conteny_type': 'text/html'
         });
         response.end('<h1>Page Not Found!</h1>')
     }
})

const port = 5000
server.listen(port, '127.0.0.1', ()=> {
    console.log("Web Server is created.. hello from the server.")
    console.log(`Listening to requests on port ${port}`)
})

