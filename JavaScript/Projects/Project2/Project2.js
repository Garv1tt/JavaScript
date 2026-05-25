const form = document.querySelector("form")
form.addEventListener('submit',function(e){
    e.preventDefault();
    const height = parseFloat(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const result = document.querySelector('#results')
    const message = document.querySelector('#message')
    if (height === '' || height<0 || isNaN()){
        result.innerHTML = `Please give a valid height ${height}`
        
    }
    if (weight === '' || weight<0 || isNaN()){
        result.innerHTML = `Please give a valid weight ${weight}`
        
    }
    const bmi = weight/(height*height)
    result.innerHTML = `<span>${bmi}</span>` 
    if(bmi<18.6){
      message.innerHTML = `<span>Underweight</span>`
    }
    if(bmi>18.6 && bmi <24.9){
      message.innerHTML = `<span>Normal Range</span>`
    }
    if(bmi>24.9){
      message.innerHTML = `<span>Overweight</span>`
    }
})
