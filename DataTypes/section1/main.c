#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <stdbool.h>
#include <math.h>

// 1
// int main() {
//     int age = 25;
//     unsigned int count = 100;
//     printf("Age: %d, Count: %u\n", age, count);
//     return 0;
// }

// 2
// int main() {
//     int Temperature = -10;
//     unsigned int Score = 85;
//     int sumed = Temperature + Score;
//     unsigned int large = 4000000000;
//     printf("%u\n", sumed);
//     printf("%u", large);
//     return 0;
// }

// 3
// int main() {
//     float dis = 0.15;
//     double distance = 1234.56789;
//     double sum = dis * distance;
//     printf("%.2lf\n", sum);
//     return 0;
// }

// 4
// int main() {
//     char initia = 'Z';
//     char initial = 'B';
//     printf("Character Value: %c, ASCII Value: %d\n", initia, initia);
//     printf("2nd Character Value: %c, 2nd ASCII Value: %d\n", initial, initial);
//     return 0;
// }

// 5
// int main() {
//     char greeting[] = "Hello, World!";
//     printf("%d\n", greeting);
//     printf("Greeting: %s\n", greeting);
//     printf("Length: %zu\n", strlen(greeting));
//     return 0;
// }

// 6
// int main () {
//     char userName[50] = "danielosayemi"; // Allocate enough space for concatenation
//     char email[] = "@gmail.com";
//     printf("Email Address: %s\n", strcat(userName, email));
// }

// 7
// int boolClass(); // Function declaration

// int main() {
//     boolClass();
//     return 0;
// }

// int boolClass() {
//     bool isUserAdmin = 1;

//     if (isUserAdmin)
//     {
//         printf("Access Denied\n");
//     }
//     else
//     {
//         printf("Access Granted\n");
//     }
// }

// 8
// int main() {
//     bool isLoggedIn = true;
//     int hasPermission = 1;
//     if (isLoggedIn && hasPermission) {
//         printf("Access Granted\n");
//     } else if (!isLoggedIn && !hasPermission) {
//         printf("Access Denied\n");
//     } else if (!isLoggedIn || !hasPermission) {
//         printf("Partial Access\n");
//     } else
//     {
//         printf("Unknown Access Level\n");
//     }
// }

// 9
// int main() {
//     int a = 0;
//     int b = 0;
//     int c = 0;
//     double sRoot = sqrt(b * b - 4 * a * c);
//     if (sRoot === NULL) {
//         printf("No real roots");
//     } else {
//         char x1 = (-(b) + sRoot) / (2 * a);
//         char x2 = (-(b) - sRoot) / (2 * a);
//         printf(x1, x2) ;
//     }
// }

// 10
// int main()
// {
//     int* ptr = NULL;
//     ptr = (int*)malloc(sizeof(int));
//     if (ptr != NULL)
//     {
//         *ptr = 42;
//         printf("Value: %d\n", *ptr);
//         free(ptr);
//     } else
//     {
//         printf("Memory allocation failed");
//     }
//     return 0;
// }

// 11
// int main()
// {
//     char* any = NULL;
//     any = (char*)malloc(sizeof(char));
//     if (any != NULL)
//     {
//         *any = "Hello World";
//         printf("Name: %d\n", *any); // Dereference the pointer to print the character
//         free(any);
//     } 
//     else
//     {
//         printf("Access Denied\n"); // Remove %c as no character is being printed
//     }
//     return 0; // Add return statement for proper program termination
// }

// 12
// int main()
// {
//     int x;
//     printf("Uninitilaised x: %d\n", x);
// }

// 13
// int main(int argc, char const *argv[])
// {
//     int age;
//     printf("Please how old are you? ");
//     scanf("%d", &age);

//     printf("You are %d years old", age);
// }

// 14
// void calculateQuad() {
//     double a, b, c, solution1, solution2, discriminant;
//     // Get the coefficient of x^2
//     printf("Enter the  coefficient if X^2\n");
//     scanf("%d", &a);

//     // Get the coefficient of X
//     printf("Enter the  coefficient if X\n");
//     scanf("%d", &b);

//     // Get the constant term
//     printf("Enter the  constamnt term\n");
//     scanf("hello%d", &c);

//     printf("The params are: a = %d, b = %d, c = %d", a, b, c);
//     discriminant = pow(b, 2) - (4 * a * c);
// }

// int main() {
//     calculateQuad();
//     return 0;
// }

// 15
// int main()
// {
//     float sum = 0.0;
//     float temperature[4] = {23.5, 25.0, 22.8, 24.1};
//     int i;
//     while (i<=3)
//     {
//         printf("Temp %d = %.2f\n" , i+1,temperature[i]);
//         sum += temperature[i];
//         i++;
//     }
//     printf("The average temperature = %.2f\n", sum/4);
//     return 0;
// }

// 16
// int main()
// {
//     char name;
//     char* mainName = &name;
//     *mainName = "D";
//     printf("Name: %s\n", mainName);
//     printf("Address: %p\n", (void*)mainName);
//     return 0;
// }

// 17
// struct Student
// {
//     int id;
//     char name[50];
//     float gpa;
// };
// int main()
// {
//     struct Student first = {1, "Daniel", 3.5};
//     struct Student second = {2, "John", 3.8};

//     printf("ID: %d, Name: %s, GPA: %.2f\n", first.id, first.name, first.gpa);
//     printf("ID: %d, Name: %s, GPA: %.2f\n", second.id, second.name, second.gpa);
//     return 0;
// }

// 18
union MyIdentity {
    char name[50];
    int idNumber;
    int phoneNumber;
};
int main() {
    union MyIdentity identity;
    
    strcpy(identity.name, "Daniel Osayemi");
    printf("Name: %s\n", identity.name);

    identity.idNumber = 123456789;
    printf("ID Number: %d\n", identity.idNumber);

    identity.phoneNumber = 987654321;
    printf("Phone Number: %d\n", identity.phoneNumber);
    return 0;
}