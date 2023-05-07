using Microsoft.AspNetCore.Authorization;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Infrastructure.Security;

public class IsHostRequirement : IAuthorizationRequirement
{
}

public class IsHostRequiremntHandler : AuthorizationHandler<IsHostRequirement>
{
    public IsHostRequiremntHandler()
    {

    }

    protected override Task HandleRequirementAsync(AuthorizationHandlerContext context, IsHostRequirement requirement)
    {
        throw new NotImplementedException();
    }
}
