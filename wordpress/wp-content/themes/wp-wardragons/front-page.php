<?php /* Template Name: Home Page */ get_header(); ?>

  <?php if (have_posts()): while (have_posts()) : the_post(); ?>
    <?php if( have_rows('big_slider') ): ?>
      <div class="c-slider-group">
        <div class="c-hero-slider js-slider js-slider-has-nav" data-slick="{&quot;arrows&quot;: false,&quot;draggable&quot;: false}" data-slider="hero">

          <?php while( have_rows('big_slider') ): the_row(); $mobileimage = get_sub_field('mobile_image'); $image = get_sub_field('desktop_image'); ?>

            <div class="c-hero-slider__slide">
              <img class="c-hero-slider__image c-hero-slider__image--mobile" src="<?php echo $mobileimage['url']; ?>" alt="">
              <img class="c-hero-slider__image" src="<?php echo $image['url']; ?>" alt="">
            </div>

          <?php endwhile; ?>
        </div>
        <!-- /.c-hero-slider -->
        <div class="c-hero-content-box">
          <div class="c-slide-text js-slider js-slider-as-nav" data-slick="{&quot;arrows&quot;: false,&quot;fade&quot;: true,&quot;mobileFirst&quot;: true,&quot;draggable&quot;: false}" data-slider="hero">
            <?php while( have_rows('big_slider') ): the_row(); $title = get_sub_field('slider_title'); $description = get_sub_field('slider_description'); $link = get_sub_field('slider_link'); ?>
              <div class="c-slide-text__slide">
                <h1 class="c-slide-text__title u-text-gradient"><?php echo $title; ?>!</h1>
                <p class="c-slide-text__copy">
                  <?php echo $description; ?>
                </p>
                <a class="c-slide-text__link" href="<?php echo $link; ?>" target="_self">Читать далее &raquo;</a>
              </div>
            <?php endwhile; ?>
          </div>
          <div class="c-hero-content-box__nav">
            <ul class="o-list-unstyled c-pagination js-slider-pagination" data-slider="hero">
              <li class="c-pagination__item">
                <button class="c-pagination__nav c-pagination__nav--prev js-slider-nav" data-direction="prev">
                  <i class="c-icon c-icon--left-open c-pagination__nav-icon"></i>
                  <span class="u-sr-only">Previous</span>
                </button>
              </li>
              <li class="c-pagination__item">
                <ol class="o-list-unstyled c-pagination__list">
                  <?php  $i = 0; while( have_rows('big_slider') ): the_row(); ?>
                    <?php if( $i == 0 ) { $class= 'is-current'; } else { $class= '';} ?>

                      <li class="c-pagination__item c-pagination__list-item <?php echo $class; ?>">
                        <button class="c-pagination__dot js-hero-slider-dot" data-slide-index="<?php echo $i; ?>">
                          <span class="u-sr-only"><?php echo $i; ?></span>
                        </button>
                      </li>

                  <?php $i++; endwhile; ?>
                </ol>
              </li>
              <li class="c-pagination__item">
                <button class="c-pagination__nav c-pagination__nav--next js-slider-nav" data-direction="next">
                  <span class="u-sr-only">Next</span>
                  <i class="c-icon c-icon--right-open c-pagination__nav-icon"></i>
                </button>
              </li>
            </ul>
          </div>
        </div><!-- /.c-hero-content-box -->
      </div><!-- /.c-slider-group -->
    <?php endif; ?>


    <div class="o-content-block o-content-block--wings super-home-block">
      <div class="o-content-block__content">
        <div class="o-container o-content-block__container">
          <header class="c-section-header">
            <h2 class="c-section-header__title u-text-gradient">
                  Построй непобедимую армию огня
              </h2>
            <p class="c-section-header__text u-text-shadow">
              Собирайте, разводите и тренируйте сотни драконов, обладающих различными стилями атаки, заклинаниями и классами в этой насыщенной стратегической игре.
            </p>
          </header>
          <div class="o-island o-island--super u-hidden@less-than-md"></div>
          <div class="c-slider-dragon-wrapper">
            <div class="c-slider-dragon js-slider-dragon">

              <?php query_posts( array( 'post_type' => gragon, 'showposts' => 10 ) ); ?>
              <?php while ( have_posts() ) : the_post(); ?>
                <div class="c-slider-dragon__slide">
                  <div class="o-layout">
                    <div class="o-layout__item o-layout__item--6@md o-layout__item--push-6@md">
                      <div class="c-slider-dragon__dragon c-slider-dragon__dragon--fenrir">
                        <img class="c-slider-dragon__image" src="<?php echo the_post_thumbnail_url(); ?>" alt="">
                      </div>
                    </div>
                    <div class="o-layout__item o-layout__item--6@md o-layout__item--pull-6@md">
                      <div class="c-slider-dragon__info">

                        <ul class="o-list-unstyled c-slider-dragon-nav c-pagination u-hidden@md">
                          <li class="c-pagination__item">
                            <button class="c-pagination__nav c-pagination__nav--prev js-slider-dragon-arrow" data-direction="prev">
                              <i class="c-icon c-icon--left-open c-pagination__nav-icon"></i>
                              <span class="u-sr-only">Previous</span>
                            </button>
                          </li>
                          <li class="c-pagination__item">
                            <button class="c-pagination__nav c-pagination__nav--next js-slider-dragon-arrow" data-direction="next">
                              <span class="u-sr-only">Next</span>
                              <i class="c-icon c-icon--right-open c-pagination__nav-icon"></i>
                            </button>
                          </li>
                        </ul>

                        <section class="c-explorer__content">
                          <header class="c-explorer__header c-explorer__header--red">
                            <h3 class="c-explorer__title"><?php the_title(); ?></h3>
                            <span class="c-explorer__flags">
                              <span class="c-explorer__flag-text">Breedable at level</span>
                              <span class="c-explorer__flag-block"><?php the_field('breedable_at_level'); ?></span>
                            </span>
                            <ul class="o-list-inline c-explorer__tags">

                              <?php $tags = get_field('dragon_tags'); if( $tags ): ?>
                                <?php foreach( $tags as $tag ): ?>
                                  <li class="c-explorer__tag"><?php echo $tag['value']; ?></li>
                                <?php endforeach; ?>
                              <?php endif; ?>

                            </ul>
                          </header>
                          <p class="c-explorer__description">
                            <span class="c-explorer__text c-explorer__text--short"><?php the_field('description_short'); ?></span>
                            <span class="c-explorer__text c-explorer__text--long"><?php the_content(); ?></span>
                          </p>
                          <div class="o-layout">
                            <div class="o-layout__item o-layout__item--7@xs">
                              <div class="c-explorer__left">
                                <div class="c-stat c-stat--compact">
                                  <header class="c-stat__header">
                                    <span class="c-stat__title"><i class="c-sprite c-sprite--stat c-sprite--max-level-damage"></i> Max Level Damage / second</span>
                                  </header>
                                  <div class="c-stat__bar-wrap">
                                    <?php
                                      $number = get_field('max_level_damage__second');
                                      $english_format_number  = number_format($number);
                                      $biggest_number = '14647';
                                      $width = $number * 100 / $biggest_number;
                                    ?>
                                    <div class="c-stat__bar">
                                      <div class="c-stat__bar-fill" style="width: <?php echo $width; ?>%;">
                                        <span class="u-sr-only"><?php echo $english_format_number; ?> per second</span>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="c-stat__label"><?php echo $english_format_number; ?></div>
                                </div>
                                <div class="c-stat c-stat--compact">
                                  <header class="c-stat__header">
                                    <span class="c-stat__title"><i class="c-sprite c-sprite--stat c-sprite--max-level-health"></i> Max Level Health</span>
                                  </header>
                                    <?php
                                      $number = get_field('max_level_health');
                                      $english_format_number = number_format($number, 2, '.', '');
                                      $biggest_number = '120';
                                      $width = $number * 100 / $biggest_number;
                                    ?>
                                  <div class="c-stat__bar-wrap">
                                    <div class="c-stat__bar">
                                      <div class="c-stat__bar-fill" style="width: <?php echo $width; ?>%;">
                                        <span class="u-sr-only"><?php echo $english_format_number  ; ?>K</span>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="c-stat__label"><?php echo $english_format_number  ; ?>K</div>
                                </div>
                                <div class="c-stat c-stat--compact">
                                  <header class="c-stat__header">
                                    <span class="c-stat__title"><i class="c-sprite c-sprite--stat c-sprite--max-level-attack-power"></i> Max Level Attack Power</span>
                                  </header>
                                    <?php
                                      $number = get_field('max_level_attack_power');
                                      $english_format_number  = number_format($number);
                                      $biggest_number = '8160';
                                      $width = $number * 100 / $biggest_number;
                                    ?>
                                  <div class="c-stat__bar-wrap">
                                    <div class="c-stat__bar">
                                      <div class="c-stat__bar-fill" style="width: <?php echo $width; ?>%;">
                                        <span class="u-sr-only"><?php echo $english_format_number; ?></span>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="c-stat__label"><?php echo $english_format_number; ?></div>
                                </div>
                                <div class="c-stat c-stat--compact">
                                  <header class="c-stat__header">
                                    <span class="c-stat__title"><i class="c-sprite c-sprite--stat c-sprite--max-level-healing"></i> Maximum Level Healing Time</span>
                                  </header>
                                  <div class="c-stat__label c-stat__lable--time"><?php the_field('maximum_level_healing_time'); ?></div>
                                </div>
                              </div>
                            </div>
                            <div class="o-layout__item o-layout__item--5@xs">
                              <h5 class="c-explorer__sub-title">Abilities:</h5>
                              <div class="o-layout">
                                <div class="o-layout__item o-layout__item--12">

                                  <?php $abilities = get_field('abilities'); if( $abilities ): ?>
                                    <?php foreach( $abilities as $ability ): ?>
                                      <div class="o-media o-media--apply c-explorer__icon-block">
                                        <div class="o-media__graphic ">
                                          <img class="c-explorer__icon" width="32" height="32" src="<?php echo get_template_directory_uri(); ?>/img/ability-ico-<?php echo $ability['label']; ?>.png">
                                        </div>
                                        <div class="o-media__content">
                                          <span class="c-explorer__icon-text"><?php echo $ability['value']; ?></span>
                                        </div>
                                      </div>
                                    <?php endforeach; ?>
                                  <?php endif; ?>

                                </div>
                              </div>
                            </div>
                          </div>
                        </section>
                      </div>
                    </div>
                  </div>
                </div>
              <?php endwhile; ?>

            </div>
            <ul class="o-list-unstyled c-slider-dragon-nav c-pagination u-hidden@less-than-md">
              <li class="c-pagination__item">
                <button class="c-pagination__nav c-pagination__nav--prev js-slider-dragon-arrow" data-direction="prev">
                  <i class="c-icon c-icon--left-open c-pagination__nav-icon"></i>
                  <span class="u-sr-only">Previous</span>
                </button>
              </li>
              <li class="c-pagination__item">
                <button class="c-pagination__nav c-pagination__nav--next js-slider-dragon-arrow" data-direction="next">
                  <span class="u-sr-only">Next</span>
                  <i class="c-icon c-icon--right-open c-pagination__nav-icon"></i>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="o-content-block o-content-block--scene">
      <div class="o-content-block__content">
        <div class="o-container o-content-block__container">
          <div class="o-layout">
            <div class="o-layout__item o-layout__item--6@c940 o-layout__item--5@md o-layout__item--offset-1@md">
              <?php query_posts("showposts=1&cat=10"); ?>
              <?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
                <section class="c-mod">
                  <header class="c-mod-heading">
                    <span class="c-mod-heading__content">
                      <span class="c-mod-heading__flag"></span>
                      <div class="o-media o-media--apply o-media--flip">
                        <div class="o-media__content">
                          <h3 class="c-mod-heading__title u-text-gradient">Видео</h3>
                        </div>
                      </div>
                    </span>
                  </header>
                  <div class="c-mod__body">
                    <div class="o-video-container">
                      <?php the_field('video'); ?>
                    </div>
                  </div>
                  <div class="c-mod__footer c-footer-news-media">
                    <div class="o-media o-media--apply@sm o-media--flip">
                      <div class="o-media__graphic o-media__graphic--button">
                        <a href="#" class="c-btn">
                          <span class="c-btn__block">Смотреть</span>
                        </a>
                      </div>
                      <div class="o-media__content">
                        <p>Ознакомьтесь с последними кадровыми материалами и изображениями разрушения и хаоса в WAR DRAGONS.</p>
                      </div>
                    </div>
                  </div>
                </section>
              <?php endwhile; endif; ?>
              <?php wp_reset_query(); ?>
            </div>
            <div class="o-layout__item o-layout__item--6@c940 o-layout__item--5@md">
              <section class="c-mod">
                <header class="c-mod-heading">
                  <span class="c-mod-heading__content">
                  <span class="c-mod-heading__flag"></span>
                  <div class="o-media o-media--apply o-media--flip">
                    <div class="o-media__content">
                      <h3 class="c-mod-heading__title u-text-gradient">Новости WarDragons</h3>
                    </div>
                  </div>
                  </span>
                </header>
                <div class="c-mod__body">
                  <div class="c-slider-news js-slider-news">

                    <?php query_posts("showposts=10&cat=11"); ?>
                    <?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>

                      <div class="c-slider-news__slide" data-slide="1">
                        <div class="o-media o-media--apply@c600">
                          <div class="o-media__graphic">
                            <?php if ( has_post_thumbnail()) { ?>
                              <img class="c-slider-news__image" src="<?php echo the_post_thumbnail_url('medium'); ?>" title="<?php the_title(); ?>" alt="<?php the_title(); ?>" />
                            <?php } else { ?>
                              <img class="c-slider-news__image" src="<?php echo catchFirstImage(); ?>" title="<?php the_title(); ?>" alt="<?php the_title(); ?>" />
                            <?php } ?>
                          </div>
                          <div class="o-media__content">
                            <div class="c-slider-news__content">
                              <span class="c-slider-news__date"><?php the_time('j F Y'); ?></span>
                              <h4 class="c-slider-news__title"><?php the_title(); ?></h4>
                              <a class="c-slider-news__link" href="<?php the_permalink(); ?>">Читать далее &raquo;</a>
                            </div>
                          </div>
                        </div>
                      </div>

                    <?php endwhile; endif; ?>
                    <?php wp_reset_query(); ?>

                  </div><!-- /.c-slider-news -->
                  <div class="c-slider-news-nav">
                    <ul class="o-list-unstyled c-pagination c-pagination--right">
                      <li class="c-pagination__item">
                        <button class="c-pagination__nav c-pagination__nav--prev js-slider-news-arrow" data-direction="prev">
                          <i class="c-icon c-icon--left-open c-pagination__nav-icon"></i>
                          <span class="u-sr-only">Previous</span>
                        </button>
                      </li>
                      <li class="c-pagination__item">
                        <ol class="o-list-unstyled c-pagination__list">

                          <?php query_posts("showposts=10&cat=1"); ?>
                          <?php $i = 1; if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>

                            <?php if( $i == 1 ) { $class= 'is-current'; } else { $class= '';} ?>
                            <li class="c-pagination__item c-pagination__list-item <?php echo $class; ?>">
                              <button class="c-pagination__dot js-slider-news-dot" data-slide="<?php echo $i; ?>">
                                <span class="u-sr-only"><?php echo $i; ?></span>
                              </button>
                            </li>

                          <?php $i++; endwhile; endif; ?>
                          <?php wp_reset_query(); ?>

                        </ol>
                      </li>
                      <li class="c-pagination__item">
                        <button class="c-pagination__nav c-pagination__nav--next js-slider-news-arrow" data-direction="next">
                          <span class="u-sr-only">Next</span>
                          <i class="c-icon c-icon--right-open c-pagination__nav-icon"></i>
                        </button>
                      </li>
                    </ul>
                  </div>
                  <!-- /.c-slider-news-nav -->
                </div>
                <div class="c-mod__footer c-footer-news-media">
                  <div class="o-media o-media--apply@sm o-media--flip">
                    <div class="o-media__content">
                      <p>Следите за Новостями Мира WarDragons, чтобы быть в курсе последних событий игры и гильдии Russia</p>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- /.c-section -->
    <div class="o-content-block o-content-block--dragons">
      <div class="o-content-block__content">
        <div class="o-container o-content-block__container">
          <header class="c-section-header">
            <h2 class="c-section-header__title u-text-gradient">
                  Как построить неприступную базу? Как максимально эффективно провести ивенты? Ответы на эти вопросы Вы найдете в Наших Гайдах!
              </h2>
          </header>
          <!-- /.c-section-header -->
          <div class="o-island u-hidden@less-than-sm"></div>
          <div class="o-layout">
            <div class="o-layout__item o-layout__item--10@md o-layout__item--offset-1@md">
              <div class="c-stats-wrapper">
                <section class="c-mod">
                  <div class="c-mod__body">
                    <div class="o-layout">
                      <div class="o-layout__item o-layout__item--6@sm">
                        <div class="c-stats-wrapper__left">
                          <div class="c-stats-info">
                            <svg class="c-infographic" xmlns="http://www.w3.org/2000/svg" viewbox="0 0 600 334.6">
                              <link rel="stylesheet" href="css/inline_0.css" />
                              <path class="c-infographic__text--orange" d="M0 .1h600v167.5H0z" id="Layer_2" />
                              <g id="Layer_1">
                                <text transform="translate(43.21 68.653)" class="c-infographic__text st1 st2">
                                  2,742,100
                                </text>
                                <text transform="translate(36.752 104.844)">
                                  <tspan x="0" y="0" class="c-infographic__text st3 st1 st4">BUILDERS MADE HOMELESS</tspan>
                                  <tspan x="4.2" y="26.1" class="c-infographic__text st5 st1 st4 st6">IN THE PAST 24 HOURS</tspan>
                                </text>
                                <path d="M348.4 15.5c-3.8-5.8-38-4.2-23.4 21.3 1.6 4.7-15.7 23.7 2.3 34.3 12.7 7.5 28-6 28-6l19.3-23c.6-.2-3.7-56.3-26.2-26.6z" />
                                <circle cx="492" cy="24.5" r="37.3" />
                                <circle cx="441.3" cy="16.5" r="37.3" />
                                <path d="M324 41.1c0-18.8 16.3-34.9 34.9-37.3 18.7-2.4 33.3 18.5 33.3 37.3s-15.3 34.1-34.1 34.1S324 59.9 324 41.1z" />
                                <circle cx="388" cy="37.2" r="25.3" />
                                <circle cx="524" cy="13.5" r="26.7" />
                                <path class="st5" d="M600.5 116.7c-1.1-.1-2.3-.2-3.5-.2-14.7 0-26.7 11.9-26.7 26.7 0 14.7 11.9 26.7 26.7 26.7 1.2 0 2.3-.1 3.5-.2v-53z" />
                                <circle cx="423.3" cy="49.8" r="17.3" />
                                <circle class="st5" cx="574.7" cy="168.1" r="17.3" />
                                <path d="M334.2 3.2c4.8-8.2 6.7-4.8 13.2-7.4 6.6 0 12 5.4 12 12s-5.4 12-12 12-13.2-10-13.2-16.6z" />
                                <circle cx="487.3" cy="14.8" r="17.3" />
                                <circle cx="468.7" cy="13.2" r="17.3" />
                                <path d="M349.3 2.5c0-9.6 35.2-10.6 44.8-10.6s17.3 7.8 17.3 17.3-7.8 17.3-17.3 17.3-44.8-14.4-44.8-24z" />
                                <circle cx="332.1" cy="17.6" r="17.3" />
                                <circle cx="562.3" cy="10.5" r="17.3" />
                                <circle cx="587.3" cy="3.5" r="12.7" />
                                <path class="st5" d="M600.5 105.6c-4 2.1-6.8 6.3-6.8 11.2s2.8 9.1 6.8 11.2v-22.4zM0 167.6h600v167H0z" />
                                <path class="st5" d="M0 167.6h329v167H0z" />
                                <text transform="translate(359.206 262.77)" class="c-infographic__text c-infographic__text--orange st1 st7">
                                  5,604
                                </text>
                                <text transform="translate(364.53 293.9)">
                                  <tspan x="0" y="0" class="c-infographic__text st8 st1 st9">GUILD WARS COMPLETED</tspan>
                                  <tspan x="0" y="23.5" class="c-infographic__text st10 st1 st11 st6">IN THE PAST 7 DAYS</tspan>
                                </text>
                                <path class="st3" d="M514.7 142.8c1.6.7 3.5 0 4.2-1.6l6-13.8c.7-1.6 0-3.5-1.6-4.2-1.6-.7-3.5 0-4.2 1.6l-6 13.8c-.7 1.7 0 3.5 1.6 4.2zm17.8 15.6c1.6-.7 2.3-2.6 1.6-4.2l-6.1-13.7c-.7-1.6-2.6-2.3-4.2-1.6-1.6.7-2.3 2.6-1.6 4.2l6.1 13.7c.7 1.6 2.6 2.3 4.2 1.6z" />
                                <path class="st3" d="M525.1 153l-6.1-13.7c-.7-1.6-2.6-2.3-4.2-1.6-1.6.7-2.3 2.6-1.6 4.2l6.1 13.7c.7 1.5 6.5-1.1 5.8-2.6zM506 115.6l4.4-3.4.7 5.1-2.1 1.4c-1.4 1-3.4.7-4.4-.7-1-1.4 0-1.4 1.4-2.4z" />
                                <path class="st3" d="M507.3 119.4c1.7-.1 2-1.4 1.8-3.2l-.9-7.3c-.1-1.7-3.6-3.8-3.4-.1l-.9 7.7c.1 1.7 1.7 3 3.4 2.9z" />
                                <path class="st3" d="M515.6 107.9c3.3-1.9 4.7-5.3 2.9-8.6l-1.1-2.3c-1.9-3.3-6.1-4.4-9.4-2.6-3.3 1.9-4.4 6.1-2.6 9.4l.8 1.5c1.9 3.4 6.1 4.5 9.4 2.6zm2.6 11c1.8-1.6 3.6-3.9 5.3-5.9.8-1 1.1-3.9.1-3.1-2 1.6-4.5 5.5-6.4 7.2l-.6-1c-.8-3.8 4.9-5.2 5.3-6.7l.2-5c4-.8 10.4 10.7 10.4 10.7 1.9 4.2 3.8 14.9-.2 15.7l-7.1 2.6c-4 .8-5.8-2-6.6-5.8l1.2-6.3-1.6-2.4z" />
                                <path class="st3" d="M513.2 113.7l2.5-3c.1.3.3.6.4.9.3.6 1.8 0 1.5-.7-.2-.4-.7-1.7-.7-1.8l2.9-3.5c1.1-1.4 3.1-1.6 4.5-.5s1.6 3.1.5 4.5l-6.7 8c-1.1 1.4-3.1 1.6-4.5.5-1.3-1.1-1.5-3.1-.4-4.4z" />
                                <path class="st3" d="M516.5 119.1c1.6-.6 2.5-2.4 1.9-4l-3-6.4c-.6-1.6-1.9-3.8-3.5-3.2 0 0-2-.1-.9 3.5l1.4 8.2c.6 1.6 2.4 2.5 4.1 1.9zm-9.2-9.7s1.8-1 1.9-2.9c0-.4-1.8-2.3-2-2.8-.1-.5.8-2.6.1-2.7s-1.4.6-1.4.6-.3-.4-.6-.3c-.4.1-1 .7-1 .7s.1-.3-.4-.3c-.5.1-.7.5-.8 1 .1 4.7 1.6 5.8 1.6 5.8l2.6.9z" />
                                <path class="c-infographic__text--orange" d="M508.2 102c0-.3.1-.7.6-1.1.4-.3.8.4.8.4s.2-.9.6-1c.8-.2.9.8.9.8s.1-1.2 1.2-.8c.7.2.7 2.4.9 2.8.1.1.2.3.5.5-.1-.4-.1-.8.6-.8.6 0 1.3 1.8 1.3 1.8l-.4 1.4c0 .8.1 1.7.3 2.1-2.2 1-4.3.7-4.3.7s-2.3-.7-3.4-6c-.4-.5-.2-.8.4-.8z" />
                                <path class="st3" d="M524.1 150.9s1.9 3.7 1.7 4.2c-.2.5-2.8 1.8-6.4 2.1-3.5.4-6.9.5-7.1-.2-.2-.7 0-2.3 1.6-3.5s3.5-3.7 3.5-3.7l6.7 1.1zm-.3-6.8c1.6.7 3.5 0 4.2-1.6l6-13.8c.7-1.6 0-3.5-1.6-4.2-1.6-.7-3.5 0-4.2 1.6l-6 13.8c-.8 1.6 0 3.5 1.6 4.2z" />
                                <path class="st3" d="M534.1 154.1s1.9 3.7 1.7 4.2-2.8 1.8-6.4 2.1-6.9.5-7.1-.2c-.2-.7 0-2.3 1.6-3.5 1.6-1.2 3.5-3.7 3.5-3.7l6.7 1.1z" />
                                <path class="st5" d="M499.1 100s-3.9-1.4-5.1 1.1c-1 1.9.6 2.3 1.9 1.5.6-.5.9-2.6 3.2-2.6zm-2 5.8s-4 1.1-3.6 3.8c.3 2.1 1.8 1.5 2.4.1.3-.6-.7-2.6 1.2-3.9zm-6.4-.4s-4.1-.6-4.8 2c-.6 2.1 1 2.1 2.1 1.1.6-.4.5-2.6 2.7-3.1z" />
                                <path class="st3" d="M453.5 142.8c1.6.7 3.5 0 4.2-1.6l6-13.8c.7-1.6 0-3.5-1.6-4.2-1.6-.7-3.5 0-4.2 1.6l-6 13.8c-.8 1.7 0 3.5 1.6 4.2zm17.7 15.6c1.6-.7 2.3-2.6 1.6-4.2l-6.1-13.7c-.7-1.6-2.6-2.3-4.2-1.6-1.6.7-2.3 2.6-1.6 4.2l6.1 13.7c.7 1.6 2.6 2.3 4.2 1.6z" />
                                <path class="st3" d="M463.8 153l-6.1-13.7c-.7-1.6-2.6-2.3-4.2-1.6-1.6.7-2.3 2.6-1.6 4.2l6.1 13.7c.7 1.5 6.5-1.1 5.8-2.6zm-19.1-37.4l4.4-3.4.7 5.1-2.1 1.4c-1.4 1-3.4.7-4.4-.7-1-1.4 0-1.4 1.4-2.4z" />
                                <path class="st3" d="M446 119.4c1.7-.1 2-1.4 1.8-3.2l-.9-7.3c-.1-1.7-3.6-3.8-3.4-.1l-.9 7.7c.1 1.7 1.7 3 3.4 2.9z" />
                                <path class="st3" d="M454.3 107.9c3.3-1.9 4.7-5.3 2.9-8.6l-1.1-2.3c-1.9-3.3-6.1-4.4-9.4-2.6-3.3 1.9-4.4 6.1-2.6 9.4l.8 1.5c1.9 3.4 6.1 4.5 9.4 2.6zm2.7 11c1.8-1.6 3.6-3.9 5.3-5.9.8-1 1.1-3.9.1-3.1-2 1.6-4.5 5.5-6.4 7.2l-.6-1c-.8-3.8 4.9-5.2 5.3-6.7l.2-5c4-.8 10.4 10.7 10.4 10.7 1.9 4.2 3.8 14.9-.2 15.7l-7.1 2.6c-4 .8-5.8-2-6.6-5.8l1.2-6.3-1.6-2.4z" />
                                <path class="st3" d="M451.9 113.7l2.5-3c.1.3.3.6.4.9.3.6 1.8 0 1.5-.7-.2-.4-.7-1.7-.7-1.8l2.9-3.5c1.1-1.4 3.1-1.6 4.5-.5s1.6 3.1.5 4.5l-6.7 8c-1.1 1.4-3.1 1.6-4.5.5-1.3-1.1-1.5-3.1-.4-4.4z" />
                                <path class="st3" d="M455.2 119.1c1.6-.6 2.5-2.4 1.9-4l-3-6.4c-.6-1.6-1.9-3.8-3.5-3.2 0 0-2-.1-.9 3.5l1.4 8.2c.6 1.6 2.4 2.5 4.1 1.9zm-9.2-9.7s1.8-1 1.9-2.9c0-.4-1.8-2.3-2-2.8-.1-.5.8-2.6.1-2.7s-1.4.6-1.4.6-.3-.4-.6-.3c-.4.1-1 .7-1 .7s.1-.3-.4-.3c-.5.1-.7.5-.8 1 .1 4.7 1.6 5.8 1.6 5.8l2.6.9z" />
                                <path class="c-infographic__text--orange" d="M446.9 102c0-.3.1-.7.6-1.1.4-.3.8.4.8.4s.2-.9.6-1c.8-.2.9.8.9.8s.1-1.2 1.2-.8c.7.2.7 2.4.9 2.8.1.1.2.3.5.5-.1-.4-.1-.8.6-.8.6 0 1.3 1.8 1.3 1.8l-.4 1.4c0 .8.1 1.7.3 2.1-2.2 1-4.3.7-4.3.7s-2.3-.7-3.4-6c-.4-.5-.1-.8.4-.8z" />
                                <path class="st3" d="M462.8 150.9s1.9 3.7 1.7 4.2c-.2.5-2.8 1.8-6.4 2.1-3.5.4-6.9.5-7.1-.2s0-2.3 1.6-3.5c1.6-1.2 3.5-3.7 3.5-3.7l6.7 1.1zm-.3-6.8c1.6.7 3.5 0 4.2-1.6l6-13.8c.7-1.6 0-3.5-1.6-4.2-1.6-.7-3.5 0-4.2 1.6l-6 13.8c-.7 1.6 0 3.5 1.6 4.2z" />
                                <path class="st3" d="M472.8 154.1s1.9 3.7 1.7 4.2c-.2.5-2.8 1.8-6.4 2.1-3.5.4-6.9.5-7.1-.2-.2-.7 0-2.3 1.6-3.5 1.6-1.2 3.5-3.7 3.5-3.7l6.7 1.1z" />
                                <path class="st5" d="M437.9 100s-3.9-1.4-5.1 1.1c-1 1.9.6 2.3 1.9 1.5.5-.5.8-2.6 3.2-2.6zm-2 5.8s-4 1.1-3.6 3.8c.3 2.1 1.8 1.5 2.4.1.2-.6-.8-2.6 1.2-3.9zm-6.4-.4s-4.1-.6-4.8 2c-.6 2.1 1 2.1 2.1 1.1.5-.4.4-2.6 2.7-3.1z" />
                                <path class="c-infographic__text--orange" d="M385.4 0s-14.8 3-8.6 11.2c5.2 6.9-2.7 10.7-7.2 7.5-8.8-6.3 1.3-14.3 3.2-15.2 0 0-18.7 4.9-16.6 12.9 1.1 4.3 5.1 6.6 7.2 7.1 3 9.2-1.3 20.6-6.7 16.3s2-10.7 2-10.7-11.3-2.4-10.2 4.9c1.2 7.3-2.3 7.5-4.7 7.5-7 .2-8.2-13 .2-15.3 7.5-2.1 8-9.6 6-14.6-3.3 8.7-11.1 9.5-18.5 9.8-13 .7-24.2 37.3 2.3 47.1 1.5.6 16.5 44.6 16.5 44.6s48-2.8 29-39.7c11.7-1.3 20.7-3.6 26-7.5 8.9-6.6-2-24.5 3.8-25.8-11.5-.8-5.8 8.3-14.8 11-3.3 1-10.2-.2-6-3.4 5.8-2.2 6.7-6.6 5.5-10.5-1.5-5.2 7.1-1.5 1.8-12.6.2 8-5.4 4.9-8.4 7.5-4.7 4.1 0 7.2-2.7 8.8-5.4 3.2-14.1 2.7-11-3.9 4.3-9.2 22.8-10 13.2-26.9-3.1-5.8-6.8-7-1.3-10.1z" />
                                <path class="st12" d="M333.2 61.7c-12.2-5-12.2-13.5-9.5-24.5 2.8-11.2 14.8-12.8 14.8-12.8-6.5 4.1-7.1 11.8-6.1 15.3s9.7 12.5 14.7 6 7.3-5.5 7.3-5.5-2.9 3-1.8 5.7c2.5 6 6.7-.2 7-2 3.7 2-2.2 9.8 1.5 8 3.7-1.8 4.5-7.3 7.7-10-3.3 6.8 3.2 9.8-4 14.7-3.4 2.3-6-1.3-7.8 2.7-2 3.9-23.8 2.4-23.8 2.4zm30.7-47.8s4.8 12 11.2 9.7 7.8-5 7.8-12c2 6.7 7.2 10.2-5.5 16-5.2 2.8-11.2 11-11.2 11s2.6-9.6 1.8-13.3c-1.3-5.1-10.6-6.1-4.1-11.4zm40.9 30.5c-1.6 6.8 5.4 9.3-.8 14.2-4.1 3.2-14-3.9-14-3.9s6-.3 10-4.2c.5-.5-1.9 4.1 2.7 3 1.9-.5-3-2.3 2.1-9.1z" />
                                <path class="st5" d="M388.8 54.6v7.1h-7.4v-7.1h-12.3v7.1h-7.5v-7.1h-12.3v7.1h-7.5v-7.1h-12.3v24.7h71.7V54.6z" />
                                <path class="st13" d="M396.8 89.2h-62.9l-4.4-9.9h71.7z" />
                                <path class="st5" d="M400.6 169.8H329l4.9-80.6h62.8z" />
                                <path d="M357.7 95.3h15v22.3h-15z" />
                                <path class="c-infographic__text--orange" d="M388 75.3c-17.8.9-9.7 15.5-14.1 13.8-5.8-2.1-1.5-7.5-1.5-7.5s-5.1.7-5.3 8.4 6.1 8.7 6.1 8.7 2.2 6-2.4 7.4c-4.7 1.4-3.7-2.6-2.7-7.3-11.4 11.4-.7 12.5-7.2 18.9-.1.1 11.5 0 11.6-.1 19.1 6.3 13.2-18.3 13.2-18.3s-.7 8.4-4.1 1.7c-3.3-6.7 4.7-6.4 6.8-11.3 2.1-4.9-.4-8.3-.4-8.3s-.5 5-5.1 4.4c-2.2-.2-.9-7.7 5.1-10.5z" />
                                <path class="st13" d="M341.8 54.6v7.1h2.5v-5.3zm47.1 0v7.1h-2.5v-5.3zm-19.8 0v7.1h-1.2v-5.3zm-7.5 0v7.1h1.2v-5.3z" />
                                <path class="st12" d="M326.5 41s.8 2.8-3.7 2.5-1.3-7.7-1.3-7.7-4.2 2.8-5.2 6.8c-1.3 5.7 1.7 8 6 6.5 4.4-1.4 4.2-8.1 4.2-8.1zm68.2-9.7s-5.8 1.1-6.8 3.5c-1.1 2.4 2.1 4.1 1.1 6.2-1 2.2-11.9 7-11.9 7s12.8-.2 14.2-4.3-.8-6.5-.1-8.5c.3-.9 1.8-2 3.5-3.9zm-9.5 56.2s-3.6 3.4-4.8 1 .5-8 .5-8-5.6 6-3.9 9.6 5.9 4.7 8.2-2.6zm-8.7 10s1.2 8.1-4.1 11.3c-2.6 1.6-7.4 1.9-7.1-4.5-1 1.9-2.6 5.2-.5 6.6s0 5.8 0 5.8l4.6-4s3.3 4.9 8.5 4c9-1.6 6.1-10.5 6.1-10.5s-4.3 5.8-7 3.5 4.7-5-.5-12.2z" />
                                <path class="c-infographic__text--orange" d="M262.5 166h22v18.4h-22zm-48.6-1.5h22v19.8h-22zm-48.6 0h22v19.8h-22zm-48.6 0h22v19.8h-22zM68.1 166h22v18.4h-22zm-48.6 0h22v18.4h-22z" />
                                <ellipse class="st14" cx="55.4" cy="316.2" rx="26.2" ry="1.9" />
                                <path class="st15" d="M35.0245 236.4816l11.0197 2.503-.576 2.5355-11.0196-2.502z" />
                                <path class="st15" d="M38.674 238.472l2.7307.6202-3.101 13.6528-2.7306-.6202z" />
                                <ellipse transform="rotate(-77 36.436 253.888)" class="st15" cx="36.4" cy="253.9" rx="2.6" ry="2.6" />
                                <path class="st14" d="M43.4 237.5l-5.4-1.3 5.7-28.4 5.2-5.5 1.6 7z" />
                                <path class="st15" d="M43.4 237.5l-2.2-2.9 7.7-32.3 1.6 7z" />
                                <g id="_x34_gV3go_12_">
                                  <path class="st16" d="M40.9 241.5c-.1.4-.1.4-1.1.2-.1.1-.1.2-.2.4-.1.1-.2.2-.3.4.4.6.1 1.2-.3 1.8.4.6.4 1-.2 1.9.7.6.6 1.2-.3 2.2.5.1.9.2 1.4.3h1c.9 0 .9 0 1.4-1 .5-1.2 1.1-2.4 1.5-3.4-.2-.4-.4-.6-.5-.9-.5-1.1-1-2.2-1.6-3.2-.5-.9-2-.7-2.6.3-.2.4 0 .8.3.9.4 0 .9 0 1.5.1z" />
                                  <path class="st16" d="M37.5 244c-.3-.1-.6-.2-.8-.4-.4-.2-.6.1-.8.4-.2.4-.2.7.2.9.6.3 1.2.5 1.8.8.4.2.6-.1.8-.5.2-.4.2-.7-.2-.9-.4 0-.7-.2-1-.3zm-.4-.5c.3.1.6.3.9.4.4.2.6-.1.8-.5.2-.4.2-.7-.2-.9-.6-.3-1.2-.5-1.8-.8-.4-.2-.6.1-.8.5-.2.4-.2.7.2.9.3.1.6.2.9.4zm-.2 3.8c.3.1.6.3.9.4.4.2.6-.1.7-.5.2-.4.2-.7-.2-.9-.6-.3-1.2-.5-1.8-.8-.4-.2-.6.1-.8.5-.2.4-.2.7.2.9.5.1.8.3 1 .4zm2.3-5.8c-.5-.2-.8-.6-.5-1.2-1-.7-2-.2-2.2 1 .6.3 1.3.6 2 .9.4.1.5-.3.7-.7z" />
                                </g>
                                <path class="st5" d="M67 245.7c-3.6 0-6.6-3.8-6.6-7.4v-1.9c0-3.6 3-6.6 6.6-6.6 3.6 0 6.6 3 6.6 6.6v1.9c-.1 3.6-3 7.4-6.6 7.4z" />
                                <path class="st15" d="M58.3 267.8c3.2.7 6.3 1.9 9.6 2.1 2.7.1 5.7-.9 8.4-1.7-.1-.9-.2-1.7-.3-1.9l1.5-12c0-4.1 1.3-8.5-3.1-8.5l-7 1.5c-4.4 0-10.9-3-10.9 1.2l1.8 18.2v1.1z" />
                                <path class="st5" d="M71.6 272.9c1.4-.2 2.7-.5 4-.9-.3 0-.5-.1-.8-.1l-2.7.6c-.2.1-.3.2-.5.4z" />
                                <path class="st15" d="M63 299.2s1-6.3.6-8.5c2.2-4.2 2.6-14.7 2.6-14.7.2-2-2.5-4.1-4.4-4.2-1.9-.1-4 .6-4.2 2.6 0 0 .8 1.5-.6 5.2s.4 9.1-.6 11.2c-1 2.2 0 8.1 0 8.1 2.3.1 4.3.4 6.6.3zm8 .6v-10L67.9 276c-.2-2 2.5-4.1 4.4-4.2s4 .6 4.2 2.6l2 16.8-.2 6.9c-2.3 0-5 1.8-7.3 1.7zm-24.7-44.9l-.8-.1c.7 1.7 1.5 2.4 3.8 2 2.3-.4 6.8-3.8 10.6-3.8 1.9-.5 2.1-2.8 1.3-4.4 0 0-2.3-2.8-4-2.1 0 0-1.2.7-1.7 1.2-3.5-.8-5.5 1.9-5.5 1.9-1.6.7-4.5 3.6-3.7 5.3zm40.1 3.2l.8.1c-1.2 1.3-2.2 1.7-4.3.6-2-1.1-5.1-5.8-8.7-7.1-1.6-1.1-1-3.3.2-4.6 0 0 3.1-1.9 4.4-.7 0 0 .9 1 1.2 1.7 3.5.3 4.6 3.6 4.6 3.6 1.3 1.3 3 5.1 1.8 6.4z" />
                                <path class="st15" d="M94.3 258.4c-.4 1.8-1.8 2.9-3.1 2.6l-7.4-1.8c-1.3-.3-1.7-1.7-1.3-3.5 0 0 1.5-3.2 2.8-2.9l7.4 1.8c1.3.3 2 2 1.6 3.8zm-43.8-7.9l-4.4-4.5c-1.3 1.8-2.7 3.5-4.2 5.2l3.9 4c1.3 1.3 3.4 1.3 4.7 0 1.3-1.3 1.3-3.4 0-4.7z" />
                                <path class="st3" d="M68.1 238.1l.3 7.1c2.6-.1 6-2 6-2l-.9-7.3s1-7.9-6.6-7.8c-7.6-.1-6.6 7.8-6.6 7.8l-.6 7.7s3.8 1.9 5.5 1.7l.7-6.9" />
                                <path class="st16" d="M73.6 235.8s1-7.7-6.4-7.8v10.1l1-.1.3 7.1c2.6-.1 6-2 6-2l-.9-7.3z" />
                                <path class="st3" d="M50.1 249.4l-5.8 5.6-5.4-6.2 5.2-5z" />
                                <path class="st16" d="M41.3 246.5l-2.4 2.3 5.4 6.1 2.6-2.5c-2.2-1.5-4.1-3.7-5.6-5.9z" />
                                <path class="st3" d="M67.2 272l-10.8-4.5.7-2.5s-.7-7.5-.9-9.5c2.8-3.2.4-9.4.4-9.4l3.3-1.2s1 3.6 7.3 3.6V272z" />
                                <path class="st16" d="M67.2 272l10.8-4.5-.7-2.5s.7-7.5.9-9.5c-2.8-3.2-.4-9.4-.4-9.4l-3.3-1.2s-1 3.6-7.3 3.6V272z" />
                                <path class="c-infographic__text--orange" d="M60 233.2l-.3 4.7s-5.8-2.9-3.5-10.4c1.3 4.7 3.8 5.7 3.8 5.7zm14.1 0l.3 4.7s5.8-2.9 3.5-10.4c-1.3 4.7-3.8 5.7-3.8 5.7z" />
                                <path class="st5" d="M72.1 237.3c-3.7 2.4-6.4 2.4-10.1 0 0-.8 0-1.2-.1-2 3.8 2.5 6.5 2.5 10.3 0-.1.8-.1 1.2-.1 2z" />
                                <path class="st3" d="M65.5 236.5l1.6 1.8 1.5-1.8-1.6-2z" />
                                <path class="st16" d="M73.3 271.2l-6.1 2.2-6.2-2.2 1.2 18.1s3.1-1.2 4.1-.8 1.4.8 2.5.8c1.1-.1 3.4-1.5 3.4-1.5l1.1-16.6z" />
                                <path class="st3" d="M77.2 269.8l-4.1 1.5 3.4 15.5 1-2 1.3-.3-1.8-12.9zm-20 .1l4 1.5-3.3 16.6-1-2-2.3-.6 2.7-13.7z" />
                                <path class="c-infographic__text--orange" d="M78.5 301.3s-1.5 8.2-.7 8.6c1.3 2.1 2.5 4.1 4.2 4.9s2.1 2.9.6 3.6c-1 .1-9 1.6-9.9-1.2-.6-1.7-2.9-.9-3.1-1.6-.2-.7-.7-2.9.9-5.5.1-1.3-.4-8.5-.4-8.5l8.4-.3z" />
                                <path class="st17" d="M72.1 312.9c-.5-2-1-6.5.7-8.1 1.2-1.1 3.4-1.1 5.2-.9.2-1.5.4-2.7.4-2.7l-8.3.3s.5 7.1.4 8.5c-1.6 2.6-1.1 4.9-.9 5.5.2.7 2.6-.2 3.1 1.6.1.4.3.6.6.9-.5-2-.9-4.2-1.2-5.1z" />
                                <path class="c-infographic__text--orange" d="M81 301.8c-3.6 2.9-10.4 1.9-11.7.1 0 0 .5-1.2.6-2.6.1-1.2-.4-2.7.3-2.8 1.5-.2 8.2-.1 9.5 0 .7 0 .4.7.4 1.6-.1.9.9 3.7.9 3.7zm-24.9-.5s1.5 8.2.7 8.6c-1.3 2.1-2.5 4.1-4.2 4.9-1.7.8-2.1 2.9-.6 3.6 1 .1 9 1.6 9.9-1.2.6-1.7 2.9-.9 3.1-1.6.2-.7.7-2.9-.9-5.5-.1-1.3.4-8.5.4-8.5l-8.4-.3z" />
                                <path class="st17" d="M62.5 312.9c.5-2 1.3-7-.5-8.5-2.2-.2-3.6-.1-5.5-.5-.2-1.5-.4-2.7-.4-2.7l8.3.3s-.5 7.1-.4 8.5c1.6 2.6 1.1 4.9.9 5.5-.2.7-2.6-.2-3.1 1.6-.1.4-.3.6-.6.9.6-2 1.1-4.2 1.3-5.1z" />
                                <path class="c-infographic__text--orange" d="M54.4 302.6c4.2 1.2 9.6 1.1 10.9-.7 0 0-.5-1.2-.6-2.6-.1-1.2-.2-3.3-.9-3.1-2.8.9-6.8-.1-8.1 0-.7 0-.4.7-.4 1.6.1 1-.9 4.8-.9 4.8z" />
                                <g id="_x34_gV3go_10_">
                                  <path class="st16" d="M98 256.1c-.2.3-.2.3.7.9 0 .1-.1.3-.1.4 0 .1 0 .3-.1.5-.7.2-.9.8-.9 1.5-.7.2-.9.4-1.1 1.5-.9 0-1.3.5-1.2 1.9-.4-.2-.8-.4-1.2-.7-.3-.2-.5-.4-.7-.6-.7-.6-.7-.6-.3-1.7.4-1.2.8-2.5 1.1-3.6.4-.1.7-.2 1-.3 1.1-.5 2.2-1 3.3-1.4 1-.4 2 .8 1.7 2-.1.5-.5.6-.8.5-.5-.3-.9-.6-1.4-.9z" />
                                  <path class="st16" d="M99 260.2l.9.3c.4.1.4.5.3.9-.1.4-.3.7-.7.5-.6-.2-1.3-.4-1.9-.6-.4-.1-.4-.5-.3-.9.1-.4.3-.7.7-.5.3.1.6.2 1 .3zm.6-.2c-.3-.1-.6-.2-1-.3-.4-.1-.4-.5-.3-.9.1-.4.3-.7.7-.6.6.2 1.3.4 1.9.6.4.1.4.5.3.9-.1.4-.3.6-.7.5-.3 0-.6-.1-.9-.2zm-2.4 3c-.3-.1-.6-.2-1-.3-.4-.1-.3-.5-.2-.9.1-.4.3-.7.7-.5.6.2 1.2.4 1.9.6.4.1.4.5.3.9-.1.4-.4.7-.8.5l-.9-.3zm2.1-5.8c.5.2 1 .1 1.2-.6 1.2.2 1.7 1.2 1 2.2l-2.1-.6c-.4-.3-.3-.6-.1-1z" />
                                </g>
                                <path class="st3" d="M73.1 246.5l4.7-5.4.5 1.9s4-.6 6.8 5.7c-1.4.7-7.8 2.1-9.9 1.1s-2.1-3.3-2.1-3.3zm13.4 6.1l-1.5 7.9 8.1 1.2 1.4-7.1z" />
                                <path class="st16" d="M85.5 257.7l-.5 2.7 8.1 1.2.5-2.5c-.1 0-6.3-.9-8.1-1.4z" />
                                <path class="c-infographic__text--orange" d="M64.4 273c0-1.6 1.3-.3 2.9-.3 1.6 0 2.9-1.3 2.9.3s-1.3 2.9-2.9 2.9c-1.6 0-2.9-1.3-2.9-2.9z" />
                                <ellipse class="st5" cx="62.2" cy="291.9" rx=".4" ry=".8" />
                                <ellipse class="st5" cx="61" cy="293.5" rx=".3" ry=".5" />
                                <ellipse transform="rotate(-15 76.918 288.472)" class="st5" cx="76.9" cy="288.5" rx=".3" ry=".5" />
                                <ellipse transform="rotate(-15 76.418 290.39)" class="st5" cx="76.4" cy="290.4" rx=".3" ry=".5" />
                                <ellipse transform="rotate(-15 75.252 287.556)" class="st5" cx="75.3" cy="287.6" rx=".3" ry=".6" />
                                <ellipse transform="rotate(-23 53.56 250.217)" class="st5" cx="53.6" cy="250.2" rx=".5" ry=".3" />
                                <ellipse transform="rotate(-26 54.336 248.715)" class="st5" cx="54.3" cy="248.7" rx=".5" ry=".3" />
                                <ellipse transform="rotate(-43 82.77 251.9)" class="st5" cx="82.8" cy="251.9" rx=".3" ry=".5" />
                                <ellipse class="st14" cx="157" cy="316.2" rx="26.2" ry="1.9" />
                                <path class="st15" d="M136.628 236.4844l11.0198 2.503-.576 2.5355-11.0197-2.503z" />
                                <path class="st15" d="M140.2776 238.4748l2.7306.6202-3.101 13.6528-2.7306-.6202z" />
                                <ellipse transform="rotate(-77 138.027 253.887)" class="st15" cx="138" cy="253.9" rx="2.6" ry="2.6" />
                                <path class="st14" d="M145 237.5l-5.4-1.3 5.7-28.4 5.2-5.5 1.6 7z" />
                                <path class="st15" d="M145 237.5l-2.2-2.9 7.7-32.3 1.6 7z" />
                                <g id="_x34_gV3go_8_">
                                  <path class="st16" d="M142.5 241.5c-.1.4-.1.4-1.1.2-.1.1-.1.2-.2.4-.1.1-.2.2-.3.4.4.6.1 1.2-.3 1.8.4.6.4 1-.2 1.9.7.6.6 1.2-.3 2.2.5.1.9.2 1.4.3h1c.9 0 .9 0 1.4-1 .5-1.2 1.1-2.4 1.5-3.4-.2-.4-.4-.6-.5-.9-.5-1.1-1-2.2-1.6-3.2-.5-.9-2-.7-2.6.3-.2.4 0 .8.3.9.4 0 .9 0 1.5.1z" />
                                  <path class="st16" d="M139.1 244c-.3-.1-.6-.2-.8-.4-.4-.2-.6.1-.8.4-.2.4-.2.7.2.9.6.3 1.2.5 1.8.8.4.2.6-.1.8-.5.2-.4.2-.7-.2-.9-.4 0-.7-.2-1-.3zm-.4-.5c.3.1.6.3.9.4.4.2.6-.1.8-.5.2-.4.2-.7-.2-.9-.6-.3-1.2-.5-1.8-.8-.4-.2-.6.1-.8.5-.2.4-.2.7.2.9.3.1.6.2.9.4zm-.2 3.8c.3.1.6.3.9.4.4.2.6-.1.7-.5.2-.4.2-.7-.2-.9-.6-.3-1.2-.5-1.8-.8-.4-.2-.6.1-.8.5-.2.4-.2.7.2.9.5.1.8.3 1 .4zm2.3-5.8c-.5-.2-.8-.6-.5-1.2-1-.7-2-.2-2.2 1 .6.3 1.3.6 2 .9.4.1.5-.3.7-.7z" />
                                </g>
                                <path class="st5" d="M168.6 245.7c-3.6 0-6.6-3.8-6.6-7.4v-1.9c0-3.6 3-6.6 6.6-6.6 3.6 0 6.6 3 6.6 6.6v1.9c-.1 3.6-3 7.4-6.6 7.4z" />
                                <path class="st15" d="M159.9 267.8c3.2.7 6.3 1.9 9.6 2.1 2.7.1 5.7-.9 8.4-1.7-.1-.9-.2-1.7-.3-1.9l1.5-12c0-4.1 1.3-8.5-3.1-8.5l-7 1.5c-4.4 0-10.9-3-10.9 1.2l1.8 18.2v1.1z" />
                                <path class="st5" d="M173.2 272.9c1.4-.2 2.7-.5 4-.9-.3 0-.5-.1-.8-.1l-2.7.6c-.2.1-.3.2-.5.4z" />
                                <path class="st15" d="M164.6 299.2s1-6.3.6-8.5c2.2-4.2 2.6-14.7 2.6-14.7.2-2-2.5-4.1-4.4-4.2s-4 .6-4.2 2.6c0 0 .8 1.5-.6 5.2s.4 9.1-.6 11.2c-1 2.2 0 8.1 0 8.1 2.3.1 4.3.4 6.6.3zm8 .6v-10l-3.1-13.8c-.2-2 2.5-4.1 4.4-4.2s4 .6 4.2 2.6l2 16.8-.2 6.9c-2.3 0-5 1.8-7.3 1.7zm-24.7-44.9l-.8-.1c.7 1.7 1.5 2.4 3.8 2s6.8-3.8 10.6-3.8c1.9-.5 2.1-2.8 1.3-4.4 0 0-2.3-2.8-4-2.1 0 0-1.2.7-1.7 1.2-3.5-.8-5.5 1.9-5.5 1.9-1.6.7-4.5 3.6-3.7 5.3zm40.1 3.2l.8.1c-1.2 1.3-2.2 1.7-4.3.6s-5.1-5.8-8.7-7.1c-1.6-1.1-1-3.3.2-4.6 0 0 3.1-1.9 4.4-.7 0 0 .9 1 1.2 1.7 3.5.3 4.6 3.6 4.6 3.6 1.3 1.3 3 5.1 1.8 6.4z" />
                                <path class="st15" d="M195.9 258.4c-.4 1.8-1.8 2.9-3.1 2.6l-7.4-1.8c-1.3-.3-1.7-1.7-1.3-3.5 0 0 1.5-3.2 2.8-2.9l7.4 1.8c1.3.3 2 2 1.6 3.8zm-43.8-7.9l-4.4-4.5c-1.3 1.8-2.7 3.5-4.2 5.2l3.9 4c1.3 1.3 3.4 1.3 4.7 0 1.3-1.3 1.3-3.4 0-4.7z" />
                                <path class="st3" d="M169.7 238.1l.3 7.1c2.6-.1 6-2 6-2l-.9-7.3s1-7.9-6.6-7.8c-7.6-.1-6.6 7.8-6.6 7.8l-.6 7.7s3.8 1.9 5.5 1.7l.7-6.9" />
                                <path class="st16" d="M175.2 235.8s1-7.7-6.4-7.8v10.1l1-.1.3 7.1c2.6-.1 6-2 6-2l-.9-7.3z" />
                                <path class="st3" d="M151.7 249.4l-5.8 5.6-5.4-6.2 5.2-5z" />
                                <path class="st16" d="M142.9 246.5l-2.4 2.3 5.4 6.1 2.6-2.5c-2.2-1.5-4.1-3.7-5.6-5.9z" />
                                <path class="st3" d="M168.8 272l-10.8-4.5.7-2.5s-.7-7.5-.9-9.5c2.8-3.2.4-9.4.4-9.4l3.3-1.2s1 3.6 7.3 3.6V272z" />
                                <path class="st16" d="M168.8 272l10.8-4.5-.7-2.5s.7-7.5.9-9.5c-2.8-3.2-.4-9.4-.4-9.4l-3.3-1.2s-1 3.6-7.3 3.6V272z" />
                                <path class="c-infographic__text--orange" d="M161.6 233.2l-.3 4.7s-5.8-2.9-3.5-10.4c1.3 4.7 3.8 5.7 3.8 5.7zm14.1 0l.3 4.7s5.8-2.9 3.5-10.4c-1.3 4.7-3.8 5.7-3.8 5.7z" />
                                <path class="st5" d="M173.7 237.3c-3.7 2.4-6.4 2.4-10.1 0 0-.8 0-1.2-.1-2 3.8 2.5 6.5 2.5 10.3 0-.1.8-.1 1.2-.1 2z" />
                                <path class="st3" d="M167.1 236.5l1.6 1.8 1.5-1.8-1.6-2z" />
                                <path class="st16" d="M174.9 271.2l-6.1 2.2-6.2-2.2 1.2 18.1s3.1-1.2 4.1-.8c1 .5 1.4.8 2.5.8 1.1-.1 3.4-1.5 3.4-1.5l1.1-16.6z" />
                                <path class="st3" d="M178.8 269.8l-4.1 1.5 3.4 15.5 1-2 1.3-.3-1.8-12.9zm-20 .1l4 1.5-3.3 16.6-1-2-2.3-.6 2.7-13.7z" />
                                <path class="c-infographic__text--orange" d="M180.1 301.3s-1.5 8.2-.7 8.6c1.3 2.1 2.5 4.1 4.2 4.9 1.7.8 2.1 2.9.6 3.6-1 .1-9 1.6-9.9-1.2-.6-1.7-2.9-.9-3.1-1.6-.2-.7-.7-2.9.9-5.5.1-1.3-.4-8.5-.4-8.5l8.4-.3z" />
                                <path class="st17" d="M173.7 312.9c-.5-2-1-6.5.7-8.1 1.2-1.1 3.4-1.1 5.2-.9.2-1.5.4-2.7.4-2.7l-8.3.3s.5 7.1.4 8.5c-1.6 2.6-1.1 4.9-.9 5.5.2.7 2.6-.2 3.1 1.6.1.4.3.6.6.9-.5-2-.9-4.2-1.2-5.1z" />
                                <path class="c-infographic__text--orange" d="M182.6 301.8c-3.6 2.9-10.4 1.9-11.7.1 0 0 .5-1.2.6-2.6.1-1.2-.4-2.7.3-2.8 1.5-.2 8.2-.1 9.5 0 .7 0 .4.7.4 1.6-.1.9.9 3.7.9 3.7zm-24.9-.5s1.5 8.2.7 8.6c-1.3 2.1-2.5 4.1-4.2 4.9-1.7.8-2.1 2.9-.6 3.6 1 .1 9 1.6 9.9-1.2.6-1.7 2.9-.9 3.1-1.6.2-.7.7-2.9-.9-5.5-.1-1.3.4-8.5.4-8.5l-8.4-.3z" />
                                <path class="st17" d="M164.1 312.9c.5-2 1.3-7-.5-8.5-2.2-.2-3.6-.1-5.5-.5-.2-1.5-.4-2.7-.4-2.7l8.3.3s-.5 7.1-.4 8.5c1.6 2.6 1.1 4.9.9 5.5-.2.7-2.6-.2-3.1 1.6-.1.4-.3.6-.6.9.6-2 1.1-4.2 1.3-5.1z" />
                                <path class="c-infographic__text--orange" d="M156 302.6c4.2 1.2 9.6 1.1 10.9-.7 0 0-.5-1.2-.6-2.6-.1-1.2-.2-3.3-.9-3.1-2.8.9-6.8-.1-8.1 0-.7 0-.4.7-.4 1.6.1 1-.9 4.8-.9 4.8z" />
                                <g id="_x34_gV3go_6_">
                                  <path class="st16" d="M199.6 256.1c-.2.3-.2.3.7.9 0 .1-.1.3-.1.4 0 .1 0 .3-.1.5-.7.2-.9.8-.9 1.5-.7.2-.9.4-1.1 1.5-.9 0-1.3.5-1.2 1.9-.4-.2-.8-.4-1.2-.7-.3-.2-.5-.4-.7-.6-.7-.6-.7-.6-.3-1.7.4-1.2.8-2.5 1.1-3.6.4-.1.7-.2 1-.3 1.1-.5 2.2-1 3.3-1.4 1-.4 2 .8 1.7 2-.1.5-.5.6-.8.5-.5-.3-.9-.6-1.4-.9z" />
                                  <path class="st16" d="M200.5 260.2l.9.3c.4.1.4.5.3.9-.1.4-.3.7-.7.5-.6-.2-1.3-.4-1.9-.6-.4-.1-.4-.5-.3-.9.1-.4.3-.7.7-.5.4.1.7.2 1 .3zm.7-.2c-.3-.1-.6-.2-1-.3-.4-.1-.4-.5-.3-.9.1-.4.3-.7.7-.6.6.2 1.3.4 1.9.6.4.1.4.5.3.9-.1.4-.3.6-.7.5-.3 0-.6-.1-.9-.2zm-2.4 3c-.3-.1-.6-.2-1-.3-.4-.1-.3-.5-.2-.9.1-.4.3-.7.7-.5.6.2 1.2.4 1.9.6.4.1.4.5.3.9-.1.4-.4.7-.8.5l-.9-.3zm2.1-5.8c.5.2 1 .1 1.2-.6 1.2.2 1.7 1.2 1 2.2l-2.1-.6c-.4-.3-.3-.6-.1-1z" />
                                </g>
                                <path class="st3" d="M174.7 246.5l4.7-5.4.5 1.9s4-.6 6.8 5.7c-1.4.7-7.8 2.1-9.9 1.1-2.3-1-2.1-3.3-2.1-3.3zm13.4 6.1l-1.5 7.9 8.1 1.2 1.4-7.1z" />
                                <path class="st16" d="M187.1 257.7l-.5 2.7 8.1 1.2.5-2.5c-.1 0-6.3-.9-8.1-1.4z" />
                                <path class="c-infographic__text--orange" d="M166 273c0-1.6 1.3-.3 2.9-.3 1.6 0 2.9-1.3 2.9.3s-1.3 2.9-2.9 2.9c-1.6 0-2.9-1.3-2.9-2.9z" />
                                <ellipse class="st5" cx="163.8" cy="291.9" rx=".4" ry=".8" />
                                <ellipse class="st5" cx="162.6" cy="293.5" rx=".3" ry=".5" />
                                <ellipse transform="rotate(-15 178.503 288.477)" class="st5" cx="178.5" cy="288.5" rx=".3" ry=".5" />
                                <ellipse transform="rotate(-15 178.003 290.393)" class="st5" cx="178" cy="290.4" rx=".3" ry=".5" />
                                <ellipse transform="rotate(-15 176.836 287.56)" class="st5" cx="176.9" cy="287.6" rx=".3" ry=".6" />
                                <ellipse transform="rotate(-23 155.144 250.223)" class="st5" cx="155.2" cy="250.2" rx=".5" ry=".3" />
                                <ellipse transform="rotate(-26 155.933 248.718)" class="st5" cx="155.9" cy="248.7" rx=".5" ry=".3" />
                                <ellipse transform="rotate(-43 184.36 251.9)" class="st5" cx="184.4" cy="251.9" rx=".3" ry=".5" />
                                <ellipse class="st14" cx="260.6" cy="316.2" rx="26.2" ry="1.9" />
                                <path class="st15" d="M240.2316 236.4873l11.0198 2.503-.576 2.5355-11.0197-2.503z" />
                                <path class="st15" d="M243.8812 238.4777l2.7305.6202-3.101 13.652-2.7305-.62z" />
                                <ellipse transform="rotate(-77 241.62 253.887)" class="st15" cx="241.6" cy="253.9" rx="2.6" ry="2.6" />
                                <path class="st14" d="M248.6 237.5l-5.4-1.3 5.7-28.4 5.2-5.5 1.6 7z" />
                                <path class="st15" d="M248.6 237.5l-2.2-2.9 7.7-32.3 1.6 7z" />
                                <g id="_x34_gV3go_3_">
                                  <path class="st16" d="M246.1 241.5c-.1.4-.1.4-1.1.2-.1.1-.1.2-.2.4-.1.1-.2.2-.3.4.4.6.1 1.2-.3 1.8.4.6.4 1-.2 1.9.7.6.6 1.2-.3 2.2.5.1.9.2 1.4.3h1c.9 0 .9 0 1.4-1 .5-1.2 1.1-2.4 1.5-3.4-.2-.4-.4-.6-.5-.9-.5-1.1-1-2.2-1.6-3.2-.5-.9-2-.7-2.6.3-.2.4 0 .8.3.9.4 0 .9 0 1.5.1z" />
                                  <path class="st16" d="M242.7 244c-.3-.1-.6-.2-.8-.4-.4-.2-.6.1-.8.4-.2.4-.2.7.2.9.6.3 1.2.5 1.8.8.4.2.6-.1.8-.5.2-.4.2-.7-.2-.9-.4 0-.7-.2-1-.3zm-.4-.5c.3.1.6.3.9.4.4.2.6-.1.8-.5.2-.4.2-.7-.2-.9-.6-.3-1.2-.5-1.8-.8-.4-.2-.6.1-.8.5-.2.4-.2.7.2.9.3.1.6.2.9.4zm-.2 3.8c.3.1.6.3.9.4.4.2.6-.1.7-.5.2-.4.2-.7-.2-.9-.6-.3-1.2-.5-1.8-.8-.4-.2-.6.1-.8.5-.2.4-.2.7.2.9.5.1.7.3 1 .4zm2.3-5.8c-.5-.2-.8-.6-.5-1.2-1-.7-2-.2-2.2 1 .6.3 1.3.6 2 .9.4.1.5-.3.7-.7z" />
                                </g>
                                <path class="st5" d="M272.2 245.7c-3.6 0-6.6-3.8-6.6-7.4v-1.9c0-3.6 3-6.6 6.6-6.6 3.6 0 6.6 3 6.6 6.6v1.9c-.1 3.6-3 7.4-6.6 7.4z" />
                                <path class="st15" d="M263.5 267.8c3.2.7 6.3 1.9 9.6 2.1 2.7.1 5.7-.9 8.4-1.7-.1-.9-.2-1.7-.3-1.9l1.5-12c0-4.1 1.3-8.5-3.1-8.5l-7 1.5c-4.4 0-10.9-3-10.9 1.2l1.8 18.2v1.1z" />
                                <path class="st5" d="M276.8 272.9c1.4-.2 2.7-.5 4-.9-.3 0-.5-.1-.8-.1l-2.7.6c-.2.1-.3.2-.5.4z" />
                                <path class="st15" d="M268.2 299.2s1-6.3.6-8.5c2.2-4.2 2.6-14.7 2.6-14.7.2-2-2.5-4.1-4.4-4.2-1.9-.1-4 .6-4.2 2.6 0 0 .8 1.5-.6 5.2-1.5 3.7.4 9.1-.6 11.2-1 2.2 0 8.1 0 8.1 2.3.1 4.3.4 6.6.3zm8 .6v-10l-3.1-13.8c-.2-2 2.5-4.1 4.4-4.2 1.9-.1 4 .6 4.2 2.6l2 16.8-.2 6.9c-2.3 0-5 1.8-7.3 1.7zm-24.8-44.9l-.8-.1c.7 1.7 1.5 2.4 3.8 2 2.3-.4 6.8-3.8 10.6-3.8 1.9-.5 2.1-2.8 1.3-4.4 0 0-2.3-2.8-4-2.1 0 0-1.2.7-1.7 1.2-3.5-.8-5.5 1.9-5.5 1.9-1.5.7-4.4 3.6-3.7 5.3zm40.2 3.2l.8.1c-1.2 1.3-2.2 1.7-4.3.6-2-1.1-5.1-5.8-8.7-7.1-1.6-1.1-1-3.3.2-4.6 0 0 3.1-1.9 4.4-.7 0 0 .9 1 1.2 1.7 3.5.3 4.6 3.6 4.6 3.6 1.3 1.3 3 5.1 1.8 6.4z" />
                                <path class="st15" d="M299.4 258.4c-.4 1.8-1.8 2.9-3.1 2.6l-7.4-1.8c-1.3-.3-1.7-1.7-1.3-3.5 0 0 1.5-3.2 2.8-2.9l7.4 1.8c1.3.3 2.1 2 1.6 3.8zm-43.7-7.9l-4.4-4.5c-1.3 1.8-2.7 3.5-4.2 5.2l3.9 4c1.3 1.3 3.4 1.3 4.7 0 1.3-1.3 1.3-3.4 0-4.7z" />
                                <path class="st3" d="M273.3 238.1l.3 7.1c2.6-.1 6-2 6-2l-.9-7.3s1-7.9-6.6-7.8c-7.6-.1-6.6 7.8-6.6 7.8l-.6 7.7s3.8 1.9 5.5 1.7l.7-6.9" />
                                <path class="st16" d="M278.8 235.8s1-7.7-6.4-7.8v10.1l1-.1.3 7.1c2.6-.1 6-2 6-2l-.9-7.3z" />
                                <path class="st3" d="M255.3 249.4l-5.8 5.6-5.4-6.2 5.1-5z" />
                                <path class="st16" d="M246.4 246.5l-2.4 2.3 5.4 6.1 2.6-2.5c-2.1-1.5-4-3.7-5.6-5.9z" />
                                <path class="st3" d="M272.4 272l-10.8-4.5.7-2.5s-.7-7.5-.9-9.5c2.8-3.2.4-9.4.4-9.4l3.3-1.2s1 3.6 7.3 3.6V272z" />
                                <path class="st16" d="M272.4 272l10.8-4.5-.7-2.5s.7-7.5.9-9.5c-2.8-3.2-.4-9.4-.4-9.4l-3.3-1.2s-1 3.6-7.3 3.6V272z" />
                                <path class="c-infographic__text--orange" d="M265.2 233.2l-.3 4.7s-5.8-2.9-3.5-10.4c1.2 4.7 3.8 5.7 3.8 5.7zm14.1 0l.3 4.7s5.8-2.9 3.5-10.4c-1.3 4.7-3.8 5.7-3.8 5.7z" />
                                <path class="st5" d="M277.3 237.3c-3.7 2.4-6.4 2.4-10.1 0 0-.8 0-1.2-.1-2 3.8 2.5 6.5 2.5 10.3 0-.1.8-.1 1.2-.1 2z" />
                                <path class="st3" d="M270.7 236.5l1.6 1.8 1.4-1.8-1.5-2z" />
                                <path class="st16" d="M278.5 271.2l-6.1 2.2-6.2-2.2 1.2 18.1s3.1-1.2 4.1-.8 1.4.8 2.5.8c1.1-.1 3.4-1.5 3.4-1.5l1.1-16.6z" />
                                <path class="st3" d="M282.4 269.8l-4.1 1.5 3.4 15.5 1-2 1.3-.3-1.8-12.9zm-20 .1l4 1.5-3.3 16.6-1-2-2.3-.6 2.7-13.7z" />
                                <path class="c-infographic__text--orange" d="M283.7 301.3s-1.5 8.2-.7 8.6c1.3 2.1 2.5 4.1 4.2 4.9 1.7.8 2.1 2.9.6 3.6-1 .1-9 1.6-9.9-1.2-.6-1.7-2.9-.9-3.1-1.6-.2-.7-.7-2.9.9-5.5.1-1.3-.4-8.5-.4-8.5l8.4-.3z" />
                                <path class="st17" d="M277.3 312.9c-.5-2-1-6.5.7-8.1 1.2-1.1 3.4-1.1 5.2-.9.2-1.5.4-2.7.4-2.7l-8.3.3s.5 7.1.4 8.5c-1.6 2.6-1.1 4.9-.9 5.5.2.7 2.6-.2 3.1 1.6.1.4.3.6.6.9-.5-2-1-4.2-1.2-5.1z" />
                                <path class="c-infographic__text--orange" d="M286.2 301.8c-3.6 2.9-10.4 1.9-11.7.1 0 0 .5-1.2.6-2.6.1-1.2-.4-2.7.3-2.8 1.5-.2 8.2-.1 9.5 0 .7 0 .4.7.4 1.6-.1.9.9 3.7.9 3.7zm-24.9-.5s1.5 8.2.7 8.6c-1.3 2.1-2.5 4.1-4.2 4.9-1.7.8-2.1 2.9-.6 3.6 1 .1 9 1.6 9.9-1.2.6-1.7 2.9-.9 3.1-1.6.2-.7.7-2.9-.9-5.5-.1-1.3.4-8.5.4-8.5l-8.4-.3z" />
                                <path class="st17" d="M267.7 312.9c.5-2 1.3-7-.5-8.5-2.2-.2-3.6-.1-5.5-.5-.2-1.5-.4-2.7-.4-2.7l8.3.3s-.5 7.1-.4 8.5c1.6 2.6 1.1 4.9.9 5.5-.2.7-2.6-.2-3.1 1.6-.1.4-.3.6-.6.9.6-2 1.1-4.2 1.3-5.1z" />
                                <path class="c-infographic__text--orange" d="M259.6 302.6c4.2 1.2 9.6 1.1 10.9-.7 0 0-.5-1.2-.6-2.6-.1-1.2-.2-3.3-.9-3.1-2.8.9-6.8-.1-8.1 0-.7 0-.4.7-.4 1.6.1 1-.9 4.8-.9 4.8z" />
                                <g id="_x34_gV3go_1_">
                                  <path class="st16" d="M303.2 256.1c-.2.3-.2.3.7.9 0 .1-.1.3-.1.4 0 .1 0 .3-.1.5-.7.2-.9.8-.9 1.5-.7.2-.9.4-1.1 1.5-.9 0-1.3.5-1.2 1.9-.4-.2-.8-.4-1.2-.7-.3-.2-.5-.4-.7-.6-.7-.6-.7-.6-.3-1.7.4-1.2.8-2.5 1.1-3.6.4-.1.7-.2 1-.3 1.1-.5 2.2-1 3.3-1.4 1-.4 2 .8 1.7 2-.1.5-.5.6-.8.5-.5-.3-.9-.6-1.4-.9z" />
                                  <path class="st16" d="M304.1 260.2l.9.3c.4.1.4.5.3.9-.1.4-.3.7-.7.5-.6-.2-1.3-.4-1.9-.6-.4-.1-.4-.5-.3-.9.1-.4.3-.7.7-.5.4.1.7.2 1 .3zm.7-.2c-.3-.1-.6-.2-1-.3-.4-.1-.4-.5-.3-.9.1-.4.3-.7.7-.6.6.2 1.3.4 1.9.6.4.1.4.5.3.9-.1.4-.3.6-.7.5-.3 0-.6-.1-.9-.2zm-2.5 3c-.3-.1-.6-.2-1-.3-.4-.1-.3-.5-.2-.9.1-.4.3-.7.7-.5.6.2 1.2.4 1.9.6.4.1.4.5.3.9-.1.4-.4.7-.8.5-.2-.1-.5-.2-.9-.3zm2.2-5.8c.5.2 1 .1 1.2-.6 1.2.2 1.7 1.2 1 2.2l-2.1-.6c-.4-.3-.3-.6-.1-1z" />
                                </g>
                                <path class="st3" d="M278.3 246.5l4.7-5.4.5 1.9s4-.6 6.8 5.7c-1.4.7-7.8 2.1-9.9 1.1s-2.1-3.3-2.1-3.3zm13.4 6.1l-1.5 7.9 8.1 1.2 1.4-7.1z" />
                                <path class="st16" d="M290.7 257.7l-.5 2.7 8.1 1.2.5-2.5c-.1 0-6.3-.9-8.1-1.4z" />
                                <path class="c-infographic__text--orange" d="M269.6 273c0-1.6 1.3-.3 2.9-.3s2.9-1.3 2.9.3-1.3 2.9-2.9 2.9-2.9-1.3-2.9-2.9z" />
                                <ellipse class="st5" cx="267.4" cy="291.9" rx=".4" ry=".8" />
                                <ellipse class="st5" cx="266.2" cy="293.5" rx=".3" ry=".5" />
                                <ellipse transform="rotate(-15 282.087 288.482)" class="st5" cx="282.1" cy="288.5" rx=".3" ry=".5" />
                                <ellipse transform="rotate(-15 281.587 290.398)" class="st5" cx="281.6" cy="290.4" rx=".3" ry=".5" />
                                <ellipse transform="rotate(-15 280.42 287.565)" class="st5" cx="280.5" cy="287.6" rx=".3" ry=".6" />
                                <ellipse transform="rotate(-23 258.726 250.23)" class="st5" cx="258.8" cy="250.2" rx=".5" ry=".3" />
                                <ellipse transform="rotate(-26 259.53 248.72)" class="st5" cx="259.5" cy="248.7" rx=".5" ry=".3" />
                                <ellipse transform="rotate(-43 287.95 251.9)" class="st5" cx="288" cy="251.9" rx=".3" ry=".5" />
                                <circle class="c-infographic__text--orange" cx="409.3" cy="160.8" r="20.2" />
                                <circle class="c-infographic__text--orange" cx="409.3" cy="137.4" r="13.8" />
                                <circle class="c-infographic__text--orange" cx="433.5" cy="164.6" r="9.8" />
                                <circle class="c-infographic__text--orange" cx="385.2" cy="168.1" r="13.8" />
                              </g>
                            </svg>
                          </div>
                          <!-- /.c-stats-info -->
                        </div>
                      </div>
                      <div class="o-layout__item o-layout__item--6@sm">
                        <div class="c-stats-wrapper__rankings">
                          <div class="c-leaderboard-category">
                            <h5 class="c-leaderboard-category__title">
                                                  <i class="c-icon c-icon--right-open"></i>
                                                  <strong>Diamond</strong> League
                                              </h5>
                          </div>
                          <!-- /.c-leaderboard-category -->
                          <div class="c-leaderboard">
                            <div class="c-leaderboard__block c-leaderboard__block--full">
                              <div class="c-leaderboard-header">
                                <span class="c-leaderboard-header__label c-leaderboard-header__label--left">Top Players</span>
                                <span class="c-leaderboard-header__label c-leaderboard-header__label--right">Medal Count</span>
                              </div>
                              <div class="c-leaderboard__content">
                                <div class="c-leaderboard-item c-leaderboard-item--tier-1">
                                  <div class="c-leaderboard-item__block c-leaderboard-item__block--rank">
                                    <span class="c-leaderboard-item__rank">1</span>
                                  </div>
                                  <div class="c-leaderboard-item__block c-leaderboard-item__block--info">
                                    <span class="c-leaderboard-item__name">FantomFig</span>
                                  </div>
                                  <div class="c-leaderboard-item__block c-leaderboard-item__block--category">
                                    <span class="c-leaderboard-item__category">diamond</span>
                                    <span class="c-leaderboard-item__type">Player</span>
                                  </div>
                                  <div class="c-leaderboard-item__block c-leaderboard-item__block--number">
                                    <span class="c-leaderboard-item__number">96.44M</span>
                                  </div>
                                  <div class="c-leaderboard-item__bar"></div>
                                </div>
                                <div class="c-leaderboard-item c-leaderboard-item--tier-1">
                                  <div class="c-leaderboard-item__block c-leaderboard-item__block--rank">
                                    <span class="c-leaderboard-item__rank">2</span>
                                  </div>
                                  <div class="c-leaderboard-item__block c-leaderboard-item__block--info">
                                    <span class="c-leaderboard-item__name">WhipmeNeyNey</span>
                                  </div>
                                  <div class="c-leaderboard-item__block c-leaderboard-item__block--category">
                                    <span class="c-leaderboard-item__category">diamond</span>
                                    <span class="c-leaderboard-item__type">Player</span>
                                  </div>
                                  <div class="c-leaderboard-item__block c-leaderboard-item__block--number">
                                    <span class="c-leaderboard-item__number">95.16M</span>
                                  </div>
                                  <div class="c-leaderboard-item__bar"></div>
                                </div>
                                <div class="c-leaderboard-item c-leaderboard-item--tier-1">
                                  <div class="c-leaderboard-item__block c-leaderboard-item__block--rank">
                                    <span class="c-leaderboard-item__rank">3</span>
                                  </div>
                                  <div class="c-leaderboard-item__block c-leaderboard-item__block--info">
                                    <span class="c-leaderboard-item__name">Shasinn</span>
                                  </div>
                                  <div class="c-leaderboard-item__block c-leaderboard-item__block--category">
                                    <span class="c-leaderboard-item__category">diamond</span>
                                    <span class="c-leaderboard-item__type">Player</span>
                                  </div>
                                  <div class="c-leaderboard-item__block c-leaderboard-item__block--number">
                                    <span class="c-leaderboard-item__number">85.27M</span>
                                  </div>
                                  <div class="c-leaderboard-item__bar"></div>
                                </div>
                                <div class="c-leaderboard-item c-leaderboard-item--tier-2">
                                  <div class="c-leaderboard-item__block c-leaderboard-item__block--rank">
                                    <span class="c-leaderboard-item__rank">4</span>
                                  </div>
                                  <div class="c-leaderboard-item__block c-leaderboard-item__block--info">
                                    <span class="c-leaderboard-item__name">GrimIock</span>
                                  </div>
                                  <div class="c-leaderboard-item__block c-leaderboard-item__block--category">
                                    <span class="c-leaderboard-item__category">diamond</span>
                                    <span class="c-leaderboard-item__type">Player</span>
                                  </div>
                                  <div class="c-leaderboard-item__block c-leaderboard-item__block--number">
                                    <span class="c-leaderboard-item__number">81.95M</span>
                                  </div>
                                  <div class="c-leaderboard-item__bar"></div>
                                </div>
                                <div class="c-leaderboard-item c-leaderboard-item--tier-2">
                                  <div class="c-leaderboard-item__block c-leaderboard-item__block--rank">
                                    <span class="c-leaderboard-item__rank">5</span>
                                  </div>
                                  <div class="c-leaderboard-item__block c-leaderboard-item__block--info">
                                    <span class="c-leaderboard-item__name">DerrickSoul</span>
                                  </div>
                                  <div class="c-leaderboard-item__block c-leaderboard-item__block--category">
                                    <span class="c-leaderboard-item__category">diamond</span>
                                    <span class="c-leaderboard-item__type">Player</span>
                                  </div>
                                  <div class="c-leaderboard-item__block c-leaderboard-item__block--number">
                                    <span class="c-leaderboard-item__number">80.88M</span>
                                  </div>
                                  <div class="c-leaderboard-item__bar"></div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <!-- /.c-leaderboard -->
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="c-mod__footer c-stats-mod-footer">
                    <div class="o-media o-media--apply@sm o-media--flip">
                      <div class="o-media__graphic o-media__graphic--button">
                        <a href="http://wardragons.com/community" class="c-btn">
                          <span class="c-btn__block c-btn__icon-block">
                              <svg class="c-btn__svg" xmlns="http://www.w3.org/2000/svg" viewbox="0 0 102.2 100">
                                  <path class="st0" d="M32 58.7c-2-.3-3.9-.7-5.8-1.3-.5-.1-1-.1-1.4.1L9.3 63.8l5.5-9.6c.5-.9.3-2.1-.5-2.7-6.2-5-9.8-12.3-9.8-19.8 0-7.4 3.7-14.1 9.8-19.2 6.1-5 14.7-8.1 24.1-8.1 9.5 0 18 3.1 24.1 8.1 6.1 5 9.8 11.8 9.8 19.2h4.2c0-8.8-4.4-16.8-11.3-22.4C58.3 3.6 48.8.2 38.4.2 28 .2 18.5 3.6 11.6 9.3 4.6 14.9.2 22.8.2 31.7c0 8.9 4.2 17.4 11.4 23.1l1.3-1.7-1.8-1.1-8.5 14.9c-.4.8-.4 1.8.2 2.4.6.7 1.6.9 2.4.6l21.2-8.5-.8-2-.6 2c2.1.6 4.3 1.1 6.4 1.4l.6-4.1z"/>
                                  <path class="st0" d="M40.5 68h-2.1c0 7.9 3.6 14.9 9.2 19.9 5.6 5 13.1 8.1 21.2 8.1 4.3 0 8.6-.9 12.9-2.8l-.9-1.9-.7 2 17 6.4c.8.3 1.7.1 2.3-.6.6-.6.7-1.6.3-2.4L93.3 84l-1.9 1 1.3 1.7c5.9-4.7 9.3-11.2 9.3-18.6 0-7.4-3.7-14.3-9.4-19.3-5.8-5-13.7-8.2-22.4-8.2s-16.6 3.2-22.4 8.2c-5.8 5-9.4 11.9-9.4 19.3h4.2c0-6 3-11.8 8-16.1 5-4.4 11.9-7.2 19.6-7.2 7.7 0 14.6 2.8 19.6 7.2 5 4.4 8 10.2 8 16.1 0 6.1-2.6 11.2-7.7 15.3-.8.6-1 1.7-.6 2.6l3.9 7.9-11.9-4.5c-.5-.2-1.1-.2-1.6 0-3.7 1.6-7.5 2.4-11.2 2.4-6.9 0-13.5-2.7-18.3-7-4.8-4.3-7.8-10.2-7.8-16.8h-2.1z"/>
                              </svg>
                          </span>
                          <span class="c-btn__block">Community Page</span>
                        </a>
                      </div>
                      <div class="o-media__content">
                        <p>Don’t miss out on any of the action! Stay up to date with the world of War Dragons by viewing the top players, guilds, and current levels of destruction… all in real-time.</p>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
              <!-- /.c-stats-wrapper -->
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="o-content-block o-content-block--keep">
      <div class="o-content-block__content">
        <div class="o-container o-content-block__container">
          <div class="o-layout">
            <div class="o-layout__item o-layout__item--9@md o-layout__item--offset-1@md">
              <section class="c-mod">
                <div class="o-layout">
                  <div class="o-layout__item o-layout__item--6@sm">
                    <header class="c-mod-heading">
                      <span class="c-mod-heading__content">
                              <span class="c-mod-heading__flag"></span>
                      <div class="o-media o-media--apply o-media--flip">
                        <div class="o-media__graphic">
                          <span class="c-icon-frame c-icon-frame--grey-45 c-icon-frame--small">
                              <svg class="c-icon-frame__svg" xmlns="http://www.w3.org/2000/svg" viewbox="0 0 102.2 100">
                                  <path class="st0" d="M32 58.7c-2-.3-3.9-.7-5.8-1.3-.5-.1-1-.1-1.4.1L9.3 63.8l5.5-9.6c.5-.9.3-2.1-.5-2.7-6.2-5-9.8-12.3-9.8-19.8 0-7.4 3.7-14.1 9.8-19.2 6.1-5 14.7-8.1 24.1-8.1 9.5 0 18 3.1 24.1 8.1 6.1 5 9.8 11.8 9.8 19.2h4.2c0-8.8-4.4-16.8-11.3-22.4C58.3 3.6 48.8.2 38.4.2 28 .2 18.5 3.6 11.6 9.3 4.6 14.9.2 22.8.2 31.7c0 8.9 4.2 17.4 11.4 23.1l1.3-1.7-1.8-1.1-8.5 14.9c-.4.8-.4 1.8.2 2.4.6.7 1.6.9 2.4.6l21.2-8.5-.8-2-.6 2c2.1.6 4.3 1.1 6.4 1.4l.6-4.1z"/>
                                  <path class="st0" d="M40.5 68h-2.1c0 7.9 3.6 14.9 9.2 19.9 5.6 5 13.1 8.1 21.2 8.1 4.3 0 8.6-.9 12.9-2.8l-.9-1.9-.7 2 17 6.4c.8.3 1.7.1 2.3-.6.6-.6.7-1.6.3-2.4L93.3 84l-1.9 1 1.3 1.7c5.9-4.7 9.3-11.2 9.3-18.6 0-7.4-3.7-14.3-9.4-19.3-5.8-5-13.7-8.2-22.4-8.2s-16.6 3.2-22.4 8.2c-5.8 5-9.4 11.9-9.4 19.3h4.2c0-6 3-11.8 8-16.1 5-4.4 11.9-7.2 19.6-7.2 7.7 0 14.6 2.8 19.6 7.2 5 4.4 8 10.2 8 16.1 0 6.1-2.6 11.2-7.7 15.3-.8.6-1 1.7-.6 2.6l3.9 7.9-11.9-4.5c-.5-.2-1.1-.2-1.6 0-3.7 1.6-7.5 2.4-11.2 2.4-6.9 0-13.5-2.7-18.3-7-4.8-4.3-7.8-10.2-7.8-16.8h-2.1z"/>
                              </svg>
                          </span>
                        </div>
                        <div class="o-media__content">
                          <h3 class="c-mod-heading__title u-text-gradient">User Forums</h3>
                        </div>
                      </div>
                      </span>
                    </header>
                  </div>
                </div>
                <div class="c-mod__body">
                  <ul class="o-list-unstyled">
                    <li>
                      <a href="http://wardragons.pocketgems.com/forum/main-forum" class="c-forum-link" target="_blank">
                        <span class="c-forum-link__block u-hidden@less-than-sm">
                                          <span class="c-icon-frame c-icon-frame--color-45">
                                              <svg class="c-icon-frame__svg" xmlns="http://www.w3.org/2000/svg" viewbox="0 0 107.9 100">
                                                  <path d="M105.6 44.4h-2.2c0 10.9-5.4 20.7-14.3 28-9 7.3-21.4 11.9-35.1 11.9-6.1 0-12-.9-17.4-2.6-.5-.2-1.1-.1-1.6.1L11.1 92.9l8.7-17.4c.5-.9.2-2.1-.6-2.8-9.1-7.3-14.6-17.3-14.6-28.3 0-10.9 5.4-20.8 14.3-28C27.8 9.1 40.2 4.6 54 4.6s26.2 4.6 35.1 11.8c8.9 7.3 14.3 17.2 14.3 28h4.4c0-12.4-6.2-23.6-15.9-31.5C82.1 4.9 68.7.1 54 .1S25.9 5 16.1 12.9C6.3 20.9.1 32 .1 44.4c0 12.5 6.3 23.8 16.3 31.8l1.4-1.8-2-1L4.2 96.7c-.4.9-.3 1.9.4 2.6.7.7 1.7.9 2.6.5L36.9 86l-.9-2-.8 2c5.8 1.8 12.2 2.8 18.7 2.8 14.7 0 28.1-4.9 37.9-12.8 9.8-8 15.9-19.1 15.9-31.5h-2.1z"/>
                                                  <path d="M33.8 36.5H63c1.2 0 2.2-1 2.2-2.2 0-1.2-1-2.2-2.2-2.2H33.8c-1.2 0-2.2 1-2.2 2.2-.1 1.2.9 2.2 2.2 2.2M33.8 50h42.6c1.2 0 2.2-1 2.2-2.2 0-1.2-1-2.2-2.2-2.2H33.8c-1.2 0-2.2 1-2.2 2.2-.1 1.2.9 2.2 2.2 2.2M33.8 63.5h42.6c1.2 0 2.2-1 2.2-2.2 0-1.2-1-2.2-2.2-2.2H33.8c-1.2 0-2.2 1-2.2 2.2-.1 1.2.9 2.2 2.2 2.2"/>
                                              </svg>
                                          </span>
                        </span>
                        <span class="c-forum-link__block c-forum-link__header">
                                          <h6 class="c-forum-link__location">PocketGems / War Dragons News</h6>
                                          <h3 class="c-forum-link__title">Town Hall</h3>
                                      </span>
                        <span class="c-forum-link__block c-forum-link__description">
                                          <span class="js-force-two-lines">Hear ye, hear ye! News and Announcements</span>
                        </span>
                        <span class="c-forum-link__block c-forum-link__link u-hidden@less-than-sm">
                                          <i class="c-icon c-icon--right-open"></i>
                                      </span>
                      </a>
                    </li>
                    <li>
                      <a href="http://wardragons.pocketgems.com/forum/all-forums/general-discussion" class="c-forum-link" target="_blank">
                        <span class="c-forum-link__block u-hidden@less-than-sm">
                                          <span class="c-icon-frame c-icon-frame--color-45">
                                              <svg class="c-icon-frame__svg" xmlns="http://www.w3.org/2000/svg" viewbox="0 0 107.9 100">
                                                  <path d="M105.6 44.4h-2.2c0 10.9-5.4 20.7-14.3 28-9 7.3-21.4 11.9-35.1 11.9-6.1 0-12-.9-17.4-2.6-.5-.2-1.1-.1-1.6.1L11.1 92.9l8.7-17.4c.5-.9.2-2.1-.6-2.8-9.1-7.3-14.6-17.3-14.6-28.3 0-10.9 5.4-20.8 14.3-28C27.8 9.1 40.2 4.6 54 4.6s26.2 4.6 35.1 11.8c8.9 7.3 14.3 17.2 14.3 28h4.4c0-12.4-6.2-23.6-15.9-31.5C82.1 4.9 68.7.1 54 .1S25.9 5 16.1 12.9C6.3 20.9.1 32 .1 44.4c0 12.5 6.3 23.8 16.3 31.8l1.4-1.8-2-1L4.2 96.7c-.4.9-.3 1.9.4 2.6.7.7 1.7.9 2.6.5L36.9 86l-.9-2-.8 2c5.8 1.8 12.2 2.8 18.7 2.8 14.7 0 28.1-4.9 37.9-12.8 9.8-8 15.9-19.1 15.9-31.5h-2.1z"/>
                                                  <path d="M33.8 36.5H63c1.2 0 2.2-1 2.2-2.2 0-1.2-1-2.2-2.2-2.2H33.8c-1.2 0-2.2 1-2.2 2.2-.1 1.2.9 2.2 2.2 2.2M33.8 50h42.6c1.2 0 2.2-1 2.2-2.2 0-1.2-1-2.2-2.2-2.2H33.8c-1.2 0-2.2 1-2.2 2.2-.1 1.2.9 2.2 2.2 2.2M33.8 63.5h42.6c1.2 0 2.2-1 2.2-2.2 0-1.2-1-2.2-2.2-2.2H33.8c-1.2 0-2.2 1-2.2 2.2-.1 1.2.9 2.2 2.2 2.2"/>
                                              </svg>
                                          </span>
                        </span>
                        <span class="c-forum-link__block c-forum-link__header">
                                          <h6 class="c-forum-link__location">Lounge</h6>
                                          <h3 class="c-forum-link__title">General Discussion</h3>
                                      </span>
                        <span class="c-forum-link__block c-forum-link__description">
                                          <span class="js-force-two-lines">Other War Dragons Info you want to discuss? This is the place for all the rest.</span>
                        </span>
                        <span class="c-forum-link__block c-forum-link__link u-hidden@less-than-sm">
                                          <i class="c-icon c-icon--right-open"></i>
                                      </span>
                      </a>
                    </li>
                    <li>
                      <a href="http://wardragons.pocketgems.com/forum/all-forums/wars-and-alliances" class="c-forum-link" target="_blank">
                        <span class="c-forum-link__block u-hidden@less-than-sm">
                                          <span class="c-icon-frame c-icon-frame--color-45">
                                              <svg class="c-icon-frame__svg" xmlns="http://www.w3.org/2000/svg" viewbox="0 0 107.9 100">
                                                  <path d="M105.6 44.4h-2.2c0 10.9-5.4 20.7-14.3 28-9 7.3-21.4 11.9-35.1 11.9-6.1 0-12-.9-17.4-2.6-.5-.2-1.1-.1-1.6.1L11.1 92.9l8.7-17.4c.5-.9.2-2.1-.6-2.8-9.1-7.3-14.6-17.3-14.6-28.3 0-10.9 5.4-20.8 14.3-28C27.8 9.1 40.2 4.6 54 4.6s26.2 4.6 35.1 11.8c8.9 7.3 14.3 17.2 14.3 28h4.4c0-12.4-6.2-23.6-15.9-31.5C82.1 4.9 68.7.1 54 .1S25.9 5 16.1 12.9C6.3 20.9.1 32 .1 44.4c0 12.5 6.3 23.8 16.3 31.8l1.4-1.8-2-1L4.2 96.7c-.4.9-.3 1.9.4 2.6.7.7 1.7.9 2.6.5L36.9 86l-.9-2-.8 2c5.8 1.8 12.2 2.8 18.7 2.8 14.7 0 28.1-4.9 37.9-12.8 9.8-8 15.9-19.1 15.9-31.5h-2.1z"/>
                                                  <path d="M33.8 36.5H63c1.2 0 2.2-1 2.2-2.2 0-1.2-1-2.2-2.2-2.2H33.8c-1.2 0-2.2 1-2.2 2.2-.1 1.2.9 2.2 2.2 2.2M33.8 50h42.6c1.2 0 2.2-1 2.2-2.2 0-1.2-1-2.2-2.2-2.2H33.8c-1.2 0-2.2 1-2.2 2.2-.1 1.2.9 2.2 2.2 2.2M33.8 63.5h42.6c1.2 0 2.2-1 2.2-2.2 0-1.2-1-2.2-2.2-2.2H33.8c-1.2 0-2.2 1-2.2 2.2-.1 1.2.9 2.2 2.2 2.2"/>
                                              </svg>
                                          </span>
                        </span>
                        <span class="c-forum-link__block c-forum-link__header">
                                          <h6 class="c-forum-link__location">Strategy</h6>
                                          <h3 class="c-forum-link__title">Wars and Events</h3>
                                      </span>
                        <span class="c-forum-link__block c-forum-link__description">
                                          <span class="js-force-two-lines">Climb the leaderboard. Post any questions or feedback related to wars or limited-time events.</span>
                        </span>
                        <span class="c-forum-link__block c-forum-link__link u-hidden@less-than-sm">
                                          <i class="c-icon c-icon--right-open"></i>
                                      </span>
                      </a>
                    </li>
                    <li>
                      <a href="http://wardragons.pocketgems.com/forum/all-forums/join-a-team" class="c-forum-link" target="_blank">
                        <span class="c-forum-link__block u-hidden@less-than-sm">
                                          <span class="c-icon-frame c-icon-frame--color-45">
                                              <svg class="c-icon-frame__svg" xmlns="http://www.w3.org/2000/svg" viewbox="0 0 107.9 100">
                                                  <path d="M105.6 44.4h-2.2c0 10.9-5.4 20.7-14.3 28-9 7.3-21.4 11.9-35.1 11.9-6.1 0-12-.9-17.4-2.6-.5-.2-1.1-.1-1.6.1L11.1 92.9l8.7-17.4c.5-.9.2-2.1-.6-2.8-9.1-7.3-14.6-17.3-14.6-28.3 0-10.9 5.4-20.8 14.3-28C27.8 9.1 40.2 4.6 54 4.6s26.2 4.6 35.1 11.8c8.9 7.3 14.3 17.2 14.3 28h4.4c0-12.4-6.2-23.6-15.9-31.5C82.1 4.9 68.7.1 54 .1S25.9 5 16.1 12.9C6.3 20.9.1 32 .1 44.4c0 12.5 6.3 23.8 16.3 31.8l1.4-1.8-2-1L4.2 96.7c-.4.9-.3 1.9.4 2.6.7.7 1.7.9 2.6.5L36.9 86l-.9-2-.8 2c5.8 1.8 12.2 2.8 18.7 2.8 14.7 0 28.1-4.9 37.9-12.8 9.8-8 15.9-19.1 15.9-31.5h-2.1z"/>
                                                  <path d="M33.8 36.5H63c1.2 0 2.2-1 2.2-2.2 0-1.2-1-2.2-2.2-2.2H33.8c-1.2 0-2.2 1-2.2 2.2-.1 1.2.9 2.2 2.2 2.2M33.8 50h42.6c1.2 0 2.2-1 2.2-2.2 0-1.2-1-2.2-2.2-2.2H33.8c-1.2 0-2.2 1-2.2 2.2-.1 1.2.9 2.2 2.2 2.2M33.8 63.5h42.6c1.2 0 2.2-1 2.2-2.2 0-1.2-1-2.2-2.2-2.2H33.8c-1.2 0-2.2 1-2.2 2.2-.1 1.2.9 2.2 2.2 2.2"/>
                                              </svg>
                                          </span>
                        </span>
                        <span class="c-forum-link__block c-forum-link__header">
                                          <h6 class="c-forum-link__location">Guilds</h6>
                                          <h3 class="c-forum-link__title">Join a Team</h3>
                                      </span>
                        <span class="c-forum-link__block c-forum-link__description">
                                          <span class="js-force-two-lines">Trying to recruit for your next great team? Looking for an active, social team to join? Post here!</span>
                        </span>
                        <span class="c-forum-link__block c-forum-link__link u-hidden@less-than-sm">
                                          <i class="c-icon c-icon--right-open"></i>
                                      </span>
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="c-mod__footer c-forum-links-footer">
                  <div class="o-media o-media--apply@sm o-media--flip">
                    <div class="o-media__graphic o-media__graphic--button">
                      <a href="http://wardragons.pocketgems.com/forum" class="c-btn" target="_blank">
                        <span class="c-btn__block c-btn__icon-block">
                                          <svg class="c-btn__svg" xmlns="http://www.w3.org/2000/svg" viewbox="0 0 107.9 100">
                                              <path d="M105.6 44.4h-2.2c0 10.9-5.4 20.7-14.3 28-9 7.3-21.4 11.9-35.1 11.9-6.1 0-12-.9-17.4-2.6-.5-.2-1.1-.1-1.6.1L11.1 92.9l8.7-17.4c.5-.9.2-2.1-.6-2.8-9.1-7.3-14.6-17.3-14.6-28.3 0-10.9 5.4-20.8 14.3-28C27.8 9.1 40.2 4.6 54 4.6s26.2 4.6 35.1 11.8c8.9 7.3 14.3 17.2 14.3 28h4.4c0-12.4-6.2-23.6-15.9-31.5C82.1 4.9 68.7.1 54 .1S25.9 5 16.1 12.9C6.3 20.9.1 32 .1 44.4c0 12.5 6.3 23.8 16.3 31.8l1.4-1.8-2-1L4.2 96.7c-.4.9-.3 1.9.4 2.6.7.7 1.7.9 2.6.5L36.9 86l-.9-2-.8 2c5.8 1.8 12.2 2.8 18.7 2.8 14.7 0 28.1-4.9 37.9-12.8 9.8-8 15.9-19.1 15.9-31.5h-2.1z"/>
                                              <path d="M33.8 36.5H63c1.2 0 2.2-1 2.2-2.2 0-1.2-1-2.2-2.2-2.2H33.8c-1.2 0-2.2 1-2.2 2.2-.1 1.2.9 2.2 2.2 2.2M33.8 50h42.6c1.2 0 2.2-1 2.2-2.2 0-1.2-1-2.2-2.2-2.2H33.8c-1.2 0-2.2 1-2.2 2.2-.1 1.2.9 2.2 2.2 2.2M33.8 63.5h42.6c1.2 0 2.2-1 2.2-2.2 0-1.2-1-2.2-2.2-2.2H33.8c-1.2 0-2.2 1-2.2 2.2-.1 1.2.9 2.2 2.2 2.2"/>
                                          </svg>
                                      </span>
                        <span class="c-btn__block">Visit Forum</span>
                      </a>
                    </div>
                    <div class="o-media__content">
                      <p>Looking to join a guild? Want to provide some feedback to the game development team? Head over to the forums to interact with other friendly, active, and competitive players.</p>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
        <img class="c-forum-links-dragon" src="<?php echo get_template_directory_uri(); ?>/img/arcane-dragon.png" alt="">
      </div>
    </div>
  <?php endwhile; endif; ?>
<?php get_footer(); ?>
