using System.Collections.Generic;
using CritsAndCoffee.Email.API.Models.Implementations;

namespace CritsAndCoffee.Email.API.Models.Interface
{
    public interface IEmailMessage
    {
        
        List<string> ToAddresses { get; }
        string Subject { get; set; }
        string Content { get; set; }
    }
}