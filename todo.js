function ssend() {
            
var counts;
    setTimeout(() => {
        counts = document.getElementById("holding").childElementCount;
        document.getElementById("demo").innerHTML = counts;
    }, 1000);
       

    var hold = document.getElementById("text").value;

    var titles = document.getElementById("text2").value;

    var hol = document.getElementById("holding");

    var del = document.createElement("button");
    // editing button here 
    var btn = document.createElement("button");
    btn.innerHTML = "EDIT 🖊️";
    // paragraph for the articles 
    var mess = document.createElement("p");

    del.innerHTML = "DELETE 🗑️";


    if (hold == "") {
        alert(" this To do list is empty ");
    }
    else {


        var creat_one = document.createElement("p");
        // carete one other alement for deltering 


        del.setAttribute("id", "del");


        // display hidiing
        del.onclick = function () {
            var con = confirm("delete ?");
            if (con) {
                // parent node remove 
                this.parentNode.remove();
                // PARAGRAPH REMOVE 
                creat_one.remove();
            }
        }

        // null input box after taking input

        function null_clear() {
            hold.value = "  ";
            titles.value = " ";

        }
        null_clear();
// get the date 
        var date = new Date();
    
        var time = date.getDate();

        // creathing here the  dom 
        // set the attribute

        creat_one.setAttribute("id", "alerting");

        var messege = mess.innerHTML = hold;

        creat_one.innerHTML = "<h3 title='task's title >" + titles + "</h3>" + "<br>" + messege + "<br>  <p  title=' created date and time '>" + date + "</p>";

        hol.append(creat_one);

        creat_one.append(del);

        creat_one.append(btn);

        // editbale making of the tod list
        btn.onclick = function () {
            if (btn.innerHTML === "EDIT 🖊️") {
                creat_one.setAttribute("contenteditable", "true");
                btn.setAttribute("contenteditable", "false");
                del.setAttribute("contenteditable", "false");
                btn.innerHTML = "SAVE 💾";
                alert(" Now you can modify this current to do list")
            }
            else {
                btn.innerHTML = "EDIT 🖊️"
                creat_one.setAttribute("contenteditable", "false");
                alert("Saved ")
            }

        }

    }



    hold = " ";
    titles = " ";

}



