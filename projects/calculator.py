# calculator 3rd adaptation

# addition function
def add(x, y):
    return x + y

# subtraction function
def subtract(x, y):
    return x - y

# multiplication function
def multiply(x, y):
    return x * y

# division function
def divide(x, y):
    return x / y

print("Operations:")
print("+ - * /")
print("")

while True:
    num1 = float(input("1st number: "))
    choice = input("Operation?: ")
    num2 = float(input("2nd number: "))

    if choice in ('+', '-', '*', '/'):
        if choice == '+':
            print(num1, "+", num2, "=", add(num1, num2))
        elif choice == '-':
            print(num1, "-", num2, "=", subtract(num1, num2))
        elif choice == '*':
            print(num1, "*", num2, "=", multiply(num1, num2))
        elif choice == '/':
            print(num1, "/", num2, "=", divide(num1, num2))

        next = input("Calculate again? (Y/N): ")
        if next == "N":
            break
        elif next == "n":
            break
        elif next == "Y":
            print(" ")
            print("Next Calculation...")
            print(" ")
        elif next == "y":
            print(" ")
            print("Next Calculation...")
            print(" ")
        else:
            print("Invalid input!")
            break
    else:
        print("Invalid input!")