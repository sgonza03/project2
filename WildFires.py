#!/usr/bin/env python
# coding: utf-8

# In[1]:


import csv
import pandas as pd
import seaborn as sns
import matplotlib.pyplot as plt
import numpy as np
import os
from scipy import stats
from sklearn.tree import DecisionTreeRegressor
from sklearn.preprocessing import StandardScaler
from sklearn import linear_model
from sklearn.metrics import mean_squared_error, r2_score
from sklearn.model_selection import train_test_split

get_ipython().run_line_magic('matplotlib', 'inline')


# In[2]:


#Bring excel file into python
wildfire_df = pd.read_csv(r'C:\Users\gonza\Documents\Projects\wildfires\Nov_10\Historical_Wildfires.csv', low_memory = False,)
#print(wildfire_df)
#Bring excel file into python
weather_df = pd.read_csv(r'C:\Users\gonza\Documents\Projects\wildfires\Nov_10\HistoricalWeather.csv', low_memory = False,)
#print(weather_df)
#Bring excel file into python
forecast_df = pd.read_csv(r'C:\Users\gonza\Documents\Projects\wildfires\Nov_10\HistoricalWeatherForecasts.csv', low_memory = False,)
#print(forecast_df)
#Bring excel file into python
land_df = pd.read_csv(r'C:\Users\gonza\Documents\Projects\wildfires\Nov_10\LandClass.csv', low_memory = False,)
print(land_df)
#Bring excel file into python
vegetation_df = pd.read_csv(r'C:\Users\gonza\Documents\Projects\wildfires\Nov_10\VegetationIndex.csv', low_memory = False,)
#print(vegetation_df)


# In[3]:


#some of our data has dates so we first change those.
#the ones that have dates are: wildfires,weather,forecast, vegetation
wildfire_df['Date'] = pd.to_datetime(wildfire_df['Date'])
wildfire_df.head() ###.head() shows us if we have dataframe... which we do now!!!


# In[4]:


weather_df['Date'] = pd.to_datetime(weather_df['Date'])
weather_df.head()


# In[5]:


forecast_df['Date'] = pd.to_datetime(forecast_df['Date'])
forecast_df.head()


# In[6]:


vegetation_df['Date'] = pd.to_datetime(vegetation_df['Date'])
vegetation_df.head()


# In[7]:


### Now we start checking data for wildfire
wildfire_df.dtypes
#we have a bunch of floats/int 


# In[8]:


print(f"Number of records: {len(wildfire_df)} ")
#print(f"Number of regions:{len(wildfire_df['Region'].unique()}")
print(wildfire_df['Region'].unique())


# In[9]:


# check for missing values
wildfire_df.isna().sum()


# In[10]:


#dropped rows containing missing values, since we cant tell how reliable data was
wf_df = wildfire_df.dropna(axis=0)
wf_df.isna().sum()
print(f"Number of records: {len(wf_df)} ")


# In[11]:


#Use z score to find any outliers, only care about int columns so get those columns first
wf_shrinked = wf_df.loc[:,["Estimated_fire_area","Mean_estimated_fire_brightness","Mean_estimated_fire_radiative_power","Mean_confidence","Std_confidence","Var_confidence","Count"]]
wf_shrinked.head()
z_wild = np.abs(stats.zscore(wf_shrinked))
print(z_wild)


# In[12]:


#Now we get the last remaining data without outliers 9z score over 3 is outlier
clean_wild_df = z_wild[(z_wild < 3).all(axis=1)]
print(f"Number of records: {len(clean_wild_df)} ")


# In[13]:


#
cwild_df = pd.DataFrame(data = clean_wild_df)
plt.figure(figsize=(16, 6))
x = cwild_df['Estimated_fire_area']
y = cwild_df['Mean_estimated_fire_brightness']
plt.plot(cwild_df, x, y) 
plt.show() 


# In[ ]:





# In[ ]:


#merge back to get corresponding dates/replaced to clean data
 = pd.merge( on = "Date","Replaced")


# In[ ]:


#Plotting final weather data...


# In[ ]:





# In[ ]:


##Our second data set to analyze 
weather_df.head()
# rename columns
weather_df = weather_df.rename(columns={"count()[unit: km^2]": "Area", "min()": "Min",
                                       "max()": "Max", "mean()": "Mean", "variance()": "Variance"})


# In[ ]:


### Now we start checking data for weather
weather_df.dtypes


# In[ ]:


print(f"Number of records: {len(weather_df)} ")


# In[ ]:


# check for missing values
weather_df.isna().sum()


# In[ ]:


#no missing value so look for outliers
#Use z score to find any outliers, only care about int columns so get those columns first
weather_shrinked = weather_df.loc[:,["Area","Min","Max","Mean","Variance"]]
weather_shrinked.head()
z_weather = np.abs(stats.zscore(weather_shrinked))
print(z_weather)


# In[ ]:


#Now we get the last remaining data without outliers 9z score over 3 is outlier
clean_weather_df = z_weather[(z_weather < 3).all(axis=1)]
print(f"Number of records: {len(clean_weather_df)} ")


# In[ ]:


#merge back into original data to get dates again


# In[ ]:


#using land data to visualize the area/autralia makeup
land_df


# In[ ]:


#
plt.figure(figsize=(16, 6))
sns.set(style="whitegrid")
g = sns.lineplot(x="Shrubs", y="Open sea",hue='Region', data=land_df)
plt.legend(loc='best')


# In[ ]:





# In[25]:


#move dataframe over
cwild_df = pd.DataFrame(data = clean_wild_df)
import pymongo
from pymongo import MongoClient


# In[27]:


# build a new client instance for MongoClient
conn = 'mongodb://localhost:27017'
client = pymongo.MongoClient(conn)
#db = client.MongoClient(conn)
# create new database and client collection
col = db.pandas_collection
db = client.fire_db
wildf = db.wildf


# In[ ]:





# In[28]:


#insert data into mongo
wildf.insert_one(cwild_df)
# Verify results:
results = wildf.find()
for result in results:
    print(result)


# In[24]:


#Insert other datasets


# In[ ]:




