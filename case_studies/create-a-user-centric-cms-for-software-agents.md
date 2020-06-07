---
date: 2020-03-29
project_date: 2020-03-24T00:00:00.000+00:00
thumbnail: https://simon-renault-dev-bucket.s3.eu-west-2.amazonaws.com/anna-portfolio/tomorrow_trumbnail.png
title: Tomorrow - Life is too short to lose time
intro: In an article published in 2018, Head of Localization Salvatore “Salvo” Giammarresi
  explained the importance of prioritizing globalization efforts at Airbnb. Now, fresh
  off the heels of a major localization milestone, we’re revisiting the topic, asking
  Salvo and Globalization Design Lead Taido Nakajima to fill us in on the tight cross-functional
  partnership that recently allowed Airbnb to launch 31 new languages across web,
  iOS, Android, and mobile web, for a total of 62 supported languages.
hero_image: https://simon-renault-dev-bucket.s3.eu-west-2.amazonaws.com/anna-portfolio/tomorrow_hero_image.png

---
## Background

**A world where we procrastinate more and more -** Our world is changing very fast, and so we change our way of living as well. Our digital technologies push us to go to the most comfortable and easiest solution, again and again. Facebook is here to make us remember our friends and relatives birthdays, Waze helps us to find the right road to take, even if it's to go to your grandma (and the road to go to grandma's home never change), and Google is never far from us to help us to convert centimeters into millimeters, uh? That's what we call "digital amnesia". It's like to plug our brain to a hard drive so that we could find the right information we're looking for. The problem is that this digital amnesia is turning into a digital dependency. We need the Internet and digital tools to live, and most of the time, we use it even if we don't really need it. The main consequence of that is our screen time that increases more and more. In the UK, [the average screen time](https://www.codecomputerlove.com/blog/screen-time-stats) is 3 hours and 23 minutes per day, and if we convert this time into days in a year, it represents 50 days per year. This is insane. Then, if you think about what kind of app you spend the most time, you realize how much time you lose in your life.

**Life is too short to lose time -** So as I've just said before, we're all able to lose time without realizing it. Postpone is also a way to lose time. We all have a bucket life, a list of crazy or less crazy dreams we want to archive. Those crazy or less crazy dreams also have something in common: we are afraid of archive it. Sometimes because it takes time, sometimes because it hard to archive and you won't see your advancement immediately.

> Dost thou love life? Then do not squander time, for it's the stuff that life is made of - Benjamin Franklin

I want to talk about Steven Pressfield, the author of "The war of art". In his book, the author writes about the concept of the resistance, a kind of toxic thing that fights against our inner genius who wants to archive our dreams. The resistance, according to Steven Pressfield, defends us to reach our dreams by making us afraid of: "I think I'm not ready yet", "today is not the good day" or worst "I still have time, I can start later". The way how Steven Pressfield personifies the concept of the resistance is very clever, and it serves to illustrate quite well the idea of procrastination. That's a perfect transition to take a look at another concept to understand how time is precious, [the life calendar](https://ezhilangunasekaran.github.io/life-calendar/): it's a 4693-box grid that represents a 90-year-old life. One box is one week. When you fill the weeks that you've already lived, it's scary to realize how much time it's left.

![](https://simon-renault-dev-bucket.s3.eu-west-2.amazonaws.com/anna-portfolio/life-calendar.png "Life calendar Representation")

###### Here is my life calendar with my 22-year-old life. Sob...

## Problems

The main issues we are facing:

* People are not motivated in the long term and give up a habit after a month
* We waste time without realizing it
* We spend too much time on screens

## Challenges

* Bring a long-term vision to a habit
* Allows users to easily visualize him or her consistency
* Bring motivation in new good habits

## Researches & Insights

![](https://simon-renault-dev-bucket.s3.eu-west-2.amazonaws.com/anna-portfolio/github_grid.png)

###### Yep, I didn't make a lot of contributions yet in Github :/

**Week pattern & Grid View -** I was previously talking about the life calendar and how it's scary to see the rest of the time we have left. If you have a Github account and you take a look at your contributions on your profile page, you can see this kind of year view. A day is represented by a square and green tints depend on how much contributions you've made. First thing, this is insane to see how much a year looks short when we look at this time view. Then, the idea of using color squares to represent days and visualize consistency through a month or a year like this way is a very clever manner.

Then, I drafted some week patterns according to different types of habits. For instance, pattern A could suit a daily habit that you want to break during weekends, whereas pattern B would be perfect for habits that could need more time in a day when you have a lot of free time on weekends (like DIY projects). The idea would be to allows users to draw their own week patterns to set days when they want to repeat the habit, and then they will be able to visualize their consistency during the current or past months.

**Challenge Friends -** We all know that launch a new habit with someone else is much more motivating that go into it alone. We help each other, give pieces of advice, and motivate friends not to give up. To integrate that possibility to share a habit with friends to challenge them sounds like a good feature to add.

**Milestones & Long-Term Vision -** One of the main pain points about building new habits is to... make it a real habit, so not to give it up. At this point, I've understood that I will need to bring a long-term vision to those habits, in order to give real value to keep it doing. Users need to feel their improvement and benefits. Then, milestones came to me as a great idea. We also need to keep going step by step and archive goals one after another.

**Day Status -** I spent some time working on the day status style: how to make the difference between days when the habit should be done, days when it's not planned, days that users missed, and today's day. I've started some iterations by using the primary color for the current day and day when the habit was done, and two other different styles for future days when it's planned and when it's not. But it turns out too complicated and less accessible because there were too many styles. I made several iterations to simplify the thing, and finally, reach a much clearer solution (the last image at the bottom right).

## Solution & Features

**Manage Habits -** On the habits screen, you'll find all the habits you've created and you can check as done habits you've done. I wanted to allows users to check habits even if those habits weren't planned for today, because sometimes we realize we can spend much more time than expected for a good habit, and that's a good thing.

Create a new habit - By creating a new habit, we'll start defining a color theme, set a name, and the aim of this new habit. Then, we'll select which days we want to repeat this habit (week pattern), set some milestones to archive, and then why not make this habit funnier by inviting some friends to do the same.

**Habit Grid** - Once we're into a habit for several weeks or months, we can see our advancement through the screen. The grey boxes represent the days we missed to do it, and the primary color represents the days we did it. And for instance, here, white boxes represent the days we're not supposed to do it because we've planned to do this habit only during weekdays.

**Miss to set a day as done -** The user will always have the possibility to set a habit as done even if the day is over ("I did it yesterday but I forgot to set it") because sometimes we just forget to check our phone and the aim is not to generate frustration or to push users to stay focus on his screen all the time.

![](https://simon-renault-dev-bucket.s3.eu-west-2.amazonaws.com/anna-portfolio/anim_day_status.gif)

###### User can change the day status even if the day is over

**Challenge Requests** - Friends can send us some challenge requests to invite us to get in a new habit with them.