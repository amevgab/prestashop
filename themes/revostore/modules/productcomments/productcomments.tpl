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
<script type="text/javascript">
var productcomments_controller_url = '{$productcomments_controller_url|escape:'html':'UTF-8'}';
var confirm_report_message = '{l s='Are you sure that you want to report this comment?' d='Shop.Theme.Actions' js=1}';
var secure_key = '{$secure_key|escape:'html':'UTF-8'}';
var productcomments_url_rewrite = '{$productcomments_url_rewriting_activated|escape:'html':'UTF-8'}';
var productcomment_added = '{l s='Your comment has been added!' d='Shop.Theme.Actions' js=1}';
var productcomment_added_moderation = '{l s='Your comment has been submitted and will be available once approved by a moderator.' d='Shop.Theme.Actions' js=1}';
var productcomment_title = '{l s='New comment' d='Shop.Theme.Actions' js=1}';
var productcomment_ok = '{l s='OK' d='Shop.Theme.Actions' js=1}';
var moderation_active = {$moderation_active|escape:'html':'UTF-8'};
</script>

<div id="idTab5" class="tab-pane fade in">
	<div id="product_comments_block_tab">
	{if $comments}
		{foreach from=$comments item=comment}
			{if $comment.content}
			<div class="comment clearfix">
				<div class="comment_author">
					<span>{l s='Grade' d='Shop.Theme.Actions'}</span>
					<div class="star_content clearfix">
					{section name="i" start=0 loop=5 step=1}
						{if $comment.grade le $smarty.section.i.index}
							<div class="star"></div>
						{else}
							<div class="star star_on"></div>
						{/if}
					{/section}
					</div>
					<div class="comment_author_infos">
						<strong>{$comment.customer_name|escape:'html':'UTF-8'}</strong><br/>
						<em>{dateFormat date=$comment.date_add|escape:'html':'UTF-8' full=0}</em>
					</div>
				</div>
				<div class="comment_details">
					<h4 class="title_block">{$comment.title|escape:'html':'UTF-8'}</h4>
					<p>{$comment.content|escape:'html':'UTF-8'|nl2br nofilter}</p>
					<ul>
						{if $comment.total_advice > 0}
							<li>{l s='%1$d out of %2$d people found this review useful.' sprintf=[$comment.total_useful,$comment.total_advice] d='Shop.Theme.Actions'}</li>
						{/if}
						{*if $logged}
							{if !$comment.customer_advice}
							<li>{l s='Was this comment useful to you?' d='Shop.Theme.Actions'}<button class="usefulness_btn" data-is-usefull="1" data-id-product-comment="{$comment.id_product_comment|escape:'html':'UTF-8'}">{l s='yes' d='Shop.Theme.Actions'}</button><button class="usefulness_btn" data-is-usefull="0" data-id-product-comment="{$comment.id_product_comment|escape:'html':'UTF-8'}">{l s='no' d='Shop.Theme.Actions'}</button></li>
							{/if}
							{if !$comment.customer_report}
							<li><span class="report_btn" data-id-product-comment="{$comment.id_product_comment|escape:'html':'UTF-8'}">{l s='Report abuse' d='Shop.Theme.Actions'}</span></li>
							{/if}
						{/if*}
					</ul>
				</div>
			</div>
			{/if}
		{/foreach}
        {if (!$too_early AND ($logged OR $allow_guests))}
		<p class="align_center">
			<a id="new_comment_tab_btn" class="open-comment-form" href="#new_comment_form">{l s='Write your review' d='Shop.Theme.Actions'} !</a>
		</p>
        {/if}
	{else}
		{if (!$too_early AND ($logged OR $allow_guests))}
		<p class="align_center">
			<a id="new_comment_tab_btn" class="open-comment-form" href="#new_comment_form">{l s='Be the first to write your review' d='Shop.Theme.Actions'} !</a>
		</p>
		{else}
		<p class="align_center">{l s='No customer reviews for the moment.' d='Shop.Theme.Actions'}</p>
		{/if}
	{/if}	
	</div>
