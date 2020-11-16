<?php

use com\cminds\invitationcodecontentaccess\controller\AccesscodeController;
use com\cminds\invitationcodecontentaccess\model\Labels;
use com\cminds\invitationcodecontentaccess\model\Settings;
?>
<div class="cmicca-accesscode-container">
<div class="containerMainfolioPass" style="background-image: url('http://wp.cmswebdeveloper.com/folio/wp-content/uploads/2020/11/path.png');">
	<div class="container">
		<div class="formContainerpasscode">
			<div class="logoContainer">
				<?php
					if (Labels::getLocalized('heading_text') != '') {
					?>
					<h2><?php //echo Labels::getLocalized('heading_text'); ?></h2>
				<?php
				} ?>
				<img src="http://wp.cmswebdeveloper.com/folio/wp-content/uploads/2020/11/newlogo.png">
			</div>
			<?php if (Labels::getLocalized('description_text') != '') { ?>
				<p class="cmicca-form-text"><?php echo Labels::getLocalized('description_text'); ?></p>
			<?php } ?>
			<div class="formContainerpasscodenew">
				<div class="cmicca-login-field">
					<?php
					if ($atts['view'] == 'four') {
					?>
					<div class="cmicca_accesscode_four_block">
						<?php if ($atts['prefix']) { ?>
						<div class="cmicca_prefix_block">
							<?php if (Labels::getLocalized('prefix_label') != ''): ?>
							<label><?php echo Labels::getLocalized('prefix_label'); ?></label><br />
							<?php endif; ?>
							<input type="text" name="cmicca_accesscode_four_prefix" id="cmicca_accesscode_four_prefix" class="cmicca_accesscode_four_value cmicca_prefix"/>
						</div>
						<?php } else { ?>
						<input type="hidden" name="cmicca_accesscode_four_prefix" id="cmicca_accesscode_four_prefix" class="cmicca_accesscode_four_value cmicca_prefix"/>
						<?php } ?>
						<div class="cmicca_values_block">
							<?php if (Labels::getLocalized('input_label') != ''): ?>
							<label><?php echo Labels::getLocalized('input_label'); ?></label><br />
							<?php endif; ?>
							<input type="text" name="cmicca_accesscode_four_value_1" id="cmicca_accesscode_four_value_1" class="cmicca_accesscode_four_value" maxlength="1" />
							<input type="text" name="cmicca_accesscode_four_value_2" id="cmicca_accesscode_four_value_2" class="cmicca_accesscode_four_value" maxlength="1" />
							<input type="text" name="cmicca_accesscode_four_value_3" id="cmicca_accesscode_four_value_3" class="cmicca_accesscode_four_value" maxlength="1" />
							<input type="text" name="cmicca_accesscode_four_value_4" id="cmicca_accesscode_four_value_4" class="cmicca_accesscode_four_value" maxlength="1" />
							<input type="hidden" name="cmicca_accesscode_value" class="cmicca_accesscode_value" />
						</div>
					</div>
					<?php
					} else {
					?>
					<?php
						if (Labels::getLocalized('input_label') != '') {
					?>
					<label><?php echo Labels::getLocalized('input_label'); ?></label>
					<?php
						}
					?>
					<div class="cmicca-password-block">
						<input type="password" name="cmicca_accesscode_value" class="cmicca_accesscode_value" placeholder="<?php echo Labels::getLocalized('input_placeholder_text'); ?>" />
						<a href="javascript:void(0);" class="cmicca-input-type-trigger"><span class="dashicons dashicons-hidden"></span></a>
					</div>
					<?php
					}
					?>
				</div>
				
				<div class="cmicca-buttons-field">
					<input type="hidden" name="cmicca_accesscode_action" id="cmicca_accesscode_action" value="cmicca_access_code_check" />
					<input type="hidden" name="cmicca_accesscode_view" class="cmicca_accesscode_view" value="<?php echo $atts['view']; ?>" />
					<input type="hidden" name="cmicca_accesscode_required_msg" id="cmicca_accesscode_required_msg" value="<?php echo Labels::getLocalized('code_required_text'); ?>" />
					<input type="hidden" name="cmicca_accesscode_2fa_required_msg" id="cmicca_accesscode_2fa_required_msg" value="<?php echo Labels::getLocalized('code_2fa_required_text'); ?>" />
					<input type="hidden" name="cmicca_accesscode_2fa_text" id="cmicca_accesscode_2fa_text" value="<?php echo Labels::getLocalized('input_2fa_label'); ?>" />
					<input type="hidden" name="target_post_id" id="cmicca_target_post_id" value="<?php echo $_GET['target_id'] ?>" />
					<button type="submit" class="cmicca_accesscode_trigger">
						<img src="http://wp.cmswebdeveloper.com/folio/wp-content/uploads/2020/11/box.png">
					</button>
				</div>
			</div>
			<a href="#">Request Access</a>
		</div>
	</div>
