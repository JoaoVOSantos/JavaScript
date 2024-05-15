# join() - Adiciona uma string entre cada elemento da lista

lista = ['a', 'b', 'c']
print(' : '.join(lista))

# split() - dividir string e gerar lista

StringParaLista = "Ola Mundo Tudo Bem com vc, Estou estudando python"
print(StringParaLista.split(" ")[5])

# strip() - remove espaços ou string em ambos os lados

String = "    Ola Mundo     estou estudando           s      "
print(String.strip())

# replace() - substitui valores.

StringErrada = "Meu nome é jooa e eu gosto de jogar futabol"
StringErrada = StringErrada.replace("jooa", "joao" )
StringErrada = StringErrada.replace("futabol", "futebol")
print(StringErrada)
