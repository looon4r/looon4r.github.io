let myText = document.querySelector('p.mem');
let registerUsr = document.querySelector('.change');
let deleteUsr = document.querySelector('.delete');

function setUser() {
  const myName = prompt('Enter your name, please.');
  if (!myName) {
    setUser();
  } else {
    localStorage.setItem('name', myName);
    myText.textContent = `чєл, ти ${myName}`;
  }
}

function deleteUser() {
  localStorage.removeItem('name');
  myText.textContent = `чєл, ти не авторизувався`;
}

if (!localStorage.getItem('name')) {
  myText.textContent = `чєл, ти не авторизувався, зроби це`;
} else {
  const storedName = localStorage.getItem('name');
  myText.textContent = `чєл, ти ${storedName}`;
}

registerUsr.onclick = () => {
  setUser();
}

deleteUsr.onclick = () => {
  deleteUser();
}
