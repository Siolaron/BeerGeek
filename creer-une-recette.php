<?php require_once('./inc/head.php') ?>

<main>
    <h1>Créer une recette</h1>
    <form method="post" class="createreceipt" id="form__createreceipt">
        <div class="createreceipt__group">
            <label for="receipt_name" class="createreceipt__label">Nom</label>
            <input type="text" name="receipt_name" id="receipt_name" class="createreceipt__input" value="Test">
        </div>
        <div class="createreceipt__group">
            <label for="receipt_volume" class="createreceipt__label">Volume</label>
            <input type="number" name="receipt_volume" id="receipt_volume" min="1" class="createreceipt__input" value="1">
            <p class="createreceipt__suffix">litres</p>
        </div>
        <div class="createreceipt__group">
            <label for="receipt_boiling" class="createreceipt__label">Durée ébulition</label>
            <input type="number" name="receipt_boiling" id="receipt_boiling" min="1" class="createreceipt__input" value="1">
            <p class="createreceipt__suffix">minutes</p>
        </div>
        <div class="createreceipt__group">
            <label for="receipt_estimated_efficiency" class="createreceipt__label">Efficacité estimée</label>
            <input type="number" name="receipt_estimated_efficiency" id="receipt_estimated_efficiency" min="1" max="100" class="createreceipt__input" value="1">
            <p class="createreceipt__suffix">%</p>
        </div>
        <input type="submit" value="Créer ma recette" class="cta">
    </form>
    <button class="cta disabled" id="add_ingredient">Ajouter un ingrédient</button>
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
        <!-- <li class="tabreceipt__line">
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
        </li> -->
    </ul>

    <div class="modal-ingredients" id="modal-ingredients">
        <div class="modal-ingredients__leftcontent">
            <h2>Ajouter un ingrédient</h2>
            <div class="tabs-ingredients">
                <ul class="tabs-ingredients__list">
                    <li class="tabs-ingredients__item active" data-ingredient="malts">Malt</li>
                    <li class="tabs-ingredients__item" data-ingredient="houblons">Houblon</li>
                    <li class="tabs-ingredients__item" data-ingredient="levures">Levure</li>
                </ul>
                <div class="tabs-ingredients__content">
                    <div id="malts" class="tab-ingredients__pane active  modal-ingredients__pane">
                        <ul class="modal-ingredients__list">
                            <?php
                            $json_malts = file_get_contents('./assets/datas/malts.json');
                            $malts = json_decode($json_malts, true);
                            foreach ($malts['data'] as $malt) :
                                $subject =  $malt['INVENTORY'];
                                $pattern = '/[^0-9]/';
                                $quantity = str_replace(' kg', '', $malt['INVENTORY']);
                            ?>
                                <li class="tab-ingredients__list-item" data-quantity="<?= $quantity ?>"><?= $malt['NAME'] . ' (' . $quantity . ' kgs)' ?></li>
                            <?php endforeach; ?>
                        </ul>
                    </div>
                    <div id="houblons" class="tab-ingredients__pane modal-ingredients__pane">
                        <ul class="tab-ingredients__list">
                            <?php
                            $json_hops = file_get_contents('./assets/datas/hops.json');
                            $hops = json_decode($json_hops, true);
                            foreach ($hops['data'] as $hop) :
                                $subject =  $hop['INVENTORY'];
                                $pattern = '/[^0-9]/';
                                $quantity = str_replace(' g', '', $hop['INVENTORY']);
                            ?>
                                <li class="tab-ingredients__list-item" data-quantity="<?= $quantity ?>"><?= $hop['NAME'] . ' (' . $quantity . ' grs)' ?></li>
                            <?php endforeach; ?>
                        </ul>
                    </div>
                    <div id="levures" class="tab-ingredients__pane  modal-ingredients__pane">
                        <ul class="tab-ingredients__list">
                            <?php
                            $json_yeasts = file_get_contents('./assets/datas/yeasts.json');
                            $yeasts = json_decode($json_yeasts, true);
                            foreach ($yeasts['data'] as $yeast) :
                                $subject =  $yeast['INVENTORY'];
                                $pattern = '/[^0-9]/';
                                $quantity = str_replace(' pkg', '', $yeast['INVENTORY']);
                            ?>
                                <li class="tab-ingredients__list-item" data-quantity="<?= $quantity ?>"><?= $yeast['NAME'] . ' (' . $quantity . ' ml)' ?></li>
                            <?php endforeach; ?>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="modal-ingredients__rightcontent">
            <form action="" method="post" id="form__add-ingredient" class="form__add-ingredient">
                <div class="form__add-ingredient__group">
                    <label for="add_quantity">Quantité</label>
                    <input type="number" name="add_quantity" id="add_quantity" min="1">
                </div>
                <div class="form__add-ingredient__group">
                    <label for="add_step">Etape d'ajout</label>
                    <select name="add_step" id="add_step">
                        <option value="empatage">Empatage</option>
                        <option value="ebulition">Ebulition</option>
                        <option value="fermentation">Fermentation</option>
                    </select>
                </div>
                <div class="form__add-ingredient__group">
                    <label for="add_time">Temps</label>
                    <input type="text" name="add_time" id="add_time">
                </div>
            </form>
        </div>

    </div>
</main>

<?php require_once('./inc/footer.php') ?>