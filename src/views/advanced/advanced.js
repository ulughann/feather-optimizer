const { exec, spawn } = require('node:child_process');

document.addEventListener("DOMContentLoaded", function (event) {
        var _selector = document.querySelector('input[id=cmd]');
        _selector.addEventListener('change', function (event) {
            if (_selector.checked) {



exec('assets\\scripts\\cmd.reg', (err, stdout, stderr) => {
if (err) {
alert("There was an error executing the command." + err);
return;
}
alert("The script was ran sucsessfully.");
});


            }  else {
            }
        });
    });

   
document.addEventListener("DOMContentLoaded", function (event) {
    var _selector = document.querySelector('input[id=desk]');
    _selector.addEventListener('change', function (event) {
        if (_selector.checked) {



exec('assets\\scripts\\desk.reg', (err, stdout, stderr) => {
if (err) {
alert("There was an error executing the command." + err);
return;
}
alert("The script was ran sucsessfully.");
});


        }  else {
        }
    });
});
   
document.addEventListener("DOMContentLoaded", function (event) {
    var _selector = document.querySelector('input[id=7z]');
    _selector.addEventListener('change', function (event) {
        if (_selector.checked) {



exec('assets\\scripts\\7z.reg', (err, stdout, stderr) => {
if (err) {
alert("There was an error executing the command." + err);
return;
}
alert("The script was ran sucsessfully.");
});


        }  else {
        }
    });
});
  
document.addEventListener("DOMContentLoaded", function (event) {
    var _selector = document.querySelector('input[id=path]');
    _selector.addEventListener('change', function (event) {
        if (_selector.checked) {



exec('assets\\scripts\\path.reg', (err, stdout, stderr) => {
if (err) {
alert("There was an error executing the command." + err);
return;
}
alert("The script was ran sucsessfully.");
});


        }  else {
        }
    });
});

document.addEventListener("DOMContentLoaded", function (event) {
    var _selector = document.querySelector('input[id=dc]');
    _selector.addEventListener('change', function (event) {
        if (_selector.checked) {



exec('assets\\scripts\\pages.reg', (err, stdout, stderr) => {
if (err) {
alert("There was an error executing the command." + err);
return;
}
alert("The script was ran sucsessfully.");
});


        }  else {
        }
    });
});

document.addEventListener("DOMContentLoaded", function (event) {
    var _selector = document.querySelector('input[id=work]');
    _selector.addEventListener('change', function (event) {
        if (_selector.checked) {



exec('assets\\scripts\\worker.reg', (err, stdout, stderr) => {
if (err) {
alert("There was an error executing the command." + err);
return;
}
alert("The script was ran sucsessfully.");
});


        }  else {
        }
    });
});

document.addEventListener("DOMContentLoaded", function (event) {
    var _selector = document.querySelector('input[id=amd]');
    _selector.addEventListener('change', function (event) {
        if (_selector.checked) {



exec('assets\\scripts\\amd.reg', (err, stdout, stderr) => {
if (err) {
alert("There was an error executing the command." + err);
return;
}
alert("The script was ran sucsessfully.");
});


        }  else {
        }
    });
});


document.addEventListener("DOMContentLoaded", function (event) {
    var _selector = document.querySelector('input[id=int1]');
    _selector.addEventListener('change', function (event) {
        if (_selector.checked) {



exec('assets\\scripts\\int1.reg', (err, stdout, stderr) => {
if (err) {
alert("There was an error executing the command." + err);
return;
}
alert("The script was ran sucsessfully.");
});


        }  else {
        }
    });
});

document.addEventListener("DOMContentLoaded", function (event) {
    var _selector = document.querySelector('input[id=int2]');
    _selector.addEventListener('change', function (event) {
        if (_selector.checked) {



exec('assets\\scripts\\int2.reg', (err, stdout, stderr) => {
if (err) {
alert("There was an error executing the command." + err);
return;
}
alert("The script was ran sucsessfully.");
});


        }  else {
        }
    });
});

