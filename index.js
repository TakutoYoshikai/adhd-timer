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
      task.callback();
    });
  }
}

module.exports = ADHDTimer;
