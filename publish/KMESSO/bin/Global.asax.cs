using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using System.Web.Mvc;
using System.Web.Optimization;
using System.Web.Routing;

namespace KME_SSO
{
    // Note: For instructions on enabling IIS6 or IIS7 classic mode, 
    // visit http://go.microsoft.com/?LinkId=9394801

    public class MvcApplication : System.Web.HttpApplication
    {
        protected void Application_Start()
        {
            AreaRegistration.RegisterAllAreas();

            WebApiConfig.Register(GlobalConfiguration.Configuration);
            FilterConfig.RegisterGlobalFilters(GlobalFilters.Filters);
            RouteConfig.RegisterRoutes(RouteTable.Routes);
            BundleConfig.RegisterBundles(BundleTable.Bundles);
        }


        //20161101 Hassan
        protected void Session_Start(Object source, EventArgs e)
        {

        }

        //20161101 Hassan
        protected void Session_End(Object source, EventArgs e)
        {
            try
            {
                if (Session.SessionID != null)
                {
                    KME_SSO.DataAccessLayer.ConnectionManager cdm = new KME_SSO.DataAccessLayer.ConnectionManager(Session.SessionID);
                    cdm.DisconnectDb();
                }
            }
            catch
            {

            }

            Session.Clear();
        }

        protected void Application_PostRequestHandlerExecute(object sender, EventArgs e)
        {
            try
            {
                HttpCookie cookie = new HttpCookie("ASP.NET_SessionId", Session.SessionID);
                cookie.Expires = DateTime.Now.AddMinutes(Convert.ToInt32(System.Configuration.ConfigurationManager.AppSettings["UserIDTimeSession"]));
                Response.Cookies.Add(cookie);
            }
            catch { }
        }

    }
}