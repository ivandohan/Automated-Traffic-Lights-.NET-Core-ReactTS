
namespace traffic_lights.Server.Services
{
    public class TrafficLightsBackgroundService : BackgroundService
    {

        private readonly TrafficLightsService _trafficLightsService;
        private Timer _timer;

        public TrafficLightsBackgroundService(TrafficLightsService tlService)
        {
            _trafficLightsService = tlService;
        }
        protected override Task ExecuteAsync(CancellationToken stoppingToken)
        {
            _timer = new Timer(callback: UpdateTrafficLights,
                               state: null,
                               dueTime: TimeSpan.Zero,
                               period: TimeSpan.FromSeconds(1));

            return Task.CompletedTask;
        }

        private void UpdateTrafficLights(object state)
        {
            _trafficLightsService.UpdateLights();
        }

        public override async Task StopAsync(CancellationToken stoppingToken)
        {
            _timer?.Change(Timeout.Infinite, 0);
            await base.StopAsync(stoppingToken);
        }
    }
}
