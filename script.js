// =============================================
// 1. DÉFILEMENT EN DOUCEUR POUR LE MENU
// =============================================

document.addEventListener('DOMContentLoaded', function() {

    // On sélectionne tous les liens qui commencent par "#" (ancre interne)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            // On empêche le saut brusque par défaut
            e.preventDefault();

            // On récupère l'ID de la section cible (ex: #services)
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                // On fait défiler la page jusqu'à la section avec un effet "smooth"
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Petit message dans la console (invisible pour les visiteurs, mais pro)
    console.log("🚀 Site Mahmoud RAFIK - Prêt à optimiser vos processus !");

});