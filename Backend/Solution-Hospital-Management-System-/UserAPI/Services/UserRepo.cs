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
            }
            catch (Exception ex)
            {
                await transaction.RollbackAsync();
                _logger.LogError(ex.ToString());

            }
            return item;
        }

        public async Task<User> Get(string key)
        {
            var User = _context.Users.FirstOrDefault(x => x.Email == key);
            return User;
        }

        public async Task<ICollection<User>> GetAll()
        {
            var Users = _context.Users.ToList();
            return Users;
        }

        public async Task<User> Update(User item)
        {

            var user = await Get(item.Email);
            var transaction = _context.Database.BeginTransaction();
            try
            {
                if (user != null)
                {
                    await transaction.CommitAsync();
                    user.Age = (item.Age != 0) ? item.Age : user.Age;
                    user.Name = (item.Name != null) ? item.Name : item.Email;
                    user.PhoneNumber = (item.PhoneNumber != null) ? item.PhoneNumber : user.PhoneNumber;
                    await _context.SaveChangesAsync();
                }
            }
            catch (Exception ex)
            {
                await transaction.RollbackAsync();
                _logger.LogError(ex.ToString());
            }
            return user;
        }
    }
}
