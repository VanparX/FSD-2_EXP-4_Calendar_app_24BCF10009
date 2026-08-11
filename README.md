markdown
# Name: Pardhasaradhi

**UID:** 24BCF10009  
**Section:** 24BCF1-A

# Experiment 4 — Interactive Content Calendar

## Aim

To design and implement an interactive calendar interface for scheduling and managing posts.

## Objectives

- To understand time-based data visualization in UI systems.
- To implement calendar-based scheduling interfaces.
- To map structured post data to dates and time slots.
- To enable user interactions with calendar events.
- To manage calendar data using Redux Toolkit.
- To persist scheduled posts using Local Storage.
- To understand asynchronous workflows using a mock API.

## COs Mapped

**CO3 - BT3**

## Pre-requisites

- Basic knowledge of React.js.
- Understanding of JavaScript.
- Basic knowledge of Redux and state management.
- Basic understanding of date and time handling in JavaScript.

## Software Requirements

- React.js
- Vite
- React Big Calendar
- Redux Toolkit
- React Redux
- date-fns
- JavaScript
- CSS3
- Code Editor
- Web Browser

## Description / Theory

Calendars are essential UI components for representing time-based data. In applications such as social media schedulers, posts need to be mapped to specific dates and time slots.

An interactive calendar allows users to visually organize scheduled content and manage posts according to their publishing dates and times.

The application uses React Big Calendar to display scheduled posts in Month, Week, and Day views. Redux Toolkit manages application state, while Local Storage provides persistence for scheduled posts.

## Approach Used

The application follows a frontend-based content scheduling approach.

Users can select an empty date or time slot from the calendar to create a new post. A scheduling modal allows the user to enter the post title, select a social media platform, and confirm the scheduled date.

The post is added to the Redux store and persisted in Local Storage.

Users can select an existing calendar event to view its details in the Post Card section. Selected posts can also be deleted.

A mock API layer is included to demonstrate asynchronous backend-style operations without requiring a real backend server.

## Project Structure

src/
├── App.css
├── App.jsx
├── api/
│   └── postApi.js
├── assets/
│   ├── hero.png
│   ├── react.svg
│   └── vite.svg
├── components/
│   ├── calendar.jsx
│   └── postCard.jsx
├── features/
│   └── posts/
│       └── postSlice.jsx
├── index.css
├── main.jsx
├── pages/
│   └── Home.jsx
└── tests/
    └── calendar.test.jsx

## Implementation / Procedure

1. Create a React + Vite application.
2. Install the required calendar, date utility, Redux, and testing dependencies.
3. Configure Redux Toolkit and the Redux Provider.
4. Create a Redux slice for managing calendar posts.
5. Implement Local Storage for persistent post data.
6. Configure React Big Calendar using date-fns.
7. Implement Month, Week, and Day calendar views.
8. Implement post scheduling using calendar date selection.
9. Implement post selection and display.
10. Implement post deletion.
11. Create a mock API for simulated asynchronous operations.
12. Design the application interface using CSS.
13. Test the calendar and post management functionality.

## Application Flow

                    ┌──────────────┐
                    │     User     │
                    └──────┬───────┘
                           │
                           ▼
                ┌──────────────────────┐
                │ Interactive Calendar │
                └──────┬───────────────┘
                       │
             ┌─────────┴─────────┐
             │                   │
             ▼                   ▼
      ┌───────────────┐   ┌────────────────┐
      │ Select Date   │   │ Select Event   │
      └───────┬───────┘   └───────┬────────┘
              │                   │
              ▼                   ▼
      ┌───────────────┐   ┌────────────────┐
      │ Schedule Post │   │   Post Card    │
      └───────┬───────┘   └───────┬────────┘
              │                   │
              ▼                   ▼
      ┌───────────────┐   ┌────────────────┐
      │  Redux Store  │   │  Delete Post   │
      └───────┬───────┘   └───────┬────────┘
              │                   │
              └─────────┬─────────┘
                        ▼
               ┌─────────────────┐
               │  Local Storage  │
               └─────────────────┘

