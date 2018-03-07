#!/bin/bash


curl "http://localhost:4741/change-password" \
  --include \
  --request PATCH \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}"\
  --data '{
    "passwords": {
      "old": "'"${OLD_PASSWORD}"'",
      "new": "'"${NEW_PASSWORD}"'"
    }
  }'

echo

# OLD_PASSSWORD='wallace' NEW_PASSWORD='wallace1' TOKEN='PUT SOMETHING HERE' sh changepw.sh

# NOT WORKING NEED HELP TODO
