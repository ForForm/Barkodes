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
    
    public partial class Tbl_001_Kart_Logs
    {
        public int ID { get; set; }
        public Nullable<long> KARTID { get; set; }
        public Nullable<System.DateTime> Tarih { get; set; }
        public string Cihaz { get; set; }
        public string Operator { get; set; }
        public string Aciklama { get; set; }
        public Nullable<int> Log_Tipi { get; set; }
    }
}
