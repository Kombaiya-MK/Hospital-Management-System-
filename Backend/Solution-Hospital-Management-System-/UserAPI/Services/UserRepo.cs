using Microsoft.EntityFrameworkCore;
using UserAPI.Interfaces;
using UserAPI.Models;

namespace UserAPI.Services
{
    public class UserRepo : IRepo<User , string>
    {
        private readonly HospitalContext _context;
        private readonly ILogger<User> _logger;

        public UserRepo(HospitalContext context, ILogger<User> logger)
        {
            _context = context;
            _logger = logger;
        }
        public async Task<User> Add(User item)
        {
            var transaction = _context.Database.BeginTransaction();
            try
            {
                _context.Users.Add(item);
                await _context.SaveChangesAsync();
                await transaction.CommitAsync();
                return item;
            }
            catch (Exception ex)
            {
                await transaction.RollbackAsync();
                _logger.LogError(ex.ToString());

            }
            throw new UnableToAddException("Unable Add exception");
        }

        public async Task<User> Get(string key)
        {
            var user = await _context.Users.FirstOrDefaultAsync(x => x.Email == key) ??
                throw new NullValueException("Invalid User : " + key);
            return user;
        }

        public async Task<ICollection<User>> GetAll()
        {
            var Users = await _context.Users.ToListAsync();
            return Users;
        }

        public async Task<User> Update(User item)
        {
            if (item.Email == null)
            {
                throw new NullValueException("Email is null");
            }
            var user = await Get(item.Email);
            var transaction = _context.Database.BeginTransaction();
            try
            {
                if (user != null)
                {
                    user.Age = (item.Age != 0) ? item.Age : user.Age;
                    user.Name = item.Name ?? item.Email;
                    user.PhoneNumber = (item.PhoneNumber != null) ? item.PhoneNumber : user.PhoneNumber;
                    await _context.SaveChangesAsync();
                    await transaction.CommitAsync();
                    return user;
                }
            }
            catch (Exception ex)
            {
                await transaction.RollbackAsync();
                _logger.LogError(ex.ToString());
            }
            throw new NotUpdatedException("Unable to Update the user");
        }
    }
}
