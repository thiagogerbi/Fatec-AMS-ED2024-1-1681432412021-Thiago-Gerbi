#include <stdio.h>
#include <stdlib.h>

struct lista {
  int numero;
  struct lista *prox;
};
typedef struct lista Lista;
/* função de criação : retorna uma lista vazia*/
Lista *lst_cria(void) {
  printf("CONTROLE DE PRODUTOS\n");
  printf("-------------------------\n");
  return NULL;
};
/*inserção no início: retorna a lista atualizada*/
Lista *lst_insere(Lista *l, int i) {
  Lista *novo = (Lista *)malloc(sizeof(Lista));
  novo->numero = i;
  novo->prox = l;
  return novo;
}
void lst_imprime(Lista *l) {
  printf("CODIGOS DE PRODUTOS GRAVADOS\n");
  printf("-------------------------\n");
  Lista *p;
  for (p = l; p != NULL; p = p->prox)
    printf("%d\n", p->numero);
}

Lista *lst_deleta(Lista **l, int v) {
  Lista *p = *l;
  Lista *ant = NULL;
  if (p == NULL) {
    printf("Lista vazia\n");
    return NULL;
  }
  if (p->numero == v) {
    *l = p->prox;
    printf("Apagando %d\n", p->numero);
    free(p);
    return *l;
  }
  while (p != NULL) {
    if (p->numero == v) {
      ant->prox = p->prox;
      printf("Apagando %d\n", p->numero);
      free(p);
      return *l;
    }
    ant = p;
    p = p->prox;
  }
  printf("Produto não encontrado para apagar\n");
  return *l;
}
Lista *lst_busca(Lista *l, int v) {
  Lista *p;
  for (p = l; p != NULL; p = p->prox) {
    if (p->numero == v) {
      printf("Encontrou  : %d\n", v);
      return p;
    } else {
      printf("Nao encontrou  : %d\n", v);
      return l;
    }
  }
  return 0;
}

void lst_limpa(Lista *l) {
  int t;
  Lista *p = l;
  while (p != NULL) {
    Lista *t = p->prox; /* guarda refereência para Próximo Elemento */
    free(p);            /* libera a memória apontada por p*/
    p = t;              /* aponta p para o próximo*/
  }
}
  int main(void) {
    Lista *l;
    int codigo;
    int escolha;

    l = lst_cria();

    do {
      printf("\n");
      printf("1 - Inserir código do produto\n");
      printf("2 - Imprimir lista de produtos\n");
      printf("3 - Apagar produto\n");
      printf("4 - Buscar produto\n");
      printf("5 - Limpar todos os dados\n");
      printf("6 - Sair\n");

      scanf("%i", &escolha);

      switch (escolha) {
      case 1:
        printf("Digite o código do produto:\n");
        scanf("%i", &codigo);
        l = lst_insere(l, codigo);
        break;
      case 2:
        lst_imprime(l);
        break;
      case 3:
        printf("Digite o código do produto que quer apagar:\n");
        scanf("%i", &codigo);
        l = lst_deleta(&l, codigo);
        break;
      case 4:
        printf("Digite o código do produto que quer buscar:\n");
        scanf("%i", &codigo);
        l = lst_busca(l, codigo);
        break;
      case 5:
        lst_limpa(l);
        printf("TODOS OS CÓDIGOS APAGADOS COM SUCESSO!!");
        break;
      }

    } while (escolha != 6);
    printf("Saindo do programa...\n");
    return 0;
  }