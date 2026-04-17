const debounce = (func, wait) => {
  let timer = null;
  let last = null;
  function debounc(...arg) {
     last = arg;
    clearTimeout(timer);
    let ctx = this;
    timer = setTimeout(() => func.apply(ctx, arg), wait);
  }

  debounc.cancel = () => {
    clearTimeout(timer);
  };

  debounc.flush = () => {
   
    clearTimeout(timer);
    if (last) func.apply(this, last);
  };

  return debounc;
};

function logger(msg) {
  console.log("called with:", msg);
}

const debouncedLogger = debounce(logger, 1000);

debouncedLogger("a");
debouncedLogger("b");
debouncedLogger("c");

debouncedLogger("hello");
debouncedLogger.cancel();

debouncedLogger("flush me");
debouncedLogger.flush();
