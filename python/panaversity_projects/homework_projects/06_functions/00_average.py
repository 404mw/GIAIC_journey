def average(a: float, b: float) -> float:
    sum = a + b
    avg = sum / 2
    return avg

def main():
    num1 = float(input('Enter your first number: '))
    num2 = float(input('Enter your second number: '))

    print(average(num1, num2))

if __name__ == '__main__':
    main()