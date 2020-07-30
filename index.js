function Observable() {
  this.observers = {};
  return this;
}

Observable.prototype.subscribe = function (key, observer) {
  if (typeof key === 'string' && typeof observer === 'function') {
    this.observers[key] = observer;
  } else {
    throw new Error('Observable: Key must be a string and Observer must be a function!');
  }
};

Observable.prototype.unsubscribe = function (key) {
  if (typeof key === 'string') {
    delete this.observers[key];
  } else {
    throw new Error('Observable: Key must be a string');
  }
};

Observable.prototype.broadcast = function () {
  for (let key in this.observers) {
    this.observers[key]();
  }
};

module.exports = {Observable};
