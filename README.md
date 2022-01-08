# adhd-timer
This is a timer library for ADHD people. Specific processes are killed when the timer notices.

### Requirements
* macOS or Ubuntu
* npm
* Node.js


### Usage
**install**
```bash
npm install --save TakutoYoshikai/adhd-timer
```

**example**
```javascript
const ADHDTimer = require("adhd-timer");

ADHDTimer([
  {
    schedule: "0 * * * * *", //at every minutes.
    callback: function() {}
  }
], [
  //process names that you want to kill when the timer notices.
  "firefox",
]);
```

### License
MIT License