</div>

{if isset($product_class) && $product_class}
<!-- Fancybox -->
<div style="display: none;">
	<div id="new_comment_form">
		<form id="id_new_comment_form" action="#">
			<h2 class="page-subheading">
				{l s='Write a review' d='Shop.Theme.Actions'}
			</h2>
			<div class="row">
				{if isset($product_class) && $product_class}
					<div class="product clearfix  col-xs-12 col-sm-6">
						<img src="{$productcomment_cover_image|escape:'html':'UTF-8'}" alt="{$product_class->name|escape:'html':'UTF-8'}" />
						<div class="product_desc">
							<p class="product_name">
								<strong>{$product_class->name|escape:'html':'UTF-8'}</strong>
							</p>
							{$product_class->description_short nofilter}
						</div>
					</div>
				{/if}
				<div class="new_comment_form_content col-xs-12 col-sm-6">
					<div id="new_comment_form_error" class="error" style="display: none; padding: 15px 25px">
						<ul></ul>
					</div>
					{if $criterions|@count > 0}
						<ul id="criterions_list">
						{foreach from=$criterions item='criterion'}
							<li>
								<label>{$criterion.name|escape:'html':'UTF-8'}:</label>
								<div class="star_content">
									<input class="star not_uniform" type="radio" name="criterion[{$criterion.id_product_comment_criterion|round|escape:'html':'UTF-8'}]" value="1" />
									<input class="star not_uniform" type="radio" name="criterion[{$criterion.id_product_comment_criterion|round|escape:'html':'UTF-8'}]" value="2" />
									<input class="star not_uniform" type="radio" name="criterion[{$criterion.id_product_comment_criterion|round|escape:'html':'UTF-8'}]" value="3" />
									<input class="star not_uniform" type="radio" name="criterion[{$criterion.id_product_comment_criterion|round|escape:'html':'UTF-8'}]" value="4" checked="checked" />
									<input class="star not_uniform" type="radio" name="criterion[{$criterion.id_product_comment_criterion|round|escape:'html':'UTF-8'}]" value="5" />
								</div>
								<div class="clearfix"></div>
							</li>
						{/foreach}
						</ul>
					{/if}
					<label for="comment_title">
						{l s='Title:' d='Shop.Theme.Actions'} <sup class="required">*</sup>
					</label>
					<input id="comment_title" name="title" type="text" value=""/>
					<label>
						{l s='Comment:' d='Shop.Theme.Actions'} <sup class="required">*</sup>
					</label>
					<textarea id="content_comment" name="content"></textarea>
					{if $allow_guests == true && !$is_logged}
						<label>
							{l s='Your name:' d='Shop.Theme.Actions'} <sup class="required">*</sup>
						</label>
						<input id="commentCustomerName" name="customer_name" type="text" value=""/>
					{/if}
					<div id="new_comment_form_footer">
						<input id="id_product_comment_send" name="id_product" type="hidden" value='{$id_product_comment_form|escape:'html':'UTF-8'}' />
						<p class="fl required"><sup>*</sup> {l s='Required fields' d='Shop.Theme.Actions'}</p>
						<p class="fr">
							<button id="submitNewMessage" name="submitMessage" type="submit" class="btn button button-small">
								<span>{l s='Submit' d='Shop.Theme.Actions'}</span>
							</button>&nbsp;
							{l s='or' d='Shop.Theme.Actions'}&nbsp;
							<a class="closefb" href="#">
								{l s='Cancel' d='Shop.Theme.Actions'}
							</a>
						</p>
						<div class="clearfix"></div>
					</div> <!-- #new_comment_form_footer -->
				</div>
			</div>
		</form><!-- /end new_comment_form_content -->
	</div>
</div>
<!-- End fancybox -->
{/if}
