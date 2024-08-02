<?php

use Twig\Environment;
use Twig\Error\LoaderError;
use Twig\Error\RuntimeError;
use Twig\Markup;
use Twig\Sandbox\SecurityError;
use Twig\Sandbox\SecurityNotAllowedTagError;
use Twig\Sandbox\SecurityNotAllowedFilterError;
use Twig\Sandbox\SecurityNotAllowedFunctionError;
use Twig\Source;
use Twig\Template;

/* @Modules/ps_mbo/views/templates/admin/controllers/module_catalog/uninstalled-modules.html.twig */
class __TwigTemplate_c0d8e84c47070ceaa4375f0a90ea2bf140a39819a951aa67f5f2bb720ff2a452 extends \Twig\Template
{
    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->blocks = [
            'content' => [$this, 'block_content'],
            'catalog_categories_listing' => [$this, 'block_catalog_categories_listing'],
            'addon_card_see_more' => [$this, 'block_addon_card_see_more'],
        ];
    }

    protected function doGetParent(array $context)
    {
        // line 25
        return "@PrestaShop/Admin/Module/common.html.twig";
    }

    protected function doDisplay(array $context, array $blocks = [])
    {
        $this->parent = $this->loadTemplate("@PrestaShop/Admin/Module/common.html.twig", "@Modules/ps_mbo/views/templates/admin/controllers/module_catalog/uninstalled-modules.html.twig", 25);
        $this->parent->display($context, array_merge($this->blocks, $blocks));
    }

    // line 27
    public function block_content($context, array $blocks = [])
    {
        // line 28
        echo "  <div class=\"row justify-content-center\">
    <div class=\"col-lg-10\">
      ";
        // line 30
        $this->displayBlock('catalog_categories_listing', $context, $blocks);
        // line 49
        echo "    </div>
  </div>
";
    }

    // line 30
    public function block_catalog_categories_listing($context, array $blocks = [])
    {
        // line 31
        echo "        <div class=\"module-short-list\">
          ";
        // line 32
        if (twig_test_empty(($context["modules"] ?? null))) {
            // line 33
            echo "            <div class=\"modules-list module-list-empty\">
              <p>
                ";
            // line 35
            echo twig_escape_filter($this->env, $this->env->getExtension('Symfony\Bridge\Twig\Extension\TranslationExtension')->trans("You do not have any uninstalled module.", [], "Modules.Mbo.Modulescatalog"), "html", null, true);
            echo "
              </p>
            </div>
          ";
        } else {
            // line 39
            echo "            ";
            $this->loadTemplate("@PrestaShop/Admin/Module/Includes/grid_manage_installed.html.twig", "@Modules/ps_mbo/views/templates/admin/controllers/module_catalog/uninstalled-modules.html.twig", 39)->display(twig_array_merge($context, ["modules" => ($context["modules"] ?? null), "display_type" => "list", "origin" => "manage", "id" => "all"]));
            // line 40
            echo "
            ";
            // line 41
            $this->displayBlock('addon_card_see_more', $context, $blocks);
            // line 46
            echo "          ";
        }
        // line 47
        echo "        </div>
      ";
    }

    // line 41
    public function block_addon_card_see_more($context, array $blocks = [])
    {
        // line 42
        echo "              ";
        if ((twig_length_filter($this->env, ($context["modules"] ?? null)) > ($context["maxModulesDisplayed"] ?? null))) {
            // line 43
            echo "                ";
            $this->loadTemplate("@PrestaShop/Admin/Module/Includes/see_more.html.twig", "@Modules/ps_mbo/views/templates/admin/controllers/module_catalog/uninstalled-modules.html.twig", 43)->display(twig_array_merge($context, ["id" => "all"]));
            // line 44
            echo "              ";
        }
        // line 45
        echo "            ";
    }

    public function getTemplateName()
    {
        return "@Modules/ps_mbo/views/templates/admin/controllers/module_catalog/uninstalled-modules.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  103 => 45,  100 => 44,  97 => 43,  94 => 42,  91 => 41,  86 => 47,  83 => 46,  81 => 41,  78 => 40,  75 => 39,  68 => 35,  64 => 33,  62 => 32,  59 => 31,  56 => 30,  50 => 49,  48 => 30,  44 => 28,  41 => 27,  31 => 25,);
    }

    /** @deprecated since 1.27 (to be removed in 2.0). Use getSourceContext() instead */
    public function getSource()
    {
        @trigger_error('The '.__METHOD__.' method is deprecated since version 1.27 and will be removed in 2.0. Use getSourceContext() instead.', E_USER_DEPRECATED);

        return $this->getSourceContext()->getCode();
    }

    public function getSourceContext()
    {
        return new Source("", "@Modules/ps_mbo/views/templates/admin/controllers/module_catalog/uninstalled-modules.html.twig", "C:\\wamp64\\www\\prestashop\\modules\\ps_mbo\\views\\templates\\admin\\controllers\\module_catalog\\uninstalled-modules.html.twig");
    }
}
