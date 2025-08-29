// Live preview for main fields
document.querySelectorAll("#resume-form input, #resume-form textarea")
  .forEach(field => field.addEventListener("input", updateResume));

// Update the preview for name/address/summary/skills
function updateResume() {
  document.getElementById("p-name").innerText = document.getElementById("name").value;
  document.getElementById("p-email").innerText = document.getElementById("email").value;
  document.getElementById("p-phone").innerText = document.getElementById("phone").value;
  document.getElementById("p-summary").innerText = document.getElementById("summary").value;

  // Skills
  let skillsText = document.getElementById("skills").value.split(",");
  let skillsList = document.getElementById("p-skills");
  skillsList.innerHTML = ""; // Clear
  skillsText.forEach(s => {
    if (s.trim() !== "") {
      let li = document.createElement("li");
      li.innerText = s.trim();
      skillsList.appendChild(li);
    }
  });
}

// Add dynamic Education row
function addEducation() {
  let div = document.createElement("div");
  div.innerHTML = `<input type="text" placeholder="Education detail" 
    oninput="updateEducation()">`;
  document.getElementById("education").appendChild(div);
}

// Add dynamic Experience row
function addExperience() {
  let div = document.createElement("div");
  div.innerHTML = `<input type="text" placeholder="Experience detail" 
    oninput="updateExperience()">`;
  document.getElementById("experience").appendChild(div);
}

// Update education list in preview
function updateEducation() {
  let inputs = document.querySelectorAll("#education input");
  let list = document.getElementById("p-education");
  list.innerHTML = "";
  inputs.forEach(i => {
    if (i.value.trim() !== "") {
      let li = document.createElement("li");
      li.innerText = i.value;
      list.appendChild(li);
    }
  });
}

// Update experience list in preview
function updateExperience() {
  let inputs = document.querySelectorAll("#experience input");
  let list = document.getElementById("p-experience");
  list.innerHTML = "";
  inputs.forEach(i => {
    if (i.value.trim() !== "") {
      let li = document.createElement("li");
      li.innerText = i.value;
      list.appendChild(li);
    }
  });
}

// Reset preview on form clear
function resetResume() {
  setTimeout(() => {
    document.getElementById("p-name").innerText = "";
    document.getElementById("p-email").innerText = "";
    document.getElementById("p-phone").innerText = "";
    document.getElementById("p-summary").innerText = "";
    document.getElementById("p-skills").innerHTML = "";
    document.getElementById("p-education").innerHTML = "";
    document.getElementById("p-experience").innerHTML = "";
    document.getElementById("education").innerHTML = "";
    document.getElementById("experience").innerHTML = "";
  }, 50);
}
