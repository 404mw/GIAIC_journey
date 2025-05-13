def main():

    num1 :str = input('Enter first number: ')
    num1 = int(num1)
    num2 :str = input('Enter second number: ')
    num2 = int(num2)

    result = num1 + num2
    print(f'Sum of {num1} and {num2} -> {result}')


if __name__ == '__main__':
    main()