</div>
</div>
<script type="text/javascript">
	jQuery(document).ready(function ($) {
    // Set the date we're counting down to
    function  addZero(number) {
        if (number < 10) {
            return '0' + number;
        }
        return number;
    }
    var x = setInterval(function () {
        // Get today's date and time
        var now = new Date().getTime();
        // Find the distance between now and the count down date
        // var distance = countDownDate - now;
        if (jQuery('.cmi-countdown').length == 0)
            return;
        timeLimit = $('.cmi-countdown').data('expire');
        if (timeLimit < 2) {
            return;
        }
        var distance = (timeLimit * 1000) - now;
        // Time calculations for days, hours, minutes and seconds
        // var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        // Display the result in the element with id="demo"
        $('.cmi-countdown').html(addZero(hours) + ":"
                + addZero(minutes) + ":" + addZero(seconds));
        // If the count down is finished, write some text
        if (distance < 0) {
            clearInterval(x);
            $('.cmi-countdown').html('EXPIRED');
            location.reload();
        }
    }, 1000);

    var start = new Date();
    function cmCheckOnline(start, reload = true) {
        var end = new Date();
        $.ajax({
            url: CMICCA_Settings.ajaxUrl,
            data: {
                action: 'cmicca_user_time_check',
                'timeSpent': end - start,
                url: window.location.href
            },
            success: function (res) {
                // console.log(res)
                if (res.success == false && reload) {
                    location.reload();
                }
            },
            async: false
        })
    }
    $(window).unload(function () {
        cmCheckOnline(start, false)
    });

    jQuery('body').on('keyup', '.cmicca_accesscode_value', function (event) {
        if (event.keyCode == 13) {
            jQuery(this).parents('.cmicca-accesscode-container').find('.cmicca_accesscode_trigger').trigger('click');
        }
    });
    jQuery('body').on('click', '.cmicca_accesscode_trigger', function () {
        var that = jQuery(this);
        that.attr('disabled', 'disabled');
        if (typeof CMICCA_Disclaimer_ReadCookie != 'undefined' && CMICCA_Disclaimer_ReadCookie('cmicca_disclaimer') != 'Y') {
            var accesscodeboxvalue = that.parents('.cmicca-accesscode-container').find('.cmicca_accesscode_value').val();
            var accesscodeboxaction = 'cmicca_access_code_disclaimer_check';
            var data = {action: accesscodeboxaction, code: accesscodeboxvalue};
            jQuery.post(CMICCA_Settings.ajaxUrl, data, function (response) {
                that.removeAttr('disabled');
                if (response.message != '') {
                    CMICCA_Disclaimer_CheckCookies(response.message);
                    return false;
                } else {
                    CMICCA_Disclaimer_CheckCookies();
                    return false;
                }
            });
        } else {
            var accesscodebox_field_label = that.parents('.cmicca-accesscode-container').find('.cmicca-login-field label');
            var accesscodebox_required_msg = that.parents('.cmicca-accesscode-container').find('#cmicca_accesscode_required_msg').val();
            var accesscodebox_2fa_text = that.parents('.cmicca-accesscode-container').find('#cmicca_accesscode_2fa_text').val();
            var accesscodebox_prefix = that.parents('.cmicca-accesscode-container').find('#cmicca_accesscode_four_prefix').length ? that.parents('.cmicca-accesscode-container').find('#cmicca_accesscode_four_prefix').val() : '';
            var accesscodebox_value = that.parents('.cmicca-accesscode-container').find('.cmicca_accesscode_value').val();
            var accesscodebox_view = that.parents('.cmicca-accesscode-container').find('.cmicca_accesscode_view').val();
            var accesscodebox_action = that.parents('.cmicca-accesscode-container').find('#cmicca_accesscode_action').val();
            var accesscodebox_target = that.parents('.cmicca-accesscode-container').find('#cmicca_target_post_id').val();
            if ((accesscodebox_view == 'one' && accesscodebox_value == '') || (accesscodebox_view == 'four' && accesscodebox_value.length != 4)) {
                window.CMICCA.Utils.toast(accesscodebox_required_msg);
                setTimeout(function () {
                    that.removeAttr('disabled');
                }, 3000);
            } else {
                // console.log('cmicca_access_code_check ajax action');
                accesscodebox_value = accesscodebox_prefix + accesscodebox_value;
                var data = {action: accesscodebox_action, code: accesscodebox_value, target_id: accesscodebox_target};
                var twofaajaxUrl = CMICCA_Settings.ajaxUrl;
                jQuery.post(CMICCA_Settings.ajaxUrl, data, function (response) {
                    if (response.success == true) {

                        if (response.twofa == 'enabled') {

                            var smsdata = {action: 'cmlog_sms_code_send_test', mobile: response.smsmobile, icodeid: response.accesscodeid};
                            jQuery.post(twofaajaxUrl, smsdata, function (smsresponse) {
                                CMLOG.Utils.toast(smsresponse.msg);
                                accesscodebox_field_label.html(accesscodebox_2fa_text);
                                jQuery('.cmicca_accesscode_four_value').val('');
                                jQuery('.cmicca_accesscode_value').val('');
                                that.removeAttr('disabled');
                                that.removeClass('cmicca_accesscode_trigger').addClass('cmicca_accesscode2fa_trigger');
                                that.attr('post_id', response.accesscodeid);
                                that.attr('targeturl', response.targeturl);
                            });

                        } else {
                            if (response.message == '--content--') {
                                // console.log('response', response);
                                // confirm("Confirm to redirect to target url?") ? window.location = response.targeturl : false;
                                window.location = response.targeturl;
                            } else {
                                if (response.gtadatalayer == '1') {
                                    //alert(JSON.stringify(window.dataLayer));
                                    window.dataLayer = window.dataLayer || [];
                                    window.dataLayer.push({
                                        'event': 'formSubmission',
                                        'formType': 'Access Code',
                                        'formPosition': 'Footer',
                                        'formDesc': response.accesscodenote,
                                        'url': response.allowurl,
                                        'Code': response.accesscode
                                    });
                                    //alert(JSON.stringify(window.dataLayer));
                                }
                                location.href = response.allowurl;
                                that.removeAttr('disabled');
                            }
                        }
                    } else {
                        window.CMICCA.Utils.toast(response.message);
                        setTimeout(function () {
                            that.removeAttr('disabled');
                        }, 3000);
                    }
                });
            }
        }
    });

    jQuery('body').on('click', '.cmicca_accesscode2fa_trigger', function () {
        var that = jQuery(this);
        that.attr('disabled', 'disabled');
        var accesscodebox_2fa_required_msg = that.parents('.cmicca-accesscode-container').find('#cmicca_accesscode_2fa_required_msg').val();
        var accesscodebox_value = that.parents('.cmicca-accesscode-container').find('.cmicca_accesscode_value').val();
        var accesscodebox_view = that.parents('.cmicca-accesscode-container').find('.cmicca_accesscode_view').val();
        var accesscodebox_action = that.parents('.cmicca-accesscode-container').find('#cmicca_accesscode_action').val() + '_2fa';
        var accesscodebox_target = that.parents('.cmicca-accesscode-container').find('#cmicca_target_post_id').val();
        if ((accesscodebox_view == 'one' && accesscodebox_value == '') || (accesscodebox_view == 'four' && accesscodebox_value.length != 4)) {
            window.CMICCA.Utils.toast(accesscodebox_2fa_required_msg);
            setTimeout(function () {
                that.removeAttr('disabled');
            }, 3000);
        } else {
            var data = {action: accesscodebox_action, otp: accesscodebox_value, post_id: that.attr('post_id')};
            jQuery.post(CMICCA_Settings.ajaxUrl, data, function (response) {
                if (response.success == true) {
                    window.location = that.attr('targeturl');
                } else {
                    window.CMICCA.Utils.toast(response.message);
                    setTimeout(function () {
                        that.removeAttr('disabled');
                    }, 3000);
                }
            });
        }
    });

    jQuery('body').on('keyup', '.cmicca_recoveraccesscode_value', function (event) {
        if (event.keyCode == 13) {
            jQuery(this).parents('.cmicca-accesscode-container').find('.cmicca_recoveraccesscode_trigger').trigger('click');
        }
    });
    jQuery('body').on('click', '.cmicca_recoveraccesscode_trigger', function () {
        var that = jQuery(this);
        that.attr('disabled', 'disabled');
        var recoveraccesscodebox_name_required_msg = that.parents('.cmicca-accesscode-container').find('#cmicca_recoveraccesscode_name_required_msg').val();
        var recoveraccesscodebox_name_value = that.parents('.cmicca-accesscode-container').find('.cmicca_recoveraccesscode_name_value').val();
        var recoveraccesscodebox_phone_required_msg = that.parents('.cmicca-accesscode-container').find('#cmicca_recoveraccesscode_phone_required_msg').val();
        var recoveraccesscodebox_phone_value = that.parents('.cmicca-accesscode-container').find('.cmicca_recoveraccesscode_phone_value').val();
        var recoveraccesscodebox_required_msg = that.parents('.cmicca-accesscode-container').find('#cmicca_recoveraccesscode_required_msg').val();
        var recoveraccesscodebox_value = that.parents('.cmicca-accesscode-container').find('.cmicca_recoveraccesscode_value').val();
        var recoveraccesscodebox_action = that.parents('.cmicca-accesscode-container').find('#cmicca_recoveraccesscode_action').val();
        var recoveraccesscodebox_app = that.parents('.cmicca-accesscode-container').find('#cmicca_recoveraccesscode_app').val();

        if (typeof recoveraccesscodebox_name_value !== "undefined" && recoveraccesscodebox_name_value == '') {
            window.CMICCA.Utils.toast(recoveraccesscodebox_name_required_msg);
            setTimeout(function () {
                that.removeAttr('disabled');
            }, 1000);
        } else if (typeof recoveraccesscodebox_phone_value !== "undefined" && recoveraccesscodebox_phone_value == '') {
            window.CMICCA.Utils.toast(recoveraccesscodebox_phone_required_msg);
            setTimeout(function () {
                that.removeAttr('disabled');
            }, 1000);
        } else if (recoveraccesscodebox_value == '') {
            window.CMICCA.Utils.toast(recoveraccesscodebox_required_msg);
            setTimeout(function () {
                that.removeAttr('disabled');
            }, 1000);
        } else {
            var data = {action: recoveraccesscodebox_action, app: recoveraccesscodebox_app, name: recoveraccesscodebox_name_value, phone: recoveraccesscodebox_phone_value, email: recoveraccesscodebox_value};
            jQuery.post(CMICCA_Settings.ajaxUrl, data, function (response) {
                window.CMICCA.Utils.toast(response.message);
                setTimeout(function () {
                    that.removeAttr('disabled');
                }, 3000);
            });
        }

    });

    jQuery('body').on('change', '.cmicca_accesscode_four_value', function () {
        jQuery('.cmicca_accesscode_value').val(jQuery('#cmicca_accesscode_four_value_1').val() + jQuery('#cmicca_accesscode_four_value_2').val() + jQuery('#cmicca_accesscode_four_value_3').val() + jQuery('#cmicca_accesscode_four_value_4').val());
    });

    jQuery('body').on('keyup', '#cmicca_accesscode_four_value_1', function () {
        if (jQuery(this).val() != '') {
            jQuery('#cmicca_accesscode_four_value_2').focus().select();
        }
    });

    jQuery('body').on('keyup', '#cmicca_accesscode_four_value_2', function () {
        if (jQuery(this).val() != '') {
            jQuery('#cmicca_accesscode_four_value_3').focus().select();
        }
    });

    jQuery('body').on('keyup', '#cmicca_accesscode_four_value_3', function () {
        if (jQuery(this).val() != '') {
            jQuery('#cmicca_accesscode_four_value_4').focus().select();
        }
    });

    jQuery('body').on('keyup', '#cmicca_accesscode_four_value_4', function () {
        if (jQuery(this).val() != '') {
            jQuery('.cmicca_accesscode_trigger').focus();
        }
    });

    // to hide-show symbols in password field
    jQuery('body').on('click', '.cmicca-input-type-trigger', function (e) {
        e.preventDefault();
        var input_el = $(this).closest('.cmicca-password-block').find('input');
        var icon_el = $(this).find('.dashicons');
        if(input_el.attr("type") == "password"){
            input_el.attr("type", "text");
            icon_el.removeClass("dashicons-hidden").addClass('dashicons-visibility');
        }else{
            input_el.attr("type", "password");
            icon_el.removeClass("dashicons-visibility").addClass('dashicons-hidden');
        }
    });

});
</script>    
