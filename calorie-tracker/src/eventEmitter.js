class EventEmitter {
  constructor() {
    this.listeners = {};
  }
  subscribe(event, listener) {
    if (!this.listeners[event]) {
      this.listeners[event] = [];
    }
    this.listeners[event].push(listener);
  }

  emit(event, payload) {
    if (!this.listeners[event]) return;
    this.listeners[event].forEach((fn) => fn(payload));
  }

  unsubscribe(event, listener) {
    this.listeners[event] = this.listeners[event].filter(
      (fn) => fn !== listener,
    );
  }
}

export const appEvents = new EventEmitter();
