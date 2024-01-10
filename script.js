const contactLink = document.getElementById('button-contact')
const nameInput = document.getElementById('name')
const emailInput = document.getElementById('email')
const phoneInput = document.getElementById('phone')
const contactSection = document.getElementById ('contact')
const postalCodeId = document.getElementById('PostalCodeId');
const SwedishPostalCodeInput = document.getElementById('SwedishPostalCode')

// Lägg till EventListener för att visaPostalCode
emailInput.addEventListener('input', () => {
  updatePostalCodeVisibility();
});

contactLink.addEventListener("click", () => {
  getname()
  getEmail()
  getphone()
  phoneInput.addEventListener('input', () => {
    getphone();
  });
})

function getname() {
  let readname = nameInput.value
  console.log("Name : " + readname)
  let createParagraphElement = createParagraph("Name : " + readname)
  contactSection.appendChild(createParagraphElement); // p kommer att visas under kontakt sektionen
}

function getEmail() {
  let readEmail = emailInput.value;
  console.log("Email : " + readEmail);
  let createParagraphElement = createParagraph("Email : " + readEmail);
  contactSection.appendChild(createParagraphElement);
  updatePostalCodeVisibility();
  
  if(postalCodeId.style.display == 'block'){
    getpostcode()
  }
}

function getphone() {
  let readPhone = phoneInput.value
  console.log("Phone : " + readPhone)
  let createParagraphElement = createParagraph("Phone : " + readPhone)
  console.log(createParagraphElement);
  contactSection.appendChild(createParagraphElement); // p kommer att visas under kontakt sektionen
}

function updatePostalCodeVisibility() {
  // Kontrollera om mejlet slutar med ".se" och visa/dölj PostalCodeId därefter
  if (emailInput.value.endsWith('.se')) {
    postalCodeId.style.display = 'block';
  } else {
    postalCodeId.style.display = 'none';
  }
}

function getpostcode() {
  let readSwedishPCInput = SwedishPostalCodeInput.value
  console.log("Swedish PostalCode : " + readSwedishPCInput)
  let createParagraphElement = createParagraph("Swedish PostalCode : " + readSwedishPCInput)
  console.log(createParagraphElement);
  contactSection.appendChild(createParagraphElement); // p kommer att visas under kontakt sektionen
}

function createParagraph(paragrahpText){
  let paragrahp = document.createElement("p")
  paragrahp.textContent = paragrahpText
  paragrahp.style.backgroundColor = "#FAC748"
  paragrahp.style.fontSize = "20px"
  paragrahp.style.margin = "20px"
  return paragrahp
}