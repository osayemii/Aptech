public class EmployeeMonthly extends Employee{
    private double monthlySalary;

    public EmployeeMonthly(String name, int id, double monthlySalary) {
        super(name, id);
        this.monthlySalary = monthlySalary;
    }

    @Override
    public double calculateSalary() {
        return monthlySalary;
    }
}
