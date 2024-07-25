equation = input(f"Enter equation ax + by = c: ")

a = ""
abc = []
match = ["x", "y", "z", "="]
# equation = equation.replace(" ", "")
i = 0
while i < len(equation):
    if equation[i] in match:
        abc.append(a)
        a = ""
        i += 1
        continue

    a += equation[i]
    i += 1
equation = equation.split("=")
abc.append(equation[1])

for part in abc:
    print(part)
