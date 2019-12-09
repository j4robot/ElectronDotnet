using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using ElectronDotnet.Models;
using Microsoft.AspNetCore.Hosting;
using System.Net.Http;
using System.Net.Http.Headers;
using System.IO;

namespace ElectronDotnet.Controllers
{
    public class SetupController : Controller
    {
        private IWebHostEnvironment _hostingEnvironment;
        private readonly ActionContext _actionContext = new ActionContext();
        private static readonly HttpClient _Client = new HttpClient();
        public SetupController(IWebHostEnvironment environment = null, ActionContext actionContext = null)
        {
            _hostingEnvironment = environment;
            _actionContext = actionContext;
        }
        public string LoadMenus()
        {
            var path = Path.Combine(_hostingEnvironment.WebRootPath, "menu-items.json");
            using (StreamReader r = new StreamReader(path))
            {
                string menuData = r.ReadToEnd();

                return menuData;
            }
        }

    }
}
