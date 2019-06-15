using System.Collections.Generic;
using System.Net.Http;
using System.Threading.Tasks;
using CritsAndCoffee.Email.API.Models.Interface;

namespace CritsAndCoffee.Email.API.Services
{
    public interface IEmailService
    {
        Task<HttpResponseMessage> SendAsync(IEmailMessage emailMessage);
    }
}