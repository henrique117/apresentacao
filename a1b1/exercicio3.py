print ("Informe três números diferentes para serem ordenados de forma crescente:")
h = 0
vetor = list(range(3))
while h < 3:
    vetor [h] = int(input('Informe um numero:'))
    h = h + 1
vetor.sort()
print('Os números ordenados de forma crescente correspondem a: ', vetor)