<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="QuotationReport.aspx.cs" Inherits="PDXWEB.AspNetForms.QuotationInquiryReport.QuotationReport" %>

<%@ Register assembly="CrystalDecisions.Web, Version=12.0.2000.0, Culture=neutral, PublicKeyToken=692fbea5521e1304" namespace="CrystalDecisions.Web" tagprefix="CR" %>
 
    <form id="form1" runat="server">
     <div id="divReport"  > 
    
      <CR:CrystalReportViewer ID="CrystalReportViewer1" runat="server" AutoDataBind="true"
     HasCrystalLogo="False" HasSearchButton="False" HasToggleGroupTreeButton="False" Font-Size="7px"
     EnableDrillDown="false" HasDrilldownTabs="False" HasDrillUpButton="False" HasToggleParameterPanelButton="False" 
     ToolPanelView="None"
     PrintMode="ActiveX"  /> 
    </div>
    </form> 
 <style>
     /*Hst002:harcoded the dialogue position for export to pdf dialoge*/
 table[role=dialog]
 { 
      left: 248px !important;
    top: 76px !important;
     
     
     }
 </style>
