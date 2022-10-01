const { randomInt } = require('crypto');
const os = require('os');
const io = require('socket.io')(process.env.port || 7777);
console.log("Start Server :");
var Online = 0;
var Players = [];
var Rooms = [];
var yyu;

io.on('connection', function(socket)
{ 
 
   Online++;
   socket.emit('ok');
   
   socket.on('is_ready',function(data)
   {
      var sder = true;
      for (let i = 0; i < Rooms.length; i++)
      {
         if(Rooms[i].Player0.id == data.id || Rooms[i].Player1.id == data.id)
         {
            socket.emit("Join", Rooms[i]);
            sder = false;
            i = Rooms.length + 1;
         }   
      }
      for (let i = 0; i < Players.length; i++)
      {
         if(Players[i].id == data.id)
         {
            sder = false;
            i = Players.length + 1;
         }   
      }
      if(sder)
      {
         var sdqz = {"id":data.id, "soid":socket.id};
         Players.push(sdqz);
      }
   });
   socket.on('Messagage', function(data)
   {
      socket.broadcast.emit('Get_MSG', data);
      socket.emit('Get_MSG', data);
   });

   socket.on('ChatPV', function(data)
   {
      socket.to(data.soid).emit('Get_PV', data);
      socket.emit('Get_PV', data);
   });

   socket.on('stat', function()
   {
      socket.emit('stat0',{"Players":Online});
   });

   socket.on('ChatOff', function(data)
   {
      socket.to(data.soid).emit('ChatOff');
      socket.emit('ChatOff');
   });

   socket.on('Turn', function(data)
   {
      var sdb = {"Pos1":data.Pos1, "Pos2":data.Pos2, "att1":data.att1, "Attack":data.Attack};
      socket.to(data.soid).emit('Turn', sdb);
   });

   socket.on('disconnect', function()
   {
      Online--;
   });
});


setInterval(Debugger, 500);
setInterval(Room_Making, 3000);

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
   console.log("is_ready: " + Players.length);
   console.log(" ");
   console.log("Rooms: " + Rooms.length);
   console.log(Rooms);
   console.log(WeTimer);   
}

function Room_Making()
{
   Rooms = [];
   if(Players.length >= 2)
   {
      for (let i = 0; i < Players.length; i++)
      {
         var Num0 = i;
         i ++;
         if(i > Players.length)
         {

         }
         else
         {
            Rooms.push({"Player0":{"id":Players[Num0].id, "soid":Players[Num0].soid}, "Player1":{"id":Players[i].id, "soid":Players[i].soid}});
         }
      }
   }
   Players = [];
}