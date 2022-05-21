<?php require_once('./inc/head.php') ?>

<main>
    <h1>Inventaire</h1>
    <div class="tabs-ingredients">
		<ul class="tabs-ingredients__list">
			<li class="tabs-ingredients__item active" data-ingredient="malts">Malts</li>
			<li class="tabs-ingredients__item" data-ingredient="hops">Houblons</li>
			<li class="tabs-ingredients__item" data-ingredient="yeasts">Levures</li>
		</ul>
		<div class="tabs-ingredients__content">
			<div id="malts" class="tab-ingredients__pane active"> 
				<ul class="tabreceipt">
					<li class="tabreceipt__line main">
						<div class="tabreceipt__item alpha" data-info="NAME">
							<h3>Nom du malts</h3>
						</div>
						<div class="tabreceipt__item alpha" data-info="TYPE">
							<h3>Type</h3>
						</div>
						<div class="tabreceipt__item alpha" data-info="ORIGIN">
							<h3>Origine</h3>
						</div>
						<div class="tabreceipt__item alpha" data-info="QUANTITY">
							<h3>Quantité</h3>
						</div>
					</li>
					<li class="tabreceipt__line">
					</li>
				</ul>
			</div> 
			<div id="hops" class="tab-ingredients__pane">
				<ul class="tabreceipt">
					<li class="tabreceipt__line main">
						<div class="tabreceipt__item alpha" data-info="NAME">
							<h3>Nom du houblon</h3>
						</div>
						<div class="tabreceipt__item alpha" data-info="TYPE">
							<h3>Type</h3>
						</div>
						<div class="tabreceipt__item alpha" data-info="ORIGIN">
							<h3>Origine</h3>
						</div>
						<div class="tabreceipt__item alpha" data-info="QUANTITY">
							<h3>Quantité</h3>
						</div>
					</li>
					<li class="tabreceipt__line">
					</li>
				</ul>
			</div>
			<div id="yeasts" class="tab-ingredients__pane">
			<ul class="tabreceipt">
					<li class="tabreceipt__line main">
						<div class="tabreceipt__item alpha" data-info="NAME">
							<h3>Nom de la levure</h3>
						</div>
						<div class="tabreceipt__item alpha" data-info="TYPE">
							<h3>Type de levure</h3>
						</div>
						<div class="tabreceipt__item alpha" data-info="LABORATORY">
							<h3>Nom du laboratoire</h3>
						</div>
						<div class="tabreceipt__item alpha" data-info="QUANTITY">
							<h3>Quantité</h3>
						</div>
					</li>
					<li class="tabreceipt__line">
					</li>
				</ul>
			</div>
		</div>
    </div>
</main>

<?php require_once('./inc/footer.php') ?>