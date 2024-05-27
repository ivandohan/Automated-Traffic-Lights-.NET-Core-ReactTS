namespace traffic_lights.Server.Models
{
    public enum LightState
    {
        Green, Yellow, Red
    }

    public class TrafficLightsModel
    {
        public string Direction { get; set; } = string.Empty;
        public LightState CurrentState { get; set; }
        public int GreenDuration { get; set; }
        public int YellowDuration { get; set; }
        public DateTime LastTransitionTime { get; set; }
        public bool IsRightTurnActive { get; set; } = false;
        public int GroupId { get; set; }
        public string CurrentStateColor => CurrentState.ToString();
    }
}
