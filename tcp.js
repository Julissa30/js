
const net = require('net');

const server = net.createServer((conexion)=>{
	conexion.write("Echo oo ooo oo oo!!");
	conexion.pipe(conexion);
});

server.listen(4000, '127.0.0.1');
