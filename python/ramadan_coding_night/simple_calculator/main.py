import streamlit as st

def main():
    st.title("Simple Calculator")
    st.write("Enter two numbers and select an operation:")

    col1, col2 = st.columns(2)

    with col1:
        num1 = st.number_input("Enter First Number", value=0.0)

    with col2:
        num2 = st.number_input("Enter Second Number", value=0.0)

    operation = st.selectbox("Select Operation", ["Add (+)", "Subtract (-)", "Multiply (x)", "Divide (/)"])

    if st.button("Calculate"):
        try:
            if operation == "Add (+)":
                result = num1 + num2
                symbol = "+"
            elif operation == "Subtract (-)":
                result = num1 - num2
                symbol = "-"
            elif operation == "Multiply (x)":
                result = num1 * num2
                symbol = "x"
            else:
                if num2 == 0:
                    st.error("Error: Division by Zero")
                    return
                result = num1 / num2
                symbol = "/"

            st.success(f"Result: {num1} {symbol} {num2} = {result}")
            
        except Exception as e:
            st.error(f"Error: {str(e)}")

if __name__ == "__main__":
    main()