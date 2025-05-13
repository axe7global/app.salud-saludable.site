document.addEventListener("DOMContentLoaded", () => {
    const steps = Array.from(document.querySelectorAll(".form-step"));
    const nameForm = document.getElementById("nameStep");
    const emailForm = document.getElementById("emailStep");
    const reasonForm = document.getElementById("reasonStep");

    const nameInput = document.getElementById("nameInput");
    const emailInput = document.getElementById("emailInput");
    const reasonInput = document.getElementById("reasonInput");

    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const reasonError = document.getElementById("reasonError");

    const emailBackBtn = document.getElementById("emailBackBtn");
    const reasonBackBtn = document.getElementById("reasonBackBtn");

    let currentStep = 0;

    function showStep(stepIndex) {
        steps.forEach((stepEl, idx) => {
            if (idx === stepIndex) {
                stepEl.classList.add("active-step");
            } else {
                stepEl.classList.remove("active-step");
            }
        });
    }

    function validateName() {
        if (!nameInput.value.trim()) {
            nameError.textContent = "Por favor, ingresa tu nombre.";
            nameInput.focus();
            return false;
        }
        nameError.textContent = "";
        return true;
    }

    function validateEmail() {
        if (!emailInput.value.trim()) {
            emailError.textContent = "Por favor, ingresa el correo electrónico.";
            emailInput.focus();
            return false;
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailInput.value)) {
            emailError.textContent = "Por favor, proporciona un correo electrónico válido.";
            emailInput.focus();
            return false;
        }
        emailError.textContent = "";
        return true;
    }

    function validateReason() {
        if (!reasonInput.value.trim()) {
            reasonError.textContent = "Por favor, indica el motivo del reembolso.";
            reasonInput.focus();
            return false;
        }
        reasonError.textContent = "";
        return true;
    }

    nameForm.addEventListener("submit", (e) => {
        e.preventDefault();
        if (validateName()) {
            currentStep = 1;
            showStep(currentStep);
        }
    });

    emailForm.addEventListener("submit", (e) => {
        e.preventDefault();
        if (validateEmail()) {
            currentStep = 2;
            showStep(currentStep);
        }
    });

    reasonForm.addEventListener("submit", (e) => {
        e.preventDefault();
        if (validateReason()) {
            currentStep = 3; // Ir al paso de procesamiento
            showStep(currentStep);
            // Simular procesamiento
            setTimeout(() => {
                currentStep = 4; // Ir al paso completado
                showStep(currentStep);
            }, 3000); // 3 segundos de tiempo de procesamiento
        }
    });

    emailBackBtn.addEventListener("click", () => {
        currentStep = 0;
        showStep(currentStep);
    });

    reasonBackBtn.addEventListener("click", () => {
        currentStep = 1;
        showStep(currentStep);
    });

    // Mostrar el primer paso inicialmente y asegurar que los demás estén ocultos
    showStep(currentStep);
});
