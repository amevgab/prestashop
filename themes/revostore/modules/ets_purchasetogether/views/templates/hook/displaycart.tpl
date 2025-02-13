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
{if !$PS_CATALOG_MODE}
	<div id="layer_cart_purchase" style="display:none">
        <div class="layer_cart_purchase_content">
		<div class="clearfix">
			<div class="layer_cart_product col-xs-12 col-md-6">
				<span class="cross" title="{l s='Close window' d='Shop.Theme.Actions'}"></span>
				<span class="title">
					{*<i class="icon-check"></i>*}{l s='Product purchased together' d='Shop.Theme.Actions'}
				</span>
                <div id="product_list"></div>
			</div>
			<div class="layer_cart_cart col-xs-12 col-md-6">
				<span class="title">
					<!-- Plural Case [both cases are needed because page may be updated in Javascript] -->
					<span class="ajax_cart_product_txt_s {if $cart_qties < 2} unvisible{/if}">
						{l s='There are [1]%d[/1] items in your cart.' d='Shop.Theme.Actions' sprintf=[$cart_qties] tags=['<span class="ajax_cart_quantity">']}
					</span>
					<!-- Singular Case [both cases are needed because page may be updated in Javascript] -->
					<span class="ajax_cart_product_txt {if $cart_qties > 1} unvisible{/if}">
						{l s='There is 1 item in your cart.' d='Shop.Theme.Actions'}
					</span>
				</span>
				<div class="layer_cart_row">
					<strong class="dark">
						{l s='Total products' d='Shop.Theme.Actions'}
						{if $use_taxes && $display_tax_label && $show_tax}
							{if $priceDisplay == 1}
								{l s='(tax excl.)' d='Shop.Theme.Actions'}
							{else}
								{l s='(tax incl.)' d='Shop.Theme.Actions'}
							{/if}
						{/if}
					</strong>
					<span class="ajax_block_products_total">
						{if $cart_qties > 0}
							{convertPrice price=$cart->getOrderTotal(false, Cart::ONLY_PRODUCTS)}
						{/if}
					</span>
				</div>

				{if $show_wrapping}
					<div class="layer_cart_row">
						<strong class="dark">
							{l s='Wrapping' d='Shop.Theme.Actions'}
							{if $use_taxes && $display_tax_label && $show_tax}
								{if $priceDisplay == 1}
									{l s='(tax excl.)' d='Shop.Theme.Actions'}
								{else}
									{l s='(tax incl.)' d='Shop.Theme.Actions'}
								{/if}
							{/if}
						</strong>
						<span class="price cart_block_wrapping_cost">
							{if $priceDisplay == 1}
								{convertPrice price=$cart->getOrderTotal(false, Cart::ONLY_WRAPPING)}
							{else}
								{convertPrice price=$cart->getOrderTotal(true, Cart::ONLY_WRAPPING)}
							{/if}
						</span>
					</div>
				{/if}
				<div class="layer_cart_row">
					<strong class="dark{if $shipping_cost_float == 0 && (!$cart_qties || $cart->isVirtualCart() || !isset($cart->id_address_delivery) || !$cart->id_address_delivery)} unvisible{/if}">
						{l s='Total shipping' d='Shop.Theme.Actions'}&nbsp;{if $use_taxes && $display_tax_label && $show_tax}{if $priceDisplay == 1}{l s='(tax excl.)' d='Shop.Theme.Actions'}{else}{l s='(tax incl.)' d='Shop.Theme.Actions'}{/if}{/if}
					</strong>
					<span class="ajax_cart_shipping_cost{if $shipping_cost_float == 0 && (!$cart_qties || $cart->isVirtualCart() || !isset($cart->id_address_delivery) || !$cart->id_address_delivery)} unvisible{/if}">
						{if $shipping_cost_float == 0}
							 {if (!isset($cart->id_address_delivery) || !$cart->id_address_delivery)}{l s='To be determined' d='Shop.Theme.Actions'}{else}{l s='Free shipping!' d='Shop.Theme.Actions'}{/if}
						{else}
							{$shipping_cost|escape:'html':'UTF-8'}
						{/if}
					</span>
				</div>
				{if $show_tax && isset($tax_cost)}
					<div class="layer_cart_row">
						<strong class="dark">{l s='Tax' d='Shop.Theme.Actions'}</strong>
						<span class="price cart_block_tax_cost ajax_cart_tax_cost">{$tax_cost|escape:'html':'UTF-8'}</span>
					</div>
				{/if}
				<div class="layer_cart_row">
					<strong class="dark">
						{l s='Total' d='Shop.Theme.Actions'}
						{if $use_taxes && $display_tax_label && $show_tax}
							{if $priceDisplay == 1}
								{l s='(tax excl.)' d='Shop.Theme.Actions'}
							{else}
								{l s='(tax incl.)' d='Shop.Theme.Actions'}
							{/if}
						{/if}
					</strong>
					<span class="ajax_block_cart_total">
						{if $cart_qties > 0}
							{if $priceDisplay == 1}
								{convertPrice price=$cart->getOrderTotal(false)}
							{else}
								{convertPrice price=$cart->getOrderTotal(true)}
							{/if}
						{/if}
					</span>
				</div>
				<div class="button-container">
					<span class="continue btn btn-default button exclusive-medium btn-continue" title="{l s='Continue shopping' d='Shop.Theme.Actions'}">
						<span>
							<i class="icon-chevron-left left"></i>{l s='Continue shopping' d='Shop.Theme.Actions'}
						</span>
					</span>
					<a class="btn btn-default button button-medium"	href="{$link->getPageLink("$order_process", true)|escape:"html":"UTF-8"}" title="{l s='Proceed to checkout' d='Shop.Theme.Actions'}" rel="nofollow">
						<span>
							{l s='Proceed to checkout' d='Shop.Theme.Actions'}<i class="icon-chevron-right right"></i>
						</span>
					</a>
				</div>
			</div>
		</div>
		<div class="crossseling"></div>
        </div>
	</div> <!-- #layer_cart -->
	<div class="layer_cart_overlay"></div>
{/if}
