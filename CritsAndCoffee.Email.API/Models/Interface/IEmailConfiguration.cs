namespace CritsAndCoffee.Email.API.Models.Interface
{
    public interface IEmailConfiguration
    {
        string ApiKey { get; set; }
        string ApiBaseUri { get; set; }
        string From { get; set; }
        string[] AdminAddresses { get; set; }
    }
}