using System;
using System.Collections.Generic;
using System.Linq;

namespace OPayPrompts
{
    // Enum to define prompt categories
    public enum PromptCategory
    {
        Marketing,
        Onboarding,
        FeatureUse,
        CustomerSupport
    }

    // Class to represent a single prompt
    public class Prompt
    {
        public PromptCategory Category { get; set; }
        public string Text { get; set; }

        public Prompt(PromptCategory category, string text)
        {
            Category = category;
            Text = text;
        }
    }

    // Class to manage the collection of prompts
    public class PromptManager
    {
        private List<Prompt> prompts;

        public PromptManager()
        {
            prompts = new List<Prompt>();
            InitializePrompts();
        }

        // Initialize prompts with the provided examples
        private void InitializePrompts()
        {
            // Marketing Prompts
            prompts.Add(new Prompt(PromptCategory.Marketing, "Banking made easy with OPay! Send money, pay bills, and shop—all in one app."));
            prompts.Add(new Prompt(PromptCategory.Marketing, "Get rewarded when you bank with OPay! Enjoy 100% free transfers and instant cashback."));
            prompts.Add(new Prompt(PromptCategory.Marketing, "Open a bank account in 2 minutes—no paperwork, no stress."));
            prompts.Add(new Prompt(PromptCategory.Marketing, "Refer a friend and earn up to ₦1,000 instantly! More friends, more rewards."));
            prompts.Add(new Prompt(PromptCategory.Marketing, "Skip the queues—buy airtime and pay electricity bills from anywhere with OPay."));

            // Onboarding Prompts
            prompts.Add(new Prompt(PromptCategory.Onboarding, "Welcome to OPay! Let’s get your account set up in just a few steps."));
            prompts.Add(new Prompt(PromptCategory.Onboarding, "Verify your identity to unlock full features like savings, transfers, and cashback."));
            prompts.Add(new Prompt(PromptCategory.Onboarding, "Add money to your wallet now to start enjoying seamless transactions!"));
            prompts.Add(new Prompt(PromptCategory.Onboarding, "Need help getting started? Tap below to chat with our support team."));

            // Feature Use Promptsaa
            prompts.Add(new Prompt(PromptCategory.FeatureUse, "Top up airtime in seconds—just enter a phone number and amount."));
            prompts.Add(new Prompt(PromptCategory.FeatureUse, "Send money to any bank account in Nigeria, 100% free."));
            prompts.Add(new Prompt(PromptCategory.FeatureUse, "Pay NEPA bills in 3 clicks. Never miss a payment again."));
            prompts.Add(new Prompt(PromptCategory.FeatureUse, "Start saving with OWealth and earn daily interest—no hidden fees."));

            // Customer Support Prompts
            prompts.Add(new Prompt(PromptCategory.CustomerSupport, "Having trouble with your transaction? Let’s help you fix it fast."));
            prompts.Add(new Prompt(PromptCategory.CustomerSupport, "Need help with your PIN or password? Tap below to reset securely."));
            prompts.Add(new Prompt(PromptCategory.CustomerSupport, "Chat with an OPay agent 24/7—we’re always here for you."));
        }

        // Method to get prompts by category
        public List<Prompt> GetPromptsByCategory(PromptCategory category)
        {
            return prompts.Where(p => p.Category == category).ToList();
        }

        // Method to display prompts for a given category
        public void DisplayPrompts(PromptCategory category)
        {
            var categoryPrompts = GetPromptsByCategory(category);
            Console.WriteLine($"\n{category} Prompts:");
            if (categoryPrompts.Any())
            {
                foreach (var prompt in categoryPrompts)
                {
                    Console.WriteLine($"- {prompt.Text}");
                }
            }
            else
            {
                Console.WriteLine("No prompts found for this category.");
            }
        }
    }

    class Program
    {
        static void Main(string[] args)
        {
            PromptManager promptManager = new PromptManager();

            // Display a simple menu
            while (true)
            {
                Console.WriteLine("\nOPay Prompt Manager");
                Console.WriteLine("1. View Marketing Prompts");
                Console.WriteLine("2. View Onboarding Prompts");
                Console.WriteLine("3. View Feature Use Prompts");
                Console.WriteLine("4. View Customer Support Prompts");
                Console.WriteLine("5. Exit");
                Console.Write("Select an option (1-5): ");

                string input = Console.ReadLine();

                // Map input to category
                PromptCategory? category = input switch
                {
                    "1" => PromptCategory.Marketing,
                    "2" => PromptCategory.Onboarding,
                    "3" => PromptCategory.FeatureUse,
                    "4" => PromptCategory.CustomerSupport,
                    "5" => null,
                    _ => null
                };

                if (category.HasValue)
                {
                    promptManager.DisplayPrompts(category.Value);
                }
                else if (input == "5")
                {
                    Console.WriteLine("Exiting...");
                    break;
                }
                else
                {
                    Console.WriteLine("Invalid option. Please select a number between 1 and 5.");
                }
            }
        }
    }
}