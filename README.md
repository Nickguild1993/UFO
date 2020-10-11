# UFO: WHO IS THEM, WHERE IS THEM, WHEN IS THEM

## Project Overview   

The purpose of this project was to create an app in Javascript that would filter the data.js dataset that we integrated into the **UFO FINDER** webpage.  We wanted guests to be able to filter their search on the following objects in the dataset: date, city, state, country, shape.  That way, users would be able to narrow down their search based on the values they input. They're able to use just filter for their search or all of them- the choice is theirs. Additionally,  Instead of using a "click" as an event listener, we instead fashioned one that would detect changes to the inputs and update the table according to the user's parameters.

## Results

Having their curiosity peaked after reading through the paragraphs about *them alien*, the user can search the dataset we imported from the data.js file with ease.  Instead of just searching by "date" like in the previous iteration of the website, the user can now search by "city", "state", "country", "shape" in addition to "date".  This gives them much more flexibility and control in their search. 

The image captured below displays what happens when a user inputs "1/8/2010" for the value in **date** and "tx" for the value in **state**.  The code for the event listener- ```d3.selectAll("input").on("change", updateFilters);``` then checks for the input that user gave and runs the function ```updateFilters``` to update the dataset from the original based on the values given.

![Alt_image](https://github.com/Nickguild1993/UFO/blob/main/webpage_imgs/search_parameters.png)


## Summary

-- One drawback as the webpage is currently deployed is that you cannot search by either the "duration" or "comments" parameters.  Admittedly, those would be the two hardest items to include because the "duration" isn't uniform in how it's recorded (you have mispellings of big words like minutes, among other discrepancies) so you'd have to clean the dataset using regular expressions or another method before you could make it a searchable criteria.  For the "comments" item, you could formulate the search values by keywords like "bright", "hovering", "lights" so that any comment from the dataset that included those terms would be returned in the table when searched for.

-- Additionally another drawback is that the user input values are case sensitive.  So for example, if a user wants to search for sightings in Texas, they have to explicitly put in **"tx"** (not "TX", Tx" "Texas" or any other way of way of writting out the state) otherwise, they won't get any results.  This could be frustrating for the user, especially since there is currently no way to tell if the reason you're not getting any results from your query stems from there not being any data for the given parameters, or if it's like the example mentioned above, in which the way that the values were entered led to no data being returnable.  

The image below shows how the table fails to populate correctly when a value (in this case "TX") does not match the case sensitive nature of the current iteration of the search parameters.

![Alt_image](https://github.com/Nickguild1993/UFO/blob/main/webpage_imgs/Doesnt_return_mod11.png)

Recommendations : 

-- Currently, if a user inputs values that do not return any entries from the dataset, the table all together fails to populate, which could make the user think that it's not working properly.  One thing to do would be to create an *alert* for when this happens.  by writing in an like ```alert("No results given user parameters")``` that pops up when the values given fail to yield any entries, the user will know that the issue isn't that the website failed to work, it's that the information they're looking for doesn't exist in the dataset.

-- the **shape** parameter is currently kind of a mess- there are a ton of different values for it, ranging from "fireball", to "sphere", to "unknown".  While that's understandable given that the data for that value is comprised of people trying to identify *unidentified* flying objects, it does make searching by that parameter difficult.  To make the "shape" parameter more navigable, we suggest creating a drop-down menu for the list item that holds all the values in the dataset so users know what search options are available for them.  
