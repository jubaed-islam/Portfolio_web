/* ===== EDIT YOUR CONTENT HERE ===== */
const AUTH = "[Add author list in original order]"; // verify before publishing
const pubs = [
  {cat:"Accepted Journal Articles", title:"Geospatial Multi-Indicator Assessment of Flood Risk in a Wetland Ecosystem, Using a PCA-Weighted Risk Framework", venue:"[Journal name]", status:"Accepted", doi:""},
  {cat:"Conference Proceedings", authors:"Jubaed Islam, Zahid Hasan, Hossain Md Abdullah, Sajib Sarker", title:"Integrated Flood Risk Modeling in Chalan Beel, Bangladesh: A Weighing Based Geospatial Approach", venue:"8th International Conference on Civil Engineering for Sustainable Development (ICCESD 2026)", status:"Published", date:"5 Feb 2026", doi:""},
  {cat:"Conference Proceedings", title:"Integrated Geospatial Assessment of Multi-Dimensional Drought Hazard in Naogaon District Using PCA and Shannon Entropy-Based Weighting", venue:"8th International Conference on Advances in Civil Engineering (ICACE-2026)", status:"Accepted", doi:""},
  {cat:"Conference Proceedings", title:"Integrated Air Pollution Exposure Modeling in Chattogram, Bangladesh: A PCA-Weighted Geospatial Approach", venue:"8th International Conference on Advances in Civil Engineering (ICACE-2026)", status:"Accepted", doi:""},
  {cat:"Conference Proceedings", title:"Spatial Assessment of Urban Waterlogging Vulnerability in Dhaka Metropolitan Area Using PCA Weighting", venue:"8th International Conference on Advances in Civil Engineering (ICACE-2026)", status:"Accepted", doi:""},
  {cat:"Manuscripts Under Review", title:"Geospatial Analysis of Directional Urban Growth and Future Land Use Dynamics Using Remote Sensing, GIS, and CA–Markov Modeling in Rajshahi District, Bangladesh", venue:"[Journal name]", status:"Under review", doi:""}
];
const pubCats = ["All","Published Journal Articles","Accepted Journal Articles","Conference Proceedings","Manuscripts Under Review","Manuscripts in Preparation"];

const T = "[Add]";
const projects = [
 {type:"Flood & Hazard", title:"Geospatial Multi-Indicator Assessment of Flood Risk in a Wetland Ecosystem Using a PCA-Weighted Risk Framework",
  overview:"Multi-indicator flood risk mapping of a wetland ecosystem with data-driven PCA weighting.", obj:"Identify and weight flood hazard, exposure and vulnerability indicators; map risk zones.", area:"Chalan Beel, Bangladesh", data:T+" satellite, DEM, rainfall and land cover sources", method:"Indicator selection, normalization, PCA-derived weights, weighted overlay.", tools:"ArcGIS Pro, Google Earth Engine", out:"Flood risk zonation map and ranked indicator contributions.", status:"Accepted journal article; related conference paper published (ICCESD 2026)"},
 {type:"Flood & Hazard", title:"Integrated Drought Vulnerability Assessment in Naogaon District, Bangladesh",
  overview:"Multi-dimensional drought hazard and vulnerability assessment.", obj:"Combine climatic, vegetation and socio-environmental indicators into a composite drought index.", area:"Naogaon District, Bangladesh", data:T+" remote sensing and climate datasets", method:"PCA and Shannon entropy-based weighting, composite index.", tools:"Google Earth Engine (JavaScript), ArcGIS Pro", out:"Drought hazard zonation map.", status:"Conference paper accepted (ICACE-2026)"},
 {type:"Flood & Hazard", title:"Spatial Assessment of Urban Waterlogging Vulnerability in Dhaka Metropolitan Area Using PCA Weighting",
  overview:"Spatial assessment of urban waterlogging vulnerability.", obj:"Identify waterlogging-prone areas using PCA-weighted indicators.", area:"Dhaka Metropolitan Area, Bangladesh", data:T+" terrain, drainage, land cover and population data", method:"Indicator standardization, PCA weighting, vulnerability index mapping.", tools:"ArcGIS Pro, QGIS, SPSS", out:"Waterlogging vulnerability map.", status:"Conference paper accepted (ICACE-2026)"},
 {type:"Urban Growth", title:"Urban Growth and Future Land Use Dynamics: An Integrated Remote Sensing, Directional-Buffer and CA-Markov Approach",
  overview:"Analysis of directional urban growth and projection of future land use.", obj:"Quantify LULC change, directional expansion and simulate future land use.", area:"Rajshahi District, Bangladesh", data:T+" multi-temporal Landsat imagery", method:"LULC classification, directional buffer analysis, CA–Markov simulation.", tools:"Google Earth Engine, ArcGIS Pro, QGIS", out:"LULC change maps and future land use projection.", status:"Manuscript under review"}
];
const interests = ["Geographic Information Systems (GIS)","Remote Sensing","Disaster Risk Reduction","Flood Risk Assessment","Drought Vulnerability Assessment","Climate Change Adaptation","Urban Resilience","Urban Growth Modelling","Land Use and Land Cover Change","Environmental Planning","Biofuel and Renewable Energy","Sustainable Urban Development"];
const skills = {"GIS & Remote Sensing Software": ["ArcGIS Pro", "ArcGIS Online", "Google Earth Engine (GEE)", "QGIS", "ArcPhy", "ERDAS IMAGINE"], "Statistical & Analytical Tools": ["SPSS", "PCA (Principal Component Analysis)", "Shannon Entropy-based weighting", "Multi-Criteria Decision Analysis (MCDA)", "CRITIC Method", "AHP", "Fuzzy AHP"], "Programming": ["Python (Basic)", "R", "JavaScript (Google Earth Engine)"], "Visualization": ["Adobe Illustrator", "Scientific Cartography", "Data Visualization", "Map Design", "Cartographic visualization"], "Other Software": ["AutoCAD", "Microsoft Office", "KoBoToolbox"], "Core Competencies": ["Satellite image processing & analysis", "Geospatial database development", "Spatial analysis", "Land use / land cover classification", "Environmental assessment", "Geospatial modelling"], "Languages": ["Bengali (native)", "English"]};
/* Add certificates issued to YOU only. Example:
 {title:"Certificate title", org:"Issuer", date:"Month YYYY", img:"assets/certificates/file.jpg", pdf:"assets/certificates/file.pdf", link:"https://..."} */
