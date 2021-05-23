import{e,ah as l,ax as a,f as t,ao as n,aF as u,aQ as o,aG as d,aH as i,aA as s,aR as r,aS as c,aD as p,a5 as f,z as m,Z as g,aT as v,aI as b,ag as y,u as h,aU as C,an as k,ap as w}from"./vendor.79a8b122.js";import{q as x}from"./index.module.b3b6ab7c.js";import{k as I}from"./index.d0df625d.js";var S=e({name:"ViewTableQuery",setup(){const e=h(I),S=l({selectCount:0,invokeCount:0,expand:!1,pageNo:0,pageSize:10,loading:!1,selectedRowKeys:new Array}),O=[{title:"规则编号",id:0,dataIndex:"code",width:200},{title:"描述",id:2,dataIndex:"desc",width:800},{title:"服务调用次数",id:3,dataIndex:"invokeCount",width:160,orderable:!0,sort:(e,l)=>e.invokeCount-l.invokeCount},{title:"状态",id:4,dataIndex:"status",width:160,custom:!0,customRender:()=>t(b.Column,{title:"操作",customRender:K},null)},{title:"更新时间",id:5,dataIndex:"updateTime",width:200,orderable:!0,sort:(e,l)=>new Date(e.updateTime).getTime()-new Date(l.updateTime).getTime()},{title:"操作",id:6,custom:!0,customRender:()=>t(b.Column,{title:"操作",customRender:q},null)}],T=[{label:"停止",value:0,color:"#d9d9d9"},{label:"运行中",value:1,color:"#108ee9"},{label:"已上线",value:2,color:"green"},{label:"异常",value:3,color:"red"}],R=()=>{S.loading=!0,e.dispatch("queryTable/getQueryTableList",{pageNo:S.pageNo,pageSize:S.pageSize}).then((()=>{S.loading=!1}))};a((()=>{R()}));const z=()=>{S.pageNo=1,R()},j=(...[e,l])=>{S.pageNo=e,S.pageSize=l,R()},q=({record:e})=>t("span",null,[t("a",{onClick:()=>{w.info("配置"+e.id)}},[n("配置")]),t(C,{type:"vertical"},null),t("a",{onClick:()=>{w.info("订阅警报"+e.id)}},[n("订阅警报")])]),K=({record:e})=>{const l=T.find((l=>l.value===e.status));return t(k,{text:null==l?void 0:l.label,color:null==l?void 0:l.color},null)};return()=>{let l;return t("section",null,[t("section",{class:x.queryTitle},[t("div",{class:x.titleWrap},[t("h1",{class:x.h1},[n("查询表单")])])]),t("section",{class:x.queryContent},[t(u,null,{default:()=>{return[t("section",null,[t(o,{class:x.antAdvancedSearchForm},{default:()=>[t(d,{gutter:24},{default:()=>[t(i,{md:8,sm:24},{default:()=>[t(o.Item,{label:"规则编号"},{default:()=>[t(s,{placeholder:"请输入"},null)]})]}),t(i,{md:8,sm:24},{default:()=>[t(o.Item,{label:"使用状态"},{default:()=>[t(r,null,{default:()=>[t(r.Option,{value:0},{default:()=>[n("停止")]}),t(r.Option,{value:1},{default:()=>[n("运行中")]}),t(r.Option,{value:2},{default:()=>[n("已上线")]}),t(r.Option,{value:3},{default:()=>[n("异常")]})]})]})]}),S.expand?t("template",null,[t(i,{md:8,sm:24},{default:()=>[t(o.Item,{label:"调用次数"},{default:()=>[t(s,{placeholder:"请输入"},null)]})]}),t(i,{md:8,sm:24},{default:()=>[t(o.Item,{label:"更新日期"},{default:()=>[t(c,null,null)]})]}),t(i,{md:8,sm:24},{default:()=>[t(o.Item,{label:"使用状态"},{default:()=>[t(r,null,{default:()=>[t(r.Option,{value:0},{default:()=>[n("停止")]}),t(r.Option,{value:1},{default:()=>[n("运行中")]}),t(r.Option,{value:2},{default:()=>[n("已上线")]}),t(r.Option,{value:3},{default:()=>[n("异常")]})]})]})]}),t(i,{md:8,sm:24},{default:()=>[t(o.Item,{label:"使用状态"},{default:()=>[t(r,null,{default:()=>[t(r.Option,{value:0},{default:()=>[n("停止")]}),t(r.Option,{value:1},{default:()=>[n("运行中")]}),t(r.Option,{value:2},{default:()=>[n("已上线")]}),t(r.Option,{value:3},{default:()=>[n("异常")]})]})]})]})]):"",t(i,{span:S.expand?24:8,class:x.btnGroups},{default:()=>[t(o.Item,null,{default:()=>[t(p,{type:"primary",onClick:z},{default:()=>[n("查询")]}),t(p,{type:"default",class:x.btnMg},{default:()=>[n("重置")]}),S.expand?t(p,{type:"link"},{default:()=>[n("收起"),t(f,null,null)]}):t(p,{type:"link"},{default:()=>[n("展开"),t(m,null,null)]})]})]})]})]})]),t("section",null,[t(p,{type:"primary",icon:t(g,null,null)},{default:()=>[n("新建")]}),t("div",{class:x.myMd},[t(v,{message:t("span",null,[n("已选择"),t(p,{type:"link"},{default:()=>[t("b",null,[S.selectCount])]}),n("项     服务调用总计 "),t("b",null,[S.invokeCount]),n(" 万       "),S.selectCount>0?t(p,{type:"link"},{default:()=>[n("清空")]}):""]),type:"info",key:"id"},null)]),t(b,{loading:S.loading,key:"id",rowKey:"id",rowSelection:{type:"checkbox",selectedRowKeys:S.selectedRowKeys,selections:!1,onChange:(e,l)=>{S.selectedRowKeys=e,S.selectCount=S.selectedRowKeys.length;let a=0;l.forEach((e=>{a+=e.invokeCount})),S.invokeCount=a/1e4}},onChange:(...e)=>{console.log(e)},pagination:{current:S.pageNo,pageSize:S.pageSize,total:e.state.queryTable.total,showSizeChanger:!0,showQuickJumper:!0,onChange:j,onShowSizeChange:j},dataSource:e.state.queryTable.dataSourceList},(a=l=O.map((e=>e.orderable?t(b.Column,{title:e.title,dataIndex:e.dataIndex,sorter:e.sort},null):e.custom?e.customRender():t(b.Column,{title:e.title,dataIndex:e.dataIndex},null))),"function"==typeof a||"[object Object]"===Object.prototype.toString.call(a)&&!y(a)?l:{default:()=>[l]}))])];var a}})])])}}});export default S;