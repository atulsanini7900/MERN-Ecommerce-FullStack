class ApiFeature{
    constructor(query, querystr){
        this.query=query
        this.querystr=querystr
    }
    search(){
        const keyword=this?.querystr?.keyword ? {
            name:{
                $regex:this.querystr.keyword,
                $options:"i"

            }
        }:{};

        this.query=this.query.find({...keyword});
        return this;
    }

    filter(){
        const queryCopy = {...this.querystr}
        console.log(queryCopy);
        
        const removeFields = ["keyword", "page", "limit"];
        removeFields.forEach(key=>delete queryCopy[key])

        // Filter For Price and Rating

        let queryStr=JSON.stringify(queryCopy)
        queryStr= queryStr.replace(/\b(gt|gte|lt|lte)\b/g, (key)=>`$${key}`)

        this.query=this.query.find(JSON.parse(queryStr))
        return this;
        console.log(queryCopy);

    }

    pagination(resultPerPage){
        const currentPage= Number(this.querystr.page) || 1
        const skip=resultPerPage*(currentPage - 1);

        this.query=this.query.limit(resultPerPage).skip(skip);
        return this; 
    }
    
}

module.exports=ApiFeature;