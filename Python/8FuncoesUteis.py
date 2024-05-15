cidade = "BaUrU"

# .upper()
# .lower()
print(cidade.upper()) # Aumenta todas as letras
print(cidade.lower()) # Diminui todas as letras

# .isupper() verifica se trodas sao maiusculas
# .islower()  verifica se trodas sao minusculas

print(cidade.isupper()) # retorna false pois a caracteres em minusculas
print(cidade.islower()) # retorna false pois a caracteres em Maiusculas

cidade = "BAURU"
print(cidade.isupper()) # agora retorna true
cidade = "bauru"
print(cidade.islower()) # agora retorna true



