function ageInDays(){
    let birthYear = prompt('Enter the year that you were born?');
    age = (2020 - birthYear) * 365;
    let result = document.createElement('h1');
    let text = document.createTextNode('Your age in days is ' +age);
    result.setAttribute('id', 'age-in-days');
    result.appendChild(text);
    document.getElementById('result-column').appendChild(result);
    
}

function reset(){
    document.getElementById('result-column').remove();
}