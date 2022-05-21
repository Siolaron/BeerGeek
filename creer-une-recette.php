<?php
$is_home = false;
require_once('./inc/head.php') ?>

<main>
    <h1>La fabrique à bière</h1>
    <form method="post" class="initreceipt" id="form__initreceipt">
        <div class="initreceipt__group">
            <label for="receipt_name" class="initreceipt__label">Nom</label>
            <input type="text" name="receipt_name" id="receipt_name" class="initreceipt__input">
        </div>
        <div class="initreceipt__group">
            <label for="receipt_volume" class="initreceipt__label">Volume</label>
            <input type="number" name="receipt_volume" id="receipt_volume" min="1" class="initreceipt__input">
            <p class="initreceipt__suffix">litres</p>
        </div>
        <div class="initreceipt__group">
            <label for="receipt_boiling" class="initreceipt__label">Durée ébulition</label>
            <input type="number" name="receipt_boiling" id="receipt_boiling" min="1" class="initreceipt__input">
            <p class="initreceipt__suffix">minutes</p>
        </div>
        <div class="initreceipt__group">
            <label for="receipt_estimated_efficiency" class="initreceipt__label">Efficacité estimée</label>
            <input type="number" name="receipt_estimated_efficiency" id="receipt_estimated_efficiency" min="1" max="100" class="initreceipt__input">
            <p class="initreceipt__suffix">%</p>
        </div>
        <button type="submit" class="cta">Créer ma recette</button>
    </form>
    <button class="cta disabled" id="add_ingredient">Ajouter un ingrédient</button>
    <div class="l-receipttabs">
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
                    <div class="tabreceipt__item name">
                        <p class="tabreceipt__content"></p>
                    </div>
                    <div class="tabreceipt__item type">
                        <p class="tabreceipt__content"></p>
                    </div>
                    <div class="tabreceipt__item quantity">
                        <p class="tabreceipt__content"></p>
                        <p class="tabreceipt__suffix"></p>
                    </div>
                    <div class="tabreceipt__item step">
                        <p class="tabreceipt__content"></p>
                    </div>
                    <div class="tabreceipt__item time">
                        <p class="tabreceipt__content"></p>
                        <p class="tabreceipt__suffix">minutes</p>
                    </div>
                </li>
            </template>
        </ul>
        <ul class="tabcarac">
            <li class="tabcarac__item">
                <p class="tabcarac__title">Total Malts :</p>
                <p class="tabcarac__value">
                    <span class="tabcarac__content"  id="mass-malt">0</span>
                    <span class="tabcarac__suffix">kgs</span>
                </p>
            </li>
            <li class="tabcarac__item">
                <p class="tabcarac__title">Total Houblons :</p>
                <p class="tabcarac__value">
                    <span class="tabcarac__content" id="mass-hops">0</span>
                    <span class="tabcarac__suffix">grs</span>
                </p>
            </li>
            <li class="tabcarac__item">
                <p class="tabcarac__title">Densité originelle (OG):</p>
                <p class="tabcarac__value">
                    <span class="tabcarac__content" id="originel-density">0</span>
                </p>
            </li>
            <li class="tabcarac__item">
                <p class="tabcarac__title">Densité finale (FG):</p>
                <p class="tabcarac__value">
                    <span class="tabcarac__content" id="final-density">0</span>
                </p>
            </li>
            <li class="tabcarac__item">
                <p class="tabcarac__title">Amertume (IBU):</p>
                <p class="tabcarac__value">
                    <span class="tabcarac__content" id="bitterness">0</span>
                </p>
            </li>
            <li class="tabcarac__item">
                <p class="tabcarac__title">Couleur (EBC):</p>
                <p class="tabcarac__value">
                    <span class="tabcarac__content" id="color">0</span>
                </p>
            </li>
            <li class="tabcarac__item">
                <p class="tabcarac__title">Alcool (ABV)</p>
                <p class="tabcarac__value">
                    <span class="tabcarac__content" id="rate-alcohol">0</span>
                    <span class="tabcarac__suffix">%</span>
                </p>
            </li>
        </ul>
    </div>
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
                                $potential = $malt['YIELD'];
                                $ebc = str_replace(' EBC','',$malt['DISPLAY_COLOR']);
                            ?>
                                <li class="tab-ingredients__list-item" data-name="<?= $malt['NAME'] ?>" data-type="malt" data-quantity="<?= $quantity ?>" data-suffix="kgs" data-potential="<?= $potential ?>" data-ebc="<?= $ebc ?>"><?= $malt['NAME'] . ' (' . $quantity . ' kgs)' ?></li>
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
                                $alpha =  $hop['ALPHA'];
                            ?>
                                <li class="tab-ingredients__list-item" data-name="<?= $hop['NAME'] ?>" data-type="houblon" data-quantity="<?= $quantity ?>" data-suffix="grs" data-alpha="<?= $alpha ?>"><?= $hop['NAME'] . ' (' . $quantity . ' grs)' ?></li>
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
                                $attenuation = $yeast['ATTENUATION'];
                            ?>
                                <li class="tab-ingredients__list-item" data-name="<?= $yeast['NAME'] ?>" data-type="levure" data-quantity="<?= $quantity ?>" data-suffix="ml" data-attenuation="<?= $attenuation ?>"><?= $yeast['NAME'] . ' (' . $quantity . ' ml)' ?></li>
                            <?php endforeach; ?>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <form action="" method="post" id="form__add-ingredient" class="form__add-ingredient">
            <input type="hidden" name="add_ingredient_name" id="add_ingredient_name">
            <input type="hidden" name="add_ingredient_type" id="add_ingredient_type">
            <input type="hidden" name="add_ingredient_potential" id="add_ingredient_potential">
            <input type="hidden" name="add_ingredient_ebc" id="add_ingredient_ebc">
            <input type="hidden" name="add_ingredient_alpha" id="add_ingredient_alpha">
            <input type="hidden" name="add_ingredient_attenuation" id="add_ingredient_attenuation">
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