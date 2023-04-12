using API.Services;
using Domain;
using Persistence;

namespace API.Extensions
{
    public static class IdentityServiceExtensions
    {
        public static IServiceCollection AddIdentityServices(this IServiceCollection services, IConfiguration config) 
        {
            services.AddIdentityCore<AppUser>(opt =>
            {
                opt.Password.RequireNonAlphanumeric = true;
            }).AddEntityFrameworkStores<DataContext>();
            services.AddAuthentication();
            services.AddScoped<TokenService>();

            return services;
        }
    }
}
