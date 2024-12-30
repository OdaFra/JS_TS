const config={
    user:"sa",
    password:"odafra09",
    server:"192.168.0.8",
    database:"APIREST",
    //dialect:"mssql",
    options:{
        trustedconnection: true,
        enableArithAbort: true,
        encrypt: false, // for azure
        trustServerCertificate: false
        //instancename: 'SQLEXPRESS',
    },
    //port: 1433,
    //60923
}

module.exports = config;