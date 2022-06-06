def binary_converter(string):
    for character in string:
        print(bin(ord(character))[2:].zfill(8))

print("Welcome to my text to binary converter!")

while True:
    text = input("Enter text: ")
    print("Binary code:")
    binary_converter(text)