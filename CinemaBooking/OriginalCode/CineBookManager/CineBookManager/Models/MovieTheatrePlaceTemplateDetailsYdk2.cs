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
    
    public partial class MovieTheatrePlaceTemplateDetailsYdk2
    {
        public int Id { get; set; }
        public int MovieTheatrePlaceTemplateId { get; set; }
        public int RowIndex { get; set; }
        public int ColumnIndex { get; set; }
        public string Prefix { get; set; }
        public string Suffix { get; set; }
        public string SeatCode { get; set; }
        public int MovieSeatTypeId { get; set; }
        public Nullable<int> Block { get; set; }
    }
}
