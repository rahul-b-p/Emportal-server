const jsonServer = require('json-server')

const employeeServer = jsonServer.create()

const middleware = jsonServer.defaults()
const router = jsonServer.router('db.json')


PORT = 4000 || process.env.PORT

employeeServer.use(middleware)
employeeServer.use(router)

employeeServer.listen(PORT,()=>{
    console.log(`Server Running Successfully at port number ${PORT}`);   
})

