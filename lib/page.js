//分页Page

class Page{
	
	constructor(page,pageSize,totalNum,params){
		
		this.page = page || 1;
		this.pageSize = pageSize || 20;
		this.totalNum = totalNum || 0;
		this.startPage = (this.page-1)*this.pageSize;
		this.totalPage = Math.ceil(this.totalNum/this.pageSize) || 1;
		this.showPage = "";
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
		for(let i=1;i<=this.totalPage;i++){
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