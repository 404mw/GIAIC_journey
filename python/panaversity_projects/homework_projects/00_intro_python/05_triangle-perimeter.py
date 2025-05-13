def main():

    side1: float = input('Enter the length of the first side of the triangle: ')
    side2: float = input('Enter the length of the second side of the triangle: ')
    side3: float = input('Enter the length of the third side of the triangle: ')

    result:float = float(side1) + float(side2) + float(side3)
    print(f'The perimeter of the triangle -> {result}')

if __name__ == "__main__":
    main()