#!/bin/bash

curl "http://localhost:4741/sign-up" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --data '{
    "credentials": {
      "email": "'"${EMAIL}"'",
      "password": "'"${PASSWORD}"'",
      "password_confirmation": "'"${PASSWORD_CONFIRMATION}"'"
    }
  }'

echo


# EMAIL='william@sailing.co.za' PASSWORD='wallace' PASSWORD_CONFIRMAtiON='wallace' sh signup.sh
# working!
