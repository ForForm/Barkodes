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
    
    public partial class SmtpInfo
    {
        public int Id { get; set; }
        public string Smtp { get; set; }
        public string Port { get; set; }
        public string SmtpUser { get; set; }
        public string SmtpPass { get; set; }
        public Nullable<bool> Ssl { get; set; }
        public string Mail { get; set; }
        public string MailFrom { get; set; }
        public string MailSubject { get; set; }
        public string MailSignupBody { get; set; }
        public string MailApproveBody { get; set; }
        public string MailRejectBody { get; set; }
    }
}
