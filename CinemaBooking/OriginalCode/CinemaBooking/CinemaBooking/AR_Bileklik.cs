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
    
    public partial class AR_Bileklik
    {
        public int Id { get; set; }
        public string RezervasyonKodu { get; set; }
        public string Turu { get; set; }
        public string KartId { get; set; }
        public System.DateTime Tarih { get; set; }
        public string Operator { get; set; }
        public string Kiosk { get; set; }
        public byte TarifeId { get; set; }
    
        public virtual AR_Rezervasyon AR_Rezervasyon { get; set; }
    }
}