namespace WebService.Models
{
    public class User
    {
        public Guid Id { get; set; }
        public string Username { get; set; }
        public string Email { get; set; }
        public DateTime CreatedDate { get; set; }
        public string Password { get; set; }
        public string Role { get; set; }
        public decimal AccountBalance { get; set; }
        public string AccountBalanceString => AccountBalance.ToString("0.00");
        public bool IsActive { get; set; }
        public ICollection<Rental> Rentals { get; set; } = new List<Rental>();

        public User() { }
        public User(string role, string username, string email, string password)
        {
            Id = Guid.NewGuid();
            Role = role;
            Username = username;
            Email = email;
            Password = password;
            CreatedDate = DateTime.Now;
            AccountBalance = 0;
            IsActive = true;
        }

        public void DeactiveUser()
        {
            IsActive = !IsActive;
        }

        public bool StartRent()
        {
            var alreadyActive = Rentals.Any(x => x.IsCompleted == false);
            if (alreadyActive)
                throw new Exception("User has active rental already");
            if (AccountBalance < 5)
                throw new Exception("Amount must be greater than 5 to rent");

            Rentals.Add(new Rental());
            return true;
        }

        public bool EndRent()
        {
            var alreadyActive = Rentals.SingleOrDefault(x => x.IsCompleted == false);
            if (alreadyActive == null)
                throw new Exception("User does not has active rental");
            alreadyActive.IsCompleted = true;
            alreadyActive.EndTime = DateTime.Now;
            alreadyActive.Distance = Random.Shared.NextDouble() * 5;

            var amount = 1 + alreadyActive.Distance * 0.2 + alreadyActive.CompleteTime.TotalMinutes * 0.6;
            AccountBalance -= (decimal)amount;
            return true;
        }

        public decimal AddAccountBalance(decimal amount)
        {
            if (amount < 0)
                throw new ArgumentException("Amount must be greater than 0");
            AccountBalance += amount;
            return AccountBalance;
        }
    }
}
