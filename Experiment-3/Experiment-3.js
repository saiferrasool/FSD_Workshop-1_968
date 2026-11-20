const http=require("http");
const server=http.createServer((re,res)=>{
    res.writeHead(200,{
        "content-type":"text/plain",
        "server":"node.js"
    })
    res.end("Hello World");
});
port=3005;
server.listen(port,()=>{
    console.log(`server is running on http://localhost:${port}`);
})