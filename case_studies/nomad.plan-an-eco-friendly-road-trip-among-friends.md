---
date: 2020-06-07
project_date: 2020-06-09T23:00:00.000+00:00
thumbnail: https://simon-renault-dev-bucket.s3.eu-west-2.amazonaws.com/anna-portfolio/nomad_trumbnail.png
title: Nomad. Plan an eco-friendly road-trip among friends
intro: I love to travel and I'll always love it. If you ask me what is the thing I
  would love to do for the rest of my life, it will definitively be traveling. But
  we realize more and more that traveling costs a lot for the planet, and it's not
  for sure the best ecological activity to do. Stop it? No way! As a designer, I usually
  say that there's always a solution. Nomad is an app to help travellers to organize
  an eco-friendly and sustainable road-trip.
hero_image: https://simon-renault-dev-bucket.s3.eu-west-2.amazonaws.com/anna-portfolio/nomad_hero_image.png

---
## Background 

**Eco-Friendly Road-Trip -** As I've just said previously, traveling and respecting the environment are two things that can work together. If we make some efforts, we realize that most of the activities we love to do could be done more sustainably. We can first prefer public transports, bike or even our own feet to travel. Then we can buy products to local sellers in the country we're visiting. We can sleep at people's homes to generate money for local people, rather than huge international resorts, or we can use our tent while respecting nature around us without generating waste. There are so many alternatives and many more opportunities and adventures to live in this way of traveling.

**Planning a sustainable trip -** But why most of the people don't travel this way? Here's the pain point I wanted to work on. If we want to organize a road trip with our car and explode our carbon footprint, we have to be organized, for sure, but we can leave when we want, eat when we want, go and back whenever. Now, if we decide to make this road-trip more sustainable and eco-friendly, we will use public transports, so we will need to be aware of bus or train timetables - or if we want to ride Europe by bike, we will need to plan some breaks and to know routes we should take to ride quietly (as the EuroVelo, a cycle route network all around Europe).

I've made a road-trip with two amazing friends on Kyushu island, in Japan, for 3 weeks last March. We had no car, we were in the Japanese countryside (so with very few choices in terms of public transport), but we traveled around 10 cities in Kyushu. I let you imagine the kind of organization we needed for this road-trip. Funny thing is over there, everyone asks us "But, you don't have any car?". One day, a woman was shocked to learn that we've planned to go down a mount on foot, even if it will take 4 hours (well my friend explains her we aim to get Shakira's body). So if we succeed to travel without a car even in the Japanese countryside where bus timetables are only available on paper in situ, I'm sure that traveling in Europe in an eco-friendly manner is not so complicated.

**Save time and get better organized -** During this trip to Japan, we've realized we needed a tool to help us to organize this big adventure. Of course, there were a lot of tools available for us: Google Docs, Trello, Google Maps. A lot of tools, but nothing to gather everything and make it practical. Google Docs is nice to gather information, but even if you rather using comments and tables of contents, your document quickly became messy. Trello is better to gather information semantically, but as Google Docs, you can't visualize your planning in time and space (agenda and map features are missing).

> We spend 3 days to plan our trip, but with a better tool, we would be able to spend less time.

## Problems

The main problems people faced are:

* Organize a trip without making it messy
* Visualize and understand a trip path with a simple way
* Gather information in a single platform

## Challenges

* Create a clean and sharable platform to gather information without making it messy
* Allow users to visualize the trip in time and space
* Help users to find solutions and alternatives to travel in a sustainable way

## Research & Insights

Facing this issue, I started to quickly draw a mindmap. This helped me to get out of the lines and consider other alternatives I've didn't think about before, as the idea of collaboration with polls, or the differentiation of stops types (route, housing, meal) to better visualize the trip schema.

