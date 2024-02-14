## DESIGN DOCUMENT

## Airline Booking System

This is a simple airline booking system that allows users to book flights, view their bookings, and cancel their bookings. The system is implemented using a RESTful API and a simple web interface.

## Requirements
- A user should be able to book a flight
- user should be able to mention the source and destination details 
- user should be select the date of journey
- user should be able to select the class of the flight
- user should be able to select no of passengers
- based on the above details we list down the available flights
- we will show the best flight available based on the user input
- we need support the pagination so that chunk of data will be displayed
- we should be able to sort the data on option available
- a user should be able to book a flight considering that user is registered on the platform 
- tracking flight prices should be possible the user should be notified about the price changes
- user should be able to list their previous bookings  and cancel the bookings
- user should be able to download the ticket in pdf format if they have done online check-in 
- online mechanism should be available for check-in
- notification to users for flight delays
- users should be able to review the flight journey if and only if they have done the booking
- user should be able to authenticate to our system  using email and password 
- user should be able to raise the support ticket if they have any issues with the booking


## Non Functional Requirements
- we can expect that  we are going to have more flight searches than flight bookings
- system need to be accurate in terms of the flight details
- expect that we will be having approx 1,00,000 total users 5,00,000 bookings might come in one quarter
-  in one day we can expect 5000 bookings
- system should be capable of scaling up at least 3x the current estimate traffic 
- the system  should handle real time updates to flight price before user makes the final booking
-concurrency should be handled handle using RDBMS should be the good solution 

### capacity estimation
- storage estimates
    - for upcoming  5 years, 80,00,000 bookings 2,00,000 users,considering all users records and booking records take 10 mb of date then 10 tb of memory should be fine for our our initial pilot run
- traffic estimates - if we consider 15:1 as the search:booking ratio  then at max we expect 50000 search queries a day, 2 query/s


## Search and Flights Service
- create Flights
- delete flights
- update flights
- search for flights
        - based om multiple filtration criteria we can search for flights
        - pagination

 

## File system
- src/
   index.js //server
   models
   controllers/
   middlewares/
   models/
   config/




