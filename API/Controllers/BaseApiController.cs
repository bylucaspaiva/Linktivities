using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]//www.localhost:5000/baseapi
    public class BaseApiController : ControllerBase
    {
        private IMediator _mediator;

        protected IMediator Mediator => _mediator 
            ??= HttpContext.RequestServices.GetService<IMediator>(); 
    }
}
