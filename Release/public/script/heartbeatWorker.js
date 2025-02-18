let interval;

self.onmessage = (e) => {
    if (e.data === "start") {
        if (!interval) {
            interval = setInterval(() => {
                self.postMessage("heartbeat");
            }, 5000);
        }
    } else if (e.data === "stop") {
        clearInterval(interval);
        interval = null;
    }
};
