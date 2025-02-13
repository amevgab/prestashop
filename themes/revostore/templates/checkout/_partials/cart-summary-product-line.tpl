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
<div class="media-left">
  <a href="{$product.url|escape:'html':'UTF-8'}" title="{$product.name|escape:'html':'UTF-8'}">
    <img class="media-object" src="{$product.cover.small.url|escape:'html':'UTF-8'}" alt="{$product.name|escape:'html':'UTF-8'}">
  </a>
</div>
<div class="media-body">
  <span class="product-name">{$product.name|escape:'html':'UTF-8'}</span>
  <span class="product-quantity">x{$product.quantity|escape:'html':'UTF-8'}</span>
  <span class="product-price pull-xs-right">{$product.price|escape:'html':'UTF-8'}</span>
  {hook h='displayProductPriceBlock' product=$product type="unit_price"}
</div>
