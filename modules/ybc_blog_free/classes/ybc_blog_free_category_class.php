<?php
/***
* 2007-2024 PrestaShop
*
* NOTICE OF LICENSE
*
* This source file is subject to the Open Software License (OSL 3.0)
* that is bundled with this package in the file LICENSE.txt.
* It is also available through the world-wide-web at this URL:
* http://opensource.org/licenses/osl-3.0.php
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
*  @author    PrestaShop SA <contact@prestashop.com>
*  @copyright 2007-2024 PrestaShop SA
*  @license   http://opensource.org/licenses/osl-3.0.php  Open Software License (OSL 3.0)
*  @version  Release: $Revision$
*  International Registered Trademark & Property of PrestaShop SA
*/

if (!defined('_PS_VERSION_'))
	exit;
class Ybc_blog_free_category_class extends ObjectModel
{
    public $id_category;
    public $title;
    public $description;
    public $meta_description;
    public $meta_keywords;
	public $enabled;
	public $url_alias;
	public $image;
    public $sort_order;
    public $datetime_added;
    public $datetime_modified;
    public $added_by;
    public $modified_by;
    public static $definition = array(
		'table' => 'ybc_blog_free_category',
		'primary' => 'id_category',
		'multilang' => true,
		'fields' => array(
			'enabled' => array('type' => self::TYPE_BOOL, 'validate' => 'isBool', 'required' => true),
            'sort_order' => array('type' => self::TYPE_INT),
            'added_by' => array('type' => self::TYPE_INT, 'validate' => 'isunsignedInt'),
            'modified_by' => array('type' => self::TYPE_INT, 'validate' => 'isunsignedInt'),
            'image' =>	array('type' => self::TYPE_STRING, 'validate' => 'isCleanHtml', 'size' => 500),            
            'datetime_added' =>	array('type' => self::TYPE_STRING, 'validate' => 'isCleanHtml', 'size' => 500),
            'datetime_modified' =>	array('type' => self::TYPE_STRING, 'validate' => 'isCleanHtml', 'size' => 500),
            // Lang fields
            'url_alias' =>	array('type' => self::TYPE_STRING, 'lang' => true,'validate' => 'isCleanHtml', 'size' => 500, 'required' => false),
            'meta_description' => array('type' => self::TYPE_STRING, 'lang' => true,'validate' => 'isCleanHtml', 'size' => 700),
            'meta_keywords' => array('type' => self::TYPE_STRING, 'lang' => true,'validate' => 'isCleanHtml', 'size' => 700),            
			'title' => array('type' => self::TYPE_STRING, 'lang' => true, 'validate' => 'isCleanHtml', 'required' => true, 'size' => 700),			
            'description' =>	array('type' => self::TYPE_HTML, 'lang' => true, 'validate' => 'isCleanHtml', 'size' => 900000),
            
        )
	);
    public	function __construct($id_item = null, $id_lang = null, $id_shop = null, Context $context = null)
	{
		parent::__construct($id_item, $id_lang, $id_shop);
        $languages = Language::getLanguages(false);        
        foreach($languages as $lang)
        {
            foreach(self::$definition['fields'] as $field => $params)
            {   
                $temp = $this->$field; 
                if(isset($params['lang']) && $params['lang'] && !isset($temp[$lang['id_lang']]))
                {                      
                    $temp[$lang['id_lang']] = '';                        
                }
                $this->$field = $temp;
            }
        }
        unset($context);
	}
}