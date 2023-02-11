
  
  <?php
  
  /*
  Template Name: О компании
  */
  
  get_header();?>
  <!-- О компании -->
  <div class="about-company" style="background-image: url(<?= CFS()->get('about_bg');?>)">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <img src="<?= CFS()->get('about_img');?>" alt="О компании">
          <h2><?php the_title(); ?></h2>
					<?php the_content(); ?>
				</div>
      </div>
    </div>
  </div>
	<?php get_header( 'advantages' ); ?>
  <!-- Технический паспорт -->
  <div class="pasport" style="background-image: url(<?= CFS()->get('about_pasport_bg');?>)">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h2><?= CFS()->get('about_pasport_title');?></h2>
          <p><?= CFS()->get('about_pasport_description');?></p>
          <a href="<?= CFS()->get('about_pasport_pdf');?>" class="btn" target="_blank"><?= CFS()->get('about_pasport_first_btn');?></a>
          <a href="<?= CFS()->get('about_pasport_doc');?>" class="btn" download=""><?= CFS()->get('about_pasport_second_btn');?></a>
        </div>
      </div>
    </div>
  </div>
	<?php get_footer( );?>
