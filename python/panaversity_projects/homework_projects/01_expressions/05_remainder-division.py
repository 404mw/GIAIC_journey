def main():

    dividend: int = int(input('Please enter an integer to be divided: '))
    divisor: int = int(input('Please enter an integer to divide by: '))

    quotient: str = str(dividend // divisor)
    remainder: str = str(dividend % divisor)

    print(f'\nThe quotient of {dividend} divided by {divisor} is: {quotient} \nand the remainder is: {remainder}')

if __name__ == '__main__':
    main()