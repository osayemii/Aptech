abstract class Shape {
    protected String name;
    public Shape(String name) {
        this.name = name;
    }
    abstract double calculateArea();
    public void describe() {
        System.out.println("This is a " + name + "with an area of " + calculateArea());
    }

    class Circle extends Shape {
        private double radius;

        public Circle(String name, double radius) {
            super(name);
            this.radius = radius;
        }

        @Override
        double calculateArea() {
            return Math.PI * radius * radius;
        }
    }

    class Rectangle extends Shape {
        private double length;
        private double width;

        public Rectangle(String name, double length, double width) {
            super(name);
            this.length = length;
            this.width = width;
        }

        @Override
        double calculateArea() {
            return length * width;
        }
    }
    public class main {
        
    }

}