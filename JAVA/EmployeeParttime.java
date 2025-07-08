public class EmployeeParttime extends Employee {
    private double hourlyrate;
    private int hoursWorked;

    public EmployeeParttime(String name, int id, double hourlyrate, int hoursWorked) {
        super(name, id);
        this.hourlyrate = hourlyrate;
        this.hoursWorked = hoursWorked;
    }

    @Override
    public double calculateSalary() {
        return hourlyrate * hoursWorked;
    }
}
