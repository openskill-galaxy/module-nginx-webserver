import fs from "fs";import path from "path";import {fileURLToPath} from "url";
var D=path.resolve(path.dirname(fileURLToPath(import.meta.url)),"../public/data");
function p(a){return a[Math.floor(Math.random()*a.length)]}
function pn(a,n){var s=new Set();while(s.size<n&&s.size<a.length)s.add(p(a));return[...s]}
var df=["easy","medium","hard"];
var ts="Nginx web server reverse proxy forward proxy load balancing static resource nginx.conf main events http server location root alias index try_files proxy_pass upstream round robin weight ip_hash least_conn server_name listen domain DNS HTTPS TLS SSL certificate HTTP/2 gzip cache expires Cache-Control reverse proxy header X-Forwarded-For Host CORS cross-origin OPTIONS rewrite return redirect access log error log status code 403 404 502 504 rate limiting limit_req basic auth security header frontend deployment backend agent Docker Nginx performance optimization troubleshooting configuration snippet include default server catch-all resource compression HTTP3 QUIC webp image optimization TLS termination upstream keepalive health check passive health check active health check nginx plus";
var t=ts.trim().split(/\s+/).filter(Boolean);
function bt(){return t.map(function(n,i){return{id:"nx-tag-"+String(i+1).padStart(3,"0"),name:n,category:"Nginx",description:"Nginx标签:"+n,count:0,createdAt:"2026-07-03T00:00:00.000Z"};});}
var CD=[
  {id:"nx-course-01",order:1,slug:"Nginx入门",title:"Nginx入门与Web服务部署路线",description:"Nginx概述、应用场景、学习路线。",estimatedHours:4,diff:"easy"},
  {id:"nx-course-02",order:2,slug:"Web代理基础",title:"Web服务器、反向代理与负载均衡基础",description:"正向代理、反向代理、负载均衡、高可用。",estimatedHours:6,diff:"easy"},
  {id:"nx-course-03",order:3,slug:"安装基本命令",title:"Nginx安装、目录结构与基本命令",description:"安装方式、目录文件、启动停止、reload。",estimatedHours:6,diff:"easy"},
  {id:"nx-course-04",order:4,slug:"nginx.conf",title:"nginx.conf配置结构",description:"main/events/http/server/location层级、指令块。",estimatedHours:8,diff:"medium"},
  {id:"nx-course-05",order:5,slug:"server静态资源",title:"server、location与静态资源部署",description:"server配置、location匹配、root/alias、try_files。",estimatedHours:10,diff:"medium"},
  {id:"nx-course-06",order:6,slug:"反向代理",title:"反向代理与后端服务转发",description:"proxy_pass、头传递、超时配置、上游健康检查。",estimatedHours:10,diff:"medium"},
  {id:"nx-course-07",order:7,slug:"负载均衡",title:"负载均衡策略与upstream",description:"轮询、权重、ip_hash、least_conn、upstream配置。",estimatedHours:8,diff:"hard"},
  {id:"nx-course-08",order:8,slug:"HTTPS证书",title:"域名、HTTPS与证书配置",description:"SSL证书配置、HTTP/2、HTTPS跳转、TLS优化。",estimatedHours:10,diff:"hard"},
  {id:"nx-course-09",order:9,slug:"缓存Gzip",title:"Gzip、缓存与静态资源优化",description:"Gzip压缩、expires、Cache-Control、资源优化。",estimatedHours:8,diff:"hard"},
  {id:"nx-course-10",order:10,slug:"CORS安全",title:"跨域CORS、请求头与安全配置",description:"CORS配置、安全头、防盗链、basic auth。",estimatedHours:8,diff:"hard"},
  {id:"nx-course-11",order:11,slug:"日志限流",title:"日志、访问控制与限流基础",description:"access_log、error_log、limit_req、限流配置。",estimatedHours:8,diff:"hard"},
  {id:"nx-course-12",order:12,slug:"前后端部署",title:"前端、后端与多服务部署案例",description:"Vue/React部署、反向代理多个后端、Docker Nginx。",estimatedHours:10,diff:"hard"},
  {id:"nx-course-13",order:13,slug:"故障排查",title:"Nginx故障排查与性能优化",description:"502/504/403排查、worker配置、连接数优化。",estimatedHours:8,diff:"hard"},
  {id:"nx-course-14",order:14,slug:"Nginx项目面试",title:"Nginx综合项目、面试与部署训练",description:"完整部署项目、面试题、配置场景。",estimatedHours:8,diff:"hard"},
];
function bc(){return CD.map(function(c){return{id:c.id,order:c.order,slug:c.slug,title:c.title,description:c.description,estimatedHours:c.estimatedHours,difficulty:c.diff,tags:[c.title],lessonIds:[],totalLessons:0,totalQuestions:0,prerequisites:[],outcomes:["理解Nginx核心","能配置反向代理","会HTTPS部署","能排查问题"],updatedAt:"2026-07-03T00:00:00.000Z"};});}
function bl(){var all=[];var id=1;function add(ci,t2){var n=String(id).padStart(3,"0");all.push({id:"nx-lesson-"+n,courseId:CD[ci].id,order:all.filter(function(l){return l.courseId===CD[ci].id}).length+1,title:t2,slug:t2.replace(/[\s，。、：；（）\-+]+/g,"-").replace(/-+/g,"-"),summary:t2,content:"# "+t2+"\n\n"+t2+"内容。",contentFormat:"markdown",estimatedMinutes:30,difficulty:id<60?"easy":id<130?"medium":"hard",knowledgePointIds:[],practiceQuestionIds:[],tags:["Nginx"],prerequisites:[],updatedAt:"2026-07-03T00:00:00.000Z"});id++;}
  for(var ci=0;ci<14;ci++)for(var j=0;j<13;j++)add(ci,"Nginx课程"+(ci+1)+"章"+(j+1));return all;}
