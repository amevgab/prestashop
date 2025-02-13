{**
 * 2007-2024 PrestaShop and Contributors
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Academic Free License 3.0 (AFL-3.0)
 * that is bundled with this package in the file LICENSE.txt.
 * It is also available through the world-wide-web at this URL:
 * https://opensource.org/licenses/AFL-3.0
 * If you did not receive a copy of the license and are unable to
 * obtain it through the world-wide-web, please send an email
 * to license@prestashop.com so we can send you a copy immediately.
 *
 * @author    PrestaShop SA <contact@prestashop.com>
 * @copyright 2007-2024 PrestaShop SA and Contributors
 * @license   https://opensource.org/licenses/AFL-3.0 Academic Free License 3.0 (AFL-3.0)
 * International Registered Trademark & Property of PrestaShop SA
 *}
{extends file='page.tpl'}
{block name='page_header_container'}
{/block}

{block name='page_content_container'}
  <div
    class="wishlist-container"
    data-url="{$url|escape:'html':'UTF-8'}"
    data-title="{$wishlistsTitlePage|escape:'html':'UTF-8'}"
    data-empty-text="{l s='No wishlist found.' d='Modules.Blockwishlist.Shop'}"
    data-rename-text="{l s='Rename' d='Modules.Blockwishlist.Shop'}"
    data-share-text="{l s='Share' d='Modules.Blockwishlist.Shop'}"
    data-add-text="{$newWishlistCTA|escape:'html':'UTF-8'}"
  ></div>

  {include file="module:blockwishlist/views/templates/components/modals/create.tpl" url=$createUrl}
  {include file="module:blockwishlist/views/templates/components/modals/delete.tpl" listUrl=$deleteListUrl productUrl=$deleteProductUrl}
  {include file="module:blockwishlist/views/templates/components/modals/share.tpl" url=$shareUrl}
  {include file="module:blockwishlist/views/templates/components/modals/rename.tpl" url=$renameUrl}
  {include file="module:blockwishlist/views/templates/components/toast.tpl"}
{/block}


{block name='page_footer_container'}
  <div class="wishlist-footer-links">
    {assign var="linkMyAccount" value=$link->getPageLink('my-account', true)}
    <a href="{$linkMyAccount|escape:'html':'UTF-8'}"><i class="material-icons">chevron_left</i>{l s='Return to your account' d='Modules.Blockwishlist.Shop'}</a>
    <a href="{$urls.base_url|escape:'html':'UTF-8'}"><i class="material-icons">home</i>{l s='Home' d='Shop.Theme.Global'}</a>
  </div>
{/block}
