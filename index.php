<?php
$is_home = true;
require_once('./inc/head.php') ?>

<main>
    <section class="prelude">
        <h2 class="prelude__title prelude__title--first ff--nuxt">Make beer</h2>
        <img src="./assets//img/beer.png" alt="beer illustration" class="prelude__beer">
        <div class="prelude__right-container">
            <a href="../fabrique-a-biere.php" class="prelude__fabrique">
                <div class="prelude__fabrique-square">
                    <img src="./assets/img/fabrique-biere.png" alt="image fabrique à bière" class="prelude__fabrique-img">
                </div>
                <h3 class="prelude__subtitle ff--nuxt">La fabrique </br>à bière</h3>
                <div class="prelude__cta">
                    Voir plus
                    <img src="./assets/img/icon-arrow.png" alt="icone flèche" class="prelude__arrow">
                    <span class="prelude__cta-square"></span>
                </div>
            </a>
            <h2 class="prelude__title ff--nuxt">great again</h2>
        </div>
    </section>
    <div class="inventaire">
        <div class="informations">
            <ul class="informations__inner">
                <li class="informations__item">
                    <div class="informations__icon-container">
                        <img src="./assets/img/icon-seed.png" alt="icone de graines" class="informations__icon">
                    </div>
                    <div class="informations__content">
                        <h3 class="informations__title">Un inventaire complet</h3>
                        <p class="informations__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, odit!</p>
                    </div>
                </li>
                <li class="informations__item">
                    <div class="informations__icon-container">
                        <img src="./assets/img/icon-lab.png" alt="icone de fiole" class="informations__icon">
                    </div>
                    <div class="informations__content">
                        <h3 class="informations__title">Testes les possibilités</h3>
                        <p class="informations__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta?</p>
                    </div>
                </li>
                <li class="informations__item">
                    <div class="informations__icon-container">
                        <img src="./assets/img/icon-dna.png" alt="icone d'adn" class="informations__icon">
                    </div>
                    <div class="informations__content">
                        <h3 class="informations__title">Obtiens les caractéristiques</h3>
                        <p class="informations__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, voluptate illum. Repudiandae.</p>
                    </div>
                </li>
            </ul>
        </div>
        <h2 class="inventaire__title ff--nuxt">Inventaire</h2>
        <div class="tabs-ingredients">
            <ul class="tabs-ingredients__list">
                <li class="tabs-ingredients__item highlighted active" data-ingredient="malts">Malts</li>
                <li class="tabs-ingredients__item highlighted" data-ingredient="hops">Houblons</li>
                <li class="tabs-ingredients__item highlighted" data-ingredient="yeasts">Levures</li>
            </ul>
            <div class="tabs-ingredients__content">
                <div id="malts" class="tab-ingredients__pane active">
                    <ul class="tabreceipt">
                        <li class="tabreceipt__line main">
                            <div class="tabreceipt__item alpha" data-info="NAME">
                                <h3>Nom</h3>
                                <svg width="13" height="10" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4 0L7.4641 4.5H0.535898L4 0Z" fill="white"/>
                                </svg>
                            </div>
                            <div class="tabreceipt__item alpha" data-info="TYPE">
                                <h3>Type</h3>
                                <svg width="13" height="10" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4 0L7.4641 4.5H0.535898L4 0Z" fill="white"/>
                                </svg>
                            </div>
                            <div class="tabreceipt__item alpha" data-info="ORIGIN">
                                <h3>Origine</h3>
                                <svg width="13" height="10" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4 0L7.4641 4.5H0.535898L4 0Z" fill="white"/>
                                </svg>
                            </div>
                            <div class="tabreceipt__item alpha" data-info="QUANTITY">
                                <h3>Quantité</h3>
                                <svg width="13" height="10" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4 0L7.4641 4.5H0.535898L4 0Z" fill="white"/>
                                </svg>
                            </div>
                        </li>
                    </ul>
                </div>
                <div id="hops" class="tab-ingredients__pane">
                    <ul class="tabreceipt">
                        <li class="tabreceipt__line main">
                            <div class="tabreceipt__item alpha" data-info="NAME">
                                <h3>Nom</h3>
                                <svg width="13" height="10" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4 0L7.4641 4.5H0.535898L4 0Z" fill="white"/>
                                </svg>
                            </div>
                            <div class="tabreceipt__item alpha" data-info="TYPE">
                                <h3>Type</h3>
                                <svg width="13" height="10" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4 0L7.4641 4.5H0.535898L4 0Z" fill="white"/>
                                </svg>
                            </div>
                            <div class="tabreceipt__item alpha" data-info="ORIGIN">
                                <h3>Origine</h3>
                                <svg width="13" height="10" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4 0L7.4641 4.5H0.535898L4 0Z" fill="white"/>
                                </svg>
                            </div>
                            <div class="tabreceipt__item alpha" data-info="QUANTITY">
                                <h3>Quantité</h3>
                                <svg width="13" height="10" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4 0L7.4641 4.5H0.535898L4 0Z" fill="white"/>
                                </svg>
                            </div>
                        </li>
                    </ul>
                </div>
                <div id="yeasts" class="tab-ingredients__pane">
                    <ul class="tabreceipt">
                        <li class="tabreceipt__line main">
                            <div class="tabreceipt__item alpha" data-info="NAME">
                                <h3>Nom</h3>
                                <svg width="13" height="10" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4 0L7.4641 4.5H0.535898L4 0Z" fill="white"/>
                                </svg>
                            </div>
                            <div class="tabreceipt__item alpha" data-info="TYPE">
                                <h3>Type</h3>
                                <svg width="13" height="10" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4 0L7.4641 4.5H0.535898L4 0Z" fill="white"/>
                                </svg>
                            </div>
                            <div class="tabreceipt__item alpha" data-info="LABORATORY">
                                <h3>Laboratoire</h3>
                                <svg width="13" height="10" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4 0L7.4641 4.5H0.535898L4 0Z" fill="white"/>
                                </svg>
                            </div>
                            <div class="tabreceipt__item alpha" data-info="QUANTITY">
                                <h3>Quantité</h3>
                                <svg width="13" height="10" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4 0L7.4641 4.5H0.535898L4 0Z" fill="white"/>
                                </svg>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</main>

<?php require_once('./inc/footer.php') ?>