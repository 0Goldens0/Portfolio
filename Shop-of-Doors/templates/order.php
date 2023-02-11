
  
  <?php
  
  /*
  Template Name: На заказ
  */
  
  get_header();?>
  <!-- На заказ -->
  <div class="to-order">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <!-- На заказ -->
          <?php
        $posts = get_posts( [
          'numberposts' => -1,
          'category_name' => 'order',
          'orderby' => 'date',
          'oreder' => 'DESC',
          'post_type' => 'post',
          'suppress_filter' => true
        ] );
        foreach($posts as $post) {
          setup_postdata($post);
          ?>

            <div class="to-order-card">
              <h2><?php the_title(); ?></h2>
              <div class="to-order-card-inner">
                <?php the_post_thumbnail( '' ); ?>
                <div class="to-order-text">
                <?php the_content(); ?>
                <p><?= CFS()->get('order_add'); ?></p>
                </div>
              </div>
            </div>
          <?php
        }
        wp_reset_postdata();
        ?>
          <!-- Форма -->
          <div class="to-order-form">
            <h3><?= CFS()->get('order_form_title');  ?></h3>
            <?= do_shortcode(CFS()->get('order_form_shortcode')); ?>
          </div>
        </div>
      </div>
    </div>
  </div>
  <?php get_footer( );?>
