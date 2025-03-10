#Chat Application
This project is a web-based chat application developed using React. It allows users to engage in real-time conversations with a user-friendly interface. The application is deployed and accessible at: 

## Live https://chat-rho-bay.vercel.app/

Features
Real-Time Messaging: Users can send and receive messages instantly.
User-Friendly Interface: Clean and intuitive design for seamless user experience.
Contact List: Displays a list of contacts with recent messages and timestamps.
Responsive Design: Optimized for various screen sizes and devices.
Components Overview
1. MessageBox
Handles the display of messages and the input field for sending new messages.

Props:

handleKey: Function to handle key press events.
handleDelete: Function to delete a specific message.
chatUpdate: Function to update the chat with a new message.
id: Unique identifier for the chat session.
name: Name of the contact.
image: URL of the contact's profile image.
data: Array containing the chat messages.
State:

message: Stores the current input message.
Functions:

handleMessage: Sends the current message and updates the chat.
2. ContactPerson
Displays individual contact information in the sidebar.

Props:
setId: Function to set the current chat session ID.
id: Unique identifier for the contact.
name: Name of the contact.
image: URL of the contact's profile image.
chat: Preview of the most recent chat message.
time: Timestamp of the most recent message.
3. Sidebar
Displays the list of contacts and allows switching between different chat sessions.

Props:

setId: Function to set the current chat session ID.
people: Array containing contact information.
State:

data: Stores the list of contacts.
Helper Functions
timeConvert
Converts a timestamp into a readable date format.

Parameters:

time: Timestamp to be converted.
Returns:

Formatted date string in MM/DD/YY format.
Styling
The application utilizes CSS for styling components, ensuring a consistent and responsive design across different devices. Key styles include layout configurations, color schemes, and responsive adjustments.

Deployment
The application is deployed using Vercel, a platform for frontend frameworks and static sites. Vercel offers seamless integration with Git repositories, enabling continuous deployment and scalability. 
VERCEL.COM

Getting Started
To run the application locally:

Clone the repository:
bash
Copy
Edit
git clone [repository_url]
Navigate to the project directory:
bash
Copy
Edit
cd [project_directory]
Install dependencies:
bash
Copy
Edit
npm install
Start the development server:
bash
Copy
Edit
npm start
The application will be accessible at http://localhost:3000.
License
This project is licensed under the MIT License.

