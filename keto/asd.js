<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous">
<style>
  @import url('https://fonts.googleapis.com/css2?family=Asap:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap');
  * {
    font-family: 'Asap', sans-serif;
  }
  @media only screen and (min-width: 767px) {
    body.calculatorClass .container.dropdown__wrapper {
      justify-content: space-between;
      display: flex;
      width: 100%;
    }

    body.calculatorClass .thirteen.columns.nav.mobile_hidden {
      display: flex;
      justify-content: flex-start;
      flex-direction: row-reverse;
      width: 100%;
    }

    body.calculatorClass .thirteen.columns.nav.mobile_hidden ul {
      margin-left: 10px;
    }
    .main-flex{
      flex-wrap: wrap;
      padding: 0px;
    }
    .main-width1{
      width: 100%;
    }
  }
  @media only screen and (max-width: 767px) {
    body.calculatorClass a.mobile_logo.logo {
      text-align: center;
      margin: auto;
      max-width: max-content;
    }
    body.calculatorClass div#shopify-section-footer div.container {
      display: block !important;
    }

    body.calculatorClass div#shopify-section-footer div.container ul {
      display: block !important;
    }

    body.calculatorClass div#shopify-section-footer div.container ul li {
      width: 100%;
    }
  }
  .boxUpper {
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    max-width: 1000px;
    margin: 50px auto;
    padding: 40px;
    border-radius: 8px;
  }

  .calculatorInput h5 {
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 15px;
  }

  .calculatorInput label, .calculatorInput input, .calculatorInput select {
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  }

  .calculatorInput input[type="email"], .calculatorInput select, .calculatorInput input[type="text"], .calculatorInput input[type="number"] {
    min-height: 50px;
    width: 100%;
    border: 0;
    padding: 0px 10px;
    font-size: 15px;
    margin-bottom: 30px;
  }

  input[type="email"]::placeholder, 
  select::placeholder, 
  input[type="text"]::placeholder, 
  input[type="number"]::placeholder {
    color: #000;
    opacity: 0.4;
    text-transform: capitalize;
    font-weight: 600;
  }

  .margini {
    margin-bottom: 30px;
  }
  .boxUpper input[type="checkbox"], .boxUpper input[type="radio"] {
    display: none;
  }
  .inputRadio label {
    width: 100%;
    min-height: 200px;
    padding: 20px;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    border-radius: 10px;
  }

  .inputRadio label img {
    margin-left: auto;
  }

  img {
    max-width: 100%;
    display: block;
  }

  .calculatorInput label {
    cursor: pointer;
    min-height: 40px;
    border-radius: 9px;
    padding: 20px 20px;
  }

  .calculateBUtton {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 50px;
    background: #3D98C9;
    border: 2px solid #3D98C9;
    color: #fff;
    font-weight: 600;
    font-size: 18px;
    letter-spacing: 0.2px;
    border-radius: 6px;
    transition: 0.6s all;
  }

  .calculateBUtton:hover {
    background: none;
    color: #3D98C9;
  }

  .calculatorInput label {
    width: 100%;
  }
  div#unittype label {
    text-align: center;
  }

  span.checkedLabel {
    display: block;
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background: #3D98C9;
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    display: none;
  }

  label {position: relative;}

  span.checkedLabel:after {content: "";display: block;width: 4px;height: 7px;border: 2px solid #fff;position: absolute;right: 0;left: 0;bottom: 0;top: -2px;margin: auto;border-left: 0;border-top: 0;transform: rotate(45deg);}

  div#unittype input:checked ~ label span {
    display: block;
  }
  /* Chrome, Safari, Edge, Opera */
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  input[type=number] {
    -moz-appearance: textfield;
  }
  *:focus {
    outline: none !important;
  }
  .inputRadio label {
    border: 1px solid transparent;
  }

  .inputRadio input:checked ~ label {
    border-color: #87C6A8;
  }
  .inputRadio input:checked ~ label span {
    display: block;
    position: absolute;
    right: 21px;
    top: 11px;
    bottom: auto;
  }
  div#unittype input:checked ~ label {
    border: 1px solid #87C6A8;
  }
  div#checkboxContainer label {
    box-shadow: none;
    max-width: max-content;
    position: relative;
  }

  .inputexcersize {
    display: flex;
    align-items: center;
  }

  label.exerciseyes {
    padding-left: 60px;
    position: relative;
  }

  label.exerciseyes::after {
    content: "";
    display: block;
    width: 50px;
    height: 40px;
    position: absolute;
    border: 3px solid #3D98C9;
    top: 0;
    bottom: 0;
    margin: auto;
    left: -4px;
    height: 24px;
    border-radius: 60px;
  }

  div#checkboxContainer input:checked label.exerciseyes::before {
    content: "";
    background: red;
    width: 20px;
    height: 20px;
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
  }
  .bannerContainer {
    min-height: 600px;
    background: #F4F8F1;
    display: flex;
    align-items: center;
  }

  .bannerContent {
    max-width: 470px;
  }

  .bannerContent h2 {
    font-weight: 700;
    font-size: 35px;
  }

  .bannerContent p {
    font-size: 18px;
    line-height: 29px;
    margin: 20px 0px 0px;
  }

  .bannerContent h6 {
    font-weight: 600;
    font-size: 18px;
  }
  div#shopify-section-footer div.container {
    margin: 0 auto !important;
    padding: 20px 0 !important;
    display: flex !important;
  }
  .footer_menu li {
    display: inline-block;
    padding-right: 18px;
  }
  .boxContainer {
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    max-width: 1000px;
    margin: 50px auto;
    padding: 40px;
    border-radius: 8px;
  }

  .boxContainer h5 {
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 15px;
  }

  .boxContainer input {
    min-height: 50px;
    width: 100%;
    border: 0;
    padding: 0px 10px;
    font-size: 15px;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    margin-bottom: 30px;
  }
  .content {
    line-height: 30px;
    font-size: 16px;
    font-weight: 300;
  }
  input[type=checkbox], input[type=radio] {
    display: none;
  }
  .termsandCondition input ~ label::before {
    content: "";
    display: block;
    width: 20px;
    height: 20px;
    border: 1px solid #cccccc47;
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    box-shadow: rgb(149 157 165 / 44%) 0px 8px 24px;
  }

  .termsandCondition input ~ label {
    padding-left: 32px;
  }

  label {
    cursor: pointer;
    user-select: none;
  }

  .termsandCondition input:checked ~ label::after {
    content: "";
    display: block;
    width: 5px;
    height: 10px;
    border: 3px solid #3d98c9;
    position: absolute;
    left: 8px;
    top: 0px;
    bottom: 0;
    margin: auto;
    border-left: 0;
    border-top: 0;
    transform: rotate(45deg);
  }

  .termsandCondition input:checked ~ label::before {
    border-color: #3d98c9;
  }
  .termsandCondition a {
    color: #000;
  }

  .macros-heading h2 {
    font-size: 30px;
    font-weight: 600;
  }

  .macros-heading p {
    font-size: 18px;
    line-height: 1.8;
    margin-top: 20px;
  }


  .macros-data .macros-main h5 {
    font-size: 18px;
  }

  .macros-data .macros-main h5 span {
    color: #87C6A8;
    margin-left: 5px;
  }
  .macros-table tbody tr:nth-child(odd) {
    background-color: rgba(135,198,168,.5);
  }

  .macros-table tbody tr {
    background-color: rgba(61,152,201,.5);
    /* padding: 37px; */
    height: 50px;
    font-size: 18px;
  }

  .macros-table tbody tr td:first-child {
    font-weight: 700;
    padding: 0 25px;
  }

  .macros-table {
    margin-top: 30px;
  }
  .boxContainer {
    /* display: none; */
  }

  .calculated-macros {
    display: none;
  }
  .calculated-macros.active {
    display: block !important;
  }
  .container .offset-by-five {
    padding-left: 0px;
  }
  h5.smart-log {
    text-align: center;
  }
  .main-flex {
    display: flex;
    justify-content: space-between;
    padding: 0 10%;
  }

  .main-width1 {
    width: 48%;
    padding: 0 4%;
  }
  .column, .columns{
    float:none!important;
    margin-left: 0px; 
    margin-right: 0px;
  }
  div.content, .shopify-policy__container {
    padding: 0px 0px 0px 0px;
  }
  h5.smart-log {
    text-align: center;
    margin-bottom: 0px;
    padding-bottom: 0px;
    margin-top:40px;
  }
  h5.smart-reg {
    text-align: center;
    margin-bottom: 0px;
    padding-bottom: 0px;
    margin-top:40px;
  }
  div#customer {
    margin: 0px;
  }
  .registration .clear {
    display:none;
  }
  div.section {
    margin: 0;
  }
  @media only screen and (max-width: 767px) {
    body.calculatorClass .container.dropdown__wrapper {
      justify-content: space-between;
      display: flex;
      width: 100%;
    }

    body.calculatorClass .thirteen.columns.nav.mobile_hidden {
      display: flex;
      justify-content: flex-start;
      flex-direction: row-reverse;
      width: 100%;
    }

    body.calculatorClass .thirteen.columns.nav.mobile_hidden ul {
      margin-left: 10px;
    }
    .main-flex{
      flex-wrap: wrap;
      padding: 0px;
    }
    .main-width1{
      width: 100%;
    }
  }
  @media only screen and (max-width: 590px) {
    div.container,.smart-log,.smart-reg,.seven,.footer_menu,.newsletter,.payment_methods,.footer p   {
      padding: 20px;
    }
    .seven{display:block}
    .seven p{
      padding:0;
    }
  }
  @media only screen and (max-width: 420px) {
    div.container,.smart-log,.smart-reg,.seven,.footer_menu,.newsletter,.payment_methods,.footer p   {
      padding: 10px;
    }
    .seven p{
      padding:0;
    }
</style>

<div class="bannerContainer">
  <div class="container">
    <div class="bannerContent">
      <h6>{{section.settings.title}}</h6>
      <h2>{{section.settings.heading}}</h2>
      <p>{{section.settings.text}}</p>
    </div>
  </div>
</div>
{% if customer %}
<div class="container" id="caculatorBox">
  <div class="boxUpper">
    <h2>Keto Macro Calculator</h2>
    <div class="calculatorInput">
      <div class="row">
        <div class="col-md-6 margini" id="unittype">
          <h5>What unit type do you prefer?</h5>
          <div class="row" id="meterUnit">
            <div class="col-md-6">
              <input checked="checked" value="metricSelected" type="radio" name="unitytype" id="Metric" required>
              <label for="Metric">Metric <span class="checkedLabel"></span></label>
            </div>
            <div class="col-md-6">
              <input value="imperialSelected" type="radio" name="unitytype" id="Imperial" required>
              <label for="Imperial">Imperial <span class="checkedLabel"></span></label>
            </div>
          </div>
        </div>
        <div class="col-md-6 margini"  id="unittype">
          <h5>Your Gender</h5>
          <div class="row" id="genderCheck">
            <div class="col-md-6">
              <input value="5" type="radio" name="Gender" id="Male" required>
              <label for="Male">Male <span class="checkedLabel"></span></label>
            </div>
            <div class="col-md-6">
              <input value="-161" type="radio" name="Gender" id="Female">
              <label for="Female">Female <span class="checkedLabel"></span></label>
            </div>
          </div>
        </div>
        <div class="col-md-6 margini" id="yourageCheck">
          <h5>Your Age</h5>
          <input type="number" name="" placeholder="write age in years" id="yourage" required>
        </div>
        <div class="col-md-6 margini" id="yourweightValue">
          <h5>Your Weight</h5>
          <input type="number" name="" placeholder="write weight in Kg" id="yourweight" required>
        </div>
        <div class="col-md-6 margini">
          <h5>Your Height</h5>
          <div class="row" id="yourheights">
            <div class="col-md-12">
              <input type="number" name="" placeholder="In cm" id="yourheight" required>
            </div>
          </div>
        </div>
        <div class="col-md-6 margini" id="fatPercentages">
          <h5>Body Fat Percentage</h5>
          <input type="number" name="" placeholder="write body fat percentage in %" id="fatPercentage" required>
        </div>
        <div class="col-md-12 margini">
          <h5>Your Activity Level</h5>
          <div class="row" id="activityLevelCheck">
            <div class="col">
              <div class="inputRadio">
                <input value="1.21" type="radio" name="activityLevel" id="activityLevel1" required>
                <label for="activityLevel1"><span class="checkedLabel"></span><h6>Sedentary</h6> <img src="https://cdn.shopify.com/s/files/1/0081/2367/8810/files/1.svg?v=1610733669"></label>
              </div>
            </div>
            <div class="col">
              <div class="inputRadio">
                <input value="1.32" type="radio" name="activityLevel" id="activityLevel2" required>
                <label for="activityLevel2"><span class="checkedLabel"></span><h6>Light Active</h6> <img src="https://cdn.shopify.com/s/files/1/0081/2367/8810/files/2.svg?v=1610733674"></label>
              </div>
            </div>
            <div class="col">
              <div class="inputRadio">
                <input value="1.54" type="radio" name="activityLevel" id="activityLevel3" required>
                <label for="activityLevel3"><span class="checkedLabel"></span><h6>Active</h6> <img src="https://cdn.shopify.com/s/files/1/0081/2367/8810/files/3.svg?v=1610733680"></label>
              </div>
            </div>
            <div class="col">
              <div class="inputRadio">
                <input value="1.76" type="radio" name="activityLevel" id="activityLevel4" required>
                <label for="activityLevel4"><span class="checkedLabel"></span><h6>Very Active</h6> <img src="https://cdn.shopify.com/s/files/1/0081/2367/8810/files/4.svg?v=1610733687"></label>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-12 margini"  id="unittype">
          <h5>Your End Goal</h5>
          <div class="row">
            <div class="col">
              <div class="radioGoal">
                <input type="radio" name="Goal" id="Goal1" required>
                <label for="Goal1"><span class="checkedLabel"></span>Lose Weight</label>
              </div>
            </div>
            <div class="col">
              <div class="radioGoal">
                <input type="radio" name="Goal" id="Goal2" required>
                <label for="Goal2"><span class="checkedLabel"></span>Maintain</label>
              </div>
            </div>
            <div class="col">
              <div class="radioGoal">
                <input type="radio" name="Goal" id="Goal3" required>
                <label for="Goal3"><span class="checkedLabel"></span>Gain Weight</label>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-12 margini">
          <h5>How many carbs do you want to consume?</h5>
          <input type="number" name="" placeholder="Write Carbs intake in grams" id="carbsinGrams" required>
        </div>

      </div>
    </div>
  </div>
</div>
<div class="contactFOrm">
  <div class="container">
    <div class="boxContainer" id="inputFiles">
      <h5>Get Your Results</h5>
      <p class="content">
        By checking the box below, you agree to send your information to geniusgourmet.com who agrees to use it according to their privacy policy. If you choose to provide geniusgourmet.com with your e-mail address and/or other (indirect) personally identifiable information, such information will only be used to send you communications or to respond to your inquiry.
      </p>
      <p class="termsandCondition">
        <input type="checkbox" name="termsandConditionss" id="termsandConditions" required>
        <label for="termsandConditions">I agree to the <a href="#">Terms & Conditions</a></label>
      </p>
      <div class="row">
        <div class="col-md-12">
          <button class="calculateBUtton" id="calculateresult">Calculate Results</button>
        </div>
      </div>
    </div>
  </div>
</div>
{% else %}
<div class="main-flex">
  <div class="main-width1">
    <div class="smart-account">
      <div>
        <h5 class="smart-log" style="font-size:1.6rem;">To access this page, please log in</h5>
        <!--     <a class="btn" href="/account/login">Login</a> -->
        <div class="container main content main-wrapper">
          <div class="sixteen columns clearfix collection_nav">
            <h1 class="center">{{ 'customer.login.title' | t }}</h1>
            <div class="feature_divider"></div>
          </div>

          <div class="sixteen columns" id="customer">  
            <div class="six columns offset-by-five animated fadeInUp" id="login_form">

              {% form 'customer_login' %}
              <input type="hidden" name="checkout_url" value="/pages/keto-calculator" />
              {{ form.errors | default_errors }}

              <label for="customer_email" class="login">{{ 'customer.login.email' | t }}</label>
              <input type="email" value="" name="customer[email]" id="customer_email" class="large" size="30"  autocorrect="off" autocapitalize="off" tabindex="1" />

              {% if form.password_needed %}

              {% comment %}
              Customer Account Login
              {% endcomment %}

              <small class="right"><em><a href="#" onclick="showRecoverPasswordForm()">{{ 'customer.login.forgot_password' | t }}</a></em></small>
              <label for="customer_password" class="login">{{ 'customer.login.password' | t }}</label>
              <input type="password" value="" name="customer[password]" id="customer_password" class="large password" size="16" tabindex="2" />

              {% endif %}

              <input class="btn action_button" type="submit" value="{{ 'customer.login.sign_in' | t }}" style="margin-bottom: 5px !important" tabindex="3" />

              {% unless shop.checkout.guest_login %}
              <p class="right" style="padding-top: 10px;">
                {{ 'customer.login.new_customer_label' | t }} {{ 'customer.login.sign_up_html' | t | customer_register_link }}
              </p>
              {% endunless %}
              {% endform %}

              {% if shop.checkout.guest_login %}
              <span class="or"> {{ 'customer.login.or' | t }} </span>
              {% form 'guest_login' %}
              <input class="guest_button" type="submit" value="{{ 'customer.login.guest_title_html' | t }}" />
              {% endform %}
              {% endif %}
            </div>

            <div id="recover-password" style='display:none'>
              <div class="six columns offset-by-five animated fadeInUp">

                <h4>{{ 'customer.recover_password.title' | t }}</h4>

                {% form 'recover_customer_password' %}
                {{ form.errors | default_errors }}

                {% if form.posted_successfully? %}
                {% assign reset_success = true %}
                {% endif %}

                {% if reset_success %} 
                <p>
                  <em class="note">{{ 'customer.recover_password.success' | t }}</em>
                </p>
                {% else %} 
                <div id="recover_email" class="clearfix large_form">
                  <label for="email" class="large">{{ 'customer.recover_password.email' | t }}</label>
                  <input type="email" value="" size="30" name="email" id="recover-email" class="large" autocorrect="off" autocapitalize="off" />
                </div>

                <p>
                  <em class="note">{{ 'customer.recover_password.subtext' | t }}</em>
                </p>

                <div class="action_bottom">
                  <input class="btn action_button" type="submit" value="{{ 'customer.recover_password.submit' | t }}" />
                  <span class="note">{{ 'customer.recover_password.or' | t }} <a href="#" onclick="hideRecoverPasswordForm()">{{ 'customer.recover_password.cancel' | t }}</a></span>
                </div>
                {% endif %}

                {% endform %}
              </div>
            </div>
          </div>
        </div>

        <script type="text/javascript">
          function showRecoverPasswordForm() {
            document.getElementById('recover-password').style.display = 'block';
            document.getElementById('login_form').style.display = 'none';
            return false;
          }

          function hideRecoverPasswordForm() {
            document.getElementById('recover-password').style.display = 'none';
            document.getElementById('login_form').style.display = 'block';
            return false;
          }

          if (window.location.hash == '#recover') { showRecoverPasswordForm() }

          // reset_success is only true when the reset form is
          {% if reset_success %}
          showRecoverPasswordForm();
          {% endif %}
        </script>
      </div>
    </div>
  </div>
  <div class="main-width1">
    <div>
      <h5 class="smart-reg" style="font-size:1.6rem;">New to the site? Please register</h5> 
      <!--     <a class="btn" href="/account/register">Register</a> -->
      {% comment %}
      ** Registration template - default view **
      {% endcomment %}

      <section class="registration">
        <div class="container main content main-wrapper">
          <div class="sixteen columns clearfix collection_nav">
            <h1 class="center">{{ 'customer.register.title' | t }}</h1>
            <div class="feature_divider"></div>
          </div>

          <div class="section clearfix">  
            <div class="six columns offset-by-five">
              <br class="clear" />
              <div id="customer">
                <!-- Create Customer -->
                <div id="create-customer">

                  {% form 'create_customer' %}
                  {% if section.settings.richtext != blank %}
                  {{ section.settings.richtext }}
                  {% endif %}

                  {{ form.errors | default_errors }}

                  <div id="first_name" class="clearfix large_form">
                    <label for="first_name" class="login">{{ 'customer.register.first_name' | t }}</label>
                    <input type="text" value="" name="customer[first_name]" id="first_name" class="large" size="30" />
                  </div>

                  <div id="last_name" class="clearfix large_form">
                    <label for="last_name" class="login">{{ 'customer.register.last_name' | t }}</label>
                    <input type="text" value="" name="customer[last_name]" id="last_name" class="large" size="30" />
                  </div>

                  <div id="email" class="clearfix large_form">
                    <label for="email" class="login">{{ 'customer.register.email' | t }}</label>
                    <input type="email" value="" name="customer[email]" id="email" class="large" size="30" />
                  </div>

                  <div id="password" class="clearfix large_form">
                    <label for="password" class="login">{{ 'customer.register.password' | t }}</label>
                    <input type="password" value="" name="customer[password]" id="password" class="large password" size="30" />
                  </div>

                  <div class="acceptsMarketing">
                    <input type="checkbox" id="customer[accepts_marketing]" name="customer[accepts_marketing]">
                    <label for="customer[accepts_marketing]">{{ section.settings.accepts_marketing_richtext }}</label>
                  </div>

                  <div class="action_bottom">
                    <input class="btn action_button" type="submit" value="{{ 'customer.register.sign_up' | t }}" />
                    <p class="right" style="padding-top: 8px;">
                      {{ 'customer.register.returning_customer_label' | t }} {{ 'customer.register.sign_in_html' | t | customer_login_link }}
                    </p>
                  </div>

                  {% endform %}
                </div><!-- /#create-customer -->
              </div>
            </div>
          </div>
        </div>
      </section>


    </div>  
  </div>

</div>


{% endif %}
<div class="calculated-macros">
  <div class="container">
    <div class="boxContainer">
      <div class="macros">
        <div class="macros-heading">
          <h2>Your Calculated Macros</h2>
          <p>
            Below are the calculated macronutrient values to help you achieve your goals. Please keep in mind that these calculations are estimates and small differences won't impair your progress. You likely have different energy requirements every day, so what really matters is the long-term average, e.g. over a week, not your exact daily values.
          </p>
        </div>
        <div class="macros-data">
          <div class="macros-main">
            <h5>Your BMR is: <span class="bmr"></span></h5>
            <h5>Calories to consume: <span class="consume"></span></h5>
            <h5>Your fat intake should be: <span class="gfat"></span></h5>
          </div>
          <div class="macros-table">
            <table style="width:100%">
              <tr>
                <th></th>
                <th>Calories</th>
                <th>Grams</th> 
                <th>Percent</th>
              </tr>
              <tr>
                <td>Calories</td>
                <td class="consume"></td>
                <td class="gcal">-</td>
                <td class="percentcal">-</td>
              </tr>
              <tr>
                <td>Carbs</td>
                <td class="kcarbs"></td>
                <td class="gcarbs"></td>
                <td class="percentcarbs"></td>
              </tr>
              <tr>
                <td>Protein</td>
                <td class="kprotein"></td>
                <td class="gprotein"></td>
                <td class="percentprotein"></td>
              </tr>
              <tr>
                <td>Fat</td>
                <td class="kfat"></td>
                <td class="gfat"></td>
                <td class="percentfat"></td>
              </tr>

            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<!-- <div class="contactFOrm">
<div class="container">
<div class="boxContainer" id="inputFiles">
{% form 'customer' %}
{% if form.posted_successfully? %}
<p class="message">{{ 'general.newsletter_form.success_text' | t }}</p>
{% else %}
<div class="row">
<div class="col-md-4">
<h5>First Name</h5>
<input type="text" name="contact[firstname]" placeholder="e.g. Dean">
</div>
<div class="col-md-4">
<h5>Last Name</h5>
<input type="text" name="contact[lastname]" placeholder="e.g. Morkel">
</div>
<div class="col-md-4">
<h5>Email Address</h5>
<input type="email" name="contact[email]" id="myEmail" placeholder="e.g. abc@example.com">
</div>
<div class="col-md-12">
<button type="submit" class="calculateBUtton">Subscribe</button>
</div>
</div>
{% endif %}
{% endform %}
</div>
</div>
</div> -->
{% schema %}
{
"name": "Keto Calculator",
"settings": [
{
"type":"text",
"id":"title",
"label":"Title"
},
{
"type":"text",
"id":"heading",
"label":"Headings"
},
{
"type":"textarea",
"id":"text",
"label":"Text"
}
]
}
{% endschema %}

{% stylesheet %}
{% endstylesheet %}

<!-- <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script> -->
<!-- <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js" integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV" crossorigin="anonymous"></script> -->
<script>
  /* variables For the Values */
  document.getElementById("myEmail").required = true;
  var yourage = 0;
  var yourweight = 0;
  var yourheight = 0;
  var fatPercentage = 0;
  var activityLevelCheck = 0;
  var genderValue = 0;
  var Male = true;
  var Unit;
  var fats = 0;
  var protiens = 0;
  var carbsinGrams = 0;
  /* variables For the Values */
  $('#genderCheck input').on('change', function(e) {
    // console.log($(this).val())
    if ($(this).attr('id') === "Male") {
      Male = true;
      return genderValue = 5;
    } else {
      var Male = false;
      return genderValue = -161;
    }
  });
  $('#meterUnit input').on('change', function(e) {
    var unitType = $(this).val();
    if (unitType === 'metricSelected') {
      $('#yourweight').attr("placeholder", "write weight in Kg");
      $('#yourweight').val("");
      $('#yourheight').val("");
      $('#yourheight').attr("placeholder", "in cm");
      return Unit = false;
    } else {
      $('#yourweight').attr("placeholder", "write weight in lbs");
      $('#yourheight').attr("placeholder", "in Inches");
      $('#yourheight').val("");
      $('#yourweight').val("");
      return Unit = true;
    }
  });

  $('#yourweightValue input').on('keyup change', function(e) {
    if (!Unit) {
      return yourweight = $(this).val() * 10;
    } else {
      return yourweight = (($(this).val()) / 2.205) * 10;

    }
  })
  $('#activityLevelCheck input').on('change', function(e) {
    return activityLevelCheck = $(this).val()
  })
  $('#yourageCheck input').on('change', function(e) {
    return yourage = $(this).val() * 5;
  })
  $('#yourheights input').on('change', function(e) {
    if (!Unit) {
      return yourheight = $(this).val() * 6.25;
    } else {
      return yourheight = (($(this).val()) * 2.54) * 6.25;
    }
  })
  $('#fatPercentages input').on('change', function(e) {
    return fatPercentage = ($(this).val()) / 100;
  })

  $('#carbsinGrams').on('change', function(e) {
    return carbsinGrams = ($(this).val());
  });

  $('#calculateresult').click( function(e) {
    console.clear();

    if (
      yourage <= 0
      || yourweight <= 0
      || yourheight <= 0
      || fatPercentage <= 0
      || activityLevelCheck <= 0
    ) 
    {
      alert("please Fill all the fields to see the result")
      $('#yourageCheck input, #yourweightValue input, #yourheights input, #fatPercentages input').val('');
      console.log(yourage);
      console.log(yourweight);
      console.log(yourheight);
      console.log(fatPercentage);
      console.log(activityLevelCheck);
    } else {
      $('.calculated-macros').slideDown();

      if ($("input[name='Goal']:checked").attr('id') === 'Goal1') {
        console.log('Goal 1');
        var leanMass = yourweight * (1 - (fatPercentage));
        var BMR =   ( yourweight + yourheight + genderValue ) - yourage;
        var totalCalories =   (activityLevelCheck * BMR)  * 0.8;
        var protiens = ((totalCalories * 0.2) * ( 1 - fatPercentage)) * 0.8;
        var caloriesFromCarbs = 4 * carbsinGrams;
        var caloriesFromFats = (totalCalories - protiens - caloriesFromCarbs);
        var caloriesFromFatsInGrams = caloriesFromFats / 9;
        var caloriesFromProtiensInGrams = (protiens / 4)	;
        var caloriesFromProtiensInGramsPerKgOfLeanMass = caloriesFromProtiensInGrams / (leanMass * 0.1);
        var caloriesFromFatInPercent = (caloriesFromFats / totalCalories) * 100;
        var caloriesFromProtiensInPercent = (protiens / totalCalories) * 100;
        var caloriesFromCarbsInPercent = (caloriesFromCarbs / totalCalories) * 100;
      } else if ($("input[name='Goal']:checked").attr('id') === 'Goal2') {
        console.log('Goal 2');
        var leanMass = yourweight * (1 - (fatPercentage));
        var BMR =   ( yourweight + yourheight + genderValue ) - yourage;
        var totalCalories =   activityLevelCheck * BMR;
        var protiens = (totalCalories * 0.2) * ( 1 - fatPercentage);
        var caloriesFromCarbs = 4 * carbsinGrams;
        var caloriesFromFats = totalCalories - protiens - caloriesFromCarbs;
        var caloriesFromFatsInGrams = caloriesFromFats / 9;
        var caloriesFromProtiensInGrams = (protiens / 4)	;
        var caloriesFromProtiensInGramsPerKgOfLeanMass = caloriesFromProtiensInGrams / (leanMass * 0.1);
        var caloriesFromFatInPercent = (caloriesFromFats / totalCalories) * 100;
        var caloriesFromProtiensInPercent = (protiens / totalCalories) * 100;
        var caloriesFromCarbsInPercent = (caloriesFromCarbs / totalCalories) * 100;
      } else {
        console.log('Goal 3');
        var leanMass = yourweight * (1 - (fatPercentage));
        var BMR =   ( yourweight + yourheight + genderValue ) - yourage;
        var totalCalories =   (activityLevelCheck * BMR)  * 1.2;
        var protiens = ((totalCalories * 0.2) * ( 1 - fatPercentage)) * 1.2;
        var caloriesFromCarbs = 4 * carbsinGrams;
        var caloriesFromFats = (totalCalories - protiens - caloriesFromCarbs);
        var caloriesFromFatsInGrams = caloriesFromFats / 9;
        var caloriesFromProtiensInGrams = (protiens / 4)	;
        var caloriesFromProtiensInGramsPerKgOfLeanMass = caloriesFromProtiensInGrams / (leanMass * 0.1);
        var caloriesFromFatInPercent = (caloriesFromFats / totalCalories) * 100;
        var caloriesFromProtiensInPercent = (protiens / totalCalories) * 100;
        var caloriesFromCarbsInPercent = (caloriesFromCarbs / totalCalories) * 100;
      }

      console.log(Unit);

      console.log('BMR = ' + BMR);
      console.log('Carbs in Grams = ' + carbsinGrams);
      console.log('Calories from Protiens = ' + protiens);
      console.log('calories From Carbs = ' + caloriesFromCarbs);
      console.log('is Male = ' + Male);
      console.log('is Unit Lbs = ' + Male);
      console.log('yourage = ' + yourage);
      console.log('Your Weight = ' + yourweight);
      console.log('Your Height = ' + yourheight);
      console.log('fatPercentage = ' + fatPercentage);
      console.log('activityLevelCheck = ' + activityLevelCheck);
      console.log('leanMass = ' + leanMass);
      console.log('Gender Value = ' + genderValue);
      console.log('Total Calories = ' + totalCalories);
      console.log('Calories From Fats = ' + caloriesFromFats);
      console.log('Calories From Fats In Grams = ' + caloriesFromFatsInGrams);
      console.log('calories From Protiens In Grams = ' + caloriesFromProtiensInGrams);
      console.log('Calories From Protiens In Grams Per Kg Of Lean Mass = ' + caloriesFromProtiensInGramsPerKgOfLeanMass);
      console.log('calories From Fat In Percent = ' + caloriesFromFatInPercent);
      console.log('calories From Protiens In Percent = ' + caloriesFromProtiensInPercent);
      console.log('calories From Carbs In Percent = ' + caloriesFromCarbsInPercent);

      var bmr_round =  BMR.toFixed(0);
      var protiens_round =  protiens.toFixed(0);
      var FromCarbs =  caloriesFromCarbs.toFixed(0);
      var totalCalories_round =  totalCalories.toFixed(0);
      var FromFats =  caloriesFromFats.toFixed(0);
      var FatsInGrams =  caloriesFromFatsInGrams.toFixed(0);
      var PerKgOfLeanMass =  caloriesFromProtiensInGramsPerKgOfLeanMass.toFixed(0);
      var FatInPercent =  caloriesFromFatInPercent.toFixed(2);
      var ProtiensInPercent =  caloriesFromProtiensInPercent.toFixed(2);
      var CarbsInPercent =  caloriesFromCarbsInPercent.toFixed(2);


      $('.bmr').text(bmr_round + ' cal');
      $('.gcarbs').text(carbsinGrams + ' grams');
      $('.kprotein').text(protiens_round + ' cal');
      $('.kcarbs').text(FromCarbs + ' cal');
      $('.consume').text(totalCalories_round + ' cal');

      $('.kfat').text(FromFats + ' cal');
      $('.gfat').text(FatsInGrams + ' grams');
      $('.gprotein').text(PerKgOfLeanMass + ' grams');
      $('.percentfat').text(FatInPercent + ' %');
      $('.percentprotein').text(ProtiensInPercent + ' %');
      $('.percentcarbs').text(CarbsInPercent + ' %');

    })
    $(function(){
      $("#calculateresult").click(function(){
        if($('#termsandConditions').is(":checked")){       
          $(this).submit();
        }else{
          $('.checkboxStatus').html("Please! Select Terms & Conditions checkbox");
        }
      })

    });
</script>