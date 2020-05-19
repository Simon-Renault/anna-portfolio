---
date: 2020-03-29
project_date: 2020-06-17T23:00:00Z
thumbnail: https://simon-renault-dev-bucket.s3.eu-west-2.amazonaws.com/anna-portfolio/hello.png
title: Nomad. Plan an eco-friendly road-trip among friends
intro: ddggggddddddddfggfggfgf

---
## 📄 Brief / Intro

I love travel and I've always love. If you ask me what is the thing I would love to do for the rest of my life, it will be travelling, for sure. But we realise more and more that travelling cost a lot for the planet, and it's not for sure the best ecological activity to do. Stop it? No way! As a designer, I usually say that there's always a solution. Nomad is an app to help travellers to organise a eco-friendly and sustainable road-trip.

## 🌍 Background

![](https://simon-renault-dev-bucket.s3.eu-west-2.amazonaws.com/anna-portfolio/hello.png)

### Eco-Friendly Road-Trip

**Eco-Friendly Road-Trip -** As I've just said previously, travelling and respecting environment are two things that can work together. If we make some efforts, we realise that the most of activities we love to do could be done in a sustainable way. We can first prefer public transports, bike or even our own foots to travel. Then we can buy products to local sellers in the country we're visiting. We can sleep at local people's home to generate money for local people, rather than huge international resorts, or we can use our own tent while respecting nature around us without generate waste. There are so many alternatives and much more opportunities and adventures to live by this way of travelling.

### Planning a sustainable trip

But why the most of the people don't travel this way? Here's the pain point I wanted to work on. If we want to organise a road-trip with our own car and explode our carbon footprint, we have to be organised, for sure, but we can leave when we want, eat when we want, go and back whenever. Now, if we decide to make this road-trip more sustainable and eco-friendly, we will use public transports, so we will need to be very organised to be aware of bus or train timetables - or if we want to ride Europe by bike, we will need to plan some breaks and know routes we should take to ride quietly (as the EuroVelo, a cycle route network all around the Europe).

I've made a road-trip with two amazing friends in Kyushu island, in Japan, during 3 weeks last March. We had no car, we were in Japanese countryside (so with a very few choices in terms of public transport), but we travelled around 10 cities in Kyushu. I let you imagine the kind of organisation we needed for this road-trip. Funny thing is over there, everyone ask us "But, you don't have any car?". One day, a women was shocked to learn that we've planned to go down a mount by foot, even if it will take 4 hours (well my friend explains her we aim to get the Shakira's body). So if we succeed to travel with no car even in the Japanese countryside where bus timetables are only available on paper in situ, so I'm sure travelling in Europe in eco-friendly manner is not so complicated.

### Save time and get better organised

During this trip in Japan, we've realised we needed a tool to help us to organised this big adventure. Of course, there was a lot of tools available for us: Google Docs, Trello, Google Maps. A lot of tools, but nothing to gather everything and make it practical. Google Docs is nice to gather information, but even if you rather comments and table of contents, your document quickly became messy. Trello is better to gather information by a semantic way, but as Google Docs, you can't visualise your planning in time and space (agenda and map features are missing). We spend 3 days to plan our trip, but we realised if we had a better tool to help us, we would be able to spend less time.

## Problems

So to sum up, the aim problems people faced are:

* Organize a trip without make it messy
* Visualize and understand a trip path with a simple way
* Gather information in a single platform

## Challenges

* Create a clean and sharable platform to gather information without make it messy
* Allow users to visualize the trip in time and space
* Help users to find solutions and alternatives to travel by a sustainable way

## Research & Insights

**\[mind map\]**

Facing this issue, I started to quickly draw a mindmap. This helped me to get out of the lines and consider other alternatives I've didn't think about, as the idea of collaboration with polls, or the differentiation of types of stops (route, housing, meal) to better visualise the trip path.

### Shared Platform

When we travel with some buddies, we need a shared platform to gather informations, researches and thoughts. That where I've started to build my project. The aim was to find a easy and visual way to share thoughts, so polls and comments were two solutions I wanted to add as features to the app.

### Checklist and Organisation

Making lists is still one of the best and easier way to plan things and be sure not to forget anything. Integrate a checklist feature became clear to me, as well as give to travellers some advise, espacially how to travel in sustainable manner.

### Open Data

Thanks to open-data world, it would be easy to integrate a map based on Google data, so that users are able to find every places they want to add to their trip. The aim is to add a location directly from the app into their trip.

### Dual-Visualisation

It seems important to me to be able to visualise a trip both in time and in space, espacially when you want to plan many things in advance. In most cases, road trip is a long journey so travellers needs to visualize their trip on a one-month scale and even more. Having this dual visualisation allows travellers to better take decision and see opportunities like - "hey, this place is near from another one we already visit, so we can go there too" or "ho, as we can see on the map, there are so many things to see there, and according to the agenda, we still have a few days, so we spend one more night there".

### Categorisation & Journey Schema

To talk about visualisation again, stop categorisation is something important. If travellers have many stops during few days, visually differentiate roads, activities and accommodations would make it easier to understand the journey schema.

## Solution & Features

### Trips List

The entry point of the app would be the trips list. An attractive visual is quite important espacially here to drive travellers to enter. Once we click on a trip, different actions are possible: browse the trip, edit it or delete it.

### Browse Trip

When we select "view" on the previous screen, we can browse the trip through this page. Three call-to-action buttons allow us to access quickly to the three main features: agenda, map and checklist. By scrolling, we can have a short preview of those three features.

### Create a new stop

Create a new stop to the trip should be quick to do. As information is needed, we can to fill some additional details (date, location, type of activity), but because there's so many edge cases, some items such as date, description, external link, poll and location are not required. When we want to create a new stop from an external link thanks to the "share" button from our browser, external link and title will be pre-filled, to make it easier and quicker. Same when we create a new stop from the internal map of the app, title and location will be pre-filled. Create a new stop from Google Maps or other apps would be possible as well, as soon as informations can be extract from the app.

### Polls

When user create a new stop, it's possible to create a poll inside it. It will drive travellers express opinions easily and so to take decisions more quickly. When you haven't voted yet, for sure you can't see poll results, so not to be influenced. Travellers can discuss about a decision thought comments.

### Map - Itinerary

The first thing we will see when we open the map will be the different stops of the itinerary on the map and the next stop highlight on a card in the buttom. When we drag the card to the top, we can have a detailled view of the itinerary with all the stops. The selected stop (in green) will be defined according to the current position of the user.

### Map - Explore Places

We are also able to explore some places and directly add it to our trip. We can remove a stop from the trip with "remove" or share this place into another app (Google Maps for instance to start navigation). Travel duration is also indicated to inform travellers.

### Agenda

I decided to design two different view in the agenda:

* a calendar view, in order to visualise the trip though months, and have a all-day stops view
* a schedule view, to visualise, month by month, all the stops

In the both cases, colors and icons allows travellers to easily differenciate stops types (routes, meals, nature, city, housing) in order to better understand the journey schema.

### Checklists

Finally, travellers can create checklists. Thise checklists can be private, public, or shared only with some friends

## Conclusion

Even if my conviction about travelling with a sustainable manner is strong, my aim though this app was not to push people to do this way, but to make things easier for those who want.

This solution allows travellers to feel free about the way to organise their trip. Some travellers prefer having a very strict schedule, so the agenda feature would be suits them - whereas some others want to stay flexible, so checklist and map would be enough.