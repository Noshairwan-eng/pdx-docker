(function(n){var f={meta:[],css:["nethelp.css"],js:["jquery.js","jquery-ui.js","nethelp.js"]},t=document.getElementsByTagName("script");t=t[t.length-1];var o=t.getAttribute("data-js")||/^(.*\/)?[^\/]*$/.exec(t.getAttribute("src"))[1],h=/(^|\/)js\/$/i.test(o)?o.replace(/js\/$/i,""):o+"../",c=t.getAttribute("data-css")||h+"css/",w=t.getAttribute("data-themes")||h+"themes/",p=t.getAttribute("data-docs")||n,y=t.getAttribute("data-settings")||h+"settings.xml",a=t.getAttribute("data-placeholder")||'[data-c1-role="nethelp"], body',d=t.getAttribute("data-start")||n,k=/true/i.test(t.getAttribute("data-topiconly")),b=/true/i.test(t.getAttribute("data-istopic")),v=/true/i.test(t.getAttribute("data-mobile")),l=/true/i.test(t.getAttribute("data-manual")),s=/false/i.test(t.getAttribute("data-cache")),e,i,r,u;v&&(f.js.push("jquery.mobile.js"),f.js.push("nethelp.mobile.js"),f.css=["nethelp.mobile.css"],l=!0);for(e in f.meta){r=f.meta[e],u="<meta ";for(i in r)u+=i+'="'+r[i]+'" ';document.write(u+"/>")}for(e in f.css){if(r=f.css[e],u='<link type="text/css" rel="stylesheet" ',typeof r=="object")for(i in r)u+=i+'="'+(i==="href"?c:"")+r[i]+(i==="href"&&s?"?r="+ +new Date:"")+'" ';else u+='href="'+c+r+(s?"?r="+ +new Date:"")+'" ';document.write(u+"/>")}for(e in f.js){if(r=f.js[e],u='<script type="text/javascript"',typeof r=="object")for(i in r)u+=" "+i+'="'+(i==="src"?o:"")+r[i]+(i==="src"&&s?"?r="+ +new Date:"")+'"';else u+=' src="'+o+r+(s?"?r="+ +new Date:"")+'"';document.write(u+"><\/script>")}window.nethelpOptions={paths:{js:o,css:c,themes:w,docs:p},autostart:!l,settings:y,placeholder:a,start:d,topiconly:k,istopic:b,disableCache:s}})()