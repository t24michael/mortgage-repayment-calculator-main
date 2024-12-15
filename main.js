document.querySelectorAll("input").forEach(function (input) {
    input.addEventListener("focus", function(){
        if(input.classList.contains("inputFail")){
            input.classList.remove("inputFail")
        }
    });
    
})

function clearAllInputs(){
    const inputs = document.querySelectorAll('input[name="group2"]');
    console.log(inputs);
    inputs.forEach((singleInput)=>(singleInput.value=""));
}

function fail(array){
    array.forEach(function (input){
        input.classList.add("inputFail");
    });
}

function calculateRepayments(){
    const amount = document.getElementById('amount').value;
    const term = document.getElementById('mortgageTerm').value * 12;
    const rate = document.getElementById('mortgageRate').value / 100 / 12;
    let isEmpty = false;
    let arrayToCheck = [];
    document.querySelectorAll("input").forEach(function (input){
        if(!input.value.trim()){
            arrayToCheck.push(input);
            isEmpty = true;
        }
    })

    if(isEmpty){
        fail(arrayToCheck);
        return;
    }

    if(document.getElementById('repayButton').checked){
        console.log("Repayments");

        document.getElementById('firstPage').classList.toggle('hidden');
        document.getElementById('calculatedResults').classList.toggle('hidden');
        
        const m = (amount * (rate*Math.pow(rate+1,term))) / (Math.pow(rate+1,term)-1);
        const total = m * term;
        document.getElementById('result').innerText = "€" + String(m.toFixed(3));
        document.getElementById('resultTotal').innerText = "€" + String(total.toFixed(3));

    }
    else if(document.getElementById('interestButton').checked){
        console.log("Interest");
        document.getElementById('firstPage').classList.toggle('hidden');
        document.getElementById('calculatedResults').classList.toggle('hidden');

        const m = (amount * (rate*Math.pow(rate+1,term))) / (Math.pow(rate+1,term)-1);
        document.getElementById('result').innerText = m;
    }
}