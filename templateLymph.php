<?php if( have_rows('row_container') ): while( have_rows('row_container') ) : the_row();?>
	<div class="videoSection" style="background-image: url('<?php the_sub_field('background_Image'); ?>'); ">
		<div class="container">
			<div class="row">
				<div class="col-md-6">
					<div class="conentWriter">
						<h2><?php the_sub_field('headingBB'); ?></h2>
						<?php the_sub_field('contentBB'); ?>
					</div>
				</div>
				<div class="col">
					<div class="videoContainers">
						<a data-fancybox href="<?php the_sub_field('video_source'); ?>">
							<img src="<?php the_sub_field('video_banner'); ?>">
							<img src="https://www.impedimed.com/wp-content/uploads/2020/11/13.png">
						</a>
					</div>
				</div>
			</div>	
		</div>
	</div>
<?php endwhile; endif; ?>


<div class="sectionpoint5">
	<div class="container">
		<h2>
			<?php the_field('asd'); ?>
		</h2>
		<a class="fancyboxs" data-fancybox href="<?php the_sub_field('video_source'); ?>">
			<img src="<?php the_sub_field('video_banner'); ?>">
			<img src="https://www.impedimed.com/wp-content/uploads/2020/11/13.png">
		</a>
		<?php the_field('contenCOntaienrseciton5'); ?>
	</div>
</div>