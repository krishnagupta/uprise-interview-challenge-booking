
  
# Introduction #

The purpose of this tool to be built is to make appointment booking between people a lot easier. The
usual process is to exchange mails between people till they find a convenient time which is too slow!
Use your react and node experience to build a simple booking engine. 

**You should contact us to ask questions or clarification.**

mark.santoso@uprise.co

### Project Overview ###

You need to fork this repo and create the backend project with node.js/express.js with fire store integration for data storage or firebase your choice. 

Purpose of this task is to assume you are building a calendar appointment system where users can see free slots of Dr. Jay and they can book for whatever time period when Dr. Jay is available, which is already a big component of our app.

You will need to create one collection in the firestore/firebase `events` which will hold all the events and based on events we can decide at what time you are free.

Create these static config variables for the app in firebase/firestore:

 1.  Start Hours - which will suggest at which time you want to start coach availability.
 2.  End Hours - which will suggest at which time you want to end coach availability.
 4.  Timezone - ​America/Los_Angeles

Let's say I set my availability from 10AM - 5PM and slot Duration 30 minutes so free slot API you are supposed to return all the available slots, which will suggest that any customer can book Dr. Jay at any of these times.

Example Output  
    [
    '2019-11-14T10:00:00',
    '2019-11-14T10:30:00',
    '2019-11-14T11:00:00',
    '2019-11-14T11:30:00',
    ....
    '2019-11-14T16:30:00',
    ]

In case I have an event already at 2019-11-14T10:00:00, that slot should be excluded.

### Endpoints ###

 **1.** **Free Slots:**

Params:
 - Date  
 - Timezone

Return all the free slots available for a given date converted to whatever timezone we pass.

Example:

By default the free slots will be like 10AM, 10:30AM, 11:00 AM.. so on, but that is as per the US/Eastern (or whatever you will set in config/const)

So it simply suggests Dr Jay. is available from 10AM-5PM as per US/Eastern timezone. Now if someone from India wants to book Dr. Jay they will like to see Dr. Jay timing as per IST (GMT+5:30)

So in this API you will pass Date and timezone in which you want to see Dr. Jay's availability, which will be like these in IST (GMT+5:30). You can use this in order to help you test the timings : [​https://www.thetimezoneconverter.com](https://www.thetimezoneconverter.com/)

10:30 PM
11:00 PM
...
 
 **2.** **Create event:**
 
Params:
 - DateTime (You can decide the format, timestamp or date format up to you) 
 - Duration (30 or 60min slots, INT)

Whatever data you will pass it will create the event and store that into the fire store document, if the event already exists for that time you need to return status code 422 or else just store it and return with status 200.

 **3.** **Get**​ **Events:**
 
Params:
 - StartDate  
 - EndDate

Return all the events between given StartDate & EndDate

## UI

Create an application UI with 2 sections, build your UI **exactly** to the designs attached below, the sketch file is also in this repo. 

 1. Book Event
		 - Add datepicker (to choose date)   use "react-dates" npm package
		 - Input (to add minute duration)
		 - Dropdown to pick timezone (can keep 4-5 limited option)    
		 - Get FreeSlots Button

On that button click, fetch the free slots and show them as buttons or labels on UI and on click of one of them create an event with that time.

 2. Show events (**Bonus**)
	 - Add date range picker
	On selecting any date range show all the events.

 
Feel free to ask any further details or if require any further details on this demo task.

All the very best!
 
If you finished the above task and are able to create the example UI for the same in react.js

## Uprise packages to use:

Note: Documentation is not complete. Use your development skills to work out how these components work under the hood. And please ask questions from the team for clarification.

Please use import {DayPickerSingleDateController} from "react-dates" for the calendar picker

- @uprise/button
- @uprise/card
- @uprise/grid
- @uprise/text
- @uprise/colors
- @uprise/image
- @uprise/spacing
- @uprise/typography

e.g. https://www.npmjs.com/package/@uprise/colors

5. When complete please create a PR into this repo

**Please use any relevant technologies in the Uprise stack to demonstrate your expertise. E.g. react, react functional components, redux, styled components**
![enter image description here](https://uprise-tech-support.s3-ap-southeast-2.amazonaws.com/1+%282%29.png)
![enter image description here](https://uprise-tech-support.s3-ap-southeast-2.amazonaws.com/2+%282%29.png)
![enter image description here](https://uprise-tech-support.s3-ap-southeast-2.amazonaws.com/3+%282%29.png)
![enter image description here](https://uprise-tech-support.s3-ap-southeast-2.amazonaws.com/4+%281%29.png)

![enter image description here](https://uprise-tech-support.s3-ap-southeast-2.amazonaws.com/5+%281%29.png)
