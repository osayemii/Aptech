#include <stdio.h>

// int main()
// {
//     int i=1, sum=0;
//     while (i <= 5)
//     {
//         printf("i %d + sum %d = %d \n", i, sum, sum + i);
//         sum += i;
//         i++;
//     }
//     printf("The sum of numbers from 1 to 5 = %d", sum);
//     return 0;
// }

// int main()
// {
//     int num;
//     do
//     {
//         printf("Please enter a positive number: ");
//         scanf("%d", &num);
//     } while (num <= 0);
//     printf("You've entered: %d\n", num);
//     return 0;
// }

// int main()
// {
//     int n = 5;
//     for (int i = 0; i < 10; i++)
//     {
//         printf("%d x %d = %d\n", n, i+1, n*(i+1));
//     }
    
//     return 0;
// }

// int main()
// {
//     int n = 5;
//     for (int i = 0; i < 10; i++)
//     {
//         if (i % 2 == 0)
//         {
//             printf("%d is Even\n", i);
//         }
//         else
//         {
//             printf("%d is Odd\n", i);
//         }
        
//         // printf("%d x %d = %d\n", n, i+1, n*(i+1));
//     }
    
//     return 0;
// }

// int main()
// {
//     int n = 5;
//     for (int i = 0; i < 10; i++)
//     {
//         printf("%d x %d = %d\n", n, i+1, n*(i+1));
//     }
    
//     return 0;
// }

// int main()
// {
//     int n = 5;
//     for (int i = 0; i < 10; i++)
//     {
//         if (i % 2 != 0)
//         {
//             printf("We don't do ODDS here!!!.\n");
//             continue;
//         }
//         if (i == 6)
//         {
//             printf("Ohh nightmare!!! I is 6\n");
//             break;
//         }
        
//         printf("Cool we have a golden number !!!\n");
//     }
    
//     return 0;
// }

int main(int argc, char const *argv[])
{
    int num;
    printf("Input a number: ");
    scanf("%d", &num);
    for (int i = 1; i < 2; i++)
    {
        if (num >= 1)
        {
            printf("%d Positive\n", num);
        }
        else if (num <= -1)
        {
            printf("%d Negative\n", num);
        } else
        {
            printf("%d Zero\n", num);
        }
        
        
    }
    
    return 0;
}
