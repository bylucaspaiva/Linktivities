using Application.Core;
using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using Persistence;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using AutoMapper;

namespace Application.Activities;

public class List
{
    public class Query : IRequest<Result<List<ActivityDTO>>> { }

    public class Handler : IRequestHandler<Query, Result<List<ActivityDTO>>>
    {
        private readonly DataContext _context;
        private readonly IMapper _mapper;

        public Handler(DataContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }
        public async Task<Result<List<ActivityDTO>>> Handle(Query request, CancellationToken cancellationToken)
        {
             var activities = await _context.Activities
                                .Include(a => a.Attendees)
                                .ThenInclude(u => u.AppUser)
                                .ToListAsync(cancellationToken);

             var activitiesToReturn = _mapper.Map<List<ActivityDTO>>(activities);
            
             return Result<List<ActivityDTO>>.Success(activitiesToReturn);
        }
    }
}
