using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebService.Dto;
using WebService.Models;
using WebService.Persistance;
using WebService.Services;

namespace WebService.Controllers
{
    [Route("/api/users")]
    public class UserController : ControllerBase
    {
        private readonly DataContext _dataContext;

        public UserController(DataContext dataContext, JwtHandler jwtHandler)
        {
            _dataContext = dataContext;
        }


        [HttpGet("{id}")]
        [Authorize]
        public async Task<IActionResult> GetUser(Guid id)
        {
            var user = await _dataContext.Users.Include(r => r.Rentals).SingleOrDefaultAsync(x => x.Id == id);
            if (user == null)
                return NotFound();
            return Ok(user);
        }

        [HttpGet]
        public async Task<IActionResult> GetUsers()
        {
            var users = await _dataContext.Users.Include(x => x.Rentals).ToListAsync();
            return Ok(users);
        }

        [HttpPost("{id}/startRent")]
        [Authorize]
        public async Task<IActionResult> StartRentDevice(Guid id)
        {
            var user = await _dataContext.Users.Include(r => r.Rentals).SingleOrDefaultAsync(x => x.Id == id);
            if (user == null)
                return NotFound();
            user.StartRent();
            await _dataContext.SaveChangesAsync();
            return Ok(user);
        }

        [HttpPost("{id}/endRent")]
        [Authorize]
        public async Task<IActionResult> EndRentDevice(Guid id)
        {
            var user = await _dataContext.Users.Include(r => r.Rentals).SingleOrDefaultAsync(x => x.Id == id);
            if (user == null)
                return NotFound();
            user.EndRent();
            await _dataContext.SaveChangesAsync();
            return Ok(user);
        }

        [HttpPost("{id}/addAccountBalance")]
        [Authorize]
        public async Task<IActionResult> AddAccountBalance(Guid id, [FromBody] AddAccountBalance command)
        {
            var user = await _dataContext.Users.SingleOrDefaultAsync(x => x.Id == id);
            if (user == null)
                return NotFound();
            user.AddAccountBalance((decimal)command.AccountBalance);
            await _dataContext.SaveChangesAsync();
            return Ok(user);
        }

    }
}
