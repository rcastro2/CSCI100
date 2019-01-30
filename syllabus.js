var classes = [{date:"Jan 30",topic:"Course Introduction; Programming Concepts; Numerical representation of information"},
                {date:"Feb 6",topic:"Introduction to environment; Output of information"},
                {date:"Feb 13",topic:"Variables, Decisions, Enabling Intelligence (1/2)"},
                {date:"Feb 20",topic:"Variables, Decisions, Enabling Intelligence (2/2)"},
                {date:"Feb 27",topic:"Iteration of a process; Representing information as a collection (1/2)"},
                {date:"Mar 6",topic:"Iteration of a process; Representing information as a collection (2/2)"},
                {date:"Mar 13",topic:"Midterm"},
                {date:"Mar 20",topic:"List of Information"},
                {date:"Mar 27",topic:"Encapsulation of a process (1/2)"},
                {date:"Apr 3",topic:"Encapsulation of a process (2/2)"},
                {date:"Apr 10",topic:"Course Project - Team Formation / Idea Selection"},
                {date:"Apr 17",topic:"Course Project - Implementation (Draft)"},
                {date:"May 1",topic:"Course Project - Implementation (Prototype), Project Prep"},
                {date:"May 8",topic:"Course Project - Presentation / Course Review"},
                {date:"May 15",topic:"Final"}];
var semester = "SP19";
					
String.prototype.toCapitalize = function() {
    s = (this.length < 2) ? this.toUpperCase() : this.substr( 0, 1 ).toUpperCase() + this.substr( 1 ).toLowerCase();
    return s;
}
				
