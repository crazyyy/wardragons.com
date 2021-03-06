<!doctype html>
<html <?php language_attributes(); ?> class="no-js">
<head>
  <meta charset="<?php bloginfo( 'charset' ); ?>">
  <meta http-equiv="x-ua-compatible" content="ie=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <title><?php wp_title( '' ); ?><?php if ( wp_title( '', false ) ) { echo ' :'; } ?> <?php bloginfo( 'name' ); ?></title>

  <link href="http://www.google-analytics.com/" rel="dns-prefetch"><!-- dns prefetch -->

  <!-- icons -->
  <link rel="apple-touch-icon" sizes="57x57" href="<?php echo get_template_directory_uri(); ?>/img/apple-icon-57x57.png">
  <link rel="apple-touch-icon" sizes="60x60" href="<?php echo get_template_directory_uri(); ?>/img/apple-icon-60x60.png">
  <link rel="apple-touch-icon" sizes="72x72" href="<?php echo get_template_directory_uri(); ?>/img/apple-icon-72x72.png">
  <link rel="apple-touch-icon" sizes="76x76" href="<?php echo get_template_directory_uri(); ?>/img/apple-icon-76x76.png">
  <link rel="apple-touch-icon" sizes="114x114" href="<?php echo get_template_directory_uri(); ?>/img/apple-icon-114x114.png">
  <link rel="apple-touch-icon" sizes="120x120" href="<?php echo get_template_directory_uri(); ?>/img/apple-icon-120x120.png">
  <link rel="apple-touch-icon" sizes="144x144" href="<?php echo get_template_directory_uri(); ?>/img/apple-icon-144x144.png">
  <link rel="apple-touch-icon" sizes="152x152" href="<?php echo get_template_directory_uri(); ?>/img/apple-icon-152x152.png">
  <link rel="apple-touch-icon" sizes="180x180" href="<?php echo get_template_directory_uri(); ?>/img/apple-icon-180x180.png">
  <link rel="icon" type="image/png" sizes="192x192" href="<?php echo get_template_directory_uri(); ?>/img/android-icon-192x192.png">
  <link rel="icon" type="image/png" sizes="32x32" href="<?php echo get_template_directory_uri(); ?>/img/favicon-32x32.png">
  <link rel="icon" type="image/png" sizes="96x96" href="<?php echo get_template_directory_uri(); ?>/img/favicon-96x96.png">
  <link rel="icon" type="image/png" sizes="16x16" href="<?php echo get_template_directory_uri(); ?>/img/favicon-16x16.png">
<!-- Put this script tag to the <head> of your page -->
<script type="text/javascript" src="https://vk.com/js/api/share.js?94" charset="windows-1251"></script>
  <!--[if lt IE 9]>
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.3/html5shiv.min.js"></script>
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/selectivizr/1.0.2/selectivizr-min.js"></script>
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/respond.js/1.4.2/respond.min.js"></script>
  <![endif]-->
  <!-- css + javascript -->
  <?php wp_head(); ?>
  <!--[if IE 9]>
    <style>
        .c-pagination__dot {
            line-height: 1.2;
        }
        .o-content-wrap:before, .o-content-wrap:after {
            width: 140px;
        }
    </style>
  <![endif]-->
