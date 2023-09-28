

module.exports=(conn,DataTypes)=>{
    const Admins = conn.define('admins',{
        name: {
            type: DataTypes.STRING,
            allowNull:false
        }
    })
    return Admins
}