
public class Rectangle{
    private double length;
    private double width;

    public Rectangle(double length, double width) {
        this.length = length;
        this.width = width;
    }

    // Getter for length
    public double getLength() {
        return length;
    }
    // Setter for length
    public void setLength(double length) {
        this.length = length;
    }
    // Getter for width
    public double getWidth() {
        return width;
    }
    // Setter for width
    public void setWidth(double width) {
        this.width = width;
    }
    // Method to calculate area
    public double calculateArea() {
        return length * width;
    }
    // Method to calculate perimeter
    public double calculatePerimeter() {
        return 2 * (length + width);
    }
}