#include <stdio.h>

void ordenar(int numeroInteiros[], int n) {
    int i, j, temp;
    for (i = 0; i < n; i++) {
        for (j = 0; j < n; j++) {
            if (numeroInteiros[j] > numeroInteiros[j+1]) {
                temp = numeroInteiros[j];
                  numeroInteiros[j] = numeroInteiros[j+1];
                  numeroInteiros[j+1] = temp;
            }
        }
    }
}

int main() {
    int numeroInteiros[5];
    int i;

    printf("Digite 5 numeros inteiros:\n");
    for (i = 0; i < 5; i++) {
        scanf("%d", &numeroInteiros[i]);
    }

    ordenar(numeroInteiros, 5);

    printf("Numeros em ordem crescente:\n");
    for (i = 0; i < 5; i++) {
        printf("%d ", numeroInteiros[i]);
    }
    printf("\n");

    return 0;
}
