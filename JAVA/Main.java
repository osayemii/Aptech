abstract class Vehicle {
    protected String model;
    public Vehicle(String model) {
        this.model = model;
    }
    // Abstract method
    abstract void start();
    // Concrete method
    public void display() {
        System.out.println("Model: " + model);
    }

}

// Interface
interface Rentable {
    double calculateRentalPrice(int days);
}

// Concrete class implementing the abstract class and interface
class Car extends Vehicle implements Rentable {
    public Car(String model) {
        super(model);
    }
    @Override
    void start() {
        System.out.println("Car " + model + " is starting.");
    }
    @Override
    public double calculateRentalPrice(int days) {
        return days * 50.0; // Example rental price calculation
    }
}

public class Main {
    public static void main(String[] args) {
        Car car = new Car("Toyota Corolla");
        car.start();
        car.display();
        System.out.println("Rental price for 5 days: $" + car.calculateRentalPrice(5));
    }
}
