public class Employee {
    public String name;
    private int salary;
    protected int id;
    String department;

    {
        name = "New Employee";
        salary = 400000;
        department = "Engineering";
    }

    public Employee(String name) {
        this.name = name;
    }

    public double getSalary() {
        return salary;
    }

    public void setSalary(int salary) {
        this.salary = salary;
    }

    public void getEmployeeDetails() {
        System.out.println("\nName: " + name);
        System.out.println("Salary: " + salary);
        System.out.println("Department: " + department);
        
        methodOverload mOver = new methodOverload();
        mOver.square(5);
        mOver.square(4.3);
    }
}