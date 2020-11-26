<div id="headernew">
	<div class="container">
		<div class="logoContainer">
			<?php 
				$logoid = get_theme_mod( 'custom_logo' );
				$logo = wp_get_attachment_image_src( $logoid , 'full' );
			?>
		</div>
		<div class="hamburgerContainer">
			<div class="spabContaienr">
				<span></span>
				<span></span>
				<span></span>
			</div>
		</div>
	</div>
</div>

<div class="menuContainernew">
	<div class="container">
		<div class="closerMenu"></div>
		<div class="menuNameContainer">
			<h2 class="headingN">Menu</h2>
			<div class="menuContainerNew">
				<?php if( has_nav_menu( 'primary' ) )
		            wp_nav_menu( array(
			                'container' => false,
							'theme_location' => 'primary',
							'container_class'
	                    )
				); ?>
			</div>
		</div>
		<div class="bottomContainermenuNew">
			<div class="socialLinkContainer">
				<ul class="socialLInksNws">
					<li><a href="#"><i class="fa fa-facebook"></i></a></li>
					<li><a href="#"><i class="fa fa-twitter"></i></a></li>
				</ul>
				<ul class="contactInfo">
					<li><?php if(get_field('header_phone','option')): ?>
                        	<a href="tel:<?php the_field('header_phone','option'); ?>"><i class="fas fa-phone-alt"></i><?php the_field('header_phone','option'); ?></a>
                        <?php endif; ?></li>
                        <li>
                        	<?php if(get_field('header_fax','option')): ?>	
                        	<a href="tel:<?php the_field('header_fax','option'); ?>"><i class=""></i><?php the_field('header_fax','option'); ?></a> <?php endif; ?>
                        </li>
                        <li>
                        	?php if(get_field('header_email','option')): ?>
                        	<a href="mailto:<?php the_field('header_email','option'); ?>"><i class="fas fa-envelope"></i><?php the_field('header_email','option'); ?></a>
        				<?php endif; ?>
                        </li>
				</ul>
			</div>
		</div>
	</div>
</div>