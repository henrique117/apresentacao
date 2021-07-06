p = str(input('Informe uma palavra: '))
c = (p[::-1])
if p == c:
    print('Esta palavra é considerada um palíndromo')
else:
    print('Esta palavra não é considerada um palíndromo')