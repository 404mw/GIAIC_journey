from random import randint

def main():

    rand_num: int = randint(1, 99)
    print('I am thinking of a number between 0 and 99')

    user_input: int = int(input('Enter a guess: '))
    
    while user_input != rand_num:
        if user_input > rand_num:
            print('Your guess is too High')
        else:
            print('Your guess is too Low')

        print()
        user_input: int = int(input('Enter a guess: '))
    print(f'You nailed it! The number was {rand_num}')


if __name__ == '__main__':
    main()