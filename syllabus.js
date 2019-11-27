var classes = [{date:"Aug 28",topic:"Course Introduction; Programming Concepts; Numerical representation of information"},
                {date:"Sep 4",topic:"Introduction to environment; Output of information"},
                {date:"Sep 11",topic:"Variables, Decisions, Enabling Intelligence (1/2)"},
                {date:"Sep 18",topic:"Variables, Decisions, Enabling Intelligence (2/2)"},
                {date:"Sep 25",topic:"Iteration of a process; Representing information as a collection (1/2)"},
                {date:"Oct 2",topic:"Iteration of a process; Representing information as a collection (2/2)"},
                {date:"Oct 23",topic:"Midterm"},
                {date:"Oct 30",topic:"Encapsulation of a process"},
                {date:"Nov 6",topic:"Additional CircuitPlayground Express capabilities"},
                {date:"Nov 13",topic:"Course Project - Team Formation / Idea Selection"},
                {date:"Nov 20",topic:"Course Project - Implementation (Draft)"},
                {date:"Nov 27",topic:"Course Project - Implementation (Prototype), Project Prep"},
                {date:"Dec 4",topic:"Course Project - Presentation"},
                {date:"Dec 11",topic:"Single Board Computers / Course Review"},
                {date:"Dec 18",topic:"Final"}];
var semester = "FA19";

var letterGradeCalculation = function(numbergrade){
    lettergrade = "Error"
    if(numbergrade.isBetween(97,100))lettergrade =  "A+ / 4.0";
    else if(numbergrade.isBetween(93,97))lettergrade =  "A / 4.0";
    else if(numbergrade.isBetween(90,93))lettergrade =  "A- / 3.7";
    else if(numbergrade.isBetween(87,90))lettergrade =  "B+ / 3.3";
    else if(numbergrade.isBetween(83,87))lettergrade =  "B / 3.0";
    else if(numbergrade.isBetween(80,83))lettergrade =  "B- / 2.7";
    else if(numbergrade.isBetween(77,80))lettergrade =  "C+ / 2.3";
    else if(numbergrade.isBetween(73,77))lettergrade =  "C / 2.0";
    else if(numbergrade.isBetween(70,73))lettergrade =  "C- / 1.7";
    else if(numbergrade.isBetween(67,70))lettergrade =  "D+ / 1.3";
    else if(numbergrade.isBetween(60,67))lettergrade =  "D / 1.0";
    else if(numbergrade.isBetween(0,60))lettergrade =  "F / 0.0";
    return lettergrade;
}

String.prototype.toCapitalize = function() {
    s = (this.length < 2) ? this.toUpperCase() : this.substr( 0, 1 ).toUpperCase() + this.substr( 1 ).toLowerCase();
    return s;
}
Number.prototype.isBetween = function(lower,upper){
    return lower <= this.valueOf() && this.valueOf() < upper;
}


				