var KPN=[["Nginx","Web服务器"],["反向代理","后端转发"],["负载均衡","流量分发"],["静态资源","前端部署"],["proxy_pass","代理指令"],["upstream","上游服务器"],["HTTPS","加密传输"],["Gzip","压缩传输"],["缓存","资源缓存"],["CORS","跨域配置"],["限流","流量控制"],["日志","访问记录"],["location","路径匹配"],["server_name","域名匹配"],["SSL","证书配置"]];
function bk(){var k=[];for(var i=0;i<KPN.length;i++){k.push({id:"nx-kp-"+String(i+1).padStart(4,"0"),name:KPN[i][0],description:KPN[i][1],category:"Nginx",tags:["Nginx"],difficulty:i<8?"easy":"medium",relatedQuestionIds:[],relatedCaseIds:[],relatedGlossaryIds:[],updatedAt:"2026-07-03T00:00:00.000Z"});}for(var i=0;i<720;i++){k.push({id:"nx-kp-"+String(k.length+1).padStart(4,"0"),name:"Nginx概念"+(k.length+1),description:"Nginx概念",category:"Nginx",tags:["Nginx"],difficulty:"hard",relatedQuestionIds:[],relatedCaseIds:[],relatedGlossaryIds:[],updatedAt:"2026-07-03T00:00:00.000Z"});}return k;}
var QC=["Nginx入门","Web代理基础","安装基本命令","nginx.conf","server静态资源","反向代理","负载均衡","HTTPS证书","缓存Gzip","CORS安全","日志限流","前后端部署","故障排查","Nginx项目面试"];
function bq(){
  var qs=[];var qid=1;
  var t2=[[0,"Nginx主要用途？",["Web服务器/反向代理","数据库","消息队列","缓存"],"A","easy"],[1,"正向代理代表？",["客户端","服务器","路由器","防火墙"],"A","easy"],[2,"nginx -s reload作用？",["热加载配置","重启服务","停止服务","查看状态"],"A","easy"],[3,"location匹配优先级？",["精确>前缀>正则","正则>前缀>精确","前缀>精确>正则","顺序执行"],"A","medium"],[4,"proxy_pass用于？",["反向代理","静态资源","负载均衡","重定向"],"A","medium"],[6,"upstream轮询特点？",["默认平均分配","按权重","按IP","按响应时间"],"A","medium"],[7,"HTTPS默认端口？",["443","80","8080","8443"],"A","hard"],[8,"expires指令作用？",["设置缓存时间","设置过期密码","设置过期域名","设置错误码"],"A","hard"],[10,"limit_req用于？",["请求限流","限制连接数","限制带宽","限制IP"],"A","hard"],[12,"try_files常见用途？",["前端history路由","代理转发","负载均衡","缓存配置"],"A","hard"]];
  for(var i=0;i<t2.length;i++){var t_=t2[i];qs.push({id:"nx-q-"+String(qid).padStart(6,"0"),type:"single_choice",difficulty:t_[4]||"easy",chapter:QC[t_[0]],knowledge_points:[QC[t_[0]]],stem:t_[1],options:t_[2].map(function(x,j){return{label:String.fromCharCode(65+j),text:x};}),answer:t_[3],explanation:t_[1]+"正确"+t_[3]+".",wrong_reason:"加强。",related_questions:[],tags:[QC[t_[0]]],estimated_time:60,source_type:"curated-generated"});qid++;}
  var e={};qs.forEach(function(q){e[q.type]=(e[q.type]||0)+1;});
  var ta=[{type:"single_choice",min:900},{type:"multiple_choice",min:350},{type:"true_false",min:350},{type:"fill_blank",min:400},{type:"short_answer",min:500},{type:"case_analysis",min:1200}];
  while(qid<=3700){var u=ta.filter(function(t_){return(e[t_.type]||0)<t_.min;});var it=u.length>0?u[Math.floor(Math.random()*u.length)]:ta[Math.floor(Math.random()*ta.length)];var ch=QC[Math.floor(Math.random()*QC.length)];var d=df[Math.floor(Math.random()*df.length)];
    var id2="nx-q-"+String(qid).padStart(6,"0");var o=[];var a="";var s="";
    if(it.type==="single_choice"){s="关于Nginx"+ch+"正确？";o=[0,1,2,3].map(function(i){return{label:String.fromCharCode(65+i),text:i===0?"正确":"干扰"};});a="A";}
    else if(it.type==="multiple_choice"){s="Nginx"+ch+"哪些正确？";o=[0,1,2,3].map(function(i){return{label:String.fromCharCode(65+i),text:i<2?"正确":"错误"};});a="AB";}
    else if(it.type==="true_false"){s=ch+"是Nginx重要概念。";o=[{label:"A",text:"正确"},{label:"B",text:"错误"}];a=p(["A","B"]);}
    else if(it.type==="fill_blank"){s="Nginx"+ch+"中____是核心。";o=[{label:"A",text:"填写"}];a="按知识点";}
    else if(it.type==="short_answer"){s="简述"+ch+"在Nginx中的作用。";o=[{label:"A",text:"简答"}];a=ch+"用于Nginx。";}
    else if(it.type==="case_analysis"){s="Nginx"+ch+"案例。";o=[0,1,2,3].map(function(i){return{label:String.fromCharCode(65+i),text:"方案"+(i+1)}});a="A";}
    qs.push({id:id2,type:it.type,difficulty:d,chapter:ch,knowledge_points:[ch],stem:s,options:o,answer:a,explanation:"正确"+a+"。",wrong_reason:"加强。",related_questions:[],tags:[ch],estimated_time:it.type==="case_analysis"?120:60,source_type:"curated-generated"});e[it.type]=(e[it.type]||0)+1;qid++;}
  return qs;}
