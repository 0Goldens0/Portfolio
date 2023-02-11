
  
  <?php
  
  /*
  Template Name: Контакты
  */
  
  get_header();?>
  <!-- Контакты -->
  <div class="our-contacts">
    <div class="container">
      <div class="row">
        <div class="col-9 col-lg-12">
          <div class="contacts-block">

            <?php
                $loop = CFS()->get('branches');
                foreach ($loop as $row) {
                  ?>
                  <h2><?= $row['branches_title']; ?></h2>
                  <div class="contacts-inner">
                    <div class="contacts-card">
                      <img src="<?= CFS()->get('contacts_img_write');?>" alt="пишите">
                      <h3><?= CFS()->get('contacts_write');?></h3>
                      <p><?= $row['branches_mail']; ?></p>
                    </div>
                    <div class="contacts-card">
                      <img src="<?= CFS()->get('contacts_img_call');?>" alt="пишите">
                      <h3><?= CFS()->get('contacts_call');?></h3>
                      <p><?= $row['branches_phone']; ?></p>
                    </div>
                    <div class="contacts-card">
                    <img src="<?= CFS()->get('сontacts_img_adress');?>" alt="пишите">
                      <h3><?= CFS()->get('contacts_adress');?></h3>
                      <p><?= $row['branches_adress']; ?></p>
                    </div>
                  </div>
                  <?= $row['branches_map']; ?>
                  <?php
                }
                ?>

          </div>
        </div>
        <div class="col-3 col-lg-12" id="cities">
          <h2><?= CFS()->get('dealers_title');?></h2>
          <input type="text" class="search" placeholder="Поиск">
          <ul class="list">

          <?php
                $loop = CFS()->get('dealers');
                foreach ($loop as $row) {
                  ?>
                    <li><p class="city"><?= $row['dealers_adress']; ?></p></li>
                  <?php
                }
                ?>
          </ul>
        </div>
      </div>
    </div>
  </div>
	<?php get_footer( );?> 