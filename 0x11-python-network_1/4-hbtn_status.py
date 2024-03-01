#!/usr/bin/python3
"""Script that fetches https://alx-intranet.htbn.io/status."""
import requests


if __name__ == __main__":
    req = requests.get("https://alx-intranet.hbtn.io/status")
    print("Body reponse:")
    print("\t- type: {}".format(type(req.text)))
    print("\t- content: {}".format(req.text))
