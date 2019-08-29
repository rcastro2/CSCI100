var classes = [{date:"Aug 28",topic:"Course Introduction; Programming Concepts; Numerical representation of information"},
                {date:"Sep 4",topic:"Introduction to environment; Output of information"},
                {date:"Sep 11",topic:"Variables, Decisions, Enabling Intelligence (1/2)"},
                {date:"Sep 18",topic:"Variables, Decisions, Enabling Intelligence (2/2)"},
                {date:"Sep 25",topic:"Iteration of a process; Representing information as a collection (1/2)"},
                {date:"Oct 2",topic:"Iteration of a process; Representing information as a collection (2/2)"},
                {date:"Oct 16",topic:"Midterm"},
                {date:"Oct 23",topic:"List of Information"},
                {date:"Oct 30",topic:"Encapsulation of a process (1/2)"},
                {date:"Nov 6",topic:"Encapsulation of a process (2/2)"},
                {date:"Nov 13",topic:"Course Project - Team Formation / Idea Selection"},
                {date:"Nov 20",topic:"Course Project - Implementation (Draft)"},
                {date:"Nov 27",topic:"Course Project - Implementation (Prototype), Project Prep"},
                {date:"Dec 4",topic:"Course Project - Presentation"},
                {date:"Dec 11",topic:"Single Board Computers / Course Review"},
                {date:"Dec 18",topic:"Final"}];
var semester = "FA19";
					
String.prototype.toCapitalize = function() {
    s = (this.length < 2) ? this.toUpperCase() : this.substr( 0, 1 ).toUpperCase() + this.substr( 1 ).toLowerCase();
    return s;
}
				