![](https://simon-renault-dev-bucket.s3.eu-west-2.amazonaws.com/anna-portfolio/mindmap.png)

###### Mindmap

**Shared Platform -** When we travel with some buddies, we need a shared platform to gather information, researches, and thoughts. That where I've started to build my project. The aim was to find an easy and visual way to share thoughts, so polls and comments were two solutions I wanted to add as features to the app.

![](https://simon-renault-dev-bucket.s3.eu-west-2.amazonaws.com/anna-portfolio/schema.jpg)

###### Shared Platform

**Checklist and Organisation -** Making lists is still one of the best and easier way to plan things and be sure not to forget anything. Integrate a checklist feature became clear to me, as well as to give some pieces of advice to travelers, especially how to travel sustainably.

**Map -** Integrate a Google-based map so that users can find every place they want to add to their trip. The aim is to add a location to your trip directly from the app.

**Dual-Visualisation -** It seems important to me to be able to visualize a trip both in time and in space, especially when you want to plan many things. In most cases, a road trip is a long journey so travelers need to visualize their trip on a one-month scale and even more. Having this dual visualization allows travelers to better make decisions and see opportunities like - "hey, this place is near from another one we already visit, so we can go there too" or "ho, as we can see on the map, there are so many things to see there, and according to the agenda, we still have a few days, so we spend one more night there".

**Categorization & Journey Schema -** To talk about visualization again, the categorization of all the different stops is something important. If travelers have many stops during a few days, to visually differentiate roads, activities, and accommodations would make it easier to understand the journey schema.

## Solution & Features

**Trips List -** The entry point of the app would be the trips list. An attractive visual is quite important especially here to drive travelers to enter.

![](https://simon-renault-dev-bucket.s3.eu-west-2.amazonaws.com/anna-portfolio/trips-list.png)

###### Trips List

**Browse Trip -** When we select a trip on the previous screen, we can browse it through this page. Three call-to-action buttons allow us to access quickly to the three main features: agenda, map, and checklist. By scrolling, we can have a short preview of those three features.

![](https://simon-renault-dev-bucket.s3.eu-west-2.amazonaws.com/anna-portfolio/home.gif)

###### Home Screen (left) - Notifications (right)

**Create a new stop -** Create a new stop to the trip should be quick to do. As information is needed, we can fill some additional details (date, location, type of activity), but because there are so many edge cases, some items such as date, description, external link, poll, and location are optional. When we want to create a new stop from an external link thanks to the "share" button from our browser, external link and title will be pre-filled, to make it easier and quicker. Same when we create a new stop from the internal map of the app, name and location will be pre-filled. Create a new stop from Google Maps or other apps would be possible as well, as soon as information can be extracted from the app (name, location).

![](https://simon-renault-dev-bucket.s3.eu-west-2.amazonaws.com/anna-portfolio/new_stop.png)

###### Add a new stop to the trip

**Polls -** When the user creates a new stop, it's possible to create a poll inside it. It will drive travelers to express opinions easily and so to make decisions quicker. When you haven't voted yet, for sure you can't see poll results, so not to be influenced. Travelers can discuss decision thought comments.

![](https://simon-renault-dev-bucket.s3.eu-west-2.amazonaws.com/anna-portfolio/polls.png)

###### Poll

**Maps & Itinerary -** The first thing we will see when we open the map will be the different stops of the itinerary on the map and the next stop highlight on the bottom-sheet. When we drag this bottom-sheet to the top, we can have a detailed view of the itinerary with all the stops. The selected stop (in green) will be defined according to the current position of the user/

![](https://simon-renault-dev-bucket.s3.eu-west-2.amazonaws.com/anna-portfolio/map-itinerary.png)

###### Trip itinerary

**Map & Explore Places -** We are also able to explore some places and directly add it to our trip. We can remove a stop from the trip with "remove" or share this place into another app (Google Maps for instance to start navigation). Travel duration is also indicated to inform travelers.

![](https://simon-renault-dev-bucket.s3.eu-west-2.amazonaws.com/anna-portfolio/map-place.png)

###### Explore a place

**Agenda -** I decided to design two different views on the agenda:

* a calendar view, to visualize the trip though months, and have the view of an all-day stops
* a schedule view, to visualize, month by month, all the stops

In both cases, colors and icons allow travelers to easily differentiate stops types (routes, meals, nature, city, housing) to better understand the journey schema.

![](https://simon-renault-dev-bucket.s3.eu-west-2.amazonaws.com/anna-portfolio/agenda.gif)

###### Agenda - Calendar View (left) - Schedule View (right)

**Checklists -** Finally, travelers can create checklists. These checklists can be private, public, or shared only with some friends

![](https://simon-renault-dev-bucket.s3.eu-west-2.amazonaws.com/anna-portfolio/checklist.gif)

###### Tips (left) - Create a new item in a checklist (right)

## Conclusion

Even if my conviction about traveling with a sustainable manner is strong, my aim though this app was not to push people to do this way, but to make things easier for those who want.

This solution allows travelers to feel free about the way to organize their trip. Some travelers prefer having a very strict schedule, so the agenda feature would suit them - whereas some others want to stay flexible, so checklist and map would be enough.