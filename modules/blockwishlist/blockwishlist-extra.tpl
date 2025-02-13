{*
* 2007-2024 PrestaShop
*
* NOTICE OF LICENSE
*
* This source file is subject to the Academic Free License (AFL 3.0)
* that is bundled with this package in the file LICENSE.txt.
* It is also available through the world-wide-web at this URL:
* http://opensource.org/licenses/afl-3.0.php
* If you did not receive a copy of the license and are unable to
* obtain it through the world-wide-web, please send an email
* to license@prestashop.com so we can send you a copy immediately.
*
* DISCLAIMER
*
* Do not edit or add to this file if you wish to upgrade PrestaShop to newer
* versions in the future. If you wish to customize PrestaShop for your
* needs please refer to http://www.prestashop.com for more information.
*
*  @author PrestaShop SA <contact@prestashop.com>
*  @copyright  2007-2024 PrestaShop SA
*  @license    http://opensource.org/licenses/afl-3.0.php  Academic Free License (AFL 3.0)
*  International Registered Trademark & Property of PrestaShop SA
*}

{if isset($wishlists) && count($wishlists) > 1}
    <div class="line clearfix"></div>
    <div class="buttons_bottom_block no-print panel-product-w-custom">
    	<div id="wishlist_button">
            <span class="control-label">{l s='Wishlist' mod='blockwishlist'}</span>
    		<button class="wishlist_button_extra" onclick="WishlistCart('wishlist_block_list', 'add', '{$id_product|intval}', $('#idCombination').val(), document.getElementById('quantity_wanted').value, $('#idWishlist').val()); return false;"  title="{l s='Add to wishlist' mod='blockwishlist'}">
    			<i class="fa fa-heart-o"></i>{l s='Add to my wishlist' mod='blockwishlist'}
    		</button>
            <select id="idWishlist">
    			{foreach $wishlists as $wishlist}
    				<option value="{$wishlist.id_wishlist|escape:'html':'UTF-8'}">{$wishlist.name|escape:'html':'UTF-8'}</option>
    			{/foreach}
    		</select>
    	</div>
    </div>
{else}
    <div class="line clearfix line_wishlist"></div>
    <div class="panel-product-w-custom">
        <span class="control-label">{l s='Wishlist' mod='blockwishlist'}</span>
    	<a id="wishlist_button" href="#" onclick="WishlistCart('wishlist_block_list', 'add', '{$id_product|intval}', $('#idCombination').val(), document.getElementById('quantity_wanted').value); return false;" rel="nofollow"  title="{l s='Add to my wishlist' mod='blockwishlist'}">
    		<i class="fa fa-heart-o"></i>{l s='Add to wishlist' mod='blockwishlist'}
    	</a>
    </div>
{/if}
