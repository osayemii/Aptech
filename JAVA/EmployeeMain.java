public class EmployeeMain {
    public static void main(String[] args) {
        Employee emp1 = new EmployeeMonthly("Alice", 001, 3000.0);
        Employee emp2 = new EmployeeParttime("Daniel", 002, 20.0, 80);
        emp1.display();
        emp2.display();
    }
}
