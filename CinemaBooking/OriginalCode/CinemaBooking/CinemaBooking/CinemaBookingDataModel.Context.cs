﻿//------------------------------------------------------------------------------
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
    using System.Data.Entity;
    using System.Data.Entity.Infrastructure;
    using System.Data.Entity.Core.Objects;
    using System.Linq;
    
    public partial class CinemaBookingEntities : DbContext
    {
        public CinemaBookingEntities()
            : base("name=CinemaBookingEntities")
        {
        }
    
        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            throw new UnintentionalCodeFirstException();
        }
    
        public virtual DbSet<LabelDictionary> LabelDictionary { get; set; }
        public virtual DbSet<Languages> Languages { get; set; }
        public virtual DbSet<Module> Module { get; set; }
        public virtual DbSet<ModuleAuth> ModuleAuth { get; set; }
        public virtual DbSet<ModuleOperation> ModuleOperation { get; set; }
        public virtual DbSet<Movie> Movie { get; set; }
        public virtual DbSet<Movie_MovieCast> Movie_MovieCast { get; set; }
        public virtual DbSet<Movie_MovieCategory> Movie_MovieCategory { get; set; }
        public virtual DbSet<Movie_MovieDirector> Movie_MovieDirector { get; set; }
        public virtual DbSet<Movie_MovieFormat> Movie_MovieFormat { get; set; }
        public virtual DbSet<Movie_MovieType> Movie_MovieType { get; set; }
        public virtual DbSet<MovieCast> MovieCast { get; set; }
        public virtual DbSet<MovieCategory> MovieCategory { get; set; }
        public virtual DbSet<MovieDirector> MovieDirector { get; set; }
        public virtual DbSet<MovieFormat> MovieFormat { get; set; }
        public virtual DbSet<MovieSeatType> MovieSeatType { get; set; }
        public virtual DbSet<MovieSession> MovieSession { get; set; }
        public virtual DbSet<MovieSession_MovieFormat> MovieSession_MovieFormat { get; set; }
        public virtual DbSet<MovieSessionAmount> MovieSessionAmount { get; set; }
        public virtual DbSet<MovieSessionBooking> MovieSessionBooking { get; set; }
        public virtual DbSet<MovieSessionBookingDetail> MovieSessionBookingDetail { get; set; }
        public virtual DbSet<MovieSessionLog> MovieSessionLog { get; set; }
        public virtual DbSet<MovieSessionReservation> MovieSessionReservation { get; set; }
        public virtual DbSet<MovieTariff> MovieTariff { get; set; }
        public virtual DbSet<MovieTheater> MovieTheater { get; set; }
        public virtual DbSet<MovieTheaterLog> MovieTheaterLog { get; set; }
        public virtual DbSet<MovieTheatrePlace> MovieTheatrePlace { get; set; }
        public virtual DbSet<MovieTheatrePlaceLog> MovieTheatrePlaceLog { get; set; }
        public virtual DbSet<MovieTheatrePlaceTemplate> MovieTheatrePlaceTemplate { get; set; }
        public virtual DbSet<MovieTheatrePlaceTemplateBlock> MovieTheatrePlaceTemplateBlock { get; set; }
        public virtual DbSet<MovieTheatrePlaceTemplateDetails> MovieTheatrePlaceTemplateDetails { get; set; }
        public virtual DbSet<MovieTheatrePlaceTemplateDetailsLog> MovieTheatrePlaceTemplateDetailsLog { get; set; }
        public virtual DbSet<MovieTicket> MovieTicket { get; set; }
        public virtual DbSet<MovieTicketOption> MovieTicketOption { get; set; }
        public virtual DbSet<MovieTicketSale> MovieTicketSale { get; set; }
        public virtual DbSet<MovieTicketSaleLog> MovieTicketSaleLog { get; set; }
        public virtual DbSet<MovieTicketSaleOption> MovieTicketSaleOption { get; set; }
        public virtual DbSet<MovieTicketSalePayment> MovieTicketSalePayment { get; set; }
        public virtual DbSet<MovieTicketSalePaymentType> MovieTicketSalePaymentType { get; set; }
        public virtual DbSet<MovieType> MovieType { get; set; }
        public virtual DbSet<PrinterTemplate> PrinterTemplate { get; set; }
        public virtual DbSet<SystemParameter> SystemParameter { get; set; }
        public virtual DbSet<User> User { get; set; }
        public virtual DbSet<UserGroup> UserGroup { get; set; }
        public virtual DbSet<UserGroup_User> UserGroup_User { get; set; }
        public virtual DbSet<UserSession> UserSession { get; set; }
        public virtual DbSet<Device> Device { get; set; }
        public virtual DbSet<MovieTheatrePlaceTemplateDetailsOto> MovieTheatrePlaceTemplateDetailsOto { get; set; }
        public virtual DbSet<MovieTheatrePlaceTemplateDetailsSon> MovieTheatrePlaceTemplateDetailsSon { get; set; }
        public virtual DbSet<MovieTheatrePlaceTemplateDetailsYdk> MovieTheatrePlaceTemplateDetailsYdk { get; set; }
        public virtual DbSet<MovieTheatrePlaceTemplateDetailsYdk2> MovieTheatrePlaceTemplateDetailsYdk2 { get; set; }
        public virtual DbSet<MovieTicketDeleted> MovieTicketDeleted { get; set; }
        public virtual DbSet<MovieTicketSaleDeleted> MovieTicketSaleDeleted { get; set; }
        public virtual DbSet<MovieTicketSaleOptionDeleted> MovieTicketSaleOptionDeleted { get; set; }
        public virtual DbSet<MovieTicketSalePaymentDeleted> MovieTicketSalePaymentDeleted { get; set; }
        public virtual DbSet<PrinterTemplate_20171210> PrinterTemplate_20171210 { get; set; }
        public virtual DbSet<MovieBookingSerialReservation> MovieBookingSerialReservation { get; set; }
    
        [DbFunction("CinemaBookingEntities", "fn_SplitValues")]
        public virtual IQueryable<fn_SplitValues_Result> fn_SplitValues(string @string, string delimiter)
        {
            var stringParameter = @string != null ?
                new ObjectParameter("String", @string) :
                new ObjectParameter("String", typeof(string));
    
            var delimiterParameter = delimiter != null ?
                new ObjectParameter("Delimiter", delimiter) :
                new ObjectParameter("Delimiter", typeof(string));
    
            return ((IObjectContextAdapter)this).ObjectContext.CreateQuery<fn_SplitValues_Result>("[CinemaBookingEntities].[fn_SplitValues](@String, @Delimiter)", stringParameter, delimiterParameter);
        }
    
        public virtual ObjectResult<CineBiletSelect_Result> CineBiletSelect(Nullable<int> state)
        {
            var stateParameter = state.HasValue ?
                new ObjectParameter("State", state) :
                new ObjectParameter("State", typeof(int));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<CineBiletSelect_Result>("CineBiletSelect", stateParameter);
        }
    
        public virtual int CineBiletUpdate(Nullable<int> id, string response)
        {
            var idParameter = id.HasValue ?
                new ObjectParameter("Id", id) :
                new ObjectParameter("Id", typeof(int));
    
            var responseParameter = response != null ?
                new ObjectParameter("Response", response) :
                new ObjectParameter("Response", typeof(string));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction("CineBiletUpdate", idParameter, responseParameter);
        }
    
        public virtual int CineCastInsert(Nullable<int> movieId, string movieCastName)
        {
            var movieIdParameter = movieId.HasValue ?
                new ObjectParameter("MovieId", movieId) :
                new ObjectParameter("MovieId", typeof(int));
    
            var movieCastNameParameter = movieCastName != null ?
                new ObjectParameter("MovieCastName", movieCastName) :
                new ObjectParameter("MovieCastName", typeof(string));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction("CineCastInsert", movieIdParameter, movieCastNameParameter);
        }
    
        public virtual int CineCategoryInsert(Nullable<int> movieId, string movieCategoryName)
        {
            var movieIdParameter = movieId.HasValue ?
                new ObjectParameter("MovieId", movieId) :
                new ObjectParameter("MovieId", typeof(int));
    
            var movieCategoryNameParameter = movieCategoryName != null ?
                new ObjectParameter("MovieCategoryName", movieCategoryName) :
                new ObjectParameter("MovieCategoryName", typeof(string));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction("CineCategoryInsert", movieIdParameter, movieCategoryNameParameter);
        }
    
        public virtual int CineDirectorInsert(Nullable<int> movieId, string movieDirectorName)
        {
            var movieIdParameter = movieId.HasValue ?
                new ObjectParameter("MovieId", movieId) :
                new ObjectParameter("MovieId", typeof(int));
    
            var movieDirectorNameParameter = movieDirectorName != null ?
                new ObjectParameter("MovieDirectorName", movieDirectorName) :
                new ObjectParameter("MovieDirectorName", typeof(string));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction("CineDirectorInsert", movieIdParameter, movieDirectorNameParameter);
        }
    
        public virtual ObjectResult<Nullable<int>> CineFilmSelect(string movieId, string name, string nameTr, string description, string duration, string releaseDate, string summary, string madeYear, string visionDate2, string distributor, string lastUpdate, string posterUrl)
        {
            var movieIdParameter = movieId != null ?
                new ObjectParameter("MovieId", movieId) :
                new ObjectParameter("MovieId", typeof(string));
    
            var nameParameter = name != null ?
                new ObjectParameter("Name", name) :
                new ObjectParameter("Name", typeof(string));
    
            var nameTrParameter = nameTr != null ?
                new ObjectParameter("NameTr", nameTr) :
                new ObjectParameter("NameTr", typeof(string));
    
            var descriptionParameter = description != null ?
                new ObjectParameter("Description", description) :
                new ObjectParameter("Description", typeof(string));
    
            var durationParameter = duration != null ?
                new ObjectParameter("Duration", duration) :
                new ObjectParameter("Duration", typeof(string));
    
            var releaseDateParameter = releaseDate != null ?
                new ObjectParameter("ReleaseDate", releaseDate) :
                new ObjectParameter("ReleaseDate", typeof(string));
    
            var summaryParameter = summary != null ?
                new ObjectParameter("Summary", summary) :
                new ObjectParameter("Summary", typeof(string));
    
            var madeYearParameter = madeYear != null ?
                new ObjectParameter("MadeYear", madeYear) :
                new ObjectParameter("MadeYear", typeof(string));
    
            var visionDate2Parameter = visionDate2 != null ?
                new ObjectParameter("VisionDate2", visionDate2) :
                new ObjectParameter("VisionDate2", typeof(string));
    
            var distributorParameter = distributor != null ?
                new ObjectParameter("Distributor", distributor) :
                new ObjectParameter("Distributor", typeof(string));
    
            var lastUpdateParameter = lastUpdate != null ?
                new ObjectParameter("LastUpdate", lastUpdate) :
                new ObjectParameter("LastUpdate", typeof(string));
    
            var posterUrlParameter = posterUrl != null ?
                new ObjectParameter("PosterUrl", posterUrl) :
                new ObjectParameter("PosterUrl", typeof(string));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<Nullable<int>>("CineFilmSelect", movieIdParameter, nameParameter, nameTrParameter, descriptionParameter, durationParameter, releaseDateParameter, summaryParameter, madeYearParameter, visionDate2Parameter, distributorParameter, lastUpdateParameter, posterUrlParameter);
        }
    
        public virtual int CineGenresInsert(Nullable<int> movieId, string movieTypeName)
        {
            var movieIdParameter = movieId.HasValue ?
                new ObjectParameter("MovieId", movieId) :
                new ObjectParameter("MovieId", typeof(int));
    
            var movieTypeNameParameter = movieTypeName != null ?
                new ObjectParameter("MovieTypeName", movieTypeName) :
                new ObjectParameter("MovieTypeName", typeof(string));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction("CineGenresInsert", movieIdParameter, movieTypeNameParameter);
        }
    
        public virtual ObjectResult<CineGetMovieSessionLog_Result> CineGetMovieSessionLog(Nullable<int> movieSessionId, Nullable<int> type)
        {
            var movieSessionIdParameter = movieSessionId.HasValue ?
                new ObjectParameter("MovieSessionId", movieSessionId) :
                new ObjectParameter("MovieSessionId", typeof(int));
    
            var typeParameter = type.HasValue ?
                new ObjectParameter("Type", type) :
                new ObjectParameter("Type", typeof(int));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<CineGetMovieSessionLog_Result>("CineGetMovieSessionLog", movieSessionIdParameter, typeParameter);
        }
    
        public virtual ObjectResult<CineKoltukSelect_Result> CineKoltukSelect(Nullable<int> state)
        {
            var stateParameter = state.HasValue ?
                new ObjectParameter("State", state) :
                new ObjectParameter("State", typeof(int));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<CineKoltukSelect_Result>("CineKoltukSelect", stateParameter);
        }
    
        public virtual int CineKoltukUpdate(Nullable<int> id, string response)
        {
            var idParameter = id.HasValue ?
                new ObjectParameter("Id", id) :
                new ObjectParameter("Id", typeof(int));
    
            var responseParameter = response != null ?
                new ObjectParameter("Response", response) :
                new ObjectParameter("Response", typeof(string));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction("CineKoltukUpdate", idParameter, responseParameter);
        }
    
        public virtual ObjectResult<CineSalonSelect_Result> CineSalonSelect(Nullable<int> state)
        {
            var stateParameter = state.HasValue ?
                new ObjectParameter("State", state) :
                new ObjectParameter("State", typeof(int));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<CineSalonSelect_Result>("CineSalonSelect", stateParameter);
        }
    
        public virtual int CineSalonUpdate(Nullable<int> id, string response)
        {
            var idParameter = id.HasValue ?
                new ObjectParameter("Id", id) :
                new ObjectParameter("Id", typeof(int));
    
            var responseParameter = response != null ?
                new ObjectParameter("Response", response) :
                new ObjectParameter("Response", typeof(string));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction("CineSalonUpdate", idParameter, responseParameter);
        }
    
        public virtual ObjectResult<CineSeansSelect_Result> CineSeansSelect(Nullable<int> state)
        {
            var stateParameter = state.HasValue ?
                new ObjectParameter("State", state) :
                new ObjectParameter("State", typeof(int));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<CineSeansSelect_Result>("CineSeansSelect", stateParameter);
        }
    
        public virtual ObjectResult<CineSeansSelectControl_Result> CineSeansSelectControl(Nullable<int> movieId)
        {
            var movieIdParameter = movieId.HasValue ?
                new ObjectParameter("MovieId", movieId) :
                new ObjectParameter("MovieId", typeof(int));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<CineSeansSelectControl_Result>("CineSeansSelectControl", movieIdParameter);
        }
    
        public virtual int CineSeansUpdate(Nullable<int> id, Nullable<int> movieSessionId, Nullable<int> sgmSessionId, string response)
        {
            var idParameter = id.HasValue ?
                new ObjectParameter("Id", id) :
                new ObjectParameter("Id", typeof(int));
    
            var movieSessionIdParameter = movieSessionId.HasValue ?
                new ObjectParameter("MovieSessionId", movieSessionId) :
                new ObjectParameter("MovieSessionId", typeof(int));
    
            var sgmSessionIdParameter = sgmSessionId.HasValue ?
                new ObjectParameter("SgmSessionId", sgmSessionId) :
                new ObjectParameter("SgmSessionId", typeof(int));
    
            var responseParameter = response != null ?
                new ObjectParameter("Response", response) :
                new ObjectParameter("Response", typeof(string));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction("CineSeansUpdate", idParameter, movieSessionIdParameter, sgmSessionIdParameter, responseParameter);
        }
    
        public virtual int CineSetMovieSessionLog(Nullable<int> id, Nullable<int> type)
        {
            var idParameter = id.HasValue ?
                new ObjectParameter("Id", id) :
                new ObjectParameter("Id", typeof(int));
    
            var typeParameter = type.HasValue ?
                new ObjectParameter("type", type) :
                new ObjectParameter("type", typeof(int));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction("CineSetMovieSessionLog", idParameter, typeParameter);
        }
    
        public virtual int CineSetMovieSessionUpdateLog(Nullable<int> id, Nullable<int> movieTheatrePlaceId)
        {
            var idParameter = id.HasValue ?
                new ObjectParameter("Id", id) :
                new ObjectParameter("Id", typeof(int));
    
            var movieTheatrePlaceIdParameter = movieTheatrePlaceId.HasValue ?
                new ObjectParameter("MovieTheatrePlaceId", movieTheatrePlaceId) :
                new ObjectParameter("MovieTheatrePlaceId", typeof(int));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction("CineSetMovieSessionUpdateLog", idParameter, movieTheatrePlaceIdParameter);
        }
    
        public virtual int CineSetMovieTicketSaleCancel(Nullable<int> id)
        {
            var idParameter = id.HasValue ?
                new ObjectParameter("Id", id) :
                new ObjectParameter("Id", typeof(int));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction("CineSetMovieTicketSaleCancel", idParameter);
        }
    
        public virtual int CineSetMovieTicketSaleLog(Nullable<int> id)
        {
            var idParameter = id.HasValue ?
                new ObjectParameter("Id", id) :
                new ObjectParameter("Id", typeof(int));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction("CineSetMovieTicketSaleLog", idParameter);
        }
    
        public virtual ObjectResult<CineSubeSelect_Result> CineSubeSelect(Nullable<int> state)
        {
            var stateParameter = state.HasValue ?
                new ObjectParameter("State", state) :
                new ObjectParameter("State", typeof(int));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<CineSubeSelect_Result>("CineSubeSelect", stateParameter);
        }
    
        public virtual int CineSubeUpdate(Nullable<int> id, string response)
        {
            var idParameter = id.HasValue ?
                new ObjectParameter("Id", id) :
                new ObjectParameter("Id", typeof(int));
    
            var responseParameter = response != null ?
                new ObjectParameter("Response", response) :
                new ObjectParameter("Response", typeof(string));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction("CineSubeUpdate", idParameter, responseParameter);
        }
    
        public virtual int CineVersionInsert(Nullable<int> movieId, string movieFormatName)
        {
            var movieIdParameter = movieId.HasValue ?
                new ObjectParameter("MovieId", movieId) :
                new ObjectParameter("MovieId", typeof(int));
    
            var movieFormatNameParameter = movieFormatName != null ?
                new ObjectParameter("MovieFormatName", movieFormatName) :
                new ObjectParameter("MovieFormatName", typeof(string));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction("CineVersionInsert", movieIdParameter, movieFormatNameParameter);
        }
    
        public virtual int I_K_SINEMASAAT_P()
        {
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction("I_K_SINEMASAAT_P");
        }
    
        public virtual int sp_CustomerAuthorization_Check(string parameter)
        {
            var parameterParameter = parameter != null ?
                new ObjectParameter("Parameter", parameter) :
                new ObjectParameter("Parameter", typeof(string));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction("sp_CustomerAuthorization_Check", parameterParameter);
        }
    
        public virtual int sp_CustomerAuthorization_CheckForBooking(string parameter, Nullable<int> movieSessionId)
        {
            var parameterParameter = parameter != null ?
                new ObjectParameter("Parameter", parameter) :
                new ObjectParameter("Parameter", typeof(string));
    
            var movieSessionIdParameter = movieSessionId.HasValue ?
                new ObjectParameter("MovieSessionId", movieSessionId) :
                new ObjectParameter("MovieSessionId", typeof(int));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction("sp_CustomerAuthorization_CheckForBooking", parameterParameter, movieSessionIdParameter);
        }
    
        public virtual int sp_CustomerAuthorization_FindTagId(string parameter)
        {
            var parameterParameter = parameter != null ?
                new ObjectParameter("Parameter", parameter) :
                new ObjectParameter("Parameter", typeof(string));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction("sp_CustomerAuthorization_FindTagId", parameterParameter);
        }
    
        public virtual ObjectResult<sp_Movie_SelectInfo_Result> sp_Movie_SelectInfo()
        {
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<sp_Movie_SelectInfo_Result>("sp_Movie_SelectInfo");
        }
    
        public virtual ObjectResult<sp_Movie_Session_Tariff_Count_Details_Result> sp_Movie_Session_Tariff_Count_Details(Nullable<System.DateTime> dateOfSession)
        {
            var dateOfSessionParameter = dateOfSession.HasValue ?
                new ObjectParameter("DateOfSession", dateOfSession) :
                new ObjectParameter("DateOfSession", typeof(System.DateTime));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<sp_Movie_Session_Tariff_Count_Details_Result>("sp_Movie_Session_Tariff_Count_Details", dateOfSessionParameter);
        }
    
        public virtual int sp_Movie_SetSessionMovieFormat_ByTime(Nullable<int> movieId, Nullable<System.TimeSpan> sessionTime, string movieFormats)
        {
            var movieIdParameter = movieId.HasValue ?
                new ObjectParameter("MovieId", movieId) :
                new ObjectParameter("MovieId", typeof(int));
    
            var sessionTimeParameter = sessionTime.HasValue ?
                new ObjectParameter("SessionTime", sessionTime) :
                new ObjectParameter("SessionTime", typeof(System.TimeSpan));
    
            var movieFormatsParameter = movieFormats != null ?
                new ObjectParameter("MovieFormats", movieFormats) :
                new ObjectParameter("MovieFormats", typeof(string));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction("sp_Movie_SetSessionMovieFormat_ByTime", movieIdParameter, sessionTimeParameter, movieFormatsParameter);
        }
    
        public virtual ObjectResult<sp_Report_General_Result> sp_Report_General()
        {
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<sp_Report_General_Result>("sp_Report_General");
        }
    
        public virtual ObjectResult<sp_Report_General2_Result> sp_Report_General2(Nullable<System.DateTime> startDate, Nullable<System.DateTime> finishDate)
        {
            var startDateParameter = startDate.HasValue ?
                new ObjectParameter("StartDate", startDate) :
                new ObjectParameter("StartDate", typeof(System.DateTime));
    
            var finishDateParameter = finishDate.HasValue ?
                new ObjectParameter("FinishDate", finishDate) :
                new ObjectParameter("FinishDate", typeof(System.DateTime));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<sp_Report_General2_Result>("sp_Report_General2", startDateParameter, finishDateParameter);
        }
    
        public virtual ObjectResult<sp_Report_MovieSessionActivity_Result> sp_Report_MovieSessionActivity(Nullable<System.DateTime> dateOfSession)
        {
            var dateOfSessionParameter = dateOfSession.HasValue ?
                new ObjectParameter("DateOfSession", dateOfSession) :
                new ObjectParameter("DateOfSession", typeof(System.DateTime));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<sp_Report_MovieSessionActivity_Result>("sp_Report_MovieSessionActivity", dateOfSessionParameter);
        }
    
        public virtual ObjectResult<sp_UyumsuzSatisBul_Result> sp_UyumsuzSatisBul()
        {
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<sp_UyumsuzSatisBul_Result>("sp_UyumsuzSatisBul");
        }
    
        public virtual int MovieTicketDeleteInsert(Nullable<int> id)
        {
            var idParameter = id.HasValue ?
                new ObjectParameter("Id", id) :
                new ObjectParameter("Id", typeof(int));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction("MovieTicketDeleteInsert", idParameter);
        }
    
        public virtual int sp_MovieTicketSale_Delete(Nullable<int> movieTicketSaleId)
        {
            var movieTicketSaleIdParameter = movieTicketSaleId.HasValue ?
                new ObjectParameter("MovieTicketSaleId", movieTicketSaleId) :
                new ObjectParameter("MovieTicketSaleId", typeof(int));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction("sp_MovieTicketSale_Delete", movieTicketSaleIdParameter);
        }
    
        public virtual ObjectResult<Nullable<int>> sp_PassageControl(string barcodeNumber)
        {
            var barcodeNumberParameter = barcodeNumber != null ?
                new ObjectParameter("BarcodeNumber", barcodeNumber) :
                new ObjectParameter("BarcodeNumber", typeof(string));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<Nullable<int>>("sp_PassageControl", barcodeNumberParameter);
        }
    }
}
