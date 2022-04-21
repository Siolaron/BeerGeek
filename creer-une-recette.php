<?php require_once('./inc/head.php') ?>

<main>
    <h1>Créer une recette</h1>
    <form action="" class="createreceipt">
        <div class="createreceipt__group">
            <label for="receipt_name" class="createreceipt__label">Nom</label>
            <input type="text" name="receipt_name" id="receipt_name" class="createreceipt__input">
        </div>
        <div class="createreceipt__group">
            <label for="receipt_volume" class="createreceipt__label">Volume</label>
            <input type="number" name="receipt_volume" id="receipt_volume" min="1" class="createreceipt__input">
            <p class="createreceipt__suffix">litres</p>
        </div>
        <div class="createreceipt__group">
            <label for="receipt_boiling" class="createreceipt__label">Durée ébulition</label>
            <input type="number" name="receipt_boiling" id="receipt_boiling" min="1" class="createreceipt__input">
            <p class="createreceipt__suffix">minutes</p>
        </div>
        <div class="createreceipt__group">
            <label for="receipt_estimated-efficiency" class="createreceipt__label">Efficacité estimée</label>
            <input type="number" name="receipt_estimated-efficiency" id="receipt_estimated-efficiency" min="1" max="100" class="createreceipt__input">
            <p class="createreceipt__suffix">%</p>
        </div>
    </form>
    <ul class="tabreceipt">
        <li class="tabreceipt__line main">
            <div class="tabreceipt__item">
                <h3>Nom</h3>
            </div>
            <div class="tabreceipt__item">
                <h3>Type</h3>
            </div>
            <div class="tabreceipt__item">
                <h3>Quantité</h3>
            </div>
            <div class="tabreceipt__item">
                <h3>Etape</h3>
            </div>
            <div class="tabreceipt__item">
                <h3>Temps</h3>
            </div>
        </li>
        <li class="tabreceipt__line">
            <div class="tabreceipt__item">
                <p>Caramunich</p>
            </div>
            <div class="tabreceipt__item">
                <p>Malt</p>
            </div>
            <div class="tabreceipt__item">
                <p>12 kgs</p>
            </div>
            <div class="tabreceipt__item">
                <p>Empatage</p>
            </div>
            <div class="tabreceipt__item">
                <p>-----</p>
            </div>
        </li>
    </ul>
</main>

<?php require_once('./inc/footer.php') ?>