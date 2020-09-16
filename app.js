function getHistoryvalue() {
    return document.getElementById('historyvalue').innerText
}

function printHistoryvalue(p1) {
    return document.getElementById('historyvalue').innerText = p1
}
//printHistoryvalue(1256 + 65)


function getOutputvalue() {

    return document.getElementById('outputvalue').innerText
}

function printOutputvalue(p2) {
    if (p2 == "") {

        return document.getElementById('outputvalue').innerText = p2
    } else {
        return document.getElementById('outputvalue').innerText = getFormattednumber(p2)
    }

}
///  convert to string from number
function getFormattednumber(p2) {

    if (p2 == "-") {
        return ""
    }
    var x = Number(p2);
    var y = x.toLocaleString();
    return y
}
/// convert to  number from string
//burdaki g nin anlami global olarak tum stringde , leri '' yapiyor.
function getFormattedstring(p2) {
    var x = Number(p2.replace(/,/g, ''))
    return x
}
//printOutputvalue(563211456633)
//alert(getFormattedstring(getOutputvalue()))

var operator = document.getElementsByClassName('operator');

for (var i = 0; i < operator.length; i++) {

    operator[i].addEventListener('click', function() {
        if (this.id == 'clear') {
            printOutputvalue('')
            printHistoryvalue('')
        }
        if (this.id == 'backspace') {
            var output = getFormattedstring(getOutputvalue()).toString()
            if (output) {
                output = output.substr(0, output.length - 1);
                printOutputvalue(output)
            }


        } else {


            var output = getOutputvalue();
            var history = getHistoryvalue();
            if (output == "" && history != "") {

                if (isNaN(history[history.length - 1])) {
                    history = history.substr(0, history.length - 1);
                }
            }
            if (output != "" || history != "") {
                //condition?tru:false
                output = output == "" ?
                    output : getFormattedstring(output)
                history = history + output
                if (this.id == "=") {

                    var result = eval(history)
                    printOutputvalue(result)
                    printHistoryvalue("")
                } else {
                    history = history + this.id;
                    printHistoryvalue(history)
                    printOutputvalue('')
                }

            }
        }

    })
}

var numbers = document.getElementsByClassName('number');

for (var i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener('click', function() {
        var output = getFormattedstring(getOutputvalue());
        if (output != NaN) {
            output = output + this.innerText;
            printOutputvalue(output);
        }
    })
}