const certs = [];
const awards = []; // e.g. {title:"Award", org:"Organization", date:"2026"}
const links = [
 {n:"ORCID",i:"fa-brands fa-orcid",u:"https://orcid.org/0009-0000-7950-2107"},
 {n:"LinkedIn",i:"fa-brands fa-linkedin",u:"https://www.linkedin.com/in/jubaed-islam-587213354?utm_source=share_via&utm_content=profile&utm_medium=member_ios"},
 {n:"Facebook",i:"fa-brands fa-facebook",u:"https://www.facebook.com/share/1Dy6wDCz6b/?mibextid=wwXIfr"},
 {n:"Google Scholar",i:"fa-solid fa-graduation-cap",u:""},
 {n:"ResearchGate",i:"fa-brands fa-researchgate",u:""},
 {n:"GitHub",i:"fa-brands fa-github",u:""},
 {n:"Email",i:"fa-solid fa-envelope",u:"mailto:islamjubaed01@gmail.com"}
];
/* ===== END EDIT AREA ===== */

const $=(s,r=document)=>r.querySelector(s)||document.createElement("div"), $$=(s,r=document)=>[...r.querySelectorAll(s)];
const esc=s=>String(s).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));

function filters(el,cats,fn){el.innerHTML=cats.map((c,i)=>`<button class="${i?"":"on"}" data-c="${esc(c)}">${esc(c)}</button>`).join("");
  el.onclick=e=>{const b=e.target.closest("button");if(!b)return;$$("button",el).forEach(x=>x.classList.toggle("on",x===b));fn(b.dataset.c)}}

function renderPubs(c="All"){const l=pubs.filter(p=>c==="All"||p.cat===c);
  $("#pubList").innerHTML=l.length?l.map(p=>`<article class="item"><span class="status ${p.status.split(" ")[0]}">${esc(p.status)}</span><h3>${esc(p.title)}</h3><p>${esc(p.authors||AUTH)}</p><p><em>${esc(p.venue)}</em>${p.date?" · "+esc(p.date):""}</p><p>${p.doi?`DOI: <a href="https://doi.org/${esc(p.doi)}" target="_blank" rel="noopener">${esc(p.doi)}</a>`:"DOI: [Add when available]"}</p></article>`).join(""):`<p class="note">No entries in this category yet.</p>`}
filters($("#pubFilters"),pubCats,renderPubs);renderPubs();

