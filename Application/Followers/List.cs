using Application.Profiles;
using AutoMapper;
using MediatR;
using Persistence;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Followers
{
    internal class List
    {
        public class Query : IRequest<List<Profiles.Profile>>
        {
            public string Predicate { get; set; }
            public string Username { get; set; }

        }
        public class Handler : IRequestHandler<Query, List<Profiles.Profile>>
        {
            private readonly DataContext _context;
            private readonly IMapper _mapper;

            public Handler(DataContext context, IMapper mapper)
            {
                _context = context;
                _mapper = mapper;
            }

            Task<List<Profiles.Profile>> IRequestHandler<Query, List<Profiles.Profile>>.Handle(Query request, CancellationToken cancellationToken)
            {
                throw new NotImplementedException();
            }
        }
    }
}