document.addEventListener("DOMContentLoaded", function (event) {
    var _selector = document.querySelector('input[id=nv1]');
    _selector.addEventListener('change', function (event) {
        if (_selector.checked) {



exec('assets\\scripts\\nv1.bat', (err, stdout, stderr) => {
if (err) {
alert("There was an error executing the command." + err);
return;
}
alert("The script was ran sucsessfully.");
});


        }  else {
        }
    });
});

document.addEventListener("DOMContentLoaded", function (event) {
    var _selector = document.querySelector('input[id=nv2]');
    _selector.addEventListener('change', function (event) {
        if (_selector.checked) {



exec('assets\\scripts\\nv2.reg', (err, stdout, stderr) => {
if (err) {
alert("There was an error executing the command." + err);
return;
}
alert("The script was ran sucsessfully.");
});


        }  else {
        }
    });
});

document.addEventListener("DOMContentLoaded", function (event) {
    var _selector = document.querySelector('input[id=ssd]');
    _selector.addEventListener('change', function (event) {
        if (_selector.checked) {



exec('assets\\scripts\\ssd.reg', (err, stdout, stderr) => {
if (err) {
alert("There was an error executing the command." + err);
return;
}
alert("The script was ran sucsessfully.");
});


        }  else {
        }
    });
});

document.addEventListener("DOMContentLoaded", function (event) {
    var _selector = document.querySelector('input[id=qos]');
    _selector.addEventListener('change', function (event) {
        if (_selector.checked) {



exec('assets\\scripts\\qos.reg', (err, stdout, stderr) => {
if (err) {
alert("There was an error executing the command." + err);
return;
}
alert("The script was ran sucsessfully.");
});


        }  else {
        }
    });
});
document.addEventListener("DOMContentLoaded", function (event) {
    var _selector = document.querySelector('input[id=xbox]');
    _selector.addEventListener('change', function (event) {
        if (_selector.checked) {



exec('assets\\scripts\\xbox.bat', (err, stdout, stderr) => {
if (err) {
alert("There was an error executing the command." + err);
return;
}
alert("The script was ran sucsessfully.");
});


        }  else {
        }
    });
});

document.addEventListener("DOMContentLoaded", function (event) {
    var _selector = document.querySelector('input[id=disdefsafe]');
    _selector.addEventListener('change', function (event) {
        if (_selector.checked) {



exec('assets\\scripts\\endefsafe.bat', (err, stdout, stderr) => {
if (err) {
alert("There was an error executing the command." + err);
return;
}
alert("The script was ran sucsessfully.");
});


}  else {
exec('assets\\scripts\\disdefsafe.bat', (err, stdout, stderr) => {
if (err) {
alert("There was an error executing the command." + err);
return;
}
alert("The script was ran sucsessfully.");
});

        }
    });
});



document.addEventListener("DOMContentLoaded", function (event) {
    var _selector = document.querySelector('input[id=telement]');
    _selector.addEventListener('change', function (event) {
        if (_selector.checked) {



exec('assets\\scripts\\telement.bat', (err, stdout, stderr) => {
if (err) {
alert("There was an error executing the command." + err);
return;
}
alert("The script was ran sucsessfully.");
});


        }  else {
        }
    });
});

document.addEventListener("DOMContentLoaded", function (event) {
    var _selector = document.querySelector('input[id=onedrive]');
    _selector.addEventListener('change', function (event) {
        if (_selector.checked) {



exec('assets\\scripts\\onedrive.bat', (err, stdout, stderr) => {
if (err) {
alert("There was an error executing the command." + err);
return;
}
alert("The script was ran sucsessfully.");
});


        }  else {
        }
    });
});
document.addEventListener("DOMContentLoaded", function (event) {
    var _selector = document.querySelector('input[id=edge]');
    _selector.addEventListener('change', function (event) {
        if (_selector.checked) {



exec('assets\\scripts\\edge.bat', (err, stdout, stderr) => {
if (err) {
alert("There was an error executing the command." + err);
return;
}
alert("The script was ran sucsessfully.");
});


        }  else {
        }
    });
});



