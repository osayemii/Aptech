#include <stdio.h>

int main()
{
    int upperlimit;
    printf("Enter the upper limit: ");
    scanf("%d", &upperlimit);
    while (upperlimit % 2 == 0)
    {
        printf("Sum of even numbers: %d\n", upperlimit+(upperlimit-2));
    }
    
    return 0;
}
