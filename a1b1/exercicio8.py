n = int(input("Informe um número para que se calcule o n-ésimo termo da sequência de Fibonacci: "))
tx=1
ty=1
if (n==1) or (n==2):
    print("1")
else:
    count=3
    while count <= n:
        t = tx + ty
        ty = tx
        tx = t
        count += 1
    print (t)