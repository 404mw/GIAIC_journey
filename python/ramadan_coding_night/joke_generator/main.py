import streamlit as st
import requests

def get_random_joke():
    """Fetches a random joke from the Joke API"""
    try:
        response = requests.get("https://official-joke-api.appspot.com/random_joke")
        if response.status_code == 200:
            joke_data = response.json()
            return f"{joke_data['setup']} \n\n {joke_data['punchline']}"
        else:
            return "Failed to fetch a joke. Please try again later."
    except Exception as e:
        return f"An error occurred: {e}"
    
def main():
    st.title("Random Joke Generator")
    st.write("Click the button below to generate a random joke")

    if st.button("Generate"):
        joke = get_random_joke()
        st.success(joke)

    st.divider()

    st.markdown(
        """
        <div style="text-align: center;">
            <h2>Joke Generator</h2>
            <p>Click the button above to generate a random joke</p>
        </div>
        """,
        unsafe_allow_html=True
    )

if __name__ == "__main__":
    main()