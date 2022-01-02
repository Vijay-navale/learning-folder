const div = document.getElementById("div");

let num = 1;
setInterval(() => {
  div.textContent = num;

  num++;
}, 1000);
