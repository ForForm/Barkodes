//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace CineBookManager.Models
{
    using System;
    using System.Collections.Generic;
    
    public partial class Movie_MovieCategory
    {
        public int Id { get; set; }
        public int MovieId { get; set; }
        public int MovieCategoryId { get; set; }
    
        public virtual Movie Movie { get; set; }
        public virtual MovieCategory MovieCategory { get; set; }
    }
}