## Calendar Views

### Month View

Provides an overview of scheduled posts across an entire month.

### Week View

Displays scheduled posts according to individual days and time slots.

### Day View

Provides a detailed view of posts scheduled for a particular day.

## Post Scheduling

A new post can be scheduled by selecting an empty date or time slot.

The scheduling process is:

Select Date → Enter Title → Select Platform → Confirm Date → Schedule Post

The application supports:

- Instagram
- LinkedIn
- Facebook

Each platform is displayed using a different calendar event color.

## State Management

Redux Toolkit is used as the central state management system.

The application maintains:

- posts
- selectedPost

The main Redux actions are:

- addPost
- selectPost
- deletePost

Redux provides a centralized way to manage calendar events and selected post information.

## Local Storage

Scheduled posts are stored in the browser using Local Storage.

The storage key used by the application is:

calendarPosts

When the application starts, saved posts are loaded from Local Storage. Stored date values are converted back into JavaScript Date objects so that they can be correctly displayed by React Big Calendar.

## Mock API

The mock API is implemented in:

src/api/postApi.js

It demonstrates simulated asynchronous operations for:

- Fetching posts
- Creating posts
- Updating posts
- Deleting posts

This demonstrates how backend-style communication can be integrated into a frontend application.

## User Interaction

The application supports:

- Selecting a calendar date.
- Scheduling a new post.
- Switching between Month, Week, and Day views.
- Selecting an existing calendar event.
- Viewing post details.
- Deleting scheduled posts.
- Persisting posts after page refresh.

## What You Will Observe

- Sample posts are displayed when the application starts.
- Posts are mapped to specific calendar dates and times.
- Clicking an empty calendar slot opens the Schedule Post modal.
- A new post can be created by entering its title and selecting a platform.
- The new post appears immediately on the calendar.
- Clicking an existing post displays its details.
- A scheduled post can be deleted using the Post Card.
- Deleted posts are removed from the calendar and Local Storage.
- Scheduled posts remain available after refreshing the browser.
- Month, Week, and Day views provide different ways to visualize scheduled content.

## Academic Insight

Calendar systems are related to Human-Computer Interaction (HCI) and Information Visualization.

Instead of displaying scheduled posts as a simple list, the application maps them onto a temporal layout. This allows users to understand the distribution of content across dates and time slots more intuitively.

Interactive calendar interfaces improve usability by allowing users to visually organize, schedule, and manage content.

## Technologies Used

- React.js
- Vite
- React Big Calendar
- Redux Toolkit
- React Redux
- date-fns
- JavaScript
- CSS3
- Local Storage
- Vitest
- Testing Library

## How to Run the Experiment

### Install Dependencies

npm install

### Start Development Server

npm run dev

Open the Vite development server URL shown in the terminal.

Usually:

http://localhost:5173

## Testing

The project includes:

src/tests/calendar.test.jsx

The test file is intended to verify basic calendar post management operations such as:

- Adding a post.
- Selecting a post.
- Deleting a post.

Tests can be executed using the configured Vitest environment.

## Expected Outcome

The application provides a functional interactive calendar interface where users can:

- View scheduled posts.
- Schedule new posts.
- Select existing posts.
- View post details.
- Delete scheduled posts.
- Organize content using Month, Week, and Day views.
- Persist scheduled posts using Local Storage.

## Conclusion

This experiment demonstrates the implementation of an interactive calendar-based scheduling system using React.

React Big Calendar provides time-based data visualization, Redux Toolkit manages application state, and Local Storage provides client-side persistence.

The project demonstrates how structured post data can be mapped to temporal layouts and interacted with through a modern React user interface.

The implementation provides a foundation for a larger social media scheduling application that could later be connected to a real backend and external social media platforms.
