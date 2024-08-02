{*
* 2007-2024 ETS-Soft
*
* NOTICE OF LICENSE
*
* This file is not open source! Each license that you purchased is only available for 1 wesite only.
* If you want to use this file on more websites (or projects), you need to purchase additional licenses. 
* You are not allowed to redistribute, resell, lease, license, sub-license or offer our resources to any third party.
* 
* DISCLAIMER
*
* Do not edit or add to this file if you wish to upgrade PrestaShop to newer
* versions in the future. If you wish to customize PrestaShop for your
* needs, please contact us for extra customization service at an affordable price
*
*  @author ETS-Soft <etssoft.jsc@gmail.com>
*  @copyright  2007-2024 ETS-Soft
*  @license    Valid for 1 website (or project) for each purchase of license
*  International Registered Trademark & Property of ETS-Soft
*}
<div class="footer-container">
  <div class="container">
    <div class="footer_top">
        {if isset($tc_config.YBC_TC_LOGO_FOOTER) && $tc_config.YBC_TC_LOGO_FOOTER}
            <div class="logo_footer">
                <img src="{$tc_module_path|escape:'html':'UTF-8'}images/config/{$tc_config.YBC_TC_LOGO_FOOTER|escape:'html':'UTF-8'}" alt="" title="" />
            </div>
        {/if}
        {hook h='ybccustom1'}
    </div> 
    <div class="footer_middle">
        {hook h='displayFooter'}
    </div> 
    {hook h='ybcCustom2'}
  </div>
  <div class="footer_after">
      <div class="container">
        <div class="row">
            {if isset($tc_config.YBC_FOOTER_LINK_CUSTOM) && $tc_config.YBC_FOOTER_LINK_CUSTOM}
                <div class="footer_link_bottom col-xs-12 col-sm-12 col-md-6">
                    {$tc_config.YBC_FOOTER_LINK_CUSTOM nofilter}
                </div>
             {/if}
            {if isset($tc_config.YBC_TC_PAYMENT_LOGO) && $tc_config.YBC_TC_PAYMENT_LOGO}
                <div class="payment_footer col-xs-12 col-sm-12 col-md-6">
                    <img src="{$tc_module_path|escape:'html':'UTF-8'}images/config/{$tc_config.YBC_TC_PAYMENT_LOGO|escape:'html':'UTF-8'}" alt="{l s='Payment methods'}" title="{l s='Payment methods'}" />
                </div>
            {/if}
          {hook h='displayFooterAfter'}
        </div>
      </div>
  </div>
  
  <div class="footer_bottom">
      <div class="container">
          <div class="row">
              {if isset($tc_config.YBC_TC_COPYRIGHT_TEXT) && $tc_config.YBC_TC_COPYRIGHT_TEXT}
                <div class="col-md-12 coppyright">
                  <div class="ybc_coppyright">
                    {$tc_config.YBC_TC_COPYRIGHT_TEXT nofilter}
                </div></div>
             {/if}
              {hook h='displayFooterBefore'}
              <div class="col-md-12 coppyright">
                  <div class="ybc_coppyright">
                     {if isset($tc_config.YBC_TC_COPYRIGHT_TEXT_EXTRA) && $tc_config.YBC_TC_COPYRIGHT_TEXT_EXTRA}
                        {$tc_config.YBC_TC_COPYRIGHT_TEXT_EXTRA nofilter}
                     {/if}
                  </div>
              </div>
          </div>
      </div>
  </div>
  <div class="scroll_top"><span>{l s='TOP' d='Shop.Theme.Checkout'}</span></div>
</div>