function renderProj(c="All"){$("#projList").innerHTML=projects.filter(p=>c==="All"||p.type===c).map(p=>{
  const f=[["Overview",p.overview],["Objectives",p.obj],["Study area",p.area],["Data sources",p.data],["Methodology",p.method],["GIS & RS tools",p.tools],["Outcomes",p.out],["Status",p.status]];
  return `<article class="card"><div class="map"><span><i class="fa-solid fa-map"></i> Map / figure placeholder</span></div><h3>${esc(p.title)}</h3>${f.map(([k,v])=>`<h4>${k}</h4><p>${esc(v)}</p>`).join("")}</article>`}).join("")}
filters($("#projFilters"),["All","Flood & Hazard","Urban Growth"],renderProj);renderProj();

$("#chips").innerHTML=interests.map(i=>`<li><i class="fa-solid fa-circle-check"></i>${i}</li>`).join("");
$("#skillGrid").innerHTML=Object.entries(skills).map(([k,v])=>`<div class="card"><h3>${k}</h3><ul class="chips">${v.map(s=>`<li>${s}</li>`).join("")}</ul></div>`).join("");
$("#certGrid").innerHTML=certs.length?certs.map((c,i)=>`<div class="card">${c.img?`<img class="thumb" src="${esc(c.img)}" alt="${esc(c.title)}" data-i="${i}" loading="lazy">`:""}<h3>${esc(c.title)}</h3><p>${esc(c.org)} · ${esc(c.date)}</p><p>${c.pdf?`<a href="${esc(c.pdf)}" download>PDF</a> `:""}${c.link?`<a href="${esc(c.link)}" target="_blank" rel="noopener">Credential</a>`:""}</p></div>`).join(""):`<div class="card"><div class="map">Your certificates will appear here</div><p>Add entries to the <code>certs</code> list in script.js.</p></div>`;
$("#awardList").innerHTML=awards.length?awards.map(a=>`<div class="item"><h3>${esc(a.title)}</h3><p>${esc(a.org)} · ${esc(a.date)}</p></div>`).join(""):`<div class="item"><p>Add your awards and achievements to the <code>awards</code> list in script.js.</p></div>`;
$("#social").innerHTML=links.map(l=>l.u?`<li><a href="${esc(l.u)}" target="_blank" rel="noopener"><i class="${l.i}"></i>${l.n}</a></li>`:`<li><a class="ph" href="#contact" title="Add URL in script.js"><i class="${l.i}"></i>${l.n} (add link)</a></li>`).join("");
$("#yr").textContent=new Date().getFullYear();

const lb=$("#lb");$("#certGrid").onclick=e=>{const i=e.target.closest("img.thumb");if(i){$("#lbImg").src=i.src;$("#lbImg").alt=i.alt;lb.hidden=false}};
lb.onclick=e=>{if(e.target!==$("#lbImg"))lb.hidden=true};addEventListener("keydown",e=>{if(e.key==="Escape")lb.hidden=true});

const root=document.documentElement,tb=$("#theme");
function setTheme(t){root.dataset.theme=t;tb.textContent=t==="dark"?"☀":"☾";try{localStorage.setItem("theme",t)}catch(e){}}
setTheme((()=>{try{return localStorage.getItem("theme")}catch(e){}})()||(matchMedia("(prefers-color-scheme:dark)").matches?"dark":"light"));
tb.onclick=()=>setTheme(root.dataset.theme==="dark"?"light":"dark");

const menu=$("#menu"),bg=$("#burger");
bg.onclick=()=>bg.setAttribute("aria-expanded",menu.classList.toggle("open"));
menu.onclick=e=>{if(e.target.tagName==="A"){menu.classList.remove("open");bg.setAttribute("aria-expanded","false")}};

$("#pubCount").dataset.count=pubs.length;
const io=new IntersectionObserver(en=>en.forEach(x=>{if(x.isIntersecting){x.target.classList.add("in");io.unobserve(x.target)}}),{threshold:.1});
$$(".reveal").forEach(e=>io.observe(e));
const co=new IntersectionObserver(en=>en.forEach(x=>{if(!x.isIntersecting)return;const el=x.target,n=+el.dataset.count;let k=0;const t=setInterval(()=>{k++;el.textContent=k;if(k>=n)clearInterval(t)},n>0?900/n:0);co.unobserve(el)}),{threshold:.5});
$$("[data-count]").forEach(e=>co.observe(e));
/* nav active state is set per page in the HTML */
