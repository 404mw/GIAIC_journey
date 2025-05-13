import random


def roll():
    dice1 = random.randint(1, 6)
    dice2 = random.randint(1, 6)

    result = dice1 + dice2
    print(result)


def main():
    for i in range(3):
        roll()



if __name__ == '__main__':
    main()