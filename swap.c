#include <stdio.h>

void swap(int *x, int *y) {
    int temp;
    temp = *x; // Store the value pointed by x in temp
    *x = *y;   // Assign the value pointed by y to the location pointed by x
    *y = temp; // Assign the value of temp to the location pointed by y
}

int main()
{
    int a = 5, b = 10;
    printf("Before swap: a = %d, b = %d\n", a, b);

    swap(&a, &b); // Pass the addresses of a and b to the swap function

    printf("After swap: a = %d, b = %d\n", a, b); // Print values after swap
}