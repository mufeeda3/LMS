using Microsoft.AspNetCore.Http.Features;
using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json.Serialization;
using Microsoft.Extensions.Logging;
using NReco.Logging.File;
using Online_LMS.Entities.DataContext;
using Online_LMS.Services.AuthHandler;
using Online_LMS.Services.UserAuth.Impl;
using Online_LMS.Services.UserAuth;
using Online_LMS.Services.UserBooks.Impl;
using Online_LMS.Services.UserBooks;

var builder = WebApplication.CreateBuilder(args);


//services.AddDataProtection()
//        .PersistKeysToFileSystem(new DirectoryInfo(@"C:\someFolder\"));

// Add services to the container.
builder.Services.AddRazorPages();
builder.Services.AddCors();
builder.Services.AddDbContext<EntitiesDBContext>(options => {
    options.UseSqlServer("name=ConnectionStrings:DefaultConnection");
});
builder.Services.AddMvc(a => {
    a.EnableEndpointRouting = false;

}).AddJsonOptions(options =>
        options.JsonSerializerOptions.PropertyNamingPolicy = null);
builder.Services.Configure<FormOptions>(options => {
    options.MemoryBufferThreshold = Int32.MaxValue;
});

builder.Services.AddScoped<IUserAuthService, UserAuthService>();
builder.Services.AddScoped<IUserBookService, UserBookService>();


builder.Services.AddAuthentication(o => {
    o.DefaultScheme = SchemesNamesConst.TokenAuthenticationDefaultScheme;
})
.AddScheme<TokenAuthenticationOptions, TokenAuthenticationHandler>(SchemesNamesConst.TokenAuthenticationDefaultScheme, o => { });

builder.Services.AddLogging(loggingBuilder => {
    //var loggingSection = IConfiguration.GetSection("Logging");
    loggingBuilder.ClearProviders();
    var log_driver = new FileLoggerProvider("logs/log.txt", true);
    log_driver.MinLevel = LogLevel.Warning;
    log_driver.Options.MaxRollingFiles = 30;
    log_driver.Options.FileSizeLimitBytes = 10000;
    loggingBuilder.AddProvider(log_driver);
});


var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment()) {
    app.UseExceptionHandler("/Error");
}
var defFiles = new DefaultFilesOptions();
defFiles.DefaultFileNames.Clear();
defFiles.DefaultFileNames.Add("index.html");
app.UseDefaultFiles(defFiles);
app.UseStaticFiles();


// app.UseRouting() ;
app.UseCors(a => a.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader());
app.UseMvc();

app.UseAuthorization();

app.MapRazorPages();
app.MapControllers();

app.MapFallbackToFile("index.html");

app.Run();
