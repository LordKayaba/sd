
const os = require('os');
const io = require('socket.io')(process.env.port || 7777);
console.log("Started Server :");
var Online = 0;

io.on('connect', function(socket)
{ 
   Online++;
   socket.emit('sd');
   
   socket.on('disconnect', function()
   {
      Online--;
   });
});

setInterval(Debugger, 500);
var WeTimer = "";
var Timer = 0;

function Debugger()
{
   Timer++;
   WeTimer += ".";
   if(Timer == 4)
   {
      Timer = 0;
      WeTimer = "";
   }
   console.clear();
   console.log(" ");
   console.log("Status: true")
   console.log(" ");
   console.log("Memory: " + Math.round(os.freemem() / 1048576) + "MB / " + Math.round(os.totalmem() / 1048576) + "MB");
   console.log(" ");
   console.log("Players Online: " + Online);
   console.log(" ");
   console.log(WeTimer);   
}