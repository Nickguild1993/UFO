# UFO: WHO IS THEM, WHERE IS THEM, WHEN IS THEM

## Overview of Project.  

The purpose of this project was to create an app in Javascript that would filter the dataset on the UFO FINDER webpage.  We wanted guests to be able to filter their search on all of the objects (keys) in the data.js file (date, city, state, country, shape).  That way, users would be able to narrow down their search based on the values they input.  Instead of using a "click" on an HTML button as an event listener, we instead fashioned one that would detect changes to the inputs and update the table according to the user's parameters.

## Results

Having their curiosity peaked after reading through the paragraphs about *them alien*, the user can search the dataset we imported from the data.js file with ease.  Instead of just searching by "date" like in the previous iteration of the website, the user can now search by "city", "state", "country", "shape" in additon to "date".  This gives them much more flexibility and control in their search.  

The image captured below displays what happens when a user inputs "1/8/2010" for the value in **date** and "tx" for the value in **state**.  The event listener then checks for the input that user gave and runs the function *updateFilters* (PUT CODE) to update the dataset based on the values given.

!(Alt_image).


## Summary

-- One drawback as the webpage is currently deployed is that you cannot search by either the "duration" or "comments" parameters.  Admittiedly, those would be the two hardest items to include because the "duration" isn't uniform in how it's recorded (you have mispellings of big words like minutes, among other discrepencies) so you'd have to clean the dataset using regular expressions or another method before you could make it a searchable criteria.  For the "comments" item, you could formulate the search values by keywords like "bright", "hovering", "lights" so that any comment from the dataset that included those terms would be returned in the table when searched for.

-- Additionally another drawback is that the user input values are case sensitive.  So for example, if a user wants to search for sightings in Texas, they have to put in "tx" (not "TX", Tx" "Texas" or any other way of writting out the state) otherwise, they won't get any results.  This could be frustrating for the user, especially since there is currently no way to tell if the reason you're not getting any results from your query stems from there being no data for the given parameters, or if it's because the manner in which values were entered led to no data being returnable.  

Recommendations : 

-- Currently, if a user inputs values that do not return any entries from the dataset, the table all together fails to appear, which could make the user think that it's not working properly.  One thing to do would be to create an *alert* for when this happens.  by writing in an alert("No results given user parameters") that pops up when the values given fail to yield any entries, the user will know that the issue isn't that the website failed to work, it's that the information they're looking for doesn't exist in the dataset.

-- the **shape** parameter is currently kind of a mess- there are a ton of different values for it, ranging from "fireball", to "sphere", to "uknown".  While that's understandable given that the data for that value is comprised of people trying to identify *literally* undentified flying objects, it does make searching by that parameter difficult.  To make the "shape" parameter more navigable, we suggest creating a drop-down menu for the list item that holds all the values in the dataset so users know what search options are available.  

Those above recommendations will help improve the user experience and keep them coming back for days on end!  