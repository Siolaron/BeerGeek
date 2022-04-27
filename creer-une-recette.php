<?php require_once('./inc/head.php') ?>

<main>
    <h1>Créer une recette</h1>
    <form method="post" class="createreceipt" id="form__createreceipt">
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
            <label for="receipt_estimated_efficiency" class="createreceipt__label">Efficacité estimée</label>
            <input type="number" name="receipt_estimated_efficiency" id="receipt_estimated_efficiency" min="1" max="100" class="createreceipt__input">
            <p class="createreceipt__suffix">%</p>
        </div>
        <input type="submit" value="Créer ma recette" class="cta">
    </form>
    <button class="cta disabled" id="add_ingredient">Ajouter un ingrédient</button>
    <ul class="tabreceipt" id="tab_receipt">
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
        <template id="template_ingredient_line">
            <li class="tabreceipt__line">
                <div class="tabreceipt__item name"></div>
                <div class="tabreceipt__item type"></div>
                <div class="tabreceipt__item quantity"></div>
                <div class="tabreceipt__item step"></div>
                <div class="tabreceipt__item time"></div>
            </li>
        </template>
    </ul>

    <div class="modal-ingredients" id="modal-ingredients">
        <div class="modal-ingredients__cross" id="modal-cross"></div>
        <div class="modal-ingredients__leftcontent">
            <h2>Ajouter un ingrédient</h2>
            <div class="tabs-ingredients">
                <ul class="tabs-ingredients__list modal-tabs">
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
                                <li class="tab-ingredients__list-item" data-name="<?= $malt['NAME'] ?>" data-type="malt" data-quantity="<?= $quantity ?>" data-suffix="kgs"><?= $malt['NAME'] . ' (' . $quantity . ' kgs)' ?></li>
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
                                <li class="tab-ingredients__list-item" data-name="<?= $hop['NAME'] ?>" data-type="houblon" data-quantity="<?= $quantity ?>" data-suffix="grs"><?= $hop['NAME'] . ' (' . $quantity . ' grs)' ?></li>
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
                                <li class="tab-ingredients__list-item" data-name="<?= $yeast['NAME'] ?>" data-type="levure" data-quantity="<?= $quantity ?>" data-suffix="ml"><?= $yeast['NAME'] . ' (' . $quantity . ' ml)' ?></li>
                            <?php endforeach; ?>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <form action="" method="post" id="form__add-ingredient" class="form__add-ingredient">
            <input type="hidden" name="add_ingredient_name" id="add_ingredient_name">
            <input type="hidden" name="add_ingredient_type" id="add_ingredient_type">
            <div class="form__add-ingredient__group">
                <label for="add_quantity" class="form__add-ingredient__label">Quantité</label>
                <div class="form__add-ingredient__inputgroup">
                    <input type="number" name="add_quantity" id="add_quantity" min="1" class="form__add-ingredient__input" required>
                    <p class="form__add-ingredient__suffix" id="add_quantity_suffix">kgs</p>
                </div>
            </div>
            <div class="form__add-ingredient__group">
                <label for="add_step" class="form__add-ingredient__label">Etape d'ajout</label>
                <select name="add_step" id="add_step" class="form__add-ingredient__input" required>
                    <option value="empatage">Empatage</option>
                    <option value="ebulition">Ebulition</option>
                    <option value="fermentation">Fermentation</option>
                </select>
            </div>
            <div class="form__add-ingredient__group">
                <label for="add_time" class="form__add-ingredient__label">Temps</label>
                <div class="form__add-ingredient__inputgroup">
                    <input type="text" name="add_time" id="add_time" class="form__add-ingredient__input" required>
                    <p class="form__add-ingredient__suffix" id="add_time_suffix">minutes</p>
                </div>
            </div>
            <input type="submit" value="Ajouter" class="cta">
        </form>
    </div>
</main>

<?php require_once('./inc/footer.php') ?>