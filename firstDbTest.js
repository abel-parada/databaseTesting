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

    console.log('\n########## TEST 2 ##########')
    result = await connection.query('select firstname, lastname from employee where employeeId=?', [1]);// the ? is a placeholder. The data comes from the second paramenter, in this case, the array [1]
    delete result.meta;
    console.log(result);

    // console.log('\n######## test 3 insert ########');
    // result = await connection.query('insert into employee values(?,?,?,?,?)', [3   ,'Gandalf','The Grey','Wizard', 9999]);

    // console.log(result);

    console.log('\n#### test 4 delete ####');
    result = await connection.query('delete from employee where employeeId =?',[4]);

    console.log(result);

    console.log('\n#### test 5 UPDATE ####');
    result = await connection.query('update employee set department=?, salary=? where employeeId=?',['finance',7000,1]);
    console.log(result);



    connection.end();
};

testA();