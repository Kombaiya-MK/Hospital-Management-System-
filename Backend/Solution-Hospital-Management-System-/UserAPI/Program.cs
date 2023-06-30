using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using System.Text;
using UserAPI.Adapters;
using UserAPI.Interfaces;
using UserAPI.Models;
using UserAPI.Models.DTO;
using UserAPI.Services;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddDbContext<HospitalContext>(opts =>
{
    opts.UseSqlServer(builder.Configuration.GetConnectionString("HospitalConn"));
});
builder.Services.AddScoped<IRepo<Doctor, string>, DoctorRepo>();
builder.Services.AddScoped<IRepo<Patient, string>, PatientRepo>();
builder.Services.AddScoped<IRepo<User, string>, UserRepo>();    
builder.Services.AddScoped<IManageHospital,HospitalService>();
builder.Services.AddScoped<IAdapter< User , DoctorRegisterDTO>, DoctorDTOToUserAdapter>();
builder.Services.AddScoped<IAdapter<User, PatientRegisterDTO>, PatientDTOToUserAdapter>();
builder.Services.AddScoped<ITokenGenerate,TokenService>();
builder.Services.AddScoped<IGeneratePassword, GeneratePasswordService>();

builder.Services.AddCors(opts =>
{
    opts.AddPolicy("MyCors", policy =>
    {
        policy.AllowAnyHeader()
        .AllowAnyMethod()
        .AllowAnyOrigin();
    });
});
builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
                .AddJwtBearer(options =>
                {
                    options.TokenValidationParameters = new TokenValidationParameters
                    {
                        ValidateIssuerSigningKey = true,
                        IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(builder.Configuration["TokenKey"])),
                        ValidateIssuer = false,
                        ValidateAudience = false
                    };
                });

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}
app.UseCors("MyCors");
app.UseAuthentication();
app.UseAuthorization();

app.MapControllers();

app.Run();
