
const net=require('net');

const client=new  net.Socket();

client.connect(4000,'127.0.0.1', ()=>{
	console.log('Socket iniciado');
});

client.on('data', (data)=>{
	console.log(`Info: ${data}`);
	});
	
client.on('close',()=>{
	console.log('Socket terminado');
});
