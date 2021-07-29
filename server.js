const http = require('http') // import 'http' module for networking capabilities
const url = require('url')

// Creating & Starting the Server
// The call back will be fired off each time a new request hits our server.
const server = http.createServer(  (request, response) => {
    console.log(request.url) // Ex: localhost:5000/products?category=iphone&price=400

    const pathName = request.url;
    if (pathName === '/' || pathName === '/overview') {
        response.end('This is the overview page!')
    }
    else if (pathName === '/product') {
        response.end('This is the product page!')
    }
    else {
        response.writeHead(404, {     // sending headers (piece of info of response)
            'Conteny_type': 'text/html'
        });
        response.end('<h1>Page Not Found!</h1>')
    }

})

const port = 5000
server.listen(port, '127.0.0.1', () => {
    console.log("Web Server is created.. hello from the server.")
    console.log(`Listening to requests on port ${port}`)
})

// Routing - Implementing different actions for different URLs
