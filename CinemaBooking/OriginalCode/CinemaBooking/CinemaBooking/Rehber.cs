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
    
    public partial class Rehber
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public Rehber()
        {
            this.RehberKota = new HashSet<RehberKota>();
        }
    
        public int RehberId { get; set; }
        public int AcenteId { get; set; }
        public string Ad { get; set; }
        public string Tckn { get; set; }
        public string Tel { get; set; }
        public string Tel2 { get; set; }
        public string Adres { get; set; }
        public string Mail { get; set; }
        public Nullable<int> Kota { get; set; }
    
        public virtual Acente Acente { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<RehberKota> RehberKota { get; set; }
    }
}