</head>
<body <?php body_class(); ?>>

  <a id="skip-to-content" href="#content" class="u-sr-only">Skip to main content</a>
  <div class="o-wrap">
    <header class="c-header" role="banner">
      <div class="c-header__inner">
        <div class="c-logo-block">
          <a class="c-logo c-logo--war-dragons c-logo-block__logo" href="<?php echo home_url(); ?>">War Dragons Russia</a>
        </div>
        <!-- /.c-logo-block -->
        <div class="c-menu-block">
          <div class="c-game-updates">
          </div>

          <nav class="c-nav" role="navigation">

            <ul class="o-list-unstyled c-nav__list">
              <li class="c-nav__item ">
                <a href="<?php echo home_url(); ?>/game-info.htm" class="c-nav__link">Информация по игре</a>
                <img class="c-nav__banner" src="<?php echo get_template_directory_uri(); ?>/img/banner-pointer.png" alt="">
                <ul class="c-dropdown">
                  <li class="c-dropdown__item">
                    <a class="c-dropdown__link" href="#">Драконы</a>
                  </li>
                  <li class="c-dropdown__item">
                    <a class="c-dropdown__link" href="#">Строения</a>
                  </li>
                  <li class="c-dropdown__item">
                    <a class="c-dropdown__link" href="#">Способности</a>
                  </li>
                  <li class="c-dropdown__item">
                    <a class="c-dropdown__link" href="#">Portraits</a>
                  </li>
                  <li class="c-dropdown__item">
                    <a class="c-dropdown__link" href="#" target="_blank">Support</a>
                  </li>
                </ul>
              </li>
              <li class="c-nav__item is-current">
                <a href="#" class="c-nav__link">Blog</a>
                <img class="c-nav__banner" src="<?php echo get_template_directory_uri(); ?>/img/banner-pointer.png" alt="">
              </li>
              <li class="c-nav__item ">
                <a href="<?php echo home_url(); ?>/community.htm" class="c-nav__link">Community</a>
                <img class="c-nav__banner" src="<?php echo get_template_directory_uri(); ?>/img/banner-pointer.png" alt="">
                <ul class="c-dropdown">
                  <li class="c-dropdown__item">
                    <a class="c-dropdown__link" href="#">Statistics</a>
                  </li>
                  <li class="c-dropdown__item">
                    <a class="c-dropdown__link" href="№">Leaderboard</a>
                  </li>
                  <li class="c-dropdown__item">
                    <a class="c-dropdown__link" href="#">Creators Faction</a>
                  </li>
                  <li class="c-dropdown__item">
                    <a class="c-dropdown__link" href="#">Featured Artwork</a>
                  </li>
                  <li class="c-dropdown__item">
                    <a class="c-dropdown__link" href="#">Guides</a>
                  </li>
                  <li class="c-dropdown__item">
                    <a class="c-dropdown__link" href="#" target="_blank">Forums</a>
                  </li>
                </ul>
              </li>
              <li class="c-nav__item ">
                <a href="#" class="c-nav__link">Media</a>
                <img class="c-nav__banner" src="<?php echo get_template_directory_uri(); ?>/img/banner-pointer.png" alt="">
                <ul class="c-dropdown">
                  <li class="c-dropdown__item">
                    <a class="c-dropdown__link" href="#">Videos</a>
                  </li>
                  <li class="c-dropdown__item">
                    <a class="c-dropdown__link" href="#">Images</a>
                  </li>
                  <li class="c-dropdown__item">
                    <a class="c-dropdown__link" href="#">News</a>
                  </li>
                  <li class="c-dropdown__item">
                    <a class="c-dropdown__link" href="#">Fan Kit</a>
                  </li>
                </ul>
              </li>
              <li class="c-nav__item">
                <a href="#" class="c-nav__link" target="_blank">Shop</a>
                <img class="c-nav__banner" src="<?php echo get_template_directory_uri(); ?>/img/banner-pointer.png" alt="">
              </li>
              <li class="c-nav__item">
                <a href="#" class="c-nav__link" target="_blank">Download</a>
                <img class="c-nav__banner" src="<?php echo get_template_directory_uri(); ?>/img/banner-pointer.png" alt="">
              </li>
            </ul>

          </nav>
        </div>
        <!-- /.c-menu-block -->

        <!--End mc_embed_signup-->
        <div class="c-header__connections">
          <div id="mc_embed_signup" class="c-newsletter c-newsletter--compact c-header__newsletter">
            <form action="" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate="">
              <div id="mc_embed_signup_scroll" class="c-newsletter__inner">
                <span class="mc-field-group c-newsletter__input-container">
                  <input type="email" value="" name="EMAIL" placeholder="newsletter signup" class="required email c-newsletter__input" id="mce-EMAIL">
                </span>
                <button class="c-newsletter__submit" type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe">
                  <i class="c-icon c-icon--mail"></i>
                </button>
              </div>
            </form>
          </div>
          <div class="c-social-expander js-social-expander">
            <button class="c-social-expander__toggle js-expander-toggle">
              <i class="c-icon c-icon--left-open"></i>
            </button>
            <div class="c-social-expander__outer-wrap js-social-wrap">
              <div class="c-social-expander__inner-wrap">

                <ul class="c-social c-social--borders c-social-expander__content">
                  <li class="c-social__item js-social-item">
                    <a class="c-social__link" href="#" target="_blank">
                      <i class="c-icon c-icon--pocketgems"></i>
                      <span class="u-sr-only">PocketGems</span>
                    </a>
                  </li>
                  <li class="c-social__item js-social-item">
                    <a class="c-social__link" href="#" target="_blank">
                      <i class="c-icon c-icon--linkedin"></i>
                      <span class="u-sr-only">LinkedIn</span>
                    </a>
                  </li>
                  <li class="c-social__item js-social-item">
                    <a class="c-social__link" href="#" target="_blank">
                      <i class="c-icon c-icon--instagram"></i>
                      <span class="u-sr-only">Instagram</span>
                    </a>
                  </li>
                  <li class="c-social__item js-social-item">
                    <a class="c-social__link" href="#" target="_blank">
                      <i class="c-icon c-icon--youtube-play"></i>
                      <span class="u-sr-only">YouTube</span>
                    </a>
                  </li>
                  <li class="c-social__item js-social-item">
                    <a class="c-social__link" href="#" target="_blank">
                      <i class="c-icon c-icon--facebook"></i>
                      <span class="u-sr-only">Facebook</span>
                    </a>
                  </li>
                  <li class="c-social__item js-social-item">
                    <a class="c-social__link" href="#" target="_blank">
                      <i class="c-icon c-icon--twitter"></i>
                      <span class="u-sr-only">Twitter</span>
                    </a>
                  </li>
                  <li class="c-social__item js-social-item">
                    <a class="c-social__link" href="#" target="_blank">
                      <i class="c-icon c-icon--twitch"></i>
                      <span class="u-sr-only">Twitch</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <!-- /.c-social-expander -->
        </div>
        <div class="c-mobile-toggle">
          <a class="c-mobile-toggle__icon js-toggle-menu">
            <span class="c-mobile-toggle__bar"></span>
            <span class="c-mobile-toggle__bar"></span>
            <span class="c-mobile-toggle__bar"></span>
          </a>
        </div>
        <div class="c-mobile-menu js-mobile-menu">
          <a class="c-mobile-menu__logo c-logo c-logo--war-dragon-white" href="#">War Dragons</a>
          <div class="c-mobile-toggle">
            <a class="c-mobile-toggle__icon js-toggle-menu">
              <span class="c-mobile-toggle__bar"></span>
              <span class="c-mobile-toggle__bar"></span>
            </a>
          </div>
          <ul class="c-mobile-nav">
            <li class="c-mobile-nav__item">
              <a class="c-mobile-nav__link" href="<?php echo home_url(); ?>/game-info.htm">Game Info</a>
            </li>
            <li class="c-mobile-nav__item">
              <a class="c-mobile-nav__link" href=#">Blog</a>
            </li>
            <li class="c-mobile-nav__item">
              <a class="c-mobile-nav__link" href="<?php echo home_url(); ?>/community.htm">Community</a>
            </li>
            <li class="c-mobile-nav__item">
              <a class="c-mobile-nav__link" href="#">Media</a>
            </li>
            <li class="c-mobile-nav__item">
              <a class="c-mobile-nav__link" href="#" target="_blank">Shop</a>
            </li>
            <li class="c-mobile-nav__item">
              <a class="c-mobile-nav__link" href="#" target="_blank">Download</a>
            </li>
            <li class="c-mobile-nav__item">
              <ul class="c-mobile-nav__social c-social c-social--large c-social--clear">
                <li class="c-social__item">
                  <a class="c-social__link" href="#" target="_blank">
                    <i class="c-icon c-icon--facebook"></i>
                    <span class="u-sr-only">Facebook</span>
                  </a>
                </li>
                <li class="c-social__item">
                  <a class="c-social__link" href="#" target="_blank">
                    <i class="c-icon c-icon--twitter"></i>
                    <span class="u-sr-only">Twitter</span>
                  </a>
                </li>
                <li class="c-social__item">
                  <a class="c-social__link" href="#" target="_blank">
                    <i class="c-icon c-icon--instagram"></i>
                    <span class="u-sr-only">Instagram</span>
                  </a>
                </li>
                <li class="c-social__item">
                  <a class="c-social__link" href="#" target="_blank">
                    <i class="c-icon c-icon--youtube-play"></i>
                    <span class="u-sr-only">YouTube</span>
                  </a>
                </li>
                <li class="c-social__item">
                  <a class="c-social__link" href="#" target="_blank">
                    <i class="c-icon c-icon--twitch"></i>
                    <span class="u-sr-only">Twitch</span>
                  </a>
                </li>
                <li class="c-social__item">
                  <a class="c-social__link" href="#" target="_blank">
                    <i class="c-icon c-icon--linkedin"></i>
                    <span class="u-sr-only">LinkedIn</span>
                  </a>
                </li>
                <li class="c-social__item">
                  <a class="c-social__link" href="#" target="_blank">
                    <i class="c-icon c-icon--pocketgems"></i>
                    <span class="u-sr-only">PocketGems</span>
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <!-- /.c-mobile-menu -->
      </div>
    </header>
    <!-- /.c-header -->
    <div id="content" class="o-content-wrap" role="main">
