using FRSSoftwareDemoApp.Data;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddCors(options => options.AddPolicy(name: "FrontendUI",

    policy =>

    {

        policy.WithOrigins("http://localhost:4200").AllowAnyMethod().AllowAnyHeader();

    }

    ));

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddDbContext<FRSSoftwareDemoAppDbContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("DBConnectionString"))
);

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();
app.UseCors("FrontendUI");
app.Run();
