
  
  <?php
  
  /*
  Template Name: Политика конфиденциальности
  */
  
  get_header();?>
  <!-- Текст политики конфиденциальности -->
  <div class="policy" style="background-image: url(<?= CFS()->get('background_policy');?>)">
    <div class="container">
      <div class="row">
        <h2><?php the_title(); ?></h2>
        <?php the_content(); ?>
      </div>
    </div>
  </div>
	<?php get_footer( );?>
