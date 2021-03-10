# project2
For project 2 of the DU bootcamp. I decided to make an interactive dashboard for the wildfires dataset. 
project 2 is a continuation of project 1.

For this project I continued using the data set from the IBM WildFires contest. For project one I cleaned and got rid of 
outliers in one of the five data sets included. For project 2 I used the same methods to clean (remove all NaN values), 
and remove all outliers (found z-scores for all numerical columns and removed those outside the range 3 and -3) for the rest of the four datasets. So,
I finally cleaned all the data sets and was ready for analysis. 

I then went on to start combining data sets on parameters they all share. For example, 3 of the data sets (fires, weather, weather forecasts) all had the columns of date and region, so i combined those three on date, so that I can compare the data for a specific date. For the interactive dashboard I decided to load the data sets 
before the merge, so I could practice loading data onto java in series\parallel. That is i wanted to find the best way to load and use multiple datasets. Furthermore, only a couple of parameters (columns) i thought would be able to give us a visual insight to trends, so I decided to graph those columns.

After loading in the data I first tried to graph the data using D3, however since I didnt properly transform the date data columns i was having many issues.
I decided to use plotly to graph, and to help visualize the data sets I graphed the following data sets and columns:
  Wild fire area vs Region (to show how the fire area changed through regions)
  Wild fire area vs Time ( To show how fire area changes for the regions through out the year)
  
  Vegetation values for each region to show how much grass/greeness each region has. I also tried to include extra parameters that explain the region area in hopes
  of seeing how each region is uniquely made.
  
To further help out with the analysis of the data sets i included web links to helpful resources. One of the links guides the user to the data parameter workbook.
This workbook explains the meaning of all the different data set parameters, but it also explains how the actual data was recorded. The other websites include the IBM website
where the 









