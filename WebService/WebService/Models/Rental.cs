namespace WebService.Models
{
    public class Rental
    {
        public Guid Id { get; set; }
        public Guid UserId { get; set; }
        public DateTime StartTime { get; set; }
        public DateTime EndTime { get; set; }
        public double Distance { get; set; }
        public string DistanceString => Distance.ToString("0.00");
        public bool IsCompleted { get; set; }

        public TimeSpan CompleteTime
        {
            get
            {
                var time = EndTime - StartTime;
                return new TimeSpan(time.Days, time.Hours, time.Minutes, time.Seconds);
            }
        }

        public Rental()
        {
            StartTime = DateTime.Now;
            IsCompleted = false;
        }
    }
}
