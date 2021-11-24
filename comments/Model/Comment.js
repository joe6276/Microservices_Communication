const db=require('../Config/db')

class Comment{
    constructor( id,content){
       this.id= id
       this.content=content;
    }
    async save(){  
        let sql=`
       INSERT INTO comment(
           id,content)
           VALUES('${this.id}'
           , '${this.content}'                  
           )` ;
     const [newComment,_]=await db.execute(sql)
     return newComment;   
   }

   static findAll(){
    let sql= " SELECT * FROM comment"
    return db.execute(sql);
}

}
module.exports= Comment