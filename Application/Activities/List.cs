using Application.Core;
using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;
using AutoMapper;
using AutoMapper.QueryableExtensions;
using Application.Interfaces;

namespace Application.Activities;

public class List
{
    public class Query : IRequest<Result<List<ActivityDTO>>> { }

    public class Handler : IRequestHandler<Query, Result<List<ActivityDTO>>>
    {
        private readonly DataContext _context;
        private readonly IMapper _mapper;
        private readonly IUserAccessor _userAccessor;

        public Handler(DataContext context, IMapper mapper, IUserAccessor userAccessor)
        {
            _context = context;
            _mapper = mapper;
            _userAccessor = userAccessor;
        }
        public async Task<Result<List<ActivityDTO>>> Handle(Query request, CancellationToken cancellationToken)
        {
             var activities = await _context.Activities
                 .ProjectTo<ActivityDTO>(_mapper.ConfigurationProvider, new {currentUsername = _userAccessor.GetUserName()})
                 .ToListAsync(cancellationToken);
             
             return Result<List<ActivityDTO>>.Success(activities);
        }
    }
}
