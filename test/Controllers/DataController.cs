using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;
using test.services;

namespace test.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class DataController : ControllerBase
    {

        private readonly ILogger<DataController> _logger;
        private IDataService dataService;

        public DataController(ILogger<DataController> logger, IDataService iDataService)
        {
            _logger = logger;
            dataService = iDataService;
        }

   

        [HttpGet]
        [Route("[action]/{from}/{itemsPerPage}")]
        public async Task<ActionResult<List<Image>>> Page(int from, int itemsPerPage)
        {
            return await dataService.GetDataAsync(from, itemsPerPage);


        }
    }
}



