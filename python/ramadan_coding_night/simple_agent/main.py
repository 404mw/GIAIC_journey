import os
from dotenv import load_dotenv
from agents import Agent, Runner, AsyncOpenAI, OpenAIChatCompletionsModel

load_dotenv()

gemini_api_key = os.getenv("GEMINI_KEY")

provider = AsyncOpenAI(
    api_key=gemini_api_key,
    base_url="https://generativelanguage.googleapis.com/v1alpha1/openai",
)

model = OpenAIChatCompletionsModel(
    model="gemini-2.0-flash",
    openai_client=provider
)

agent = Agent(
    name="Greeting Agent",
    instructions="Your task is to greet the user with Salam when they say hi.",
    model=model,
)

user_question = input("What is your question? ")

result = Runner.run_sync(
    agent,
    user_question
)
print(result.final_output)