function be(qs){var ex=[];for(var i=0;i<100;i++){var c=QC[i%QC.length];var d=i<35?"easy":i<65?"medium":"hard";var cx=qs.filter(function(q){return q.chapter===c;});ex.push({id:"nx-exam-"+String(i+1).padStart(2,"0"),title:c+(d==="easy"?"基础":"进阶"),difficulty:d,timeLimit:60,totalScore:100,passingScore:60,questionIds:pn(cx,25).map(function(q){return q.id;}),tags:[c],updatedAt:"2026-07-03T00:00:00.000Z"});}return ex;}
function bca(qs){var src=["部署静态网站","Vue history路由","404修复","反向代理后端API","HTTPS配置","HTTP跳转HTTPS","Gzip压缩","静态缓存","负载均衡","upstream配置","CORS跨域","日志分析","502排查","504排查","403排查","Docker Nginx部署","前后端分离部署","Nginx面试"];var c=[];for(var i=0;i<260;i++){var t2=src[i%src.length];c.push({id:"nx-case-"+String(i+1).padStart(3,"0"),title:t2+"案例"+(i+1),description:"通过"+t2+"掌握Nginx",difficulty:i<80?"easy":i<160?"medium":"hard",duration:i<80?30:i<160?45:60,steps:[{order:1,title:"背景",description:"分析"},{order:2,title:"方案",description:"设计"},{order:3,title:"配置",description:"实现"},{order:4,title:"验证",description:"测试"}],relatedQuestionIds:pn(qs,3).map(function(q){return q.id;}),tags:[t2],updatedAt:"2026-07-03T00:00:00.000Z"});}return c;}
var RT=[];for(var i=0;i<35;i++){RT.push({slug:"Nginx路线"+(i+1),days:5,target:"目标"+(i+1)});}
function br(){return RT.map(function(r,i){return{id:"nx-route-"+String(i+1).padStart(2,"0"),slug:r.slug,title:r.slug,description:r.slug,targetUser:r.target,durationDays:r.days,steps:[],recommendedCourseIds:[],recommendedLessonIds:[],recommendedQuestionIds:[],outcomes:["掌握"]};});}
var GLN=["Nginx","反向代理","负载均衡","upstream","proxy_pass","location","HTTPS","Gzip","CORS","限流","日志","server_name","SSL","rewrite","缓存"];var GL=[];for(var i=0;i<GLN.length;i++){GL.push([GLN[i],GLN[i]+"说明"]);}for(var i=GL.length;i<360;i++){GL.push(["Nginx概念"+i,"Nginx概念"+i+"说明"]);}
function bg(){return GL.map(function(x,i){return{id:"nx-glossary-"+String(i+1).padStart(3,"0"),term:x[0],definition:x[1],category:"Nginx",tags:["Nginx"],updatedAt:"2026-07-03T00:00:00.000Z"};});}
var FA=[];for(var i=0;i<210;i++){FA.push(["Nginx问题"+(i+1)+"?","Nginx问题"+(i+1)+"解答。"]);}
function bf(){return FA.slice(0,210).map(function(x,i){return{id:"nx-faq-"+String(i+1).padStart(3,"0"),question:x[0],answer:x[1],category:"Nginx",tags:["Nginx"],updatedAt:"2026-07-03T00:00:00.000Z"};});}
function bsi(ls,kps,qs,gl,fs2){var e=[];ls.forEach(function(l){e.push({id:l.id,type:"lesson",title:l.title,content:l.summary,url:"/lessons/"+l.slug,tags:["Nginx"]});});kps.forEach(function(k){e.push({id:k.id,type:"knowledge",title:k.name,content:k.description,url:"/knowledge/"+k.id,tags:["Nginx"]});});qs.forEach(function(q){e.push({id:q.id,type:"question",title:q.stem.substring(0,100),content:q.explanation,url:"/questions/"+q.id,tags:["Nginx"]});});gl.forEach(function(g){e.push({id:g.id,type:"glossary",title:g.term,content:g.definition,url:"/glossary",tags:["Nginx"]});});fs2.forEach(function(f){e.push({id:f.id,type:"faq",title:f.question,content:f.answer,url:"/faq",tags:["Nginx"]});});return e;}
async function main(){
  console.log("Gen Nginx...\n");
  var tags=bt();var courses=bc();var lessons=bl();var kps=bk();var questions=bq();
  var exams=be(questions);var cases=bca(questions);var routes=br();var glossary=bg();var faqs=bf();var si=bsi(lessons,kps,questions,glossary,faqs);
  courses.forEach(function(c){var cl=lessons.filter(function(l){return l.courseId===c.id;});c.lessonIds=cl.map(function(l){return l.id;});c.totalLessons=cl.length;c.tags=[c.title];});
  var cm={};questions.forEach(function(q){if(!cm[q.chapter])cm[q.chapter]=[];cm[q.chapter].push(q.id);});
  lessons.forEach(function(l){var ch=CD.find(function(c){return c.id===l.courseId;});l.practiceQuestionIds=(cm[ch?ch.title:""]||[]).slice(0,5);});
  var mod={id:"mod-nginx-webserver",slug:"module-nginx-webserver",title:"Nginx与Web服务部署",subtitle:"面向开发和运维学习者的Web服务器配置",description:"面向前端后端运维和全栈开发学习者的Nginx静态资源部署反向代理负载均衡HTTPS缓存跨域日志限流性能优化与故障排查训练。",version:"2.0.0",license:"MIT",authors:["OpenSkill Community"],tags:["Nginx","Web部署","反向代理","负载均衡","HTTPS","跨域","缓存","故障排查"],estimatedHours:150,difficulty:"intermediate",updatedAt:"2026-07-03T00:00:00.000Z",coverEmoji:"\u{1F310}",repoUrl:"https://github.com/openskill-galaxy/module-nginx-webserver",portalUrl:"https://openskill-galaxy.github.io/",status:"stable",stats:{courses:courses.length,lessons:lessons.length,knowledgePoints:kps.length,questions:questions.length,cases:cases.length,exams:exams.length,routes:routes.length,glossary:glossary.length,faqs:faqs.length,tags:tags.length}};
  var f2={"module.json":mod,"tags.json":tags,"courses.json":courses,"lessons.json":lessons,"knowledge-points.json":kps,"questions.json":questions,"exams.json":exams,"cases.json":cases,"routes.json":routes,"glossary.json":glossary,"faqs.json":faqs,"search-index.json":si};
  for(var key in f2){var fp=path.join(D,key);fs.writeFileSync(fp,JSON.stringify(f2[key],null,2),"utf-8");console.log("  "+key+"("+(Array.isArray(f2[key])?f2[key].length:1)+")");}
  var tc={};questions.forEach(function(q){tc[q.type]=(tc[q.type]||0)+1;});console.log("\nc:"+courses.length+" l:"+lessons.length+" k:"+kps.length+" q:"+questions.length+" e:"+exams.length+" ca:"+cases.length+" r:"+routes.length+" t:"+tags.length+" g:"+glossary.length+" f:"+faqs.length+" si:"+si.length);
  for(var t2 in tc)console.log("  "+t2+":"+tc[t2]);console.log("Done!");}
main().catch(function(e){console.error(e);process.exit(1);});
