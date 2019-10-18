#paging

1:how to use?

exapmles
 const paging = new Page(page,pageSize,totalNum,params);
 paging.initPage();
 
 params:
   page:	current page.
   pageSize:    Number of bars of per page.
   totalNum:    //total record
   params:{
		path:"/index", //url /index?page=?&acId=?
		query:"?acId=",
		acId:""
   }
   
 client borwer :
 
 require  bootstrap.min.css; 
 