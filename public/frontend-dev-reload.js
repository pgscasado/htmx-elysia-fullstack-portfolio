(() => {
  baseUrl = "ws://" + window.location.host || "localhost:3000";
  socket = new WebSocket(baseUrl + "/dev-reload");
  reloading = false;
  setInterval(function() {
    if (socket.readyState != 1) 
      return setTimeout(() => {
        if (!reloading) location.reload()
        reloading = true; 
      }, 1000);
    socket.send("reload");
  }, 1000);
})();