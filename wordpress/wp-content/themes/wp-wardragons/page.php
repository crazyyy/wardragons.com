<?php get_header(); ?>
    <div id="content" class="o-content-wrap" role="main">

      <?php if (have_posts()): while (have_posts()) : the_post(); ?>
        <?php
          $image = get_field('header_background');

          if( !empty($image) ) {
            $bgi = $image['url'];
          } else {
            $bgi = get_template_directory_uri().'/img/bg-hero-blog.jpg';
          }
        ?>

        <div class="c-hero c-hero-bgi" style="background-image: url(<?php echo $bgi ?>)">
          <div class="o-container">
            <div class="o-layout">
              <div class="o-layout__item o-layout__item--10@sm o-layout__item--offset-1@sm">
                <div class="c-hero__content">

                  <?php if (function_exists('easy_breadcrumbs')) easy_breadcrumbs(); ?>

                  <div class="c-hero__title">
                    <h1 class="c-hero__heading u-text-gradient">
                      <?php the_title(); ?>
                    </h1>
                  </div>
                  <p class="c-hero__description">
                    <?php the_field('header_description'); ?>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div><!-- /.c-hero -->
      <?php endwhile; endif; ?>

      <div class="o-content-block o-content-block--wings o-content-block--top-offset-large">
        <div class="o-content-block__content">
          <div class="o-container o-content-block__container">
            <div class="o-layout">
              <div class="c-blog-roll">
                <div class="o-layout__item o-layout__item--offset-1@sm o-layout__item--10@sm">

                  <?php if (have_posts()): while (have_posts()) : the_post(); ?>
                    <section class="c-mod">

                      <div class="c-mod__body">
                        <article class="c-post">
                          <?php the_content(); ?>
                        </article><!-- /.c-post -->
                      </div>
                    </section>
                  <?php endwhile; endif; ?>

                </div>
                <div class="o-layout__item o-layout__item--3@sm">
                </div>
              </div>
            </div>
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
