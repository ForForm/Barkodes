//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace CinemaBooking
{
    using System;
    using System.Collections.Generic;
    
    public partial class MovieCategory
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public MovieCategory()
        {
            this.Movie_MovieCategory = new HashSet<Movie_MovieCategory>();
        }
    
        public int MovieCategoryId { get; set; }
        public string MovieCategoryCode { get; set; }
        public string MovieCategoryName { get; set; }
        public byte[] MovieCategoryImage { get; set; }
    
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<Movie_MovieCategory> Movie_MovieCategory { get; set; }
    }
}
