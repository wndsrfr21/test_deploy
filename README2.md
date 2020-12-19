<!-- ## Getting Started

First, run the development server:

```bash
npm i 

# then

npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file. -->
##  How to modify the current index page

The change in the index is related to adding a new post or removing another,because on this page loops were created on posts.
I mean, in the event that Post is added, a card will be added to the index page, and in the event that Post is deleted, the card holder will be deleted to the index.
You don't need to change this page often :smiley:


##  How to modify the current blogs

All posts in folder posts
If you need to change one, open that folder then open the post you want to change,then make your changes. 
- Change title 
- Change description 
- Change cover image
- Add new images 
- Change sections
- Change text....
### :white_check_mark: While preserving the structure of this file

It's very easy  :smiley:


##  How to add new Post 

 

First, Create file with name of the new blog in folder posts: file_name_example.md 

Second, Add title and any details in this file with this structure : 


```bash

---
title: 'First Blog'
text: 'Is Madeline Canonically Trans?'
 
createdBy : 'Kovie Biakolo,'
createdAt : 'April 5th 2013'
author: 'Cassidy'
logo_text: 'PHANTOM'
name: 'Magna'
description: 'Happiness is a choice.So I often wonder: Is sadness a choice too? Who wants?'
path: '/images/pic04.jpg'
cover: '/images/pic09.jpg'
---


Well, yeah, of course she is. This feels painfully obvious to a lot of (mostly trans) people, and likewise it feels painfully obvious to me too, in retrospect. It has also become painfully obvious to me that I, myself, am trans. But these are things that I was not aware of during the development of Celeste, where I was writing Madeline and speaking from her perspective. Creating Celeste with my friends helped me reach the point where I could realize this truth about myself. During Celeste’s development, I did not know that Madeline or myself were trans. During the Farewell DLC’s development, I began to form a hunch. Post-development, I now know that we both are.

``` 

then push your file to CircleCI with this commands: 

```bash

Git add . && git commit –m "message of commit" && git push 

```
Open [https://blog-test-player.web.app/](https://blog-test-player.web.app/) :link: :globe_with_meridians: :fire: :rocket: with your browser to see the result.

 

 

 
 


