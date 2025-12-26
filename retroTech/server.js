import http from 'node:http'

const PORT = 8000

const server = http.createServer((req, res)=> {
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/html')
  res.end()
})

server.listen(PORT, () => console.log('connected on port 8000'))