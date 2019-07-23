from random import randint
from time import sleep

opc = '' #Opção
most = '' #Mostrar
qtd = cont = contTemp = 0 #Quantidade, Contador, Contador temporário.
cartela = [] #Cartela
tabTemp = [] #Tabela temporária.

while True:

    pedra = randint(1, 99) # Gerar pedra aleatória.
    if pedra not in cartela: # Se a pedra não estiver faça...
        print('Pedra...   ', end=' ')

        sleep(1.5)
        print(pedra)
        cartela.append(pedra) # Inclua pedra na list da cartela
        qtd = len(cartela) # Tamanho da cartela
        
        #Condição de Saída-----------------------------------------------------
        opc = str(input('Deseja Continuar? [S/N] ')).strip().upper()[0]
        if opc == 'N':
            break
        
        #Condição para ver o progresso ---------------------------------------------
        most = str(input('Deseja ver as pedras cantadas? [S/N] ')).strip().upper()[0]
        if most == 'S':
            tabTemp.clear() #Limpar a lista anterior para não gerar valor duplicado.
            tabTemp = cartela[:]
            tabTemp.sort()
            
            #Laço do progresso---------------------------------------------------------------
            for p in tabTemp:
                contTemp += 1
                if contTemp % 10 == 0: # Se o número for dezena, imprima e depois pule uma linha.
                    print(f'[{p:^4}] \n')
                else:
                    print(f'[{p:^4}]', end=' ') # Se não, apenas imprima do lado
            
            print('\n')
            
            #Condição de Saída--------------------------------------------------------------------
            opc = str(input('Deseja continuar? [S/N] ')).strip().upper()[0]
            if opc == 'N':
                break

    #Condição do limite de saída----------------------------------------------------------
    if qtd > 98:
        break

#Saída-------------------------------------------------------------------------------------------
tabela = cartela[:]
tabela.sort()
for c in tabela:
    cont += 1
    if cont % 10 == 0:# Se for dezena, imprima e pule uma linha.
        print(f'[{c:^4}] \n')
    else:
        print(f'[{c:^4}]', end=' ') # Se não, imprima e continue na mesma linha.

print('\n')
