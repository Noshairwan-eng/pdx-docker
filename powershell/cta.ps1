
# Covnerting our publish folders to applications on IIS
ConvertTo-WebApplication -PSPath "IIS:\Sites\Default Web Site\KMESSO"
ConvertTo-WebApplication -PSPath "IIS:\Sites\Default Web Site\SSOWebService"
ConvertTo-WebApplication -PSPath "IIS:\Sites\Default Web Site\PDXKME_KWMS"

# Enabling 32 Bit applications on IIS
$appcmd = "$env:windir\system32\inetsrv\appcmd.exe set apppool /apppool.name:DefaultAppPool /enable32BitAppOnWin64:true"
Invoke-Expression $appcmd