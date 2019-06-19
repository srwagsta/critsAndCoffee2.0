using System.Collections.Generic;
using CritsAndCoffee.Email.API.Models.Interface;

namespace CritsAndCoffee.Email.API.Models.Implementations
{
    public class EmailMessage: IEmailMessage
    {
        public List<string> ToAddresses { get; set; }
        public string Subject { get; set; }
        public string Content { get; set; }
        
        public EmailMessage()
        {
            ToAddresses = new List<string>();
        }
    } 
}