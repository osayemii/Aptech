public class AnimalDog extends Animal {
    public AnimalDog(String name, int age) {
        super(name, age);
    }
    @Override
    public void makeSound() {
        System.out.println("Bark");
    }

    // Additional method specific to Dog class
    public void fetch() {
        System.out.println(getName() + " is fetching the ball!");
    }
}
