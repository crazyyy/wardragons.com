<?php if (have_posts()): while (have_posts()) : the_post(); ?>
  <li class="c-blog-roll__item">
    <section class="c-blog-excerpt">
      <div class="o-media o-media--apply@lg">
        <div class="o-media__graphic">
          <div class="c-blog-excerpt__image-wrap">
            <a href="<?php the_permalink(); ?>">
              <?php if ( has_post_thumbnail()) { ?>
                <img class="c-blog-excerpt__image u-img-full" src="<?php echo the_post_thumbnail_url('medium'); ?>" title="<?php the_title(); ?>" alt="<?php the_title(); ?>" />
              <?php } else { ?>
                <img class="c-blog-excerpt__image u-img-full" src="<?php echo catchFirstImage(); ?>" title="<?php the_title(); ?>" alt="<?php the_title(); ?>" />
              <?php } ?>
            </a>
          </div>
        </div>
        <div class="o-media__content">
          <div class="c-blog-excerpt__content">
            <header class="c-blog-excerpt__header">
              <span class="c-blog-excerpt__date"><?php the_time('j F Y'); ?></span>
              <h4 class="c-blog-excerpt__title">
                    <a class="c-blog-excerpt__link" href="<?php the_permalink(); ?>" target="_self"><?php the_title(); ?></a>
                </h4>
            </header>
            <a class="c-blog-excerpt__link c-blog-excerpt__link--read-more" href="<?php the_permalink(); ?>">
                Читать далее <i class="c-icon c-icon--angle-double-right c-blog-excerpt__icon"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  </li>
<?php endwhile; endif; ?>
