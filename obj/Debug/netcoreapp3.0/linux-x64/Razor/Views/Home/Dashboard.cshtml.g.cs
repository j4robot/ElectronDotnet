#pragma checksum "/home/code-saitama/dev/CodeHub/ElectronDotnet/Views/Home/Dashboard.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "ca0605f297eb19308558a535aebcdc7152fc9105"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(AspNetCore.Views_Home_Dashboard), @"mvc.1.0.view", @"/Views/Home/Dashboard.cshtml")]
namespace AspNetCore
{
    #line hidden
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;
    using Microsoft.AspNetCore.Mvc;
    using Microsoft.AspNetCore.Mvc.Rendering;
    using Microsoft.AspNetCore.Mvc.ViewFeatures;
#nullable restore
#line 1 "/home/code-saitama/dev/CodeHub/ElectronDotnet/Views/_ViewImports.cshtml"
using ElectronDotnet;

#line default
#line hidden
#nullable disable
#nullable restore
#line 2 "/home/code-saitama/dev/CodeHub/ElectronDotnet/Views/_ViewImports.cshtml"
using ElectronDotnet.Models;

#line default
#line hidden
#nullable disable
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"ca0605f297eb19308558a535aebcdc7152fc9105", @"/Views/Home/Dashboard.cshtml")]
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"4f7bcbb05e79fd1cb8c2f79e6fe39e526bf37532", @"/Views/_ViewImports.cshtml")]
    public class Views_Home_Dashboard : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<dynamic>
    {
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_0 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("class", new global::Microsoft.AspNetCore.Html.HtmlString("h4 mb-0 text-white text-uppercase d-none d-lg-inline-block"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_1 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("asp-controller", "Home", global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_2 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("asp-action", "Dashboard", global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_3 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("class", new global::Microsoft.AspNetCore.Html.HtmlString("navbar-search navbar-search-dark form-inline mr-3 d-none d-md-flex ml-lg-auto"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_4 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("alt", new global::Microsoft.AspNetCore.Html.HtmlString("Image placeholder"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_5 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("src", new global::Microsoft.AspNetCore.Html.HtmlString("~/assets/img/theme/team-4-800x800.jpg"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        #line hidden
        #pragma warning disable 0649
        private global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperExecutionContext __tagHelperExecutionContext;
        #pragma warning restore 0649
        private global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperRunner __tagHelperRunner = new global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperRunner();
        #pragma warning disable 0169
        private string __tagHelperStringValueBuffer;
        #pragma warning restore 0169
        private global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperScopeManager __backed__tagHelperScopeManager = null;
        private global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperScopeManager __tagHelperScopeManager
        {
            get
            {
                if (__backed__tagHelperScopeManager == null)
                {
                    __backed__tagHelperScopeManager = new global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperScopeManager(StartTagHelperWritingScope, EndTagHelperWritingScope);
                }
                return __backed__tagHelperScopeManager;
            }
        }
        private global::Microsoft.AspNetCore.Mvc.TagHelpers.AnchorTagHelper __Microsoft_AspNetCore_Mvc_TagHelpers_AnchorTagHelper;
        private global::Microsoft.AspNetCore.Mvc.TagHelpers.FormTagHelper __Microsoft_AspNetCore_Mvc_TagHelpers_FormTagHelper;
        private global::Microsoft.AspNetCore.Mvc.TagHelpers.RenderAtEndOfFormTagHelper __Microsoft_AspNetCore_Mvc_TagHelpers_RenderAtEndOfFormTagHelper;
        private global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.UrlResolutionTagHelper __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper;
        #pragma warning disable 1998
        public async override global::System.Threading.Tasks.Task ExecuteAsync()
        {
#nullable restore
#line 1 "/home/code-saitama/dev/CodeHub/ElectronDotnet/Views/Home/Dashboard.cshtml"
  
    Layout = "~/Views/Shared/_Layout.cshtml";

#line default
#line hidden
#nullable disable
            WriteLiteral("\n");
#nullable restore
#line 5 "/home/code-saitama/dev/CodeHub/ElectronDotnet/Views/Home/Dashboard.cshtml"
  
    ViewData["Title"] = "Dashboard";

#line default
#line hidden
#nullable disable
            WriteLiteral("\n\n<div class=\"main-content\">\n    <!-- Navbar -->\n    <nav class=\"navbar navbar-top navbar-expand-md navbar-dark\" id=\"navbar-main\">\n      <div class=\"container-fluid\">\n        <!-- Brand -->\n        ");
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("a", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "ca0605f297eb19308558a535aebcdc7152fc91056217", async() => {
                WriteLiteral("Dashboard");
            }
            );
            __Microsoft_AspNetCore_Mvc_TagHelpers_AnchorTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.TagHelpers.AnchorTagHelper>();
            __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_TagHelpers_AnchorTagHelper);
            __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_0);
            __Microsoft_AspNetCore_Mvc_TagHelpers_AnchorTagHelper.Controller = (string)__tagHelperAttribute_1.Value;
            __tagHelperExecutionContext.AddTagHelperAttribute(__tagHelperAttribute_1);
            __Microsoft_AspNetCore_Mvc_TagHelpers_AnchorTagHelper.Action = (string)__tagHelperAttribute_2.Value;
            __tagHelperExecutionContext.AddTagHelperAttribute(__tagHelperAttribute_2);
            await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
            if (!__tagHelperExecutionContext.Output.IsContentModified)
            {
                await __tagHelperExecutionContext.SetOutputContentAsync();
            }
            Write(__tagHelperExecutionContext.Output);
            __tagHelperExecutionContext = __tagHelperScopeManager.End();
            WriteLiteral("\n        <!-- Form -->\n        ");
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("form", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "ca0605f297eb19308558a535aebcdc7152fc91057674", async() => {
                WriteLiteral(@"
          <div class=""form-group mb-0"">
            <div class=""input-group input-group-alternative"">
              <div class=""input-group-prepend"">
                <span class=""input-group-text""><i class=""fas fa-search""></i></span>
              </div>
              <input class=""form-control"" placeholder=""Search"" type=""text"">
            </div>
          </div>
        ");
            }
            );
            __Microsoft_AspNetCore_Mvc_TagHelpers_FormTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.TagHelpers.FormTagHelper>();
            __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_TagHelpers_FormTagHelper);
            __Microsoft_AspNetCore_Mvc_TagHelpers_RenderAtEndOfFormTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.TagHelpers.RenderAtEndOfFormTagHelper>();
            __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_TagHelpers_RenderAtEndOfFormTagHelper);
            __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_3);
            await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
            if (!__tagHelperExecutionContext.Output.IsContentModified)
            {
                await __tagHelperExecutionContext.SetOutputContentAsync();
            }
            Write(__tagHelperExecutionContext.Output);
            __tagHelperExecutionContext = __tagHelperScopeManager.End();
            WriteLiteral(@"
        <!-- User -->
        <ul class=""navbar-nav align-items-center d-none d-md-flex"">
          <li class=""nav-item dropdown"">
            <a class=""nav-link pr-0"" href=""#"" role=""button"" data-toggle=""dropdown"" aria-haspopup=""true"" aria-expanded=""false"">
              <div class=""media align-items-center"">
                <span class=""avatar avatar-sm rounded-circle"">
                  ");
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("img", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagOnly, "ca0605f297eb19308558a535aebcdc7152fc91059770", async() => {
            }
            );
            __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.UrlResolutionTagHelper>();
            __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper);
            __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_4);
            __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_5);
            await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
            if (!__tagHelperExecutionContext.Output.IsContentModified)
            {
                await __tagHelperExecutionContext.SetOutputContentAsync();
            }
            Write(__tagHelperExecutionContext.Output);
            __tagHelperExecutionContext = __tagHelperScopeManager.End();
            WriteLiteral(@"
                </span>
                <div class=""media-body ml-2 d-none d-lg-block"">
                  <span class=""mb-0 text-sm  font-weight-bold"">Jessica Jones</span>
                </div>
              </div>
            </a>
            <div class=""dropdown-menu dropdown-menu-arrow dropdown-menu-right"">
              <div class="" dropdown-header noti-title"">
                <h6 class=""text-overflow m-0"">Welcome!</h6>
              </div>
              <a href=""./examples/profile.html"" class=""dropdown-item"">
                <i class=""ni ni-single-02""></i>
                <span>My profile</span>
              </a>
              <a href=""./examples/profile.html"" class=""dropdown-item"">
                <i class=""ni ni-settings-gear-65""></i>
                <span>Settings</span>
              </a>
              <a href=""./examples/profile.html"" class=""dropdown-item"">
                <i class=""ni ni-calendar-grid-58""></i>
                <span>Activity</span>
              </a>
              <a href=""./exam");
            WriteLiteral(@"ples/profile.html"" class=""dropdown-item"">
                <i class=""ni ni-support-16""></i>
                <span>Support</span>
              </a>
              <div class=""dropdown-divider""></div>
              <a href=""#!"" class=""dropdown-item"">
                <i class=""ni ni-user-run""></i>
                <span>Logout</span>
              </a>
            </div>
          </li>
        </ul>
      </div>
    </nav>
    <!-- End Navbar -->
    <!-- Header -->

    <div class=""header bg-gradient-primary pb-8 pt-5 pt-md-8"">
      <div class=""container-fluid"">
        <div class=""header-body"">
          <!-- Card stats -->
          <div class=""row"">
            <div class=""col-xl-3 col-lg-6"">
              <div class=""card card-stats mb-4 mb-xl-0"">
                <div class=""card-body"">
                  <div class=""row"">
                    <div class=""col"">
                      <h5 class=""card-title text-uppercase text-muted mb-0"">Traffic</h5>
                      <span class=""h2 font-weight-bold mb-0"">");
            WriteLiteral(@"350,897</span>
                    </div>
                    <div class=""col-auto"">
                      <div class=""icon icon-shape bg-danger text-white rounded-circle shadow"">
                        <i class=""fas fa-chart-bar""></i>
                      </div>
                    </div>
                  </div>
                  <p class=""mt-3 mb-0 text-muted text-sm"">
                    <span class=""text-success mr-2""><i class=""fa fa-arrow-up""></i> 3.48%</span>
                    <span class=""text-nowrap"">Since last month</span>
                  </p>
                </div>
              </div>
            </div>
            <div class=""col-xl-3 col-lg-6"">
              <div class=""card card-stats mb-4 mb-xl-0"">
                <div class=""card-body"">
                  <div class=""row"">
                    <div class=""col"">
                      <h5 class=""card-title text-uppercase text-muted mb-0"">New users</h5>
                      <span class=""h2 font-weight-bold mb-0"">2,356</span>
               ");
            WriteLiteral(@"     </div>
                    <div class=""col-auto"">
                      <div class=""icon icon-shape bg-warning text-white rounded-circle shadow"">
                        <i class=""fas fa-chart-pie""></i>
                      </div>
                    </div>
                  </div>
                  <p class=""mt-3 mb-0 text-muted text-sm"">
                    <span class=""text-danger mr-2""><i class=""fas fa-arrow-down""></i> 3.48%</span>
                    <span class=""text-nowrap"">Since last week</span>
                  </p>
                </div>
              </div>
            </div>
            <div class=""col-xl-3 col-lg-6"">
              <div class=""card card-stats mb-4 mb-xl-0"">
                <div class=""card-body"">
                  <div class=""row"">
                    <div class=""col"">
                      <h5 class=""card-title text-uppercase text-muted mb-0"">Sales</h5>
                      <span class=""h2 font-weight-bold mb-0"">924</span>
                    </div>
                    <d");
            WriteLiteral(@"iv class=""col-auto"">
                      <div class=""icon icon-shape bg-yellow text-white rounded-circle shadow"">
                        <i class=""fas fa-users""></i>
                      </div>
                    </div>
                  </div>
                  <p class=""mt-3 mb-0 text-muted text-sm"">
                    <span class=""text-warning mr-2""><i class=""fas fa-arrow-down""></i> 1.10%</span>
                    <span class=""text-nowrap"">Since yesterday</span>
                  </p>
                </div>
              </div>
            </div>
            <div class=""col-xl-3 col-lg-6"">
              <div class=""card card-stats mb-4 mb-xl-0"">
                <div class=""card-body"">
                  <div class=""row"">
                    <div class=""col"">
                      <h5 class=""card-title text-uppercase text-muted mb-0"">Performance</h5>
                      <span class=""h2 font-weight-bold mb-0"">49,65%</span>
                    </div>
                    <div class=""col-auto"">
        ");
            WriteLiteral(@"              <div class=""icon icon-shape bg-info text-white rounded-circle shadow"">
                        <i class=""fas fa-percent""></i>
                      </div>
                    </div>
                  </div>
                  <p class=""mt-3 mb-0 text-muted text-sm"">
                    <span class=""text-success mr-2""><i class=""fas fa-arrow-up""></i> 12%</span>
                    <span class=""text-nowrap"">Since last month</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

	<div class=""container-fluid mt--7"">
      <div class=""row"">
        <div class=""col-xl-8 mb-5 mb-xl-0"">
          <div class=""card bg-gradient-default shadow"">
            <div class=""card-header bg-transparent"">
              <div class=""row align-items-center"">
                <div class=""col"">
                  <h6 class=""text-uppercase text-light ls-1 mb-1"">Overview</h6>
                  <h2 class=""text-white mb-0"">Sales value");
            WriteLiteral(@"</h2>
                </div>
                <div class=""col"">
                  <ul class=""nav nav-pills justify-content-end"">
                    <li class=""nav-item mr-2 mr-md-0"" data-toggle=""chart"" data-target=""#chart-sales"" data-update='{""data"":{""datasets"":[{""data"":[0, 20, 10, 30, 15, 40, 20, 60, 60]}]}}' data-prefix=""$"" data-suffix=""k"">
                      <a href=""#"" class=""nav-link py-2 px-3 active"" data-toggle=""tab"">
                        <span class=""d-none d-md-block"">Month</span>
                        <span class=""d-md-none"">M</span>
                      </a>
                    </li>
                    <li class=""nav-item"" data-toggle=""chart"" data-target=""#chart-sales"" data-update='{""data"":{""datasets"":[{""data"":[0, 20, 5, 25, 10, 30, 15, 40, 40]}]}}' data-prefix=""$"" data-suffix=""k"">
                      <a href=""#"" class=""nav-link py-2 px-3"" data-toggle=""tab"">
                        <span class=""d-none d-md-block"">Week</span>
                        <span class=""d-md-none"">W</span>
     ");
            WriteLiteral(@"                 </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class=""card-body"">
              <!-- Chart -->
              <div class=""chart"">
                <!-- Chart wrapper -->
                <canvas id=""chart-sales"" class=""chart-canvas""></canvas>
              </div>
            </div>
          </div>
        </div>
        <div class=""col-xl-4"">
          <div class=""card shadow"">
            <div class=""card-header bg-transparent"">
              <div class=""row align-items-center"">
                <div class=""col"">
                  <h6 class=""text-uppercase text-muted ls-1 mb-1"">Performance</h6>
                  <h2 class=""mb-0"">Total orders</h2>
                </div>
              </div>
            </div>
            <div class=""card-body"">
              <!-- Chart -->
              <div class=""chart"">
                <canvas id=""chart-orders"" class=""chart-canvas""></canvas>
              </div>
          ");
            WriteLiteral("  </div>\n          </div>\n        </div>\n      </div>\n  </div>");
        }
        #pragma warning restore 1998
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.ViewFeatures.IModelExpressionProvider ModelExpressionProvider { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IUrlHelper Url { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IViewComponentHelper Component { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IJsonHelper Json { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IHtmlHelper<dynamic> Html { get; private set; }
    }
}
#pragma warning restore 1591
