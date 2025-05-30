def user_input():

    num_list: list = []
    while True:
        num: int = input("Enter a number: ")
        if num == "":
            break
        num_list.append(int(num))
    return num_list

def count_nums(num_list):
    num_dict: dict = {}
    for num in num_list:
        if num not in num_dict:
            num_dict[num] = 1
        else:
            num_dict[num] += 1
    return num_dict

def main():
    num_list: list = user_input()
    num_dict: dict = count_nums(num_list)

    for num in num_dict:
        print(f"{num} appeared {num_dict[num]} times")

if __name__ == "__main__":
    main()