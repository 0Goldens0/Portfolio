  <?php  get_header();?>
  <!-- Каталог -->
	<?php 
	$settings = get_posts( [
		'numberposts' => 1,
		'category_name' => 'settings',
		'post_type' => 'post',
	] );
	foreach($settings as $post) {
		setup_postdata($post);
		?>
			<div class="popular" style="background-image: url(<?= CFS()->get('catalog_bg');?>)">
		<?php
	}
	wp_reset_postdata();
	?>
		<div class="container">
			<div class="row popular-title">
				<h2><?= single_cat_title(); ?></h2>
			</div>
			<div class="category-controll text-center">
				<button class="btn" type="button" data-filter="all">Все</button>
				<button class="btn" type="button" data-filter=".<?= get_category( 14, ARRAY_A )['slug'] ?>"><?= get_category( 14, ARRAY_A )['name'] ?></button>
				<button class="btn" type="button" data-filter=".<?= get_category( 15, ARRAY_A )['slug'] ?>"><?= get_category( 15, ARRAY_A )['name'] ?></button>
				<button class="btn" type="button" data-filter=".<?= get_category( 16, ARRAY_A )['slug'] ?>"><?= get_category( 16, ARRAY_A )['name'] ?></button>
				<button class="btn" type="button" data-sort="order:asc">По возрастанию</button>
				<button class="btn" type="button" data-sort="order:descending">По убыванию</button>
			</div>
			<div class="row popular-goods catalog">

				<?php
					if(have_posts()) {
						while(have_posts()) {
							the_post();
							$all_category = get_the_category();
							$res_name = '';
							foreach($all_category as $category) {
								if($category->term_id == 14 || $category->term_id == 15 || $category->term_id == 16) {
									$res_name = $category->slug;
								}
							}
							?>
							<div class="col-3 col-lg-6 col-sm-12 product mix <?= $res_name ?>" data-order="<?= CFS()->get('doors_price');?>">
								<?php the_post_thumbnail(); ?>
								<h3><?php the_title(); ?></h3>
								<div><?= CFS()->get('doors_price');?> &#8381;</div>
								<a href="<?php the_permalink(); ?>" class="btn"><?= CFS()->get('doors_more');?></a>
							</div>
							<?php
						}
					}
					?>
			</div>
			<?php the_posts_pagination(); ?>
		</div>
	</div>
	<?php get_footer( );?>