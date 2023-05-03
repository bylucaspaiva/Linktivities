﻿using System;
using Application.Profiles;


namespace Application.Activities
{
    internal class ActivityDTO
    {
        public Guid Id { get; set; }
        public string Title { get; set; }
        public DateTime Date { get; set; }
        public string Description { get; set; }
        public string Category { get; set; }
        public string City { get; set; }
        public string Venue { get; set; }
        public ICollection<Profile> Profiles { get; set; }
    }
}
