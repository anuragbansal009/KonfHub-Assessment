(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{6118:function(e,s,t){Promise.resolve().then(t.bind(t,1528))},1528:function(e,s,t){"use strict";t.r(s),t.d(s,{default:function(){return y}});var i=t(7437),a=t(2265),n=t(8472);let c="https://dev-api.konfhub.com",r=async()=>{try{return(await n.Z.get("".concat(c,"/event/public/konfhub-frontend-evaluation-task"))).data}catch(e){throw console.error("Error fetching event data:",e),e}},l=async()=>{try{return(await n.Z.get("".concat(c,"/event/public/konfhub-frontend-evaluation-task/speakers"))).data}catch(e){throw console.error("Error fetching speaker data:",e),e}},o=async()=>{try{return(await n.Z.get("".concat(c,"/event/public/konfhub-frontend-evaluation-task/workshops"))).data}catch(e){throw console.error("Error fetching speaker data:",e),e}};t(7577);var d=e=>{let{description:s}=e;return(0,i.jsxs)("div",{children:[(0,i.jsx)("div",{className:"text-2xl font-bold py-5",children:"ABOUT EVENT"}),(0,i.jsx)("div",{className:"event-description",dangerouslySetInnerHTML:{__html:s}})]})};t(4080),t(2066);var h=function(e){let{ticketPlanDetails:s}=e;return(0,i.jsx)("div",{children:null==s?void 0:s.map(e=>(0,i.jsxs)("div",{className:"ticket_card",children:[(0,i.jsx)("p",{className:"ticket_plan_type",children:e.ticket_plan_type}),(0,i.jsx)("p",{className:"ticket_description",children:e.ticket_description}),(0,i.jsxs)("a",{className:"ticket_venue flex flex-row",href:"https://www.google.com/maps/search/?api=1&query="+e.ticket_venue.split(" ").join("+"),children:[(0,i.jsx)("span",{class:"mt-1 material-symbols-outlined",children:"location_on"})," ",e.ticket_venue]}),(0,i.jsx)("p",{className:"ticket_additional",children:e.ticket_additional_heading}),(0,i.jsx)("strong",{className:"ticket_timestamp",children:e.ticket_timestamp}),(0,i.jsxs)("div",{className:"ticket_plan",children:[(0,i.jsx)("span",{className:"ticket_type",children:e.ticket_type}),(0,i.jsx)("button",{className:"ticket_register_btn",children:e.button_type})]})]},e.id))})},m=()=>(0,i.jsxs)("div",{className:"tickets-section",children:[(0,i.jsx)("div",{className:"text-2xl font-bold py-5",children:"TICKETS"}),(0,i.jsx)("div",{className:"ticket_container",children:(0,i.jsx)(h,{ticketPlanDetails:[{id:"1",ticket_plan_type:"Free Ticket",ticket_description:"This is a ticket description. This is a free ticket. This ticket is uncategorised.",ticket_venue:"KonfHub Technologies, Nagavarapalya, C V Raman Nagar, Bengaluru, Karnataka, India",ticket_additional_heading:"This is additional venue details.",ticket_timestamp:"Available Till: 31st Aug 2034, 06:00 PM IST",ticket_type:"FREE",button_type:"Register"},{id:"2",ticket_plan_type:"Paid Ticket",ticket_description:"This is a ticket description. This is a paid ticket. This ticket is uncategorised.",ticket_venue:"KonfHub Technologies, Nagavarapalya, C V Raman Nagar, Bengaluru, Karnataka, India",ticket_additional_heading:"This is additional venue details.",ticket_timestamp:"Available Till: 31st Aug 2034, 06:00 PM IST",ticket_type:"₹1,000",button_type:"Register"},{id:"3",ticket_plan_type:"Donation Ticket",ticket_description:"This is a ticket description. This is a free ticket. This ticket is uncategorised.",ticket_venue:"KonfHub Technologies, Nagavarapalya, C V Raman Nagar, Bengaluru, Karnataka, India",ticket_additional_heading:"This is additional venue details.",ticket_timestamp:"Available Till: 31st Aug 2034, 06:00 PM IST",ticket_type:"Min ₹10 - Max ₹1,000",button_type:"Donate"},{id:"4",ticket_plan_type:"Ticket With Coupon",ticket_description:"This is a ticket description. This is a paid ticket. This ticket is uncategorised. This ticket also has a coupon. Buy minimum - 1 and maximum - 1000000 and avail 10% off.",ticket_venue:"KonfHub Technologies, Nagavarapalya, C V Raman Nagar, Bengaluru, Karnataka, India",ticket_additional_heading:"This is additional venue details.",ticket_timestamp:"Available Till: 31st Aug 2034, 06:00 PM IST",ticket_type:"₹1,000",button_type:"Register"}]})})]});t(7127);var x=function(e){let{speakerDetails:s}=e;return(0,i.jsx)("div",{className:"flex align-center flex-wrap gap-4",children:null==s?void 0:s.map(e=>(0,i.jsxs)("div",{className:"rounded-md border border-[#cacaca] p-[12px] flex flex-row w-[33%]",children:[(0,i.jsx)("img",{className:"cursor-pointer rounded-sm max-h-32 mr-5",src:e.image_url,alt:e.name}),(0,i.jsxs)("div",{className:"flex flex-col justify-center",children:[(0,i.jsx)("span",{className:"cursor-pointer font-bold",children:e.name}),(0,i.jsx)("div",{className:"text-base py-1 font-light",children:e.designation}),(0,i.jsx)("div",{className:"text-sm py-1 font-medium",children:e.organisation}),(0,i.jsxs)("div",{className:"flex align-center gap-2",children:[(0,i.jsx)("a",{href:e.facebook_url,children:(0,i.jsx)("img",{width:20,height:20,src:"https://dev.konfhub.com/img/facebook-share.svg",alt:"facebook-".concat(e.name)},"facebook-".concat(e.name))}),(0,i.jsx)("a",{href:e.twitter_url,children:(0,i.jsx)("img",{width:20,height:20,src:"https://dev.konfhub.com/img/twitter-pro-black.svg",alt:"twitter-".concat(e.name)},"twitter-".concat(e.name))}),(0,i.jsx)("a",{href:e.linkedin_url,children:(0,i.jsx)("img",{width:20,height:20,src:"https://dev.konfhub.com/img/linkedin-share.svg",alt:"linkedin-".concat(e.name)},"linkedin-".concat(e.name))}),(0,i.jsx)("a",{href:e.website_url,children:(0,i.jsx)("img",{width:20,height:20,src:"https://dev.konfhub.com/img/website-black.svg",alt:"website-".concat(e.name)},"website-".concat(e.name))})]})]})]},e.speaker_order))})};t(5646);var u=e=>{let{speakers:s}=e,[t,n]=(0,a.useState)(null);return((0,a.useEffect)(()=>{(async()=>{try{let e=await l();n(e)}catch(e){console.error("Error fetching speaker data:",e)}})()},[]),t)?(0,i.jsxs)("div",{className:"speakers-section",children:[(0,i.jsx)("div",{className:"text-2xl font-bold py-5",children:"THIS IS SPEAKERS SECTION"}),(0,i.jsx)("div",{children:"This is the description for speakers section."}),(0,i.jsx)(x,{speakerDetails:t})]}):(0,i.jsx)("div",{children:"Loading..."})};t(1815),t(5648);var p=t(9212),f=t.n(p),v=function(e){let{workshopDetails:s}=e;return(0,i.jsx)("div",{className:"flex flex-row",children:null==s?void 0:s.map(e=>(0,i.jsx)("div",{className:"w-[33%] rounded-md border border-[#cacaca] p-[12px] justify-between mx-2",children:(0,i.jsxs)("div",{className:"flex flex-col px-1 justify-between",children:[(0,i.jsxs)("div",{className:"flex-auto flex flex-col justify-start gap-3",children:[(0,i.jsx)("img",{className:"workshop_topic_img_url",src:e.workshop_banner_url,alt:e.workshop_title}),(0,i.jsx)("div",{className:"font-semibold text-xl",dangerouslySetInnerHTML:{__html:e.workshop_title}})]}),(0,i.jsxs)("div",{className:"flex-auto",children:[(0,i.jsxs)("div",{className:"flex align-center gap-2 py-5",children:[(0,i.jsx)("span",{class:"material-symbols-outlined",style:{fontVariationSettings:"'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 18"},children:"calendar_today"}),f().utc(e.start_timestamp).local().format("MMM Do, YYYY h:mm A")+" IST"]}),(0,i.jsxs)("div",{className:"flex w-full justify-between align-center self-end",children:[(0,i.jsx)("abbr",{title:e.workshop_speakers[0].name,children:(0,i.jsx)("img",{className:"w-[32px] h-[32px]",style:{borderRadius:"50%"},src:e.workshop_speakers[0].image_url,alt:e.workshop_speakers[0].name})}),(0,i.jsx)("button",{className:"view_details_btn",children:"View Details"})]})]})]})},e.workshop_title))})},j=e=>{let{workshops:s}=e,[t,n]=(0,a.useState)(null);return((0,a.useEffect)(()=>{(async()=>{try{let e=await o();n(e)}catch(e){console.error("Error fetching speaker data:",e)}})()},[]),t)?(0,i.jsxs)("div",{className:"workshops-section",children:[(0,i.jsx)("div",{className:"text-2xl font-bold py-5",children:s.workshop_section_title}),(0,i.jsx)("div",{dangerouslySetInnerHTML:{__html:s.workshop_section_description}}),(0,i.jsx)(v,{workshopDetails:t})]}):(0,i.jsx)("div",{children:"Loading..."})};t(8346);var k=e=>{let{sponsors:s}=e;return(0,i.jsxs)("div",{className:"sponsors-section",children:[(0,i.jsx)("div",{className:"text-2xl font-bold py-5",children:"THIS IS EVENT SPONSORS"}),(0,i.jsxs)("div",{children:[(0,i.jsx)("div",{dangerouslySetInnerHTML:{__html:s.sponsor_section_description}}),(0,i.jsx)("a",{href:"https://konfhub.com",children:(0,i.jsx)("img",{className:"sponsors_logo",src:"https://dev.konfhub.com/_next/image?url=https%3A%2F%2Fdev-media.konfhub.com%2Fsponsors%2F2024%2FJune%2F09%2F1717977584480-2a58c92e-ac5f-4ebd-9570-d6bcfc792dc2.png&w=1920&q=75",alt:"KonfHub"})})]}),(0,i.jsxs)("div",{className:"sponsor-section-2",children:[(0,i.jsx)("div",{className:"text-2xl font-bold py-5",children:"SPONSOR CATEGORY"}),(0,i.jsx)("hr",{className:"section-divider"}),(0,i.jsx)("a",{href:"https://darkknight.in",children:(0,i.jsx)("img",{className:"sponsors_logo",src:"https://dev.konfhub.com/_next/image?url=https%3A%2F%2Fdev-media.konfhub.com%2Fsponsors%2F2024%2FJune%2F10%2F1717977635909-75bb1d01-51a2-4af1-82cd-72d587192692.jpg&w=1920&q=75",alt:"Dark-Knight"})})]})]})};t(9688);var g=e=>{let{eventData:s}=e,[t,n]=(0,a.useState)("description");return(0,i.jsxs)("div",{className:"tabs",children:[(0,i.jsxs)("nav",{className:"tab-navigation",children:[(0,i.jsx)("button",{className:"description"===t?"active":"",onClick:()=>n("description"),children:"About"}),(0,i.jsx)("button",{className:"tickets"===t?"active":"",onClick:()=>n("tickets"),children:"Tickets"}),(0,i.jsx)("button",{className:"speakers"===t?"active":"",onClick:()=>n("speakers"),children:"This is speakers section"}),(0,i.jsx)("button",{className:"workshops"===t?"active":"",onClick:()=>n("workshops"),children:"This is workshop section"}),(0,i.jsx)("button",{className:"sponsors"===t?"active":"",onClick:()=>n("sponsors"),children:"This is event sponsors"})]}),(0,i.jsx)("div",{className:"tab-content",children:(()=>{switch(t){case"description":return(0,i.jsx)(d,{description:s.description});case"tickets":return(0,i.jsx)(m,{});case"speakers":return(0,i.jsx)(u,{speakers:s});case"workshops":return(0,i.jsx)(j,{workshops:s});case"sponsors":return(0,i.jsx)(k,{sponsors:s});default:return null}})()})]})};t(3128),t(5813);var _=function(e){let{eventData:s}=e;return(0,i.jsxs)("div",{className:"header-align",children:[(0,i.jsx)("img",{src:s.navbar_icon,alt:"KonfHub Logo",height:50,width:100}),(0,i.jsx)("span",{class:"material-symbols-outlined",style:{fontVariationSettings:"'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24"},children:"person"})]})},b=t(3712);t(4476);var N=e=>{let{eventData:s}=e,[t,n]=(0,a.useState)("00"),[c,r]=(0,a.useState)("00"),[l,o]=(0,a.useState)("00"),[d,h]=(0,a.useState)("00"),m="".concat(s.start_date," ").concat(s.start_time),x=(0,a.useRef)(),[u,p]=(0,a.useState)(!1),v=()=>{b.Zi(()=>{let e=f().utc(m).local().valueOf()-f()().valueOf();e<0?clearInterval(x.current):(n(Math.floor(e/864e5)),r(Math.floor(e%864e5/36e5)),o(Math.floor(e%36e5/6e4)),h(Math.floor(e%6e4/1e3)))},1e3)};return(0,a.useEffect)(()=>(v(),b.iK(()=>p(!0),1e3),()=>{clearInterval(x.current)}),[]),(0,i.jsx)(i.Fragment,{children:u&&"00"!==l&&"00"!==d&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("p",{className:"mb-1",children:"EVENT STARTS IN"}),(0,i.jsxs)("div",{className:"event-timer-container",children:[(0,i.jsxs)("span",{children:[t,"D"]})," : ",(0,i.jsxs)("span",{children:[c,"H"]})," : ",(0,i.jsxs)("span",{children:[l,"M"]})," : ",(0,i.jsxs)("span",{children:[d,"S"]})]})]})})},w=()=>{let[e,s]=(0,a.useState)(null);return((0,a.useEffect)(()=>{(async()=>{try{let e=await r();s(e)}catch(e){console.error("Error fetching event data:",e)}})()},[]),e)?(0,i.jsxs)("div",{className:"event-page",children:[(0,i.jsx)("header",{className:"header",children:(0,i.jsx)(_,{eventData:e})}),(0,i.jsxs)("div",{className:"main-content",children:[(0,i.jsxs)("div",{className:"left-content",children:[(0,i.jsx)("div",{className:"event-image",children:(0,i.jsx)("img",{src:e.event_poster_url,alt:"Event"})}),(0,i.jsx)(g,{eventData:e})]}),(0,i.jsxs)("div",{className:"right-content",children:[(0,i.jsxs)("div",{className:"event-details",children:[(0,i.jsx)("div",{className:"text-2xl font-extrabold ",children:"KonfHub Frontend Evaluation Task"}),(0,i.jsxs)("div",{className:"grid grid-cols-2 w-full py-[12px]",children:[(0,i.jsx)("div",{className:"",children:(0,i.jsxs)("div",{className:"flex align-center flex-row",children:[(0,i.jsx)("div",{className:"mx-1 self-center",children:(0,i.jsx)("span",{class:"material-symbols-outlined",children:"videocam"})}),(0,i.jsx)("div",{className:"mx-1",children:"Online"})]})}),(0,i.jsx)("div",{className:"",children:(0,i.jsxs)("div",{className:"flex align-center flex-row",children:[(0,i.jsx)("div",{className:"mx-1 self-center",children:(0,i.jsx)("span",{class:"material-symbols-outlined",children:"confirmation_number"})}),(0,i.jsx)("div",{className:"mx-1",children:"Paid"})]})})]}),(0,i.jsxs)("p",{children:[(0,i.jsx)("strong",{children:"Event Live Link: "}),(0,i.jsx)("a",{href:"/",className:"text-blue-600 underline",children:"Open streaming website"})]}),(0,i.jsxs)("p",{style:{textAlign:"left"},children:[(0,i.jsx)("strong",{children:"Date: "}),f().utc(e.start_date+" "+e.start_time).local().format("MMM Do, YYYY h:mm A")," - ",f().utc(e.end_date+" "+e.end_time).local().format("MMM Do, YYYY h:mm A")," IST"]}),(0,i.jsx)(N,{eventData:e})]}),(0,i.jsxs)("div",{className:"event_btn",children:[(0,i.jsx)("button",{children:"Buy Now"}),(0,i.jsxs)("a",{href:"#!",className:"official-website",children:["Official Website",(0,i.jsx)("span",{class:"material-symbols-outlined",children:"open_in_new"})]})]}),(0,i.jsxs)("div",{className:"hosted-by",children:[(0,i.jsx)("h3",{children:"HOSTED BY"}),(0,i.jsxs)("div",{className:"host",children:[(0,i.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"flex-start"},children:[(0,i.jsx)("img",{src:e.organiser_image_url,alt:"Host"}),(0,i.jsx)("p",{children:(0,i.jsx)("strong",{children:e.organiser_name})})]}),(0,i.jsx)("div",{className:"event-description text-sm",dangerouslySetInnerHTML:{__html:e.organiser_info}}),(0,i.jsxs)("div",{children:[(0,i.jsx)("span",{className:"text-xl",children:"Contact Us On"}),(0,i.jsxs)("div",{className:"flex flex-row",children:[(0,i.jsx)("a",{href:e.organizer_facebook_url,children:(0,i.jsx)("img",{src:"https://dev.konfhub.com/img/facebook-share.svg",alt:"facebook",width:"29",height:"29"})}),(0,i.jsx)("a",{href:e.organizer_twitter_url,children:(0,i.jsx)("img",{src:"https://dev.konfhub.com/img/twitter-pro-black.svg",alt:"twitter",width:"29",height:"29"})}),(0,i.jsx)("a",{href:e.organizer_linkedin_url,children:(0,i.jsx)("img",{src:"https://dev.konfhub.com/img/linkedin-share.svg",alt:"linkedin",width:"29",height:"29"})}),(0,i.jsx)("a",{href:e.organiser_website,children:(0,i.jsx)("img",{src:"https://dev.konfhub.com/img/website-black.svg",alt:"website-black",width:"29",height:"29"})}),(0,i.jsx)("a",{href:"mailto:"+e.organiser_email,children:(0,i.jsx)("img",{src:"https://dev.konfhub.com/img/mail-share.svg",alt:"mail-share",width:"29",height:"29"})}),(0,i.jsx)("a",{href:"tel:+919988776655",children:(0,i.jsx)("img",{src:"https://dev.konfhub.com/img/call-share.svg   ",alt:"",className:"phone-number",width:"29",height:"29"})})]})]})]})]})]})]})]}):(0,i.jsx)("div",{children:"Loading..."})};function y(){return(0,i.jsx)("main",{children:(0,i.jsx)(w,{})})}},7577:function(){},7127:function(){},2066:function(){},5648:function(){},4476:function(){},5813:function(){},5646:function(){},8346:function(){},9688:function(){},4080:function(){},1815:function(){},3128:function(){}},function(e){e.O(0,[559,990,217,971,23,744],function(){return e(e.s=6118)}),_N_E=e.O()}]);