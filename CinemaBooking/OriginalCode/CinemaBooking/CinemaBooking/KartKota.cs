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
    
    public partial class KartKota
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public KartKota()
        {
            this.KartKotaKod = new HashSet<KartKotaKod>();
        }
    
        public int KotaId { get; set; }
        public int SozlesmeId { get; set; }
        public int TarifeId { get; set; }
        public decimal Tutar { get; set; }
        public int Kota { get; set; }
        public System.DateTime GecerlilikBaslangic { get; set; }
        public System.DateTime GecerlilikBitis { get; set; }
        public decimal KomisyonTutar { get; set; }
        public double KomisyonYuzde { get; set; }
        public bool Aktif { get; set; }
    
        public virtual KartTarife KartTarife { get; set; }
        public virtual Sozlesme Sozlesme { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<KartKotaKod> KartKotaKod { get; set; }
    }
}
