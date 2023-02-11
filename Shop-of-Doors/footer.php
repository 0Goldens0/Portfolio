    <!-- Футер -->
    <div class="footer">
      <div class="container">
        <div class="row">
          <div class="col-12 text-center">
          <?php 
            wp_nav_menu([
              'theme_location' => 'bottom',
              'container' => '',
              'items_wrap' => '%3$s'
            ]);
          ?>
          <?php 
            $settings = get_posts( [
              'numberposts' => 1,
              'category_name' => 'settings',
              'post_type' => 'post',
            ] );
            foreach($settings as $post) {
              setup_postdata($post);
              ?>
                <span class="accent-color">&copy; </span> <?= CFS()->get('footer_text');?>, <?= date('Y')?>
              <?php
            }
            wp_reset_postdata();
            ?>
          </div>
        </div>
      </div>
    </div>
    <?php wp_footer(); ?>
  </body>
</html>