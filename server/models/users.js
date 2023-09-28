module.exports=(conn,DataTypes)=>{
    const Users = conn.define("users",{
        name:{
            type: DataTypes.STRING,
            allowNull: false
        },
        email:{
            type: DataTypes.STRING,
            allowNull: false
        },
        password:{
            type: DataTypes.STRING,
            allowNull: false
        },
        adresse:{
            type: DataTypes.STRING,
            allowNull: false
        },
        number:{
            type: DataTypes.STRING,
            allowNull: false
        }
    })
    return Users
}