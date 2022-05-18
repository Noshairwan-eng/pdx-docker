<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="ReportForm.aspx.cs" Inherits="PDXWEB.BusinessModels.Reports.AspWebForm.ReportForm" %>

<%@ Register assembly="CrystalDecisions.Web, Version=13.0.2000.0, Culture=neutral, PublicKeyToken=692fbea5521e1304" namespace="CrystalDecisions.Web" tagprefix="CR" %>




  
   <div id="divReport"> 
    <form id="form1" runat="server">
    <div>
    
      <CR:CrystalReportViewer ID="CrystalReportViewer1" runat="server" AutoDataBind="true"
     HasCrystalLogo="False" HasSearchButton="False" HasToggleGroupTreeButton="False"
     EnableDrillDown="false" HasDrilldownTabs="False" HasDrillUpButton="False" HasToggleParameterPanelButton="False" 
     ToolPanelView="None"
     PrintMode="ActiveX"  />
    
    </div>
    </form>
  </div>

  
