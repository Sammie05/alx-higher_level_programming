#!/bin/bash
# Sends a POST request to a URL with parameters and displays the body of the response
curl -sX POST -d "email=test@gmail.com&subject=1 will always be here for PLD" "$1"
