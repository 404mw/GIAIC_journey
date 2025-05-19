import random

def main():

    dice1: int = random.randint(1, 6)
    dice2: int = random.randint(1, 6)

    total: str = str(dice1 + dice2)

    print(f'Dice 1 -> {dice1} \nDice 2 -> {dice2} \n\nTotal: {total}')

if __name__ == '__main__':
    main()