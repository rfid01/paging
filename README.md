#paging

1:how to use?

exapmles

 const paging = new Page(page,pageSize,totalNum,params);
 
 paging.initPage();
 
 params:
 
 page:	current page.  #当前页
 
 pageSize:    Number of bars of per page. #每页显示的条数
 
 totalNum:    //total record  #总记录数
 
 params:{  //params参数是一个对象

	path:"/index", //url /index?page=?&acId=?   //访问路径
	
	query:"?acId=",  //传递参数.
	
	acId:""  //栏目ID.
   }
   
 client borwer :
 
 require  bootstrap.min.css; 
 
