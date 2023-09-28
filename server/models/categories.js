module.exports=(conn,DataTypes)=>{
    const Categories = conn.define("categories",{
        name : {
            type : DataTypes.STRING,
            allowNull: false
        }
    })
    return Categories
}