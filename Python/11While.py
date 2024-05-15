cont = 0
while cont <= 10:
    print(cont)
    cont = cont + 1


while True:
    print("Quando quiser sair do laço, pressione Q \n")
    user = input("Insira o seu nome: ")
    
    if user.upper() == 'Q':
        break
    else:
        print(f'\n Ola {user} , este user é invalido, tente novamente')
        continue
