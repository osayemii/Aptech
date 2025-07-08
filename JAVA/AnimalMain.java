public class AnimalMain {
    public static void main(String[] args) {
        // Create instances of Dog and Cat
        AnimalDog dog = new AnimalDog("Buddy", 3);
        AnimalCat cat = new AnimalCat("Whiskers", 2);

        // Call methods on Dog instance
        dog.makeSound(); // Outputs: Bark
        dog.fetch(); // Outputs: Buddy is fetching the ball!

        // Call methods on Cat instance
        cat.makeSound(); // Outputs: Meow
        cat.scratch(); // Outputs: Whiskers is scratching the furniture!
    }
}
