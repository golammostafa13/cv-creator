(this["webpackJsonpcv-project"]=this["webpackJsonpcv-project"]||[]).push([[0],{1:function(e,t){e.exports={containerStyle:{width:"100%",minHeight:"100vh",background:"#ececec",fontFamily:"monospace",textAlign:"justify",padding:"10px"},headerStyle:{display:"flex",justifyContent:"space-between",borderBottom:"2px solid #333",alignItems:"center"},sectionStyle:{margin:"12px 0px",lineHeight:"20px"},pStyle:{fontSize:"16px",color:"#222222"},h1Style:{borderBottom:"2px solid #333",fontSize:"20px"},signatureSytle:{float:"right",color:"#464646",marginTop:"5px"},lastStyle:{color:"#464646"},imgStyle:{marginTop:"0px",width:"122px",height:"140px",marginBottom:"5px"},cvInnerInfo:{margin:"8px 0px"},skillStyle:{fontSize:"16px",color:"#222222",marginLeft:"20px"}}},12:function(e,t,s){},14:function(e,t,s){},15:function(e,t,s){"use strict";s.r(t);var a=s(2),n=s.n(a),l=s(7),c=s.n(l),i=(s(12),s(0)),r=function(){return Object(i.jsx)("div",{className:"footer",children:Object(i.jsxs)("p",{children:["Copyright \xa9 Golam Mostafa-2021 ",Object(i.jsx)("a",{href:"https://github.com/golammostafa13",children:"Github"})]})})},o=function(){return Object(i.jsx)("div",{className:"header",children:Object(i.jsx)("h1",{children:"CV Creator"})})},j=s(5),h=s(3),d=s(4),p=s(1),m=function(e){var t=e.educational,s=t.universityName,a=t.subject,n=t.degree;return Object(i.jsxs)("div",{className:"cv-inner-info",children:[Object(i.jsxs)("p",{style:p.pStyle,children:["Institute: ",Object(i.jsxs)("span",{className:"last",style:p.lastStyle,children:[" ",s]})]}),Object(i.jsxs)("p",{style:p.pStyle,children:["Department: ",Object(i.jsxs)("span",{className:"last",style:p.lastStyle,children:[" ",a]})]}),Object(i.jsxs)("p",{style:p.pStyle,children:["Degree: ",Object(i.jsxs)("span",{className:"last",style:p.lastStyle,children:[" ",n]})]}),Object(i.jsxs)("p",{style:p.pStyle,children:["Session: ",Object(i.jsxs)("span",{className:"last",style:p.lastStyle,children:[" ",e.educational.from,"-",e.educational.to]})]}),Object(i.jsxs)("p",{style:p.pStyle,children:["City: ",Object(i.jsxs)("span",{className:"last",style:p.lastStyle,children:[" ",e.educational.city]})]})]})},u=function(e){var t=e.experience,s=t.position,a=t.company,n=t.city,l=t.from,c=t.to;return Object(i.jsxs)("div",{className:"cv-inner-info",children:[Object(i.jsxs)("p",{style:p.pStyle,children:["Company: ",Object(i.jsxs)("span",{className:"last",style:p.lastStyle,children:[" ",a]})]}),Object(i.jsxs)("p",{style:p.pStyle,children:["Position: ",Object(i.jsxs)("span",{className:"last",style:p.lastStyle,children:[" ",s]})]}),Object(i.jsxs)("p",{style:p.pStyle,children:["City: ",Object(i.jsxs)("span",{className:"last",style:p.lastStyle,children:[" ",n]})]}),Object(i.jsxs)("p",{style:p.pStyle,children:["From-To: ",Object(i.jsxs)("span",{className:"last",style:p.lastStyle,children:[" ",l,"-",c]})]})]})},b=function(e){var t=e.skills.skill;return Object(i.jsx)("div",{className:"cv-inner-info",style:p.cvInnerInfo,children:Object(i.jsx)("li",{style:p.skillStyle,children:t})})},x=s.p+"static/media/logo.6ce24c58.svg",y=function(e){var t=e.experienceTasks,s=e.experience,a=e.educationalTasks,n=e.educational,l=e.skillsTasks,c=e.skills,r=e.personal,o=e.personalProfile,j=r.firstName,h=r.lastName,d=r.photo,y=r.title,O=r.description,f=r.email,S=r.phoneNumber,g=r.address,N=o.father,v=o.dateOfBirth,C=o.gender,k=o.maritalStatus,w=o.languages,T=o.nationality;return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsxs)("div",{id:"main",className:"cv-container",style:p.containerStyle,children:[Object(i.jsxs)("header",{className:"cv-header",style:p.headerStyle,children:[Object(i.jsxs)("div",{children:[Object(i.jsxs)("h1",{style:p.h1Style,children:[j," ",h]}),Object(i.jsx)("p",{style:p.pStyle,children:y}),Object(i.jsxs)("p",{style:p.pStyle,children:["Add: ",Object(i.jsxs)("span",{className:"last",style:p.lastStyle,children:[" ",g]})]}),Object(i.jsxs)("p",{style:p.pStyle,children:["Mobile No: ",Object(i.jsxs)("span",{className:"last",style:p.lastStyle,children:[" ",S]})]}),Object(i.jsxs)("p",{style:p.pStyle,children:["Email: ",Object(i.jsxs)("span",{className:"last",style:p.lastStyle,children:[" ",f]})]})]}),Object(i.jsx)("div",{className:"img",style:p.imgStyle,children:Object(i.jsx)("img",{style:{width:"100%",heigth:"100%"},src:d||x,alt:"avatar"})})]}),Object(i.jsxs)("section",{className:"cv-description",style:p.sectionStyle,children:[Object(i.jsx)("h1",{style:p.h1Style,children:"DESCRIPTION"}),Object(i.jsx)("p",{style:p.pStyle,children:O})]}),Object(i.jsxs)("section",{className:"cv-academic",style:p.sectionStyle,children:[Object(i.jsx)("h1",{style:p.h1Style,children:"ACADEMIC QUALIFICATION"}),Object(i.jsx)(m,{educational:n}),a.map((function(e){return Object(i.jsx)(m,{educational:e},Math.random())}))]}),Object(i.jsxs)("section",{className:"cv-experience",style:p.sectionStyle,children:[Object(i.jsx)("h1",{style:p.h1Style,children:"EXPERIENCE"}),Object(i.jsx)(u,{experience:s}),t.map((function(e){return Object(i.jsx)(u,{experience:e},Math.random())}))]}),Object(i.jsxs)("section",{className:"cv-skill",style:p.sectionStyle,children:[Object(i.jsx)("h1",{style:p.h1Style,children:"PERSONAL SKILLS"}),Object(i.jsx)(b,{skills:c}),l.map((function(e){return Object(i.jsx)(b,{skills:e},Math.random())}))]}),Object(i.jsxs)("section",{className:"cv-personal",style:p.sectionStyle,children:[Object(i.jsx)("h1",{style:p.h1Style,children:"PERSONAL PROFILE"}),Object(i.jsxs)("div",{children:[Object(i.jsxs)("p",{style:p.pStyle,children:["Father's Name: ",Object(i.jsxs)("span",{className:"last",style:p.lastStyle,children:[" ",N]})]}),Object(i.jsxs)("p",{style:p.pStyle,children:["Date Of Birth: ",Object(i.jsxs)("span",{className:"last",style:p.lastStyle,children:[" ",v]})]}),Object(i.jsxs)("p",{style:p.pStyle,children:["Gender: ",Object(i.jsxs)("span",{className:"last",style:p.lastStyle,children:[" ",C]})]}),Object(i.jsxs)("p",{style:p.pStyle,children:["Marital Status: ",Object(i.jsxs)("span",{className:"last",style:p.lastStyle,children:[" ",k]})]}),Object(i.jsxs)("p",{style:p.pStyle,children:["Languages Known: ",Object(i.jsxs)("span",{className:"last",style:p.lastStyle,children:[" ",w]})]}),Object(i.jsxs)("p",{style:p.pStyle,children:["Nationality: ",Object(i.jsxs)("span",{className:"last",style:p.lastStyle,children:[" ",T]})]})]})]}),Object(i.jsxs)("section",{style:p.sectionStyle,children:[Object(i.jsx)("h1",{style:p.h1Style,children:"DECLARATION"}),Object(i.jsx)("p",{style:p.pStyle,children:"I solemnly declare that all the above information is correct to the best of my knowledge and belief."}),Object(i.jsx)("br",{}),Object(i.jsx)("p",{style:p.pStyle,children:"Date:"}),Object(i.jsxs)("p",{style:p.pStyle,children:["Place: ",Object(i.jsx)("strong",{className:"signature",style:p.signatureSytle,children:"(Signature)"})]})]})]}),Object(i.jsx)("button",{onClick:function(e){var t=document.querySelector("#main"),s=window.open("","","height=600,width=900");s.document.write("<html><head>"),s.document.write('<link rel="stylesheet" href="../../src/App.css" />'),s.document.write("<title>Cv Pdf</title></head><body >"),s.document.write(t.innerHTML),s.document.write("</body></html>"),s.document.close(),s.print()},children:"Download(PDF)"})]})},O=function(e){var t=e.handleChange,s=e.handleSubmit,a=e.educational,n=e.isBtnShow,l=a.universityName,c=a.degree,r=a.city,o=a.subject,j=a.from,h=a.to;return Object(i.jsx)("div",{className:"form-info",children:Object(i.jsxs)("form",{className:"educationalTasks",onSubmit:s,children:[Object(i.jsx)("input",{type:"text",className:"educational",placeholder:"University Name",value:l,onChange:t,name:"universityName"}),Object(i.jsx)("input",{type:"text",className:"educational",placeholder:"Degree",value:c,onChange:t,name:"degree"}),Object(i.jsx)("input",{type:"text",className:"educational",placeholder:"City",value:r,onChange:t,name:"city"}),Object(i.jsx)("input",{type:"text",className:"educational",placeholder:"Subject",value:o,onChange:t,name:"subject"}),Object(i.jsx)("input",{type:"text",className:"educational",placeholder:"From",value:j,onChange:t,name:"from"}),Object(i.jsx)("input",{type:"text",className:"educational",placeholder:"To",value:h,onChange:t,name:"to"}),n&&Object(i.jsx)("button",{type:"submit",children:"Add More"})]})})},f=function(e){var t=e.educationalTasks,s=e.handleSubmit,a=e.handleChange,n=e.education;return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("h2",{children:"Educational Information"}),t.map((function(e){return Object(i.jsx)(O,{educational:e,handleSubmit:s,handleChange:a,isBtnShow:!1},Math.random())})),Object(i.jsx)(O,{educational:n,handleSubmit:s,handleChange:a,isBtnShow:!0})]})},S=function(e){var t=e.handleChange,s=e.experience,a=e.handleSubmit,n=e.isBtnShow,l=s.position,c=s.company,r=s.city,o=s.from,j=s.to;return Object(i.jsx)("div",{className:"form-info",children:Object(i.jsxs)("form",{className:"experienceTasks",onSubmit:a,children:[Object(i.jsx)("input",{type:"text",className:"experience",placeholder:"Position",value:l,onChange:t,name:"position"}),Object(i.jsx)("input",{type:"text",className:"experience",placeholder:"Company",value:c,onChange:t,name:"company"}),Object(i.jsx)("input",{type:"text",className:"experience",placeholder:"City",value:r,onChange:t,name:"city"}),Object(i.jsx)("input",{type:"text",className:"experience",placeholder:"From",value:o,onChange:t,name:"from"}),Object(i.jsx)("input",{type:"text",className:"experience",placeholder:"To",value:j,onChange:t,name:"to"}),n&&Object(i.jsx)("button",{type:"submit",children:"Add More"})]})})},g=function(e){var t=e.experienceTasks,s=e.handleSubmit,a=e.handleChange,n=e.experience;return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("h2",{children:"Experience"}),t.map((function(e){return Object(i.jsx)(S,{experience:e,handleSubmit:s,handleChange:a,isBtnShow:!1},Math.random())})),Object(i.jsx)(S,{experience:n,handleSubmit:s,handleChange:a,isBtnShow:!0})]})},N=function(e){var t=e.handleChange,s=e.personal,a=s.firstName,n=s.lastName,l=s.email,c=s.title,r=s.address,o=s.phone,j=s.message;return Object(i.jsxs)("div",{className:"form-info",children:[Object(i.jsx)("h2",{children:"Personal Information"}),Object(i.jsxs)("form",{children:[Object(i.jsx)("input",{className:"personal",type:"text",placeholder:"First name",value:a,onChange:t,name:"firstName"}),Object(i.jsx)("input",{className:"personal",type:"text",placeholder:"Last name",value:n,onChange:t,name:"lastName"}),Object(i.jsx)("input",{className:"personal",type:"text",placeholder:"Title",value:c,onChange:t,name:"title"}),Object(i.jsx)("label",{id:"file-label",htmlFor:"file",children:"Select Image"}),Object(i.jsx)("input",{id:"file",style:{display:"none",visibility:"hidden"},className:"personal",type:"file",name:"photo",onChange:t,value:""}),Object(i.jsx)("input",{className:"personal",type:"text",placeholder:"Addess",value:r,onChange:t,name:"address"}),Object(i.jsx)("input",{className:"personal",type:"number",placeholder:"Phone number",value:o,onChange:t,name:"phoneNumber"}),Object(i.jsx)("input",{className:"personal",type:"email",placeholder:"Email",value:l,onChange:t,name:"email"}),Object(i.jsx)("input",{className:"personal",type:"message",placeholder:"Description",value:j,onChange:t,name:"description"})]})]})},v=function(e){var t=e.handleChange,s=e.personalProfile,a=s.father,n=s.dateOfBirth,l=s.gender,c=s.maritalStatus,r=s.languages,o=s.nationality;return Object(i.jsxs)("div",{className:"form-info",children:[Object(i.jsx)("h2",{children:"Personal Profile Information"}),Object(i.jsxs)("form",{children:[Object(i.jsx)("input",{type:"text",className:"personalProfile",placeholder:"Father's Name",value:a,onChange:t,name:"father"}),Object(i.jsx)("input",{type:"text",className:"personalProfile",placeholder:"Date Of Birth",value:n,onChange:t,name:"dateOfBirth"}),Object(i.jsx)("input",{type:"text",className:"personalProfile",placeholder:"Gender",value:l,onChange:t,name:"gender"}),Object(i.jsx)("input",{type:"text",className:"personalProfile",placeholder:"Marital Status",value:c,onChange:t,name:"maritalStatus"}),Object(i.jsx)("input",{type:"text",className:"personalProfile",placeholder:"Languages Known",value:r,onChange:t,name:"languages"}),Object(i.jsx)("input",{type:"text",className:"personalProfile",placeholder:"Nationality",value:o,onChange:t,name:"nationality"})]})]})},C=function(e){var t=e.handleChange,s=e.handleSubmit,a=e.skills,n=e.isBtnShow,l=a.skill;return Object(i.jsx)("div",{className:"form-info",children:Object(i.jsxs)("form",{className:"skillsTasks",onSubmit:s,children:[Object(i.jsx)("input",{type:"text",className:"skills",placeholder:"skill-name",value:l,onChange:t,name:"skill"}),n&&Object(i.jsx)("button",{type:"submit",children:"Add More"})]})})},k=function(e){var t=e.skillsTasks,s=e.handleSubmit,a=e.handleChange,n=e.skills;return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("h2",{children:"Skills"}),t.map((function(e){return Object(i.jsx)(C,{skills:e,handleSubmit:s,handleChange:a,isBtnShow:!1},Math.random())})),Object(i.jsx)(C,{skills:n,handleSubmit:s,handleChange:a,isBtnShow:!0})]})},w=function(){var e=Object(a.useState)({firstName:"",lastName:"",title:"",photo:"",address:"",phoneNumber:"",email:"",description:""}),t=Object(d.a)(e,2),s=t[0],n=t[1],l=Object(a.useState)({skill:""}),c=Object(d.a)(l,2),r=c[0],o=c[1],p=Object(a.useState)({universityName:"",city:"",degree:"",subject:"",from:"",to:""}),m=Object(d.a)(p,2),u=m[0],b=m[1],x=Object(a.useState)({position:"",company:"",city:"",from:"",to:""}),O=Object(d.a)(x,2),S=O[0],C=O[1],w=Object(a.useState)({father:"",dateOfBirth:"",gender:"",maritalStatus:"",languages:"",nationality:""}),T=Object(d.a)(w,2),P=T[0],I=T[1],B=Object(a.useState)([]),A=Object(d.a)(B,2),F=A[0],M=A[1],D=Object(a.useState)([]),E=Object(d.a)(D,2),L=E[0],R=E[1],G=Object(a.useState)([]),z=Object(d.a)(G,2),H=z[0],K=z[1],U=function(e){e.preventDefault();var t=e.target.className;"skillsTasks"===t?(R((function(e){return e.concat(r)})),o({skill:""})):"educationalTasks"===t?(M((function(e){return e.concat(u)})),b({universityName:"",city:"",degree:"",subject:"",from:"",to:""})):"experienceTasks"===t&&(K((function(e){return e.concat(S)})),C({position:"",company:"",city:"",from:"",to:""}))},J=function(e){e.preventDefault();var t=e.target.className,s=e.target.name,a=e.target.value;if("personal"===t)if("photo"===s){var l=e.target.files[0],c=new FileReader;c.onload=function(){n((function(e){return Object(h.a)(Object(h.a)({},e),{},{photo:c.result})}))},c.readAsDataURL(l)}else n((function(e){return Object(h.a)(Object(h.a)({},e),{},Object(j.a)({},s,a))}));else"experience"===t?C((function(e){return Object(h.a)(Object(h.a)({},e),{},Object(j.a)({},s,a))})):"educational"===t?b((function(e){return Object(h.a)(Object(h.a)({},e),{},Object(j.a)({},s,a))})):"skills"===t?o((function(e){return Object(h.a)(Object(h.a)({},e),{},Object(j.a)({},s,a))})):"personalProfile"===t&&I((function(e){return Object(h.a)(Object(h.a)({},e),{},Object(j.a)({},s,a))}))};return Object(i.jsxs)("div",{className:"main",children:[Object(i.jsx)(N,{personal:s,handleChange:J}),Object(i.jsx)(g,{experienceTasks:H,handleChange:J,handleSubmit:U,experience:S}),Object(i.jsx)(f,{educationalTasks:F,handleChange:J,handleSubmit:U,education:u}),Object(i.jsx)(k,{handleChange:J,skillsTasks:L,handleSubmit:U,skills:r}),Object(i.jsx)(v,{personalProfile:P,handleChange:J}),Object(i.jsx)(y,{personal:s,experience:S,skills:r,educational:u,personalProfile:P,experienceTasks:H,skillsTasks:L,educationalTasks:F})]})};var T=function(){return Object(i.jsxs)("div",{className:"App",children:[Object(i.jsx)(o,{}),Object(i.jsx)(w,{}),Object(i.jsx)(r,{})]})};s(14);c.a.render(Object(i.jsx)(n.a.StrictMode,{children:Object(i.jsx)(T,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.f398cec6.chunk.js.map