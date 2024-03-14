#include <stdio.h>

float addDesconto (float *valor, float *desconto){
  float valorFinal = *valor - *desconto;
  printf("Valor final: R$%2.f", valorFinal);
  return 0;
}

int main(void) {
  float desconto;
  int escolha;
  float valorCelular;
  float valorTablet;
  float valorComputador;
  float valorFoneBluetooth;
  

  printf("Os produtos disponíveis são:\n");
  printf("1 - Celular\n");
  printf("2 - Tablet\n");
  printf("3 - Computador\n");
  printf("4 - Fone Bluetooth\n");
  
  printf("Escolha um produto: ");
  scanf("%i", &escolha);

  printf("Informe o valor do desconto: ");
  scanf("%f", &desconto);

  

  printf("O valor do desconto é: R$%2.f\n", desconto);

  valorCelular = 3000;
  valorTablet = 700;
  valorComputador = 5000;
  valorFoneBluetooth = 250;

  

  if (escolha == 1) {
    printf("Valor do celular Sem Desconto: R$%.2f\n",valorCelular);
    addDesconto(&valorCelular, &desconto);
  }
  else if (escolha == 2) {
    printf("Valor do Tablet Sem Desconto: R$%.2f\n",valorTablet);
    addDesconto(&valorTablet, &desconto);
  }
  else if (escolha == 3) {
    printf("Valor do Computador Sem Desconto: R$%.2f\n",valorComputador);
    addDesconto(&valorComputador, &desconto);
  }
  else {
    printf("Valor do Fone Sem Desconto: R$%.2f\n", valorFoneBluetooth);
    addDesconto(&valorFoneBluetooth, &desconto);
  };

  
  
  getchar();
  return 0;
}