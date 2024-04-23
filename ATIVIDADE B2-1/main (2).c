#include <ctype.h>
#include <stdio.h>
#include <stdlib.h>

#define MAX_SIZE 100

typedef struct {
  double items[MAX_SIZE];
  int top;
} Stack;

void initialize(Stack *s) { s->top = -1; }

int isEmpty(Stack *s) { return s->top == -1; }

int isFull(Stack *s) { return s->top == MAX_SIZE - 1; }

void push(Stack *s, double value) {
  if (isFull(s)) {
    printf("Pilha cheia!\n");
    exit(EXIT_FAILURE);
  }
  s->items[++(s->top)] = value;
}

double pop(Stack *s) {
  if (isEmpty(s)) {
    printf("Pilha vazia!\n");
    exit(EXIT_FAILURE);
  }
  return s->items[(s->top)--];
}

double executeOperation(double operand1, double operand2, char operator) {
  switch (operator) {
  case '+':
    return operand1 + operand2;
  case '-':
    return operand1 - operand2;
  case '*':
    return operand1 * operand2;
  case '/':
    if (operand2 == 0) {
      printf("Divisão por zero!\n");
      exit(EXIT_FAILURE);
    }
    return operand1 / operand2;
  default:
    printf("Operador inválido!\n");
    exit(EXIT_FAILURE);
  }
}

int main() {
  Stack stack;
  initialize(&stack);

  char input[100];
  printf("Digite a expressao RPN: ");
  fgets(input, sizeof(input), stdin);

  int i = 0;
  while (input[i] != '\0') {
    if (isdigit(input[i])) {
      double number;
      sscanf(&input[i], "%lf", &number);
      push(&stack, number);

      while (isdigit(input[i]) || input[i] == '.') {
        i++;
      }
    } else if (input[i] == '+' || input[i] == '-' || input[i] == '*' ||
               input[i] == '/') {
      double operand2 = pop(&stack);
      double operand1 = pop(&stack);
      double result = executeOperation(operand1, operand2, input[i]);
      push(&stack, result);
      i++;
    } else if (input[i] == ' ') {
      i++;
    } else if (input[i] == '\n') {
      break;
    } else {
      printf("Caractere inválido!\n");
      exit(EXIT_FAILURE);
    }
  }

  if (stack.top != 0) {
    printf("Expressao invalida!\n");
    exit(EXIT_FAILURE);
  }

  double finalResult = pop(&stack);
  printf("Resultado: %.2lf\n", finalResult);

  return 0;
}