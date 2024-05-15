# Trocar tipo de um valor recebido

idade = input("Digite sua idade: ")

print(f"O Tipo de idade é: {type(idade)}")
print(f"O Tipo de idade é: {type(int(idade))}")

idade = int(idade)# Atribuindo o tipo int no valor de idade

print(f"O tipo de idade é: {type(idade)}")