using CritsAndCoffee.Email.API.Models.Interface;

namespace CritsAndCoffee.Email.API.Models.Implementations
{
    public class EmailConfiguration: IEmailConfiguration
    {
        public string ApiKey { get; set; }
        public string ApiBaseUri { get; set; }
        public string From { get; set; }
        public string[] AdminAddresses { get; set; }
    }
}