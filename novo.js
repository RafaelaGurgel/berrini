document.addEventListener("DOMContentLoaded", function () {
    const backToTopButton = document.getElementById("backToTop");

    window.onscroll = function () {
        if (document.documentElement.scrollTop > 200) {
            backToTopButton.style.display = "block";
        } else {
            backToTopButton.style.display = "none";
        }
    };

    backToTopButton.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});

// Form Submission
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const formData = {
        firstName: document.getElementById('firstName').value,
        lastName: document.getElementById('lastName').value,
        email: document.getElementById('email').value
    };

    // Aqui você pode adicionar a lógica de envio
    console.log('Dados do formulário:', formData);
    
    // Exemplo de feedback visual
    alert('Obrigado por seu contato, ' + formData.firstName + '! Entraremos em contato em breve.');
    
    // Resetar formulário
    this.reset();
});