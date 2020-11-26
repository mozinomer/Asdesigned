
		<header class="header">
      	<div class="top-header">
                <div class="container-fluid">
                    <div class="headr-flex">
                    	<?php if(get_field('header_phone','option')): ?>
                        	<a href="tel:<?php the_field('header_phone','option'); ?>"><i class="fas fa-phone-alt"></i><?php the_field('header_phone','option'); ?></a>
                        <?php endif; ?>
  <?php if(get_field('header_fax','option')): ?>	
                        	<a href="tel:<?php the_field('header_fax','option'); ?>"><i class=""></i><?php the_field('header_fax','option'); ?></a> <?php endif; ?>
                        <?php if(get_field('header_email','option')): ?>
                        	<a href="mailto:<?php the_field('header_email','option'); ?>"><i class="fas fa-envelope"></i><?php the_field('header_email','option'); ?></a>
        				<?php endif; ?>
                    </div>
                </div>
            </div>
            <div class="home-menu">
            <div class="container-fluid">
            <div class="menu-flex">
                <div class="mnu-width">
                    <nav class="navbar navbar-expand-lg ">
           				<?php 
           					$logoid = get_theme_mod( 'custom_logo' );
							$logo = wp_get_attachment_image_src( $logoid , 'full' );
           				?>
                        <a class="navbar-brand" href="<?php echo home_url();?>"><img src="<?php echo $logo[0]; ?>" alt=""></a>
                        <button class="navbar-toggler hamburger" type="button" data-toggle="collapse"
                            data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false"
                            aria-label="Toggle navigation">
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNavDropdown">
                        	<?php if( has_nav_menu( 'primary' ) )
                            wp_nav_menu( array(
                                'container' => false,
								'theme_location' => 'primary',
								'menu_class'     => 'navbar-nav ',
								'items_wrap'     => '<ul class="%2$s">%3$s</ul>',
								'walker'         => new Custom_Walker_Nav_Menu
				                            )
							); ?>
                        </div>
                </nav>
                </div>
                <?php if(get_field('agent_phone','option')): ?>
                <div class="mnu-width1">
                    <div class="side-btn">
                        <img src="<?php echo get_template_directory_uri(); ?>/assets/images/round.png">
                        <a href="tel:<?php the_field('agent_phone','option'); ?>">Call Us Now: <?php the_field('agent_phone','option'); ?></a>
                    </div>

                </div>
                <?php endif; ?>
            </div>
            
            </div>
            </div>
    </header>