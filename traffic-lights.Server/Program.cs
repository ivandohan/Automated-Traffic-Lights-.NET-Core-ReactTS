using traffic_lights.Server.Services;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddSingleton<TrafficLightsService>();
builder.Services.AddHostedService<TrafficLightsBackgroundService>();

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.MapGet("/trafficlights", (TrafficLightsService trafficLightService) =>
{
    return Results.Ok(trafficLightService.RetrieveLights());
}).WithName("GetTrafficLights")
.WithOpenApi(); ;

app.Run();
