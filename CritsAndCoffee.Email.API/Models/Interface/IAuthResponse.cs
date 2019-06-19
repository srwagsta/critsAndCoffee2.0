namespace CritsAndCoffee.Email.API.Models.Interface
{
    public interface IAuthResponse
    {
        string[] Scopes { get; set; }
        string FirstName { get; set; }
        string LastName { get; set; }
        string Username { get; set; }
        string Email { get; set; }
        string LastLogin { get; set; }
    }
}