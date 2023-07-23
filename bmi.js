const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.post("/", function(req, res) {
  var num1 = req.body.weight;
  var num2 = req.body.height;

  var num3 = num2 * num2;

  var bmi = (num1 / num3).toFixed(2);

  var classification = "";
  if (bmi < 16) {
    classification = "Severe Thinness";
  } else if (bmi >= 16 && bmi < 17) {
    classification = "Moderate Thinness";
  } else if (bmi >= 17 && bmi < 18.5) {
    classification = "Mild Thinness";
  } else if (bmi >= 18.5 && bmi < 25) {
    classification = "Normal";
  } else if (bmi >= 25 && bmi < 30) {
    classification = "Overweight";
  } else if (bmi >= 30 && bmi < 35) {
    classification = "Obese Class I";
  } else if (bmi >= 35 && bmi < 40) {
    classification = "Obese Class II";
  } else {
    classification = "Obese Class III";
  }

  var result = "<div style='display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100vh; background-color: #f4f4f4;'>" +
               "<h1 style='color: #333; font-size: 36px; margin-bottom: 20px;'>Your BMI is " + bmi + "</h1>" +
               "<h2 style='color: #555; font-size: 24px; margin-bottom: 40px;'>Classification: " + classification + "</h2>" +
               "<table style='border-collapse: collapse; background-color: #ffffff; padding: 20px; border-radius: 5px;'>" +
               "<tr>" +
               "<th style='padding: 10px; background-color: #333; color: #ffffff;'>BMI Range - kg/m²</th>" +
               "<th style='padding: 10px; background-color: #333; color: #ffffff;'>Classification</th>" +
               "</tr>" +
               "<tr>" +
               "<td style='padding: 10px; background-color: #f5f5f5;'> &lt; 16</td>" +
               "<td style='padding: 10px; background-color: #f5f5f5;'>Severe Thinness</td>" +
               "</tr>" +
               "<tr>" +
               "<td style='padding: 10px; background-color: #f8f8f8;'>16 - 17</td>" +
               "<td style='padding: 10px; background-color: #f8f8f8;'>Moderate Thinness</td>" +
               "</tr>" +
               "<tr>" +
               "<td style='padding: 10px; background-color: #f5f5f5;'>17 - 18.5</td>" +
               "<td style='padding: 10px; background-color: #f5f5f5;'>Mild Thinness</td>" +
               "</tr>" +
               "<tr>" +
               "<td style='padding: 10px; background-color: #f8f8f8;'>18.5 - 25</td>" +
               "<td style='padding: 10px; background-color: #f8f8f8;'>Normal</td>" +
               "</tr>" +
               "<tr>" +
               "<td style='padding: 10px; background-color: #f5f5f5;'>25 - 30</td>" +
               "<td style='padding: 10px; background-color: #f5f5f5;'>Overweight</td>" +
               "</tr>" +
               "<tr>" +
               "<td style='padding: 10px; background-color: #f8f8f8;'>30 - 35</td>" +
               "<td style='padding: 10px; background-color: #f8f8f8;'>Obese Class I</td>" +
               "</tr>" +
               "<tr>" +
               "<td style='padding: 10px; background-color: #f5f5f5;'>35 - 40</td>" +
               "<td style='padding: 10px; background-color: #f5f5f5;'>Obese Class II</td>" +
               "</tr>" +
               "<tr>" +
               "<td style='padding: 10px; background-color: #f8f8f8;'>&gt; 40</td>" +
               "<td style='padding: 10px; background-color: #f8f8f8;'>Obese Class III</td>" +
               "</tr>" +
               "</table>" +
               "</div>";

  res.send(result);
});

app.listen("3000");
