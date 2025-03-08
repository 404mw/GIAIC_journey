import streamlit as st
import random 
import time
import requests

st.title("Money Making Machine")

def gen_money():
    return random.randint(1, 9999)

st.subheader("Instant Cash Generator")
if st.button("Generate Money"):
    st.write("Counting Money...")
    time.sleep(1)
    amount = gen_money()
    st.success(f"You've made ${amount}!")


def fetch_side_hustle():
    try:
        response = requests.get("http://127.0.0.1:8000/side_hustles")
        if response.status_code == 200:
            hustles = response.json()
            return hustles["side_hustle"]
        else:
            return ("Freelancing")
    except:
        return ("Something went wrong!")
    
st.subheader("Side Hustle Ideas")
if st.button("Generate Side Hustle"):
    idea = fetch_side_hustle()
    st.success(idea)


def fetch_money_quotes():
    try:
        response = requests.get("http://127.0.0.1:8000/money_quotes")
        if response.status_code == 200:
            quote = response.json()
            return quote["money_quote"]
        else:
            return ("Freelancing")
    except:
        return ("Something went wrong!")
    
st.subheader("Money Qoutes")
if st.button("Get Inspired"):
    idea = fetch_money_quotes()
    st.info(idea) 