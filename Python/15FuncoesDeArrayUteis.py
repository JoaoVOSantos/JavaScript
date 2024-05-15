# index() 
lista = ["Joao", 18, 1.70, True, "SP"]
print(lista.index("Joao"))

# append()
lista.append("Trabalhando")
print(lista)

# insert()
lista.insert(1, "Vitor")
print(lista)

# extend()

lista2 =[ "empresa1", "empresa2"]
lista.extend(lista2)
print(lista)

# remove() - Remove um valor da lista 

lista.remove("Vitor")
lista.remove(18)


# count()
lista.insert(1, "Joao")

print(lista.count("Joao"))
print(lista.count("empresa"))
