public class Employee {
    protected String name;
    protected int id;

    public Employee(String name, int id){
        this.name = name;
        this.id = id;
    }

    public double calculateSalary() {
        return 0.0;
    }

    public void display() {
        System.out.println("Name: "+ name +", ID: "+ id +", Salary: $"+ calculateSalary());
    }
}