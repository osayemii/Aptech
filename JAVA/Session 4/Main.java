public class Main {
    public static void main(String[] args) {
        Student student1 = new Student();
        student1.regNumber = 20250715;
        student1.getStudentDetails();

        Employee employee1 = new Employee("John Doe");
        employee1.setSalary(50000);
        employee1.getEmployeeDetails();

    }
}
