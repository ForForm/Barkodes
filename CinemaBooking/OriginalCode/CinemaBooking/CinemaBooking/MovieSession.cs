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
    
    public partial class MovieSession
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public MovieSession()
        {
            this.MovieSessionAmount = new HashSet<MovieSessionAmount>();
            this.MovieSessionBooking = new HashSet<MovieSessionBooking>();
            this.MovieSessionReservation = new HashSet<MovieSessionReservation>();
            this.MovieTicketSale = new HashSet<MovieTicketSale>();
        }
    
        public int MovieSessionId { get; set; }
        public int MovieId { get; set; }
        public int MovieTheatrePlaceId { get; set; }
        public System.DateTime SessionTime { get; set; }
        public Nullable<int> SgmSessionId { get; set; }
        public Nullable<int> SgmSessionId2 { get; set; }
    
        public virtual Movie Movie { get; set; }
        public virtual MovieTheatrePlace MovieTheatrePlace { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<MovieSessionAmount> MovieSessionAmount { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<MovieSessionBooking> MovieSessionBooking { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<MovieSessionReservation> MovieSessionReservation { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<MovieTicketSale> MovieTicketSale { get; set; }
    }
}
