public class Car {
    // Fields
    String brand;
    int speed;

    // Method
    public void display() {
        System.out.println("Brand: "+ brand + ", Speed: "+ speed + "km/h");
    }

    // Main method for testing
    public static void main(String[] args) {
        Car car1 = new Car();
        car1.brand = "Toyota";
        car1.speed = 120;
        car1.display();

        Car car2 = new Car();
        car2.brand = "Lexus";
        car2.speed = 150;
        car2.display();
    }
}
