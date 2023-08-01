using Application.Core;
using Application.Interfaces;
using AutoMapper;
using AutoMapper.QueryableExtensions;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Profiles;

public class Edit
{
    public class Command : IRequest<Result<Unit>>
    {
        public Profile Profile { get; set; }
    }

    public class Handler : IRequestHandler<Command, Result<Unit>>
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

        public async Task<Result<Unit>> Handle(Command request, CancellationToken cancellationToken)
        {
            var profile = await _context.Users
                    .SingleOrDefaultAsync(x => x.UserName == request.Profile.Username);

            if (profile == null) return null;

            request.Profile.Photos = profile.Photos;

            _mapper.Map(request.Profile, profile);

            _context.Users.Update(profile);

            bool result = false;
            try
            {
               result = await _context.SaveChangesAsync() > 0;
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.ToString());
            }

            if (!result) return Result<Unit>.Failure("Failed to update profile");

            return Result<Unit>.Success(Unit.Value);
        }
    }

}
