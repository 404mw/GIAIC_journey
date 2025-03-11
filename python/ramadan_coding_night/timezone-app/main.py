import streamlit as st
from datetime import datetime
from zoneinfo import ZoneInfo

TIME_ZONE = [
    "UTC",
    "Asia/Karachi",
    "Asia/Kolkata",
    "Asia/Shanghai",
    "Asia/Hong_Kong",
    "Asia/Tokyo",
    "Asia/Seoul",
    "America/New_York",
    "America/Chicago",
    "America/Los_Angeles",
    "America/Toronto",
    "America/Mexico_City",
    "America/Sao_Paulo",
    "Europe/London",
    "Europe/Paris",
    "Europe/Berlin",
    "Europe/Rome",
    "Europe/Madrid",
    "Europe/Stockholm",
    "Australia/Sydney",
    "Australia/Brisbane",
    "Australia/Perth",
    "Australia/Adelaide",
    "Australia/Melbourne",
    "Australia/Canberra",
    "Pacific/Auckland",
    "Pacific/Honolulu",
    "Pacific/Guam",
    "Pacific/Tarawa",
    "Pacific/Majuro",
]

st.title("Timezone App")
selected_timezone = st.multiselect("Select Timezone", TIME_ZONE, default=["UTC","Asia/Karachi"])

st.subheader("Selected Timezones")
for tz in selected_timezone:
    current_time = datetime.now(ZoneInfo(tz)).strftime("%d-%m-%y %I %H:%M:%S %p")
    st.write(f"{tz}: {current_time}")

st.subheader("Convert Time Between Timezones")
current_time = st.time_input("Current Time", value=datetime.now().time())
from_tz = st.selectbox("From timezone", TIME_ZONE, index=0)
to_tz = st.selectbox("To Timezone", TIME_ZONE, index=1)
if st.button("Convert Time"):
    dt = datetime.combine(datetime.today(), current_time, tzinfo=ZoneInfo(from_tz))
    converted_time = dt.astimezone(ZoneInfo(to_tz)).strftime("%d-%m-%y %I %H:%M:%S %p")
    st.success(f"Converted Time in {to_tz}: {converted_time}")
