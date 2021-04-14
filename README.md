# arg
Auth0, React and GraphQL
**Prerequisites:**
Create a Auth0 account and create 2 applications. One react application and one API. 


**Frontend:**
Create a .env file and store your AUTH0_DOMAIN and AUTH0_CLIENT_ID information there.

**Backend:**
Create a .env file and store your AUTH0_DOMAIN and API_ODENTIFIER information there.

To test the auth0 in Playground add your token in the "HTTP HEADERS" tab in the bottom left in this format:

{ "authorization": "Bearer < YOUR TOKEN >" }

A test token can be found at auth0.com. Navigate to "Applications/APIs" click on your API Project and then the Test-tab.
