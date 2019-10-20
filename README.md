#paging

1:how to use?

exapmles

 const paging = new Page(page,pageSize,totalNum,len,params);
 
 paging.initPage();
 
 params:
 
   page:	current page. #当前页
   
   pageSize:    Number of bars of per page. #每页显示的数量
   
   totalNum:    //total record # 总记录数
   
   len: //page Number     //每页显示的分页数
   
   params:{
   
		path:"/index", //url /index?page=?&acId=?
		
		query:"?acId=",
		
		acId:""
		
   }
   
   
 client borwer : #浏览器端引入bootstrap.min.css
 
  require  bootstrap.min.css; 
 
