using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;

using Persistence;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

namespace Infrastructure.Security;

public class IsHostRequirement : IAuthorizationRequirement
{
}

public class IsHostRequiremntHandler : AuthorizationHandler<IsHostRequirement>
{
    private readonly DataContext _dbContext;
    private readonly IHttpContextAccessor _httpContextAcessor;

    public IsHostRequiremntHandler(DataContext dbContext, IHttpContextAccessor httpContextAcessor)
    {
        _dbContext = dbContext;
        _httpContextAcessor = httpContextAcessor;
    }

    protected override Task HandleRequirementAsync(AuthorizationHandlerContext context, IsHostRequirement requirement)
    {
        var userId = context.User.FindFirstValue(ClaimTypes.NameIdentifier);

        if (userId == null) return Task.CompletedTask;

        var activityId = Guid.Parse(_httpContextAcessor.HttpContext?.Request.RouteValues
            .SingleOrDefault(x => x.Key == "id").Value?.ToString());

        var attendee = _dbContext.ActivityAttendees.FindAsync(userId, activityId).Result;

        if (attendee == null) return Task.CompletedTask;

        if (attendee.IsHost) context.Succeed(requirement);

        return Task.CompletedTask;
    }
}
