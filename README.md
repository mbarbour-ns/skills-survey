# skills-survey
Custom survey app

# Why do this?
- Improve the quality of the question:  This survey is using a new style of survey 
UI that I developed in an attempt to improve the level of predicatbility when polling 
for skills.  "Beginner", "Medium", "Advanced" are completely subjective answers and 
do not inform us about the basic question of "what can you do?", when posed to an 
engineer. Asking for capabilities is more informative than asking for a general 
characterization of abilities.
- establishing a performance metric will, in turn, improve our search abilities.  
- establishing a performance metric will allow us to set up a threshold to trigger
training to fill gaps in areas that have been identified as critical
- idetifying the critical areas will focus training curriculum to fit the actual 
need.  We can tailor training to target exactly what we need, which could lead to 
reduced and more effective training times.
- for practical uses by delivery/sales, a table with the definitions of a type of
resource will allow them to create custom resoource types to allow for quick searches
for desired skills.  Also, custom types can be copied fromm existing resources that
are desirable


# TECHNICAL/DESIGN DATABASE DISCUSSION
How to architect the tables:
Assume there will be 30,000 users, multi regions
If there is a single directory table w/ all results, this will be bad
The best architecture will be using distributed tables:
- by individual: performance region yada yada
- The "individual" table will have a single record per survey, but will be very wide.  
Since it is not going to be a large table, since there will only be one recoprd for each 
survey taken, there won't be searching performance problems.
datetime, version, subject1, measureMap1, measureMap1, measureMap1, measureMap1, measureMap1, measureMap1, ...

- This will allow the database to be managed better for load, as well.  In the future, as set 
of user/subjects can be moved to separate databases.  The main directory can have a record for
every instance of a test, but this is for presentation only(?).  Or have the UI be able to 
select regions/instances to inspect those results, leaving your home region to be the highest
performing instance for you, while the guy in india uses that one.
- There will need to be a version control table, for the versions of subjects.  The app will 
read the version control table, and then read the individual table and apply the subject items
to the UI based on the version control table definition.  Thus, the numbers of items, and even
different subjects, can change over time.  This will mean that there will be a subject control
table, and the items tables will be built on the y-axis so that they can expand, using this;
"version, datetime, label, type"

