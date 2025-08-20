using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp2
{
    public class Horse
    {
        public string breed;
        private int age;
        private static int horseCount = 0;

        public Horse(string breed, int age)
        {
            this.breed = breed;
            this.age = age;
            horseCount++;
        }
        //Accessor
        public int getAge()
        {
            return this.age;
        }
        public void setAge(int age)
        {
            this.age = age;
        }
        //Mutator
        public void mainAge()
        {
            Console.WriteLine($"The new age of the {breed} horse is {age}");
        }
        public void gallop()
        {
            Console.WriteLine($"The {breed} horse just galloped");
        }
        public static int HorseCount()
        {
            Console.WriteLine($"There are {horseCount} horses created");
            return horseCount;
        }
    }
    class Program
    {
        public static void Main(string[] args)
        {
            Horse horse1 = new Horse("Fulani", 15);
            horse1.setAge(20);
            horse1.mainAge();
            horse1.gallop();

            Horse horse2 = new Horse("Amina", 23);
            Horse horse3 = new Horse("Oni", 25);
            Horse.HorseCount();
        }
    }
}
