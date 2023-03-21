let weeklyExpenses = 0
let monthlyExpenses = 0
let annualExpenses = 0

let value=0
while(parseInt(value)!=1 || parseInt(value)!=2)
{
    console.log("Type 1 for \"while\" loop solution, type 2 for \"for\" loop solution, Answer must be an integer of either 1 or 2.");
    value = window.prompt("Type 1 for \"while\" loop solution, type 2 for \"for\" loop solution, Answer must be an integer of either 1 or 2.");
}
if (parseInt(value) == 1)
{
    //While loops here
    let i=0
    while(i <weeklyExpenseQuestions.length)
    {
        console.log(weeklyExpenseQuestions[weeklyExpenseQuestions.length-i-1])
        let answer =  window.prompt(weeklyExpenseQuestions[weeklyExpenseQuestions.length-i-1]) 
        weeklyExpenses += parseFloat(answer)
        i++
    }
    i=0
    while(i <monthlyExpenseQuestions.length)
    {
        console.log(monthlyExpenseQuestions[monthlyExpenseQuestions.length-i])
        let answer =  window.prompt(monthlyExpenseQuestions[monthlyExpenseQuestions.length-i-1]) 
        monthlyExpenses+= parseFloat(answer)
        i++
    }
    i=0
    while(i <annualExpenseQuestions.length)
    {
        console.log(annualExpenseQuestions[annualExpenseQuestions.length-i])
        let answer =  window.prompt(annualExpenseQuestions[annualExpenseQuestions.length-i-1]) 
        annualExpenses+=parseFloat(answer)
        i++
    }
}

if(parseInt(value) == 2)   //For loops here
{
    for(let i =0;i<weeklyExpenseQuestions.length;i++)
    {
        console.log(weeklyExpenseQuestions[weeklyExpenseQuestions.length-i-1])
        let answer =  window.prompt(weeklyExpenseQuestions[weeklyExpenseQuestions.length-i-1]) 
        weeklyExpenses += parseFloat(answer)
    }
    for(let i =0;i<monthlyExpenseQuestions.length;i++)
    {
        console.log(monthlyExpenseQuestions[monthlyExpenseQuestions.length-i])
        let answer =  window.prompt(monthlyExpenseQuestions[monthlyExpenseQuestions.length-i-1]) 
        monthlyExpenses+= parseFloat(answer)
    }
    for(let i =0;i<annualExpenseQuestions.length;i++)
    {
        console.log(annualExpenseQuestions[annualExpenseQuestions.length-i])
        let answer =  window.prompt(annualExpenseQuestions[annualExpenseQuestions.length-i-1]) 
        annualExpenses+=parseFloat(answer)
    }
}
// Your Code Here