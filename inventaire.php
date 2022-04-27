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
				<ul class="tabreceipt">
					<li class="tabreceipt__line main">
						<div class="tabreceipt__item">
							<h3>Nom du malts</h3>
						</div>
						<div class="tabreceipt__item">
							<h3>Type</h3>
						</div>
						<div class="tabreceipt__item">
							<h3>Origine</h3>
						</div>
						<div class="tabreceipt__item">
							<h3>Quantité</h3>
						</div>
					</li>
					<li class="tabreceipt__line">
						<div class="tabreceipt__item">
							<p>Agnus</p>
						</div>
						<div class="tabreceipt__item">
							<p>Czech Republic</p>
						</div>
						<div class="tabreceipt__item">
							<p>Bittering</p>
						</div>
						<div class="tabreceipt__item">
							<p>1,00 oz</p>
						</div>
					</li>
				</ul>
			</div> 
			<div id="houblons" class="tab-ingredients__pane">
				<ul class="tabreceipt">
					<li class="tabreceipt__line main">
						<div class="tabreceipt__item">
							<h3>Nom du houblon</h3>
						</div>
						<div class="tabreceipt__item">
							<h3>Origine</h3>
						</div>
						<div class="tabreceipt__item">
							<h3>Type</h3>
						</div>
						<div class="tabreceipt__item">
							<h3>Quantité</h3>
						</div>
					</li>
					<li class="tabreceipt__line">
						<div class="tabreceipt__item">
							<p>Agnus</p>
						</div>
						<div class="tabreceipt__item">
							<p>Czech Republic</p>
						</div>
						<div class="tabreceipt__item">
							<p>Bittering</p>
						</div>
						<div class="tabreceipt__item">
							<p>1,00 oz</p>
						</div>
					</li>
				</ul>
			</div>
			<div id="levures" class="tab-ingredients__pane">
			<ul class="tabreceipt">
					<li class="tabreceipt__line main">
						<div class="tabreceipt__item">
							<h3>Nom de la levure</h3>
						</div>
						<div class="tabreceipt__item">
							<h3>Nom du laboratoire</h3>
						</div>
						<div class="tabreceipt__item">
							<h3>Type de levure</h3>
						</div>
						<div class="tabreceipt__item">
							<h3>Quantité</h3>
						</div>
					</li>
					<li class="tabreceipt__line">
						<div class="tabreceipt__item">
							<p>Agnus</p>
						</div>
						<div class="tabreceipt__item">
							<p>Czech Republic</p>
						</div>
						<div class="tabreceipt__item">
							<p>Bittering</p>
						</div>
						<div class="tabreceipt__item">
							<p>1,00 oz</p>
						</div>
					</li>
				</ul>
			</div>
		</div>
    </div>
</main>

<?php require_once('./inc/footer.php') ?>