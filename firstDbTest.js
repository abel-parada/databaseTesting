// Documentation: https://mariadb.com/kb/en/connector-nodejs-promise-api/

'use strict';

const mariadb = require('mariadb');

async function testA(){
    const connection = await mariadb.createConnection({
        host:'localhost',
        port: 3306, //default port
        user:'zeke',
        password:'secret',
        database:'employeedb',
        allowPublicKeyRetrieval: true, // this is for mysql users
    });
    console.log('########## TEST 1 ##########');
    let result = await connection.query('select * from employee');

    // console.log(result);

    delete result.meta; // this deletes the metadata

    console.log(result);

    // now it is easy to handle our data

    for (let person of result){
        console.log(`${person.firstname}: ${person.salary} euros`);
    }

    console.log('########## TEST 2 ##########')
    result = await connection.query('select firstname, lastname from employee where employeeId=?', [1]);// the ? is a placeholder. The data comes from the second paramenter, in this case, the array [1]
    delete result.meta;
    console.log(result);

    connection.end();
};

testA();