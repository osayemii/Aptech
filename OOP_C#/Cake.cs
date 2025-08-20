using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CakeDelivery
{

    public class Cake
    {
        public string cakeType;
        private bool isAvailable;

        public Cake(string type)
        {
            this.cakeType = type;
            isAvailable = true;
        }

        public bool CheckAvailability()
        {
            return isAvailable;
        }
    }

    public class Order
    {
        private Cake cake;
        private double price;

        public Order(Cake orderedcake, double orderedprice)
        {
            this.cake = orderedcake;
            this.price = orderedprice;
        }

        public void ProcessOrder()
        {
            if (cake.CheckAvailability())
            {
                Console.WriteLine($"Order for {cake.cakeType} cake confirmed. Total: {price}");
            }
            else
            {
                Console.WriteLine($"Sorry, {cake.cakeType} cake is unavailable");
            }
        }

    }

    public class Customer
    {
        public String name, address;

        public void PlaceOrder(Order order)
        {
            Console.WriteLine($"{name} placed an order from {address}.");
            order.ProcessOrder();
        }
    }

    public class Program
    {
        public static void Main(string[] args)
        {
            Customer customer = new Customer { name = "Alice", address = "123 Main St." };
            Cake cake = new Cake("Chocolate");
            Order order = new Order(cake, 50.00);
            customer.PlaceOrder(order);
        }
    }
}