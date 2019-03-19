using Microsoft.AspNetCore.Mvc;

namespace CritsAndCoffeeClientApp.Controllers
{
    [Route("proxy/api/[controller]")]
    public class InstagramDataProxyController : Controller
    {
        // GET
        public IActionResult Index()
        {
            return
            View();
        }
    }
}