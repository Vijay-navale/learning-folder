const debounce = (func, wait) => {
  let timeout;

  return function excutedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      console.log("args", ...args);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};
var returnedFunction = debounce(() => {
  console.log("yes I run after 3s");
}, 3000);
window.addEventListener("resize", returnedFunction);
