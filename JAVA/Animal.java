public class Animal {
    private String name;
    private int age;
    
    public Animal(String name, int age) {
        this.name = name;
        this.age = age;
    };

    public void makeSound() {
        System.out.println("Animal sound");
    }

    //GETTER AND SETTER FOR NAME
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }

    //GETTER AND SETTER FOR AGE
    public int getAge() {
        return age;
    }
    public void setAge(int age) {
        this.age = age;
    }
}
