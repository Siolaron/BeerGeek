<?php require_once('./inc/head.php') ?>

<main>
    <h1>Inventaire</h1>
    <div class="tabs-ingredients">
        <ul class="tabs-ingredients__list">
            <li class="tabs-ingredients__item active" data-ingredient="malts">Tab 1</li>
            <li class="tabs-ingredients__item" data-ingredient="houblons">Tab 2</li>
            <li class="tabs-ingredients__item" data-ingredient="levures">Tab 3</li>
        </ul>
        <div class="tabs-ingredients__content">
            <div id="malts" class="tab-ingredients__pane active">
                <h3>Ingredient 1</h3>
            </div>
            <div id="houblons" class="tab-ingredients__pane">
                <h3>Ingredient 2</h3>
            </div>
            <div id="levures" class="tab-ingredients__pane">
                <h3>Ingredient 3</h3>
            </div>
        </div>
    </div>
</main>

<?php require_once('./inc/footer.php') ?>