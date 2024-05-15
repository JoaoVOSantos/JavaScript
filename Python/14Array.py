lista1 = list()
lista2 = ["Joao", 18, 1.70, True, "SP"]
print(type(lista1))
print(type(lista2))

if lista2[3] == True:
    lista2[3] = "Vivo"
else:
    lista2[3] = "Morto"
print(f"Ola {lista2[0]} sua idade é {lista2[1]} e sua altura é {lista2[2]} seu estado é {lista2[4]} e vc esta {lista2[3]}")