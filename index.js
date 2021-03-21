const execSync = require("child_process").execSync;
const cron = require("node-cron");

function kill(processName) {
  execSync("killall " + processName);
}

function ADHDTimer(tasks, processes) {
  for (const task of tasks) {
    cron.schedule(task.schedule, () => {
      for(const proc of processes) {
        kill(proc);
      }
      if (task.callback) {
        task.callback();
      }
    });
  }
}

module.exports = ADHDTimer;
