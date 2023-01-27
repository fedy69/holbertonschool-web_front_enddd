let changeMode = (size, weight, transform, background, color) => {
    return () => {
      document.body.style.fontSize = size + "px";
      document.body.style.fontWeight = weight;
      document.body.style.textTransform = transform;
      document.body.style.backgroundColor = background;
      document.body.style.color = color;
    }
  }
  
  let main = () => {
    let spooky = changeMode(9, "bold", "uppercase", "pink", "green");
    let darkMode = changeMode(12, "bold", "capitalize", "black", "white");
    let screamMode = changeMode(12, "normal", "lowercase", "white", "black");
  
    let welcomeText = document.createElement("p");
    welcomeText.innerHTML = "Welcome Holberton!";
    document.body.appendChild(welcomeText);
  
    let spookyButton = document.createElement("button");
    spookyButton.innerHTML = "Spooky";
    spookyButton.addEventListener("click", spooky);
    document.body.appendChild(spookyButton);
  
    let darkModeButton = document.createElement("button");
    darkModeButton.innerHTML = "Dark mode";
    darkModeButton.addEventListener("click", darkMode);
    document.body.appendChild(darkModeButton);
  
    let screamModeButton = document.createElement("button");
    screamModeButton.innerHTML = "Scream mode";
    screamModeButton.addEventListener("click", screamMode);
    document.body.appendChild(screamModeButton);
  }
  
  main();
  