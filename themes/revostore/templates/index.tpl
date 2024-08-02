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
{extends file='page.tpl'}

    {block name='page_content_container'}
      <section id="content" class="page-home">
        {block name='page_content_top'}{/block}
        {hook h='displayTopColumn'}
        <div class="tabs-home col-xs-12 col-sm-12">
            <ul class="tabs-home-nav">
                {hook h='tabHome'}
            </ul>
            <div class="tabs-home-content">
                <div class="row">
                    {hook h='tabHomeContent'}
                </div>
            </div>
        </div>
        {block name='page_content'}
            {hook h='ybccustom3'}
          {$HOOK_HOME nofilter}
        {/block}
      </section>
    {/block}
