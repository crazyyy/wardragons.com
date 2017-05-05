<?php get_header(); ?>

    <div class="c-hero" style="background-image: url(<?php echo get_template_directory_uri(); ?>/img/bg-hero-blog.jpg)">
      <div class="o-container">
        <div class="o-layout">
          <div class="o-layout__item o-layout__item--10@sm o-layout__item--offset-1@sm">
            <div class="c-hero__content">

              <?php if (function_exists('easy_breadcrumbs')) easy_breadcrumbs(); ?>

              <div class="c-hero__title">
                <h1 class="c-hero__heading u-text-gradient"><?php the_category(', '); ?></h1>
              </div>
              <p class="c-hero__description">
                <?php echo category_description( $category_id ); ?>
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
                          <div class="o-media__graphic">
                            <span class="c-icon-frame c-icon-frame--grey-45 c-icon-frame--small">
                              <svg class="c-icon-frame__svg" xmlns="http://www.w3.org/2000/svg" viewbox="4 0 108.7 100">
                                <path d="M110.5 91.1h-2.3c0 2.2-1.9 4.1-4.2 4.1H12.8c-2.4 0-4.2-1.9-4.2-4.1V36.3h99.7v54.8h4.5V34c0-.6-.2-1.2-.7-1.6-.4-.4-1-.7-1.6-.7H6.3c-.6 0-1.2.2-1.6.7-.5.4-.7 1-.7 1.6v57.1c0 4.8 4 8.6 8.8 8.6H104c4.8 0 8.8-3.8 8.8-8.6h-2.3z"/>
                                <path d="M42.5 83.9h2.3V51.3l28.9 14.5-32.2 16 1 2.1h2.3-2.3l1 2 36.2-18.1c.8-.4 1.3-1.2 1.3-2s-.5-1.6-1.3-2L43.5 45.6c-.7-.4-1.5-.3-2.2.1-.7.4-1.1 1.1-1.1 1.9v36.2c0 .8.4 1.5 1.1 1.9.7.4 1.5.4 2.2.1l-1-1.9zM110.5 25v-2.3H8.5V6.8c0-1.2 1-2.3 2.3-2.3h95.1c1.3 0 2.3 1 2.3 2.3V25h2.3v-2.3V25h2.3V6.8c0-3.8-3-6.8-6.8-6.8H10.8C7 0 4 3.1 4 6.8V25c0 .6.2 1.2.7 1.6.4.4 1 .7 1.6.7h104.2c.6 0 1.2-.2 1.6-.7.4-.4.7-1 .7-1.6h-2.3z"/>
                                <path d="M7.9 24.3L28.3 3.9 25.1.7 4.7 21.1M21.4 26.6L44.1 3.9 40.9.7 18.2 23.4M39.6 26.6L62.2 3.9 59 .7 36.4 23.4M57.7 26.6L80.4 3.9 77.2.7 54.5 23.4M75.9 26.5L98.5 3.9 95.3.7 72.7 23.3M94 26.6l18.1-18.2-3.2-3.2-18.1 18.2"/>
                              </svg>
                            </span>
                          </div>
                          <div class="o-media__content">
                            <h3 class="c-mod-heading__title u-text-gradient"><?php the_category(', '); ?></h3>
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
            <span class="c-cta__text u-text-shadow--red"><strong>Get the free mobile game</strong></span>
            <span class="c-cta__text u-text-shadow--red">that everyone is playing.</span>
          </div>
        </div>
      </div>
    </div>

<?php get_footer(); ?>

