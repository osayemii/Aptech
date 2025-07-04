public class Format {
    public static void main(String[] args) {
        int age = 25;
        double height = 5.9;
        char grade = 'A';
        String name = "John Doe";

        // FORMAT PRINTING INTEGER
        System.out.printf("Age: %d\n", age);
        // FORMAT PRINTING DOUBLE/FLOATS
        System.out.printf("Height: %.1f\n", height);
        // FORMAT PRINTING STRINGS
        System.out.printf("Name: %s\n", name);
        // FORMAT PRINTING CHAR
        System.out.printf("Character: %c\n", grade);
    }
}
