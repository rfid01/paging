//分页Page模块 我爱学习 https://www.52aixuexi.com 提供

class Page{
	
	constructor(page,pageSize,totalNum,len,params){
		
		this.page = page || 1;
		this.pageSize = pageSize || 20;
		this.totalNum = totalNum || 0;
		this.startPage = (this.page-1)*this.pageSize;
		this.totalPage = Math.ceil(this.totalNum/this.pageSize) || 1;
		this.showPage = "";
		this.pageNumber = len || 10;
		this.params = params || {
			path:"/index", //url /index?page=?&acId=?
			query:"?acId=",
			acId:""
			
		};
	}
	
	initPage(){		
		if(this.totalPage <=1) return this.showPage = "";
		if(!this.params.acId){ 
			this.params.query = "";		
		}else{
			this.params.query = this.params.query+this.params.acId;
		}			
		if(this.page>1){
			this.showPage +="<li><a href="+this.params.path+this.params.query+"&page="+(this.page-1)+" aria-label='Previous'><span aria-hidden='true'><<</span></a></li>";
		}
		
		let newPage;
		let len =this.pageNumber; //设置分页显示的页数。
		
		let num = len;
		
		if(this.totalPage <= len){ //
			len = this.totalPage;
			newPage = 1;
			
		}else{//
		
			if(this.page <= 1){
				len = num;
			}else{
				len = (this.page-1)+num;
				if(len >= this.totalPage){
					len = this.totalPage;				
				}			
			}
			
			if((this.totalPage - this.page + 1) < num ){				
				newPage = this.totalPage - num + 1;				
			}else{
				newPage = this.page;
			}
		}
		
		for(let i= newPage;i<=len;i++){
			if(this.page == i){
				this.showPage +=  "<li class=active ><a href="+this.params.path+this.params.query+"&page="+i+" class=active >"+i+"</a></li>";		
			}else{
				this.showPage +=  "<li><a href="+this.params.path+this.params.query+"&page="+i+" >"+i+"</a></li>";			
			}			
		}
		
		if(this.page < this.totalPage){
			this.showPage +=  "<li><a href="+this.params.path+this.params.query+"&page="+(this.page+1)+" aria-label='Next'><span aria-hidden='true'>>></span></a></li>";			
		}
		return this.showPage;		
	}
}

module.exports = Page;
