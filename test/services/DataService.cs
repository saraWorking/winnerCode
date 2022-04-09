using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;

namespace test.services
{
    public interface IDataService
    {
        Task<List<Image>> GetDataAsync(int from, int itemsPerPage);
    }

    public class DataService : IDataService
    {



        public async Task<List<Image>> GetDataAsync(int from, int itemsPerPage)
        {
            var image = new Image();
            List<Image> root;
            var url = "https://jsonplaceholder.typicode.com/photos"; 

            using (var httpClient = new HttpClient())
            {
                using (var response = await httpClient.GetAsync(url))
                {
                    using (var content = response.Content)
                    {
                       var result = await content.ReadAsStringAsync();
                         root = JsonConvert.DeserializeObject<List<Image>>(result);
                       root= root.GetRange(from, itemsPerPage);
                    }
                }
                return root;
            }

        }
    }

    public class Image{


        public int albumId { get; set; }
        public int id { get; set; }
        public string title { get; set; }
        public string url { get; set; }
        public string thumbnailUrl { get; set; }
}

}
