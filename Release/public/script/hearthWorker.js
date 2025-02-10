let interval = null;
self.onmessage = (event) => {
  if (event.data === "start") {
    if (!interval) {
      interval = setInterval(() => {
        self.postMessage("sendHeartbeat");
      }, 1000);
    }
  } else if (event.data === "stop") {
    clearInterval(interval);
    interval = null;
  }
};