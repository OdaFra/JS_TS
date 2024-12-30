var config= require('./dbconfig');
const sql = require('mssql');


/*TODO Obtener Listado*/
async function getCategoria(){
    try {
        let pool = await sql.connect(config);
        let categorias = await pool.request().query("SP_L_CATEGORIA_01");
        return categorias.recordsets;
    } catch (error) {
        console.log(error);
    }
}

/*TODO Obtener Listado por ID*/
async function getCategoriaid(cat_id){
    try {
        let pool = await sql.connect(config);
        let categorias = await pool.request()
        .input('input_parameter',sql.Int, cat_id)
        //.input('cat_id',req.query.cat_id)
        .query("SELECT * from TM_CATEGORIA where CAT_ID = @input_parameter");
        return categorias.recordsets;
    } catch (error) {
        console.log(error);
    }
}

/*TODO Insert registro*/
async function insertCategoria(categoria){
    try {
        let pool = await sql.connect(config);
        let UpdateCate = await pool.request()
            .input('cat_id',sql.Int, categoria.cat_id)
            .input('cat_name',sql.NVarChar, categoria.cat_name)
            .input('cat_desc',sql.NVarChar, categoria.cat_desc)
            .execute("SP_I_CATEGORIA_01");
        return UpdateCate.recordsets;
    } catch (error) {
        console.log(error);
    }
}

/*TODO Actualizar registro*/
async function actualizarCategoria(categoria){
    try {
        let pool = await sql.connect(config);
        let Insertcat = await pool.request()
            .input('cat_id',sql.Int, categoria.cat_id)
            .input('cat_name',sql.NVarChar, categoria.cat_name)
            .input('cat_desc',sql.NVarChar, categoria.cat_desc)
            .execute("SP_U_CATEGORIA_01");
        return Insertcat.recordsets;
    } catch (error) {
        console.log(error);
    }
}


module.exports= {
    getCategoria : getCategoria,
    getCategoriaid : getCategoriaid,
    insertCategoria:insertCategoria,
    actualizarCategoria:actualizarCategoria
}