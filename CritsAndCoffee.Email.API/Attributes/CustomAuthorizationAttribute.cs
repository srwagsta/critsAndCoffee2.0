using System;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text;
using System.Threading.Tasks;
using System.Xml.Linq;
using CritsAndCoffee.Email.API.Models.Implementations;
using CritsAndCoffee.Email.API.Models.Interface;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;
using Newtonsoft.Json;

namespace CritsAndCoffee.Email.API.Attributes
{
    [AttributeUsage(AttributeTargets.All, Inherited = false)]
    public class CustomAuthorizationAttribute : ActionFilterAttribute
    {
        private readonly IEmailConfiguration _emailConfiguration;

        public CustomAuthorizationAttribute(IEmailConfiguration emailConfiguration)
        {
            this._emailConfiguration = emailConfiguration;
        }

        public override void OnActionExecuting(ActionExecutingContext context)
        {
            var jwt = context.HttpContext.Request.Headers["Authorization"]
                .ToString()
                .Replace("Bearer", "")
                .Trim();

            (bool isValidToken, string errors) = this.validateToken(jwt).Result;

            if (!isValidToken)
            {
                context.Result = new ContentResult
                {
                    Content = errors,
                    StatusCode = (int) HttpStatusCode.Unauthorized
                };
            }

            base.OnActionExecuting(context);
        }

        private async Task<(bool, string)> validateToken(string jwt)
        {
            var client = new HttpClient();
            client.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Bearer", jwt);
            var response = client.GetAsync(this._emailConfiguration.TokenVerificationUri).Result;
            var responseBody = await response.Content.ReadAsStringAsync();

            if (!response.IsSuccessStatusCode)
            {
                return (false, responseBody);
            }

            var authResponse = JsonConvert.DeserializeObject<AuthResponse>(responseBody);

            StringBuilder sb = new StringBuilder();
            StringWriter sw = new StringWriter(sb);
            using (JsonWriter writer = new JsonTextWriter(sw))
            {
                writer.Formatting = Formatting.Indented;
                writer.WriteStartObject();
                writer.WritePropertyName("Errors");
                writer.WriteValue("Missing required Scopes");
                writer.WriteEndObject();
            }

            if (authResponse.Scopes.Count(x => this._emailConfiguration.RequiredScopes.Contains(x)) < 1)
            {
                return (false, sb.ToString());
            }

            return (true, "");
        }
    }
}