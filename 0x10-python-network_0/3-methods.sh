#!/bin/bash
#Display all HTTP methods accepted by the server of a given URL
curl -silk -X OPTIONS "$1" | grep -oiE 'ALLOW: .+' | cut -d ' ' -f2-
