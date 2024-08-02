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

/* @Modules/ps_mbo/views/templates/admin/controllers/module_catalog/cdc-error.html.twig */
class __TwigTemplate_29815c648d341b5a1b8a07d3a52eae9e43df5ea56bed2280c9893fe3b8ef813e extends \Twig\Template
{
    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->parent = false;

        $this->blocks = [
        ];
    }

    protected function doDisplay(array $context, array $blocks = [])
    {
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e = $this->env->getExtension("Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension");
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->enter($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "@Modules/ps_mbo/views/templates/admin/controllers/module_catalog/cdc-error.html.twig"));

        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02 = $this->env->getExtension("Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension");
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->enter($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "@Modules/ps_mbo/views/templates/admin/controllers/module_catalog/cdc-error.html.twig"));

        // line 19
        echo "<div class=\"cdc-error-container\">
  <div class=\"cdc-error-content\">
    <div class=\"cdc-error-content-wrapper\">
      <h1 class=\"cdc-error-title\">
        ";
        // line 23
        echo twig_escape_filter($this->env, $this->env->getExtension('Symfony\Bridge\Twig\Extension\TranslationExtension')->trans("Oh no.. something went wrong", [], "Modules.Mbo.Global"), "html", null, true);
        echo "
      </h1>
      <p class=\"cdc-error-message\">
        ";
        // line 26
        echo twig_escape_filter($this->env, $this->env->getExtension('Symfony\Bridge\Twig\Extension\TranslationExtension')->trans("There has been a problem on our side. Refresh your page and if the problem persists, try again later.", [], "Modules.Mbo.Global"), "html", null, true);
        echo "
      </p>
    </div>
    <div class=\"cdc-error-button-container\">
      <button class=\"cdc-error-button\" onclick=\"javascript:window.location.reload();\">
        ";
        // line 31
        echo twig_escape_filter($this->env, $this->env->getExtension('Symfony\Bridge\Twig\Extension\TranslationExtension')->trans("Refresh page", [], "Modules.Mbo.Global"), "html", null, true);
        echo "
      </button>
    </div>
  </div>
</div>
";
        
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->leave($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof);

        
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->leave($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof);

    }

    public function getTemplateName()
    {
        return "@Modules/ps_mbo/views/templates/admin/controllers/module_catalog/cdc-error.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  56 => 31,  48 => 26,  42 => 23,  36 => 19,);
    }

    /** @deprecated since 1.27 (to be removed in 2.0). Use getSourceContext() instead */
    public function getSource()
    {
        @trigger_error('The '.__METHOD__.' method is deprecated since version 1.27 and will be removed in 2.0. Use getSourceContext() instead.', E_USER_DEPRECATED);

        return $this->getSourceContext()->getCode();
    }

    public function getSourceContext()
    {
        return new Source("{#**
 * Copyright since 2007 PrestaShop SA and Contributors
 * PrestaShop is an International Registered Trademark & Property of PrestaShop SA
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Academic Free License version 3.0
 * that is bundled with this package in the file LICENSE.md.
 * It is also available through the world-wide-web at this URL:
 * https://opensource.org/licenses/AFL-3.0
 * If you did not receive a copy of the license and are unable to
 * obtain it through the world-wide-web, please send an email
 * to license@prestashop.com so we can send you a copy immediately.
 *
 * @author    PrestaShop SA and Contributors <contact@prestashop.com>
 * @copyright Since 2007 PrestaShop SA and Contributors
 * @license   https://opensource.org/licenses/AFL-3.0 Academic Free License version 3.0
 *#}
<div class=\"cdc-error-container\">
  <div class=\"cdc-error-content\">
    <div class=\"cdc-error-content-wrapper\">
      <h1 class=\"cdc-error-title\">
        {{ 'Oh no.. something went wrong'|trans({}, 'Modules.Mbo.Global') }}
      </h1>
      <p class=\"cdc-error-message\">
        {{ 'There has been a problem on our side. Refresh your page and if the problem persists, try again later.'|trans({}, 'Modules.Mbo.Global') }}
      </p>
    </div>
    <div class=\"cdc-error-button-container\">
      <button class=\"cdc-error-button\" onclick=\"javascript:window.location.reload();\">
        {{ 'Refresh page'|trans({}, 'Modules.Mbo.Global') }}
      </button>
    </div>
  </div>
</div>
", "@Modules/ps_mbo/views/templates/admin/controllers/module_catalog/cdc-error.html.twig", "C:\\wamp64\\www\\prestashop\\modules\\ps_mbo\\views\\templates\\admin\\controllers\\module_catalog\\cdc-error.html.twig");
    }
}
