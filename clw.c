#include <stdio.h>

int main() {
    float constPi = 3.142;
    float radius;
    printf("Enter radius of circle: ");
    scanf("%f", &radius);
    float area = constPi * radius * radius;
    printf("Area of circle = Pi*rad*rad = %.2f\n", area);
    return 0;
}   