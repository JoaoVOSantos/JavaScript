# Tuplas nao sao possiveis de alterar os valores diretamente
# Tuplas sao imutaveis


tupla1 = ('ITE', 70)
print(type(tupla1))

# Como mudar o valor de uma tupla
# Suponhamos entao uma tupla

Cliente = ('Joao', 18, 'Paulistania', 'Estagia')
print(Cliente)
print(type(Cliente))

Cliente[1] = 19 # nao é possivel alterar desse jeito
