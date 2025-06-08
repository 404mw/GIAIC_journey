def main():
    user_input = input('Enter a number here: ')

    try:
        user_input = int(user_input)
        while user_input <= 100:
            user_input *= 2
            print(user_input)
    except:
        print(f'''😥 try again, '{user_input}' is not a valid number''')

if __name__ == '__main__':
    main()