using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Bank
{
    public class BankAccount
    {
        public string name;
        public int accountNum;
        private double accountBal = 0;
        public static int Clients = 0;
        private static double totalBalance = 0;
        public BankAccount(string name, int accountNum)
        {
            this.name = name;
            this.accountNum = accountNum;
            Clients++;
            Console.WriteLine($"\nAn account has been created\nINFO: {name}: {accountNum}");
        }

        public static double getTotalBalance()
        {
            Console.WriteLine($"The total money for the bank is {totalBalance}");
            return totalBalance;
        }
        public double getAcctBal()
        {
            Console.WriteLine($"\n{name} Your account balance is ${accountBal}");
            return accountBal;
        }
        public void setAcctBal(double accountBal)
        {
            this.accountBal = accountBal;
        }

        //DEPOSIT
        public void deposit(double amount)
        {
            this.accountBal += amount;
            Console.WriteLine($"\nDeposit Success!:\nAMOUNT: {amount}\nBalance: {accountBal}");
        }
        //WITHDRAW
        public void withdraw(double amount)
        {
            if (amount <= this.accountBal)
            {
            this.accountBal -= amount;
            Console.WriteLine($"\nWithdrawal Success!:\nAMOUNT: {amount}\nBalance: {accountBal}");
            }
            else
            {
                Console.WriteLine("\nYou have insufficient funds");
            }
        }

        //TRANSFER
        public void transfer(BankAccount acount, double amount)
        {
            if (this.accountBal >= amount)
            {
                this.accountBal -= amount;
                Console.WriteLine($"\nYou have transfered:\nAMMOUNT: ${amount}.00 to the account: {name}, {accountNum}\nYour new BALANCE: ${accountBal}");
            }
            else
            {
                Console.WriteLine("\nYou have insufficient funds");
            }
        }
        public int ClientRegistered()
        {
            Console.WriteLine($"\nWe have {Clients} clients banking with us");
            return Clients;
        }
    }
    internal class Program
    {
        static void Main(string[] args)
        {
            BankAccount danielAccount = new BankAccount("Daniel Kul", 1234567890);
            BankAccount joelAccount = new BankAccount("Joel Ming", 0987654356);
            BankAccount samAccount = new BankAccount("Sam John", 239876548);
            BankAccount janeAccount = new BankAccount("Jane Kim", 1249765490);
            BankAccount.getTotalBalance();
            danielAccount.setAcctBal(12348);
            danielAccount.withdraw(12348);
            BankAccount.getTotalBalance();
        }
    }
}
