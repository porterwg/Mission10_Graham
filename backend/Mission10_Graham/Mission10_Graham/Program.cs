// Comments don't work in json, so I'll put some here for the appsettings.json & launchSettings.json files
// launchSettings.json is configured so that https will always be directed to port 5000, which
// lets us configure the frontend to always look for the data at that position

// The appsettings.json contains the connection string to our database, allowing us to interact
// with it during the duration of the program

using Microsoft.EntityFrameworkCore;
using Mission10_Graham.Data;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// This line allows our backend to work along with the database
builder.Services.AddDbContext<BowlingLeagueContext>(options =>
{
    options.UseSqlite(builder.Configuration["Data Source=BowlingConnection"]);
});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

// The frontend config file make our website always show on port 3000. this line below
// allows the backend to receive requests from that address
app.UseCors(x => x.WithOrigins("http://localhost:3000"));
app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();