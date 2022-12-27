function clock() {
  setInterval(() => {
    let date = new Date();
    document.getElementById("time").innerText = date.toLocaleTimeString();
  }, 1000);
}

clock();
