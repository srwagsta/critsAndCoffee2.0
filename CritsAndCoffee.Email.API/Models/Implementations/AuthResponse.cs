using CritsAndCoffee.Email.API.Models.Interface;

namespace CritsAndCoffee.Email.API.Models.Implementations
{
    public class AuthResponse: IAuthResponse
    {
        public string[] Scopes { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Username { get; set; }
        public string Email { get; set; }
        public string LastLogin { get; set; }
    }
}