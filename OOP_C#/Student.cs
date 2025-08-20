using System;

namespace SchoolSystem
{
    public class Student
    {
        public string name;
        private char grade;

        public void getGrade(string name, char grade)
        {
            this.name = name;
            this.grade = grade;
            Console.WriteLine($"My name is {name}, i have {grade} in my studies.");
        }
        public void setGrade(char grade) { 
            this.grade = grade; 
        }
    }

    class Program
    {
        static void Main(string[] args)
        {
            Student student1 = new Student();
            Student student2 = new Student();
            student1.getGrade("Daniel", 'A');
            student2.getGrade("Samuel", 'C');
            // Output: My name is Daniel Osayemi, i have A in my studies.
        }
    }
}
