<?php return array (
  'name' => 'revostore',
  'display_name' => 'revostore',
  'version' => '1.1.3',
  'theme_key' => 'ea63c3ba2bb09ef9f5322b9265295af3',
  'author' => 
  array (
    'name' => 'ETS-Soft',
    'email' => 'pub@prestashop.com',
    'url' => 'http://www.prestashop.com',
  ),
  'meta' => 
  array (
    'compatibility' => 
    array (
      'from' => '1.7.0.0',
      'to' => NULL,
    ),
    'available_layouts' => 
    array (
      'layout-full-width' => 
      array (
        'name' => 'Full Width',
        'description' => 'No side columns, ideal for distraction-free pages such as product pages.',
      ),
      'layout-both-columns' => 
      array (
        'name' => 'Three Columns',
        'description' => 'One large central column and 2 side columns.',
      ),
      'layout-left-column' => 
      array (
        'name' => 'Two Columns, small left column',
        'description' => 'Two columns with a small left column',
      ),
      'layout-right-column' => 
      array (
        'name' => 'Two Columns, small right column',
        'description' => 'Two columns with a small right column',
      ),
    ),
  ),
  'assets' => NULL,
  'global_settings' => 
  array (
    'configuration' => 
    array (
      'PS_IMAGE_QUALITY' => 'png',
    ),
    'modules' => 
    array (
      'to_enable' => 
      array (
        0 => 'ps_linklist',
        1 => 'ps_categoryproducts',
        2 => 'ps_bestsellers',
        3 => 'ps_specials',
        4 => 'ps_newproducts',
        5 => 'ps_viewedproduct',
        6 => 'ps_categorytree',
        7 => 'ybc_specificprices',
      ),
      'to_reset' => 
      array (
        0 => 'ets_homecategories',
        1 => 'ets_megamenu',
        2 => 'ets_multilayerslider',
        3 => 'ets_purchasetogether',
        4 => 'ybc_newsletter',
        5 => 'ybc_productimagehover',
        6 => 'ybc_themeconfig',
        7 => 'ybc_widget',
        8 => 'ybc_manufacturer',
      ),
    ),
    'hooks' => 
    array (
      'modules_to_hook' => 
      array (
        'actionAdminControllerSetMedia' => 
        array (
          0 => 'dashactivity',
          1 => 'dashtrends',
          2 => 'dashgoals',
          3 => 'graphnvd3',
        ),
        'actionAdminCurrenciesControllerSaveAfter' => 
        array (
          0 => 'ps_currencyselector',
        ),
        'actionAdminGroupsControllerSaveAfter' => 
        array (
          0 => 'ps_featuredproducts',
        ),
        'actionAdminStoresControllerUpdate_optionsAfter' => 
        array (
          0 => 'ps_contactinfo',
        ),
        'actionAttributeDelete' => 
        array (
          0 => 'ps_facetedsearch',
        ),
        'actionAttributeGroupDelete' => 
        array (
          0 => 'ps_facetedsearch',
        ),
        'actionAttributeGroupSave' => 
        array (
          0 => 'ps_facetedsearch',
        ),
        'actionAttributePostProcess' => 
        array (
          0 => 'ps_facetedsearch',
        ),
        'actionAttributeSave' => 
        array (
          0 => 'ps_facetedsearch',
        ),
        'actionAuthentication' => 
        array (
          0 => 'statsdata',
        ),
        'actionCartSave' => 
        array (
          0 => 'blockwishlist',
        ),
        'actionCategoryAdd' => 
        array (
          0 => 'ps_facetedsearch',
        ),
        'actionCategoryDelete' => 
        array (
          0 => 'ps_facetedsearch',
        ),
        'actionCategoryUpdate' => 
        array (
          0 => 'ps_facetedsearch',
          1 => 'ps_mainmenu',
          2 => 'ps_featuredproducts',
        ),
        'actionCustomerAccountAdd' => 
        array (
          0 => 'ps_emailsubscription',
          1 => 'statsdata',
        ),
        'actionFeatureDelete' => 
        array (
          0 => 'ps_facetedsearch',
        ),
        'actionFeatureSave' => 
        array (
          0 => 'ps_facetedsearch',
        ),
        'actionFeatureValueDelete' => 
        array (
          0 => 'ps_facetedsearch',
        ),
        'actionFeatureValueSave' => 
        array (
          0 => 'ps_facetedsearch',
        ),
        'actionModuleRegisterHookAfter' => 
        array (
          0 => 'ps_customeraccountlinks',
        ),
        'actionModuleUnRegisterHookAfter' => 
        array (
          0 => 'ps_customeraccountlinks',
        ),
        'actionObjectCategoryAddAfter' => 
        array (
          0 => 'ps_mainmenu',
        ),
        'actionObjectCategoryDeleteAfter' => 
        array (
          0 => 'ps_mainmenu',
        ),
        'actionObjectCategoryUpdateAfter' => 
        array (
          0 => 'ps_mainmenu',
        ),
        'actionObjectCmsAddAfter' => 
        array (
          0 => 'ps_mainmenu',
        ),
        'actionObjectCmsDeleteAfter' => 
        array (
          0 => 'ps_mainmenu',
        ),
        'actionObjectCmsUpdateAfter' => 
        array (
          0 => 'ps_mainmenu',
        ),
        'actionObjectCustomerAddAfter' => 
        array (
          0 => 'dashactivity',
        ),
        'actionObjectCustomerMessageAddAfter' => 
        array (
          0 => 'dashactivity',
        ),
        'actionObjectCustomerThreadAddAfter' => 
        array (
          0 => 'dashactivity',
        ),
        'actionObjectLanguageAddAfter' => 
        array (
          0 => 'ps_banner',
        ),
        'actionObjectManufacturerAddAfter' => 
        array (
          0 => 'ps_mainmenu',
        ),
        'actionObjectManufacturerDeleteAfter' => 
        array (
          0 => 'ps_mainmenu',
        ),
        'actionObjectManufacturerUpdateAfter' => 
        array (
          0 => 'ps_mainmenu',
        ),
        'actionObjectOrderAddAfter' => 
        array (
          0 => 'dashactivity',
          1 => 'dashproducts',
        ),
        'actionObjectOrderReturnAddAfter' => 
        array (
          0 => 'dashactivity',
        ),
        'actionObjectProductAddAfter' => 
        array (
          0 => 'ps_mainmenu',
        ),
        'actionObjectProductDeleteAfter' => 
        array (
          0 => 'ps_viewedproduct',
          1 => 'ps_mainmenu',
        ),
        'actionObjectProductUpdateAfter' => 
        array (
          0 => 'ps_viewedproduct',
          1 => 'ps_mainmenu',
        ),
        'actionObjectSpecificPriceCoreAddAfter' => 
        array (
          0 => 'ps_specials',
        ),
        'actionObjectSpecificPriceCoreDeleteAfter' => 
        array (
          0 => 'ps_specials',
        ),
        'actionObjectSpecificPriceCoreUpdateAfter' => 
        array (
          0 => 'ps_specials',
        ),
        'actionObjectSupplierAddAfter' => 
        array (
          0 => 'ps_mainmenu',
        ),
        'actionObjectSupplierDeleteAfter' => 
        array (
          0 => 'ps_mainmenu',
        ),
        'actionObjectSupplierUpdateAfter' => 
        array (
          0 => 'ps_mainmenu',
        ),
        'actionOrderStatusPostUpdate' => 
        array (
          0 => 'dashtrends',
          1 => 'ps_bestsellers',
        ),
        'actionProductAdd' => 
        array (
          0 => 'ps_categoryproducts',
          1 => 'ps_featuredproducts',
          2 => 'ps_newproducts',
          3 => 'ps_specials',
          4 => 'ps_bestsellers',
        ),
        'actionProductDelete' => 
        array (
          0 => 'ps_categoryproducts',
          1 => 'ps_featuredproducts',
          2 => 'ps_newproducts',
          3 => 'ps_specials',
          4 => 'ps_bestsellers',
        ),
        'actionProductSave' => 
        array (
          0 => 'ps_facetedsearch',
        ),
        'actionProductUpdate' => 
        array (
          0 => 'ps_categoryproducts',
          1 => 'ets_purchasetogether',
          2 => 'ps_featuredproducts',
          3 => 'ps_newproducts',
          4 => 'ps_specials',
          5 => 'ps_bestsellers',
        ),
        'actionSearch' => 
        array (
          0 => 'dashproducts',
        ),
        'actionShopDataDuplication' => 
        array (
          0 => 'ps_imageslider',
          1 => 'ps_mainmenu',
        ),
        'actionUpdateLangAfter' => 
        array (
          0 => 'blockreassurance',
          1 => 'ps_linklist',
        ),
        'additionalCustomerFormFields' => 
        array (
          0 => 'ps_emailsubscription',
        ),
        'blogCategoriesBlock' => 
        array (
          0 => 'ybc_blog_free',
        ),
        'blogFeaturedPostsBlock' => 
        array (
          0 => 'ybc_blog_free',
        ),
        'blogGalleryBlock' => 
        array (
          0 => 'ybc_blog_free',
        ),
        'blogNewsBlock' => 
        array (
          0 => 'ybc_blog_free',
        ),
        'blogPopularPostsBlock' => 
        array (
          0 => 'ybc_blog_free',
        ),
        'blogSearchBlock' => 
        array (
          0 => 'ybc_blog_free',
        ),
        'blogSidebar' => 
        array (
          0 => 'ybc_blog_free',
        ),
        'blogSlidersBlock' => 
        array (
          0 => 'ybc_blog_free',
        ),
        'blogTagsBlock' => 
        array (
          0 => 'ybc_blog_free',
        ),
        'customcategories' => 
        array (
          0 => 'ps_categorytree_mod',
        ),
        'dashboardData' => 
        array (
          0 => 'dashactivity',
          1 => 'dashtrends',
          2 => 'dashgoals',
          3 => 'dashproducts',
        ),
        'dashboardZoneOne' => 
        array (
          0 => 'dashactivity',
        ),
        'dashboardZoneTwo' => 
        array (
          0 => 'dashtrends',
          1 => 'dashgoals',
          2 => 'dashproducts',
        ),
        'displayAdminCustomers' => 
        array (
          0 => 'blockwishlist',
        ),
        'displayAdminProductsExtra' => 
        array (
          0 => 'ets_purchasetogether',
        ),
        'displayAdminStatsGraphEngine' => 
        array (
          0 => 'graphnvd3',
        ),
        'displayAdminStatsGridEngine' => 
        array (
          0 => 'gridhtml',
        ),
        'displayAdminStatsModules' => 
        array (
          0 => 'pagesnotfound',
          1 => 'statsbestcategories',
          2 => 'statsbestcustomers',
          3 => 'statsbestproducts',
          4 => 'statsbestsuppliers',
          5 => 'statsbestvouchers',
          6 => 'statscarrier',
          7 => 'statscatalog',
          8 => 'statscheckup',
          9 => 'statsforecast',
          10 => 'statsnewsletter',
          11 => 'statspersonalinfos',
          12 => 'statsproduct',
          13 => 'statsregistrations',
          14 => 'statssales',
          15 => 'statssearch',
          16 => 'statsstock',
        ),
        'displayBackOfficeHeader' => 
        array (
          0 => 'ybc_themeconfig',
          1 => 'ybc_manufacturer',
          2 => 'productcomments',
          3 => 'ets_multilayerslider',
          4 => 'ets_megamenu',
          5 => 'ets_reviewticker',
          6 => 'ets_mailchimpsync',
          7 => 'ybc_newsletter',
          8 => 'ets_purchasetogether',
          9 => 'ybc_widget',
          10 => 'ybc_blog_free',
          11 => NULL,
        ),
        'displayBeforeBodyClosingTag' => 
        array (
          0 => 'statsdata',
        ),
        'displayBlock' => 
        array (
          0 => 'ets_megamenu',
        ),
        'displayCategoryBanner' => 
        array (
          0 => 'ets_homecategories',
        ),
        'displayCrossSellingShoppingCart' => 
        array (
          0 => 'ps_featuredproducts',
        ),
        'displayCustomDiscount' => 
        array (
          0 => 'ybc_specificprices',
        ),
        'displayCustomerAccount' => 
        array (
          0 => 'blockwishlist',
        ),
        'displayFooter' => 
        array (
          0 => 'ps_contactinfo',
          1 => 'ps_customeraccountlinks',
          2 => 'ps_linklist',
          3 => 'ps_emailsubscription',
          4 => 'ybc_themeconfig',
          5 => 'ets_reviewticker',
          6 => 'ybc_newsletter',
          7 => 'ets_purchasetogether',
          8 => 'ybc_widget',
          9 => 'ybc_specificprices',
          10 => 'ybc_blog_free',
        ),
        'displayFooterBefore' => 
        array (
          0 => 'ps_socialfollow',
          1 => 'pleasewait',
        ),
        'displayFooterProduct' => 
        array (
          0 => 'ps_viewedproduct',
          1 => 'ps_categoryproducts',
          2 => 'ets_purchasetogether',
        ),
        'displayHome' => 
        array (
          0 => 'ets_multilayerslider',
          1 => 'ets_homecategories',
          2 => 'ybc_widget',
          3 => 'ybc_blog_free',
          4 => 'ybc_manufacturer',
          5 => 'ps_featuredproducts',
          6 => 'ps_newproducts',
          7 => 'ps_specials',
          8 => 'ps_bestsellers',
        ),
        'displayLeftColumn' => 
        array (
          0 => 'ps_facetedsearch',
          1 => 'ps_categorytree',
          2 => 'ybc_widget',
          3 => 'ybc_blog_free',
        ),
        'displayLeftColumnProduct' => 
        array (
          0 => 'ets_purchasetogether',
        ),
        'displayMegaMenu' => 
        array (
          0 => 'ets_megamenu',
        ),
        'displayMLS' => 
        array (
          0 => 'ets_multilayerslider',
        ),
        'displayMLSConfigs' => 
        array (
          0 => 'ets_multilayerslider',
        ),
        'displayMLSLayer' => 
        array (
          0 => 'ets_multilayerslider',
        ),
        'displayMLSLayerSort' => 
        array (
          0 => 'ets_multilayerslider',
        ),
        'displayMLSSlide' => 
        array (
          0 => 'ets_multilayerslider',
        ),
        'displayMLSSlideInner' => 
        array (
          0 => 'ets_multilayerslider',
        ),
        'displayMLSSlider' => 
        array (
          0 => 'ets_multilayerslider',
        ),
        'displayMMItemBlock' => 
        array (
          0 => 'ets_megamenu',
        ),
        'displayMMItemColumn' => 
        array (
          0 => 'ets_megamenu',
        ),
        'displayMMItemMenu' => 
        array (
          0 => 'ets_megamenu',
        ),
        'displayMultiLayerSlide' => 
        array (
          0 => 'ets_multilayerslider',
        ),
        'displayMyAccountBlock' => 
        array (
          0 => 'blockwishlist',
        ),
        'displayNav' => 
        array (
          0 => 'ybc_widget',
        ),
        'displayNav1' => 
        array (
          0 => 'ps_languageselector',
          1 => 'ps_currencyselector',
        ),
        'displayNav2' => 
        array (
          0 => 'ps_customersignin',
          1 => 'blockwishlist',
        ),
        'displayOrderConfirmation2' => 
        array (
          0 => 'ps_featuredproducts',
        ),
        'displayPaymentReturn' => 
        array (
          0 => 'ps_checkpayment',
          1 => 'ps_wirepayment',
        ),
        'displayProductAdditionalInfo' => 
        array (
          0 => 'ps_sharebuttons',
          1 => 'ets_purchasetogether',
          2 => 'blockwishlist',
        ),
        'displayProductButtons' => 
        array (
          0 => 'ps_sharebuttons',
        ),
        'displayProductList' => 
        array (
          0 => 'ets_homecategories',
        ),
        'displayProductListFunctionalButtons' => 
        array (
          0 => 'blockwishlist',
        ),
        'displayReassurance' => 
        array (
          0 => 'blockreassurance',
        ),
        'displayRightColumn' => 
        array (
          0 => 'ybc_widget',
          1 => 'blockwishlist',
        ),
        'displaySearch' => 
        array (
          0 => 'ps_searchbar',
        ),
        'displaySubCategories' => 
        array (
          0 => 'ets_homecategories',
        ),
        'displayTop' => 
        array (
          0 => 'ps_shoppingcart',
          1 => 'ps_searchbar',
          2 => 'ets_megamenu',
          3 => 'ets_purchasetogether',
          4 => 'ybc_widget',
        ),
        'displayTopColumn' => 
        array (
          0 => 'ybc_widget',
        ),
        'NewsletterCustom' => 
        array (
          0 => 'ybc_newsletter',
        ),
        'paymentOptions' => 
        array (
          0 => 'ps_checkpayment',
          1 => 'ps_wirepayment',
        ),
        'productcustom' => 
        array (
          0 => 'blockwishlist',
        ),
        'productImageHover' => 
        array (
          0 => 'ybc_productimagehover',
        ),
        'productSearchProvider' => 
        array (
          0 => 'ps_facetedsearch',
        ),
        'search' => 
        array (
          0 => 'statssearch',
        ),
        'tabHome' => 
        array (
          0 => 'ps_featuredproducts',
          1 => 'ps_newproducts',
          2 => 'ps_specials',
          3 => 'ps_bestsellers',
        ),
        'tabHomeContent' => 
        array (
          0 => 'ps_featuredproducts',
          1 => 'ps_newproducts',
          2 => 'ps_specials',
          3 => 'ps_bestsellers',
        ),
        'ybcBlockSocial' => 
        array (
          0 => 'ybc_themeconfig',
        ),
        'ybcCopyright' => 
        array (
          0 => 'ybc_themeconfig',
        ),
        'ybcCustom1' => 
        array (
          0 => 'ybc_widget',
        ),
        'ybcCustom2' => 
        array (
          0 => 'ybc_widget',
        ),
        'ybcCustom3' => 
        array (
          0 => 'ybc_widget',
        ),
        'ybccustom4' => 
        array (
          0 => 'ybc_manufacturer',
          1 => 'ybc_widget',
        ),
        'ybcLayoutUpdate' => 
        array (
          0 => 'ybc_themeconfig',
        ),
      ),
    ),
    'image_types' => 
    array (
      'cart_default' => 
      array (
        'width' => 130,
        'height' => 98,
        'scope' => 
        array (
          0 => 'products',
        ),
      ),
      'small_default' => 
      array (
        'width' => 270,
        'height' => 377,
        'scope' => 
        array (
          0 => 'products',
          1 => 'categories',
          2 => 'manufacturers',
          3 => 'suppliers',
        ),
      ),
      'medium_default' => 
      array (
        'width' => 452,
        'height' => 339,
        'scope' => 
        array (
          0 => 'products',
          1 => 'manufacturers',
          2 => 'suppliers',
        ),
      ),
      'home_default' => 
      array (
        'width' => 450,
        'height' => 338,
        'scope' => 
        array (
          0 => 'products',
        ),
      ),
      'large_default' => 
      array (
        'width' => 800,
        'height' => 600,
        'scope' => 
        array (
          0 => 'products',
          1 => 'manufacturers',
          2 => 'suppliers',
        ),
      ),
      'category_default' => 
      array (
        'width' => 850,
        'height' => 250,
        'scope' => 
        array (
          0 => 'categories',
        ),
      ),
      'stores_default' => 
      array (
        'width' => 170,
        'height' => 115,
        'scope' => 
        array (
          0 => 'stores',
        ),
      ),
    ),
  ),
  'theme_settings' => 
  array (
    'default_layout' => 'layout-full-width',
    'layouts' => 
    array (
      'category' => 'layout-left-column',
      'best-sales' => 'layout-left-column',
      'new-products' => 'layout-left-column',
      'prices-drop' => 'layout-left-column',
      'search' => 'layout-left-column',
      'supplier' => 'layout-left-column',
      'manufacturer' => 'layout-left-column',
      'contact' => 'layout-full-width',
    ),
  ),
  'dependencies' => 
  array (
    'modules' => 
    array (
      0 => 'blockwishlist',
      1 => 'ets_homecategories',
      2 => 'ets_mailchimpsync',
      3 => 'ets_megamenu',
      4 => 'ets_multilayerslider',
      5 => 'ets_purchasetogether',
      6 => 'ets_reviewticker',
      7 => 'pleasewait',
      8 => 'ps_specials',
      9 => 'ps_bestsellers',
      10 => 'ps_newproducts',
      11 => 'ps_viewedproduct',
      12 => 'ybc_newsletter',
      13 => 'ybc_productimagehover',
      14 => 'ybc_themeconfig',
      15 => 'ybc_widget',
      16 => 'ybc_specificprices',
      17 => 'ybc_blog_free',
      18 => 'ybc_manufacturer',
      19 => 'ps_categorytree_mod',
      20 => 'ps_featuredproducts',
      21 => 'ps_categoryproducts',
    ),
  ),
);
