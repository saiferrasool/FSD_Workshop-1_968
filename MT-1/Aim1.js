
const fs = require("fs");

fs.writeFile("student.txt", "hello,this file is for students", (err) => {
    if (err) throw err;
    console.log("File created successfully");

    fs.readFile("student.txt", "utf-8", (err, data) => {
        if (err) throw err;
        console.log("Content of file:");
        console.log(data);

        fs.appendFile("student.txt", " File of CSE 3rd sem", (err) => {
            if (err) throw err;
            console.log("File successfully updated");

            fs.unlink("student.txt", (err) => {
                if (err) throw err;
                console.log("File successfully deleted");
            });
        });
    });
});
