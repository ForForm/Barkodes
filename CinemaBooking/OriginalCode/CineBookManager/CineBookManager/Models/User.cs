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
    
    public partial class User
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public User()
        {
            this.ModuleAuth = new HashSet<ModuleAuth>();
            this.MovieSessionReservation = new HashSet<MovieSessionReservation>();
            this.MovieTicketSale = new HashSet<MovieTicketSale>();
            this.UserGroup_User = new HashSet<UserGroup_User>();
            this.UserSession = new HashSet<UserSession>();
        }
    
        public int UserId { get; set; }
        public string UserCode { get; set; }
        public string UserName { get; set; }
        public string Password { get; set; }
        public string MailAddress { get; set; }
        public Nullable<bool> Deleted { get; set; }
        public string SessionId { get; set; }
        public Nullable<int> LanguagesId { get; set; }
    
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<ModuleAuth> ModuleAuth { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<MovieSessionReservation> MovieSessionReservation { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<MovieTicketSale> MovieTicketSale { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<UserGroup_User> UserGroup_User { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<UserSession> UserSession { get; set; }
        public virtual Languages Languages { get; set; }
    }
}
