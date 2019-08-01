'''
Bingo.
Created by Renan Souza on 08/01/19.
Copyright © 2019 All right reserved.
'''

from random import randint
from time import sleep

cartela = []
pedra = cont = 0

def linha():
    print('--' * 30)

while True:

    pedra = randint(1, 99)
    if pedra not in cartela:
        cartela.append(pedra)
        print('Pedra... ', end='', flush=True)
        sleep(1)
        print(pedra)
    
    if len(cartela) == 99:
        break

    mostrar = str(input('Deseja ver pedras cantadas? [S/N] ')).strip().upper()[0]
    if mostrar == 'S':
        contT = 0
        tabela = cartela[:]
        tabela.sort()

        linha()
        for c in tabela:
            contT += 1
            if contT % 10 == 0:
                print(f'{c :^4}\n')
            else:
                print(f'{c :^4}', end='')
        print()
        linha()
        tabela.clear()


    #Exit Condition-------------------------------------------
    opc = str(input('Deseja Continuar? [S/N] ')).strip().upper()[0]
    if opc == 'N':
        break


linha()
cartela.sort()
for c in cartela:
    cont += 1
    if cont % 10 == 0:
        print(f'{c :^4}\n')
    else:
        print(f'{c :^4}', end='')

print()
linha()
