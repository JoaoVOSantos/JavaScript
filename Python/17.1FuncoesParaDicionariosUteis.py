
conexao = {'ip': '192.168.0.1', 'porta': '80', 'user': 'admin', 'password': 1234}

print(conexao.keys())
print(conexao.values())
print(conexao.items())

print(conexao.get('ip', 'nao existe'))
print(conexao.get('usuario', 'nao existe'))

print('ip' in conexao)
print('usuario' in conexao)