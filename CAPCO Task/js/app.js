
function convertCur(){
    let from = document.getElementById('from').value;
    let to = document.getElementById('to').value;
    let xmlHttp = new XMLHttpRequest();
    // let url = `https://us-central1-capco-243515.cloudfunctions.net/front-end-test-api=${from},${to}`; the api link is not working
    let url = `http://data.fixer.io/api/latest?access_key=78e2264afc505348be0032e38c4b7b16&format=1=${from},${to}`;
    xmlHttp.open("GET", url, true);
    xmlHttp.send();
    xmlHttp.onreadystatechange = ()=>{
        if(xmlHttp.readyState ==4 && xmlHttp.status ==200){
            let result = xmlHttp.responseText;
            let requestResult = JSON.parse(result);
            let excRate = requestResult.rates[to]/requestResult.rates[from];
            let amount = document.getElementById('fromAmount').value;
            document.getElementById('toAmount').value = (excRate*amount).toFixed(2);// two decimal places
        }
    }

}

function swap(from, to){
    let temp = document.getElementById('from').value;
    let temp2 = document.getElementById('to').value;
    document.getElementById('from').value = temp2;
    document.getElementById('to').value = temp;
}
