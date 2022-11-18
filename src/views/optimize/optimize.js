const { exec, spawn } = require('node:child_process');

function go() {

    exec('assets\\scripts\\opt.reg', (err, stdout, stderr) => {
        if (err) {
        alert("There was an error executing the command." + err);
        return;
        }
        alert("The script was ran sucsessfully.");
        });}

function debloat() {

            exec('assets\\scripts\\debloat.bat', (err, stdout, stderr) => {
                if (err) {
                alert("There was an error executing the command." + err);
                return;
                }
                alert("The script was ran sucsessfully.");
                });}
                
function temp() {

            exec('assets\\scripts\\temp.bat', (err, stdout, stderr) => {
                if (err) {
                alert("There was an error executing the command." + err);
                return;
                }
                alert("The script was ran sucsessfully.");
                });}