# project2
For project 2 of the DU bootcamp. I decided to make an interactive dashboard for the wildfires dataset. 
project 2 is a continuation of project 1.

For this project I continued using the data set from the IBM WildFires contest. For project one I cleaned and got rid of 
outliers in one of the five data sets included. For project 2 i used the same methods to clean (remove all NaN values), 
and remove all outliers (found z-scores and removed those outside the range 3 and -3) for the rest of the four datasets.

I then went on to start combining data sets on parameters they all share. For the interactive dashboard i decided to load the data sets 
before the merge, so i could practice loading data onto java in series\parallel. Furthermore, there was only a couple parameters (columns) that i thought 
would be able to give us a visual insight to trends.

After loading in the data I first tried to graph the data using D3, however since I didnt properly transform the date data columns i was having many issues.
Therfore, i decided to use plotly. 






