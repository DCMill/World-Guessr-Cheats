// Create a Button
console.log("WORKING");
const button = document.createElement("button");
button.textContent = "Reload Location";
button.style.position = "fixed";
button.style.bottom = "50%";
button.style.left = "20px";
button.style.padding = "10px 20px";
button.style.fontSize = "16px";
button.style.cursor = "pointer";
button.style.backgroundColor = "#007bff";
button.style.color = "white";
button.style.border = "none";
button.style.borderRadius = "5px";
button.style.zIndex = "10000";

// Add click event to the button
button.addEventListener("click", () => {
  console.log("Button clicked!");
  let iframe = document.querySelector('#streetview');
  let unparsed = iframe.src.substring(iframe.src.indexOf("?location=")+10, iframe.src.indexOf("&key")).split(",");
  let longitude = unparsed[1];
  let latitude = unparsed[0];
  
  window.open(`https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`, '_blank');
});

// Append the button to the page
document.body.appendChild(button);
