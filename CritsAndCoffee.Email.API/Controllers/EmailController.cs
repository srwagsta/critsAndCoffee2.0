using System;
using System.Linq;
using System.Threading.Tasks;
using CritsAndCoffee.Email.API.Attributes;
using CritsAndCoffee.Email.API.Models.Implementations;
using CritsAndCoffee.Email.API.Models.Interface;
using CritsAndCoffee.Email.API.Services;
using Microsoft.AspNetCore.Mvc;

namespace CritsAndCoffee.Email.API.Controllers
{
    [Route("api/email")]
    [ApiController]
    [ServiceFilter(typeof(CustomAuthorizationAttribute))]
    public class EmailController: ControllerBase
    {
        private readonly IEmailService _emailService;
        private readonly IEmailConfiguration _emailConfiguration;
        
        public EmailController(IEmailConfiguration emailConfiguration, IEmailService emailService)
        {
            this._emailService = emailService;
            this._emailConfiguration = emailConfiguration;

        }
        
        [HttpPost]
        public async Task<IActionResult> Post([FromBody] EmailMessage emailMessage)
        {
            
            if (emailMessage == null)
            {
                return BadRequest("Missing Body");
            }
            
            try
            {
                await this._emailService.SendAsync(emailMessage);
            }
            catch (Exception e)
            {
                return UnprocessableEntity(e);
            }

            return Ok();
        }
        
        [HttpPost("moderator")]
        public async Task<IActionResult> AdminPost([FromBody] AdminEmailMessage emailMessage)
        {
            if (emailMessage == null)
            {
                return BadRequest("Missing Body");
            }
            
            emailMessage.ToAddresses = _emailConfiguration.AdminAddresses.ToList();

            try
            {
                await this._emailService.SendAsync(emailMessage);
            }
            catch (Exception e)
            {
                return UnprocessableEntity(e);
            }

            return Ok();
        }
    }
}