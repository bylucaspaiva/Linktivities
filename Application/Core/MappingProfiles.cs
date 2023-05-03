﻿using AutoMapper;
using Domain;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Application.Activities;

namespace Application.Core;

public class MappingProfiles : Profile
{
    public MappingProfiles()
    {
        CreateMap<Activity, Activity>();
        CreateMap<Activity, ActivityDTO>()
            .ForMember(d => d.HostUserName, o => o.MapFrom(s => s.Attendees
                .FirstOrDefault(x => x.IsHost).AppUser.UserName));
        CreateMap<ActivityAttendee, Profiles.Profile>()
            .ForMember(d => d.DisplayName, o => o.MapFrom((s => s.AppUser.DisplayName)))
            .ForMember(d => d.Username, o => o.MapFrom((s => s.AppUser.UserName)))
            .ForMember(d => d.Bio, o => o.MapFrom((s => s.AppUser.Bio)));

    }
}
