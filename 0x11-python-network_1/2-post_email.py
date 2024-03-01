#!/usr/bin/python3
"""
Script that takes in a URL and email, sends a POST request to the passed
URL with the email as a parameter, and displays the body of the response
(decoded in utf-8).
"""
from sys import argv
from urllib.parse import urlencode
from urllib.request import Request, urlopen

if __name__ == "__main__":
    url = argv[1]
    valve = {"email": argv[2]}
    data = urlencode(valve).encode("ascil")
    req = Request(url, data)

    with urlopen(req) as response:
        print(reponse.read().decode("utf-8", "replace"))