document.addEventListener("DOMContentLoaded", function (event) {
    var _selector = document.querySelector('input[id=discord]');
    _selector.addEventListener('change', function (event) {
        if (_selector.checked) {



exec('assets\\scripts\\discord.bat', (err, stdout, stderr) => {
if (err) {
alert("There was an error executing the command." + err);
return;
}
alert("The script was ran sucsessfully.");
});


        }  else {
        }
    });
});

document.addEventListener("DOMContentLoaded", function (event) {
    var _selector = document.querySelector('input[id=spotify]');
    _selector.addEventListener('change', function (event) {
        if (_selector.checked) {



exec('assets\\scripts\\spotify.bat', (err, stdout, stderr) => {
if (err) {
alert("There was an error executing the command." + err);
return;
}
alert("The script was ran sucsessfully.");
});


        }  else {
        }
    });
});


document.addEventListener("DOMContentLoaded", function (event) {
    var _selector = document.querySelector('input[id=network]');
    _selector.addEventListener('change', function (event) {
        if (_selector.checked) {



exec('assets\\scripts\\network.bat', (err, stdout, stderr) => {
if (err) {
alert("There was an error executing the command." + err);
return;
}
alert("The script was ran sucsessfully.");
});


        }  else {
        }
    });
});

document.addEventListener("DOMContentLoaded", function (event) {
    var _selector = document.querySelector('input[id=chrome]');
    _selector.addEventListener('change', function (event) {
        if (_selector.checked) {



exec('assets\\scripts\\chrome.bat', (err, stdout, stderr) => {
if (err) {
alert("There was an error executing the command." + err);
return;
}
alert("The script was ran sucsessfully.");
});


        }  else {
        }
    });
});

document.addEventListener("DOMContentLoaded", function (event) {
    var _selector = document.querySelector('input[id=brave]');
    _selector.addEventListener('change', function (event) {
        if (_selector.checked) {



exec('assets\\scripts\\brave.bat', (err, stdout, stderr) => {
if (err) {
alert("There was an error executing the command." + err);
return;
}
alert("The script was ran sucsessfully.");
});


        }  else {
        }
    });
});


document.addEventListener("DOMContentLoaded", function (event) {
    var _selector = document.querySelector('input[id=probing]');
    _selector.addEventListener('change', function (event) {
        if (_selector.checked) {



exec('assets\\scripts\\probe.reg', (err, stdout, stderr) => {
if (err) {
alert("There was an error executing the command." + err);
return;
}
alert("The script was ran sucsessfully.");
});


}  else {
exec('assets\\scripts\\noprobe.reg', (err, stdout, stderr) => {
if (err) {
alert("There was an error executing the command." + err);
return;
}
alert("The script was ran sucsessfully.");
});

        }
    });
});

document.addEventListener("DOMContentLoaded", function (event) {
    var _selector = document.querySelector('input[id=steam]');
    _selector.addEventListener('change', function (event) {
        if (_selector.checked) {



exec('assets\\scripts\\steam.exe', (err, stdout, stderr) => {
if (err) {
alert("There was an error executing the command." + err);
return;
}
alert("The script was ran sucsessfully.");
});


        }  else {
        }
    });
});

document.addEventListener("DOMContentLoaded", function (event) {
    var _selector = document.querySelector('input[id=hdd]');
    _selector.addEventListener('change', function (event) {
        if (_selector.checked) {



exec('assets\\scripts\\hdd', (err, stdout, stderr) => {
if (err) {
alert("There was an error executing the command." + err);
return;
}
alert("The script was ran sucsessfully.");
});


        }  else {
        }
    });
});


document.addEventListener("DOMContentLoaded", function (event) {
    var _selector = document.querySelector('input[id=valo]');
    _selector.addEventListener('change', function (event) {
        if (_selector.checked) {



exec('assets\\scripts\\valorant', (err, stdout, stderr) => {
if (err) {
alert("There was an error executing the command." + err);
return;
}
alert("The script was ran sucsessfully.");
});


        }  else {
        }
    });
});
