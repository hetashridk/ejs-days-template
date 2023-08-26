import express from "express";

const app = express();
const port = 3000;

app.get("/", function(req, res){
    const today = new Date();
                // OR
    // const today = new Date("July 16, 2023");
    const day = today.getDay();

    let type = "a weekday";
    let advice = "its time to do some hard work";

    if(day === 0 || day === 6){
        type = "the weekend";
        advice = "chill day";
    }

    console.log(day);
    res.render("index.ejs", {

        // object 1
        dayType: type,
        advice: advice,
    });
});

app.listen(port,function() {
    console.log(`Server is running on port ${port}.`);
});