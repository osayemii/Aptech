#include <stdio.h>

// int main() {
//     float constPi = 3.142;
//     float radius;
//     printf("Enter radius of circle: ");
//     scanf("%f", &radius);
//     float area = constPi * radius * radius;
//     printf("Area of circle = Pi*rad*rad = %.2f\n", area);
//     return 0;
// }

// void bitwiseAndResult(int a, int b){
//     printf("And Value: %d , %d = %d", a, b, a);
// }
// int main(){
//     bitwiseAndResult(4,6);
// }

// void applyAndTOEach(int arr[], int n, int mask){
//     for (int i = 0; i < n; i++)
//     {
//         printf("%d & %d = %d\n", arr[i], mask, arr[i] & mask);
//     }
// }

// int main(){
//     int arr[] = {15, 8, 6, 2};
//     applyAndTOEach(arr, 4, 7);
//     // return 0;
// }

int main()
{
    int num = 3;
    // float num1 = 3;
    float result = num%=6;
    printf("result %.2f",result);
    return 0;
}
