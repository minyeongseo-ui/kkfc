function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var Runner = function Runner(name, logger, tasks) {
  _classCallCheck(this, Runner);

  this.name = name;
  this.logger = logger;
  this.tasks = tasks;
};

var Task = function Task() {
  _classCallCheck(this, Task);
};

var Logger = function Logger() {
  _classCallCheck(this, Logger);
};

export { Logger, Runner, Task };
