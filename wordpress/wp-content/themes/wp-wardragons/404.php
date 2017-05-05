<?php get_header(); ?>
  <div class="c-hero" style="background-image: url(<?php echo get_template_directory_uri(); ?>/img/bg-hero-blog.jpg)">
    <div class="o-container">
      <div class="o-layout">
        <div class="o-layout__item o-layout__item--10@sm o-layout__item--offset-1@sm">
          <div class="c-hero__content">

            <div class="c-hero__title">
              <h1 class="c-hero__heading u-text-gradient">
                <?php _e( 'Page not found', 'wpeasy' ); ?>
              </h1>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div><!-- /.c-hero -->


  <div class="o-content-block o-content-block--wings o-content-block--top-offset-large">
    <div class="o-content-block__content">
      <div class="o-container o-content-block__container">
        <div class="o-layout">
          <div class="c-blog-roll">
            <div class="o-layout__item o-layout__item--offset-1@sm o-layout__item--10@sm">

              <section class="c-mod">
                <div class="c-mod__body">
                  <article class="c-post">
                    <h1 class="ctitle"><?php _e( 'Page not found', 'wpeasy' ); ?></h1>
                    <h2><a href="<?php echo home_url(); ?>"><?php _e( 'Return home?', 'wpeasy' ); ?></a></h2>
                  </article><!-- /.c-post -->
                </div>
              </section>

            </div>
            <div class="o-layout__item o-layout__item--3@sm">
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>

<?php get_footer(); ?>
