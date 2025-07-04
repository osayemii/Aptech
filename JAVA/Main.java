public class Main {
    public static void main(String[] args) {
        // LOGICAL
        Boolean x = true, y = false;
        System.out.println(x && y);

        // ASSIGNMENT OPERATOR
        int c =5;
        c += 3; 
        System.out.printf("Answer: %d\n", c);

        // BITWISE convert to binary
        int a = 5; // 0101
        int b = 3; // 0011
                   // 0001
        System.out.printf("Bitwise: %d\n", a & b);

        // TERNARY
        int d = 12;
        int e = 10;
        int max = (d > e) ? d : e;
        System.out.printf("Max: %d\n", max);

        // TYPE CASTING
        // Implicit
        int i = 100;
        double u = i;
        System.out.println("Implicit: " + u);

        // Explicit
        double k = 3.99;
        int l = (int)k;
        System.out.println("Explicit: "+ l);
    }
}
