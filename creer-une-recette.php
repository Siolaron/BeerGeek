<?php require_once('./inc/head.php') ?>

<main>
    <h1>Créer une recette</h1>
    <form action="" class="createreceipt">
        <label for="receipt_name" class="createreceipt__group">
            Nom :
            <input type="text" name="receipt_name" id="receipt_name" class="createreceipt__input">
        </label>
        <label for="receipt_volume" class="createreceipt__group">
            Volume :
            <input type="number" name="receipt_volume" id="receipt_volume" class="createreceipt__input">
            litres
        </label>
        <label for="receipt_boiling" class="createreceipt__group">
            Durée ébulition
            <input type="number" name="receipt_boiling" id="receipt_boiling" class="createreceipt__input">
            minutes
        </label>
        <label for="receipt_estimated-efficiency" class="createreceipt__group">
            Efficacité estimée
            <input type="number" name="receipt_estimated-efficiency" id="receipt_estimated-efficiency" class="createreceipt__input">
            %
        </label>
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