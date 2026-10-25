
document.addEventListener("keydown", (event) => {
  const key = event.key;

  if (["1", "2", "3", "4", "5", "6", "0"].includes(key)) {
    event.preventDefault();

    if (key === "0") {
      document.body.style.backgroundColor = "";
      return;
    }

    const colors = {
      "1": "#ff0000",
      "2": "#ff8800",
      "3": "#ffff00",
      "4": "#00cc44",
      "5": "#0088ff",
      "6": "#9933ff"
    };

    document.body.style.backgroundColor = colors[key];
  }
});
