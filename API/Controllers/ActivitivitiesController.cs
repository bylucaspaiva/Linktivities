using Persistence;

namespace API.Controllers
{
    public class ActivitivitiesController : BaseApiController
    {
        private readonly DataContext _context;

        public ActivitivitiesController(DataContext context)
        {
            _context = context;
        }
    }
}
