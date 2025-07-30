// login.js or inside your main script.js

document.addEventListener("click", function (e) {
  if (e.target.classList.contains("sell-btn")) {
    openModal();
  }
  if (e.target.classList.contains("close-btn")) {
    closeModal();
  }
});

function openModal() {
  const modal = document.getElementById("popupModal");
  if (modal) modal.style.display = "flex";
}

function closeModal() {
  const modal = document.getElementById("popupModal");
  if (modal) modal.style.display = "none";
}

 const modal = document.getElementById("popupModal");
    const phoneInput = document.getElementById("phone");
    const cityInput = document.getElementById("city");
    const continueBtn = document.getElementById("continueBtn");
    let selectedRole = "", selectedPurpose = "";

    function openModal() {
      modal.style.display = "flex";
    }

    function closeModal() {
      modal.style.display = "none";
    }

    function selectRole(button, role) {
      document.querySelectorAll(".toggle-group:nth-of-type(1) .toggle-button")
        .forEach(btn => btn.classList.remove("active"));
      button.classList.add("active");
      selectedRole = role;
      checkForm();
    }

    function selectPurpose(button, purpose) {
      document.querySelectorAll(".toggle-group:nth-of-type(2) .toggle-button")
        .forEach(btn => btn.classList.remove("active"));
      button.classList.add("active");
      selectedPurpose = purpose;
      checkForm();
    }

    phoneInput.addEventListener('input', checkForm);
    cityInput.addEventListener('input', checkForm);

    function checkForm() {
      if (selectedRole && selectedPurpose && phoneInput.value.trim() && cityInput.value.trim()) {
        continueBtn.disabled = false;
        continueBtn.classList.add('enabled');
      } else {
        continueBtn.disabled = true;
        continueBtn.classList.remove('enabled');
      }
    }

    function submitForm() {
      alert(`Submitted!\nRole: ${selectedRole}\nPurpose: ${selectedPurpose}\nPhone: ${phoneInput.value}\nCity: ${cityInput.value}`);
      closeModal(); // close after submission
    }
    