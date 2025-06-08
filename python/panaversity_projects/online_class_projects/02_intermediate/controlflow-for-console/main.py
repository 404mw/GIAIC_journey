from random import randint

NUM_ROUNDS = 5

def get_user_guess() -> str:
    prompt_user = input("Do you think your number is higher or lower than the computer's?: ").lower()
    while prompt_user not in ('higher', 'lower'):
        print("Type 'higher' or 'lower' to proceed")
        prompt_user = input("Do you think your number is higher or lower than the computer's?: ").lower()
    return prompt_user

def play_round(round_number: int) -> bool:
    random_user = randint(1, 100)
    random_comp = randint(1, 100)

    print(f'Round {round_number}/{NUM_ROUNDS}')
    print(f'Your number is {random_user}')

    user_guess = get_user_guess()

    compare = random_comp - random_user

    if compare == 0:
        print(f"You lost since your number was neither higher nor lower from the computer's: {random_comp}")
        return False
    elif (user_guess == 'higher' and compare < 0) or (user_guess == 'lower' and compare > 0):
        print(f"You were right! The computer's number was {random_comp}")
        return True
    else:
        print(f"Aww, that's incorrect. The computer's number was {random_comp}")
        return False

def end_message(score: int) -> str:
    if score == NUM_ROUNDS:
        return 'Wow! You played perfectly!'
    elif score >= NUM_ROUNDS // 2:
        return 'Good job, you played really well!'
    else:
        return 'Better luck next time!'

def main():
    print("Welcome to the High-Low Game!")
    print('--------------------------------\n')

    score = 0
    for i in range(1, NUM_ROUNDS + 1):
        if play_round(i):
            score += 1
        print(f'Your score is now {score}\n')

    print(end_message(score))

if __name__ == "__main__":
    main()
