# import random

# Total_GUESS = 2

# POPULATION = {
#     "Nigeria": "280",
#     "United States": "570",
#     "United Kingdom": "410",
#     "France": "150",
#     "Germany": "350",    
# }
# def main():
#     print("Welcome to the Guessing Game!")
#     start_game()

# def start_game():
#     country_keys = list(POPULATION.keys())
#     country_keys_string = ", ".join(country_keys)
#     random_country_key = random.choice(country_keys)

#     print (f"""
#            i'm thinking of a country from the following list:
#            {country_keys_string}, guess the population of the country, You have {Total_GUESS} guesses.
#            """)
#     for guess in range(Total_GUESS):
#         print(f"you have {Total_GUESS - guess} guesses left")
#         process_user_guess(random_country_key, guess)
        
#     while True:
#         guess_country = input("what country am i thinking of? ")


# import requests
# r = requests.get('https://portal.byupathway.edu')
# print(r.text)

from fastapi import FastAPI

# Create the FastAPI app
app = FastAPI()

# Define a simple GET endpoint
@app.get("/")
def read_root():
    return {"message": "Hello, FastAPI!"}

# Define a GET endpoint with a parameter
@app.get("/items/{item_id}")
def read_item(item_id: int, query_param: str = None):
    return {"item_id": item_id, "query_param": query_param}