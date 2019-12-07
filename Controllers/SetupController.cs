using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using ElectronDotnet.Models;

namespace ElectronDotnet.Controllers
{
    public class SetupController : Controller
    {

      public IActionResult TaxLawSetup()
      {
          return View();
      }

      public IActionResult CountrySetup()
      {
          return View();
      }

      public IActionResult CurrencySetup()
      {
          return View();
      }

      public IActionResult NonCashBenefitSetup()
      {
          return View();
      }

      public IActionResult SavingsSchemeSetup()
      {
          return View();
      }

      public IActionResult TaxBandSetup()
      {
          return View();
      }

      public IActionResult BonusTaxRulesSetup()
      {
          return View();
      }

      public IActionResult LoanRulesSetup()
      {
          return View();
      }

      public IActionResult OvertimeRulesSetup()
      {
          return View();
      }

    }
}
