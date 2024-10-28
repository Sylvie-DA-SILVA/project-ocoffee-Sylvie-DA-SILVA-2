document.addEventListener("DOMContentLoaded", () => {
    const seeAllButton = document.getElementById("see-all-products-button");
    const articlesList = document.getElementById("articles-list");

    seeAllButton.addEventListener("click", async () => {
        try{
            const response = await fetch("/api/catalog/remaining-products");
            const remainingProducts = await response.json();

            // supprimer les produits déjà affichés pour éviter la duplication
            articlesList.innerHTML = '';

            // Ajouter les produits restants au DOM
            remainingProducts.forEach(article => {
                const articleElement = document.createElement('article');
                articleElement.innerHTML = `
                    <img src="../images/coffees/${article.reference}.png" alt="${article.name}">
                    <div>
                        <h2>${article.name}</h2>
                        <p>${article.origin_country}</p>
                        <p>${article.price_per_kg} €/kg</p>
                        <a class="button-outline" href="/article/${article.id}">Voir le détail</a>
                    </div>`;
                articlesList.appendChild(articleElement);
            });

            // Masquer le bouton une fois tous les produits chargés
            seeAllButton.style.display = 'none';
        } catch (error) {
            console.error("Erreur lors du chargement des produits restants :", error);
        }
    });
});