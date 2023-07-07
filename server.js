
const express=require("express");
const bodyparser=require("body-parser");
const app=express();
app.use(bodyparser.urlencoded({extended:true}));

app.listen("5343");

app.use(express.static("public"));

app.get('/',function(req,res)
{
    res.sendFile(__dirname+"/calculator.html");
})

app.post('/',function(req,res)
{
    var num1=Number(req.body.num1);
    var num2=Number(req.body.num2);
    var op=req.body.operation;
    var result;
    // res.write("The operation is "+op);
    if(op=="Addition")
    {
        result=num1+num2;
    }
    else if(op=="Subtraction")
    {
        result=num1-num2;
    }
    else if(op=="Multiplication")
    {
        result=num1*num2;
    }
    else if(op=="Division")
    {
        if(num2!=0)
        {
            result=num1/num2;
        }
        else
        {
            res.send("Division by zero is not possible");
        }
    }
    else
    {
        res.send("please select operation");
    }
    res.send("The result is "+result)
})
