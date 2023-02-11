<?php get_header();?>
    <div class="about" id="about" style="background: url(<?= CFS()->get('background_white') ?>) center 100% repeat-x, url(<?= CFS()->get('background_black') ?>) center 100% repeat-x, #1d1d1d;">
      <div class="container">
        <div class="about__inner">
          <?php
          $loop = CFS()->get('card');
          foreach ($loop as $row) {
            ?>
              <div class="about__item">
                <div class="about__year"><?= $row['card_year']?></div>
                <div class="about__text"><?= $row['card_text']?></div>
              </div>
            <?php 
          }
          ?>
          </div>
        </div>
      </div>
    </div>
    <div class="team" id="team">
      <div class="container">
        <div class="block__head">
          <h2 class="block__title"><?= CFS()->get('team_title') ?></h2>
          <p class="block__text"><?= CFS()->get('team_description') ?></p>
        </div>
        <div class="team__inner">


          <div class="swiper">
            <div class="swiper-wrapper">
                <?php
                  $loop = CFS()->get('team_card');
                  foreach ($loop as $row) {
                ?>
                <div class="swiper-slide">
                  <div class="team__item">
                    <img class="team__item-img" src="<?= $row['team_img']?>" alt="" />
                    <h3 class="team__item-title"><?= $row['team_name']?></h3>
                    <p class="team__item-text"><?= $row['team_post']?></p>
                    <div class="team__icon-box">
                      <?php
                        if(!empty($row['team_twitter']['url'])) {
                          ?>
                          <a href="<?= $row['team_twitter']['url']?>" target="<?= $row['team_twitter']['target'] ?>"><i class="icon-twitter"></i></a>
                          <?php
                        }
                        if(!empty($row['team_inst']['url'])) {
                          ?>
                          <a href="<?= $row['team_inst']['url']?>" target="<?= $row['team_inst']['target'] ?>"><i class="icon-instagram"></i></a>
                          <?php
                        }
                        if(!empty($row['team_vk']['url'])) {
                          ?>
                          <a href="<?= $row['team_vk']['url']?>" target="<?= $row['team_vk']['target'] ?>"><i class="icon-vkontakte"></i></a>
                          <?php
                        }
                        if(!empty($row['team_facebook']['url'])) {
                          ?>
                          <a href="<?= $row['team_facebook']['url']?>" target="<?= $row['team_facebook']['target'] ?>"><i class="icon-facebook"></i></a>
                          <?php
                        }
                      ?>
                    </div>
                  </div>
                </div>
                <?php 
                }
                ?>
            </div>
            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="provide" id="provide">
      <div class="container">
        <div class="block__head inverse">
          <h2 class="block__title"><?= CFS()->get('provide_title') ?></h2>
          <p class="block__text">
          <?= CFS()->get('provide_description') ?>
          </p>
        </div>
        <div class="provide__inner">
        <?php
          $loop = CFS()->get('provide_card');
          foreach ($loop as $row) {
            ?>
            <div class="provide__item">
              <img class="provide__item-img" src="<?= $row['provide_img']?>" alt="">
              <h3 class="provide__item-title"><?= $row['provide_card-title']?></h3>
              <p class="provide__item-text">
              <?= $row['provide_card-description']?>
              </p>
            </div>

            <?php 
          }
          ?>
        </div>
      </div>
    </div>
    <div class="contact" id="contact">
      <div class="container">
        <div class="block__head">
          <h2 class="block__title"><?= CFS()->get('contact_title')?></h2>
          <p class="block__text"><?= CFS()->get('contact_description')?></p>
        </div>
        <div class="contact__inner">
          <div class="contact__icon-box">
            <?php
              $loop = CFS()->get('contact_card');
              foreach ($loop as $row) {
                ?>

                  <div class="contact__item">
                    <img class="contact__img" src="<?= $row['contact_card_img']?>" alt="">
                    <div class="contact__text">
                      <a href="<?= $row['contact_card_description']['url']?>" target="<?= $row['contact_card_description']['target'] ?>"><?= $row['card_link-text']?></a>
                    </div>
                  </div>
                <?php 
              }
              ?>
          </div>
          <?php the_content() ?>
        </div>
      </div>
    </div>
<?php get_footer( );?>