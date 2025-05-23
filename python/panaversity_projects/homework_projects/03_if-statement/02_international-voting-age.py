VOTING_AGES = {
    "Peturksbouipo": 16,
    "Stanlau": 25,
    "Mayengua": 48
}

def main():
    user_age = int(input("How old are you? "))

    for country, age in VOTING_AGES.items():
        if user_age >= age:
            print(f"You can vote in {country} where the voting age is {age}.")
        else:
            print(f"You cannot vote in {country} where the voting age is {age}.")

if __name__ == '__main__':
    main()
