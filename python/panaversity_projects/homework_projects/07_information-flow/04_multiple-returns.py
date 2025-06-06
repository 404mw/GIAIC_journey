def get_user_data():
    fname: str = input('Enter your first name: ')
    lname: str = input('Enter your last name: ')
    email: str = input('Enter your Email name: ')

    return fname, lname, email


def main():
    result = get_user_data()
    print(f'Recieved User Data: {result}')


if __name__ == "__main__":
    main()