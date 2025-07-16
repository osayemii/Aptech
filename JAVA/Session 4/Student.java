public class Student {
    public String name, course;
    public int regNumber;
    {
        name = "Aptech Student";
        regNumber = 0000;
        course = "Tech Course";
    }

    public void getStudentDetails(){
        System.out.println("Name: "+name+ "\nRegNo: "+regNumber+"\nCourse: "+course);
    }
}
