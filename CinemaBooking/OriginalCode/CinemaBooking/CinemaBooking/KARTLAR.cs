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
    
    public partial class KARTLAR
    {
        public int ID { get; set; }
        public long KARTID { get; set; }
        public Nullable<int> PERID { get; set; }
        public Nullable<System.DateTime> GECERLILIK_BASLANGIC { get; set; }
        public Nullable<System.DateTime> GECERLILIK_BITIS { get; set; }
        public Nullable<System.DateTime> TANIM_TARIH { get; set; }
        public string TANIMLAYAN { get; set; }
        public string YUKNOKID { get; set; }
        public Nullable<byte> TARIFEID { get; set; }
        public Nullable<System.DateTime> IPTAL_TARIH { get; set; }
        public bool IPTAL_EDILDI { get; set; }
        public string IPTAL_NEDENI { get; set; }
        public string IPTAL_EDEN { get; set; }
        public string NAKIT_KUR { get; set; }
        public Nullable<decimal> NAKIT_TUTAR { get; set; }
        public string KART_KUR { get; set; }
        public Nullable<decimal> KART_TUTAR { get; set; }
        public string TOPLAM_KUR { get; set; }
        public Nullable<decimal> TOPLAM_TUTAR { get; set; }
        public string DEPOZITO_KUR { get; set; }
        public Nullable<decimal> DEPOZITO_TUTAR { get; set; }
        public string KREDI_KUR { get; set; }
        public Nullable<decimal> KREDI_TUTAR { get; set; }
        public string KAMPANYA_KUR { get; set; }
        public Nullable<decimal> KAMPANYA_TUTAR { get; set; }
        public string KAMPANYA_KODU { get; set; }
        public Nullable<decimal> NAKIT_REEL { get; set; }
        public Nullable<decimal> KOMISYON_TUTAR { get; set; }
        public Nullable<double> KOMISYON_YUZDE { get; set; }
        public Nullable<decimal> KOMISYON_TOPLAM { get; set; }
        public Nullable<int> YUKLENEN_BAKIYE { get; set; }
        public string ALAN1 { get; set; }
        public string ALAN2 { get; set; }
        public string ALAN3 { get; set; }
        public string ALAN4 { get; set; }
        public string ISLEMID { get; set; }
        public string SIRANO { get; set; }
        public Nullable<decimal> KDV { get; set; }
        public Nullable<decimal> VERGISIZ { get; set; }
        public Nullable<System.DateTime> IADE_TARIH { get; set; }
        public string IADE_SICILNO { get; set; }
        public string IADE_YUKNOKID { get; set; }
        public string EKDEPOZITO_KUR { get; set; }
        public Nullable<decimal> EKDEPOZITO_TUTAR { get; set; }
    
        public virtual PERSONEL PERSONEL { get; set; }
    }
}
