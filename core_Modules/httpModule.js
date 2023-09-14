const {createServer} = require('http');

const server = createServer((request, response) => {
    console.log('inside server ----');
    // response.write('Welcome');
    // response.write('<h1>Welecome to our server<h1>');
    // response.write('<p>this is a dummy response</p>')
    console.log('request', request.url);
    console.log('request', request.method);
    
    if(request.url === '/profile'){
        response.write('Profile page')
    }else{
        // response.write('{post: "this is a post"}')
        response.write('default page')
    }
    
    // to end the response
    response.end();
})

const PORT = 4000;

server.listen(PORT, () => {
    console.log(`server running on PORT: ${PORT}`);
})
