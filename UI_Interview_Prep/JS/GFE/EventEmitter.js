class EventEmitter {
  constructor() {
    this.events = new Map();
  }

  on(event, listener) {
    if (!this.events.has(event)) this.events.set(event, []);
    this.events.get(event).push(listener);
  }

  off(event, listener) {
    this.events.set(
      event,
      this.events.get(event).filter((l) => l !== listener),
    );
  }

  emit(event, ...args) {
   this.events.get(event)?.forEach(l => l(...args))
  }
}
