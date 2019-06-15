using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text;
using System.Threading.Tasks;
using CritsAndCoffee.Email.API.Models.Interface;

namespace CritsAndCoffee.Email.API.Services
{
    public class EmailService : IEmailService
    {
        private readonly IEmailConfiguration _emailConfiguration;

        public EmailService(IEmailConfiguration emailConfiguration)
        {
            _emailConfiguration = emailConfiguration;
        }

        public async Task<HttpResponseMessage> SendAsync(IEmailMessage emailMessage)
        {
            using (var client = new HttpClient { BaseAddress = new Uri(_emailConfiguration.ApiBaseUri) })
            {
                client.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Basic",
                    Convert.ToBase64String(Encoding.ASCII.GetBytes("api:"+_emailConfiguration.ApiKey)));

                var toAddresses = new List<KeyValuePair<string, string>>();
                foreach (var address in emailMessage.ToAddresses)
                {
                    toAddresses.Add(new KeyValuePair<string, string>("to", address));
                }
                
                var content = new FormUrlEncodedContent(new[]
                {
                    new KeyValuePair<string, string>("from", _emailConfiguration.From),
                    new KeyValuePair<string, string>("subject", emailMessage.Subject),
                    new KeyValuePair<string, string>("html", emailMessage.Content)
                }.Union(toAddresses).ToArray());

                return await client.PostAsync(_emailConfiguration.ApiBaseUri + "/messages", content).ConfigureAwait(false);
            }
            
        }
    }
}