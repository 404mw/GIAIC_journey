MAX_TERM_VALUE : int = 10000

def main():
    cur_term: int = 0
    next_term: int = 1
    while cur_term <= MAX_TERM_VALUE:
        print(cur_term)
        new_term: int = cur_term + next_term
        cur_term = next_term
        next_term = new_term


if __name__ == '__main__':
    main()