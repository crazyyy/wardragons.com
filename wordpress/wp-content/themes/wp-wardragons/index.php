<?php get_header(); ?>

  <div class="c-hero" style="background-image: url(<?php echo get_template_directory_uri(); ?>/img/bg-hero-blog.jpg)">
    <div class="o-container">
      <div class="o-layout">
        <div class="o-layout__item o-layout__item--10@sm o-layout__item--offset-1@sm">
          <div class="c-hero__content">
            <div class="c-hero__title">
              <h1 class="c-hero__heading u-text-gradient">Новости</h1>
			  </div>
            <p class="c-hero__description">
              <?php echo category_description( $category_id=11 ); ?>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- /.c-hero -->
  <div class="o-content-block o-content-block--wings o-content-block--top-offset-large">
    <div class="o-content-block__content">
      <div class="o-container o-content-block__container">
        <div class="o-layout">
          <div class="c-blog-roll">
            <div class="o-layout__item o-layout__item--offset-1@sm o-layout__item--10@sm">
              <section class="c-mod">
                <header class="c-mod-heading">
                  <span class="c-mod-heading__content">
                    <span class="c-mod-heading__flag"></span>
                      <div class="o-media o-media--apply o-media--flip">
                        <div class="o-media__content">
                          <h3 class="c-mod-heading__title u-text-gradient">Новости</h3>
                        </div>
                      </div>
                  </span>
                </header>
                <div class="c-mod__body">
                  <div class="c-blog-roll__content">
                    <ul class="o-list-unstyled c-blog-roll__excerpts">

                      <?php get_template_part('loop'); ?>

                    </ul>
                  </div><!-- /.c-blog-roll__content -->
                </div>
              </section>
            </div>
            <div class="o-layout__item o-layout__item--3@sm"></div>
          </div>
        </div>

        <?php get_template_part('pagination'); ?>

      </div>
    </div>
  </div>
  <div class="o-content-block o-content-block--red">
    <div class="o-content-block__content">
      <div class="o-container o-content-block__container">
        <div class="c-cta">
          <span class="c-cta__text u-text-shadow--red"><strong>Получите бесплатную мобильную игру,</strong></span>
          <span class="c-cta__text u-text-shadow--red">в которую играют все</span>
        </div>
      </div>
    </div>
  </div>

<?php get_footer(); ?>

