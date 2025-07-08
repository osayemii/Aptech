public class AnimalCat extends Animal {
    public AnimalCat(String name, int age) {
        super(name, age);
    }

    // Method for making sound
    @Override
    public void makeSound() {
        System.out.println("Meow");
    }

    // Additional method specific to Cat class
    public void scratch() {
        System.out.println(getName() + " is scratching the furniture!");
    }
    
}
